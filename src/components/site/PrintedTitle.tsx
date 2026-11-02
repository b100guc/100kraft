import { useEffect, useRef, type ReactNode } from "react";

/** Layer height and print time. Tuned so the title "prints" in about three seconds. */
const LAYER = 5;
const PRINT_MS = 2800;
const PARK_MS = 450;
const FADE_MS = 700;
/** Past this point after navigation the visitor is already reading: show the title as is. */
const LATE_MS = 2500;
/** Room around the title for the print head and the Ü dots. */
const PAD = { top: 150, x: 70, bottom: 24 };

const FILAMENT = { top: "#4a4541", mid: "#1d1b1a", low: "#0b0a0a" };

interface Layer {
  y: number;
  spans: [number, number][];
  from: number;
  to: number;
}

/**
 * The desktop hero title, printed by a simulated FDM printer: the real <h1> stays in the DOM
 * (for SEO and as the final, crisp state) while a canvas over it deposits filament bead by
 * bead, layer by layer, with a print head travelling the serpentine path. On phones, with
 * reduced motion, or when JS runs late, the plain title is shown instead.
 */
export function PrintedTitle({ className, children }: { className?: string; children: ReactNode }) {
  const title = useRef<HTMLHeadingElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const h1 = title.current;
    const cv = canvas.current;
    if (!h1 || !cv) return;
    const done = () => h1.setAttribute("data-print", "done");
    const wanted = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!wanted || performance.now() > LATE_MS) return done();

    h1.setAttribute("data-print", "running");
    let raf = 0;
    let cancelled = false;

    void document.fonts.ready.then(() => {
      if (cancelled) return;
      const layers = buildLayers(h1);
      if (!layers) return done();
      raf = requestAnimationFrame((t0) => run(cv, layers, t0, (id) => (raf = id), done));
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1 ref={title} className={`print-title relative ${className ?? ""}`}>
      {children}
      <canvas
        ref={canvas}
        aria-hidden
        className="pointer-events-none absolute hidden md:block"
        style={{ top: -PAD.top, left: -PAD.x }}
      />
    </h1>
  );
}

/** Rasterise the title as the DOM laid it out, then slice it into filament layers. */
function buildLayers(h1: HTMLElement): { layers: Layer[]; w: number; h: number } | null {
  const box = h1.getBoundingClientRect();
  const w = Math.ceil(box.width + PAD.x * 2);
  const h = Math.ceil(box.height + PAD.top + PAD.bottom);
  const style = getComputedStyle(h1);
  const size = parseFloat(style.fontSize);

  const mask = document.createElement("canvas");
  mask.width = w;
  mask.height = h;
  const ctx = mask.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  ctx.font = `${style.fontWeight} ${size}px ${style.fontFamily}`;
  // Canvas only knows keyword widths; draw "condensed" and squeeze each word to the DOM width.
  ctx.fontStretch = "condensed";
  ctx.textBaseline = "alphabetic";

  const walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.textContent ?? "";
    const re = /\S+/g;
    for (let m = re.exec(text); m; m = re.exec(text)) {
      const range = document.createRange();
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      const r = range.getBoundingClientRect();
      const word = m[0].toLocaleUpperCase("tr");
      const metrics = ctx.measureText(word);
      const scale = r.width / metrics.width;
      ctx.setTransform(
        scale,
        0,
        0,
        1,
        r.left - box.left + PAD.x,
        r.top - box.top + PAD.top + metrics.fontBoundingBoxAscent,
      );
      ctx.fillText(word, 0, 0);
    }
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  const alpha = ctx.getImageData(0, 0, w, h).data;
  const rows: { y: number; spans: [number, number][] }[] = [];
  // Bottom-up, like a printer. Sample each layer at its centre line.
  for (let y = h - PAD.bottom - LAYER; y >= 0; y -= LAYER) {
    const row = Math.min(h - 1, Math.round(y + LAYER / 2));
    const spans: [number, number][] = [];
    let start = -1;
    for (let x = 0; x < w; x++) {
      const on = alpha[(row * w + x) * 4 + 3]! > 110;
      if (on && start < 0) start = x;
      if (!on && start >= 0) {
        spans.push([start, x]);
        start = -1;
      }
    }
    if (start >= 0) spans.push([start, w]);
    if (spans.length) rows.push({ y, spans });
  }
  if (!rows.length) return null;

  const step = PRINT_MS / rows.length;
  const layers = rows.map((r, i) => ({ ...r, from: i * step, to: (i + 1) * step }));
  return { layers, w, h };
}

