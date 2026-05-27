"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FAKE_BUTTON_TEXT, NO_INSULTS } from "@/lib/armenianContent";
import { pick, randomBetween } from "@/lib/utils";
import { playGlitch, playTeleport } from "@/lib/sounds";
import toast from "react-hot-toast";

type Props = {
  onAttempt: () => void;
  aggressionLevel: number; // 0..1, grows with each escape
  onEscape: () => void;
};

// Spring-driven runaway button that flees the cursor with rising aggression.
// It also rotates, scales, duplicates fake versions, and shows insult toasts.
export default function ImpossibleNoButton({ onAttempt, aggressionLevel, onEscape }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rot = useMotionValue(0);
  const scale = useMotionValue(1);

  const sx = useSpring(x, { stiffness: 360, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 360, damping: 18, mass: 0.6 });
  const srot = useSpring(rot, { stiffness: 180, damping: 16 });
  const sscale = useSpring(scale, { stiffness: 220, damping: 18 });

  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [label, setLabel] = useState("ՉԷ 😐");
  const [fakeCount, setFakeCount] = useState(0);
  const lastToast = useRef(0);

  // Aggression-derived runtime settings
  const aggro = Math.min(1, aggressionLevel);
  const threshold = 220 - aggro * 130; // px — bigger field as aggression rises
  const teleportChance = 0.08 + aggro * 0.25;
  const microChance = aggro * 0.4;
  const fakeMax = Math.floor(aggro * 5);

  // Build fake button positions whenever count changes
  const fakes = useMemo(() => {
    return Array.from({ length: fakeCount }).map(() => ({
      x: randomBetween(-40, 40),
      y: randomBetween(-30, 80),
      r: randomBetween(-15, 15),
      label: pick(FAKE_BUTTON_TEXT),
    }));
  }, [fakeCount]);

  // Track viewport
  const move = useCallback(
    (mx: number, my: number) => {
      const btn = btnRef.current;
      if (!btn) return;
      const cur = btn.getBoundingClientRect();
      const cx = cur.left + cur.width / 2;
      const cy = cur.top + cur.height / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > threshold) return;

      // Random teleport sometimes
      if (Math.random() < teleportChance) {
        playTeleport();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const targetX = randomBetween(40, vw - cur.width - 40);
        const targetY = randomBetween(100, vh - cur.height - 40);
        x.set(x.get() + (targetX - cur.left));
        y.set(y.get() + (targetY - cur.top));
        rot.set(randomBetween(-30, 30));
        scale.set(Math.random() < microChance ? 0.4 : randomBetween(0.85, 1.15));
        bumpFake();
        return;
      }

      // Otherwise: spring away from cursor
      const force = (threshold - dist) / threshold; // 0..1
      const push = (60 + aggro * 200) * force;
      const ang = Math.atan2(dy, dx);
      const tx = x.get() - Math.cos(ang) * push;
      const ty = y.get() - Math.sin(ang) * push;
      // Clamp to viewport: convert desired motion-value to safe range.
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const curX = x.get();
      const curY = y.get();
      const minX = curX + 16 - cur.left;
      const maxX = curX + vw - 16 - cur.right;
      const minY = curY + 80 - cur.top;
      const maxY = curY + vh - 16 - cur.bottom;
      x.set(Math.max(minX, Math.min(maxX, tx)));
      y.set(Math.max(minY, Math.min(maxY, ty)));
      rot.set(randomBetween(-20, 20));
      if (Math.random() < microChance) scale.set(randomBetween(0.35, 0.7));
      else scale.set(randomBetween(0.9, 1.05));

      maybeShowInsult();
    },
    [threshold, teleportChance, microChance, aggro], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const bumpFake = useCallback(() => {
    setFakeCount((c) => Math.min(fakeMax, c + 1));
  }, [fakeMax]);

  const maybeShowInsult = useCallback(() => {
    const now = Date.now();
    if (now - lastToast.current < 900) return;
    lastToast.current = now;
    if (Math.random() < 0.5) {
      toast(pick(NO_INSULTS), {
        position: "top-center",
        style: {
          background: "rgba(217,0,18,.95)",
          color: "white",
          fontWeight: 900,
          border: "1px solid rgba(255,204,0,.5)",
          fontSize: 14,
        },
        duration: 1800,
      });
      playGlitch();
    }
  }, []);

  // Mouse + touch listeners
  useEffect(() => {
    const onMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) move(t.clientX, t.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [move]);

  // Touch-device: button drifts on its own and changes label sometimes
  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.35) {
        setLabel(`${pick(FAKE_BUTTON_TEXT)} 😐`);
      }
      if (aggro > 0.4 && Math.random() < 0.5) {
        rot.set(randomBetween(-25, 25));
        scale.set(randomBetween(0.7, 1.1));
      }
    }, 1400);
    return () => clearInterval(id);
  }, [aggro, rot, scale]);

  const handleClick = () => {
    // 90% chance the button "dodges" the click anyway
    if (Math.random() < 0.85 + aggro * 0.1) {
      onEscape();
      maybeShowInsult();
      playGlitch();
      bumpFake();
      // teleport
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const wrapRect = wrapRef.current?.getBoundingClientRect();
      if (wrapRect) {
        x.set(randomBetween(60, vw - 220) - wrapRect.left - 80);
        y.set(randomBetween(120, vh - 200) - wrapRect.top - 30);
      }
      return;
    }
    onAttempt();
  };

  return (
    <div ref={wrapRef} className="relative inline-block">
      {/* Fake decoys */}
      {fakes.map((f, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          style={{
            position: "absolute",
            left: `${50 + f.x}%`,
            top: `${50 + f.y}%`,
            transform: `translate(-50%,-50%) rotate(${f.r}deg)`,
            pointerEvents: "none",
          }}
          className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-black text-white/60"
        >
          {f.label}
        </motion.span>
      ))}

      <motion.button
        ref={btnRef}
        onClick={handleClick}
        style={{ x: sx, y: sy, rotate: srot, scale: sscale }}
        className="relative z-10 rounded-2xl border-2 border-white/30 bg-black/60 px-8 py-4 text-xl font-black text-white/90 shadow-[0_0_40px_rgba(255,255,255,.1)] hover:bg-black/80"
      >
        {label}
      </motion.button>
    </div>
  );
}
