"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateAvatarDataUri, randomSeed } from "@/lib/avatar";
import { playPop } from "@/lib/sounds";
import { cn } from "@/lib/utils";

const OVERLAYS = ["🥸", "🕶️", "👑", "🦅", "🧔🏻", "🥩"];

export default function AvatarPicker({
  selfie,
  seed,
  styleIdx,
  overlayIdx,
  onSelfie,
  onShuffle,
  onCycleOverlay,
}: {
  selfie: string | null;
  seed: string;
  styleIdx: number;
  overlayIdx: number;
  onSelfie: (s: string | null) => void;
  onShuffle: (seed: string, styleIdx: number) => void;
  onCycleOverlay: () => void;
}) {
  const avatarUri = useMemo(
    () => generateAvatarDataUri(seed, styleIdx),
    [seed, styleIdx],
  );

  const overlay = OVERLAYS[overlayIdx % OVERLAYS.length];

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onSelfie(reader.result as string);
      playPop();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        layout
        whileHover={{ scale: 1.04, rotate: -2 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="relative h-44 w-44 overflow-hidden rounded-3xl border-4 border-am-gold/80 shadow-[0_0_60px_rgba(255,204,0,0.5)]"
      >
        <div className="absolute inset-0 flag-gradient opacity-30" />
        <AnimatePresence mode="popLayout">
          <motion.img
            key={selfie ?? avatarUri}
            src={selfie ?? avatarUri}
            alt="avatar"
            initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.6, opacity: 0, rotate: 15 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <motion.div
          key={overlay}
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 12 }}
          className="absolute -bottom-2 -right-2 text-5xl drop-shadow-[0_0_8px_rgba(0,0,0,.8)]"
        >
          {overlay}
        </motion.div>
        <div className="absolute left-2 top-2 rounded-full bg-am-red px-2 py-0.5 text-[10px] font-black text-white">
          🇦🇲 RA
        </div>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => {
            onShuffle(randomSeed(), (styleIdx + 1) % 5);
            playPop();
          }}
          className={cn(
            "rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white",
            "hover:bg-white/15 active:scale-95 transition",
          )}
        >
          🎲 Փոխել ավատարը
        </button>
        <button
          onClick={() => {
            onCycleOverlay();
            playPop();
          }}
          className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 active:scale-95"
        >
          🥸 Միաբերել
        </button>
        <label className="cursor-pointer rounded-xl border border-am-gold/40 bg-am-gold/10 px-3 py-2 text-xs font-semibold text-am-gold hover:bg-am-gold/20">
          📸 Սելֆի
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        </label>
        {selfie && (
          <button
            onClick={() => onSelfie(null)}
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
          >
            ❌ Հեռացնել
          </button>
        )}
      </div>
    </div>
  );
}
