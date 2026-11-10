import { Link } from "@tanstack/react-router";
import {
  getNextProject,
  optionSummary,
  productLabel,
  projects,
  storeProducts,
  type ProjectItem,
} from "@/data/projects";
import { services } from "@/data/services";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ArrowUpRight, ButtonLink } from "@/components/site/Button";
import { CatalogueGrid, CollectionGrid, Price } from "@/components/site/Catalogue";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { Reveal } from "@/components/site/Reveal";
import { Label, PageHeader, SectionHead } from "@/components/site/Sections";

const copy = {
  tr: {
    back: "İşler",
    services: "Hizmetler",
    next: "Sonraki",
    similar: "Benzer bir proje",
    inStore: "Mağazada",
    soldOut: "Tükendi",
    buy: "Satın al",
    all: "Tüm ürünler",
    allLead: "Mağazadaki her ürün, güncel fiyatıyla.",
    store: "Mağazaya git",
  },
  en: {
    back: "Work",
    services: "Services",
    next: "Next",
    similar: "Start something similar",
    inStore: "In the store",
    soldOut: "Sold out",
    buy: "Buy",
    all: "All products",
    allLead: "Everything in the store, at current prices.",
    store: "Visit the store",
  },
};

export function WorkIndexPage({ lang }: { lang: Language }) {
  const t = siteContent[lang].work;
  const c = copy[lang];
  return (
    <SiteLayout lang={lang}>
      <PageHeader
        title={t.title}
        lead={t.lead}
        eyebrow={`${projects.length} ${t.collections} · ${storeProducts.length} ${t.products}`}
      />
      <section className="wrap pb-20 md:pb-28">
        <CollectionGrid lang={lang} />
      </section>
      <section className="border-t border-border">
        <div className="wrap py-20 md:py-28">
          <Label aside="store.100kraft.com" className="mb-8">
            {c.inStore}
          </Label>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHead title={c.all} />
              <p className="mt-4 text-lg text-muted-foreground">{c.allLead}</p>
            </div>
            <ButtonLink href={contact.store} variant="outline">
              {c.store}
              <ArrowUpRight />
            </ButtonLink>
          </div>
          <div className="mt-10 md:mt-14">
            <CatalogueGrid lang={lang} />
          </div>
        </div>
      </section>
      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}

export function WorkDetailPage({ lang, project }: { lang: Language; project: ProjectItem }) {
  const c = copy[lang];
  const next = getNextProject(project.slug);
  const related = services.filter((s) => project.services.includes(s.slug));
  const position = projects.findIndex((p) => p.slug === project.slug);

  return (
    <SiteLayout lang={lang}>
      <article className="wrap pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="eyebrow flex items-center gap-3">
          <Link
            to={localePath(lang, "/work")}
            className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Arrow className="h-3 w-3 rotate-180 transition-transform group-hover:-translate-x-1" />
            {c.back}
          </Link>
          <span className="text-border">/</span>
          <span className="text-accent">{project.name}</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
          <span>
            0{position + 1} / 0{projects.length}
          </span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Picture
              image={project.cover}
              alt={project.cover.alt[lang]}
              sizes="(min-width: 1024px) 56vw, 100vw"
              priority
              className="print-in aspect-square overflow-hidden bg-tile"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">{project.category[lang]}</p>
              <h1 className="display mt-4 text-[13vw] md:text-7xl xl:text-8xl">{project.name}</h1>
              <p className="mt-6 text-xl leading-snug">{project.summary[lang]}</p>
              <p className="mt-4 text-[1.0625rem] text-muted-foreground">{project.body[lang]}</p>

              <dl className="mt-8 border-t border-border">
                {project.specs.map((s) => (
                  <div
                    key={s.label.en}
                    className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-border py-3 text-[0.9375rem]"
                  >
                    <dt className="eyebrow">{s.label[lang]}</dt>
                    <dd>{s.value[lang]}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-border py-3 text-[0.9375rem]">
                  <dt className="eyebrow">{c.services}</dt>
                  <dd className="flex flex-wrap gap-x-3 gap-y-1">
                    {related.map((s) => (
                      <Link
                        key={s.slug}
                        to={localePath(lang, `/services/${s.slug}`)}
                        className="underline decoration-foreground/20 underline-offset-4 hover:decoration-accent"
                      >
                        {s.title[lang]}
                      </Link>
                    ))}
                  </dd>
                </div>
              </dl>

              <h2 className="eyebrow mt-10">{c.inStore}</h2>
              <ul className="mt-3 border-t border-border">
                {project.products.map((p) => (
                  <li key={p.slug} className="border-b border-border">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent({
                          name: "store_click",
                          destination: p.url,
                          location: `work_${project.slug}`,
                        })
                      }
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="min-w-0">
                        <span className="block font-medium transition-colors group-hover:text-accent">
                          {productLabel(p, lang)}
                        </span>
                        <span className="block text-sm text-muted-foreground">
                          {p.inStock ? optionSummary(p, lang) : c.soldOut}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        <Price product={p} className="spec" />
                        <ArrowUpRight />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonLink href={localePath(lang, "/start-project")} variant="outline">
                  {c.similar}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-3">
            {project.gallery.map((image, i) => (
              <Reveal key={image.src} variant="print" delay={(i % 3) * 0.06}>
                <Picture
                  image={image}
                  alt={image.alt[lang]}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="aspect-square overflow-hidden bg-tile"
                />
              </Reveal>
            ))}
          </div>
        )}
      </article>

      <Link to={localePath(lang, `/work/${next.slug}`)} className="group on-ink layers block">
        <div className="wrap flex items-center justify-between gap-6 py-12 md:py-20">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="text-accent">{c.next}</span>
              {next.category[lang]}
            </p>
            <p className="display mt-4 flex items-center gap-5 text-5xl md:text-8xl">
              {next.name}
              <Arrow className="h-8 w-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 md:h-14 md:w-14" />
            </p>
          </div>
          <Picture
            image={next.cover}
            alt=""
            sizes="176px"
            className="hidden h-28 w-28 shrink-0 overflow-hidden bg-tile transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90 sm:block md:h-44 md:w-44"
          />
        </div>
      </Link>
    </SiteLayout>
  );
}
