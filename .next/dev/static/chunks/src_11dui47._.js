(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppState",
    ()=>useAppState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const defaults = {
    stage: "intro",
    profile: null,
    noBlocked: false
};
function useAppState() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaults);
    const setStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[setStage]": (stage)=>setState({
                "useAppState.useCallback[setStage]": (s)=>({
                        ...s,
                        stage
                    })
            }["useAppState.useCallback[setStage]"])
    }["useAppState.useCallback[setStage]"], []);
    const setProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[setProfile]": (profile)=>setState({
                "useAppState.useCallback[setProfile]": (s)=>({
                        ...s,
                        profile
                    })
            }["useAppState.useCallback[setProfile]"])
    }["useAppState.useCallback[setProfile]"], []);
    const setNoBlocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[setNoBlocked]": (noBlocked)=>setState({
                "useAppState.useCallback[setNoBlocked]": (s)=>({
                        ...s,
                        noBlocked
                    })
            }["useAppState.useCallback[setNoBlocked]"])
    }["useAppState.useCallback[setNoBlocked]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[reset]": ()=>setState(defaults)
    }["useAppState.useCallback[reset]"], []);
    return {
        stage: state.stage,
        profile: state.profile,
        noBlocked: state.noBlocked,
        setStage,
        setProfile,
        setNoBlocked,
        reset
    };
}
_s(useAppState, "04M8hbpjujaAVP2VR/jTdB/piqg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playCheer",
    ()=>playCheer,
    "playClick",
    ()=>playClick,
    "playFanfare",
    ()=>playFanfare,
    "playFirework",
    ()=>playFirework,
    "playGlitch",
    ()=>playGlitch,
    "playPop",
    ()=>playPop,
    "playSadDuduk",
    ()=>playSadDuduk,
    "playTeleport",
    ()=>playTeleport,
    "playWarning",
    ()=>playWarning,
    "unlockAudio",
    ()=>unlockAudio
]);
"use client";
// Synthetic sounds via Web Audio API — no asset files needed.
// Each helper returns a function you can call to fire the sound.
let ctx = null;
function getCtx() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!ctx) {
        const w = window;
        const AC = window.AudioContext || w.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
    }
    return ctx;
}
function unlockAudio() {
    const c = getCtx();
    if (!c) return;
    if (c.state === "suspended") c.resume().catch(()=>{});
}
function tone(o) {
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime;
    const dur = o.duration ?? 0.3;
    const osc = c.createOscillator();
    const amp = c.createGain();
    osc.type = o.type ?? "sine";
    osc.frequency.setValueAtTime(o.freq, t0);
    if (o.detune) osc.detune.setValueAtTime(o.detune, t0);
    if (o.vibrato) {
        const lfo = c.createOscillator();
        const lfoGain = c.createGain();
        lfo.frequency.value = o.vibrato.freq;
        lfoGain.gain.value = o.vibrato.depth;
        lfo.connect(lfoGain).connect(osc.frequency);
        lfo.start(t0);
        lfo.stop(t0 + dur + 0.1);
    }
    const peak = o.gain ?? 0.2;
    const atk = o.attack ?? 0.01;
    const rel = o.release ?? 0.15;
    amp.gain.setValueAtTime(0, t0);
    amp.gain.linearRampToValueAtTime(peak, t0 + atk);
    amp.gain.linearRampToValueAtTime(peak * 0.7, t0 + dur - rel);
    amp.gain.linearRampToValueAtTime(0, t0 + dur);
    osc.connect(amp).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
}
function noiseBurst(duration = 0.5, gain = 0.15, filterFreq = 1200) {
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime;
    const buf = c.createBuffer(1, Math.floor(c.sampleRate * duration), c.sampleRate);
    const data = buf.getChannelData(0);
    for(let i = 0; i < data.length; i++)data[i] = (Math.random() * 2 - 1) * 0.8;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = filterFreq;
    const amp = c.createGain();
    amp.gain.setValueAtTime(gain, t0);
    amp.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    src.connect(filter).connect(amp).connect(c.destination);
    src.start(t0);
}
function playClick() {
    tone({
        freq: 880,
        duration: 0.08,
        type: "square",
        gain: 0.08,
        release: 0.06
    });
}
function playPop() {
    tone({
        freq: 660,
        duration: 0.12,
        type: "triangle",
        gain: 0.15
    });
    setTimeout(()=>tone({
            freq: 1320,
            duration: 0.08,
            type: "triangle",
            gain: 0.1
        }), 40);
}
function playWarning() {
    // Soviet-style dramatic alarm
    tone({
        freq: 220,
        duration: 0.6,
        type: "sawtooth",
        gain: 0.12
    });
    setTimeout(()=>tone({
            freq: 180,
            duration: 0.6,
            type: "sawtooth",
            gain: 0.12
        }), 200);
}
function playGlitch() {
    for(let i = 0; i < 4; i++){
        setTimeout(()=>noiseBurst(0.08, 0.08, 800 + Math.random() * 2000), i * 50);
    }
}
function playSadDuduk() {
    // Duduk approximation: sustained low woody tone with vibrato + slow bend.
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime;
    const dur = 4;
    const osc = c.createOscillator();
    const osc2 = c.createOscillator();
    const amp = c.createGain();
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 900;
    osc.type = "triangle";
    osc.frequency.setValueAtTime(196, t0); // G3
    osc.frequency.linearRampToValueAtTime(174, t0 + dur); // F3 — sliding down sad
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(196 * 2, t0);
    osc2.frequency.linearRampToValueAtTime(174 * 2, t0 + dur);
    const lfo = c.createOscillator();
    const lfoGain = c.createGain();
    lfo.frequency.value = 5.5;
    lfoGain.gain.value = 4;
    lfo.connect(lfoGain).connect(osc.frequency);
    lfo.start(t0);
    lfo.stop(t0 + dur);
    amp.gain.setValueAtTime(0, t0);
    amp.gain.linearRampToValueAtTime(0.14, t0 + 0.4);
    amp.gain.linearRampToValueAtTime(0.12, t0 + dur - 0.6);
    amp.gain.linearRampToValueAtTime(0, t0 + dur);
    const amp2 = c.createGain();
    amp2.gain.value = 0.04;
    osc.connect(filter).connect(amp).connect(c.destination);
    osc2.connect(amp2).connect(c.destination);
    osc.start(t0);
    osc2.start(t0);
    osc.stop(t0 + dur);
    osc2.stop(t0 + dur);
}
function playCheer() {
    // Crowd-ish cheering = filtered noise + rising tones
    noiseBurst(1.6, 0.13, 1500);
    for(let i = 0; i < 8; i++){
        setTimeout(()=>{
            tone({
                freq: 400 + Math.random() * 700,
                duration: 0.25 + Math.random() * 0.3,
                type: "sawtooth",
                gain: 0.05
            });
        }, i * 120);
    }
}
function playFirework() {
    noiseBurst(0.7, 0.18, 2400);
    tone({
        freq: 90,
        duration: 0.5,
        type: "sine",
        gain: 0.3
    });
}
function playFanfare() {
    const notes = [
        392,
        523,
        659,
        784,
        1047
    ];
    notes.forEach((f, i)=>{
        setTimeout(()=>tone({
                freq: f,
                duration: 0.32,
                type: "square",
                gain: 0.08,
                vibrato: {
                    freq: 6,
                    depth: 5
                }
            }), i * 110);
    });
}
function playTeleport() {
    tone({
        freq: 1200,
        duration: 0.12,
        type: "sine",
        gain: 0.08,
        release: 0.1
    });
    setTimeout(()=>tone({
            freq: 400,
            duration: 0.1,
            type: "triangle",
            gain: 0.06
        }), 50);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDeviceRsvp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeviceRsvp",
    ()=>useDeviceRsvp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// Single localStorage key holding ONLY the user's RSVP id (no profile, no
// answers). Lets us detect repeat visitors and force POST /api/rsvp to update
// the existing entry instead of appending a duplicate row.
const KEY = "rd_rsvp_id_v1";
function useDeviceRsvp() {
    _s();
    const [id, setIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDeviceRsvp.useEffect": ()=>{
            try {
                const v = window.localStorage.getItem(KEY);
                setIdState(v);
                setStatus(v ? "returning" : "fresh");
            } catch  {
                setStatus("fresh");
            }
        }
    }["useDeviceRsvp.useEffect"], []);
    const remember = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDeviceRsvp.useCallback[remember]": (next)=>{
            setIdState(next);
            setStatus("returning");
            try {
                window.localStorage.setItem(KEY, next);
            } catch  {}
        }
    }["useDeviceRsvp.useCallback[remember]"], []);
    const forget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDeviceRsvp.useCallback[forget]": ()=>{
            setIdState(null);
            setStatus("fresh");
            try {
                window.localStorage.removeItem(KEY);
            } catch  {}
        }
    }["useDeviceRsvp.useCallback[forget]"], []);
    return {
        id,
        status,
        isReturning: status === "returning",
        isLoading: status === "loading",
        remember,
        forget
    };
}
_s(useDeviceRsvp, "3oerKCOodNVVA9jrnH/XLV6iDro=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/armenianContent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Armenian content bank — used across the app for chaotic vibes.
__turbopack_context__.s([
    "ARMENIAN_EMOJIS",
    ()=>ARMENIAN_EMOJIS,
    "COMPUTING_LINES",
    ()=>COMPUTING_LINES,
    "FAKE_BUTTON_TEXT",
    ()=>FAKE_BUTTON_TEXT,
    "INTRO_LINES",
    ()=>INTRO_LINES,
    "MEETUP_TIME_SLOTS",
    ()=>MEETUP_TIME_SLOTS,
    "NICKNAMES",
    ()=>NICKNAMES,
    "NO_INSULTS",
    ()=>NO_INSULTS,
    "PATRIOTIC_LINES",
    ()=>PATRIOTIC_LINES,
    "QUIZ_QUESTIONS",
    ()=>QUIZ_QUESTIONS,
    "RETURNING_BANNER",
    ()=>RETURNING_BANNER,
    "RETURNING_USER_TOASTS",
    ()=>RETURNING_USER_TOASTS,
    "SCANNING_LINES",
    ()=>SCANNING_LINES,
    "SHARE_MESSAGES",
    ()=>SHARE_MESSAGES,
    "TITLES",
    ()=>TITLES,
    "VERDICT_TEXT",
    ()=>VERDICT_TEXT,
    "YEREVAN_POPULAR_MEETUP_SPOTS",
    ()=>YEREVAN_POPULAR_MEETUP_SPOTS
]);
const NICKNAMES = [
    "Գագո Բետոն",
    "Տիկո Դիզել",
    "Կարո Գայլ",
    "Հայկո Շաշլիկ",
    "Սերոժ 220 Վոլտ",
    "Արմո Wi-Fi",
    "Լևոն Տերմինատոր",
    "Գոռ Գորիլա",
    "Վրեժ Անպատասխան",
    "Մհեր Խաշլամա",
    "Աշոտ Ֆեռառի",
    "Տիգրան Նո Բրեյքս",
    "Կամո Պրոբլեմ",
    "Գագիկ Ռաբիզ Քինգ",
    "Հովո Կատաստրոֆա",
    "Սպարտակ Ցեմենտ",
    "Կարեն ԼավԵղի",
    "Էդգար Շաուրմա",
    "Զոհրա Մատրիցա",
    "Վարդան Կռուտիտների Թագավոր",
    "Կյանքս.exe crashed",
    "Սիրուս 404 not found",
    "Հոգիս WiFi չունի",
    "Արևս բայց անձրևոտ տարբերակ",
    "Սրտիս դիզելային շարժիչ",
    "Սերիս ռումբ 24/7",
    "Անգելս բայց քաոս mode",
    "Բալաս բայց boss fight",
    "Լույսս flicker mode",
    "Ժպիտս but sarcastic edition",
    "Հրաշքս glitch in reality",
    "Իմ ամեն ինչ + lag",
    "Քաղցրիկս բայց spicy",
    "Սրտիկս low battery",
    "Աշխարհս error 500",
    "Սերիս nuclear edition",
    "Հոգիս airplane mode",
    "Թանկս but unstable connection",
    "Սիրելի ջանս but danger zone",
    "Իմ կյանքս GTA Armenian edition"
];
const TITLES = [
    "Խորովածի Վարպետ",
    "Քոչարիի Գեներալ",
    "Ազգային WiFi Պաշտպան",
    "Տոլմայի Մինիստր",
    "Տատի Ընտրյալ",
    "Սևանի Արծիվ",
    "Հանրապետության Պահապան",
    "Արարատի Ասպետ",
    "Դուդուկի Մաեստրո",
    "Լավաշի Լորդ",
    "Քյաբաբի Կանցլեր",
    "Մայիսյան Մարտիկ"
];
const NO_INSULTS = [
    "Լավ փորձ էր ախպեր 😏",
    "Տատիկը հիասթափված ա 👵",
    "Քաղաքացիությունը ստուգման մեջ ա 📋",
    "Էս ի՞նչ խայտառակություն ա 🤦",
    "Բոլոր մորաքույրները դատում են քեզ 👯",
    "Հայրենասիրությունը չի գտնվել 🔍",
    "Քո WiFi-ը կանջատվի հիմա ⚡",
    "Խորովածից զրկվելու ես 🥩",
    "Հարևանները ձայնագրում են 🎙️",
    "Տատիկը զանգում ա մյուս տատիկին 📞",
    "Դու լավ չես, ապեր… 😔",
    "Մայիսի 28-ը նեղանում ա քեզ վրա 📅",
    "Դուդուկը հիմա տխուր ա նվագում 🎵",
    "Քոչարիից դուրս ես հանվել 🚷",
    "Արարատը հետ ա շրջվել 🏔️"
];
const SCANNING_LINES = [
    "Ստուգվում է տատիկի բազան...",
    "Հաշվարկվում է խորովածի հավատարմությունը...",
    "Հարևանները քննարկում են քեզ...",
    "Մորաքույրները գումարվում են խորհրդակցության...",
    "Համեմատվում է դուդուկի IQ-ն...",
    "Փնտրվում է կորած հայրենասիրությունը...",
    "Բացվում է «Հայ ենք» արխիվը...",
    "Կարգավորվում է լավաշի սերտիֆիկատը...",
    "Ակտիվանում է Արարատի GPS-ը...",
    "Քյաբաբի սպասարկուն լաց է լինում..."
];
const PATRIOTIC_LINES = [
    "ՎԱՐՊԵՏԸ ՀԱՅԵՐՆ ԵՆ",
    "ՀԱՅԵՐ ՄԻԱՑԵՔ",
    "ՄԱՅԻՍԻ 28 — ԱՆՄԱՀ",
    "ԱՐԱՐԱՏԸ ՄԵՐՆ Է",
    "ԽՈՐՈՎԱԾԸ ՍՐԲԱԶԱՆ Է",
    "ԴՈՒԴՈՒԿԸ ՊԱՐՏԱԴԻՐ Է",
    "ՏՈԼՄԱ ՆՇԱՆԱԿՈՒՄ Է ՍԵՐ",
    "ՔՈՉԱՐԻ ԱՌԱՆՑ ԴՈՒ ՉԻ ՊԱՐՎՈՒՄ",
    "ԼԱՎԱՇ ՕՐՎԱ ՊԱՀԱՆՋ Է",
    "WIFI-Ը ՉԻ ԲԱՎԱՐԱՐՈՒՄ — ՀԱՐԵՎԱՆԻՆԸ ԲԵՐԵՔ"
];
const ARMENIAN_EMOJIS = [
    "🇦🇲",
    "🥩",
    "🍇",
    "🍷",
    "🏔️",
    "🎵",
    "👵",
    "👴",
    "🦅",
    "🥖",
    "🌶️",
    "🧿",
    "✨",
    "🔥",
    "💃",
    "🎉"
];
const SHARE_MESSAGES = [
    "Ես հաստատվել եմ որպես հայրենասեր 🇦🇲",
    "Մայիսի 28 — իմ օրն ա 🔥",
    "Հանրապետության օրը գալիս եմ! 🦅",
    "Քաղաքացիությունս հաստատված ա ✅"
];
const FAKE_BUTTON_TEXT = [
    "ՉԷ",
    "ՆԵ",
    "ՕՉ",
    "ՉԷ՜",
    "ոչ",
    "չէ՞",
    "ՉԷ:)",
    "ոչ-ոչ"
];
const INTRO_LINES = [
    "Հայաստան...",
    "Մայիսի 28...",
    "Հանրապետության Օր...",
    "Հիմա որոշելու ժամանակն է..."
];
const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "Event-ի ժամանակ քանի՞ անգամ ես ձևացրել, որ զբաղված ես, որ գործ չտան քեզ։",
        options: [
            "Երբեք",
            "1–2 անգամ",
            "Շատ անգամներ 😭",
            "Դա իմ հիմնական ռազմավարությունն է"
        ],
        answer: "Դա իմ հիմնական ռազմավարությունն է"
    },
    {
        id: 2,
        question: "Քանի՞ տղա ես secretly հավանել campaign-ների ընթացքում 👀",
        options: [
            "0",
            "1",
            "2–3",
            "Չեմ հաշվում արդեն 😭"
        ],
        answer: "Չեմ հաշվում արդեն 😭"
    },
    {
        id: 3,
        question: "Քանի՞ հոգի, ըստ քեզ, քեզ secretly հավանել է 😎",
        options: [
            "0",
            "1–2",
            "Մի քանի հոգի 👀",
            "Չգիտեմ, բայց հետաքրքիր է 😭"
        ],
        answer: "Չգիտեմ, բայց հետաքրքիր է 😭"
    },
    {
        id: 4,
        question: "Event-ի ժամանակ ո՞րն է ամենաembarrassing պահը։",
        options: [
            "Սխալ մարդու անուն ասելը",
            "Story սխալ upload անելը",
            "Eye contact անել ու չիմանալ ինչ ասել 👀",
            "Միկրոֆոնը միացնել ու լռել 😭"
        ],
        answer: "Միկրոֆոնը միացնել ու լռել 😭"
    },
    {
        id: 5,
        question: "Երբևէ փորձե՞լ ես ավելի ակտիվ երևալ ինչ-որ մեկի ուշադրությունը գրավելու համար։",
        options: [
            "Այո 😭",
            "Մի քիչ",
            "Ոչ",
            "Ես միշտ բնական եմ 😎"
        ],
        answer: "Այո 😭"
    },
    {
        id: 6,
        question: "Քանի՞ selfie ես արել միայն story դնելու համար 📸",
        options: [
            "1–5",
            "5–10",
            "10+",
            "Չեմ էլ հաշվում արդեն 💀"
        ],
        answer: "Չեմ էլ հաշվում արդեն 💀"
    },
    {
        id: 7,
        question: "Campaign-ի ժամանակ ո՞վ էր ամենաշատը քեզ խանգարում կենտրոնանալ 😳",
        options: [
            "Սովածությունը",
            "Սթրեսը",
            "Ինչ-որ «հետաքրքիր մարդ» 👀",
            "Wi-Fi-ն"
        ],
        answer: "Ինչ-որ «հետաքրքիր մարդ» 👀"
    },
    {
        id: 8,
        question: "Երբևէ սխալ մարդու՞ն ես ուղարկել message campaign-ի ընթացքում։",
        options: [
            "Երբեք",
            "1 անգամ",
            "Ավելի քան 1 անգամ 😭",
            "Դա իմ trademark-ն է"
        ],
        answer: "Ավելի քան 1 անգամ 😭"
    },
    {
        id: 9,
        question: "Եթե anonymous confession wall լիներ, ինչ կգրեիր 👀",
        options: [
            "«Շնորհակալ եմ թիմին»",
            "«Ես tired եմ»",
            "«Ես ինչ-որ մեկին նկատել էի…» 😭",
            "«No comment»"
        ],
        answer: "«Ես ինչ-որ մեկին նկատել էի…» 😭"
    },
    {
        id: 10,
        question: "Campaign-ների ժամանակ ամենաշատը ինչ էր dominate անում քեզ մոտ։",
        options: [
            "Աշխատանք 😇",
            "Դրամա 😭",
            "Crush energy 👀",
            "Քաոս + հիշողություններ 💀"
        ],
        answer: "Քաոս + հիշողություններ 💀"
    },
    // 🔥 EXTENDED CRAZY LIFE QUESTIONS (18–25 vibe)
    {
        id: 11,
        question: "Քանի՞ անգամ ես ասել «վաղը սկսում եմ նոր կյանք» բայց շարունակել նույնը 😭",
        options: [
            "1 անգամ",
            "Մի քանի անգամ",
            "Ամեն երկուշաբթի 😭",
            "Ես արդեն նոր կյանքում եմ… նույն սխալներով"
        ],
        answer: "Ամեն երկուշաբթի 😭"
    },
    {
        id: 12,
        question: "Երբ phone զանգում է անսպասելի, դու սովորաբար… 📞",
        options: [
            "Պատասխանում եմ վստահ",
            "Ghost եմ դառնում 👻",
            "Ուղարկում եմ voice message «զբաղված եմ»",
            "Panic mode 😭"
        ],
        answer: "Ghost եմ դառնում 👻"
    },
    {
        id: 13,
        question: "Դու երբևէ բացե՞լ ես food delivery app ու փակել առանց պատվիրելու 🍔",
        options: [
            "Never",
            "1–2 անգամ",
            "Շատ անգամներ 😭",
            "Ես պարզապես տանջվում եմ նայելով"
        ],
        answer: "Շատ անգամներ 😭"
    },
    {
        id: 14,
        question: "Քանի՞ անգամ ես reply չտվել message-ին ու հետո ասել «հիմա կպատասխանեմ» 😶",
        options: [
            "Երբեք",
            "1 անգամ",
            "Շատ անգամներ 😭",
            "Ես ghosting-ի մասնագետ եմ"
        ],
        answer: "Ես ghosting-ի մասնագետ եմ"
    },
    {
        id: 15,
        question: "Դու ինչ ես անում, երբ փողը վերջանում է 💸",
        options: [
            "Պլանավորում եմ բյուջե",
            "Pretend եմ, որ ամեն ինչ լավ է",
            "Սպասում եմ հաջորդ աշխատավարձին 😭",
            "Online shopping anyway 💀"
        ],
        answer: "Սպասում եմ հաջորդ աշխատավարձին 😭"
    },
    {
        id: 16,
        question: "Երբ crush-ին տեսնում ես իրական կյանքում, դու… 😳",
        options: [
            "Act normal 😎",
            "Մոռանում եմ քայլել",
            "Սկսում եմ խոսել nonsense",
            "Invisible mode եմ դառնում"
        ],
        answer: "Մոռանում եմ քայլել"
    },
    {
        id: 17,
        question: "Քանի՞ անգամ ես ասել «այս անգամ հաստատ saving եմ անում» 💀",
        options: [
            "1 անգամ",
            "Մի քանի անգամ",
            "Ամեն ամիս 😭",
            "Saving? ինչ է դա"
        ],
        answer: "Ամեն ամիս 😭"
    },
    {
        id: 18,
        question: "Դու երբևէ pretend եղե՞լ ես, որ հասկանում ես meeting-ում ինչ են ասում 🧠",
        options: [
            "Never",
            "Մի քանի անգամ",
            "Ամեն meeting 😭",
            "Ես արդեն professional actor եմ"
        ],
        answer: "Ամեն meeting 😭"
    }
];
const COMPUTING_LINES = [
    "Տատիկը հաշվարկում է...",
    "Հարցումը ուղարկվեց մորաքույրներին...",
    "Հարևանները քվեարկում են...",
    "Քաղաքացիության պատասխանատու կոմիտեն խորհրդակցում է..."
];
const YEREVAN_POPULAR_MEETUP_SPOTS = [
    {
        armenianName: "Հանրապետության հրապարակ",
        englishName: "Republic Square"
    },
    {
        armenianName: "Կասկադ համալիր",
        englishName: "Cascade Complex"
    },
    {
        armenianName: "Հյուսիսային պողոտա",
        englishName: "Northern Avenue"
    },
    {
        armenianName: "Օպերայի հրապարակ",
        englishName: "Opera Square"
    },
    {
        armenianName: "Թումանյան փողոց",
        englishName: "Tumanyan Street"
    },
    {
        armenianName: "Երիտասարդական մետրո",
        englishName: "Yeritasardakan Metro Station"
    },
    {
        armenianName: "Սեզոնս Պարկ",
        englishName: "Seasons Park"
    }
];
const MEETUP_TIME_SLOTS = [
    {
        value: "10:00",
        label: "10:00 · Առավոտ"
    },
    {
        value: "12:00",
        label: "12:00 · Կեսօր"
    },
    {
        value: "14:00",
        label: "14:00 · Միջօրե"
    },
    {
        value: "16:00",
        label: "16:00 · Կեսօրից հետո"
    },
    {
        value: "18:00",
        label: "18:00 · Մայրամուտ"
    },
    {
        value: "20:00",
        label: "20:00 · Երեկո"
    },
    {
        value: "22:00",
        label: "22:00 · Գիշերային"
    }
];
const RETURNING_USER_TOASTS = [
    "Ա՛յ ապեր, քեզ արդեն տեսել եմ — նորից եկար? 😏",
    "Տատիկը զարմացած ա... հո՞ պատասխանները փոխելու ես 👵",
    "Քյաբաբը երկու անգամ չեն ուտում, բայց դե... շարունակիր 🥩",
    "Քո ID-Ն արդեն կա ցուցակում — հիմա կփոխարինվի 🔁",
    "Մորաքույրները քեզ քննարկում էին նոր — ուռա՜ 📞",
    "Արարատը նկատել ա քո վերադարձը 🏔️",
    "Ա՜խ էս սերունդը — մեկ էլ եկար արձագանք տալու 💀"
];
const RETURNING_BANNER = "🔁 ՎԵՐԱԴԱՐՁ — Տատիկը արդեն տեսել ա քեզ։ Քո ID-Ն կփոխարինվի";
const VERDICT_TEXT = {
    success: {
        stamp: "ՀԱՍՏԱՏՎԱԾ ՀԱՅՐԵՆԱՍԵՐ",
        title: "ՎԱՐՊԵՏ ՀԱՅՐԵՆԱՍԵՐ ✓",
        subtitle: "Տատիկը հպարտ է ✨ Մայիսի 28-ին քեզ սպասում են։",
        badge: "ՀԱՍՏԱՏՎԱԾ",
        icon: "✓"
    },
    fail: {
        stamp: "ՉՀԱՍՏԱՏՎԱԾ",
        title: "ՏԱՏԻԿԸ ՉԻ ՀԱՎԱՆԵԼ ✗",
        subtitle: "Հոնքերը կիտվեցին։ Բայց ոչինչ — դու դեռ կարող ես գալ 😏",
        badge: "ՁԱԽՈՂՎԱԾ",
        icon: "✗"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "hashString",
    ()=>hashString,
    "pick",
    ()=>pick,
    "randomBetween",
    ()=>randomBetween
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function hashString(s) {
    let h = 0;
    for(let i = 0; i < s.length; i++)h = (h << 5) - h + s.charCodeAt(i) | 0;
    return Math.abs(h);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FloatingEmojis.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingEmojis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FloatingEmojis({ count = 14 }) {
    _s();
    const [drops, setDrops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingEmojis.useEffect": ()=>{
            const next = Array.from({
                length: count
            }).map({
                "FloatingEmojis.useEffect.next": (_, i)=>({
                        id: i,
                        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(0, 100),
                        emoji: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARMENIAN_EMOJIS"]),
                        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(8, 16),
                        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(20, 42)
                    })
            }["FloatingEmojis.useEffect.next"]);
            setDrops(next);
        }
    }["FloatingEmojis.useEffect"], [
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        children: drops.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: "110vh",
                    x: `${d.x}vw`,
                    rotate: 0,
                    opacity: 0
                },
                animate: {
                    y: "-20vh",
                    rotate: 360,
                    opacity: [
                        0,
                        1,
                        1,
                        0
                    ]
                },
                transition: {
                    duration: d.duration,
                    repeat: Infinity,
                    delay: d.id * 0.4,
                    ease: "linear"
                },
                style: {
                    fontSize: d.size,
                    position: "absolute"
                },
                children: d.emoji
            }, d.id, false, {
                fileName: "[project]/src/components/FloatingEmojis.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/FloatingEmojis.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(FloatingEmojis, "GbjsVWFSnns/F/fUpRGkpAymol8=");
_c = FloatingEmojis;
var _c;
__turbopack_context__.k.register(_c, "FloatingEmojis");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceRsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDeviceRsvp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingEmojis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FloatingEmojis.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const CinematicIntro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/CinematicIntro.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/CinematicIntro.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CinematicIntro;
const ProfileSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ProfileSetup.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ProfileSetup.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = ProfileSetup;
const QuizStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/QuizStage.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/QuizStage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = QuizStage;
const MainScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/MainScreen.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/MainScreen.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = MainScreen;
const EnrichScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/EnrichScreen.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/EnrichScreen.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = EnrichScreen;
const YesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/YesScreen.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/YesScreen.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c5 = YesScreen;
const NoScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/NoScreen.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/NoScreen.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c6 = NoScreen;
function Home() {
    _s();
    const { stage, profile, noBlocked, setStage, setProfile, setNoBlocked, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const device = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceRsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceRsvp"])();
    const sassyToastShown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // The RSVP entry returned from the server after EnrichScreen submits.
    // Lifted here so YesScreen can render the celebration without re-POSTing.
    const [rsvpEntry, setRsvpEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Unlock audio on first interaction
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handler = {
                "Home.useEffect.handler": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlockAudio"])()
            }["Home.useEffect.handler"];
            window.addEventListener("pointerdown", handler, {
                once: true
            });
            window.addEventListener("keydown", handler, {
                once: true
            });
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener("pointerdown", handler);
                    window.removeEventListener("keydown", handler);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Sassy welcome-back toast on first detection of a returning visitor.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!device.isReturning || sassyToastShown.current) return;
            sassyToastShown.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RETURNING_USER_TOASTS"]), {
                duration: 5500,
                style: {
                    background: "linear-gradient(90deg, #d90012 0%, #0033a0 100%)",
                    color: "white",
                    fontWeight: 800,
                    border: "1px solid rgba(255,204,0,.6)"
                }
            });
        }
    }["Home.useEffect"], [
        device.isReturning
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen w-full overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingEmojis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                count: 12
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                theme: "dark",
                position: "bottom-center"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            device.isReturning && stage !== "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: -40,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                className: "sticky top-0 z-40 w-full border-b border-am-gold/40 bg-black/80 backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-widest text-am-gold md:text-xs",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RETURNING_BANNER"]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    stage === "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CinematicIntro, {
                            onDone: ()=>setStage(profile ? "main" : "setup")
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, "intro", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    stage === "setup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -30
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileSetup, {
                            onComplete: (p)=>{
                                setProfile(p);
                                setStage("quiz");
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, "setup", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    stage === "quiz" && profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -30
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuizStage, {
                            onComplete: (answers, verdict)=>{
                                setProfile({
                                    ...profile,
                                    quizAnswers: answers,
                                    verdict
                                });
                                setStage("main");
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, "quiz", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    stage === "main" && profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            scale: 0.96
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 1.04
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainScreen, {
                            profile: profile,
                            noBlocked: noBlocked,
                            onYes: ()=>setStage("enrich"),
                            onNo: ()=>setStage("no")
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    }, "main", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    stage === "enrich" && profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -30
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnrichScreen, {
                            profile: profile,
                            onContinue: (entry)=>{
                                setRsvpEntry(entry);
                                setStage("yes");
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    }, "enrich", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    stage === "yes" && profile && rsvpEntry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            scale: 0.85
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesScreen, {
                            profile: profile,
                            entry: rsvpEntry,
                            onRestart: reset
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    }, "yes", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    stage === "no" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoScreen, {
                            onUnlock: ()=>{
                                setNoBlocked(true);
                                setStage("main");
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    }, "no", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(Home, "jnG2pCP+uBHa2hMy/IQjk3INOMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceRsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceRsvp"]
    ];
});
_c7 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "CinematicIntro");
__turbopack_context__.k.register(_c1, "ProfileSetup");
__turbopack_context__.k.register(_c2, "QuizStage");
__turbopack_context__.k.register(_c3, "MainScreen");
__turbopack_context__.k.register(_c4, "EnrichScreen");
__turbopack_context__.k.register(_c5, "YesScreen");
__turbopack_context__.k.register(_c6, "NoScreen");
__turbopack_context__.k.register(_c7, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11dui47._.js.map