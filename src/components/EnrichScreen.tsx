"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { FaTelegramPlane, FaInstagram, FaPhone } from "react-icons/fa";
import { YEREVAN_POPULAR_MEETUP_SPOTS, MEETUP_TIME_SLOTS } from "@/lib/armenianContent";
import type { Profile } from "@/lib/store";
import type { RsvpEntry } from "@/lib/types";
import { cn } from "@/lib/utils";
import { playClick, playPop } from "@/lib/sounds";
import { useDeviceRsvp } from "@/hooks/useDeviceRsvp";

type Props = {
  profile: Profile;
  onContinue: (entry: RsvpEntry) => void;
};

// Pre-final stage — compact layout designed to fit on a single mobile
// viewport. Skip button lives at the top so users can dismiss without
// scrolling; primary Continue lives at the bottom under the form.
export default function EnrichScreen({ profile, onContinue }: Props) {
  const [spot, setSpot] = useState("");
  const [time, setTime] = useState("");
  const [tg, setTg] = useState("");
  const [ig, setIg] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState<"continue" | "skip" | null>(null);
  const device = useDeviceRsvp();

  const filledCount =
    (spot ? 1 : 0) +
    (time ? 1 : 0) +
    (tg.trim() ? 1 : 0) +
    (ig.trim() ? 1 : 0) +
    (phone.trim() ? 1 : 0);

  const submit = async (mode: "continue" | "skip") => {
    if (busy || device.isLoading) return;
    setBusy(mode);
    playClick();

    const enrichment =
      mode === "skip"
        ? {}
        : {
            meetupSpot: spot || undefined,
            meetupTime: time || undefined,
            telegram: tg.trim() || undefined,
            instagram: ig.trim() || undefined,
            phone: phone.trim() || undefined,
          };

    const payload = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      nickname: profile.nickname,
      title: profile.title,
      patriotismScore: profile.patriotismScore,
      avatarSeed: profile.avatarSeed,
      styleIdx: profile.styleIdx,
      overlayIdx: profile.overlayIdx,
      selfie: profile.selfie,
      quizAnswers: profile.quizAnswers,
      verdict: profile.verdict,
      forceId: device.id ?? undefined,
      ...enrichment,
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      const entry = data.entry as RsvpEntry;
      device.remember(entry.id);
      onContinue(entry);
    } catch {
      toast.error("Չստացվեց պահպանել 😬");
      setBusy(null);
    }
  };

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-3 px-3 py-4 md:gap-4 md:py-8">
      {/* Top row: header text on left, big skip button on right */}
      <div className="flex items-start justify-between gap-3">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="min-w-0"
        >
          <div className="text-[9px] uppercase tracking-[0.3em] text-am-gold/80 md:text-[10px]">
            📍 Որտե՞ղ ենք հանդիպում
          </div>
          <h1
            className="text-xl font-black leading-tight md:text-3xl neon-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ՎԵՐՋԻՆ ՔԱՅԼԸ ✨
          </h1>
          <p className="mt-0.5 text-[11px] text-white/60 md:text-xs">
            Որքան շատ լրացնես, այնքան ընկեր կգտնես 👀
          </p>
        </motion.div>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: busy ? 1 : 1.05 }}
          disabled={!!busy || device.isLoading}
          onClick={() => submit("skip")}
          className={cn(
            "shrink-0 self-start rounded-2xl border-2 border-dashed border-white/30 bg-white/[0.04] px-3 py-2 text-[11px] font-black text-white/80 transition hover:border-white/60 hover:bg-white/10 md:px-4 md:py-2.5 md:text-sm",
            busy === "skip" && "cursor-wait opacity-70",
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {busy === "skip" ? "..." : "⏭️ ԲԱՑ ԹՈՂՆԵԼ"}
        </motion.button>
      </div>

      {/* Form card */}
      <motion.section
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 18 }}
        className="glass relative overflow-hidden rounded-2xl p-3 md:p-5"
      >
        <div className="pointer-events-none absolute inset-0 opacity-10 flag-gradient" />

        <div className="relative space-y-3 md:space-y-4">
          {/* Spots */}
          <div>
            <SectionLabel>Հանդիպման վայր</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {YEREVAN_POPULAR_MEETUP_SPOTS.map((s) => {
                const active = spot === s.englishName;
                return (
                  <button
                    key={s.englishName}
                    type="button"
                    onClick={() => {
                      setSpot(active ? "" : s.englishName);
                      playPop();
                    }}
                    className={cn(
                      // Strong border + bg so the chip clearly reads as a tappable
                      // button on first glance, even on mobile (no hover state).
                      "cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-bold transition active:scale-95 md:text-sm",
                      active
                        ? "border-am-gold bg-am-gold text-black shadow-[0_0_18px_rgba(255,204,0,.6)]"
                        : "border-am-gold/40 bg-white/10 text-white hover:border-am-gold hover:bg-am-gold/15",
                    )}
                  >
                    📍 {s.armenianName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Times */}
          <div>
            <SectionLabel>Հանդիպման ժամ</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {MEETUP_TIME_SLOTS.map((t) => {
                const active = time === t.value;
                return (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => {
                      setTime(active ? "" : t.value);
                      playPop();
                    }}
                    className={cn(
                      "cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-bold transition active:scale-95 md:text-sm",
                      active
                        ? "border-am-red bg-am-red text-white shadow-[0_0_18px_rgba(217,0,18,.7)]"
                        : "border-am-red/40 bg-white/10 text-white hover:border-am-red hover:bg-am-red/15",
                    )}
                  >
                    🕒 {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <ContactInput
              icon={<FaTelegramPlane className="text-[#229ED9]" />}
              label="Telegram"
              placeholder="my_handle"
              value={tg}
              onChange={setTg}
              prefix="@"
            />
            <ContactInput
              icon={<FaInstagram className="text-[#E1306C]" />}
              label="Instagram"
              placeholder="my_handle"
              value={ig}
              onChange={setIg}
              prefix="@"
            />
            <ContactInput
              icon={<FaPhone className="text-am-gold" />}
              label="Հեռախոս"
              placeholder="+374 ..."
              value={phone}
              // Strip any non phone-number character as the user types — same
              // allow-list the server uses (digits, +, space, parens, dot, hyphen).
              onChange={(v) => setPhone(v.replace(/[^\d+\s().\-]/g, "").slice(0, 30))}
              type="tel"
              inputMode="tel"
            />
          </div>

          <div className="text-[9px] text-white/40">
            🛡️ Հանրային ա — միայն այն, ինչ լրացնում ես կհայտնվի ցուցակում
          </div>
        </div>
      </motion.section>

      {/* Primary action */}
      <motion.button
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: busy ? 1 : 1.02 }}
        disabled={!!busy || device.isLoading}
        onClick={() => submit("continue")}
        className={cn(
          "w-full rounded-2xl border-2 px-4 py-3 text-base font-black transition md:py-4 md:text-lg",
          busy === "continue"
            ? "cursor-wait border-am-gold bg-am-gold/80 text-black"
            : "border-am-gold bg-am-gold text-black shadow-[0_0_24px_rgba(255,204,0,.45)] hover:brightness-110 disabled:opacity-50",
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {busy === "continue" ? (
          "ՊԱՀՊԱՆՈՒՄ..."
        ) : (
          <>
            🎯 ՊԱՀՊԱՆԵԼ ԵՎ ՇԱՐՈՒՆԱԿԵԼ
            {filledCount > 0 && (
              <span className="ml-2 inline-block rounded-full bg-black/20 px-2 py-0.5 text-[11px]">
                +{filledCount}
              </span>
            )}
          </>
        )}
      </motion.button>

      {/* Red secondary skip — duplicates the top skip for users who scrolled
          past it; sized to match the gold Continue so the choice feels equal. */}
      <motion.button
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: busy ? 1 : 1.02 }}
        disabled={!!busy || device.isLoading}
        onClick={() => submit("skip")}
        className={cn(
          "w-full rounded-2xl border-2 border-am-red px-4 py-3 text-base font-black text-white transition md:py-4 md:text-lg",
          busy === "skip"
            ? "cursor-wait bg-am-red/80"
            : "bg-am-red shadow-[0_0_24px_rgba(217,0,18,.45)] hover:brightness-110 disabled:opacity-50",
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {busy === "skip" ? "ՊԱՀՊԱՆՈՒՄ..." : "⏭️ ԲԱՑ ԹՈՂՆԵԼ ԱՅՍ ՔԱՅԼԸ"}
      </motion.button>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 text-[9px] uppercase tracking-widest text-white/50 md:text-[10px]">
      {children}
    </div>
  );
}

function ContactInput({
  icon,
  label,
  placeholder,
  value,
  onChange,
  prefix,
  type = "text",
  inputMode,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  type?: string;
  inputMode?: "text" | "tel" | "numeric" | "email" | "url" | "search" | "decimal" | "none";
}) {
  return (
    <label className="block">
      <div className="mb-0.5 flex items-center gap-1 text-[9px] uppercase tracking-widest text-white/60 md:text-[10px]">
        <span className="text-sm">{icon}</span>
        {label}
      </div>
      <div className="flex items-stretch overflow-hidden rounded-lg border border-white/15 bg-black/40 focus-within:border-am-gold">
        {prefix && (
          <span className="flex items-center bg-white/5 px-1.5 text-xs text-white/50">{prefix}</span>
        )}
        <input
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-2 py-1.5 text-xs outline-none placeholder:text-white/30 md:text-sm"
        />
      </div>
    </label>
  );
}
