// Server-only — uses Node `fs`. Do NOT import this from client components.
import "server-only";
import { promises as fs } from "fs";
import path from "path";
import type { RsvpEntry } from "@/lib/types";

// Lazy paths — computed per call so the static dependency tracer doesn't
// see process.cwd() at module init time and mark the whole project as traced.
function rsvpFile() {
  return path.join(process.cwd(), "rsvps.json");
}
export function uploadDir() {
  return path.join(process.cwd(), "public", "uploads");
}

export async function readEntries(): Promise<RsvpEntry[]> {
  try {
    const raw = await fs.readFile(rsvpFile(), "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeEntries(entries: RsvpEntry[]) {
  await fs.writeFile(rsvpFile(), JSON.stringify(entries, null, 2), "utf-8");
}

export async function findEntry(id: string): Promise<RsvpEntry | null> {
  if (!id) return null;
  const list = await readEntries();
  return list.find((e) => e.id === id) ?? null;
}
