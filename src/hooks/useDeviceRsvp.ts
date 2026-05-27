"use client";

import { useCallback, useEffect, useState } from "react";

// Single localStorage key holding ONLY the user's RSVP id (no profile, no
// answers). Lets us detect repeat visitors and force POST /api/rsvp to update
// the existing entry instead of appending a duplicate row.
const KEY = "rd_rsvp_id_v1";

type Status = "loading" | "fresh" | "returning";

export function useDeviceRsvp() {
  const [id, setIdState] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(KEY);
      setIdState(v);
      setStatus(v ? "returning" : "fresh");
    } catch {
      setStatus("fresh");
    }
  }, []);

  const remember = useCallback((next: string) => {
    setIdState(next);
    setStatus("returning");
    try {
      window.localStorage.setItem(KEY, next);
    } catch {}
  }, []);

  const forget = useCallback(() => {
    setIdState(null);
    setStatus("fresh");
    try {
      window.localStorage.removeItem(KEY);
    } catch {}
  }, []);

  return {
    id,
    status,
    isReturning: status === "returning",
    isLoading: status === "loading",
    remember,
    forget,
  };
}
