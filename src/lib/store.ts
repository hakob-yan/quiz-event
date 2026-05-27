"use client";

import { useCallback, useState } from "react";
import type { QuizAnswer, Verdict } from "@/lib/types";

export type Stage = "intro" | "setup" | "quiz" | "main" | "enrich" | "yes" | "no";

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
  quizAnswers?: QuizAnswer[];
  verdict?: Verdict;
};

type State = {
  stage: Stage;
  profile: Profile | null;
  noBlocked: boolean;
};

const defaults: State = {
  stage: "intro",
  profile: null,
  noBlocked: false,
};

// In-memory only. The server (rsvps.json via fs) is the source of truth for
// preserved data; client state is intentionally ephemeral so every visit
// is a fresh ritual.
export function useAppState() {
  const [state, setState] = useState<State>(defaults);

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
    stage: state.stage,
    profile: state.profile,
    noBlocked: state.noBlocked,
    setStage,
    setProfile,
    setNoBlocked,
    reset,
  };
}
