(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ImpossibleNoButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpossibleNoButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Dodgy NO button that stays close to the YES button.
// Constraints:
//   - Motion offset is clamped to a circle of radius MAX_OFFSET around its origin.
//   - When the cursor isn't near, it springs back toward (0,0) so it never wanders.
//   - No screen-wide teleport — just nervous twitches + rotation + scale jitter.
const MAX_OFFSET_DESKTOP = 90;
const MAX_OFFSET_MOBILE = 60;
const DODGE_THRESHOLD = 70; // px — cursor distance that triggers a dodge
function ImpossibleNoButton({ onAttempt, aggressionLevel, onEscape }) {
    _s();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(1);
    const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 380,
        damping: 22,
        mass: 0.5
    });
    const sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 380,
        damping: 22,
        mass: 0.5
    });
    const srot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rot, {
        stiffness: 200,
        damping: 16
    });
    const sscale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scale, {
        stiffness: 220,
        damping: 18
    });
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ՉԷ 😐");
    const [fakeCount, setFakeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [maxOffset, setMaxOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MAX_OFFSET_DESKTOP);
    const lastToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const aggro = Math.min(1, aggressionLevel);
    const microChance = aggro * 0.35;
    const fakeMax = Math.floor(aggro * 4);
    // Detect coarse pointer (touch) → smaller bounds so it can't drift off card.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpossibleNoButton.useEffect": ()=>{
            const mq = window.matchMedia("(pointer: coarse)");
            setMaxOffset(mq.matches ? MAX_OFFSET_MOBILE : MAX_OFFSET_DESKTOP);
            const onChange = {
                "ImpossibleNoButton.useEffect.onChange": (e)=>setMaxOffset(e.matches ? MAX_OFFSET_MOBILE : MAX_OFFSET_DESKTOP)
            }["ImpossibleNoButton.useEffect.onChange"];
            mq.addEventListener("change", onChange);
            return ({
                "ImpossibleNoButton.useEffect": ()=>mq.removeEventListener("change", onChange)
            })["ImpossibleNoButton.useEffect"];
        }
    }["ImpossibleNoButton.useEffect"], []);
    const fakes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ImpossibleNoButton.useMemo[fakes]": ()=>{
            return Array.from({
                length: fakeCount
            }).map({
                "ImpossibleNoButton.useMemo[fakes]": ()=>({
                        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(-30, 30),
                        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(-22, 50),
                        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(-10, 10),
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAKE_BUTTON_TEXT"])
                    })
            }["ImpossibleNoButton.useMemo[fakes]"]);
        }
    }["ImpossibleNoButton.useMemo[fakes]"], [
        fakeCount
    ]);
    const maybeShowInsult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpossibleNoButton.useCallback[maybeShowInsult]": ()=>{
            const now = Date.now();
            if (now - lastToast.current < 1100) return;
            lastToast.current = now;
            if (Math.random() < 0.35) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_INSULTS"]), {
                    position: "top-center",
                    style: {
                        background: "rgba(217,0,18,.95)",
                        color: "white",
                        fontWeight: 900,
                        border: "1px solid rgba(255,204,0,.5)",
                        fontSize: 14
                    },
                    duration: 1800
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlitch"])();
            }
        }
    }["ImpossibleNoButton.useCallback[maybeShowInsult]"], []);
    const bumpFake = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpossibleNoButton.useCallback[bumpFake]": ()=>{
            setFakeCount({
                "ImpossibleNoButton.useCallback[bumpFake]": (c)=>Math.min(fakeMax, c + 1)
            }["ImpossibleNoButton.useCallback[bumpFake]"]);
        }
    }["ImpossibleNoButton.useCallback[bumpFake]"], [
        fakeMax
    ]);
    // Clamp an (x, y) offset to a circle of radius maxOffset around the origin.
    const clampToRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpossibleNoButton.useCallback[clampToRadius]": (tx, ty)=>{
            const mag = Math.hypot(tx, ty);
            if (mag <= maxOffset) return {
                x: tx,
                y: ty
            };
            const k = maxOffset / mag;
            return {
                x: tx * k,
                y: ty * k
            };
        }
    }["ImpossibleNoButton.useCallback[clampToRadius]"], [
        maxOffset
    ]);
    // Cursor-based dodge.
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpossibleNoButton.useCallback[move]": (mx, my)=>{
            const btn = btnRef.current;
            if (!btn) return;
            const cur = btn.getBoundingClientRect();
            const cx = cur.left + cur.width / 2;
            const cy = cur.top + cur.height / 2;
            const dx = mx - cx;
            const dy = my - cy;
            const dist = Math.hypot(dx, dy);
            if (dist > DODGE_THRESHOLD) return;
            const force = (DODGE_THRESHOLD - dist) / DODGE_THRESHOLD; // 0..1
            const push = (20 + aggro * 40) * force;
            const ang = Math.atan2(dy, dx);
            const tx = x.get() - Math.cos(ang) * push;
            const ty = y.get() - Math.sin(ang) * push;
            const clamped = clampToRadius(tx, ty);
            x.set(clamped.x);
            y.set(clamped.y);
            rot.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(-14, 14));
            if (Math.random() < microChance) scale.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(0.55, 0.8));
            else scale.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(0.92, 1.05));
            maybeShowInsult();
        }
    }["ImpossibleNoButton.useCallback[move]"], [
        aggro,
        microChance,
        clampToRadius,
        x,
        y,
        rot,
        scale,
        maybeShowInsult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpossibleNoButton.useEffect": ()=>{
            const onMove = {
                "ImpossibleNoButton.useEffect.onMove": (e)=>move(e.clientX, e.clientY)
            }["ImpossibleNoButton.useEffect.onMove"];
            const onTouch = {
                "ImpossibleNoButton.useEffect.onTouch": (e)=>{
                    const t = e.touches[0];
                    if (t) move(t.clientX, t.clientY);
                }
            }["ImpossibleNoButton.useEffect.onTouch"];
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            window.addEventListener("touchmove", onTouch, {
                passive: true
            });
            return ({
                "ImpossibleNoButton.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("touchmove", onTouch);
                }
            })["ImpossibleNoButton.useEffect"];
        }
    }["ImpossibleNoButton.useEffect"], [
        move
    ]);
    // Idle drift-back + label twitches. Pulls the button gently toward origin so
    // it never strays — and at higher aggression, jitters rotation/scale a bit.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpossibleNoButton.useEffect": ()=>{
            const id = setInterval({
                "ImpossibleNoButton.useEffect.id": ()=>{
                    const cx = x.get();
                    const cy = y.get();
                    if (Math.abs(cx) > 0.5 || Math.abs(cy) > 0.5) {
                        x.set(cx * 0.82);
                        y.set(cy * 0.82);
                    }
                    if (Math.abs(rot.get()) > 0.1) rot.set(rot.get() * 0.7);
                    if (Math.abs(scale.get() - 1) > 0.01) {
                        scale.set(scale.get() + (1 - scale.get()) * 0.25);
                    }
                    if (aggro > 0.3 && Math.random() < 0.35) {
                        setLabel(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAKE_BUTTON_TEXT"])} 😐`);
                    }
                }
            }["ImpossibleNoButton.useEffect.id"], 240);
            return ({
                "ImpossibleNoButton.useEffect": ()=>clearInterval(id)
            })["ImpossibleNoButton.useEffect"];
        }
    }["ImpossibleNoButton.useEffect"], [
        aggro,
        x,
        y,
        rot,
        scale
    ]);
    const handleClick = ()=>{
        // At higher aggression, the click occasionally "slips" — but the button
        // never runs far; it just twitches and rebumps a decoy.
        const dodgeProb = 0.5 + aggro * 0.35;
        if (Math.random() < dodgeProb) {
            onEscape();
            maybeShowInsult();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlitch"])();
            bumpFake();
            // Quick nervous twitch within the same dodge circle.
            const ang = Math.random() * Math.PI * 2;
            const r = maxOffset * (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(0.5, 0.95);
            x.set(Math.cos(ang) * r);
            y.set(Math.sin(ang) * r);
            rot.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(-18, 18));
            scale.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBetween"])(0.7, 1.05));
            return;
        }
        onAttempt();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        style: {
            width: maxOffset * 2 + 140,
            height: maxOffset * 2 + 80
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: [
                fakes.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 0.7
                        },
                        transition: {
                            type: "spring",
                            stiffness: 220,
                            damping: 14
                        },
                        style: {
                            position: "absolute",
                            left: `calc(50% + ${f.x}px)`,
                            top: `calc(50% + ${f.y}px)`,
                            transform: `translate(-50%,-50%) rotate(${f.r}deg)`,
                            pointerEvents: "none"
                        },
                        className: "rounded-2xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-black text-white/50",
                        children: f.label
                    }, i, false, {
                        fileName: "[project]/src/components/ImpossibleNoButton.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    ref: btnRef,
                    onClick: handleClick,
                    style: {
                        x: sx,
                        y: sy,
                        rotate: srot,
                        scale: sscale
                    },
                    className: "relative z-10 rounded-2xl border-2 border-white/30 bg-black/60 px-8 py-4 text-xl font-black text-white/90 shadow-[0_0_40px_rgba(255,255,255,.1)] hover:bg-black/80",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/ImpossibleNoButton.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImpossibleNoButton.tsx",
            lineNumber: 191,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ImpossibleNoButton.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(ImpossibleNoButton, "dbzKswF0Uc/GDzXC0fE85/21azg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ImpossibleNoButton;
var _c;
__turbopack_context__.k.register(_c, "ImpossibleNoButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MainScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$parallax$2d$tilt$2f$dist$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-parallax-tilt/dist/modern/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wrap$2d$balancer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-wrap-balancer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImpossibleNoButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImpossibleNoButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/armenianContent.ts [app-client] (ecmascript)");
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
function MainScreen({ profile, noBlocked, onYes, onNo }) {
    _s();
    const [escapes, setEscapes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlockAudio"])();
        }
    }["MainScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                speed: 90,
                gradient: false,
                className: "-mx-4 border-y border-am-red/40 bg-black/40 py-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$armenianContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PATRIOTIC_LINES"].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-6 text-xs font-black tracking-widest text-am-gold",
                        children: [
                            "🇦🇲 ",
                            l,
                            " 🇦🇲"
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/MainScreen.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$parallax$2d$tilt$2f$dist$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                glareEnable: true,
                glareMaxOpacity: 0.3,
                glareColor: "#ffcc00",
                glarePosition: "all",
                tiltMaxAngleX: 8,
                tiltMaxAngleY: 8,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 20,
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        type: "spring",
                        stiffness: 220,
                        damping: 18
                    },
                    className: "glass rounded-3xl p-6 md:p-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-xs uppercase tracking-[0.4em] text-am-gold/80",
                            children: "Մայիսի 28 · Հանրապետության Օր"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-black leading-[0.95] md:text-8xl neon-text glitch-layer",
                            style: {
                                fontFamily: "var(--font-display)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wrap$2d$balancer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    profile.firstName.toUpperCase(),
                                    ",",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/MainScreen.tsx",
                                        lineNumber: 63,
                                        columnNumber: 49
                                    }, this),
                                    "ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block",
                                        children: "🇦🇲"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MainScreen.tsx",
                                        lineNumber: 64,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MainScreen.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-5 max-w-lg text-sm text-white/70 md:text-base",
                            children: "Ընտրությունը քոնն ա ախպեր/քուրիկ։ Մի սխալվիր։ Տատիկները նայում են։"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileTap: {
                            scale: 0.94,
                            rotate: -2
                        },
                        whileHover: {
                            scale: 1.05,
                            rotate: 1
                        },
                        animate: {
                            boxShadow: [
                                "0 0 30px rgba(255,204,0,.5)",
                                "0 0 80px rgba(255,204,0,.9)",
                                "0 0 30px rgba(255,204,0,.5)"
                            ]
                        },
                        transition: {
                            boxShadow: {
                                duration: 1.4,
                                repeat: Infinity
                            }
                        },
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playPop"])();
                            onYes();
                        },
                        className: "relative rounded-2xl border-2 border-am-gold bg-am-red px-10 py-5 text-3xl font-black text-white shadow-[0_0_60px_rgba(217,0,18,.7)]",
                        style: {
                            fontFamily: "var(--font-display)"
                        },
                        children: [
                            "ԱՅՈ 🇦🇲",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 rounded-2xl",
                                animate: {
                                    opacity: [
                                        0.2,
                                        0.5,
                                        0.2
                                    ]
                                },
                                transition: {
                                    duration: 1.6,
                                    repeat: Infinity
                                },
                                style: {
                                    background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%)",
                                    backgroundSize: "200% 100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    noBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border-2 border-dashed border-white/15 px-6 py-4 text-center text-xs text-white/40",
                        children: [
                            "«ՉԷ»-ն այլևս հասանելի չէ 🚫",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/MainScreen.tsx",
                                lineNumber: 103,
                                columnNumber: 40
                            }, this),
                            "քո որոշումը պատմական է"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImpossibleNoButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        aggressionLevel: Math.min(1, escapes / 8),
                        onEscape: ()=>setEscapes((e)=>e + 1),
                        onAttempt: ()=>{
                            onNo();
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainScreen.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainScreen.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-[10px] uppercase tracking-[0.3em] text-white/30",
                children: [
                    "Փորձեցի՞ր փախչել «ՉԷ»-ից ",
                    escapes,
                    " անգամ · աճում է ագրեսիան 📈"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainScreen.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainScreen.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(MainScreen, "zrBl2WiNReKDUqaPaTBzubbkrME=");
_c = MainScreen;
var _c;
__turbopack_context__.k.register(_c, "MainScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MainScreen.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MainScreen.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/react-parallax-tilt/dist/modern/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const i = (t, e, i, n)=>{
    t.style.transition = `${e} ${i}ms ${n}`;
}, n = (t, e, i)=>Math.min(Math.max(t, e), i);
class s {
    constructor(t, e){
        this.glareAngle = 0, this.glareOpacity = 0, this.calculateGlareSize = (t)=>{
            const { width: e, height: i } = t, n = Math.sqrt(e ** 2 + i ** 2);
            return {
                width: n,
                height: n
            };
        }, this.setSize = (t)=>{
            const e = this.calculateGlareSize(t);
            this.glareEl.style.width = `${e.width}px`, this.glareEl.style.height = `${e.height}px`;
        }, this.update = (t, e, i, n)=>{
            this.updateAngle(t, e.glareReverse), this.updateOpacity(t, e, i, n);
        }, this.updateAngle = (t, e)=>{
            const { xPercentage: i, yPercentage: n } = t, s = 180 / Math.PI, r = i ? Math.atan2(n, -i) * s : 0;
            this.glareAngle = r - (e ? 180 : 0);
        }, this.updateOpacity = (t, e, i, s)=>{
            const { xPercentage: r, yPercentage: l } = t, { glarePosition: a, glareReverse: o, glareMaxOpacity: h } = e, p = i ? -1 : 1, c = s ? -1 : 1, g = o ? -1 : 1;
            let d = 0;
            switch(a){
                case "top":
                    d = -r * p * g;
                    break;
                case "right":
                    d = l * c * g;
                    break;
                case "bottom":
                case void 0:
                    d = r * p * g;
                    break;
                case "left":
                    d = -l * c * g;
                    break;
                case "all":
                    d = Math.hypot(r, l);
            }
            const u = n(d, 0, 100);
            this.glareOpacity = u * h / 100;
        }, this.render = (t)=>{
            const { glareColor: e } = t;
            this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`, this.glareEl.style.opacity = this.glareOpacity.toString(), this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${e} 100%)`;
        }, this.glareWrapperEl = document.createElement("div"), this.glareEl = document.createElement("div"), this.glareWrapperEl.appendChild(this.glareEl), this.glareWrapperEl.className = "glare-wrapper", this.glareEl.className = "glare";
        const i = {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: e,
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            pointerEvents: "none"
        }, s = this.calculateGlareSize(t), r = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "0% 0%",
            pointerEvents: "none",
            width: `${s.width}px`,
            height: `${s.height}px`
        };
        Object.assign(this.glareWrapperEl.style, i), Object.assign(this.glareEl.style, r);
    }
}
class r {
    constructor(){
        this.tiltAngleX = 0, this.tiltAngleY = 0, this.tiltAngleXPercentage = 0, this.tiltAngleYPercentage = 0, this.update = (t, e)=>{
            this.updateTilt(t, e), this.updateTiltManualInput(t, e), this.updateTiltReverse(e), this.updateTiltLimits(e);
        }, this.updateTilt = (t, e)=>{
            const { xPercentage: i, yPercentage: n } = t, { tiltMaxAngleX: s, tiltMaxAngleY: r } = e;
            this.tiltAngleX = i * s / 100, this.tiltAngleY = n * r / 100 * -1;
        }, this.updateTiltManualInput = (t, e)=>{
            const { tiltAngleXManual: i, tiltAngleYManual: n, tiltMaxAngleX: s, tiltMaxAngleY: r } = e;
            (null !== i || null !== n) && (this.tiltAngleX = null !== i ? i : 0, this.tiltAngleY = null !== n ? n : 0, t.xPercentage = 100 * this.tiltAngleX / s, t.yPercentage = 100 * this.tiltAngleY / r);
        }, this.updateTiltReverse = (t)=>{
            const e = t.tiltReverse ? -1 : 1;
            this.tiltAngleX = e * this.tiltAngleX, this.tiltAngleY = e * this.tiltAngleY;
        }, this.updateTiltLimits = (t)=>{
            const { tiltAxis: e } = t;
            this.tiltAngleX = n(this.tiltAngleX, -90, 90), this.tiltAngleY = n(this.tiltAngleY, -90, 90);
            e && (this.tiltAngleX = "x" === e ? this.tiltAngleX : 0, this.tiltAngleY = "y" === e ? this.tiltAngleY : 0);
        }, this.updateTiltAnglesPercentage = (t)=>{
            const { tiltMaxAngleX: e, tiltMaxAngleY: i } = t;
            this.tiltAngleXPercentage = this.tiltAngleX / e * 100, this.tiltAngleYPercentage = this.tiltAngleY / i * 100;
        }, this.render = (t)=>{
            t.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
        };
    }
}
const l = {
    scale: 1,
    perspective: 1e3,
    flipVertically: !1,
    flipHorizontally: !1,
    reset: !0,
    transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
    transitionSpeed: 400,
    trackOnWindow: !1,
    gyroscope: !1,
    ...{
        tiltEnable: !0,
        tiltReverse: !1,
        tiltAngleXInitial: 0,
        tiltAngleYInitial: 0,
        tiltMaxAngleX: 20,
        tiltMaxAngleY: 20,
        tiltAxis: void 0,
        tiltAngleXManual: null,
        tiltAngleYManual: null
    },
    glareEnable: !1,
    glareMaxOpacity: .7,
    glareColor: "#ffffff",
    glarePosition: "bottom",
    glareReverse: !1,
    glareBorderRadius: "0"
};
class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"] {
    constructor(){
        super(...arguments), this.wrapperEl = {
            node: null,
            size: {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            },
            clientPosition: {
                x: null,
                y: null,
                xPercentage: 0,
                yPercentage: 0
            },
            updateAnimationId: null,
            scale: 1
        }, this.tilt = null, this.glare = null, this.addDeviceOrientationEventListener = async ()=>{
            if (!window.DeviceOrientationEvent) return;
            const t = DeviceOrientationEvent.requestPermission;
            if ("function" == typeof t) {
                return void ("granted" === await t() && window.addEventListener("deviceorientation", this.onMove));
            }
            window.addEventListener("deviceorientation", this.onMove);
        }, this.setSize = ()=>{
            this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size);
        }, this.mainLoop = (t)=>{
            null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.processInput(t), this.update(t.type), this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame);
        }, this.onEnter = (t)=>{
            const { onEnter: e } = this.props;
            this.setSize(), this.wrapperEl.node.style.willChange = "transform", this.setTransitions(), e && e({
                event: t
            });
        }, this.onMove = (t)=>{
            this.mainLoop(t), this.emitOnMove(t);
        }, this.onLeave = (t)=>{
            const { onLeave: e } = this.props;
            if (this.setTransitions(), e && e({
                event: t
            }), this.props.reset) {
                const t = new CustomEvent("autoreset");
                this.onMove(t);
            }
        }, this.processInput = (t)=>{
            const { scale: e } = this.props;
            switch(t.type){
                case "mousemove":
                    this.wrapperEl.clientPosition.x = t.pageX, this.wrapperEl.clientPosition.y = t.pageY, this.wrapperEl.scale = e;
                    break;
                case "touchmove":
                    this.wrapperEl.clientPosition.x = t.touches[0].pageX, this.wrapperEl.clientPosition.y = t.touches[0].pageY, this.wrapperEl.scale = e;
                    break;
                case "deviceorientation":
                    this.processInputDeviceOrientation(t), this.wrapperEl.scale = e;
                    break;
                case "autoreset":
                    {
                        const { tiltAngleXInitial: t, tiltAngleYInitial: e, tiltMaxAngleX: i, tiltMaxAngleY: s } = this.props, r = e / s * 100;
                        this.wrapperEl.clientPosition.xPercentage = n(t / i * 100, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(r, -100, 100), this.wrapperEl.scale = 1;
                        break;
                    }
            }
        }, this.processInputDeviceOrientation = (t)=>{
            if (!t.gamma || !t.beta || !this.props.gyroscope) return;
            const { tiltMaxAngleX: e, tiltMaxAngleY: i } = this.props, s = t.gamma;
            this.wrapperEl.clientPosition.xPercentage = t.beta / e * 100, this.wrapperEl.clientPosition.yPercentage = s / i * 100, this.wrapperEl.clientPosition.xPercentage = n(this.wrapperEl.clientPosition.xPercentage, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(this.wrapperEl.clientPosition.yPercentage, -100, 100);
        }, this.update = (t)=>{
            const { tiltEnable: e, flipVertically: i, flipHorizontally: n } = this.props;
            "autoreset" !== t && "deviceorientation" !== t && "propChange" !== t && this.updateClientInput(), e && this.tilt.update(this.wrapperEl.clientPosition, this.props), this.updateFlip(), this.tilt.updateTiltAnglesPercentage(this.props), this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i, n);
        }, this.updateClientInput = ()=>{
            const { trackOnWindow: t } = this.props;
            let e, i;
            if (t) {
                const { x: t, y: n } = this.wrapperEl.clientPosition;
                e = n / window.innerHeight * 200 - 100, i = t / window.innerWidth * 200 - 100;
            } else {
                const { size: { width: t, height: n, left: s, top: r }, clientPosition: { x: l, y: a } } = this.wrapperEl;
                e = (a - r) / n * 200 - 100, i = (l - s) / t * 200 - 100;
            }
            this.wrapperEl.clientPosition.xPercentage = n(e, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(i, -100, 100);
        }, this.updateFlip = ()=>{
            const { flipVertically: t, flipHorizontally: e } = this.props;
            t && (this.tilt.tiltAngleX += 180, this.tilt.tiltAngleY *= -1), e && (this.tilt.tiltAngleY += 180);
        }, this.renderFrame = ()=>{
            this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props);
        };
    }
    componentDidMount() {
        if (this.tilt = new r, this.initGlare(), this.setSize(), this.addEventListeners(), "undefined" == typeof CustomEvent) return;
        const t = new CustomEvent("autoreset");
        this.mainLoop(t);
        const e = new CustomEvent("initial");
        this.emitOnMove(e);
    }
    componentWillUnmount() {
        null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners();
    }
    componentDidUpdate() {
        const t = new CustomEvent("propChange");
        this.mainLoop(t), this.emitOnMove(t);
    }
    addEventListeners() {
        const { trackOnWindow: t, gyroscope: e } = this.props;
        window.addEventListener("resize", this.setSize), t && (window.addEventListener("mouseenter", this.onEnter), window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseout", this.onLeave), window.addEventListener("touchstart", this.onEnter), window.addEventListener("touchmove", this.onMove), window.addEventListener("touchend", this.onLeave)), e && this.addDeviceOrientationEventListener();
    }
    removeEventListeners() {
        const { trackOnWindow: t, gyroscope: e } = this.props;
        window.removeEventListener("resize", this.setSize), t && (window.removeEventListener("mouseenter", this.onEnter), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseout", this.onLeave), window.removeEventListener("touchstart", this.onEnter), window.removeEventListener("touchmove", this.onMove), window.removeEventListener("touchend", this.onLeave)), e && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove);
    }
    setWrapperElSize() {
        const t = this.wrapperEl.node.getBoundingClientRect();
        this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth, this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight, this.wrapperEl.size.left = t.left + window.scrollX, this.wrapperEl.size.top = t.top + window.scrollY;
    }
    initGlare() {
        const { glareEnable: t, glareBorderRadius: e } = this.props;
        t && (this.glare = new s(this.wrapperEl.size, e), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
    }
    emitOnMove(t) {
        const { onMove: e } = this.props;
        if (!e) return;
        let i = 0, n = 0;
        this.glare && (i = this.glare.glareAngle, n = this.glare.glareOpacity), e({
            tiltAngleX: this.tilt.tiltAngleX,
            tiltAngleY: this.tilt.tiltAngleY,
            tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
            tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
            glareAngle: i,
            glareOpacity: n,
            event: t
        });
    }
    resetWrapperElTransform() {
        this.wrapperEl.node.style.transform = "";
    }
    renderPerspective() {
        const { perspective: t } = this.props;
        this.wrapperEl.node.style.transform += `perspective(${t}px) `;
    }
    renderScale() {
        const { scale: t } = this.wrapperEl;
        this.wrapperEl.node.style.transform += `scale3d(${t},${t},${t})`;
    }
    setTransitions() {
        const { transitionSpeed: t, transitionEasing: e } = this.props;
        i(this.wrapperEl.node, "all", t, e), this.glare && i(this.glare.glareEl, "opacity", t, e);
    }
    render() {
        const { children: e, className: i, style: n } = this.props;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: (t)=>{
                this.wrapperEl.node = t;
            },
            onMouseEnter: this.onEnter,
            onMouseMove: this.onMove,
            onMouseLeave: this.onLeave,
            onTouchStart: this.onEnter,
            onTouchMove: this.onMove,
            onTouchEnd: this.onLeave,
            className: i,
            style: n,
            children: e
        });
    }
}
a.defaultProps = l;
;
}),
"[project]/node_modules/react-wrap-balancer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Balancer",
    ()=>P,
    "Provider",
    ()=>Y,
    "default",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
