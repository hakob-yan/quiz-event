"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster as HotToaster } from "react-hot-toast";
import { Toaster as SonnerToaster } from "sonner";
import { useAppState } from "@/lib/store";
import { unlockAudio } from "@/lib/sounds";
import FloatingEmojis from "@/components/FloatingEmojis";

const CinematicIntro = dynamic(() => import("@/components/CinematicIntro"), { ssr: false });
const ProfileSetup = dynamic(() => import("@/components/ProfileSetup"), { ssr: false });
const MainScreen = dynamic(() => import("@/components/MainScreen"), { ssr: false });
const YesScreen = dynamic(() => import("@/components/YesScreen"), { ssr: false });
const NoScreen = dynamic(() => import("@/components/NoScreen"), { ssr: false });

export default function Home() {
  const {
    hydrated,
    stage,
    profile,
    noBlocked,
    setStage,
    setProfile,
    setNoBlocked,
    reset,
  } = useAppState();

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

  if (!hydrated) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black text-am-gold">
        <div className="text-5xl">🇦🇲</div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <FloatingEmojis count={12} />

      <HotToaster />
      <SonnerToaster theme="dark" position="bottom-center" />

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
              onYes={() => setStage("yes")}
              onNo={() => setStage("no")}
            />
          </motion.section>
        )}

        {stage === "yes" && profile && (
          <motion.section
            key="yes"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <YesScreen profile={profile} onRestart={reset} />
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
