"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster as HotToaster } from "react-hot-toast";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";
import { useAppState } from "@/lib/store";
import { unlockAudio } from "@/lib/sounds";
import { useDeviceRsvp } from "@/hooks/useDeviceRsvp";
import { RETURNING_BANNER, RETURNING_USER_TOASTS } from "@/lib/armenianContent";
import { pick } from "@/lib/utils";
import type { RsvpEntry } from "@/lib/types";
import FloatingEmojis from "@/components/FloatingEmojis";

const CinematicIntro = dynamic(() => import("@/components/CinematicIntro"), { ssr: false });
const ProfileSetup = dynamic(() => import("@/components/ProfileSetup"), { ssr: false });
const QuizStage = dynamic(() => import("@/components/QuizStage"), { ssr: false });
const MainScreen = dynamic(() => import("@/components/MainScreen"), { ssr: false });
const EnrichScreen = dynamic(() => import("@/components/EnrichScreen"), { ssr: false });
const YesScreen = dynamic(() => import("@/components/YesScreen"), { ssr: false });
const NoScreen = dynamic(() => import("@/components/NoScreen"), { ssr: false });

export default function Home() {
  const {
    stage,
    profile,
    noBlocked,
    setStage,
    setProfile,
    setNoBlocked,
    reset,
  } = useAppState();

  const device = useDeviceRsvp();
  const sassyToastShown = useRef(false);
  // The RSVP entry returned from the server after EnrichScreen submits.
  // Lifted here so YesScreen can render the celebration without re-POSTing.
  const [rsvpEntry, setRsvpEntry] = useState<RsvpEntry | null>(null);

  // Unlock audio on first interaction
  useEffect(() => {
    const handler = () => unlockAudio();
    window.addEventListener("pointerdown", handler, { once: true });
    window.addEventListener("keydown", handler, { once: true });
    return () => {
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
  }, []);

  // Sassy welcome-back toast on first detection of a returning visitor.
  useEffect(() => {
    if (!device.isReturning || sassyToastShown.current) return;
    sassyToastShown.current = true;
    sonnerToast(pick(RETURNING_USER_TOASTS), {
      duration: 5500,
      style: {
        background: "linear-gradient(90deg, #d90012 0%, #0033a0 100%)",
        color: "white",
        fontWeight: 800,
        border: "1px solid rgba(255,204,0,.6)",
      },
    });
  }, [device.isReturning]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <FloatingEmojis count={12} />

      <HotToaster />
      <SonnerToaster theme="dark" position="bottom-center" />

      {device.isReturning && stage !== "intro" && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-40 w-full border-b border-am-gold/40 bg-black/80 backdrop-blur"
        >
          <div className="mx-auto max-w-3xl px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-widest text-am-gold md:text-xs">
            {RETURNING_BANNER}
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CinematicIntro onDone={() => setStage(profile ? "main" : "setup")} />
          </motion.section>
        )}

        {stage === "setup" && (
          <motion.section
            key="setup"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <ProfileSetup
              onComplete={(p) => {
                setProfile(p);
                setStage("quiz");
              }}
            />
          </motion.section>
        )}

        {stage === "quiz" && profile && (
          <motion.section
            key="quiz"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <QuizStage
              onComplete={(answers, verdict) => {
                setProfile({ ...profile, quizAnswers: answers, verdict });
                setStage("main");
              }}
            />
          </motion.section>
        )}

        {stage === "main" && profile && (
          <motion.section
            key="main"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
          >
            <MainScreen
              profile={profile}
              noBlocked={noBlocked}
              onYes={() => setStage("enrich")}
              onNo={() => setStage("no")}
            />
          </motion.section>
        )}

        {stage === "enrich" && profile && (
          <motion.section
            key="enrich"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <EnrichScreen
              profile={profile}
              onContinue={(entry) => {
                setRsvpEntry(entry);
                setStage("yes");
              }}
            />
          </motion.section>
        )}

        {stage === "yes" && profile && rsvpEntry && (
          <motion.section
            key="yes"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <YesScreen profile={profile} entry={rsvpEntry} onRestart={reset} />
          </motion.section>
        )}

        {stage === "no" && (
          <motion.section
            key="no"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NoScreen
              onUnlock={() => {
                setNoBlocked(true);
                setStage("main");
              }}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
