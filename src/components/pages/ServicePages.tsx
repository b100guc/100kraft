import { Link } from "@tanstack/react-router";
import { postsBySlugs } from "@/data/blog";
import { projects } from "@/data/projects";
import type { ServiceItem } from "@/data/services";
import { localePath, siteContent, type Language } from "@/data/translations";
import { PostCard } from "@/components/pages/BlogPages";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PageHeader, ProcessSection, SectionHead, ServiceList } from "@/components/site/Sections";

const copy = {
  tr: {
    lead: "Bir peçete eskizinden, hazır bir STL'den ya da kırık bir parçadan başlayabiliriz. Projeye hangi noktada katılmamızı isterseniz.",
    startTitle: "Nereden başlamalı?",
    starts: [
      {
        title: "Bir fikrim var",
        body: "Henüz çizim yok, sadece ne yapması gerektiğini biliyorum.",
        slug: "product-design",
      },
      {
        title: "Dosyam hazır",
        body: "STL ya da STEP elimde, basılıp bitirilmesi lazım.",
        slug: "3d-printing",
      },
      {
        title: "Kırık bir parçam var",
        body: "Yedeği satılmıyor, aynısını ya da daha iyisini istiyorum.",
        slug: "3d-design-cad",
      },
      {
        title: "Çok adet lazım",
        body: "Aynı parçadan onlarca tane; döküm mü, baskı mı?",
        slug: "mold-design",
      },
    ],
    includes: "Kapsam",
    forWhom: "Kimler için",
    steps: "Süreç",
    deliverables: "Teslim edilenler",
    faq: "Sık sorulanlar",
    examples: "Bu hizmetle yapılanlar",
    reading: "İlgili yazılar",
    other: "Diğer hizmetler",
    back: "Hizmetler",
    cta: "Bu hizmet için proje başlat",
  },
  en: {
    lead: "We can start from a napkin sketch, a ready STL or a broken part. Bring us in wherever you are.",
    startTitle: "Where to start?",
    starts: [
      {
        title: "I have an idea",
        body: "No drawings yet, just what it should do.",
        slug: "product-design",
      },
      {
        title: "My file is ready",
        body: "I have an STL or STEP that needs printing and finishing.",
        slug: "3d-printing",
      },
      {
        title: "Something broke",
        body: "No spare is sold; I want the same part, or a better one.",
        slug: "3d-design-cad",
      },
      {
        title: "I need many",
        body: "Dozens of the same part: casting or printing?",
        slug: "mold-design",
      },
    ],
    includes: "What’s included",
    forWhom: "Who it’s for",
    steps: "Process",
    deliverables: "You receive",
    faq: "FAQ",
    examples: "Made with this service",
    reading: "Further reading (Turkish)",
    other: "Other services",
    back: "Services",
    cta: "Start a project for this",
  },
};

export function ServicesIndexPage({ lang }: { lang: Language }) {
  const c = copy[lang];
  return (
    <SiteLayout lang={lang}>
      <PageHeader title={siteContent[lang].services.title} lead={c.lead} />

      <section className="wrap pb-20 md:pb-28">
        <h2 className="eyebrow">{c.startTitle}</h2>
        <div className="mt-5 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {c.starts.map((s) => (
            <Link
              key={s.title}
              to={localePath(lang, `/services/${s.slug}`)}
              className="group flex min-h-48 flex-col justify-between bg-background p-6 transition-colors hover:bg-tile"
            >
              <div>
                <h3 className="text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted-foreground">{s.body}</p>
              </div>
              <Arrow className="mt-6 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="wrap py-20 md:py-28">
          <ServiceList lang={lang} />
        </div>
      </section>
      <ProcessSection lang={lang} />
      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-4 border-t border-border">
        {items.map((item) => (
          <li key={item} className="border-b border-border py-3 text-[1.0625rem]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceDetailPage({ lang, service }: { lang: Language; service: ServiceItem }) {
  const c = copy[lang];
  const examples = projects.filter((p) => p.services.includes(service.slug));
  const reading = postsBySlugs(service.posts);

  return (
    <SiteLayout lang={lang}>
      <PageHeader
        eyebrow={
          <Link
            to={localePath(lang, "/services")}
            className="group inline-flex items-center gap-2 hover:text-foreground"
          >
            <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" />
            {c.back} / {service.number}
          </Link>
        }
        title={service.title[lang]}
        lead={service.short[lang]}
      />

      <section className="wrap grid gap-10 pb-20 md:grid-cols-12 md:pb-28">
        <div className="md:col-span-7">
          <p className="text-2xl leading-snug md:text-3xl">{service.intro[lang]}</p>
          <div className="mt-10">
            <ButtonLink href={localePath(lang, "/start-project")}>
              {c.cta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <ListBlock title={c.includes} items={service.includes[lang]} />
        </div>
      </section>

      <section className="bg-ink text-background">
        <div className="wrap py-20 md:py-24">
          <h2 className="display text-5xl md:text-6xl">{c.steps}</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {service.steps.map((s, i) => (
              <li key={s.title.en} className="border-t border-background/15 pt-5">
                <span className="text-sm tabular-nums text-[#df917d]">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-medium">{s.title[lang]}</h3>
                <p className="mt-2 max-w-sm text-[0.9375rem] text-background/65">{s.body[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <ListBlock title={c.forWhom} items={service.forWhom[lang]} />
        <ListBlock title={c.deliverables} items={service.deliverables[lang]} />
      </section>

      <section className="border-t border-border">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <SectionHead title={c.faq} />
          </div>
          <div className="md:col-span-8">
            {service.faq.map((item) => (
              <details key={item.q.en} className="group border-t border-border last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium md:text-xl [&::-webkit-details-marker]:hidden">
                  {item.q[lang]}
                  <span
                    aria-hidden
                    className="relative h-3.5 w-3.5 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-current after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                  />
                </summary>
                <p className="max-w-2xl pb-6 text-[1.0625rem] text-muted-foreground">
                  {item.a[lang]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {examples.length > 0 && (
        <section className="border-t border-border">
          <div className="wrap py-20 md:py-28">
            <h2 className="display text-5xl md:text-6xl">{c.examples}</h2>
            <div className="mt-10 grid gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {examples.map((p) => (
                <ProjectCard key={p.slug} project={p} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}

      {reading.length > 0 && (
        <section className="border-t border-border">
          <div className="wrap py-20 md:py-28">
            <h2 className="display text-5xl md:text-6xl">{c.reading}</h2>
            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {reading.slice(0, 3).map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 className="display text-5xl md:col-span-4 md:text-6xl">{c.other}</h2>
          <div className="md:col-span-8">
            <ServiceList lang={lang} exclude={service.slug} />
          </div>
        </div>
      </section>

      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}
