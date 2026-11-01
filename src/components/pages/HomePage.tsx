import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { CollectionGrid } from "@/components/site/Catalogue";
import { InstagramIcon } from "@/components/site/Instagram";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { ReelPhone } from "@/components/site/ReelPhone";
import { SectionHead, ServiceList } from "@/components/site/Sections";

export function HomePage({ lang }: { lang: Language }) {
  return (
    <SiteLayout lang={lang} navOverlay>
      <Hero lang={lang} />
      <Work lang={lang} />
      <Workshop lang={lang} />
      <Services lang={lang} />
      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}

function Hero({ lang }: { lang: Language }) {
  const t = siteContent[lang].hero;

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-background">
      {/* The "process" reel: print, mould, pour. Muted, looping; poster shows when motion is reduced. */}
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/reels/hero-wide.webp"
        aria-hidden
      >
        <source src="/reels/hero-tall.mp4" type="video/mp4" media="(max-aspect-ratio: 4/5)" />
        <source src="/reels/hero-wide.mp4" type="video/mp4" />
      </video>
      <picture className="absolute inset-0 hidden motion-reduce:block">
        <source srcSet="/reels/hero-tall.webp" media="(max-aspect-ratio: 4/5)" />
        <img src="/reels/hero-wide.webp" alt="" className="h-full w-full object-cover" />
      </picture>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30"
      />

      <div className="wrap relative pt-32 pb-12 md:pb-16">
        <p className="eyebrow !text-background/75">{t.eyebrow}</p>
        <h1 className="display mt-5 text-[19vw] leading-[0.92] sm:text-[13vw] md:text-[10.5vw] 2xl:text-[10rem]">
          {t.title}
        </h1>
        <div
          className="rise mt-8 grid gap-6 md:mt-10 md:grid-cols-12 md:items-end"
          style={{ animationDelay: "120ms" }}
        >
          <p className="max-w-md text-lg leading-snug text-background/80 md:col-span-6">{t.lead}</p>
          <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
            <ButtonLink
              href={localePath(lang, "/start-project")}
              variant="light"
              onClick={() => trackEvent({ name: "start_project_click", location: "hero" })}
            >
              {t.cta}
              <Arrow />
            </ButtonLink>
            <ButtonLink
              href={contact.store}
              variant="outline"
              className="border-background/40 text-background hover:border-background"
              onClick={() =>
                trackEvent({ name: "store_click", destination: contact.store, location: "hero" })
              }
            >
              {t.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ lang }: { lang: Language }) {
  const t = siteContent[lang].work;
  return (
    <section className="border-t border-border">
      <div className="wrap py-20 md:py-28">
        <SectionHead title={t.title} href={localePath(lang, "/work")} linkLabel={t.all} />
        <p className="mt-4 max-w-md text-lg text-muted-foreground">{t.lead}</p>
        <div className="mt-10 md:mt-14">
          <CollectionGrid lang={lang} />
        </div>
      </div>
    </section>
  );
}

function Workshop({ lang }: { lang: Language }) {
  const t = siteContent[lang].workshop;
  return (
    <section className="overflow-hidden bg-tile">
      <div className="wrap grid items-center gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-6 lg:col-span-5">
          <h2 className="display text-[13vw] md:text-7xl">{t.title}</h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={contact.instagram}>
              <InstagramIcon className="h-[18px] w-[18px]" />
              @100kraft
            </ButtonLink>
            <ButtonLink href={localePath(lang, "/atelier")} variant="outline">
              {t.about}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-start-7">
          <ReelPhone lang={lang} />
        </div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Language }) {
  const t = siteContent[lang].services;
  return (
    <section className="border-t border-border">
      <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <SectionHead title={t.title} />
        </div>
        <div className="md:col-span-8">
          <ServiceList lang={lang} />
        </div>
      </div>
    </section>
  );
}
