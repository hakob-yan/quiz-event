"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  ViberShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  ViberIcon,
} from "react-share";
import { playPop } from "@/lib/sounds";

type Props = {
  url: string;
  text: string;
  label?: string;
};

export default function ShareMenu({ url, text, label = "ԿԻՍՎԵԼ ԸՆԿԵՐՆԵՐԻ ՀԵՏ" }: Props) {
  const [busy, setBusy] = useState(false);

  const disabled = !url;

  const handleNativeShare = async () => {
    if (disabled) return;
    setBusy(true);
    playPop();
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "Մայիսի 28 🇦🇲", text, url });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast.success("Հղումը պատճենված է 📋");
      }
    } catch {
      // user canceled — silent
    } finally {
      setBusy(false);
    }
  };

  const handleCopy = async () => {
    if (disabled) return;
    playPop();
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Հղումը պատճենված է 📋");
    } catch {
      toast.error("Չստացվեց պատճենել");
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="glass w-full rounded-3xl p-4 md:p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-[0.3em] text-am-gold/80">{label}</div>
        {disabled && (
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            Պատրաստվում է…
          </div>
        )}
      </div>

      <div className={`flex flex-wrap items-center justify-center gap-2 ${disabled ? "pointer-events-none opacity-40" : ""}`}>
        <WhatsappShareButton url={url} title={text} separator=" ">
          <PlatformWrapper onClick={() => playPop()} bg="#25D366">
            <WhatsappIcon size={40} round />
          </PlatformWrapper>
        </WhatsappShareButton>

        <TelegramShareButton url={url} title={text}>
          <PlatformWrapper onClick={() => playPop()} bg="#229ED9">
            <TelegramIcon size={40} round />
          </PlatformWrapper>
        </TelegramShareButton>

        <FacebookShareButton url={url} hashtag="#Հայաստան28">
          <PlatformWrapper onClick={() => playPop()} bg="#1877F2">
            <FacebookIcon size={40} round />
          </PlatformWrapper>
        </FacebookShareButton>

        <TwitterShareButton url={url} title={text} hashtags={["Հայաստան", "Մայիսի28", "RepublicDay"]}>
          <PlatformWrapper onClick={() => playPop()} bg="#000">
            <XIcon size={40} round />
          </PlatformWrapper>
        </TwitterShareButton>

        <ViberShareButton url={url} title={text}>
          <PlatformWrapper onClick={() => playPop()} bg="#7360F2">
            <ViberIcon size={40} round />
          </PlatformWrapper>
        </ViberShareButton>

        <EmailShareButton url={url} subject="Մայիսի 28 🇦🇲" body={`${text}\n\n`}>
          <PlatformWrapper onClick={() => playPop()} bg="#444">
            <EmailIcon size={40} round />
          </PlatformWrapper>
        </EmailShareButton>

        <button
          onClick={handleCopy}
          aria-label="Պատճենել հղումը"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base transition hover:scale-110 hover:bg-white/20 active:scale-95"
        >
          🔗
        </button>

        <button
          onClick={handleNativeShare}
          disabled={busy}
          aria-label="Համակարգային կիսում"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-am-gold text-black transition hover:scale-110 active:scale-95"
        >
          📲
        </button>
      </div>

      {url && (
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2">
          <span className="shrink-0 text-xs uppercase tracking-widest text-white/40">URL</span>
          <span className="truncate text-xs text-white/80">{url}</span>
          <button
            onClick={handleCopy}
            className="ml-auto shrink-0 rounded bg-white/10 px-2 py-1 text-[10px] font-bold hover:bg-white/20"
          >
            Պատճենել
          </button>
        </div>
      )}
    </motion.div>
  );
}

function PlatformWrapper({
  children,
  bg,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  bg: string;
}) {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition hover:scale-110 active:scale-95"
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}
