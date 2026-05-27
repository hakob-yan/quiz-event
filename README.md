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

**Step 2 — Crazy quiz («Անկախության Սերունդ»)**
- 3 random questions drawn from a 10-question pool of chaotic/embarrassing Armenian Gen-Z prompts ("Քանի՞ selfie ես արել միայն story դնելու համար 📸", "Եթե anonymous confession wall լիներ, ինչ կգրեիր 👀", …).
- Computing screen («Տատիկը հաշվարկում է...») then a giant stamp reveal.
- Verdict is **randomly picked but weighted by the answers** — higher option indices and matching the marked "most-honest" option nudge slightly toward FAIL. Range: 20–80% fail, hard-clamped, so the result still feels chaotic.
- Outcome → `SUCCESS` (ՎԱՐՊԵՏ ՀԱՅՐԵՆԱՍԵՐ ✓ — gold stamp) or `FAIL` (ՏԱՏԻԿԸ ՉԻ ՀԱՎԱՆԵԼ ✗ — red stamp).
- Both verdicts proceed to the YES/NO screen — failing the quiz doesn't lock you out, it just brands your card and your row in the list.

**Step 3 — Main screen**
- Dramatic «{Անուն}, ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ 🇦🇲» headline
- `ԱՅՈ 🇦🇲` button — glowing, dramatic, calls cheering on click
- `ՉԷ 😐` button — see below

**The impossible NO button:**
- Stays close to the YES button — never escapes off-screen. Motion is hard-clamped to a 90px (60px on mobile) radius around its origin and gently springs back to (0,0) whenever the cursor isn't near.
- Dodges only when the cursor enters its threshold (no teleport)
- Rotates and rescales chaotically; occasionally becomes microscopic
- Spawns fake decoy buttons inside the same dodge area
- Gets more aggressive each escape (tracked + visualized)
- Drifts and twitches on touch devices
- Click slip-probability scales with aggression (50%→85%)
- Spams Armenian insult toasts ("Տատիկը հիասթափված ա")

**Step 4 — Yes**
- Confetti + canvas-confetti fireworks in flag colors
- Cheering / fanfare synth sounds
- Fake patriotic **ID card** with avatar, title, patriotism score, and the SUCCESS/FAIL verdict stamp animated in
- Download as PNG (via `html-to-image`)
- Native share + copy-link (via the ShareMenu)

**Per-user public page (`/p/[id]`)**
- Every confirmed patriot gets a permanent shareable URL like `https://yoursite.com/p/8544d9b9…`.
- Renders the user's full patriotic ID card with confetti + duduk + fanfare.
- Has its own per-user **OG / Twitter card metadata** (title, description, image) generated server-side from `rsvps.json` — so when shared on WhatsApp / Telegram / Facebook / X / Viber, the preview already says «{Անուն} {Ազգանուն} — ՀԱՍՏԱՏՎԱԾ ՀԱՅՐԵՆԱՍԵՐ 🇦🇲».
- Includes a **«🦅 ՍԿՍԵԼ ԻՄ ID-Ն»** CTA that drops the visitor into the main flow to make their own.
- Returns a 404 for unknown ids.

**Share menu (`<ShareMenu>`)**
- Renders one-tap share buttons via `react-share`:
  WhatsApp · Telegram · Facebook · X · Viber · Email · Copy-link · Native (📲 navigator.share)
- Always shares the visitor's **own per-user URL** (`/p/{myId}`), not the home page, so each share funnels people to that user's profile and the «start your own ID» CTA.
- Used on both the YES screen and the public profile page.

**RSVP list (on the YES screen)**
- Every YES submission is `POST`ed to `/api/rsvp`, which appends to **`rsvps.json` in the project root** using Node's `fs` module.
- If the user uploaded a selfie, the image is base64-decoded and written to **`public/uploads/{id}.{ext}`** (max 2MB). For DiceBear-only avatars we just store the seed + style index and re-render in-browser.
- Re-submitting the same name + avatar seed **upserts** (preserves original `createdAt`, prior selfie, and prior quiz answers / verdict if the new submission omits them — so the user keeps their list position and their stamp).
- Each entry also stores `quizAnswers` + `verdict`, which drives the SUCCESS / FAIL chip rendered on each tile.
- The YES screen then renders «🇦🇲 ՀԱՅՐԵՆԱՍԵՐՆԵՐԻ ՑՈՒՑԱԿ» — animated grid of every patriot who said ԱՅՈ, with a glowing «ԴՈՒ» badge on the current user.

