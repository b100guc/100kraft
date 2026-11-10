import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals content when it scrolls into view. Content is visible by default
 * (no-JS, SSR, crawlers); the hidden state is only applied after hydration
 * for elements that are still below the fold.
 *
 * variant "rise" fades up; "print" builds the block bottom-up in layers, for images.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "rise",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "rise" | "print";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "print" ? "reveal-print" : "reveal";
  const stateClass = state === "idle" ? "" : `${base}-${state}`;
  const delayStyle =
    state === "shown" && delay
      ? variant === "print"
        ? { animationDelay: `${delay}s` }
        : { transitionDelay: `${delay}s` }
      : undefined;

  return (
    <div ref={ref} className={`${className} ${stateClass}`} style={delayStyle}>
      {children}
    </div>
  );
}
