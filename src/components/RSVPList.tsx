"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import CountUp from "react-countup";
import { FaTelegramPlane, FaInstagram, FaPhone } from "react-icons/fa";
import { generateAvatarDataUri } from "@/lib/avatar";
import type { RsvpEntry } from "@/lib/types";
import {
  YEREVAN_POPULAR_MEETUP_SPOTS,
  MEETUP_TIME_SLOTS,
} from "@/lib/armenianContent";
import { cn } from "@/lib/utils";
import VerdictBadge from "./VerdictBadge";

type Props = {
  refreshKey?: number; // bump to force a refetch
  currentId?: string;
};

// english → armenian display for spots
const SPOT_LABEL = new Map<string, string>(
  YEREVAN_POPULAR_MEETUP_SPOTS.map((s) => [s.englishName, s.armenianName]),
);
const TIME_LABEL = new Map<string, string>(
  MEETUP_TIME_SLOTS.map((t) => [t.value, t.label]),
);

export default function RSVPList({ refreshKey = 0, currentId }: Props) {
  const [entries, setEntries] = useState<RsvpEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filterSpot, setFilterSpot] = useState<string | null>(null);
  const [filterTime, setFilterTime] = useState<string | null>(null);

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

  // Derive which spots/times to even show in the filter row — only those that
  // actually have at least one RSVP, so we don't dangle empty filters.
  const availableSpots = useMemo(() => {
    if (!entries) return new Set<string>();
    return new Set(entries.map((e) => e.meetupSpot).filter(Boolean) as string[]);
  }, [entries]);
  const availableTimes = useMemo(() => {
    if (!entries) return new Set<string>();
    return new Set(entries.map((e) => e.meetupTime).filter(Boolean) as string[]);
  }, [entries]);

  const filtered = useMemo(() => {
    if (!entries) return null;
    return entries.filter((e) => {
      if (filterSpot && e.meetupSpot !== filterSpot) return false;
      if (filterTime && e.meetupTime !== filterTime) return false;
      return true;
    });
  }, [entries, filterSpot, filterTime]);

  const count = entries?.length ?? 0;
  const filteredCount = filtered?.length ?? 0;
  const isFiltered = !!(filterSpot || filterTime);

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
            <CountUp end={isFiltered ? filteredCount : count} duration={1.2} />
            {isFiltered && (
              <span className="ml-1 text-base text-white/40">/ {count}</span>
            )}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">
            {isFiltered ? "ֆիլտր" : "գրանցված"}
          </div>
        </div>
      </div>

      {/* Filters */}
      {entries && entries.length > 0 && (availableSpots.size > 0 || availableTimes.size > 0) && (
        <div className="mb-4 space-y-2">
          {availableSpots.size > 0 && (
            <FilterRow label="Վայր">
              <Chip
                active={filterSpot === null}
                onClick={() => setFilterSpot(null)}
                accent="gold"
              >
                Բոլորը
              </Chip>
              {YEREVAN_POPULAR_MEETUP_SPOTS.filter((s) => availableSpots.has(s.englishName)).map(
                (s) => (
                  <Chip
                    key={s.englishName}
                    active={filterSpot === s.englishName}
                    onClick={() =>
                      setFilterSpot(filterSpot === s.englishName ? null : s.englishName)
                    }
                    accent="gold"
                  >
                    📍 {s.armenianName}
                  </Chip>
                ),
              )}
            </FilterRow>
          )}
          {availableTimes.size > 0 && (
            <FilterRow label="Ժամ">
              <Chip
                active={filterTime === null}
                onClick={() => setFilterTime(null)}
                accent="red"
              >
                Բոլորը
              </Chip>
              {MEETUP_TIME_SLOTS.filter((t) => availableTimes.has(t.value)).map((t) => (
                <Chip
                  key={t.value}
                  active={filterTime === t.value}
                  onClick={() => setFilterTime(filterTime === t.value ? null : t.value)}
                  accent="red"
                >
                  🕒 {t.label}
                </Chip>
              ))}
            </FilterRow>
          )}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {entries === null && !error && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-44 animate-pulse rounded-2xl bg-white/5" />
          ))}
        </div>
      )}

      {entries && entries.length === 0 && !error && (
        <div className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-white/50">
          Դեռ ոչ ոք չի գրանցվել։ Դու առաջինն ես, ապեր 🦅
        </div>
      )}

      {filtered && entries && entries.length > 0 && filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-white/50">
          Այս ֆիլտրի տակ ոչ ոք չկա 🤷
        </div>
      )}

      {filtered && filtered.length > 0 && (
        <div className="no-scrollbar max-h-[520px] overflow-y-auto pr-1">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            <AnimatePresence initial={false}>
              {filtered.map((e, i) => (
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

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 text-[9px] uppercase tracking-widest text-white/40">{label}</div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  accent,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  accent: "gold" | "red";
}) {
  const goldActive = accent === "gold";
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-2.5 py-1 text-[10px] font-bold transition active:scale-95",
        active
          ? goldActive
            ? "border-am-gold bg-am-gold text-black shadow-[0_0_18px_rgba(255,204,0,.5)]"
            : "border-am-red bg-am-red text-white shadow-[0_0_18px_rgba(217,0,18,.5)]"
          : "border-white/15 bg-white/5 text-white/80 hover:border-am-gold/50 hover:bg-white/10",
      )}
    >
      {children}
    </button>
  );
}

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
  const spotLabel = entry.meetupSpot ? SPOT_LABEL.get(entry.meetupSpot) : undefined;
  const timeLabel = entry.meetupTime ? TIME_LABEL.get(entry.meetupTime) : undefined;
  const hasContacts = !!(entry.telegram || entry.instagram || entry.phone);

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
      whileHover={{ scale: 1.04, rotate: -1 }}
      className={cn(
        "relative flex flex-col items-center gap-1.5 rounded-2xl border p-2 text-center",
        isMe
          ? "border-am-gold bg-am-gold/10 shadow-[0_0_30px_rgba(255,204,0,.5)]"
          : "border-white/10 bg-white/[0.03]",
      )}
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
        {entry.verdict && (
          <span className="absolute -top-1 right-1">
            <VerdictBadge verdict={entry.verdict} size="mini" />
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

      {(spotLabel || timeLabel) && (
        <div className="flex w-full flex-wrap items-center justify-center gap-1">
          {spotLabel && (
            <span className="truncate rounded-full bg-am-gold/15 px-1.5 py-0.5 text-[8px] font-bold text-am-gold">
              📍 {spotLabel}
            </span>
          )}
          {timeLabel && (
            <span className="rounded-full bg-am-red/20 px-1.5 py-0.5 text-[8px] font-bold text-am-red">
              🕒 {entry.meetupTime}
            </span>
          )}
        </div>
      )}

      {hasContacts && (
        <div className="mt-1 flex w-full flex-wrap items-center justify-center gap-1">
          {entry.telegram && (
            <a
              href={`https://t.me/${entry.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Telegram @${entry.telegram}`}
              className="inline-flex max-w-full items-center gap-1 rounded-full bg-[#229ED9] px-2 py-0.5 text-[9px] font-bold text-white shadow-[0_0_8px_rgba(34,158,217,.45)] transition hover:brightness-110 active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <FaTelegramPlane className="h-2.5 w-2.5 shrink-0" />
              <span className="truncate">@{entry.telegram}</span>
            </a>
          )}
          {entry.instagram && (
            <a
              href={`https://instagram.com/${entry.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram @${entry.instagram}`}
              className="inline-flex max-w-full items-center gap-1 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-2 py-0.5 text-[9px] font-bold text-white shadow-[0_0_8px_rgba(221,42,123,.45)] transition hover:brightness-110 active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <FaInstagram className="h-2.5 w-2.5 shrink-0" />
              <span className="truncate">@{entry.instagram}</span>
            </a>
          )}
          {entry.phone && <PhoneChip phone={entry.phone} />}
        </div>
      )}
    </motion.div>
  );
}

// Phone is dual-action: the anchor's tel: href fires the dialer on mobile,
// while the onClick copies the number to clipboard so desktop users (where
// tel: typically does nothing) still get a useful interaction.
function PhoneChip({ phone }: { phone: string }) {
  const dialHref = `tel:${phone.replace(/[^\d+]/g, "")}`;
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(phone);
      toast.success(`📋 Պատճենվեց՝ ${phone}`, { duration: 1800 });
    } catch {
      // Silent fallback — tel: still works on phones.
    }
  };
  return (
    <a
      href={dialHref}
      onClick={handleClick}
      aria-label={`Call ${phone}`}
      className="inline-flex max-w-full items-center gap-1 rounded-full bg-am-gold px-2 py-0.5 text-[9px] font-bold text-black shadow-[0_0_8px_rgba(255,204,0,.5)] transition hover:brightness-110 active:scale-95"
    >
      <FaPhone className="h-2.5 w-2.5 shrink-0" />
      <span className="truncate">{phone}</span>
    </a>
  );
}
