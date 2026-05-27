"use client";

import { useEffect, useState, useCallback } from "react";

export type Stage = "intro" | "setup" | "main" | "yes" | "no";

export type Profile = {
  firstName: string;
  lastName: string;
  selfie: string | null; // data URL (client-side only)
  avatarSeed: string;
  styleIdx: number;
  overlayIdx: number;
  nickname: string;
  title: string;
  patriotismScore: number;
};

const KEY = "republic-day-state-v1";

type Saved = {
  stage: Stage;
  profile: Profile | null;
  noBlocked: boolean;
};

const defaults: Saved = {
  stage: "intro",
  profile: null,
  noBlocked: false,
};

function read(): Saved {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) } as Saved;
  } catch {
    return defaults;
  }
}

function write(s: Saved) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

export function useAppState() {
  const [state, setState] = useState<Saved>(defaults);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(read());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) write(state);
  }, [state, hydrated]);

  const setStage = useCallback((stage: Stage) => setState((s) => ({ ...s, stage })), []);
  const setProfile = useCallback(
    (profile: Profile | null) => setState((s) => ({ ...s, profile })),
    [],
  );
  const setNoBlocked = useCallback(
    (noBlocked: boolean) => setState((s) => ({ ...s, noBlocked })),
    [],
  );
  const reset = useCallback(() => setState(defaults), []);

  return {
    hydrated,
    stage: state.stage,
    profile: state.profile,
    noBlocked: state.noBlocked,
    setStage,
    setProfile,
    setNoBlocked,
    reset,
  };
}
