import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight } from "./Button";
import { Wordmark } from "./Brand";
import { InstagramIcon, InstagramLink } from "./Instagram";

export function Logo({ className = "" }: { className?: string }) {
  return <Wordmark className={`h-[18px] w-auto md:h-5 ${className}`} />;
}

function alternatePath(pathname: string, isEn: boolean): string {
  if (isEn) {
    const stripped = pathname.replace(/^\/en/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

export function Nav({ lang, overlay = false }: { lang: Language; overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const t = siteContent[lang].nav;
  const isEn = lang === "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over a dark hero video, until the user scrolls.
  const light = overlay && !scrolled && !open;
  const linkTone = light
    ? "text-background/80 hover:text-background"
    : "text-foreground/70 hover:text-foreground";

  const links: { href: string; hash?: string; label: string }[] = [
    { href: localePath(lang, "/work"), label: t.work },
    { href: localePath(lang, "/services"), label: t.services },
    { href: localePath(lang, "/atelier"), label: t.atelier },
    { href: "/blog", label: t.blog },
  ];
  const startHref = localePath(lang, "/start-project");
  const altHref = alternatePath(pathname, isEn);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open ? "bg-background" : scrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          to={localePath(lang, "/")}
          aria-label="100KRAFT"
          className={light ? "text-background" : "text-foreground"}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              {...(l.hash ? { hash: l.hash } : { activeProps: { className: "!text-foreground" } })}
              className={`text-[0.9375rem] transition-colors ${linkTone}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.store}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({ name: "store_click", destination: contact.store, location: "nav" })
            }
            className={`inline-flex items-center gap-1 text-[0.9375rem] transition-colors ${linkTone}`}
          >
            {t.store}
            <ArrowUpRight />
          </a>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <InstagramLink label="Instagram @100kraft" className={`h-10 w-10 ${linkTone}`} />
          <Link
            to={altHref}
            className={`px-2 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors ${linkTone}`}
            hrefLang={isEn ? "tr" : "en"}
            title={isEn ? "Türkçe" : "English"}
          >
            {isEn ? "TR" : "EN"}
          </Link>
          <Link
            to={startHref}
            onClick={() => trackEvent({ name: "start_project_click", location: "nav" })}
            className={`hidden h-10 items-center px-4 text-[0.875rem] font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex ${
              light ? "bg-background text-foreground" : "bg-foreground text-background"
            }`}
          >
            {t.startProject}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`-mr-2 flex h-10 items-center px-2 text-[0.875rem] font-medium md:hidden ${
              light ? "text-background" : ""
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="wrap flex h-[calc(100svh-4rem)] flex-col justify-between pb-8 pt-6 md:hidden"
        >
          <nav className="flex flex-col">
            {[...links, { href: startHref, label: t.startProject }].map((l) => (
              <Link
                key={l.label}
                to={l.href}
                {...("hash" in l && l.hash ? { hash: l.hash } : {})}
                className="display border-b border-border py-4 text-5xl"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={contact.store}
              target="_blank"
              rel="noopener noreferrer"
              className="display flex items-center justify-between border-b border-border py-4 text-5xl"
            >
              {t.store}
              <ArrowUpRight className="h-7 w-7" />
            </a>
          </nav>
          <div className="flex flex-col gap-1 text-[0.9375rem] text-muted-foreground">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <InstagramIcon className="h-4 w-4" />
              @100kraft
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
