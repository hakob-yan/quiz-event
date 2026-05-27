import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import type { RsvpEntry } from "@/lib/types";

// Filesystem-backed RSVP store. Lives at the project root so non-developers
// can find and edit it manually if needed.
// NOTE: this only works in environments with a writable filesystem
// (local dev, Docker, VPS). Vercel's serverless runtime is read-only.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const ROOT = process.cwd();
const RSVP_FILE = path.join(ROOT, "rsvps.json");
const UPLOAD_DIR = path.join(ROOT, "public", "uploads");
const MAX_SELFIE_BYTES = 2 * 1024 * 1024; // 2MB

async function readEntries(): Promise<RsvpEntry[]> {
  try {
    const raw = await fs.readFile(RSVP_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeEntries(entries: RsvpEntry[]) {
  await fs.writeFile(RSVP_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

// Stable id from name + seed so the same person re-submitting overwrites instead of duplicating.
function stableId(firstName: string, lastName: string, avatarSeed: string) {
  return crypto
    .createHash("sha1")
    .update(`${firstName.toLowerCase()}|${lastName.toLowerCase()}|${avatarSeed}`)
    .digest("hex")
    .slice(0, 16);
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
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  const fname = `${id}.${ext}`;
  await fs.writeFile(path.join(UPLOAD_DIR, fname), buf);
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

  const id = stableId(firstName, lastName, avatarSeed);
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
    createdAt: Date.now(),
  };

  const list = await readEntries();
  const existing = list.findIndex((e) => e.id === id);
  if (existing >= 0) {
    // Preserve original createdAt so re-submissions don't jump in the list.
    entry.createdAt = list[existing].createdAt;
    // Keep old selfie if no new one was uploaded this time.
    if (!entry.selfieUrl && list[existing].selfieUrl) {
      entry.selfieUrl = list[existing].selfieUrl;
    }
    list[existing] = entry;
  } else {
    list.push(entry);
  }
  await writeEntries(list);

  return NextResponse.json({ ok: true, entry, count: list.length });
}
