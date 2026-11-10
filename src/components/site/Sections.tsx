import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { faq } from "@/data/faq";
import { services } from "@/data/services";
import { localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Arrow } from "./Button";
import { Reveal } from "./Reveal";

/** Job-sheet style label: an index, a name and a hairline running to the edge. */
export function Label({
  index,
  children,
  aside,
  className,
}: {
  index?: string | undefined;
  children: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("eyebrow flex items-center gap-3", className)}>
      {index && <span className="text-accent">{index}</span>}
      <span>{children}</span>
      <span aria-hidden className="h-px flex-1 bg-border" />
      {aside && <span>{aside}</span>}
    </div>
  );
}

export function SectionHead({
  title,
  href,
  linkLabel,
  index,
  label,
  aside,
  as: Tag = "h2",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
  index?: string | undefined;
  label?: string;
  aside?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div>
      {label && (
        <Label index={index} aside={aside} className="mb-6 md:mb-8">
          {label}
        </Label>
      )}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <Reveal>
          <Tag className="display text-[13vw] md:text-7xl lg:text-8xl">{title}</Tag>
        </Reveal>
        {href && (
          <Link
            to={href}
            className="group mb-1 inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium underline decoration-foreground/20 underline-offset-[6px] transition-colors hover:decoration-accent"
          >
            {linkLabel}
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}

/** Page header for inner pages: job-sheet label, large title, optional lead. */
export function PageHeader({
  title,
  lead,
  eyebrow,
}: {
  title: string;
  lead?: ReactNode;
  eyebrow?: ReactNode;
}) {
  return (
    <header className="wrap pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="eyebrow mb-6 flex items-center gap-3 md:mb-8">
        <span className="text-accent">100KRAFT</span>
        {eyebrow && <span className="flex items-center gap-3">{eyebrow}</span>}
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      <h1 className="display print-in text-[15vw] md:text-[7.5rem] lg:text-[9rem]">{title}</h1>
      {lead && (
        <p className="rise mt-6 max-w-xl text-lg text-muted-foreground md:mt-8 md:text-xl">
          {lead}
        </p>
      )}
    </header>
  );
}

export function ServiceList({ lang, exclude }: { lang: Language; exclude?: string }) {
  return (
    <ul>
      {services
        .filter((s) => s.slug !== exclude)
        .map((s) => (
          <li key={s.slug} className="border-t border-border last:border-b">
            <Link
              to={localePath(lang, `/services/${s.slug}`)}
              onClick={() =>
                trackEvent({ name: "service_view", slug: s.slug, title: s.title[lang] })
              }
              className="group relative isolate grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-5 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-tile before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:before:scale-x-100 md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] md:gap-x-6 md:py-7 motion-reduce:before:transition-none"
            >
              <span className="spec text-accent transition-transform duration-500 group-hover:translate-x-3 md:group-hover:translate-x-5">
                {s.number}
              </span>
              <span className="display text-[1.75rem] leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:text-5xl md:group-hover:translate-x-3">
                {s.title[lang]}
              </span>
              <span className="col-start-2 mt-2 text-[0.9375rem] text-muted-foreground md:col-start-auto md:mt-0 md:text-base">
                {s.short[lang]}
              </span>
              <Arrow className="col-start-3 row-start-1 mr-1 text-muted-foreground transition-all duration-300 group-hover:-translate-x-2 group-hover:text-foreground md:col-start-4 md:mr-2 md:group-hover:-translate-x-4" />
            </Link>
          </li>
        ))}
    </ul>
  );
}

export function ProcessSection({ lang }: { lang: Language }) {
  const t = siteContent[lang].process;
  return (
    <section className="on-ink layers">
      <div className="wrap py-20 md:py-28">
        <SectionHead title={t.title} label={t.label} aside={`${t.steps.length} ${t.unit}`} />
        <ol className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <span className="spec text-accent">0{i + 1}</span>
                  <span aria-hidden className="h-px flex-1 bg-border" />
                </div>
                <h3 className="display mt-5 text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-xs text-[0.9375rem] text-muted-foreground">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqSection({ lang }: { lang: Language }) {
  const title = lang === "tr" ? "Sık sorulanlar" : "FAQ";
  return (
    <section className="border-t border-border">
      <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <SectionHead title={title} label={lang === "tr" ? "Merak edilenler" : "Good to know"} />
        </div>
        <div className="md:col-span-8">
          {faq[lang].map((item) => (
            <details key={item.q} className="group border-t border-border last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium md:text-xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="relative h-3.5 w-3.5 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-current after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-2xl pb-6 text-[1.0625rem] text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
