import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades content in when it scrolls into view. Content is visible by default
 * (no-JS, SSR, crawlers); the hidden state is only applied after hydration
 * for elements that are still below the fold.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
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

  return (
    <div
      ref={ref}
      className={`${className} ${state === "hidden" ? "translate-y-4 opacity-0" : ""} ${
        state === "shown"
          ? "transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          : ""
      }`}
      style={state === "shown" && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
