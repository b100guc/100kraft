import { heroPanels } from "@/data/projects";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { CollectionGrid } from "@/components/site/Catalogue";
import { InstagramIcon } from "@/components/site/Instagram";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { ReelPhone } from "@/components/site/ReelPhone";
import { SectionHead, ServiceList } from "@/components/site/Sections";

export function HomePage({ lang }: { lang: Language }) {
  return (
    <SiteLayout lang={lang}>
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
    <section className="wrap pt-24 pb-16 md:pt-28 md:pb-24">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="display mt-5 text-[19vw] leading-[0.95] sm:text-[13vw] md:text-[10vw] 2xl:text-[9.5rem]">
        {t.title}
      </h1>
      <div
        className="rise mt-8 grid gap-6 md:mt-10 md:grid-cols-12 md:items-end"
        style={{ animationDelay: "120ms" }}
      >
        <p className="max-w-md text-lg leading-snug text-muted-foreground md:col-span-6">
          {t.lead}
        </p>
        <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
          <ButtonLink
            href={localePath(lang, "/start-project")}
            onClick={() => trackEvent({ name: "start_project_click", location: "hero" })}
          >
            {t.cta}
            <Arrow />
          </ButtonLink>
          <ButtonLink
            href={contact.store}
            variant="outline"
            onClick={() =>
              trackEvent({ name: "store_click", destination: contact.store, location: "hero" })
            }
          >
            {t.secondary}
          </ButtonLink>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-2 md:mt-14 md:grid-cols-4 md:gap-3">
        {heroPanels.map((panel, i) => (
          <div
            key={panel.src}
            className="rise aspect-square overflow-hidden bg-tile md:aspect-[4/5]"
            style={{ animationDelay: `${200 + i * 70}ms` }}
          >
            <Picture
              image={panel}
              alt={panel.alt[lang]}
              sizes="(min-width: 768px) 25vw, 50vw"
              priority={i < 2}
              className="h-full w-full"
              imgClassName="scale-[1.3]"
            />
          </div>
        ))}
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
