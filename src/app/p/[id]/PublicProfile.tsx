"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Marquee from "react-fast-marquee";
import Tilt from "react-parallax-tilt";
import type { RsvpEntry } from "@/lib/types";
import type { Profile } from "@/lib/store";
import PatrioticIDCard from "@/components/PatrioticIDCard";
import FloatingEmojis from "@/components/FloatingEmojis";
import ShareMenu from "@/components/ShareMenu";
import { PATRIOTIC_LINES } from "@/lib/armenianContent";
import { playCheer, playFanfare, unlockAudio } from "@/lib/sounds";
import { buildProfileUrl } from "@/lib/publicUrl";

const RED = ["#d90012", "#ff264a"];
const BLUE = ["#0033a0", "#1a5dff"];
const ORANGE = ["#f2a800", "#ffcc00"];

export default function PublicProfile({ entry }: { entry: RsvpEntry }) {
  const profile = useMemo<Profile>(
    () => ({
      firstName: entry.firstName,
      lastName: entry.lastName,
      selfie: entry.selfieUrl, // /uploads/{id}.{ext} or null
      avatarSeed: entry.avatarSeed,
      styleIdx: entry.styleIdx,
      overlayIdx: entry.overlayIdx,
      nickname: entry.nickname,
      title: entry.title,
      patriotismScore: entry.patriotismScore,
    }),
    [entry],
  );

  useEffect(() => {
    unlockAudio();
    playFanfare();
    setTimeout(() => playCheer(), 250);

    const fire = (origin: { x: number; y: number }, colors: string[]) => {
      confetti({ particleCount: 70, spread: 90, startVelocity: 45, origin, colors, scalar: 1.1 });
    };
    fire({ x: 0.2, y: 0.4 }, RED);
    fire({ x: 0.8, y: 0.4 }, BLUE);
    setTimeout(() => fire({ x: 0.5, y: 0.3 }, ORANGE), 400);
  }, []);

  const shareUrl = buildProfileUrl(entry.id);
  const shareText = `${entry.firstName} ${entry.lastName} — հաստատված հայրենասեր 🇦🇲 Մայիսի 28-ին գալիս ա։ Իսկ դու՞`;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <FloatingEmojis count={10} />

      <Marquee
        speed={80}
        gradient={false}
        className="relative z-10 border-b border-am-gold/40 bg-black/40 py-2"
      >
        {PATRIOTIC_LINES.map((l, i) => (
          <span key={i} className="mx-6 text-xs font-black tracking-widest text-am-gold">
            🇦🇲 {l} 🇦🇲
          </span>
        ))}
      </Marquee>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 py-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="text-center"
        >
          <div className="mb-1 text-[10px] uppercase tracking-[0.4em] text-am-gold/80">
            Հանրապետության Օր · Մայիսի 28
          </div>
          <h1
            className="neon-text text-3xl font-black leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {entry.firstName.toUpperCase()} {entry.lastName.toUpperCase()} 🇦🇲
            <br />
            <span className="text-am-gold">ՊԱՇՏՈՆԱՊԵՍ ՀԱՍՏԱՏՎԱԾ Է</span>
          </h1>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            «{entry.title}» · {entry.nickname}
          </p>
        </motion.div>

        <Tilt
          glareEnable
          glareMaxOpacity={0.35}
          glareColor="#ffcc00"
          glarePosition="all"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
        >
          <PatrioticIDCard profile={profile} />
        </Tilt>

        {/* CTA — new visitor reserves their own */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass w-full max-w-xl rounded-3xl p-6 text-center"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-white/60">
            {entry.firstName}-ը հրավիրում է քեզ
          </div>
          <h2
            className="mt-1 text-2xl font-black md:text-4xl neon-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ 🇦🇲
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Ստուգիր քո հայրենասիրությունը։ Ստացիր քո ID-Ն։ Մի՛ հիասթափեցրու տատիկին։
          </p>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(255,204,0,.5)",
                "0 0 90px rgba(255,204,0,1)",
                "0 0 30px rgba(255,204,0,.5)",
              ],
            }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="mt-5 inline-block rounded-2xl"
          >
            <Link
              href="/"
              className="inline-block rounded-2xl border-2 border-am-gold bg-am-red px-8 py-4 text-xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              🦅 ՍԿՍԵԼ ԻՄ ID-Ն
            </Link>
          </motion.div>
        </motion.div>

        {/* Share */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-xl"
        >
          <ShareMenu url={shareUrl} text={shareText} />
        </motion.div>
      </div>
    </main>
  );
}
