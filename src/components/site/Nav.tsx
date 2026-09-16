import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";

interface NavProps {
  currentLang?: Language;
}

export function Nav({ currentLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine active language from route path or prop
  const pathname = location.pathname;
  const isEn = currentLang === "en" || pathname.startsWith("/en");
  const isTr = !isEn;
  const lang: Language = isTr ? "tr" : "en";
  const t = siteContent[lang].nav;

  // Calculate equivalent alternate language URL
  const trUrl = isEn
    ? pathname === "/en" || pathname === "/en/"
      ? "/"
      : pathname.replace(/^\/en/, "")
    : pathname;
  const enUrl = !isEn
    ? pathname === "/" || pathname === "/tr"
      ? "/en"
      : `/en${pathname.replace(/^\/tr/, "")}`
    : pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const homeHref = isEn ? "/en" : "/";
  const atelierHref = isEn ? "/en#about" : "/#about";
  const servicesHref = isEn ? "/en/services" : "/services";
  const workHref = isEn ? "/en/work" : "/work";
  const startProjectHref = isEn ? "/en/start-project" : "/start-project";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
        <Link to={homeHref} className="flex items-baseline gap-2 z-10">
          <span className="font-display text-xl sm:text-2xl tracking-[-0.04em]">100KRAFT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          <a href={atelierHref} className="label-technical transition-colors hover:text-foreground">
            {t.atelier}
          </a>
          <Link
            to={servicesHref}
            className="label-technical transition-colors hover:text-foreground"
          >
            {t.services}
          </Link>
          <Link to={workHref} className="label-technical transition-colors hover:text-foreground">
            {t.work}
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center border border-foreground/20 bg-background overflow-hidden">
            <Link
              to={trUrl}
              className={`px-2.5 py-1.5 label-technical text-[10px] sm:text-xs transition-colors cursor-pointer ${
                isTr
                  ? "bg-foreground text-background font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              aria-label="Türkçe"
            >
              TR
            </Link>
            <div className="h-4 w-px bg-foreground/20" />
            <Link
              to={enUrl}
              className={`px-2.5 py-1.5 label-technical text-[10px] sm:text-xs transition-colors cursor-pointer ${
                isEn
                  ? "bg-foreground text-background font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </Link>
          </div>

          {/* Social Links */}
          <TooltipProvider delayDuration={100}>
            <div className="hidden lg:flex items-center gap-3 border-r border-foreground/20 pr-4">
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

          {/* Store CTA */}
          <a
            href="https://store.100kraft.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                name: "store_click",
                destination: "https://store.100kraft.com",
                location: "nav",
              })
            }
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/20 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-background"
          >
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground font-semibold text-xs sm:text-sm transition-colors duration-500 group-hover:text-primary-foreground">
              {t.store}
            </span>
          </a>

          {/* Start a Project CTA */}
          <Link
            to={startProjectHref}
            onClick={() => trackEvent({ name: "start_project_click", location: "nav" })}
            className="hidden sm:inline-flex group relative items-center gap-3 overflow-hidden border border-foreground/20 px-5 py-2.5"
          >
            <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
              {t.startProject}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-foreground border border-foreground/20 bg-background"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/80 bg-background px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4">
            <a
              href={atelierHref}
              className="label-technical text-base py-2 border-b border-border/50 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.atelier}
            </a>
            <Link
              to={servicesHref}
              className="label-technical text-base py-2 border-b border-border/50 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.services}
            </Link>
            <Link
              to={workHref}
              className="label-technical text-base py-2 border-b border-border/50 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.work}
            </Link>
            <Link
              to={startProjectHref}
              className="group relative flex items-center justify-between overflow-hidden bg-foreground px-5 py-3 mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                trackEvent({ name: "start_project_click", location: "mobile_nav" });
              }}
            >
              <span className="label-technical text-primary-foreground">{t.startProject}</span>
              <span className="text-primary-foreground">→</span>
            </Link>
            <div className="flex items-center gap-6 pt-4 border-t border-border/50 mt-2">
              <a
                href="https://www.instagram.com/100kraft/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70"
              >
                <Instagram className="h-4 w-4" />
                <span className="label-technical text-xs">100KRAFT</span>
              </a>
              <a
                href="https://www.instagram.com/grainzstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70"
              >
                <Instagram className="h-4 w-4" />
                <span className="label-technical text-xs">GRAINZ</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
