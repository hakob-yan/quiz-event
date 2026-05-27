"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Profile } from "@/lib/store";
import { NICKNAMES, PATRIOTIC_LINES, TITLES } from "@/lib/armenianContent";
import { pick, randomBetween } from "@/lib/utils";
import { randomSeed } from "@/lib/avatar";
import AvatarPicker from "./AvatarPicker";
import { playPop, unlockAudio } from "@/lib/sounds";

export default function ProfileSetup({
  onComplete,
}: {
  onComplete: (profile: Profile) => void;
}) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [selfie, setSelfie] = useState<string | null>(null);
  const [seed, setSeed] = useState(() => randomSeed());
  const [styleIdx, setStyleIdx] = useState(0);
  const [overlayIdx, setOverlayIdx] = useState(0);
  const [nickname, setNickname] = useState(pick(NICKNAMES));

  useEffect(() => {
    unlockAudio();
  }, []);

  const submit = () => {
    if (!first.trim() || !last.trim()) return;
    onComplete({
      firstName: first.trim(),
      lastName: last.trim(),
      selfie,
      avatarSeed: seed,
      styleIdx,
      overlayIdx,
      nickname,
      title: pick(TITLES),
      patriotismScore: Math.round(randomBetween(87, 100)),
    });
    playPop();
  };

  const canSubmit = first.trim().length >= 1 && last.trim().length >= 1;

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center gap-6 px-4 py-10">
      <Marquee speed={70} gradient={false} className="-mx-4 mb-2 border-y border-am-gold/30 bg-black/40 py-2">
        {PATRIOTIC_LINES.map((l, i) => (
          <span key={i} className="mx-6 text-xs font-black tracking-widest text-am-gold">
            🇦🇲 {l}
          </span>
        ))}
      </Marquee>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="text-center text-3xl font-black leading-tight md:text-5xl neon-text"
        style={{ fontFamily: "var(--font-display)" }}
      >
        ՊԱՏՐԱՍՏԻՐ ՔՈ <br />
        <span className="text-am-gold">ՀԱՅԿԱԿԱՆ ID-Ն</span>
      </motion.h1>

      <p className="text-center text-sm text-white/60">
        Մուտքագրիր անունդ ու բռնիր սելֆի, թե ո՛չ — մենք քո փոխարեն կպատրաստենք էպիկ ավատար 🦅
      </p>

      <motion.div
        layout
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass w-full rounded-3xl p-5"
      >
        <AvatarPicker
          selfie={selfie}
          seed={seed}
          styleIdx={styleIdx}
          overlayIdx={overlayIdx}
          onSelfie={setSelfie}
          onShuffle={(s, i) => {
            setSeed(s);
            setStyleIdx(i);
          }}
          onCycleOverlay={() => setOverlayIdx((i) => i + 1)}
        />

        <div className="mt-6 space-y-3">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
              Անուն
            </span>
            <input
              autoFocus
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="Հայկ"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-lg outline-none focus:border-am-gold"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
              Ազգանուն
            </span>
            <input
              value={last}
              onChange={(e) => setLast(e.target.value)}
              placeholder="Սարգսյան"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-lg outline-none focus:border-am-gold"
            />
          </label>
        </div>

        <div className="mt-5 rounded-2xl border border-am-gold/30 bg-am-gold/5 p-3">
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <div className="text-[10px] uppercase tracking-widest text-am-gold/80">
              Կեղծ Հայկական Մականուն
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setNickname(pick(NICKNAMES));
                  playPop();
                }}
                className="rounded-lg bg-am-gold px-2.5 py-1 text-[10px] font-black text-black active:scale-95"
                aria-label="Պատահական մականուն"
              >
                🎰 Պատահական
              </button>
              <button
                type="button"
                onClick={() => {
                  setNickname("");
                  playPop();
                }}
                className="flex h-6 w-6 items-center justify-center rounded-lg border border-am-gold/50 bg-am-gold/10 text-sm font-black text-am-gold hover:bg-am-gold/20 active:scale-95"
                aria-label="Անհատական մականուն"
                title="Մաքրել՝ քո սեփականը գրելու համար"
              >
                +
              </button>
            </div>
          </div>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value.slice(0, 80))}
            placeholder="Գրիր քո մականունը... 🇦🇲"
            className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-base font-black outline-none placeholder:text-white/30 focus:border-am-gold"
          />
        </div>
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        disabled={!canSubmit}
        onClick={submit}
        className="w-full max-w-sm rounded-2xl bg-am-red px-6 py-4 text-xl font-black text-white shadow-[0_0_40px_rgba(217,0,18,0.6)] disabled:opacity-40 disabled:cursor-not-allowed neon-text"
      >
        ՇԱՐՈՒՆԱԿԵԼ →
      </motion.button>
    </div>
  );
}
