(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/NoScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NoScreen({ onUnlock }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NoScreen.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlockAudio"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playWarning"])();
            setTimeout({
                "NoScreen.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playSadDuduk"])()
            }["NoScreen.useEffect"], 800);
            setTimeout({
                "NoScreen.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlitch"])()
            }["NoScreen.useEffect"], 300);
            const lineTimer = setInterval({
                "NoScreen.useEffect.lineTimer": ()=>{
                    setStep({
                        "NoScreen.useEffect.lineTimer": (s)=>Math.min(s + 1, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCANNING_LINES"].length - 1)
                    }["NoScreen.useEffect.lineTimer"]);
                }
            }["NoScreen.useEffect.lineTimer"], 800);
            const progressTimer = setInterval({
                "NoScreen.useEffect.progressTimer": ()=>{
                    setProgress({
                        "NoScreen.useEffect.progressTimer": (p)=>Math.min(100, p + 3)
                    }["NoScreen.useEffect.progressTimer"]);
                }
            }["NoScreen.useEffect.progressTimer"], 90);
            const doneTimer = setTimeout({
                "NoScreen.useEffect.doneTimer": ()=>{
                    setDone(true);
                    clearInterval(lineTimer);
                    clearInterval(progressTimer);
                }
            }["NoScreen.useEffect.doneTimer"], 3300);
            return ({
                "NoScreen.useEffect": ()=>{
                    clearInterval(lineTimer);
                    clearInterval(progressTimer);
                    clearTimeout(doneTimer);
                }
            })["NoScreen.useEffect"];
        }
    }["NoScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grayscale-screen crt relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50"
            }, void 0, false, {
                fileName: "[project]/src/components/NoScreen.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scan-line"
            }, void 0, false, {
                fileName: "[project]/src/components/NoScreen.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.6,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 16
                },
                className: "relative z-10 w-full max-w-2xl rounded-3xl border-2 border-red-700/70 bg-black/70 p-6 text-center md:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            opacity: [
                                1,
                                0.3,
                                1
                            ]
                        },
                        transition: {
                            duration: 0.7,
                            repeat: Infinity
                        },
                        className: "mb-2 text-xs font-black uppercase tracking-[0.5em] text-red-500",
                        children: "⚠️ ԿՐԻՏԻԿ ՊԱՏԱՍԽԱՆ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NoScreen.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-black leading-tight text-white md:text-5xl glitch-layer",
                        style: {
                            fontFamily: "var(--font-display)"
                        },
                        children: [
                            "ՔՈ ՔԱՂԱՔԱՑԻՈՒԹՅՈՒՆԸ ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/NoScreen.tsx",
                                lineNumber: 63,
                                columnNumber: 31
                            }, this),
                            "ԺԱՄԱՆԱԿԱՎՈՐ ԿԱՍԵՑՎԵԼ Է"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NoScreen.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-6 max-w-md rounded-2xl border border-white/15 bg-black/60 p-4 text-left font-mono text-xs text-green-400 md:text-sm",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCANNING_LINES"].slice(0, step + 1).map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                className: "mb-1",
                                children: [
                                    ">",
                                    " ",
                                    l,
                                    " ",
                                    i < step && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500",
                                        children: "[ok]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NoScreen.tsx",
                                        lineNumber: 75,
                                        columnNumber: 38
                                    }, this),
                                    i === step && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        animate: {
                                            opacity: [
                                                0,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 0.4,
                                            repeat: Infinity
                                        },
                                        children: "_"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NoScreen.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/NoScreen.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/NoScreen.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-4 h-3 w-full max-w-md overflow-hidden rounded-full bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                width: `${progress}%`
                            },
                            className: "h-full bg-gradient-to-r from-red-700 via-red-500 to-yellow-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NoScreen.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NoScreen.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-[10px] text-white/60",
                        children: [
                            "ՀԱՐՑԱՔՆՆՈՒԹՅԱՆ ՊՐՈՑԵՆՏ · ",
                            progress,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NoScreen.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 14
                        },
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-sm text-white/80 md:text-base",
                                children: "«ՉԷ» կոճակը հանվել է հավերժ։ Քեզ մնում է մեկ ճանապարհ։"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NoScreen.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                whileHover: {
                                    scale: 1.04
                                },
                                animate: {
                                    boxShadow: [
                                        "0 0 30px rgba(255,204,0,.6)",
                                        "0 0 80px rgba(255,204,0,1)",
                                        "0 0 30px rgba(255,204,0,.6)"
                                    ]
                                },
                                transition: {
                                    boxShadow: {
                                        duration: 1.4,
                                        repeat: Infinity
                                    }
                                },
                                onClick: onUnlock,
                                className: "rounded-2xl border-2 border-yellow-400 bg-red-700 px-8 py-4 text-xl font-black text-white",
                                style: {
                                    fontFamily: "var(--font-display)"
                                },
                                children: "ԼԱՎ, ԳԱԼԻՍ ԵՄ 🇦🇲"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NoScreen.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NoScreen.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NoScreen.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NoScreen.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(NoScreen, "mx36NHeUBsJGTqv/wd6ZXnfGK+U=");
_c = NoScreen;
var _c;
__turbopack_context__.k.register(_c, "NoScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NoScreen.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/NoScreen.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_NoScreen_tsx_0l32uxr._.js.map