function run(
  cv: HTMLCanvasElement,
  { layers, w, h }: { layers: Layer[]; w: number; h: number },
  t0: number,
  setRaf: (id: number) => void,
  done: () => void,
) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = w * dpr;
  cv.height = h * dpr;
  cv.style.width = `${w}px`;
  cv.style.height = `${h}px`;
  const ctx = cv.getContext("2d");
  // Finished layers are baked here once, so each frame only draws the live layer and the head.
  const bed = document.createElement("canvas");
  bed.width = cv.width;
  bed.height = cv.height;
  const bedCtx = bed.getContext("2d");
  if (!ctx || !bedCtx) return done();
  ctx.scale(dpr, dpr);
  bedCtx.scale(dpr, dpr);

  let baked = 0;
  let last = { x: layers[0]!.spans[0]![0], y: layers[0]!.y };

  const frame = (now: number) => {
    const t = now - t0;

    while (baked < layers.length && layers[baked]!.to <= t) {
      const l = layers[baked]!;
      for (const [a, b] of l.spans) bead(bedCtx, a, b, l.y);
      baked++;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(bed, 0, 0, w, h);

    if (baked < layers.length) {
      const l = layers[baked]!;
      const p = Math.max(0, (t - l.from) / (l.to - l.from));
      const min = l.spans[0]![0] - 6;
      const max = l.spans[l.spans.length - 1]![1] + 6;
      // Serpentine: every other layer runs right to left.
      const ltr = baked % 2 === 0;
      const x = ltr ? min + (max - min) * p : max - (max - min) * p;
      for (const [a, b] of l.spans) {
        const s = ltr ? a : Math.max(a, x);
        const e = ltr ? Math.min(b, x) : b;
        if (e > s) bead(ctx, s, e, l.y);
      }
      last = { x, y: l.y };
      head(ctx, x, l.y, 1, h);
    } else {
      // Park: the head lifts away and fades, then the crisp title takes over.
      const p = Math.min(1, (t - PRINT_MS) / PARK_MS);
      const ease = 1 - (1 - p) ** 3;
      head(ctx, last.x + ease * 60, last.y - ease * 90, 1 - p, h);
      if (p >= 1) {
        done();
        cv.style.transition = `opacity ${FADE_MS}ms ease`;
        cv.style.opacity = "0";
        window.setTimeout(() => (cv.style.display = "none"), FADE_MS);
        return;
      }
    }
    setRaf(requestAnimationFrame(frame));
  };
  setRaf(requestAnimationFrame(frame));
}

/** One extruded bead: a rounded strand with a highlight on top, like PLA catching light. */
function bead(ctx: CanvasRenderingContext2D, a: number, b: number, y: number) {
  const g = ctx.createLinearGradient(0, y, 0, y + LAYER);
  g.addColorStop(0, FILAMENT.top);
  g.addColorStop(0.45, FILAMENT.mid);
  g.addColorStop(1, FILAMENT.low);
  ctx.fillStyle = g;
  const r = LAYER / 2;
  ctx.beginPath();
  ctx.roundRect(a, y + 0.3, Math.max(b - a, LAYER), LAYER - 0.3, r);
  ctx.fill();
}

/** The hotend: filament tube, heatsink fins, heater block, brass nozzle and a warm tip. */
function head(ctx: CanvasRenderingContext2D, x: number, y: number, alpha: number, h: number) {
  if (alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  const tip = y;

  const glow = ctx.createRadialGradient(x, tip, 0, x, tip, 16);
  glow.addColorStop(0, "rgba(255, 150, 90, 0.55)");
  glow.addColorStop(1, "rgba(255, 150, 90, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(x - 16, tip - 16, 32, 32);

  // Tube and filament going up out of frame.
  ctx.fillStyle = "rgba(20, 19, 18, 0.12)";
  ctx.fillRect(x - 3, -h, 6, h + tip - 70);
  ctx.fillStyle = "#b55a49";
  ctx.fillRect(x - 1, -h, 2, h + tip - 70);

  // Heatsink fins.
  ctx.fillStyle = "#9a958f";
  for (let i = 0; i < 5; i++) ctx.fillRect(x - 13, tip - 70 + i * 5, 26, 2.5);
  // Heater block.
  ctx.fillStyle = "#b9b4ad";
  ctx.fillRect(x - 15, tip - 44, 30, 20);
  ctx.fillStyle = "rgba(20, 19, 18, 0.18)";
  ctx.fillRect(x - 15, tip - 26, 30, 2);
  // Brass nozzle.
  ctx.fillStyle = "#b8955a";
  ctx.beginPath();
  ctx.moveTo(x - 7, tip - 24);
  ctx.lineTo(x + 7, tip - 24);
  ctx.lineTo(x + 2, tip - 1);
  ctx.lineTo(x - 2, tip - 1);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
