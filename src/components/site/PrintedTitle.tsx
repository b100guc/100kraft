import { useEffect, useRef, type ReactNode } from "react";

/** Print job: layer count and height (px), and the timeline in ms. */
const LAYERS = 7;
const LAYER_H = 3;
const INTRO_MS = 250;
const FIRST_LAYER_MS = 750;
const LAYER_MS = 300;
const PRINT_MS = FIRST_LAYER_MS + (LAYERS - 1) * LAYER_MS;
const STAND_MS = 850;
const FADE_MS = 250;
/** Past this point after navigation the visitor is already reading: show the title as is. */
const LATE_MS = 2500;

/** The bed's oblique view: how far the far edge leans right, and how much depth is squashed. */
const SHEAR = 0.36;
const SQUASH = 0.52;
/** Gantry height above the bed, and bed margin around the letters. */
const GANTRY = 54;
const BED = 34;
/** Room around the title for the bed, the gantry and the filament tube. */
const PAD = { top: 70, x: 130, bottom: 44 };

const INK = { top: "#171615", sideA: "#45403c", sideB: "#2c2927", hot: "#c8654f" };

interface Job {
  w: number;
  h: number;
  /** Letter bounds in canvas space. */
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  top: HTMLCanvasElement;
  sideA: HTMLCanvasElement;
  sideB: HTMLCanvasElement;
  hot: HTMLCanvasElement;
}

/**
 * The desktop hero title, printed on a build plate. The real <h1> stays in the DOM (for SEO
 * and as the final, crisp state). Over it, a canvas shows the letters lying on a printer bed
 * in an oblique view: a gantry sweeps back and forth, laying them down layer by layer with
 * freshly extruded filament glowing behind the nozzle. When the print is done the piece
 * stands up off the bed and lands exactly on the headline. On phones, with reduced motion,
 * or when JS runs late, the plain title is shown instead.
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const job = prepare(h1, dpr);
      if (!job) return done();
      raf = requestAnimationFrame((t0) => run(cv, job, dpr, t0, (id) => (raf = id), done));
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
        className="pointer-events-none absolute hidden max-w-none md:block"
        style={{ top: -PAD.top, left: -PAD.x }}
      />
    </h1>
  );
}

/** Rasterise the title exactly as the DOM laid it out, and tint the copies the print needs. */
function prepare(h1: HTMLElement, dpr: number): Job | null {
  const box = h1.getBoundingClientRect();
  const w = Math.ceil(box.width + PAD.x * 2);
  const h = Math.ceil(box.height + PAD.top + PAD.bottom);
  const style = getComputedStyle(h1);

  const mask = document.createElement("canvas");
  mask.width = w * dpr;
  mask.height = h * dpr;
  const ctx = mask.getContext("2d");
  if (!ctx) return null;
  ctx.font = `${style.fontWeight} ${parseFloat(style.fontSize)}px ${style.fontFamily}`;
  // Canvas only knows keyword widths; draw "condensed" and squeeze each word to the DOM width.
  ctx.fontStretch = "condensed";
  ctx.textBaseline = "alphabetic";

  let x0 = Infinity;
  let x1 = -Infinity;
  let y0 = Infinity;
  let y1 = -Infinity;
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
      const left = r.left - box.left + PAD.x;
      const top = r.top - box.top + PAD.top;
      ctx.setTransform(
        (dpr * r.width) / metrics.width,
        0,
        0,
        dpr,
        dpr * left,
        dpr * (top + metrics.fontBoundingBoxAscent),
      );
      ctx.fillText(word, 0, 0);
      x0 = Math.min(x0, left);
      x1 = Math.max(x1, left + r.width);
      y0 = Math.min(y0, top);
      y1 = Math.max(y1, top + r.height);
    }
  }
  if (!Number.isFinite(x0)) return null;

  const tint = (color: string) => {
    const c = document.createElement("canvas");
    c.width = mask.width;
    c.height = mask.height;
    const t = c.getContext("2d")!;
    t.fillStyle = color;
    t.fillRect(0, 0, c.width, c.height);
    t.globalCompositeOperation = "destination-in";
    t.drawImage(mask, 0, 0);
    return c;
  };

  return {
    w,
    h,
    x0,
    x1,
    y0,
    y1,
    top: tint(INK.top),
    sideA: tint(INK.sideA),
    sideB: tint(INK.sideB),
    hot: tint(INK.hot),
  };
}

