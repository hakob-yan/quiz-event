import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import type { QuizAnswer, RsvpEntry, Verdict } from "@/lib/types";
import { uploadDir, readEntries, writeEntries } from "@/lib/rsvpStore";
import {
  YEREVAN_POPULAR_MEETUP_SPOTS,
  MEETUP_TIME_SLOTS,
} from "@/lib/armenianContent";

const VALID_SPOTS = new Set<string>(YEREVAN_POPULAR_MEETUP_SPOTS.map((s) => s.englishName));
const VALID_TIMES = new Set<string>(MEETUP_TIME_SLOTS.map((t) => t.value));

// Filesystem-backed RSVP store. Lives at the project root so non-developers
// can find and edit it manually if needed.
// NOTE: this only works in environments with a writable filesystem
// (local dev, Docker, VPS). Vercel's serverless runtime is read-only.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_SELFIE_BYTES = 2 * 1024 * 1024; // 2MB

// Stable id from name + seed so the same person re-submitting overwrites instead of duplicating.
function stableId(firstName: string, lastName: string, avatarSeed: string) {
  return crypto
    .createHash("sha1")
    .update(`${firstName.toLowerCase()}|${lastName.toLowerCase()}|${avatarSeed}`)
    .digest("hex")
    .slice(0, 16);
}

function sanitizeQuizAnswers(input: unknown): QuizAnswer[] | undefined {
  if (!Array.isArray(input)) return undefined;
  const cleaned: QuizAnswer[] = [];
  for (const item of input.slice(0, 10)) {
    if (typeof item !== "object" || item === null) continue;
    const it = item as Record<string, unknown>;
    const questionId = Number(it.questionId);
    const optionIdx = Number(it.optionIdx);
    const question = typeof it.question === "string" ? it.question : "";
    const selectedOption =
      typeof it.selectedOption === "string" ? it.selectedOption : "";
    if (
      !Number.isFinite(questionId) ||
      !Number.isFinite(optionIdx) ||
      optionIdx < 0 ||
      optionIdx > 3 ||
      !question ||
      !selectedOption
    ) {
      continue;
    }
    cleaned.push({
      questionId,
      optionIdx,
      question: question.slice(0, 300),
      selectedOption: selectedOption.slice(0, 200),
    });
  }
  return cleaned.length ? cleaned : undefined;
}

function sanitizeVerdict(input: unknown): Verdict | undefined {
  return input === "success" || input === "fail" ? input : undefined;
}

function sanitizeSpot(input: unknown): string | undefined {
  return typeof input === "string" && VALID_SPOTS.has(input) ? input : undefined;
}

function sanitizeTime(input: unknown): string | undefined {
  return typeof input === "string" && VALID_TIMES.has(input) ? input : undefined;
}

// Telegram + Instagram handles: alphanumeric, dot, underscore. Strip optional
// leading @ and any whitespace. Empty / invalid → undefined (not stored).
function sanitizeHandle(input: unknown, max = 32): string | undefined {
  if (typeof input !== "string") return undefined;
  let v = input.trim();
  if (v.startsWith("@")) v = v.slice(1);
  v = v.slice(0, max);
  if (!v) return undefined;
  return /^[A-Za-z0-9._]+$/.test(v) ? v : undefined;
}

function sanitizePhone(input: unknown): string | undefined {
  if (typeof input !== "string") return undefined;
  const v = input.trim().slice(0, 30);
  if (!v) return undefined;
  return /^[\d+\s().\-]{4,}$/.test(v) ? v : undefined;
}

async function persistSelfie(selfie: string | null, id: string): Promise<string | null> {
  if (!selfie || typeof selfie !== "string" || !selfie.startsWith("data:image/")) {
    return null;
  }
  const match = selfie.match(/^data:image\/([a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) return null;
  const ext = match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase();
  const buf = Buffer.from(match[2], "base64");
  if (buf.length === 0 || buf.length > MAX_SELFIE_BYTES) return null;
  const dir = uploadDir();
  await fs.mkdir(dir, { recursive: true });
  const fname = `${id}.${ext}`;
  await fs.writeFile(path.join(dir, fname), buf);
  return `/uploads/${fname}`;
}

export async function GET() {
  const list = await readEntries();
  return NextResponse.json({
    count: list.length,
    entries: list.slice().reverse(),
  });
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const avatarSeed = String(body.avatarSeed ?? "");

  if (!firstName || !lastName) {
    return NextResponse.json({ error: "Անունն ու Ազգանունը պարտադիր են" }, { status: 400 });
  }

  // If the client sent forceId (because their device localStorage already
  // remembers a prior RSVP), reuse it so we update that entry in place. This
  // is what lets the user redo the quiz / change their name without spawning
  // a duplicate row.
  const requestedId =
    typeof body.forceId === "string" && /^[a-f0-9]{4,32}$/.test(body.forceId)
      ? body.forceId
      : null;
  const computedId = stableId(firstName, lastName, avatarSeed);

  const list = await readEntries();
  let existingIdx = -1;
  let id = computedId;
  if (requestedId) {
    const idx = list.findIndex((e) => e.id === requestedId);
    if (idx >= 0) {
      existingIdx = idx;
      id = requestedId;
    }
  }
  if (existingIdx < 0) {
    existingIdx = list.findIndex((e) => e.id === computedId);
  }

  const selfieUrl = await persistSelfie(
    typeof body.selfie === "string" ? body.selfie : null,
    id,
  );

  const entry: RsvpEntry = {
    id,
    firstName: firstName.slice(0, 60),
    lastName: lastName.slice(0, 60),
    nickname: String(body.nickname ?? "").slice(0, 80),
    title: String(body.title ?? "").slice(0, 80),
    patriotismScore: Math.max(0, Math.min(100, Number(body.patriotismScore) || 0)),
    avatarSeed,
    styleIdx: Math.max(0, Math.min(4, Number(body.styleIdx) || 0)),
    overlayIdx: Math.max(0, Number(body.overlayIdx) || 0),
    selfieUrl,
    quizAnswers: sanitizeQuizAnswers(body.quizAnswers),
    verdict: sanitizeVerdict(body.verdict),
    meetupSpot: sanitizeSpot(body.meetupSpot),
    meetupTime: sanitizeTime(body.meetupTime),
    telegram: sanitizeHandle(body.telegram),
    instagram: sanitizeHandle(body.instagram, 30),
    phone: sanitizePhone(body.phone),
    createdAt: Date.now(),
  };

  if (existingIdx >= 0) {
    const prev = list[existingIdx];
    // Preserve original createdAt so re-submissions don't jump in the list.
    entry.createdAt = prev.createdAt;
    // Keep prior data when the new submission omits a field.
    if (!entry.selfieUrl && prev.selfieUrl) entry.selfieUrl = prev.selfieUrl;
    if (!entry.quizAnswers && prev.quizAnswers) entry.quizAnswers = prev.quizAnswers;
    if (!entry.verdict && prev.verdict) entry.verdict = prev.verdict;
    if (!entry.meetupSpot && prev.meetupSpot) entry.meetupSpot = prev.meetupSpot;
    if (!entry.meetupTime && prev.meetupTime) entry.meetupTime = prev.meetupTime;
    if (!entry.telegram && prev.telegram) entry.telegram = prev.telegram;
    if (!entry.instagram && prev.instagram) entry.instagram = prev.instagram;
    if (!entry.phone && prev.phone) entry.phone = prev.phone;
    list[existingIdx] = entry;
  } else {
    list.push(entry);
  }
  await writeEntries(list);

  return NextResponse.json({ ok: true, entry, count: list.length, replaced: existingIdx >= 0 });
}
