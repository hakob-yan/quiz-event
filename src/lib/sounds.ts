"use client";

// Synthetic sounds via Web Audio API — no asset files needed.
// Each helper returns a function you can call to fire the sound.

let ctx: AudioContext | null = null;
function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    type WindowWithWebkit = Window & {
      webkitAudioContext?: typeof AudioContext;
    };
    const w = window as WindowWithWebkit;
    const AC = window.AudioContext || w.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
}

export function unlockAudio() {
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") c.resume().catch(() => {});
}

type ToneOpts = {
  freq: number;
  duration?: number;
  type?: OscillatorType;
  gain?: number;
  attack?: number;
  release?: number;
  detune?: number;
  vibrato?: { freq: number; depth: number };
};

function tone(o: ToneOpts) {
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
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.8;
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

// ============ Public sound API ============

export function playClick() {
  tone({ freq: 880, duration: 0.08, type: "square", gain: 0.08, release: 0.06 });
}

export function playPop() {
  tone({ freq: 660, duration: 0.12, type: "triangle", gain: 0.15 });
  setTimeout(() => tone({ freq: 1320, duration: 0.08, type: "triangle", gain: 0.1 }), 40);
}

export function playWarning() {
  // Soviet-style dramatic alarm
  tone({ freq: 220, duration: 0.6, type: "sawtooth", gain: 0.12 });
  setTimeout(() => tone({ freq: 180, duration: 0.6, type: "sawtooth", gain: 0.12 }), 200);
}

export function playGlitch() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => noiseBurst(0.08, 0.08, 800 + Math.random() * 2000), i * 50);
  }
}

export function playSadDuduk() {
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

export function playCheer() {
  // Crowd-ish cheering = filtered noise + rising tones
  noiseBurst(1.6, 0.13, 1500);
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      tone({
        freq: 400 + Math.random() * 700,
        duration: 0.25 + Math.random() * 0.3,
        type: "sawtooth",
        gain: 0.05,
      });
    }, i * 120);
  }
}

export function playFirework() {
  noiseBurst(0.7, 0.18, 2400);
  tone({ freq: 90, duration: 0.5, type: "sine", gain: 0.3 });
}

export function playFanfare() {
  const notes = [392, 523, 659, 784, 1047];
  notes.forEach((f, i) => {
    setTimeout(
      () =>
        tone({
          freq: f,
          duration: 0.32,
          type: "square",
          gain: 0.08,
          vibrato: { freq: 6, depth: 5 },
        }),
      i * 110,
    );
  });
}

export function playTeleport() {
  tone({ freq: 1200, duration: 0.12, type: "sine", gain: 0.08, release: 0.1 });
  setTimeout(() => tone({ freq: 400, duration: 0.1, type: "triangle", gain: 0.06 }), 50);
}