var E = typeof window == "undefined", m = E ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect, B = 0, _ = ()=>++B, v = !1;
function O() {
    let [n, r] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(v ? _ : void 0);
    return m(()=>{
        n === void 0 && r(_()), v = !0;
    }, []), n === void 0 ? n : `rwb-${n.toString(32)}`;
}
function R() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "R.useMemo": ()=>"useId" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId : O
    }["R.useMemo"], [])();
}
var y = "__wrap_b", f = "__wrap_n", S = "__wrap_o", T = (n, r, e)=>{
    e = e || document.querySelector(`[data-br="${n}"]`);
    let t = e == null ? void 0 : e.parentElement;
    if (!t) return;
    let l = (u)=>e.style.maxWidth = u + "px";
    e.style.maxWidth = "";
    let i = t.clientWidth, d = t.clientHeight, o = i / 2 - .25, s = i + .5, c;
    if (i) {
        for(l(o), o = Math.max(e.scrollWidth, o); o + 1 < s;)c = Math.round((o + s) / 2), l(c), t.clientHeight === d ? s = c : o = c;
        l(s * r + i * (1 - r));
    }
    e.__wrap_o || (typeof ResizeObserver != "undefined" ? (e.__wrap_o = new ResizeObserver(()=>{
        self.__wrap_b(0, +e.dataset.brr, e);
    })).observe(t) : ("TURBOPACK compile-time value", "development") === "development" && console.warn("The browser you are using does not support the ResizeObserver API. Please consider add polyfill for this API to avoid potential layout shifts or upgrade your browser. Read more: https://github.com/shuding/react-wrap-balancer#browser-support-information"));
}, I = T.toString(), w = '(self.CSS&&CSS.supports("text-wrap","balance")?1:2)', g = (n, r, e = "")=>(e && (e = `self.${f}!=1&&${e}`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("script", {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: (n ? "" : `self.${f}=self.${f}||${w};self.${y}=${I};`) + e
        },
        nonce: r
    })), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    preferNative: !0,
    hasProvider: !1
}), Y = ({ preferNative: n = !0, nonce: r, children: e })=>{
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Y.useMemo[t]": ()=>({
                preferNative: n,
                hasProvider: !0
            })
    }["Y.useMemo[t]"], [
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(h.Provider, {
        value: t
    }, g(!1, r), e);
}, P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ ratio: n = 1, preferNative: r, nonce: e, children: t, as: l, ...i }, d)=>{
    let o = R(), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(h), u = r != null ? r : c.preferNative, x = l || "span";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(d, {
        "P.useImperativeHandle": ()=>s.current
    }["P.useImperativeHandle"], []), m(()=>{
        u && self[f] === 1 || s.current && (self[y] = T)(0, n, s.current);
    }, [
        t,
        u,
        n
    ]), m(()=>{
        if (!(u && self[f] === 1)) return ()=>{
            if (!s.current) return;
            let b = s.current[S];
            b && (b.disconnect(), delete s.current[S]);
        };
    }, [
        u
    ]), ("TURBOPACK compile-time value", "development") === "development" && t && !Array.isArray(t) && typeof t == "object" && "type" in t && typeof t.type == "string" && t.type !== "span" && console.warn(`<Balancer> should not wrap <${t.type}> inside. Instead, it should directly wrap text or inline nodes.

Try changing this:
  <Balancer><${t.type}>content</${t.type}></Balancer>
To:
  <${t.type}><Balancer>content</Balancer></${t.type}>`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(x, {
        ...i,
        "data-br": o,
        "data-brr": n,
        ref: s,
        style: {
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: "inherit",
            textWrap: u ? "balance" : "initial"
        },
        suppressHydrationWarning: !0
    }, t), g(c.hasProvider, e, `self.${y}("${o}",${n})`));
});
if (!E && ("TURBOPACK compile-time value", "development") !== "production") {
    let n = document.querySelector("[data-next-hide-fouc]");
    if (n) {
        let r = (t)=>{
            for (let l of t)for (let i of Array.from(l.removedNodes)){
                if (i !== n) continue;
                e.disconnect();
                let d = document.querySelectorAll("[data-br]");
                for (let o of Array.from(d))self[y](0, +o.dataset.brr, o);
            }
        }, e = new MutationObserver(r);
        e.observe(document.head, {
            childList: !0
        });
    }
}
var A = P;
;
}),
"[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
___$insertStyle(".rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}");
const Marquee = React.forwardRef(function Marquee({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
    // React Hooks
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [marqueeWidth, setMarqueeWidth] = React.useState(0);
    const [multiplier, setMultiplier] = React.useState(1);
    const [isMounted, setIsMounted] = React.useState(false);
    const rootRef = React.useRef(null);
    const containerRef = ref || rootRef;
    const marqueeRef = React.useRef(null);
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = React.useCallback({
        "Marquee.Marquee.useCallback[calculateWidth]": ()=>{
            if (marqueeRef.current && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const marqueeRect = marqueeRef.current.getBoundingClientRect();
                let containerWidth = containerRect.width;
                let marqueeWidth = marqueeRect.width;
                // Swap width and height if direction is up or down
                if (direction === "up" || direction === "down") {
                    containerWidth = containerRect.height;
                    marqueeWidth = marqueeRect.height;
                }
                if (autoFill && containerWidth && marqueeWidth) {
                    setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
                } else {
                    setMultiplier(1);
                }
                setContainerWidth(containerWidth);
                setMarqueeWidth(marqueeWidth);
            }
        }
    }["Marquee.Marquee.useCallback[calculateWidth]"], [
        autoFill,
        containerRef,
        direction
    ]);
    // Calculate width and multiplier on mount and on window resize
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            if (!isMounted) return;
            calculateWidth();
            if (marqueeRef.current && containerRef.current) {
                const resizeObserver = new ResizeObserver({
                    "Marquee.Marquee.useEffect": ()=>calculateWidth()
                }["Marquee.Marquee.useEffect"]);
                resizeObserver.observe(containerRef.current);
                resizeObserver.observe(marqueeRef.current);
                return ({
                    "Marquee.Marquee.useEffect": ()=>{
                        if (!resizeObserver) return;
                        resizeObserver.disconnect();
                    }
                })["Marquee.Marquee.useEffect"];
            }
        }
    }["Marquee.Marquee.useEffect"], [
        calculateWidth,
        containerRef,
        isMounted
    ]);
    // Recalculate width when children change
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            calculateWidth();
        }
    }["Marquee.Marquee.useEffect"], [
        calculateWidth,
        children
    ]);
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Marquee.Marquee.useEffect"], []);
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            if (typeof onMount === "function") {
                onMount();
            }
        }
    }["Marquee.Marquee.useEffect"], []);
    // Animation duration
    const duration = React.useMemo({
        "Marquee.Marquee.useMemo[duration]": ()=>{
            if (autoFill) {
                return marqueeWidth * multiplier / speed;
            } else {
                return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
            }
        }
    }["Marquee.Marquee.useMemo[duration]"], [
        autoFill,
        containerWidth,
        marqueeWidth,
        multiplier,
        speed
    ]);
    const containerStyle = React.useMemo({
        "Marquee.Marquee.useMemo[containerStyle]": ()=>Object.assign(Object.assign({}, style), {
                ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
                ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running",
                ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%",
                ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none"
            })
    }["Marquee.Marquee.useMemo[containerStyle]"], [
        style,
        play,
        pauseOnHover,
        pauseOnClick,
        direction
    ]);
    const gradientStyle = React.useMemo({
        "Marquee.Marquee.useMemo[gradientStyle]": ()=>({
                ["--gradient-color"]: gradientColor,
                ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
            })
    }["Marquee.Marquee.useMemo[gradientStyle]"], [
        gradientColor,
        gradientWidth
    ]);
    const marqueeStyle = React.useMemo({
        "Marquee.Marquee.useMemo[marqueeStyle]": ()=>({
                ["--play"]: play ? "running" : "paused",
                ["--direction"]: direction === "left" ? "normal" : "reverse",
                ["--duration"]: `${duration}s`,
                ["--delay"]: `${delay}s`,
                ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
                ["--min-width"]: autoFill ? `auto` : "100%"
            })
    }["Marquee.Marquee.useMemo[marqueeStyle]"], [
        play,
        direction,
        duration,
        delay,
        loop,
        autoFill
    ]);
    const childStyle = React.useMemo({
        "Marquee.Marquee.useMemo[childStyle]": ()=>({
                ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
            })
    }["Marquee.Marquee.useMemo[childStyle]"], [
        direction
    ]);
    // Render {multiplier} number of children
    const multiplyChildren = React.useCallback({
        "Marquee.Marquee.useCallback[multiplyChildren]": (multiplier)=>{
            return [
                ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)
            ].map({
                "Marquee.Marquee.useCallback[multiplyChildren]": (_, i)=>React__default['default'].createElement(React.Fragment, {
                        key: i
                    }, React.Children.map(children, {
                        "Marquee.Marquee.useCallback[multiplyChildren]": (child)=>{
                            return React__default['default'].createElement("div", {
                                style: childStyle,
                                className: "rfm-child"
                            }, child);
                        }
                    }["Marquee.Marquee.useCallback[multiplyChildren]"]))
            }["Marquee.Marquee.useCallback[multiplyChildren]"]);
        }
    }["Marquee.Marquee.useCallback[multiplyChildren]"], [
        childStyle,
        children
    ]);
    return !isMounted ? null : React__default['default'].createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: "rfm-marquee-container " + className
    }, gradient && React__default['default'].createElement("div", {
        style: gradientStyle,
        className: "rfm-overlay"
    }), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle,
        onAnimationIteration: onCycleComplete,
        onAnimationEnd: onFinish
    }, React__default['default'].createElement("div", {
        className: "rfm-initial-child-container",
        ref: marqueeRef
    }, React.Children.map(children, (child)=>{
        return React__default['default'].createElement("div", {
            style: childStyle,
            className: "rfm-child"
        }, child);
    })), multiplyChildren(multiplier - 1)), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle
    }, multiplyChildren(multiplier)));
});
exports.default = Marquee;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValue",
    ()=>useMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMotionValue.useConstant[value]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initial)
    }["useMotionValue.useConstant[value]"]);
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (isStatic) {
        const [, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useMotionValue.useEffect": ()=>value.on("change", setLatest)
        }["useMotionValue.useEffect"], []);
    }
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpring",
    ()=>useSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$MainThreadAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
