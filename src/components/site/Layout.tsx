import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ArrowUpRight, ButtonLink } from "./Button";
import { Wordmark } from "./Brand";
import { InstagramIcon } from "./Instagram";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";
import { Label } from "./Sections";

export function SiteLayout({
  lang,
  children,
  navOverlay = false,
}: {
  lang: Language;
  children: ReactNode;
  navOverlay?: boolean;
}) {
  return (
    <>
      <span id="top" />
      <Nav lang={lang} overlay={navOverlay} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}

export function ContactBlock({ lang }: { lang: Language }) {
  const t = siteContent[lang].contact;
  return (
    <section id="contact" className="border-t border-border">
      <div className="wrap py-20 md:py-32">
        <Label aside={t.reply}>{t.label}</Label>
        <Reveal variant="print" className="mt-8 md:mt-10">
          <h2 className="display text-[15vw] md:text-[9rem] xl:text-[11rem]">{t.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="max-w-md text-lg text-muted-foreground md:col-span-5">{t.lead}</p>
          <div className="flex flex-col gap-6 md:col-span-7 md:items-end">
            <a
              href={`mailto:${contact.email}`}
              onClick={() =>
                trackEvent({ name: "email_click", address: contact.email, location: "contact" })
              }
              className="text-2xl font-medium underline decoration-foreground/20 underline-offset-[6px] transition-colors hover:decoration-accent md:text-4xl"
            >
              {contact.email}
            </a>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href={localePath(lang, "/start-project")}
                onClick={() => trackEvent({ name: "start_project_click", location: "contact" })}
              >
                {t.cta}
                <Arrow />
              </ButtonLink>
              <ButtonLink href={contact.whatsapp} variant="outline">
                {t.whatsapp}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Language }) {
  const nav = siteContent[lang].nav;
  const t = siteContent[lang].footer;
  const c = siteContent[lang].contact;
  const link = "text-foreground/75 transition-colors hover:text-foreground";

  return (
    <footer className="on-ink">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="eyebrow">{t.tagline}</p>
          <p className="mt-4 max-w-xs text-[0.9375rem] text-muted-foreground">
            {siteContent[lang].hero.lead}
          </p>
          <p className="spec mt-6 text-muted-foreground">{c.location}</p>
        </div>
        <nav className="flex flex-col gap-2 text-[0.9375rem] md:col-span-3">
          <p className="eyebrow mb-2">{t.menu}</p>
          <Link to={localePath(lang, "/work")} className={link}>
            {nav.work}
          </Link>
          <Link to={localePath(lang, "/services")} className={link}>
            {nav.services}
          </Link>
          <Link to={localePath(lang, "/atelier")} className={link}>
            {nav.atelier}
          </Link>
          <Link to="/blog" className={link}>
            {nav.blog}
          </Link>
          <Link to={localePath(lang, "/start-project")} className={link}>
            {nav.startProject}
          </Link>
        </nav>
        <div className="flex flex-col gap-2 text-[0.9375rem] md:col-span-4">
          <p className="eyebrow mb-2">{t.reach}</p>
          <a
            href={contact.store}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({ name: "store_click", destination: contact.store, location: "footer" })
            }
            className={`inline-flex items-center gap-1 ${link}`}
          >
            store.100kraft.com <ArrowUpRight />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${link}`}
          >
            <InstagramIcon className="h-4 w-4" />
            @100kraft
          </a>
          <a href={`mailto:${contact.email}`} className={link}>
            {contact.email}
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
            {contact.phone}
          </a>
        </div>
      </div>
      <div className="wrap pb-8">
        <Link to={localePath(lang, "/")} aria-label="100KRAFT" className="block">
          <Reveal variant="print">
            <Wordmark className="h-auto w-full text-foreground" />
          </Reveal>
        </Link>
      </div>
      <div className="wrap eyebrow flex flex-wrap justify-between gap-3 border-t border-border py-6">
        <span>© {new Date().getFullYear()} 100KRAFT</span>
        <a href="#top" className="transition-colors hover:text-foreground">
          {t.top} ↑
        </a>
        <a
          href="https://grainzdigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          {t.by}
        </a>
      </div>
    </footer>
  );
}