const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2);

function run(
  cv: HTMLCanvasElement,
  job: Job,
  dpr: number,
  t0: number,
  setRaf: (id: number) => void,
  done: () => void,
) {
  const { w, h, x0, x1, y0, y1 } = job;
  cv.width = w * dpr;
  cv.height = h * dpr;
  cv.style.width = `${w}px`;
  cv.style.height = `${h}px`;
  const ctx = cv.getContext("2d");
  if (!ctx) return done();

  /** Bed space (x, y, height z) to canvas space, at tilt 1 (lying) … 0 (standing, = the DOM). */
  const project = (x: number, y: number, z: number, tilt: number): [number, number] => {
    const k = 1 - tilt * (1 - SQUASH);
    return [x + SHEAR * tilt * (y1 - y), y1 + (y - y1) * k - z * tilt];
  };
  /** Same projection as a canvas transform, for drawing the letter bitmaps. */
  const place = (z: number, tilt: number) => {
    const k = 1 - tilt * (1 - SQUASH);
    ctx.setTransform(
      dpr,
      0,
      -dpr * SHEAR * tilt,
      dpr * k,
      dpr * SHEAR * tilt * y1,
      dpr * (y1 * (1 - k) - z * tilt),
    );
  };
  const flat = () => ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const path = (points: [number, number][]) => {
    ctx.beginPath();
    points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  };

  const bx0 = x0 - BED;
  const bx1 = x1 + BED;
  const by0 = y0 - BED * 0.4;
  const by1 = y1 + BED;

  const bed = (tilt: number, alpha: number) => {
    if (alpha <= 0) return;
    flat();
    ctx.globalAlpha = alpha;
    path([
      project(bx0, by0, 0, tilt),
      project(bx1, by0, 0, tilt),
      project(bx1, by1, 0, tilt),
      project(bx0, by1, 0, tilt),
    ]);
    ctx.closePath();
    ctx.fillStyle = "#e4e0db";
    ctx.fill();
    ctx.strokeStyle = "#cfc9c2";
    ctx.lineWidth = 1;
    ctx.stroke();
    // Bed grid.
    ctx.strokeStyle = "rgba(23, 22, 21, 0.07)";
    ctx.beginPath();
    for (let x = bx0 + 40; x < bx1; x += 40) {
      ctx.moveTo(...project(x, by0, 0, tilt));
      ctx.lineTo(...project(x, by1, 0, tilt));
    }
    for (let y = by0 + 40; y < by1; y += 40) {
      ctx.moveTo(...project(bx0, y, 0, tilt));
      ctx.lineTo(...project(bx1, y, 0, tilt));
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  /** Layers 0…count-1 complete; `partial` clips the top one to what the nozzle has laid. */
  const piece = (
    count: number,
    tilt: number,
    partial?: { from: number; to: number; x: number },
  ) => {
    for (let i = 0; i < count; i++) {
      const last = i === count - 1;
      const z = (i + 1) * LAYER_H;
      place(z, tilt);
      if (last && partial) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(partial.from, 0, partial.to - partial.from, h);
        ctx.clip();
        ctx.drawImage(job.top, 0, 0, w, h);
        ctx.restore();
        // Fresh filament still glows behind the nozzle, then cools to ink.
        const dir = partial.x === partial.to ? -1 : 1;
        for (const [span, alpha] of [
          [110, 0.35],
          [60, 0.6],
          [24, 1],
        ] as const) {
          const a = Math.max(partial.from, Math.min(partial.x, partial.x + dir * span));
          const b = Math.min(partial.to, Math.max(partial.x, partial.x + dir * span));
          if (b <= a) continue;
          ctx.save();
          ctx.beginPath();
          ctx.rect(a, 0, b - a, h);
          ctx.clip();
          ctx.globalAlpha = alpha;
          ctx.drawImage(job.hot, 0, 0, w, h);
          ctx.restore();
        }
      } else {
        ctx.drawImage(last ? job.top : i % 2 ? job.sideA : job.sideB, 0, 0, w, h);
      }
    }
    flat();
  };

  const gantry = (x: number, z: number, t: number, alpha: number) => {
    if (alpha <= 0) return;
    flat();
    ctx.globalAlpha = alpha;
    ctx.lineCap = "round";
    const a = project(x, by0, GANTRY, 1);
    const b = project(x, by1, GANTRY, 1);
    // Uprights, then the beam.
    ctx.strokeStyle = "#a9a39c";
    ctx.lineWidth = 3;
    path([project(x, by0, 0, 1), a]);
    ctx.stroke();
    path([project(x, by1, 0, 1), b]);
    ctx.stroke();
    ctx.strokeStyle = "#8f8a84";
    ctx.lineWidth = 7;
    path([a, b]);
    ctx.stroke();
    ctx.strokeStyle = "#c9c4bd";
    ctx.lineWidth = 2;
    path([
      [a[0], a[1] - 2],
      [b[0], b[1] - 2],
    ]);
    ctx.stroke();

    // The head zig-zags along the beam, over the letters.
    const swing = 0.5 + 0.5 * Math.sin(t / 55);
    const y = y0 + (y1 - y0) * (0.12 + 0.76 * swing);
    const [hx, hy] = project(x, y, GANTRY, 1);
    const [nx, ny] = project(x, y, z, 1);

    const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, 22);
    glow.addColorStop(0, "rgba(255, 140, 80, 0.6)");
    glow.addColorStop(1, "rgba(255, 140, 80, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(nx - 22, ny - 22, 44, 44);

    // Filament tube arcing up out of frame.
    ctx.strokeStyle = "#b55a49";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(hx, hy - 16);
    ctx.quadraticCurveTo(hx + 12, hy - 110, hx + 90, -20);
    ctx.stroke();

    // Brass nozzle, heater block, carriage.
    ctx.fillStyle = "#b8955a";
    path([
      [hx - 5, hy + 6],
      [hx + 5, hy + 6],
      [nx + 1.5, ny - 1],
      [nx - 1.5, ny - 1],
    ]);
    ctx.fill();
    ctx.fillStyle = "#6f6a65";
    ctx.fillRect(hx - 9, hy - 2, 18, 9);
    ctx.fillStyle = "#1d1b1a";
    ctx.fillRect(hx - 13, hy - 20, 26, 19);
    ctx.fillStyle = "#b55a49";
    ctx.fillRect(hx - 13, hy - 20, 26, 3);
    ctx.globalAlpha = 1;
  };

  const sweepMin = x0 - 14;
  const sweepMax = x1 + 14;

  const frame = (now: number) => {
    const t = now - t0;
    flat();
    ctx.clearRect(0, 0, w, h);

    if (t < INTRO_MS) {
      const p = t / INTRO_MS;
      bed(1, p);
      gantry(sweepMin, LAYER_H, t, p);
    } else if (t < INTRO_MS + PRINT_MS) {
      const pt = t - INTRO_MS;
      const layer = pt < FIRST_LAYER_MS ? 0 : 1 + Math.floor((pt - FIRST_LAYER_MS) / LAYER_MS);
      const start = layer === 0 ? 0 : FIRST_LAYER_MS + (layer - 1) * LAYER_MS;
      const p = (pt - start) / (layer === 0 ? FIRST_LAYER_MS : LAYER_MS);
      const ltr = layer % 2 === 0;
      const x = ltr ? sweepMin + (sweepMax - sweepMin) * p : sweepMax - (sweepMax - sweepMin) * p;
      bed(1, 1);
      piece(layer + 1, 1, ltr ? { from: sweepMin, to: x, x } : { from: x, to: sweepMax, x });
      gantry(x, (layer + 1) * LAYER_H, t, 1);
    } else {
      // Done: the gantry parks, the piece stands up off the bed onto the headline.
      const p = Math.min(1, (t - INTRO_MS - PRINT_MS) / STAND_MS);
      const tilt = 1 - easeInOut(p);
      bed(tilt, 1 - Math.min(1, p * 1.6));
      piece(LAYERS, tilt);
      const end = LAYERS % 2 ? sweepMax : sweepMin;
      gantry(end + (LAYERS % 2 ? 1 : -1) * p * 80, LAYERS * LAYER_H, t, 1 - Math.min(1, p * 4));
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
