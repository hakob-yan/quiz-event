"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { QUIZ_QUESTIONS, COMPUTING_LINES, VERDICT_TEXT } from "@/lib/armenianContent";
import type { QuizAnswer, Verdict } from "@/lib/types";
import {
  playClick,
  playFanfare,
  playGlitch,
  playPop,
  playWarning,
  unlockAudio,
} from "@/lib/sounds";
import VerdictBadge from "./VerdictBadge";

type Phase = "question" | "computing" | "revealed";

// 50/50 baseline with a small chaos-weight: more honest/embarrassing answers
// (higher option index + matching the marked "answer") nudge toward FAIL.
function decideVerdict(answers: QuizAnswer[]): Verdict {
  const chaos = answers.reduce((s, a) => s + a.optionIdx, 0); // 0..9
  const honestyHits = answers.filter((a) => {
    const q = QUIZ_QUESTIONS.find((qq) => qq.id === a.questionId);
    return q && q.options[a.optionIdx] === q.answer;
  }).length; // 0..3
  const failBoost = (chaos - 4.5) * 0.04 + honestyHits * 0.07;
  const failProb = Math.max(0.2, Math.min(0.8, 0.5 + failBoost));
  return Math.random() < failProb ? "fail" : "success";
}

export default function QuizStage({
  onComplete,
}: {
  onComplete: (answers: QuizAnswer[], verdict: Verdict) => void;
}) {
  // Pick 3 random questions once for this run.
  const questions = useMemo(() => {
    const pool = [...QUIZ_QUESTIONS];
    const out: typeof QUIZ_QUESTIONS = [];
    for (let i = 0; i < 3 && pool.length; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      out.push(pool[idx]);
      pool.splice(idx, 1);
    }
    return out;
  }, []);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [phase, setPhase] = useState<Phase>("question");
  const [verdict, setVerdict] = useState<Verdict | null>(null);

  useEffect(() => {
    unlockAudio();
  }, []);

  const handlePick = (optionIdx: number) => {
    const q = questions[step];
    const ans: QuizAnswer = {
      questionId: q.id,
      question: q.question,
      selectedOption: q.options[optionIdx],
      optionIdx,
    };
    const next = [...answers, ans];
    setAnswers(next);
    playClick();
    playPop();

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    // Last answer — go to computing then reveal.
    setPhase("computing");
    playWarning();
    setTimeout(() => {
      const v = decideVerdict(next);
      setVerdict(v);
      setPhase("revealed");
      if (v === "success") {
        playFanfare();
        confetti({
          particleCount: 90,
          spread: 90,
          origin: { y: 0.4 },
          colors: ["#d90012", "#0033a0", "#f2a800", "#ffcc00"],
        });
      } else {
        playGlitch();
      }
    }, 2400);
  };

  if (phase === "computing") return <ComputingScreen />;
  if (phase === "revealed" && verdict)
    return (
      <VerdictReveal
        verdict={verdict}
        onContinue={() => onComplete(answers, verdict)}
      />
    );

  const q = questions[step];
  const progress = (step / questions.length) * 100;

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-6 px-4 py-10">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-am-gold/80">
          <span>«Անկախության Սերունդ» Թեստ</span>
          <span>
            ՀԱՐՑ {step + 1} / {questions.length}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="h-full bg-gradient-to-r from-am-red via-am-gold to-am-orange"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 60, opacity: 0, rotate: 2 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          exit={{ x: -60, opacity: 0, rotate: -2 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="glass w-full rounded-3xl p-5 md:p-8"
        >
          <div className="mb-1 text-[10px] uppercase tracking-[0.3em] text-am-gold/80">
            ⚠️ Անկեղծ պատասխանիր — տատիկները նայում են
          </div>
          <h2
            className="text-xl font-black leading-snug md:text-3xl neon-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {q.question}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            {q.options.map((opt, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                onClick={() => handlePick(i)}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-4 text-left text-sm font-bold text-white hover:border-am-gold hover:bg-am-gold/10 md:text-base"
              >
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-black text-am-gold group-hover:bg-am-gold group-hover:text-black">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-am-gold/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
        Արդյունքն ուղարկվում է Մայիսի 28-ի կոմիտեին 📡
      </div>
    </div>
  );
}

function ComputingScreen() {
  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-7xl"
      >
        👵
      </motion.div>
      <h2
        className="text-center text-2xl font-black md:text-4xl neon-text"
        style={{ fontFamily: "var(--font-display)" }}
      >
        ՀԱՇՎԱՐԿՎՈՒՄ Է...
      </h2>
      <div className="mx-auto w-full max-w-md rounded-2xl border border-white/15 bg-black/60 p-4 font-mono text-xs text-green-400">
        {COMPUTING_LINES.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.45 }}
            className="mb-1"
          >
            {">"} {l}
          </motion.div>
        ))}
      </div>
      <Spinner />
    </div>
  );
}

function Spinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="h-10 w-10 rounded-full border-4 border-am-gold/30 border-t-am-gold"
    />
  );
}

function VerdictReveal({
  verdict,
  onContinue,
}: {
  verdict: Verdict;
  onContinue: () => void;
}) {
  const cfg = VERDICT_TEXT[verdict];
  const isFail = verdict === "fail";

  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`pointer-events-none fixed inset-0 ${
          isFail ? "bg-red-900/30" : "bg-am-gold/10"
        }`}
      />
      <motion.div
        initial={{ scale: 4, rotate: isFail ? -25 : 25, opacity: 0 }}
        animate={{ scale: 1, rotate: isFail ? -12 : 8, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className={`relative z-10 rounded-3xl border-8 px-8 py-5 text-center ${
          isFail ? "border-red-500" : "border-am-gold"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div className={`text-7xl ${isFail ? "text-red-500" : "text-am-gold"}`}>
          {cfg.icon}
        </div>
        <div
          className={`mt-2 text-3xl font-black md:text-5xl ${
            isFail ? "text-red-400" : "text-am-gold"
          } neon-text`}
        >
          {cfg.title}
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 max-w-md text-center text-sm text-white/80 md:text-base"
      >
        {cfg.subtitle}
      </motion.p>

      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 220, damping: 16 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.04 }}
        onClick={onContinue}
        className={`relative z-10 rounded-2xl px-8 py-4 text-lg font-black ${
          isFail
            ? "bg-red-600 text-white shadow-[0_0_40px_rgba(217,0,18,.7)]"
            : "bg-am-gold text-black shadow-[0_0_40px_rgba(255,204,0,.8)]"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {isFail ? "ԼԱՎ, ՇԱՐՈՒՆԱԿԵԼ 😔" : "ՇԱՐՈՒՆԱԿԵԼ →"}
      </motion.button>
    </div>
  );
}
