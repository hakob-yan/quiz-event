"use client";

import { motion } from "framer-motion";
import type { Verdict } from "@/lib/types";
import { VERDICT_TEXT } from "@/lib/armenianContent";
import { cn } from "@/lib/utils";

type Size = "stamp" | "chip" | "mini";

export default function VerdictBadge({
  verdict,
  size = "chip",
  animate = false,
}: {
  verdict: Verdict | undefined | null;
  size?: Size;
  animate?: boolean;
}) {
  if (!verdict) return null;
  const cfg = VERDICT_TEXT[verdict];
  const isFail = verdict === "fail";

  if (size === "stamp") {
    return (
      <motion.div
        initial={animate ? { scale: 3, opacity: 0, rotate: -10 } : false}
        animate={{ scale: 1, opacity: 1, rotate: isFail ? -14 : 12 }}
        transition={{ type: "spring", stiffness: 240, damping: 14, delay: animate ? 0.4 : 0 }}
        className={cn(
          "pointer-events-none rounded-full border-4 px-3 py-1 text-sm font-black",
          isFail
            ? "border-red-500 text-red-500 [text-shadow:0_0_12px_rgba(217,0,18,.6)]"
            : "border-am-gold text-am-gold [text-shadow:0_0_12px_rgba(255,204,0,.6)]",
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {cfg.stamp}
      </motion.div>
    );
  }

  if (size === "mini") {
    return (
      <span
        className={cn(
          "inline-flex h-5 items-center gap-0.5 rounded-full px-1.5 text-[8px] font-black uppercase tracking-wider",
          isFail
            ? "bg-red-600/90 text-white"
            : "bg-am-gold text-black",
        )}
        title={cfg.badge}
      >
        <span>{cfg.icon}</span>
        <span>{cfg.badge}</span>
      </span>
    );
  }

  // chip
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest",
        isFail
          ? "bg-red-600/90 text-white shadow-[0_0_18px_rgba(217,0,18,.6)]"
          : "bg-am-gold text-black shadow-[0_0_18px_rgba(255,204,0,.7)]",
      )}
    >
      <span className="text-sm leading-none">{cfg.icon}</span>
      <span>{cfg.badge}</span>
    </span>
  );
}
