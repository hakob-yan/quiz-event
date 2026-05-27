"use client";

import { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Profile } from "@/lib/store";
import { generateAvatarDataUri } from "@/lib/avatar";
import { hashString } from "@/lib/utils";

const PatrioticIDCard = forwardRef<HTMLDivElement, { profile: Profile }>(function PatrioticIDCard(
  { profile },
  ref,
) {
  const avatarUri = useMemo(
    () => generateAvatarDataUri(profile.avatarSeed, profile.styleIdx),
    [profile.avatarSeed, profile.styleIdx],
  );
  const idNumber = useMemo(() => {
    const h = hashString(profile.firstName + profile.lastName + profile.avatarSeed);
    return `RA-${(h % 9999).toString().padStart(4, "0")}-${profile.firstName.length}${profile.lastName.length}`;
  }, [profile]);

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: -8, scale: 0.6, y: 80, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.3 }}
      className="relative w-[340px] overflow-hidden rounded-3xl border-2 border-am-gold/80 bg-gradient-to-br from-[#1a0a16] via-[#0d0a16] to-[#0a1633] p-5 shadow-[0_0_60px_rgba(255,204,0,.5)] md:w-[400px]"
      style={{ fontFamily: "var(--font-armenian)" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 flag-gradient" />
      </div>

      {/* Header */}
      <div className="relative mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇦🇲</span>
          <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-wider text-am-gold/80">
              Հայաստանի Հանրապետություն
            </div>
            <div className="text-xs font-black text-am-gold">ՀԱՅՐԵՆԱՍԵՐԻ ID</div>
          </div>
        </div>
        <div className="rounded bg-am-red px-2 py-0.5 text-[10px] font-black text-white">
          ՀԱՍՏԱՏՎԱԾ ✓
        </div>
      </div>

      <div className="relative flex gap-4">
        {/* Photo */}
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border-2 border-am-gold/70 bg-black">
          <img
            src={profile.selfie ?? avatarUri}
            alt="photo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-1 py-0.5 text-center text-[8px] font-bold text-am-gold">
            🇦🇲 RA · 28/05
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-between text-left">
          <div>
            <div className="text-[9px] uppercase tracking-wider text-white/50">Անուն Ազգանուն</div>
            <div className="text-lg font-black leading-tight">
              {profile.firstName} {profile.lastName}
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-wider text-white/50">Կոչում</div>
            <div className="text-sm font-bold text-am-gold">{profile.title}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-wider text-white/50">Մականուն</div>
            <div className="text-sm font-bold">{profile.nickname}</div>
          </div>
        </div>
      </div>

      {/* Score */}
      <div className="relative mt-4 rounded-xl border border-am-gold/40 bg-black/50 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Հայրենասիրության գնահատական</div>
            <div className="text-3xl font-black text-am-gold">
              <CountUp end={profile.patriotismScore} duration={2.2} suffix="%" />
            </div>
          </div>
          <div className="text-3xl">🦅</div>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${profile.patriotismScore}%` }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-am-red via-am-blue to-am-orange"
          />
        </div>
      </div>

      <div className="relative mt-3 flex items-center justify-between text-[10px]">
        <span className="text-white/40">ID: {idNumber}</span>
        <span className="font-black text-am-gold">28.05 · ՎԱՂԸ</span>
      </div>

      <div
        className="pointer-events-none absolute -right-4 -top-4 rotate-12 rounded-full border-4 border-am-red px-3 py-1 text-sm font-black text-am-red"
        style={{ fontFamily: "var(--font-display)" }}
      >
        ՀԱՍՏԱՏՎԱԾ ՀԱՅՐԵՆԱՍԵՐ
      </div>
    </motion.div>
  );
});

export default PatrioticIDCard;
