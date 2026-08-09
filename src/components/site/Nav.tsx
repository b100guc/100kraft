import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

const links = [
  { href: "#about", label: "Atelier" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#workshop", label: "Workshop" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg tracking-[-0.04em]">100KRAFT</span>
          <span className="label-technical hidden sm:inline">Antalya</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-technical transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 border-r border-foreground/20 pr-4">
            <a
              href="https://www.instagram.com/100kraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-foreground"
              aria-label="100KRAFT Instagram"
              title="100KRAFT Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/grainzstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-foreground"
              aria-label="GRAINZ STUDIO Instagram"
              title="GRAINZ STUDIO Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/20 px-5 py-2.5"
          >
            <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
              Start a Project
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