**Step 5 — No**
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
- **Server-side persistence + one localStorage flag** — profile/answers live only in memory; the server's `rsvps.json` is the source of truth. We persist **only the user's entry id** in `localStorage["rd_rsvp_id_v1"]`, which lets us:
  - detect return visits and show a sassy «🔁 ՎԵՐԱԴԱՐՁ» banner + toast in Armenian
  - send `forceId` on subsequent POSTs so the server **replaces** the user's existing entry instead of appending a duplicate row, even if they change their name or avatar

Tiny `fs`-backed backend for the RSVP list. Otherwise fully static.

---

## 🚀 Install & run

```bash
# install (legacy peer deps because react-spring still pins React 18)
npm install

# 1) set your public origin — required for share links & OG metadata
cp .env.example .env.local
# then edit .env.local and set NEXT_PUBLIC_APP_URL=https://your-domain.example.com
#   (or http://localhost:3000 for local dev)

# 2) dev
npm run dev
# → http://localhost:3000

# 3) production build
npm run build
npm run start
```

> `.npmrc` already sets `legacy-peer-deps=true` so `npm install` just works.

### Environment variables

| Variable | Purpose | Required? |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Public origin used to build share URLs and OG metadata (`metadataBase`). Inlined at build time, so it must be set before `next build`. | **Yes for prod / share-able links** (without it, share URLs render as relative paths and OG image absolutization can't happen) |

The app never falls back to `window.location.origin` — share URLs are deterministic and always come from `NEXT_PUBLIC_APP_URL`. This avoids dev/prod hostname leaks and SSR/CSR hydration mismatches.

---

## ☁️ Deploy to Vercel

**Option 1 — CLI**

```bash
npm i -g vercel
vercel        # follow prompts, accept defaults
vercel env add NEXT_PUBLIC_APP_URL  # paste your prod origin
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
│   │   ├── api/rsvp/route.ts     # GET/POST RSVP list — writes rsvps.json via fs
│   │   └── p/[id]/
│   │       ├── page.tsx          # public per-user profile (server, OG metadata)
│   │       └── PublicProfile.tsx # animated card + share + reserve CTA
│   ├── components/
│   │   ├── CinematicIntro.tsx    # 4-line cinematic opener
│   │   ├── ProfileSetup.tsx      # name + selfie + avatar + nickname
│   │   ├── AvatarPicker.tsx      # DiceBear + overlay cycling
│   │   ├── MainScreen.tsx        # «ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ» screen
│   │   ├── ImpossibleNoButton.tsx# the runaway NO button (the centerpiece)
│   │   ├── YesScreen.tsx         # fireworks + ID card + share + RSVP list
│   │   ├── NoScreen.tsx          # grayscale + scan + duduk + lockout
│   │   ├── PatrioticIDCard.tsx   # downloadable patriot ID + verdict stamp
│   │   ├── QuizStage.tsx         # 3 random Qs + Soviet-judge verdict reveal
│   │   ├── VerdictBadge.tsx      # SUCCESS / FAIL chip+stamp (stamp/chip/mini)
│   │   ├── RSVPList.tsx          # «ՀԱՅՐԵՆԱՍԵՐՆԵՐԻ ՑՈՒՑԱԿ» — who's coming
│   │   ├── ShareMenu.tsx         # WhatsApp/Telegram/FB/X/Viber/Email/native share
│   │   └── FloatingEmojis.tsx    # background ambient emojis
│   └── lib/
│       ├── store.ts              # localStorage-backed app state
│       ├── sounds.ts             # WebAudio synth sounds
│       ├── avatar.ts             # DiceBear helpers
│       ├── armenianContent.ts    # all Armenian copy in one place
│       ├── types.ts              # shared RsvpEntry type (client + server)
│       ├── rsvpStore.ts          # server-only fs helpers (readEntries/findEntry/…)
│       └── utils.ts              # cn(), pick(), randomBetween(), hashString()
│   └── hooks/
│       └── useDeviceRsvp.ts      # localStorage flag holding ONLY the user's RSVP id
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
