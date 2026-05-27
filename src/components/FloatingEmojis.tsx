"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ARMENIAN_EMOJIS } from "@/lib/armenianContent";
import { pick, randomBetween } from "@/lib/utils";

type Drop = { id: number; x: number; emoji: string; duration: number; size: number };

export default function FloatingEmojis({ count = 14 }: { count?: number }) {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const next: Drop[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: randomBetween(0, 100),
      emoji: pick(ARMENIAN_EMOJIS),
      duration: randomBetween(8, 16),
      size: randomBetween(20, 42),
    }));
    setDrops(next);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {drops.map((d) => (
        <motion.div
          key={d.id}
          initial={{ y: "110vh", x: `${d.x}vw`, rotate: 0, opacity: 0 }}
          animate={{ y: "-20vh", rotate: 360, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.id * 0.4,
            ease: "linear",
          }}
          style={{ fontSize: d.size, position: "absolute" }}
        >
          {d.emoji}
        </motion.div>
      ))}
    </div>
  );
}
