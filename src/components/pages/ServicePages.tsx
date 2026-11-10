import { Link } from "@tanstack/react-router";
import { postsBySlugs } from "@/data/blog";
import { projects } from "@/data/projects";
import type { ServiceItem } from "@/data/services";
import { localePath, siteContent, type Language } from "@/data/translations";
import { PostCard } from "@/components/pages/BlogPages";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import {
  FaqSection,
  Label,
  PageHeader,
  ProcessSection,
  SectionHead,
  ServiceList,
} from "@/components/site/Sections";

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
        <Label>{c.startTitle}</Label>
        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {c.starts.map((s, i) => (
            <Link
              key={s.title}
              to={localePath(lang, `/services/${s.slug}`)}
              className="group relative isolate flex min-h-56 overflow-hidden flex-col justify-between bg-background p-6 transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-foreground before:transition-transform before:duration-300 before:ease-[steps(8,end)] hover:text-background hover:before:translate-y-0 motion-reduce:before:transition-none"
            >
              <div>
                <span className="spec text-accent">{String.fromCharCode(65 + i)}</span>
                <h3 className="display mt-4 text-3xl">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-muted-foreground transition-colors duration-300 group-hover:text-background/70">
                  {s.body}
                </p>
              </div>
              <Arrow className="mt-6 transition-transform duration-300 group-hover:translate-x-2" />
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
      <FaqSection lang={lang} />
      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <Label>{title}</Label>
      <ul className="mt-2">
        {items.map((item, i) => (
          <li
            key={item}
            className="grid grid-cols-[2rem_1fr] items-baseline border-b border-border py-3 text-[1.0625rem]"
          >
            <span className="spec text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
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
            className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Arrow className="h-3 w-3 rotate-180 transition-transform group-hover:-translate-x-1" />
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

      <section className="on-ink layers">
        <div className="wrap py-20 md:py-28">
          <SectionHead title={c.steps} label={service.title[lang]} aside={service.number} />
          <ol className="mt-12 grid gap-x-6 gap-y-10 md:mt-16 md:grid-cols-3">
            {service.steps.map((s, i) => (
              <li key={s.title.en}>
                <Reveal delay={i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="spec text-accent">0{i + 1}</span>
                    <span aria-hidden className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="display mt-5 text-4xl">{s.title[lang]}</h3>
                  <p className="mt-3 max-w-sm text-[0.9375rem] text-muted-foreground">
                    {s.body[lang]}
                  </p>
                </Reveal>
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
            <SectionHead title={c.examples} />
            <div className="mt-10 grid gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {examples.map((p, i) => (
                <ProjectCard key={p.slug} project={p} lang={lang} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {reading.length > 0 && (
        <section className="border-t border-border">
          <div className="wrap py-20 md:py-28">
            <SectionHead title={c.reading} />
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
          <h2 className="display text-5xl md:col-span-4 md:text-7xl">{c.other}</h2>
          <div className="md:col-span-8">
            <ServiceList lang={lang} exclude={service.slug} />
          </div>
        </div>
      </section>

      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}
