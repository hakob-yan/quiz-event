// Single source of truth for the app's public origin.
// NEXT_PUBLIC_APP_URL is inlined at build time, so server and client see the
// same value (no hydration mismatch). If unset, URLs are rendered as relative
// paths — that's a misconfiguration, but won't crash the app.

export function getPublicBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim();
  return fromEnv ? fromEnv.replace(/\/+$/, "") : "";
}

export function buildProfileUrl(id: string): string {
  const base = getPublicBaseUrl();
  return base ? `${base}/p/${id}` : `/p/${id}`;
}
