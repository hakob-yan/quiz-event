"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti";
import confetti from "canvas-confetti";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import { useWindowSize } from "react-use";
import { Profile } from "@/lib/store";
import PatrioticIDCard from "./PatrioticIDCard";
import RSVPList from "./RSVPList";
import { playCheer, playFanfare, playFirework, unlockAudio } from "@/lib/sounds";
import { SHARE_MESSAGES } from "@/lib/armenianContent";
import { pick } from "@/lib/utils";

const RED = ["#d90012", "#ff264a"];
const BLUE = ["#0033a0", "#1a5dff"];
const ORANGE = ["#f2a800", "#ffcc00"];
const ALL = [...RED, ...BLUE, ...ORANGE];

export default function YesScreen({ profile, onRestart }: { profile: Profile; onRestart: () => void }) {
  const { width, height } = useWindowSize();
  const [flashing, setFlashing] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const [myId, setMyId] = useState<string | undefined>(undefined);
  const [listKey, setListKey] = useState(0);
  const submitted = useRef(false);

  // Save RSVP to the server (writes rsvps.json in project root via fs).
  useEffect(() => {
    if (submitted.current) return;
    submitted.current = true;

    const payload = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      nickname: profile.nickname,
      title: profile.title,
      patriotismScore: profile.patriotismScore,
      avatarSeed: profile.avatarSeed,
      styleIdx: profile.styleIdx,
      overlayIdx: profile.overlayIdx,
      selfie: profile.selfie, // data URL — server saves to public/uploads/
    };

    fetch("/api/rsvp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text());
        return r.json();
      })
      .then((data) => {
        setMyId(data?.entry?.id);
        setListKey((k) => k + 1);
      })
      .catch(() => {
        toast.error("Չստացվեց պահպանել RSVP-ն 😬");
      });
  }, [profile]);

  useEffect(() => {
    unlockAudio();
    playFanfare();
    playCheer();

    // Big bang fireworks waves
    const fire = (origin: { x: number; y: number }, colors: string[]) => {
      confetti({
        particleCount: 80,
        spread: 90,
        startVelocity: 45,
        origin,
        colors,
        scalar: 1.1,
      });
      playFirework();
    };

    fire({ x: 0.2, y: 0.5 }, RED);
    fire({ x: 0.8, y: 0.5 }, BLUE);
    setTimeout(() => fire({ x: 0.5, y: 0.3 }, ORANGE), 350);
    setTimeout(() => fire({ x: 0.3, y: 0.7 }, ALL), 800);
    setTimeout(() => fire({ x: 0.7, y: 0.7 }, ALL), 1100);

    const id = setInterval(() => {
      fire({ x: Math.random(), y: Math.random() * 0.6 }, pick([RED, BLUE, ORANGE, ALL]));
    }, 1800);

    const flashTimer = setTimeout(() => setFlashing(false), 2500);

    return () => {
      clearInterval(id);
      clearTimeout(flashTimer);
    };
  }, []);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const url = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#08070b",
        skipFonts: true,
      });
      const a = document.createElement("a");
      a.href = url;
      a.download = `republic-day-${profile.firstName}.png`;
      a.click();
      toast.success("Քարտդ ներբեռնված է 🇦🇲");
    } catch {
      toast.error("Չստացվեց ներբեռնել ☹️");
    }
  };

  const shareText = pick(SHARE_MESSAGES);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Մայիսի 28", text: shareText, url });
      } else {
        await navigator.clipboard.writeText(`${shareText} ${url}`);
        toast.success("Հղումը պատճենված է 📋");
      }
    } catch {
      // user canceled
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Հղումը պատճենված է 📋");
    } catch {
      toast.error("Չստացվեց պատճենել");
    }
  };

  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 py-10">
      <ReactConfetti
        width={width}
        height={height}
        recycle
        numberOfPieces={260}
        gravity={0.18}
        colors={ALL}
      />

      {/* Flash overlays */}
      {flashing && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50"
          animate={{ opacity: [0, 0.7, 0, 0.5, 0] }}
          transition={{ duration: 1.6 }}
          style={{ background: "white" }}
        />
      )}

      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="text-center"
      >
        <div className="text-4xl md:text-6xl">🦅 🎉 🇦🇲 🎉 🦅</div>
        <h1
          className="mt-3 text-4xl font-black leading-tight md:text-7xl neon-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {profile.firstName.toUpperCase()}, <br />
          ՊԱՇՏՈՆԱՊԵՍ ՀԱՅՐԵՆԱՍԵՐ ԵՍ!
        </h1>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          Տատիկը հպարտ է։ Քոչարին քեզ սպասում է։ Խորովածը պատրաստ է։ 🥩
        </p>
      </motion.div>

      <PatrioticIDCard ref={cardRef} profile={profile} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <button
          onClick={handleDownload}
          className="rounded-2xl bg-am-gold px-5 py-3 text-sm font-black text-black shadow-[0_0_40px_rgba(255,204,0,.6)] active:scale-95"
        >
          ⬇️ ՆԵՐԲԵՌՆԵԼ
        </button>
        <button
          onClick={handleShare}
          className="rounded-2xl bg-am-red px-5 py-3 text-sm font-black text-white shadow-[0_0_40px_rgba(217,0,18,.6)] active:scale-95"
        >
          🚀 ԿԻՍՎԵԼ
        </button>
        <button
          onClick={handleCopy}
          className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-black text-white hover:bg-white/15 active:scale-95"
        >
          🔗 Պատճենել հղումը
        </button>
      </motion.div>

      <RSVPList refreshKey={listKey} currentId={myId} />

      <button
        onClick={onRestart}
        className="mt-6 text-xs uppercase tracking-widest text-white/40 hover:text-white"
      >
        ↻ Սկսել նորից
      </button>
    </div>
  );
}
