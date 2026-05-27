"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { generateAvatarDataUri } from "@/lib/avatar";
import type { RsvpEntry } from "@/lib/types";

type Props = {
  refreshKey?: number; // bump to force a refetch
  currentId?: string;
};

export default function RSVPList({ refreshKey = 0, currentId }: Props) {
  const [entries, setEntries] = useState<RsvpEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setEntries(null);
    setError(null);
    fetch("/api/rsvp", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setEntries(Array.isArray(data.entries) ? data.entries : []);
      })
      .catch(() => {
        if (cancelled) return;
        setError("Չհաջողվեց բեռնել ցուցակը");
      });
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  const count = entries?.length ?? 0;

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.1 }}
      className="glass w-full max-w-2xl rounded-3xl p-5 md:p-7"
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-am-gold/80">
            Ովքեր են գալիս
          </div>
          <h2
            className="text-2xl font-black md:text-3xl neon-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            🇦🇲 ՀԱՅՐԵՆԱՍԵՐՆԵՐԻ ՑՈՒՑԱԿ
          </h2>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-am-gold md:text-4xl">
            <CountUp end={count} duration={1.4} />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">
            գրանցված
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {entries === null && !error && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square animate-pulse rounded-2xl bg-white/5"
            />
          ))}
        </div>
      )}

      {entries && entries.length === 0 && !error && (
        <div className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-white/50">
          Դեռ ոչ ոք չի գրանցվել։ Դու առաջինն ես, ապեր 🦅
        </div>
      )}

      {entries && entries.length > 0 && (
        <div className="no-scrollbar max-h-[420px] overflow-y-auto pr-1">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
            <AnimatePresence initial={false}>
              {entries.map((e, i) => (
                <RsvpAvatar key={e.id} entry={e} index={i} isMe={e.id === currentId} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </motion.div>
  );
}

const OVERLAYS = ["🥸", "🕶️", "👑", "🦅", "🧔🏻", "🥩"];

function RsvpAvatar({
  entry,
  index,
  isMe,
}: {
  entry: RsvpEntry;
  index: number;
  isMe: boolean;
}) {
  const avatarSrc = useMemo(() => {
    if (entry.selfieUrl) return entry.selfieUrl;
    return generateAvatarDataUri(entry.avatarSeed || entry.id, entry.styleIdx ?? 0);
  }, [entry.selfieUrl, entry.avatarSeed, entry.id, entry.styleIdx]);

  const overlay = OVERLAYS[(entry.overlayIdx ?? 0) % OVERLAYS.length];

  return (
    <motion.div
      layout
      initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.4, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 16,
        delay: Math.min(index * 0.03, 0.6),
      }}
      whileHover={{ scale: 1.06, rotate: -2 }}
      className={`relative flex flex-col items-center gap-1 rounded-2xl border p-2 text-center ${
        isMe
          ? "border-am-gold bg-am-gold/10 shadow-[0_0_30px_rgba(255,204,0,.5)]"
          : "border-white/10 bg-white/[0.03]"
      }`}
      title={`${entry.firstName} ${entry.lastName} · ${entry.nickname}`}
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-am-gold/40 bg-black sm:h-20 sm:w-20">
        <img
          src={avatarSrc}
          alt={`${entry.firstName} ${entry.lastName}`}
          className="h-full w-full object-cover"
        />
        <span className="absolute -bottom-1 -right-1 text-xl drop-shadow-[0_0_4px_rgba(0,0,0,.9)]">
          {overlay}
        </span>
        {isMe && (
          <span className="absolute left-1 top-1 rounded bg-am-red px-1 text-[8px] font-black text-white">
            ԴՈՒ
          </span>
        )}
      </div>
      <div className="w-full">
        <div className="truncate text-[11px] font-black leading-tight">
          {entry.firstName} {entry.lastName}
        </div>
        <div className="truncate text-[9px] uppercase tracking-wider text-am-gold/80">
          {entry.nickname}
        </div>
      </div>
    </motion.div>
  );
}
