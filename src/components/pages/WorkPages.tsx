import { Link } from "@tanstack/react-router";
import { getNextProject, optionSummary, productLabel, type ProjectItem } from "@/data/projects";
import { services } from "@/data/services";
import { contact, localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow, ArrowUpRight, ButtonLink } from "@/components/site/Button";
import { CatalogueGrid, CollectionGrid, Price } from "@/components/site/Catalogue";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, SectionHead } from "@/components/site/Sections";

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
      <PageHeader title={t.title} lead={t.lead} />
      <section className="wrap pb-20 md:pb-28">
        <CollectionGrid lang={lang} />
      </section>
      <section className="border-t border-border">
        <div className="wrap py-20 md:py-28">
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

  return (
    <SiteLayout lang={lang}>
      <article className="wrap pt-24 pb-20 md:pt-28 md:pb-28">
        <Link
          to={localePath(lang, "/work")}
          className="group inline-flex items-center gap-2 text-[0.9375rem] text-muted-foreground hover:text-foreground"
        >
          <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" />
          {c.back}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Picture
              image={project.cover}
              alt={project.cover.alt[lang]}
              sizes="(min-width: 1024px) 56vw, 100vw"
              priority
              className="aspect-square overflow-hidden bg-tile"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">{project.category[lang]}</p>
              <h1 className="display mt-4 text-[13vw] md:text-7xl">{project.name}</h1>
              <p className="mt-6 text-xl leading-snug">{project.summary[lang]}</p>
              <p className="mt-4 text-[1.0625rem] text-muted-foreground">{project.body[lang]}</p>

              <dl className="mt-8 border-t border-border">
                {project.specs.map((s) => (
                  <div
                    key={s.label.en}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-3 text-[0.9375rem]"
                  >
                    <dt className="text-muted-foreground">{s.label[lang]}</dt>
                    <dd>{s.value[lang]}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-3 text-[0.9375rem]">
                  <dt className="text-muted-foreground">{c.services}</dt>
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
                      <span className="flex shrink-0 items-center gap-3 text-[0.9375rem]">
                        <Price product={p} />
                        <ArrowUpRight />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonLink href={localePath(lang, "/start-project")} variant="outline">
                  {c.similar}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-3">
            {project.gallery.map((image, i) => (
              <Reveal key={image.src} delay={(i % 3) * 0.05}>
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

      <Link
        to={localePath(lang, `/work/${next.slug}`)}
        className="group block border-t border-border"
      >
        <div className="wrap flex items-center justify-between gap-6 py-10 md:py-14">
          <div>
            <p className="eyebrow">{c.next}</p>
            <p className="display mt-3 text-5xl transition-colors group-hover:text-accent md:text-7xl">
              {next.name}
            </p>
          </div>
          <Picture
            image={next.cover}
            alt=""
            sizes="128px"
            className="hidden h-24 w-24 shrink-0 overflow-hidden bg-tile sm:block md:h-32 md:w-32"
          />
        </div>
      </Link>
    </SiteLayout>
  );
}
