(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/EnrichScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnrichScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceRsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDeviceRsvp.ts [app-client] (ecmascript)");
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
function EnrichScreen({ profile, onContinue }) {
    _s();
    const [spot, setSpot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tg, setTg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ig, setIg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const device = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceRsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceRsvp"])();
    const filledCount = (spot ? 1 : 0) + (time ? 1 : 0) + (tg.trim() ? 1 : 0) + (ig.trim() ? 1 : 0) + (phone.trim() ? 1 : 0);
    const submit = async (mode)=>{
        if (busy || device.isLoading) return;
        setBusy(mode);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
        const enrichment = mode === "skip" ? {} : {
            meetupSpot: spot || undefined,
            meetupTime: time || undefined,
            telegram: tg.trim() || undefined,
            instagram: ig.trim() || undefined,
            phone: phone.trim() || undefined
        };
        const payload = {
            firstName: profile.firstName,
            lastName: profile.lastName,
            nickname: profile.nickname,
            title: profile.title,
            patriotismScore: profile.patriotismScore,
            avatarSeed: profile.avatarSeed,
            styleIdx: profile.styleIdx,
            overlayIdx: profile.overlayIdx,
            selfie: profile.selfie,
            quizAnswers: profile.quizAnswers,
            verdict: profile.verdict,
            forceId: device.id ?? undefined,
            ...enrichment
        };
        try {
            const res = await fetch("/api/rsvp", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error(await res.text());
            const data = await res.json();
            const entry = data.entry;
            device.remember(entry.id);
            onContinue(entry);
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Չստացվեց պահպանել 😬");
            setBusy(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-3 px-3 py-4 md:gap-4 md:py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: -10,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 220,
                            damping: 18
                        },
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] uppercase tracking-[0.3em] text-am-gold/80 md:text-[10px]",
                                children: "📍 Որտե՞ղ ենք հանդիպում"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-black leading-tight md:text-3xl neon-text",
                                style: {
                                    fontFamily: "var(--font-display)"
                                },
                                children: "ՎԵՐՋԻՆ ՔԱՅԼԸ ✨"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] text-white/60 md:text-xs",
                                children: "Որքան շատ լրացնես, այնքան ընկեր կգտնես 👀"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            scale: 0.8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        whileHover: {
                            scale: busy ? 1 : 1.05
                        },
                        disabled: !!busy || device.isLoading,
                        onClick: ()=>submit("skip"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 self-start rounded-2xl border-2 border-dashed border-white/30 bg-white/[0.04] px-3 py-2 text-[11px] font-black text-white/80 transition hover:border-white/60 hover:bg-white/10 md:px-4 md:py-2.5 md:text-sm", busy === "skip" && "cursor-wait opacity-70"),
                        style: {
                            fontFamily: "var(--font-display)"
                        },
                        children: busy === "skip" ? "..." : "⏭️ ԲԱՑ ԹՈՂՆԵԼ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnrichScreen.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    y: 16,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 18
                },
                className: "glass relative overflow-hidden rounded-2xl p-3 md:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-10 flag-gradient"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative space-y-3 md:space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                        children: "Հանդիպման վայր"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YEREVAN_POPULAR_MEETUP_SPOTS"].map((s)=>{
                                            const active = spot === s.englishName;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSpot(active ? "" : s.englishName);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Strong border + bg so the chip clearly reads as a tappable
                                                // button on first glance, even on mobile (no hover state).
                                                "cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-bold transition active:scale-95 md:text-sm", active ? "border-am-gold bg-am-gold text-black shadow-[0_0_18px_rgba(255,204,0,.6)]" : "border-am-gold/40 bg-white/10 text-white hover:border-am-gold hover:bg-am-gold/15"),
                                                children: [
                                                    "📍 ",
                                                    s.armenianName
                                                ]
                                            }, s.englishName, true, {
                                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                        children: "Հանդիպման ժամ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEETUP_TIME_SLOTS"].map((t)=>{
                                            const active = time === t.value;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setTime(active ? "" : t.value);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-bold transition active:scale-95 md:text-sm", active ? "border-am-red bg-am-red text-white shadow-[0_0_18px_rgba(217,0,18,.7)]" : "border-am-red/40 bg-white/10 text-white hover:border-am-red hover:bg-am-red/15"),
                                                children: [
                                                    "🕒 ",
                                                    t.label
                                                ]
                                            }, t.value, true, {
                                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2 md:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInput, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTelegramPlane"], {
                                            className: "text-[#229ED9]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EnrichScreen.tsx",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, this),
                                        label: "Telegram",
                                        placeholder: "my_handle",
                                        value: tg,
                                        onChange: setTg,
                                        prefix: "@"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInput, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                            className: "text-[#E1306C]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EnrichScreen.tsx",
                                            lineNumber: 207,
                                            columnNumber: 21
                                        }, this),
                                        label: "Instagram",
                                        placeholder: "my_handle",
                                        value: ig,
                                        onChange: setIg,
                                        prefix: "@"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInput, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                                            className: "text-am-gold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EnrichScreen.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                        }, this),
                                        label: "Հեռախոս",
                                        placeholder: "+374 ...",
                                        value: phone,
                                        // Strip any non phone-number character as the user types — same
                                        // allow-list the server uses (digits, +, space, parens, dot, hyphen).
                                        onChange: (v)=>setPhone(v.replace(/[^\d+\s().\-]/g, "").slice(0, 30)),
                                        type: "tel",
                                        inputMode: "tel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnrichScreen.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-white/40",
                                children: "🛡️ Հանրային ա — միայն այն, ինչ լրացնում ես կհայտնվի ցուցակում"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnrichScreen.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnrichScreen.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    y: 16,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.2
                },
                whileTap: {
                    scale: 0.97
                },
                whileHover: {
                    scale: busy ? 1 : 1.02
                },
                disabled: !!busy || device.isLoading,
                onClick: ()=>submit("continue"),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-2xl border-2 px-4 py-3 text-base font-black transition md:py-4 md:text-lg", busy === "continue" ? "cursor-wait border-am-gold bg-am-gold/80 text-black" : "border-am-gold bg-am-gold text-black shadow-[0_0_24px_rgba(255,204,0,.45)] hover:brightness-110 disabled:opacity-50"),
                style: {
                    fontFamily: "var(--font-display)"
                },
                children: busy === "continue" ? "ՊԱՀՊԱՆՈՒՄ..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "🎯 ՊԱՀՊԱՆԵԼ ԵՎ ՇԱՐՈՒՆԱԿԵԼ",
                        filledCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 inline-block rounded-full bg-black/20 px-2 py-0.5 text-[11px]",
                            children: [
                                "+",
                                filledCount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EnrichScreen.tsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/EnrichScreen.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    y: 16,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.25
                },
                whileTap: {
                    scale: 0.97
                },
                whileHover: {
                    scale: busy ? 1 : 1.02
                },
                disabled: !!busy || device.isLoading,
                onClick: ()=>submit("skip"),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-2xl border-2 border-am-red px-4 py-3 text-base font-black text-white transition md:py-4 md:text-lg", busy === "skip" ? "cursor-wait bg-am-red/80" : "bg-am-red shadow-[0_0_24px_rgba(217,0,18,.45)] hover:brightness-110 disabled:opacity-50"),
                style: {
                    fontFamily: "var(--font-display)"
                },
                children: busy === "skip" ? "ՊԱՀՊԱՆՈՒՄ..." : "⏭️ ԲԱՑ ԹՈՂՆԵԼ ԱՅՍ ՔԱՅԼԸ"
            }, void 0, false, {
                fileName: "[project]/src/components/EnrichScreen.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EnrichScreen.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(EnrichScreen, "ZNabsJgN1KQVNyCFMFEtSKR/JqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceRsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceRsvp"]
    ];
});
_c = EnrichScreen;
function SectionLabel({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-1 text-[9px] uppercase tracking-widest text-white/50 md:text-[10px]",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/EnrichScreen.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_c1 = SectionLabel;
function ContactInput({ icon, label, placeholder, value, onChange, prefix, type = "text", inputMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-0.5 flex items-center gap-1 text-[9px] uppercase tracking-widest text-white/60 md:text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnrichScreen.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch overflow-hidden rounded-lg border border-white/15 bg-black/40 focus-within:border-am-gold",
                children: [
                    prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center bg-white/5 px-1.5 text-xs text-white/50",
                        children: prefix
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        inputMode: inputMode,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: placeholder,
                        className: "w-full bg-transparent px-2 py-1.5 text-xs outline-none placeholder:text-white/30 md:text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnrichScreen.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnrichScreen.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EnrichScreen.tsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_c2 = ContactInput;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EnrichScreen");
__turbopack_context__.k.register(_c1, "SectionLabel");
__turbopack_context__.k.register(_c2, "ContactInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EnrichScreen.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/EnrichScreen.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_EnrichScreen_tsx_0w_1z.g._.js.map