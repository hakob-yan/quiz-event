"use client";

import { createAvatar } from "@dicebear/core";
import { adventurer, funEmoji, bottts, micah, lorelei } from "@dicebear/collection";

const BG_COLORS = ["d90012", "0033a0", "f2a800", "ffcc00"];

export function generateAvatarDataUri(seed: string, idx = 0) {
  const i = ((idx % 5) + 5) % 5;
  // DiceBear styles each have unique Options shapes, so we can't store them
  // together in a typed array — switch keeps the per-call types intact.
  switch (i) {
    case 0:
      return createAvatar(adventurer, { seed, backgroundColor: BG_COLORS, radius: 50 }).toDataUri();
    case 1:
      return createAvatar(funEmoji, { seed, backgroundColor: BG_COLORS, radius: 50 }).toDataUri();
    case 2:
      return createAvatar(bottts, { seed, backgroundColor: BG_COLORS, radius: 50 }).toDataUri();
    case 3:
      return createAvatar(micah, { seed, backgroundColor: BG_COLORS, radius: 50 }).toDataUri();
    default:
      return createAvatar(lorelei, { seed, backgroundColor: BG_COLORS, radius: 50 }).toDataUri();
  }
}

export const AVATAR_OVERLAYS = ["🥸", "🧔🏻", "🕶️", "👑", "🦅", "🥩"];

export function randomSeed() {
  return Math.random().toString(36).slice(2, 12);
}
