import { useEffect, useRef, useState } from "react";

/** "Print progress" for an article: a terracotta line under the nav and a layer-style counter. */
export function ReadingProgress({ target }: { target: string }) {
  const bar = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = document.getElementById(target);
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)));
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (label.current) label.current.textContent = `${Math.round(p * 100)}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-16 z-40">
      <div ref={bar} className="h-0.5 origin-left scale-x-0 bg-accent" />
      <span
        ref={label}
        className="spec absolute top-2 right-4 hidden text-muted-foreground md:right-10 lg:block"
      />
    </div>
  );
}

/** Table of contents that marks the section being read. */
export function Toc({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((h): h is HTMLElement => h != null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  return (
    <ol className="mt-4 text-[0.9375rem]">
      {items.map((h, i) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            aria-current={h.id === active ? "location" : undefined}
            className={`grid grid-cols-[1.75rem_1fr] items-baseline border-l py-1.5 pl-3 transition-colors ${
              h.id === active
                ? "border-accent text-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="spec text-xs">{String(i + 1).padStart(2, "0")}</span>
            {h.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
