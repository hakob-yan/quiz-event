"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SCANNING_LINES } from "@/lib/armenianContent";
import { playGlitch, playSadDuduk, playWarning, unlockAudio } from "@/lib/sounds";

export default function NoScreen({ onUnlock }: { onUnlock: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    unlockAudio();
    playWarning();
    setTimeout(() => playSadDuduk(), 800);
    setTimeout(() => playGlitch(), 300);

    const lineTimer = setInterval(() => {
      setStep((s) => Math.min(s + 1, SCANNING_LINES.length - 1));
    }, 800);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(100, p + 3));
    }, 90);

    const doneTimer = setTimeout(() => {
      setDone(true);
      clearInterval(lineTimer);
      clearInterval(progressTimer);
    }, 3300);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div className="grayscale-screen crt relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-10">
      <div className="absolute inset-0 bg-black/50" />
      <div className="scan-line" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 16 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border-2 border-red-700/70 bg-black/70 p-6 text-center md:p-10"
      >
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="mb-2 text-xs font-black uppercase tracking-[0.5em] text-red-500"
        >
          ⚠️ ԿՐԻՏԻԿ ՊԱՏԱՍԽԱՆ
        </motion.div>

        <h1
          className="text-2xl font-black leading-tight text-white md:text-5xl glitch-layer"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ՔՈ ՔԱՂԱՔԱՑԻՈՒԹՅՈՒՆԸ <br />
          ԺԱՄԱՆԱԿԱՎՈՐ ԿԱՍԵՑՎԵԼ Է
        </h1>

        <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/15 bg-black/60 p-4 text-left font-mono text-xs text-green-400 md:text-sm">
          {SCANNING_LINES.slice(0, step + 1).map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-1"
            >
              {">"} {l} {i < step && <span className="text-green-500">[ok]</span>}
              {i === step && (
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                >
                  _
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-4 h-3 w-full max-w-md overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-red-700 via-red-500 to-yellow-500"
          />
        </div>
        <div className="mt-1 text-[10px] text-white/60">ՀԱՐՑԱՔՆՆՈՒԹՅԱՆ ՊՐՈՑԵՆՏ · {progress}%</div>

        {done && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="mt-6"
          >
            <p className="mb-3 text-sm text-white/80 md:text-base">
              «ՉԷ» կոճակը հանվել է հավերժ։ Քեզ մնում է մեկ ճանապարհ։
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04 }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(255,204,0,.6)",
                  "0 0 80px rgba(255,204,0,1)",
                  "0 0 30px rgba(255,204,0,.6)",
                ],
              }}
              transition={{ boxShadow: { duration: 1.4, repeat: Infinity } }}
              onClick={onUnlock}
              className="rounded-2xl border-2 border-yellow-400 bg-red-700 px-8 py-4 text-xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ԼԱՎ, ԳԱԼԻՍ ԵՄ 🇦🇲
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
