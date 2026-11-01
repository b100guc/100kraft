import { useEffect, useRef, useState } from "react";
import type { Language } from "@/data/translations";

export interface Reel {
  code: string;
  url: string;
  caption: Record<Language, string>;
}

/** The two most recent Instagram reels, encoded to public/reels/<code>.(mp4|webp). */
export const reels: Reel[] = [
  {
    code: "DfNiB_0ovnT",
    url: "https://www.instagram.com/reel/DfNiB_0ovnT/",
    caption: { tr: "Silikon kalıptan beton panel", en: "A concrete panel out of the mould" },
  },
  {
    code: "DfDFTbMIM3D",
    url: "https://www.instagram.com/reel/DfDFTbMIM3D/",
    caption: { tr: "Kurt büstü", en: "Wolf bust" },
  },
];

/**
 * An iPhone frame playing the reels back to back. When one ends the screen slides up
 * to the next, and it loops. Videos only load and play while the phone is on screen.
 */
export function ReelPhone({ lang }: { lang: Language }) {
  const frame = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = frame.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!!entry?.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (visible && i === active && !reduced) {
        v.currentTime = 0;
        void v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, visible, reduced]);

  const next = () => setActive((i) => (i + 1) % reels.length);
  const current = reels[active]!;

  return (
    <div className="flex flex-col items-center">
      <div
        ref={frame}
        className="relative h-[540px] w-[250px] shrink-0 rounded-[44px] bg-ink p-[10px] shadow-[0_40px_80px_-30px_rgba(20,19,18,0.55)] ring-1 ring-black/40 sm:h-[600px] sm:w-[277px]"
      >
        <span
          aria-hidden
          className="absolute top-[18px] left-1/2 z-10 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-ink"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-ink">
          <div
            className="flex h-full w-full flex-col transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateY(-${active * 100}%)` }}
          >
            {reels.map((reel, i) => (
              <video
                key={reel.code}
                ref={(el) => {
                  videos.current[i] = el;
                }}
                className="h-full min-h-0 w-full shrink-0 object-cover"
                src={visible || i === 0 ? `/reels/${reel.code}.mp4` : undefined}
                poster={`/reels/${reel.code}.webp`}
                muted
                playsInline
                preload={visible ? "auto" : "none"}
                controls={reduced}
                onEnded={next}
                aria-label={reel.caption[lang]}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {reels.map((reel, i) => (
          <button
            key={reel.code}
            type="button"
            onClick={() => setActive(i)}
            aria-label={reel.caption[lang]}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-foreground" : "w-3 bg-foreground/25 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
      <a
        href={current.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-[0.9375rem] text-muted-foreground underline decoration-foreground/20 underline-offset-4 hover:text-foreground"
      >
        {current.caption[lang]} ↗
      </a>
    </div>
  );
}
