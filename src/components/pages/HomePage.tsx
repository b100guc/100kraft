import { heroPanels, projects, storeProducts } from "@/data/projects";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ArrowUpRight, ButtonLink } from "@/components/site/Button";
import { CollectionGrid } from "@/components/site/Catalogue";
import { InstagramSection } from "@/components/site/Instagram";
import { PostCard } from "@/components/pages/BlogPages";
import { posts } from "@/data/blog";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection, ProcessSection, SectionHead, ServiceList } from "@/components/site/Sections";

export function HomePage({ lang }: { lang: Language }) {
  return (
    <SiteLayout lang={lang}>
      <Hero lang={lang} />
      <Work lang={lang} />
      <Services lang={lang} />
      <ProcessSection lang={lang} />
      <Atelier lang={lang} />
      <InstagramSection lang={lang} />
      <Journal lang={lang} />
      <FaqSection lang={lang} />
      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}

function Hero({ lang }: { lang: Language }) {
  const t = siteContent[lang].hero;

  return (
    <section className="wrap pt-24 pb-16 md:pt-28 md:pb-24">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="display mt-5 text-[19vw] leading-[0.98] sm:text-[12vw] md:text-[7.6vw] 2xl:text-[7rem]">
        {t.title.split(" ").map((word) => (
          <span key={word} className="block md:inline md:after:content-['_']">
            {word}
          </span>
        ))}
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
      <p className="eyebrow mt-3">{t.caption}</p>
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

function Atelier({ lang }: { lang: Language }) {
  const t = siteContent[lang].atelier;
  const photo = projects.find((p) => p.slug === "flexi-dragons")!.gallery[1]!;
  const facts = [
    [t.facts.place, t.facts.placeValue],
    [t.facts.store, `${storeProducts.length} ${t.facts.storeValue}`],
    [t.facts.custom, t.facts.customValue],
  ];

  return (
    <section id="atelier" className="border-t border-border">
      <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <Reveal>
            <Picture
              image={photo}
              alt={photo.alt[lang]}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5] overflow-hidden bg-tile"
            />
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <SectionHead title={t.title} />
          <p className="mt-8 text-2xl leading-snug md:text-3xl">{t.lead}</p>
          <p className="mt-6 max-w-xl text-[1.0625rem] text-muted-foreground">{t.body}</p>
          <dl className="mt-10 border-t border-border">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[8rem_1fr] gap-4 border-b border-border py-3 text-[0.9375rem]"
              >
                <dt className="text-muted-foreground">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <ButtonLink href={localePath(lang, "/atelier")} variant="outline" className="mt-8">
            {lang === "tr" ? "Atölyeyi tanıyın" : "Meet the atelier"}
            <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Journal({ lang }: { lang: Language }) {
  if (posts.length === 0) return null;
  const title = lang === "tr" ? "Blog" : "Journal";
  const lead =
    lang === "tr"
      ? "Malzemeler, baskı teknikleri ve kalıplar üzerine atölyeden notlar."
      : "Workshop notes on materials, printing and moulds (in Turkish).";
  return (
    <section className="border-t border-border">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          title={title}
          href="/blog"
          linkLabel={lang === "tr" ? "Tüm yazılar" : "All posts"}
        />
        <p className="mt-4 max-w-md text-lg text-muted-foreground">{lead}</p>
        <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
