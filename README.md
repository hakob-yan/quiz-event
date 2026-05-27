# 🇦🇲 ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ — Republic Day Web App

A chaotic, viral, ironic-patriotic Armenian Republic Day (May 28) micro-app.
Built for TikTok/Instagram shareability. Everything in the UI is in **Armenian**.

> **The whole joke is the "ՉԷ" button.** It runs from your cursor, teleports,
> rotates, spawns decoys, gets more aggressive every time you fail, and on
> mobile drifts around on its own. It's nearly impossible to press.

---

## ✨ What's in it

**Step 1 — Profile setup**
- Cinematic Armenian intro
- Name + last name inputs (in Armenian)
- Optional selfie upload
- Auto-generated DiceBear avatars with chaotic Armenian overlays (🥸 🕶️ 👑 🦅)
- Random funny Armenian nicknames (Խորովածի Թագավոր, Տատի Ֆավորիտ, etc.)

**Step 2 — Main screen**
- Dramatic «{Անուն}, ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ 🇦🇲» headline
- `ԱՅՈ 🇦🇲` button — glowing, dramatic, calls cheering on click
- `ՉԷ 😐` button — see below

**The impossible NO button:**
- Springs away from cursor
- Random teleports across the viewport
- Rotates and rescales chaotically
- Spawns fake decoy buttons
- Sometimes becomes microscopic
- Gets more aggressive each escape (tracked + visualized)
- Drifts on its own on touch devices
- Even if you "click" it, there's a 85%+ chance it dodges
- Spams Armenian insult toasts ("Տատիկը հիասթափված ա")

**Step 3 — Yes**
- Confetti + canvas-confetti fireworks in flag colors
- Cheering / fanfare synth sounds
- Fake patriotic **ID card** with avatar, title, patriotism score
- Download as PNG (via `html-to-image`)
- Native share + copy-link

**RSVP list (on the YES screen)**
- Every YES submission is `POST`ed to `/api/rsvp`, which appends to **`rsvps.json` in the project root** using Node's `fs` module.
- If the user uploaded a selfie, the image is base64-decoded and written to **`public/uploads/{id}.{ext}`** (max 2MB). For DiceBear-only avatars we just store the seed + style index and re-render in-browser.
- Re-submitting the same name + avatar seed **upserts** (preserves original `createdAt` so the user keeps their list position).
- The YES screen then renders «🇦🇲 ՀԱՅՐԵՆԱՍԵՐՆԵՐԻ ՑՈՒՑԱԿ» — animated grid of every patriot who said ԱՅՈ, with a glowing «ԴՈՒ» badge on the current user.

**Step 4 — No**
- Entire screen turns grayscale + CRT effect
- Sad duduk synth plays
- "ՔՈ ՔԱՂԱՔԱՑԻՈՒԹՅՈՒՆԸ ԺԱՄԱՆԱԿԱՎՈՐ ԿԱՍԵՑՎԵԼ Է"
- Fake scanning UI ("Ստուգվում է տատիկի բազան…")
- After 3s the NO button is removed **permanently** — only YES remains

---

## 🧪 Tech

- **Next.js 16 (App Router)** + **TypeScript**
- **Tailwind v4** (CSS-first config in `globals.css`)
- **Framer Motion** + spring physics for the runaway button
- **canvas-confetti** + **react-confetti** for fireworks
- **react-fast-marquee**, **react-parallax-tilt**, **react-wrap-balancer**
- **react-hot-toast** + **sonner** for popups
- **html-to-image** for ID card downloads
- **@dicebear/core** + **@dicebear/collection** for chaotic avatars
- **Web Audio API** for synthetic sounds (no audio files needed — duduk, fanfare, cheers, glitches, warnings all synthesized at runtime)
- **localStorage** persistence — your profile and "no-blocked" state survive reloads

Tiny `fs`-backed backend for the RSVP list. Otherwise fully static.

---

## 🚀 Install & run

```bash
# install (legacy peer deps because react-spring still pins React 18)
npm install

# dev
npm run dev
# → http://localhost:3000

# production build
npm run build
npm run start
```

> `.npmrc` already sets `legacy-peer-deps=true` so `npm install` just works.

---

## ☁️ Deploy to Vercel

**Option 1 — CLI**

```bash
npm i -g vercel
vercel        # follow prompts, accept defaults
vercel --prod # ship it
```

**Option 2 — GitHub + Vercel dashboard**

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new → Import the repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Done

No environment variables, no database, no API keys.

> ⚠️ **One caveat about Vercel + the RSVP list:** Vercel's serverless runtime has a read-only filesystem, so `POST /api/rsvp` won't be able to write `rsvps.json` there. For real deployment swap the route handler for a Vercel KV / Upstash / Postgres write, or self-host on any VPS / Docker / `next start` setup (where the local fs is writable and this Just Works).

---

## 📁 Folder structure

```
republic-day/
├── public/                       # (empty — sounds are synthesized)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # html shell, fonts, metadata
│   │   ├── page.tsx              # stage controller (intro → setup → main → yes/no)
│   │   ├── globals.css           # Tailwind v4 + custom keyframes + neon utilities
│   │   └── api/rsvp/route.ts     # GET/POST RSVP list — writes rsvps.json via fs
│   ├── components/
│   │   ├── CinematicIntro.tsx    # 4-line cinematic opener
│   │   ├── ProfileSetup.tsx      # name + selfie + avatar + nickname
│   │   ├── AvatarPicker.tsx      # DiceBear + overlay cycling
│   │   ├── MainScreen.tsx        # «ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ» screen
│   │   ├── ImpossibleNoButton.tsx# the runaway NO button (the centerpiece)
│   │   ├── YesScreen.tsx         # fireworks + ID card + share + RSVP list
│   │   ├── NoScreen.tsx          # grayscale + scan + duduk + lockout
│   │   ├── PatrioticIDCard.tsx   # downloadable patriot ID
│   │   ├── RSVPList.tsx          # «ՀԱՅՐԵՆԱՍԵՐՆԵՐԻ ՑՈՒՑԱԿ» — who's coming
│   │   └── FloatingEmojis.tsx    # background ambient emojis
│   └── lib/
│       ├── store.ts              # localStorage-backed app state
│       ├── sounds.ts             # WebAudio synth sounds
│       ├── avatar.ts             # DiceBear helpers
│       ├── armenianContent.ts    # all Armenian copy in one place
│       ├── types.ts              # shared RsvpEntry type (client + server)
│       └── utils.ts              # cn(), pick(), randomBetween(), hashString()
├── rsvps.json                    # ← created at runtime by /api/rsvp (gitignored)
├── public/uploads/               # ← selfie images written by /api/rsvp (gitignored)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── .npmrc                        # legacy-peer-deps=true
```

---

## 🎨 Customization

- **All Armenian copy lives in [`src/lib/armenianContent.ts`](src/lib/armenianContent.ts)** — edit nicknames, titles, insults, scanning lines in one place.
- Flag colors are CSS theme tokens in [`globals.css`](src/app/globals.css): `--color-am-red`, `--color-am-blue`, `--color-am-orange`, `--color-am-gold`.
- The NO button's aggression curve lives at the top of [`ImpossibleNoButton.tsx`](src/components/ImpossibleNoButton.tsx) — tweak `threshold`, `teleportChance`, `microChance` for more / less chaos.
- All sounds are synthesized in [`src/lib/sounds.ts`](src/lib/sounds.ts) — replace any of them with `<audio>` files later if you want real duduk.

---

## 🇦🇲 Մայիսի 28 շնորհավորում ենք

Ուղարկիր ընկերներին։ Տատիկը հպարտ կլինի։
