import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.15,
        lerp: 0.1,
        smoothWheel: true,
      }) as unknown as { raf: (t: number) => void; destroy: () => void };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
