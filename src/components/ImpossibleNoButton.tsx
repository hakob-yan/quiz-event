"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FAKE_BUTTON_TEXT, NO_INSULTS } from "@/lib/armenianContent";
import { pick, randomBetween } from "@/lib/utils";
import { playGlitch } from "@/lib/sounds";
import toast from "react-hot-toast";

type Props = {
  onAttempt: () => void;
  aggressionLevel: number; // 0..1, grows with each escape
  onEscape: () => void;
};

// Dodgy NO button that stays close to the YES button.
// Constraints:
//   - Motion offset is clamped to a circle of radius MAX_OFFSET around its origin.
//   - When the cursor isn't near, it springs back toward (0,0) so it never wanders.
//   - No screen-wide teleport — just nervous twitches + rotation + scale jitter.
const MAX_OFFSET_DESKTOP = 90;
const MAX_OFFSET_MOBILE = 60;
const DODGE_THRESHOLD = 70; // px — cursor distance that triggers a dodge

export default function ImpossibleNoButton({ onAttempt, aggressionLevel, onEscape }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rot = useMotionValue(0);
  const scale = useMotionValue(1);

  const sx = useSpring(x, { stiffness: 380, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 380, damping: 22, mass: 0.5 });
  const srot = useSpring(rot, { stiffness: 200, damping: 16 });
  const sscale = useSpring(scale, { stiffness: 220, damping: 18 });

  const btnRef = useRef<HTMLButtonElement>(null);
  const [label, setLabel] = useState("ՉԷ 😐");
  const [fakeCount, setFakeCount] = useState(0);
  const [maxOffset, setMaxOffset] = useState(MAX_OFFSET_DESKTOP);
  const lastToast = useRef(0);

  const aggro = Math.min(1, aggressionLevel);
  const microChance = aggro * 0.35;
  const fakeMax = Math.floor(aggro * 4);

  // Detect coarse pointer (touch) → smaller bounds so it can't drift off card.
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setMaxOffset(mq.matches ? MAX_OFFSET_MOBILE : MAX_OFFSET_DESKTOP);
    const onChange = (e: MediaQueryListEvent) =>
      setMaxOffset(e.matches ? MAX_OFFSET_MOBILE : MAX_OFFSET_DESKTOP);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const fakes = useMemo(() => {
    return Array.from({ length: fakeCount }).map(() => ({
      x: randomBetween(-30, 30),
      y: randomBetween(-22, 50),
      r: randomBetween(-10, 10),
      label: pick(FAKE_BUTTON_TEXT),
    }));
  }, [fakeCount]);

  const maybeShowInsult = useCallback(() => {
    const now = Date.now();
    if (now - lastToast.current < 1100) return;
    lastToast.current = now;
    if (Math.random() < 0.35) {
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

  const bumpFake = useCallback(() => {
    setFakeCount((c) => Math.min(fakeMax, c + 1));
  }, [fakeMax]);

  // Clamp an (x, y) offset to a circle of radius maxOffset around the origin.
  const clampToRadius = useCallback(
    (tx: number, ty: number) => {
      const mag = Math.hypot(tx, ty);
      if (mag <= maxOffset) return { x: tx, y: ty };
      const k = maxOffset / mag;
      return { x: tx * k, y: ty * k };
    },
    [maxOffset],
  );

  // Cursor-based dodge.
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
      if (dist > DODGE_THRESHOLD) return;

      const force = (DODGE_THRESHOLD - dist) / DODGE_THRESHOLD; // 0..1
      const push = (20 + aggro * 40) * force;
      const ang = Math.atan2(dy, dx);
      const tx = x.get() - Math.cos(ang) * push;
      const ty = y.get() - Math.sin(ang) * push;
      const clamped = clampToRadius(tx, ty);
      x.set(clamped.x);
      y.set(clamped.y);
      rot.set(randomBetween(-14, 14));
      if (Math.random() < microChance) scale.set(randomBetween(0.55, 0.8));
      else scale.set(randomBetween(0.92, 1.05));

      maybeShowInsult();
    },
    [aggro, microChance, clampToRadius, x, y, rot, scale, maybeShowInsult],
  );

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

  // Idle drift-back + label twitches. Pulls the button gently toward origin so
  // it never strays — and at higher aggression, jitters rotation/scale a bit.
  useEffect(() => {
    const id = setInterval(() => {
      const cx = x.get();
      const cy = y.get();
      if (Math.abs(cx) > 0.5 || Math.abs(cy) > 0.5) {
        x.set(cx * 0.82);
        y.set(cy * 0.82);
      }
      if (Math.abs(rot.get()) > 0.1) rot.set(rot.get() * 0.7);
      if (Math.abs(scale.get() - 1) > 0.01) {
        scale.set(scale.get() + (1 - scale.get()) * 0.25);
      }
      if (aggro > 0.3 && Math.random() < 0.35) {
        setLabel(`${pick(FAKE_BUTTON_TEXT)} 😐`);
      }
    }, 240);
    return () => clearInterval(id);
  }, [aggro, x, y, rot, scale]);

  const handleClick = () => {
    // At higher aggression, the click occasionally "slips" — but the button
    // never runs far; it just twitches and rebumps a decoy.
    const dodgeProb = 0.5 + aggro * 0.35;
    if (Math.random() < dodgeProb) {
      onEscape();
      maybeShowInsult();
      playGlitch();
      bumpFake();
      // Quick nervous twitch within the same dodge circle.
      const ang = Math.random() * Math.PI * 2;
      const r = maxOffset * randomBetween(0.5, 0.95);
      x.set(Math.cos(ang) * r);
      y.set(Math.sin(ang) * r);
      rot.set(randomBetween(-18, 18));
      scale.set(randomBetween(0.7, 1.05));
      return;
    }
    onAttempt();
  };

  return (
    <div
      className="relative inline-block"
      style={{ width: maxOffset * 2 + 140, height: maxOffset * 2 + 80 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Fake decoys — also stay inside the dodge area */}
        {fakes.map((f, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
            style={{
              position: "absolute",
              left: `calc(50% + ${f.x}px)`,
              top: `calc(50% + ${f.y}px)`,
              transform: `translate(-50%,-50%) rotate(${f.r}deg)`,
              pointerEvents: "none",
            }}
            className="rounded-2xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-black text-white/50"
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
    </div>
  );
}
