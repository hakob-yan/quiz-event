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
"[project]/src/components/AvatarPicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvatarPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const OVERLAYS = [
    "🥸",
    "🕶️",
    "👑",
    "🦅",
    "🧔🏻",
    "🥩"
];
function AvatarPicker({ selfie, seed, styleIdx, overlayIdx, onSelfie, onShuffle, onCycleOverlay }) {
    _s();
    const avatarUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvatarPicker.useMemo[avatarUri]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAvatarDataUri"])(seed, styleIdx)
    }["AvatarPicker.useMemo[avatarUri]"], [
        seed,
        styleIdx
    ]);
    const overlay = OVERLAYS[overlayIdx % OVERLAYS.length];
    const handleUpload = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ()=>{
            onSelfie(reader.result);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
        };
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                whileHover: {
                    scale: 1.04,
                    rotate: -2
                },
                transition: {
                    type: "spring",
                    stiffness: 250,
                    damping: 18
                },
                className: "relative h-44 w-44 overflow-hidden rounded-3xl border-4 border-am-gold/80 shadow-[0_0_60px_rgba(255,204,0,0.5)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flag-gradient opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: selfie ?? avatarUri,
                            alt: "avatar",
                            initial: {
                                scale: 0.6,
                                opacity: 0,
                                rotate: -15
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                rotate: 0
                            },
                            exit: {
                                scale: 0.6,
                                opacity: 0,
                                rotate: 15
                            },
                            transition: {
                                type: "spring",
                                stiffness: 200,
                                damping: 16
                            },
                            className: "absolute inset-0 h-full w-full object-cover"
                        }, selfie ?? avatarUri, false, {
                            fileName: "[project]/src/components/AvatarPicker.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0,
                            rotate: -25
                        },
                        animate: {
                            scale: 1,
                            rotate: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 250,
                            damping: 12
                        },
                        className: "absolute -bottom-2 -right-2 text-5xl drop-shadow-[0_0_8px_rgba(0,0,0,.8)]",
                        children: overlay
                    }, overlay, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-2 top-2 rounded-full bg-am-red px-2 py-0.5 text-[10px] font-black text-white",
                        children: "🇦🇲 RA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AvatarPicker.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onShuffle((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomSeed"])(), (styleIdx + 1) % 5);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white", "hover:bg-white/15 active:scale-95 transition"),
                        children: "🎲 Փոխել ավատարը"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onCycleOverlay();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                        },
                        className: "rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 active:scale-95",
                        children: "🥸 Միաբերել"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "cursor-pointer rounded-xl border border-am-gold/40 bg-am-gold/10 px-3 py-2 text-xs font-semibold text-am-gold hover:bg-am-gold/20",
                        children: [
                            "📸 Սելֆի",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: handleUpload,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AvatarPicker.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    selfie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelfie(null),
                        className: "rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15",
                        children: "❌ Հեռացնել"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarPicker.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AvatarPicker.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AvatarPicker.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(AvatarPicker, "hPXSmsl98KTnUdMuY54J1FMIoRg=");
_c = AvatarPicker;
var _c;
__turbopack_context__.k.register(_c, "AvatarPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProfileSetup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AvatarPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AvatarPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
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
function ProfileSetup({ onComplete }) {
    _s();
    const [first, setFirst] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [last, setLast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selfie, setSelfie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProfileSetup.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomSeed"])()
    }["ProfileSetup.useState"]);
    const [styleIdx, setStyleIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [overlayIdx, setOverlayIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NICKNAMES"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileSetup.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlockAudio"])();
        }
    }["ProfileSetup.useEffect"], []);
    const submit = ()=>{
        if (!first.trim() || !last.trim()) return;
        onComplete({
            firstName: first.trim(),
            lastName: last.trim(),
            selfie,
            avatarSeed: seed,
            styleIdx,
            overlayIdx,
            nickname,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TITLES"]),
            patriotismScore: Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(87, 100))
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
    };
    const canSubmit = first.trim().length >= 1 && last.trim().length >= 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center gap-6 px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                speed: 70,
                gradient: false,
                className: "-mx-4 mb-2 border-y border-am-gold/30 bg-black/40 py-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PATRIOTIC_LINES"].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-6 text-xs font-black tracking-widest text-am-gold",
                        children: [
                            "🇦🇲 ",
                            l
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/ProfileSetup.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProfileSetup.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    y: -30,
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
                className: "text-center text-3xl font-black leading-tight md:text-5xl neon-text",
                style: {
                    fontFamily: "var(--font-display)"
                },
                children: [
                    "ՊԱՏՐԱՍՏԻՐ ՔՈ ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/ProfileSetup.tsx",
                        lineNumber: 65,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-am-gold",
                        children: "ՀԱՅԿԱԿԱՆ ID-Ն"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileSetup.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileSetup.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-white/60",
                children: "Մուտքագրիր անունդ ու բռնիր սելֆի, թե ո՛չ — մենք քո փոխարեն կպատրաստենք էպիկ ավատար 🦅"
            }, void 0, false, {
                fileName: "[project]/src/components/ProfileSetup.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                initial: {
                    scale: 0.95,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    delay: 0.1
                },
                className: "glass w-full rounded-3xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AvatarPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selfie: selfie,
                        seed: seed,
                        styleIdx: styleIdx,
                        overlayIdx: overlayIdx,
                        onSelfie: setSelfie,
                        onShuffle: (s, i)=>{
                            setSeed(s);
                            setStyleIdx(i);
                        },
                        onCycleOverlay: ()=>setOverlayIdx((i)=>i + 1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileSetup.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60",
                                        children: "Անուն"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileSetup.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        autoFocus: true,
                                        value: first,
                                        onChange: (e)=>setFirst(e.target.value),
                                        placeholder: "Հայկ",
                                        className: "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-lg outline-none focus:border-am-gold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileSetup.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileSetup.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60",
                                        children: "Ազգանուն"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileSetup.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: last,
                                        onChange: (e)=>setLast(e.target.value),
                                        placeholder: "Սարգսյան",
                                        className: "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-lg outline-none focus:border-am-gold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileSetup.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileSetup.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileSetup.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 rounded-2xl border border-am-gold/30 bg-am-gold/5 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1.5 flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase tracking-widest text-am-gold/80",
                                        children: "Կեղծ Հայկական Մականուն"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileSetup.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setNickname((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NICKNAMES"]));
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                                                },
                                                className: "rounded-lg bg-am-gold px-2.5 py-1 text-[10px] font-black text-black active:scale-95",
                                                "aria-label": "Պատահական մականուն",
                                                children: "🎰 Պատահական"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProfileSetup.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setNickname("");
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                                                },
                                                className: "flex h-6 w-6 items-center justify-center rounded-lg border border-am-gold/50 bg-am-gold/10 text-sm font-black text-am-gold hover:bg-am-gold/20 active:scale-95",
                                                "aria-label": "Անհատական մականուն",
                                                title: "Մաքրել՝ քո սեփականը գրելու համար",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProfileSetup.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProfileSetup.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileSetup.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: nickname,
                                onChange: (e)=>setNickname(e.target.value.slice(0, 80)),
                                placeholder: "Գրիր քո մականունը... 🇦🇲",
                                className: "w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-base font-black outline-none placeholder:text-white/30 focus:border-am-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileSetup.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileSetup.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileSetup.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileTap: {
                    scale: 0.95
                },
                whileHover: {
                    scale: 1.03
                },
                disabled: !canSubmit,
                onClick: submit,
                className: "w-full max-w-sm rounded-2xl bg-am-red px-6 py-4 text-xl font-black text-white shadow-[0_0_40px_rgba(217,0,18,0.6)] disabled:opacity-40 disabled:cursor-not-allowed neon-text",
                children: "ՇԱՐՈՒՆԱԿԵԼ →"
            }, void 0, false, {
                fileName: "[project]/src/components/ProfileSetup.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProfileSetup.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ProfileSetup, "e4OpiWwHYozUBiTOEke/D9/kpG4=");
_c = ProfileSetup;
var _c;
__turbopack_context__.k.register(_c, "ProfileSetup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProfileSetup.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ProfileSetup.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_0kipxkw._.js.map