function toNumber(v) {
    if (typeof v === "number") return v;
    return parseFloat(v);
}
/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */ function useSpring(source, config = {}) {
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const activeSpringAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? toNumber(source.get()) : source);
    const latestValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value.get());
    const latestSetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useSpring.useRef[latestSetter]": ()=>{}
    }["useSpring.useRef[latestSetter]"]);
    const startAnimation = ()=>{
        /**
         * If the previous animation hasn't had the chance to even render a frame, render it now.
         */ const animation = activeSpringAnimation.current;
        if (animation && animation.time === 0) {
            animation.sample(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].delta);
        }
        stopAnimation();
        activeSpringAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$MainThreadAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateValue"])({
            keyframes: [
                value.get(),
                latestValue.current
            ],
            velocity: value.getVelocity(),
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...config,
            onUpdate: latestSetter.current
        });
    };
    const stopAnimation = ()=>{
        if (activeSpringAnimation.current) {
            activeSpringAnimation.current.stop();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useSpring.useInsertionEffect": ()=>{
            return value.attach({
                "useSpring.useInsertionEffect": (v, set)=>{
                    /**
             * A more hollistic approach to this might be to use isStatic to fix VisualElement animations
             * at that level, but this will work for now
             */ if (isStatic) return set(v);
                    latestValue.current = v;
                    latestSetter.current = set;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(startAnimation);
                    return value.get();
                }
            }["useSpring.useInsertionEffect"], stopAnimation);
        }
    }["useSpring.useInsertionEffect"], [
        JSON.stringify(config)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useSpring.useIsomorphicLayoutEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source)) {
                return source.on("change", {
                    "useSpring.useIsomorphicLayoutEffect": (v)=>value.set(toNumber(v))
                }["useSpring.useIsomorphicLayoutEffect"]);
            }
        }
    }["useSpring.useIsomorphicLayoutEffect"], [
        value
    ]);
    return value;
}
;
}),
]);

//# sourceMappingURL=_08y5zxs._.js.map