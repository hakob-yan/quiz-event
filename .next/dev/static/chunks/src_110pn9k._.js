(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/avatar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVATAR_OVERLAYS",
    ()=>AVATAR_OVERLAYS,
    "generateAvatarDataUri",
    ()=>generateAvatarDataUri,
    "randomSeed",
    ()=>randomSeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/core/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/core/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$adventurer$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__adventurer$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/adventurer/lib/index.js [app-client] (ecmascript) <export * as adventurer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$fun$2d$emoji$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__funEmoji$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/fun-emoji/lib/index.js [app-client] (ecmascript) <export * as funEmoji>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$bottts$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__bottts$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/bottts/lib/index.js [app-client] (ecmascript) <export * as bottts>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$micah$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__micah$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/micah/lib/index.js [app-client] (ecmascript) <export * as micah>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$lorelei$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__lorelei$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/lorelei/lib/index.js [app-client] (ecmascript) <export * as lorelei>");
"use client";
;
;
const BG_COLORS = [
    "d90012",
    "0033a0",
    "f2a800",
    "ffcc00"
];
function generateAvatarDataUri(seed, idx = 0) {
    const i = (idx % 5 + 5) % 5;
    // DiceBear styles each have unique Options shapes, so we can't store them
    // together in a typed array — switch keeps the per-call types intact.
    switch(i){
        case 0:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$adventurer$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__adventurer$3e$__["adventurer"], {
                seed,
                backgroundColor: BG_COLORS,
                radius: 50
            }).toDataUri();
        case 1:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$fun$2d$emoji$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__funEmoji$3e$__["funEmoji"], {
                seed,
                backgroundColor: BG_COLORS,
                radius: 50
            }).toDataUri();
        case 2:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$bottts$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__bottts$3e$__["bottts"], {
                seed,
                backgroundColor: BG_COLORS,
                radius: 50
            }).toDataUri();
        case 3:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$micah$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__micah$3e$__["micah"], {
                seed,
                backgroundColor: BG_COLORS,
                radius: 50
            }).toDataUri();
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$lorelei$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__lorelei$3e$__["lorelei"], {
                seed,
                backgroundColor: BG_COLORS,
                radius: 50
            }).toDataUri();
    }
}
const AVATAR_OVERLAYS = [
    "🥸",
    "🧔🏻",
    "🕶️",
    "👑",
    "🦅",
    "🥩"
];
function randomSeed() {
    return Math.random().toString(36).slice(2, 12);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VerdictBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerdictBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function VerdictBadge({ verdict, size = "chip", animate = false }) {
    if (!verdict) return null;
    const cfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERDICT_TEXT"][verdict];
    const isFail = verdict === "fail";
    if (size === "stamp") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: animate ? {
                scale: 3,
                opacity: 0,
                rotate: -10
            } : false,
            animate: {
                scale: 1,
                opacity: 1,
                rotate: isFail ? -14 : 12
            },
            transition: {
                type: "spring",
                stiffness: 240,
                damping: 14,
                delay: animate ? 0.4 : 0
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none rounded-full border-4 px-3 py-1 text-sm font-black", isFail ? "border-red-500 text-red-500 [text-shadow:0_0_12px_rgba(217,0,18,.6)]" : "border-am-gold text-am-gold [text-shadow:0_0_12px_rgba(255,204,0,.6)]"),
            style: {
                fontFamily: "var(--font-display)"
            },
            children: cfg.stamp
        }, void 0, false, {
            fileName: "[project]/src/components/VerdictBadge.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    if (size === "mini") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-5 items-center gap-0.5 rounded-full px-1.5 text-[8px] font-black uppercase tracking-wider", isFail ? "bg-red-600/90 text-white" : "bg-am-gold text-black"),
            title: cfg.badge,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cfg.icon
                }, void 0, false, {
                    fileName: "[project]/src/components/VerdictBadge.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cfg.badge
                }, void 0, false, {
                    fileName: "[project]/src/components/VerdictBadge.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VerdictBadge.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    // chip
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest", isFail ? "bg-red-600/90 text-white shadow-[0_0_18px_rgba(217,0,18,.6)]" : "bg-am-gold text-black shadow-[0_0_18px_rgba(255,204,0,.7)]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm leading-none",
                children: cfg.icon
            }, void 0, false, {
                fileName: "[project]/src/components/VerdictBadge.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: cfg.badge
            }, void 0, false, {
                fileName: "[project]/src/components/VerdictBadge.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VerdictBadge.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = VerdictBadge;
var _c;
__turbopack_context__.k.register(_c, "VerdictBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PatrioticIDCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerdictBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VerdictBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PatrioticIDCard = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function PatrioticIDCard({ profile }, ref) {
    _s();
    const avatarUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PatrioticIDCard.PatrioticIDCard.useMemo[avatarUri]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAvatarDataUri"])(profile.avatarSeed, profile.styleIdx)
    }["PatrioticIDCard.PatrioticIDCard.useMemo[avatarUri]"], [
        profile.avatarSeed,
        profile.styleIdx
    ]);
    const idNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PatrioticIDCard.PatrioticIDCard.useMemo[idNumber]": ()=>{
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashString"])(profile.firstName + profile.lastName + profile.avatarSeed);
            return `RA-${(h % 9999).toString().padStart(4, "0")}-${profile.firstName.length}${profile.lastName.length}`;
        }
    }["PatrioticIDCard.PatrioticIDCard.useMemo[idNumber]"], [
        profile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            rotate: -8,
            scale: 0.6,
            y: 80,
            opacity: 0
        },
        animate: {
            rotate: 0,
            scale: 1,
            y: 0,
            opacity: 1
        },
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 16,
            delay: 0.3
        },
        className: "relative w-[340px] overflow-hidden rounded-3xl border-2 border-am-gold/80 bg-gradient-to-br from-[#1a0a16] via-[#0d0a16] to-[#0a1633] p-5 shadow-[0_0_60px_rgba(255,204,0,.5)] md:w-[400px]",
        style: {
            fontFamily: "var(--font-armenian)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flag-gradient"
                }, void 0, false, {
                    fileName: "[project]/src/components/PatrioticIDCard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "🇦🇲"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase tracking-wider text-am-gold/80",
                                        children: "Հայաստանի Հանրապետություն"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-black text-am-gold",
                                        children: "ՀԱՅՐԵՆԱՍԵՐԻ ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded bg-am-red px-2 py-0.5 text-[10px] font-black text-white",
                        children: "ՀԱՍՏԱՏՎԱԾ ✓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border-2 border-am-gold/70 bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: profile.selfie ?? avatarUri,
                                alt: "photo",
                                className: "absolute inset-0 h-full w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 bg-black/70 px-1 py-0.5 text-center text-[8px] font-bold text-am-gold",
                                children: "🇦🇲 RA · 28/05"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col justify-between text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-wider text-white/50",
                                        children: "Անուն Ազգանուն"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-black leading-tight",
                                        children: [
                                            profile.firstName,
                                            " ",
                                            profile.lastName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-wider text-white/50",
                                        children: "Կոչում"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-am-gold",
                                        children: profile.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-wider text-white/50",
                                        children: "Մականուն"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold",
                                        children: profile.nickname
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 rounded-xl border border-am-gold/40 bg-black/50 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase tracking-wider text-white/60",
                                        children: "Հայրենասիրության գնահատական"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-black text-am-gold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            end: profile.patriotismScore,
                                            duration: 2.2,
                                            suffix: "%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl",
                                children: "🦅"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${profile.patriotismScore}%`
                            },
                            transition: {
                                duration: 2,
                                ease: "easeOut"
                            },
                            className: "h-full bg-gradient-to-r from-am-red via-am-blue to-am-orange"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PatrioticIDCard.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-3 flex items-center justify-between text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/40",
                        children: [
                            "ID: ",
                            idNumber
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-black text-am-gold",
                        children: "28.05 · ՎԱՂԸ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PatrioticIDCard.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-3 -top-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerdictBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    verdict: profile.verdict ?? "success",
                    size: "stamp",
                    animate: true
                }, void 0, false, {
                    fileName: "[project]/src/components/PatrioticIDCard.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PatrioticIDCard.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PatrioticIDCard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}, "8zUcQAp4VKsI29ULTo2QYEA+rK4=")), "8zUcQAp4VKsI29ULTo2QYEA+rK4=");
_c1 = PatrioticIDCard;
const __TURBOPACK__default__export__ = PatrioticIDCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "PatrioticIDCard$forwardRef");
__turbopack_context__.k.register(_c1, "PatrioticIDCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RSVPList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RSVPList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerdictBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VerdictBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
// english → armenian display for spots
const SPOT_LABEL = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YEREVAN_POPULAR_MEETUP_SPOTS"].map((s)=>[
        s.englishName,
        s.armenianName
    ]));
const TIME_LABEL = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEETUP_TIME_SLOTS"].map((t)=>[
        t.value,
        t.label
    ]));
function RSVPList({ refreshKey = 0, currentId }) {
    _s();
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterSpot, setFilterSpot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterTime, setFilterTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RSVPList.useEffect": ()=>{
            let cancelled = false;
            setEntries(null);
            setError(null);
            fetch("/api/rsvp", {
                cache: "no-store"
            }).then({
                "RSVPList.useEffect": (r)=>r.json()
            }["RSVPList.useEffect"]).then({
                "RSVPList.useEffect": (data)=>{
                    if (cancelled) return;
                    setEntries(Array.isArray(data.entries) ? data.entries : []);
                }
            }["RSVPList.useEffect"]).catch({
                "RSVPList.useEffect": ()=>{
                    if (cancelled) return;
                    setError("Չհաջողվեց բեռնել ցուցակը");
                }
            }["RSVPList.useEffect"]);
            return ({
                "RSVPList.useEffect": ()=>{
                    cancelled = true;
                }
            })["RSVPList.useEffect"];
        }
    }["RSVPList.useEffect"], [
        refreshKey
    ]);
    // Derive which spots/times to even show in the filter row — only those that
    // actually have at least one RSVP, so we don't dangle empty filters.
    const availableSpots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RSVPList.useMemo[availableSpots]": ()=>{
            if (!entries) return new Set();
            return new Set(entries.map({
                "RSVPList.useMemo[availableSpots]": (e)=>e.meetupSpot
            }["RSVPList.useMemo[availableSpots]"]).filter(Boolean));
        }
    }["RSVPList.useMemo[availableSpots]"], [
        entries
    ]);
    const availableTimes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RSVPList.useMemo[availableTimes]": ()=>{
            if (!entries) return new Set();
            return new Set(entries.map({
                "RSVPList.useMemo[availableTimes]": (e)=>e.meetupTime
            }["RSVPList.useMemo[availableTimes]"]).filter(Boolean));
        }
    }["RSVPList.useMemo[availableTimes]"], [
        entries
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RSVPList.useMemo[filtered]": ()=>{
            if (!entries) return null;
            return entries.filter({
                "RSVPList.useMemo[filtered]": (e)=>{
                    if (filterSpot && e.meetupSpot !== filterSpot) return false;
                    if (filterTime && e.meetupTime !== filterTime) return false;
                    return true;
                }
            }["RSVPList.useMemo[filtered]"]);
        }
    }["RSVPList.useMemo[filtered]"], [
        entries,
        filterSpot,
        filterTime
    ]);
    const count = entries?.length ?? 0;
    const filteredCount = filtered?.length ?? 0;
    const isFiltered = !!(filterSpot || filterTime);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 30,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: 1.1
        },
        className: "glass w-full max-w-2xl rounded-3xl p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] uppercase tracking-[0.4em] text-am-gold/80",
                                children: "Ովքեր են գալիս"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-black md:text-3xl neon-text",
                                style: {
                                    fontFamily: "var(--font-display)"
                                },
                                children: "🇦🇲 ՀԱՅՐԵՆԱՍԵՐՆԵՐԻ ՑՈՒՑԱԿ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-black text-am-gold md:text-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        end: isFiltered ? filteredCount : count,
                                        duration: 1.2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RSVPList.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    isFiltered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-base text-white/40",
                                        children: [
                                            "/ ",
                                            count
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RSVPList.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] uppercase tracking-widest text-white/50",
                                children: isFiltered ? "ֆիլտր" : "գրանցված"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            entries && entries.length > 0 && (availableSpots.size > 0 || availableTimes.size > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 space-y-2",
                children: [
                    availableSpots.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterRow, {
                        label: "Վայր",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: filterSpot === null,
                                onClick: ()=>setFilterSpot(null),
                                accent: "gold",
                                children: "Բոլորը"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YEREVAN_POPULAR_MEETUP_SPOTS"].filter((s)=>availableSpots.has(s.englishName)).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                    active: filterSpot === s.englishName,
                                    onClick: ()=>setFilterSpot(filterSpot === s.englishName ? null : s.englishName),
                                    accent: "gold",
                                    children: [
                                        "📍 ",
                                        s.armenianName
                                    ]
                                }, s.englishName, true, {
                                    fileName: "[project]/src/components/RSVPList.tsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this),
                    availableTimes.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterRow, {
                        label: "Ժամ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: filterTime === null,
                                onClick: ()=>setFilterTime(null),
                                accent: "red",
                                children: "Բոլորը"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEETUP_TIME_SLOTS"].filter((t)=>availableTimes.has(t.value)).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                    active: filterTime === t.value,
                                    onClick: ()=>setFilterTime(filterTime === t.value ? null : t.value),
                                    accent: "red",
                                    children: [
                                        "🕒 ",
                                        t.label
                                    ]
                                }, t.value, true, {
                                    fileName: "[project]/src/components/RSVPList.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            entries === null && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
                children: Array.from({
                    length: 4
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-44 animate-pulse rounded-2xl bg-white/5"
                    }, i, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this),
            entries && entries.length === 0 && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-white/50",
                children: "Դեռ ոչ ոք չի գրանցվել։ Դու առաջինն ես, ապեր 🦅"
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            filtered && entries && entries.length > 0 && filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-white/50",
                children: "Այս ֆիլտրի տակ ոչ ոք չկա 🤷"
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            filtered && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar max-h-[520px] overflow-y-auto pr-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: filtered.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RsvpAvatar, {
                                entry: e,
                                index: i,
                                isMe: e.id === currentId
                            }, e.id, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 194,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RSVPList.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RSVPList.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(RSVPList, "Tn3abhEmyZe0vPG9zLH5L29NK3g=");
_c = RSVPList;
const OVERLAYS = [
    "🥸",
    "🕶️",
    "👑",
    "🦅",
    "🧔🏻",
    "🥩"
];
function FilterRow({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 text-[9px] uppercase tracking-widest text-white/40",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RSVPList.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_c1 = FilterRow;
function Chip({ active, onClick, children, accent }) {
    const goldActive = accent === "gold";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2.5 py-1 text-[10px] font-bold transition active:scale-95", active ? goldActive ? "border-am-gold bg-am-gold text-black shadow-[0_0_18px_rgba(255,204,0,.5)]" : "border-am-red bg-am-red text-white shadow-[0_0_18px_rgba(217,0,18,.5)]" : "border-white/15 bg-white/5 text-white/80 hover:border-am-gold/50 hover:bg-white/10"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/RSVPList.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c2 = Chip;
function RsvpAvatar({ entry, index, isMe }) {
    _s1();
    const avatarSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RsvpAvatar.useMemo[avatarSrc]": ()=>{
            if (entry.selfieUrl) return entry.selfieUrl;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAvatarDataUri"])(entry.avatarSeed || entry.id, entry.styleIdx ?? 0);
        }
    }["RsvpAvatar.useMemo[avatarSrc]"], [
        entry.selfieUrl,
        entry.avatarSeed,
        entry.id,
        entry.styleIdx
    ]);
    const overlay = OVERLAYS[(entry.overlayIdx ?? 0) % OVERLAYS.length];
    const spotLabel = entry.meetupSpot ? SPOT_LABEL.get(entry.meetupSpot) : undefined;
    const timeLabel = entry.meetupTime ? TIME_LABEL.get(entry.meetupTime) : undefined;
    const hasContacts = !!(entry.telegram || entry.instagram || entry.phone);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            scale: 0.4,
            opacity: 0,
            rotate: -10
        },
        animate: {
            scale: 1,
            opacity: 1,
            rotate: 0
        },
        exit: {
            scale: 0.4,
            opacity: 0
        },
        transition: {
            type: "spring",
            stiffness: 220,
            damping: 16,
            delay: Math.min(index * 0.03, 0.6)
        },
        whileHover: {
            scale: 1.04,
            rotate: -1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col items-center gap-1.5 rounded-2xl border p-2 text-center", isMe ? "border-am-gold bg-am-gold/10 shadow-[0_0_30px_rgba(255,204,0,.5)]" : "border-white/10 bg-white/[0.03]"),
        title: `${entry.firstName} ${entry.lastName} · ${entry.nickname}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-16 w-16 overflow-hidden rounded-xl border border-am-gold/40 bg-black sm:h-20 sm:w-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: avatarSrc,
                        alt: `${entry.firstName} ${entry.lastName}`,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -bottom-1 -right-1 text-xl drop-shadow-[0_0_4px_rgba(0,0,0,.9)]",
                        children: overlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-1 top-1 rounded bg-am-red px-1 text-[8px] font-black text-white",
                        children: "ԴՈՒ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this),
                    entry.verdict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 right-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerdictBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            verdict: entry.verdict,
                            size: "mini"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RSVPList.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate text-[11px] font-black leading-tight",
                        children: [
                            entry.firstName,
                            " ",
                            entry.lastName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate text-[9px] uppercase tracking-wider text-am-gold/80",
                        children: entry.nickname
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            (spotLabel || timeLabel) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-wrap items-center justify-center gap-1",
                children: [
                    spotLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate rounded-full bg-am-gold/15 px-1.5 py-0.5 text-[8px] font-bold text-am-gold",
                        children: [
                            "📍 ",
                            spotLabel
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 318,
                        columnNumber: 13
                    }, this),
                    timeLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-am-red/20 px-1.5 py-0.5 text-[8px] font-bold text-am-red",
                        children: [
                            "🕒 ",
                            entry.meetupTime
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 323,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            hasContacts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 flex w-full flex-wrap items-center justify-center gap-1",
                children: [
                    entry.telegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://t.me/${entry.telegram}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `Telegram @${entry.telegram}`,
                        className: "inline-flex max-w-full items-center gap-1 rounded-full bg-[#229ED9] px-2 py-0.5 text-[9px] font-bold text-white shadow-[0_0_8px_rgba(34,158,217,.45)] transition hover:brightness-110 active:scale-95",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTelegramPlane"], {
                                className: "h-2.5 w-2.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 341,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: [
                                    "@",
                                    entry.telegram
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 333,
                        columnNumber: 13
                    }, this),
                    entry.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://instagram.com/${entry.instagram}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `Instagram @${entry.instagram}`,
                        className: "inline-flex max-w-full items-center gap-1 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-2 py-0.5 text-[9px] font-bold text-white shadow-[0_0_8px_rgba(221,42,123,.45)] transition hover:brightness-110 active:scale-95",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                className: "h-2.5 w-2.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: [
                                    "@",
                                    entry.instagram
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RSVPList.tsx",
                                lineNumber: 355,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 346,
                        columnNumber: 13
                    }, this),
                    entry.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneChip, {
                        phone: entry.phone
                    }, void 0, false, {
                        fileName: "[project]/src/components/RSVPList.tsx",
                        lineNumber: 358,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RSVPList.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s1(RsvpAvatar, "RxOVgEJGpV2VXGqdxw56kogq42E=");
_c3 = RsvpAvatar;
// Phone is dual-action: the anchor's tel: href fires the dialer on mobile,
// while the onClick copies the number to clipboard so desktop users (where
// tel: typically does nothing) still get a useful interaction.
function PhoneChip({ phone }) {
    const dialHref = `tel:${phone.replace(/[^\d+]/g, "")}`;
    const handleClick = async (e)=>{
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(phone);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`📋 Պատճենվեց՝ ${phone}`, {
                duration: 1800
            });
        } catch  {
        // Silent fallback — tel: still works on phones.
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: dialHref,
        onClick: handleClick,
        "aria-label": `Call ${phone}`,
        className: "inline-flex max-w-full items-center gap-1 rounded-full bg-am-gold px-2 py-0.5 text-[9px] font-bold text-black shadow-[0_0_8px_rgba(255,204,0,.5)] transition hover:brightness-110 active:scale-95",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                className: "h-2.5 w-2.5 shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate",
                children: phone
            }, void 0, false, {
                fileName: "[project]/src/components/RSVPList.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RSVPList.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c4 = PhoneChip;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "RSVPList");
__turbopack_context__.k.register(_c1, "FilterRow");
__turbopack_context__.k.register(_c2, "Chip");
__turbopack_context__.k.register(_c3, "RsvpAvatar");
__turbopack_context__.k.register(_c4, "PhoneChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ShareMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-share/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ShareMenu({ url, text, label = "ԿԻՍՎԵԼ ԸՆԿԵՐՆԵՐԻ ՀԵՏ" }) {
    _s();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const disabled = !url;
    const handleNativeShare = async ()=>{
        if (disabled) return;
        setBusy(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
        try {
            if (typeof navigator !== "undefined" && navigator.share) {
                await navigator.share({
                    title: "Մայիսի 28 🇦🇲",
                    text,
                    url
                });
            } else {
                await navigator.clipboard.writeText(`${text} ${url}`);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Հղումը պատճենված է 📋");
            }
        } catch  {
        // user canceled — silent
        } finally{
            setBusy(false);
        }
    };
    const handleCopy = async ()=>{
        if (disabled) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
        try {
            await navigator.clipboard.writeText(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Հղումը պատճենված է 📋");
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Չստացվեց պատճենել");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            type: "spring",
            stiffness: 220,
            damping: 18
        },
        className: "glass w-full rounded-3xl p-4 md:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-am-gold/80",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] uppercase tracking-widest text-white/40",
                        children: "Պատրաստվում է…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ShareMenu.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-wrap items-center justify-center gap-2 ${disabled ? "pointer-events-none opacity-40" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappShareButton"], {
                        url: url,
                        title: text,
                        separator: " ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformWrapper, {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])(),
                            bg: "#25D366",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                size: 40,
                                round: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareMenu.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShareMenu.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelegramShareButton"], {
                        url: url,
                        title: text,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformWrapper, {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])(),
                            bg: "#229ED9",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelegramIcon"], {
                                size: 40,
                                round: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareMenu.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShareMenu.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookShareButton"], {
                        url: url,
                        hashtag: "#Հայաստան28",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformWrapper, {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])(),
                            bg: "#1877F2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                                size: 40,
                                round: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareMenu.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShareMenu.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwitterShareButton"], {
                        url: url,
                        title: text,
                        hashtags: [
                            "Հայաստան",
                            "Մայիսի28",
                            "RepublicDay"
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformWrapper, {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])(),
                            bg: "#000",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {
                                size: 40,
                                round: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareMenu.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShareMenu.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViberShareButton"], {
                        url: url,
                        title: text,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformWrapper, {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])(),
                            bg: "#7360F2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViberIcon"], {
                                size: 40,
                                round: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareMenu.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShareMenu.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailShareButton"], {
                        url: url,
                        subject: "Մայիսի 28 🇦🇲",
                        body: `${text}\n\n`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformWrapper, {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])(),
                            bg: "#444",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$share$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailIcon"], {
                                size: 40,
                                round: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareMenu.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShareMenu.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        "aria-label": "Պատճենել հղումը",
                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base transition hover:scale-110 hover:bg-white/20 active:scale-95",
                        children: "🔗"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNativeShare,
                        disabled: busy,
                        "aria-label": "Համակարգային կիսում",
                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-am-gold text-black transition hover:scale-110 active:scale-95",
                        children: "📲"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ShareMenu.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-xs uppercase tracking-widest text-white/40",
                        children: "URL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate text-xs text-white/80",
                        children: url
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        className: "ml-auto shrink-0 rounded bg-white/10 px-2 py-1 text-[10px] font-bold hover:bg-white/20",
                        children: "Պատճենել"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareMenu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ShareMenu.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ShareMenu.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(ShareMenu, "1xb9mZubXs1SxY/cOnjkSF8CKNw=");
_c = ShareMenu;
function PlatformWrapper({ children, bg }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition hover:scale-110 active:scale-95",
        style: {
            background: bg
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ShareMenu.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c1 = PlatformWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShareMenu");
__turbopack_context__.k.register(_c1, "PlatformWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/publicUrl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Single source of truth for the app's public origin.
// NEXT_PUBLIC_APP_URL is inlined at build time, so server and client see the
// same value (no hydration mismatch). If unset, URLs are rendered as relative
// paths — that's a misconfiguration, but won't crash the app.
__turbopack_context__.s([
    "buildProfileUrl",
    ()=>buildProfileUrl,
    "getPublicBaseUrl",
    ()=>getPublicBaseUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getPublicBaseUrl() {
    const fromEnv = ("TURBOPACK compile-time value", "http://13.53.123.50")?.trim();
    return fromEnv ? fromEnv.replace(/\/+$/, "") : "";
}
function buildProfileUrl(id) {
    const base = getPublicBaseUrl();
    return base ? `${base}/p/${id}` : `/p/${id}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/YesScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$confetti$2f$dist$2f$react$2d$confetti$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-confetti/dist/react-confetti.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useWindowSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWindowSize$3e$__ = __turbopack_context__.i("[project]/node_modules/react-use/esm/useWindowSize.js [app-client] (ecmascript) <export default as useWindowSize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PatrioticIDCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PatrioticIDCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RSVPList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RSVPList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ShareMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$publicUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/publicUrl.ts [app-client] (ecmascript)");
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
;
;
const RED = [
    "#d90012",
    "#ff264a"
];
const BLUE = [
    "#0033a0",
    "#1a5dff"
];
const ORANGE = [
    "#f2a800",
    "#ffcc00"
];
const ALL = [
    ...RED,
    ...BLUE,
    ...ORANGE
];
function YesScreen({ profile, entry, onRestart }) {
    _s();
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useWindowSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWindowSize$3e$__["useWindowSize"])();
    const [flashing, setFlashing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YesScreen.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlockAudio"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playFanfare"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playCheer"])();
            const fire = {
                "YesScreen.useEffect.fire": (origin, colors)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 80,
                        spread: 90,
                        startVelocity: 45,
                        origin,
                        colors,
                        scalar: 1.1
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playFirework"])();
                }
            }["YesScreen.useEffect.fire"];
            fire({
                x: 0.2,
                y: 0.5
            }, RED);
            fire({
                x: 0.8,
                y: 0.5
            }, BLUE);
            setTimeout({
                "YesScreen.useEffect": ()=>fire({
                        x: 0.5,
                        y: 0.3
                    }, ORANGE)
            }["YesScreen.useEffect"], 350);
            setTimeout({
                "YesScreen.useEffect": ()=>fire({
                        x: 0.3,
                        y: 0.7
                    }, ALL)
            }["YesScreen.useEffect"], 800);
            setTimeout({
                "YesScreen.useEffect": ()=>fire({
                        x: 0.7,
                        y: 0.7
                    }, ALL)
            }["YesScreen.useEffect"], 1100);
            const id = setInterval({
                "YesScreen.useEffect.id": ()=>{
                    fire({
                        x: Math.random(),
                        y: Math.random() * 0.6
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])([
                        RED,
                        BLUE,
                        ORANGE,
                        ALL
                    ]));
                }
            }["YesScreen.useEffect.id"], 1800);
            const flashTimer = setTimeout({
                "YesScreen.useEffect.flashTimer": ()=>setFlashing(false)
            }["YesScreen.useEffect.flashTimer"], 2500);
            return ({
                "YesScreen.useEffect": ()=>{
                    clearInterval(id);
                    clearTimeout(flashTimer);
                }
            })["YesScreen.useEffect"];
        }
    }["YesScreen.useEffect"], []);
    const handleDownload = async ()=>{
        if (!cardRef.current) return;
        try {
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(cardRef.current, {
                cacheBust: true,
                pixelRatio: 2,
                backgroundColor: "#08070b",
                skipFonts: true
            });
            const a = document.createElement("a");
            a.href = url;
            a.download = `republic-day-${profile.firstName}.png`;
            a.click();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Քարտդ ներբեռնված է 🇦🇲");
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Չստացվեց ներբեռնել ☹️");
        }
    };
    const publicUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$publicUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProfileUrl"])(entry.id);
    const shareText = `${profile.firstName} ${profile.lastName} — հաստատված հայրենասեր 🇦🇲 Մայիսի 28-ին գալիս ա։ Իսկ դու՞`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$confetti$2f$dist$2f$react$2d$confetti$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: width,
                height: height,
                recycle: true,
                numberOfPieces: 260,
                gravity: 0.18,
                colors: ALL
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            flashing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed inset-0 z-50",
                animate: {
                    opacity: [
                        0,
                        0.7,
                        0,
                        0.5,
                        0
                    ]
                },
                transition: {
                    duration: 1.6
                },
                style: {
                    background: "white"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.5,
                    opacity: 0,
                    rotate: -10
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    rotate: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 180,
                    damping: 14
                },
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl md:text-6xl",
                        children: "🦅 🎉 🇦🇲 🎉 🦅"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YesScreen.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-3 text-4xl font-black leading-tight md:text-7xl neon-text",
                        style: {
                            fontFamily: "var(--font-display)"
                        },
                        children: [
                            profile.firstName.toUpperCase(),
                            ", ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/YesScreen.tsx",
                                lineNumber: 128,
                                columnNumber: 46
                            }, this),
                            "ՊԱՇՏՈՆԱՊԵՍ ՀԱՅՐԵՆԱՍԵՐ ԵՍ!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/YesScreen.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-white/70 md:text-base",
                        children: "Տատիկը հպարտ է։ Քոչարին քեզ սպասում է։ Խորովածը պատրաստ է։ 🥩"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YesScreen.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PatrioticIDCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: cardRef,
                profile: profile
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: 20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.8
                },
                className: "flex flex-wrap items-center justify-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDownload,
                    className: "rounded-2xl bg-am-gold px-5 py-3 text-sm font-black text-black shadow-[0_0_40px_rgba(255,204,0,.6)] active:scale-95",
                    children: "⬇️ ՆԵՐԲԵՌՆԵԼ ID-Ն"
                }, void 0, false, {
                    fileName: "[project]/src/components/YesScreen.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    url: publicUrl,
                    text: shareText
                }, void 0, false, {
                    fileName: "[project]/src/components/YesScreen.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RSVPList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentId: entry.id
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRestart,
                className: "mt-6 text-xs uppercase tracking-widest text-white/40 hover:text-white",
                children: "↻ Սկսել նորից"
            }, void 0, false, {
                fileName: "[project]/src/components/YesScreen.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/YesScreen.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(YesScreen, "jh2jbxz5BO3qvTlhimnzeo7MNHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useWindowSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWindowSize$3e$__["useWindowSize"]
    ];
});
_c = YesScreen;
var _c;
__turbopack_context__.k.register(_c, "YesScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/YesScreen.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/YesScreen.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_110pn9k._.js.map