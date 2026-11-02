import type { CSSProperties } from "react";
import { heroPanels, type Img } from "@/data/projects";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { CollectionGrid } from "@/components/site/Catalogue";
import { InstagramIcon } from "@/components/site/Instagram";
import { Picture } from "@/components/site/Picture";
import { PrintedTitle } from "@/components/site/PrintedTitle";
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
    <section className="relative overflow-hidden bg-ink text-background md:bg-background md:text-foreground">
      {/* Phones: the vertical "process" reel behind the title. Its sources only match
          below md, so desktop never downloads it; desktop gets the Wall Decor row instead. */}
      <div aria-hidden className="absolute inset-0 md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/reels/hero-tall.webp)" }}
        />
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/reels/hero-tall.mp4"
            type="video/mp4"
            media="(max-width: 767px) and (max-aspect-ratio: 4/5)"
          />
          <source src="/reels/hero-wide.mp4" type="video/mp4" media="(max-width: 767px)" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30" />
      </div>

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pt-32 pb-12 md:min-h-0 md:pt-32 md:pb-20">
        <div className="md:grid md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-7">
            <p className="eyebrow !text-background/75 md:!text-muted-foreground">{t.eyebrow}</p>
            <PrintedTitle className="display mt-5 text-[19vw] leading-[0.92] sm:text-[13vw] md:w-fit md:text-[8.4vw] 2xl:text-[8.5rem]">
              {t.title}
            </PrintedTitle>
          </div>
          <div
            className="rise mt-8 md:col-span-5 md:mt-0 md:pb-3"
            style={{ animationDelay: "120ms" }}
          >
            <p className="max-w-md text-lg leading-snug text-background/80 md:text-muted-foreground">
              {t.lead}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href={localePath(lang, "/start-project")}
                variant="light"
                className="md:bg-foreground md:text-background"
                onClick={() => trackEvent({ name: "start_project_click", location: "hero" })}
              >
                {t.cta}
                <Arrow />
              </ButtonLink>
              <ButtonLink
                href={contact.store}
                variant="outline"
                className="border-background/40 text-background hover:border-background md:border-border md:text-foreground md:hover:border-foreground"
                onClick={() =>
                  trackEvent({ name: "store_click", destination: contact.store, location: "hero" })
                }
              >
                {t.secondary}
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Desktop: Wall Decor #2 in its four colours. */}
        <div className="mt-12 hidden grid-cols-4 gap-3 md:grid">
          {heroPanels.map((panel, i) => (
            <WallTile key={panel.src + i} panel={panel} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Starting angles: each tile arrives turned off-pattern, then clicks round into place. */
const tileTurns = ["90deg", "-180deg", "-90deg", "180deg"];

/** One Wall Decor tile. It sets itself on load and turns a quarter while hovered. */
function WallTile({ panel, index, lang }: { panel: Img; index: number; lang: Language }) {
  return (
    <div className="group aspect-square overflow-hidden bg-tile">
      <div
        className="tile-set h-full w-full"
        style={
          {
            "--turn": tileTurns[index],
            animationDelay: `${450 + index * 120}ms`,
          } as CSSProperties
        }
      >
        <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.45,0.64,1)] group-hover:rotate-90 motion-reduce:transition-none">
          <Picture
            image={panel}
            alt={panel.alt[lang]}
            sizes="25vw"
            media="(min-width: 768px)"
            priority={index < 2}
            className="h-full w-full"
            imgClassName="scale-[1.3]"
          />
        </div>
      </div>
    </div>
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
