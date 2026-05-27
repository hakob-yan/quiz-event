"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Balancer from "react-wrap-balancer";
import Marquee from "react-fast-marquee";
import { Profile } from "@/lib/store";
import ImpossibleNoButton from "./ImpossibleNoButton";
import { playClick, playPop, unlockAudio } from "@/lib/sounds";
import { PATRIOTIC_LINES } from "@/lib/armenianContent";

export default function MainScreen({
  profile,
  noBlocked,
  onYes,
  onNo,
}: {
  profile: Profile;
  noBlocked: boolean;
  onYes: () => void;
  onNo: () => void;
}) {
  const [escapes, setEscapes] = useState(0);

  useEffect(() => {
    unlockAudio();
  }, []);

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 px-4 py-10">
      <Marquee speed={90} gradient={false} className="-mx-4 border-y border-am-red/40 bg-black/40 py-2">
        {PATRIOTIC_LINES.map((l, i) => (
          <span key={i} className="mx-6 text-xs font-black tracking-widest text-am-gold">
            🇦🇲 {l} 🇦🇲
          </span>
        ))}
      </Marquee>

      <Tilt
        glareEnable
        glareMaxOpacity={0.3}
        glareColor="#ffcc00"
        glarePosition="all"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        className="w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="glass rounded-3xl p-6 md:p-10 text-center"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.4em] text-am-gold/80">
            Մայիսի 28 · Հանրապետության Օր
          </div>
          <h1
            className="text-5xl font-black leading-[0.95] md:text-8xl neon-text glitch-layer"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Balancer>
              {profile.firstName.toUpperCase()},<br />
              ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ <span className="inline-block">🇦🇲</span>
            </Balancer>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm text-white/70 md:text-base">
            Ընտրությունը քոնն ա ախպեր/քուրիկ։ Մի սխալվիր։ Տատիկները նայում են։
          </p>
        </motion.div>
      </Tilt>

      <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
        <motion.button
          whileTap={{ scale: 0.94, rotate: -2 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          animate={{ boxShadow: ["0 0 30px rgba(255,204,0,.5)", "0 0 80px rgba(255,204,0,.9)", "0 0 30px rgba(255,204,0,.5)"] }}
          transition={{ boxShadow: { duration: 1.4, repeat: Infinity } }}
          onClick={() => {
            playClick();
            playPop();
            onYes();
          }}
          className="relative rounded-2xl border-2 border-am-gold bg-am-red px-10 py-5 text-3xl font-black text-white shadow-[0_0_60px_rgba(217,0,18,.7)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ԱՅՈ 🇦🇲
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
          />
        </motion.button>

        {noBlocked ? (
          <div className="rounded-2xl border-2 border-dashed border-white/15 px-6 py-4 text-center text-xs text-white/40">
            «ՉԷ»-ն այլևս հասանելի չէ 🚫<br />
            քո որոշումը պատմական է
          </div>
        ) : (
          <ImpossibleNoButton
            aggressionLevel={Math.min(1, escapes / 8)}
            onEscape={() => setEscapes((e) => e + 1)}
            onAttempt={() => {
              onNo();
            }}
          />
        )}
      </div>

      <div className="text-center text-[10px] uppercase tracking-[0.3em] text-white/30">
        Փորձեցի՞ր փախչել «ՉԷ»-ից {escapes} անգամ · աճում է ագրեսիան 📈
      </div>
    </div>
  );
}
