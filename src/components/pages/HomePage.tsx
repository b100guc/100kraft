import type { CSSProperties } from "react";
import { heroPanels, projects, storeProducts, type Img } from "@/data/projects";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { InstagramIcon } from "@/components/site/Instagram";
import { Picture } from "@/components/site/Picture";
import { PrintedTitle } from "@/components/site/PrintedTitle";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { ReelPhone } from "@/components/site/ReelPhone";
import { Reveal } from "@/components/site/Reveal";
import { Label, SectionHead, ServiceList } from "@/components/site/Sections";
import { WorkIndex } from "@/components/site/WorkIndex";

export function HomePage({ lang }: { lang: Language }) {
  return (
    <SiteLayout lang={lang} navOverlay>
      <Hero lang={lang} />
      <Chain lang={lang} />
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

/** The whole chain under one roof, lit step by step like a job moving down the bench. */
function Chain({ lang }: { lang: Language }) {
  const t = siteContent[lang].chain;
  return (
    <section className="on-ink layers">
      <div className="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10 md:py-7">
        <p className="eyebrow shrink-0 !text-accent">{t.label}</p>
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-1 md:justify-between md:gap-x-4">
          {t.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3 md:flex-1 md:gap-4">
              <span
                className="rise display text-2xl md:text-3xl xl:text-4xl"
                style={{ animationDelay: `${500 + i * 140}ms` }}
              >
                {step}
              </span>
              {i < t.steps.length - 1 && (
                <span aria-hidden className="h-px w-4 bg-border md:w-auto md:flex-1" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Work({ lang }: { lang: Language }) {
  const t = siteContent[lang].work;
  return (
    <section>
      <div className="wrap py-20 md:py-28">
        <SectionHead
          title={t.title}
          index="01"
          label={t.label}
          aside={`${projects.length} ${t.collections} · ${storeProducts.length} ${t.products}`}
          href={localePath(lang, "/work")}
          linkLabel={t.all}
        />
        <p className="mt-5 max-w-md text-lg text-muted-foreground">{t.lead}</p>
        <div className="mt-10 md:mt-14">
          <WorkIndex lang={lang} />
        </div>
      </div>
    </section>
  );
}

function Workshop({ lang }: { lang: Language }) {
  const t = siteContent[lang].workshop;
  return (
    <section className="on-ink layers overflow-hidden">
      <div className="wrap py-20 md:py-28">
        <Label index="02" aside="@100kraft">
          {t.label}
        </Label>
        <div className="mt-10 grid items-center gap-14 md:mt-0 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal>
              <h2 className="display text-[15vw] md:text-7xl lg:text-8xl">{t.title}</h2>
            </Reveal>
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
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Language }) {
  const t = siteContent[lang].services;
  return (
    <section>
      <div className="wrap py-20 md:py-28">
        <SectionHead
          title={t.title}
          index="03"
          label={t.label}
          href={localePath(lang, "/services")}
          linkLabel={t.all}
        />
        <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t.lead}</p>
        <div className="mt-10 md:mt-14">
          <ServiceList lang={lang} />
        </div>
      </div>
    </section>
  );
}
