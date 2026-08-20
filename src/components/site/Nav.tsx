import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/context/LanguageContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#projects", label: t.nav.projects },
  ];

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
        <a href="/#top" className="flex items-baseline gap-2 z-10">
          <span className="font-display text-xl sm:text-2xl tracking-[-0.04em]">100KRAFT</span>
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

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center border border-foreground/20 bg-background overflow-hidden">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1.5 label-technical text-[10px] sm:text-xs transition-colors cursor-pointer ${
                language === "en"
                  ? "bg-foreground text-background font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <div className="h-4 w-px bg-foreground/20" />
            <button
              type="button"
              onClick={() => setLanguage("tr")}
              className={`px-2.5 py-1.5 label-technical text-[10px] sm:text-xs transition-colors cursor-pointer ${
                language === "tr"
                  ? "bg-foreground text-background font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              aria-label="Türkçe'ye geç"
            >
              TR
            </button>
          </div>

          <TooltipProvider delayDuration={100}>
            <div className="hidden sm:flex items-center gap-3 border-r border-foreground/20 pr-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/100kraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground/70 transition-colors hover:text-foreground"
                    aria-label="100KRAFT Instagram"
                  >
                    <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Visit 100KRAFT Instagram</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/grainzstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground/70 transition-colors hover:text-foreground"
                    aria-label="GRAINZ STUDIO Instagram"
                  >
                    <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Visit GRAINZ STUDIO Instagram</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <a
            href="https://store.100kraft.com"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/20 px-4 sm:px-5 py-2.5 bg-background"
          >
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground font-semibold transition-colors duration-500 group-hover:text-primary-foreground">
              {t.nav.store}
            </span>
          </a>
          <a
            href="/#contact"
            className="hidden sm:inline-flex group relative items-center gap-3 overflow-hidden border border-foreground/20 px-5 py-2.5"
          >
            <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
              {t.nav.contact}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
