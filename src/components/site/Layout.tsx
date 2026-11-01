import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight, ButtonLink } from "./Button";
import { Wordmark } from "./Brand";
import { InstagramIcon } from "./Instagram";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

export function SiteLayout({ lang, children }: { lang: Language; children: ReactNode }) {
  return (
    <>
      <Nav lang={lang} />
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
        <Reveal>
          <h2 className="display text-[15vw] md:text-[8.5rem]">{t.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
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

  return (
    <footer className="bg-ink text-background">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="max-w-xs text-[0.9375rem] text-background/60">
            {siteContent[lang].hero.lead}
          </p>
          <p className="mt-4 text-sm text-background/60">{c.location}</p>
        </div>
        <nav className="flex flex-col gap-2 text-[0.9375rem] md:col-span-3">
          <Link to={localePath(lang, "/work")} className="text-background/75 hover:text-background">
            {nav.work}
          </Link>
          <Link
            to={localePath(lang, "/services")}
            className="text-background/75 hover:text-background"
          >
            {nav.services}
          </Link>
          <Link
            to={localePath(lang, "/atelier")}
            className="text-background/75 hover:text-background"
          >
            {nav.atelier}
          </Link>
          <Link to="/blog" className="text-background/75 hover:text-background">
            {nav.blog}
          </Link>
          <Link
            to={localePath(lang, "/start-project")}
            className="text-background/75 hover:text-background"
          >
            {nav.startProject}
          </Link>
        </nav>
        <div className="flex flex-col gap-2 text-[0.9375rem] md:col-span-4 md:items-end">
          <a
            href={contact.store}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({ name: "store_click", destination: contact.store, location: "footer" })
            }
            className="inline-flex items-center gap-1 text-background/75 hover:text-background"
          >
            store.100kraft.com <ArrowUpRight />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/75 hover:text-background"
          >
            <InstagramIcon className="h-4 w-4" />
            @100kraft
          </a>
          <a href={`mailto:${contact.email}`} className="text-background/75 hover:text-background">
            {contact.email}
          </a>
        </div>
      </div>
      <div className="wrap pb-8">
        <Link to={localePath(lang, "/")} aria-label="100KRAFT" className="block">
          <Wordmark className="h-auto w-full text-background" />
        </Link>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-3 border-t border-background/10 py-6 text-[0.8125rem] text-background/60">
        <span>© {new Date().getFullYear()} 100KRAFT</span>
        <a
          href="https://grainzdigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-background"
        >
          {t.by}
        </a>
      </div>
    </footer>
  );
}
