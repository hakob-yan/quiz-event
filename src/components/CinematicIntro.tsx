"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { INTRO_LINES } from "@/lib/armenianContent";
import { playFanfare, unlockAudio } from "@/lib/sounds";

export default function CinematicIntro({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    unlockAudio();
    playFanfare();
    if (idx >= INTRO_LINES.length) {
      const t = setTimeout(onDone, 700);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIdx((i) => i + 1), 1100);
    return () => clearTimeout(t);
  }, [idx, onDone]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 flag-gradient opacity-25" />
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,204,0,0.18), transparent 60%)",
        }}
      />
      <div className="scan-line" />

      <AnimatePresence mode="wait">
        {idx < INTRO_LINES.length ? (
          <motion.h1
            key={idx}
            initial={{ y: 60, opacity: 0, letterSpacing: "0.2em", scale: 0.85 }}
            animate={{ y: 0, opacity: 1, letterSpacing: "0em", scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="neon-text relative z-10 px-6 text-center text-4xl font-black tracking-tight md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {INTRO_LINES[idx]}
          </motion.h1>
        ) : (
          <motion.div
            key="boom"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.4, 1], opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <div className="text-7xl md:text-9xl">🇦🇲</div>
            <div className="mt-4 text-2xl font-black md:text-4xl neon-text">
              ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՕՐ
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onDone}
        className="absolute bottom-8 right-8 rounded-full border border-white/20 px-4 py-2 text-xs text-white/60 backdrop-blur hover:text-white"
      >
        ԲԱՑ ԹՈՂՆԵԼ →
      </button>
    </div>
  );
}
