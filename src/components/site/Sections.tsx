import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { faq } from "@/data/faq";
import { services } from "@/data/services";
import { localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow } from "./Button";
import { Reveal } from "./Reveal";

export function SectionHead({
  title,
  href,
  linkLabel,
  as: Tag = "h2",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <Reveal>
        <Tag className="display text-[13vw] md:text-7xl">{title}</Tag>
      </Reveal>
      {href && (
        <Link
          to={href}
          className="group mb-1 inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium"
        >
          {linkLabel}
          <Arrow className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

/** Page header for inner pages: large title + optional lead. */
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
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h1 className="display text-[15vw] md:text-[7.5rem]">{title}</h1>
      {lead && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{lead}</p>}
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
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-5 md:grid-cols-[3rem_15rem_1fr_auto] md:py-6"
            >
              <span className="text-sm tabular-nums text-muted-foreground">{s.number}</span>
              <span className="text-xl font-medium transition-colors group-hover:text-accent md:text-2xl">
                {s.title[lang]}
              </span>
              <span className="col-start-2 mt-1 text-[0.9375rem] text-muted-foreground md:col-start-auto md:mt-0">
                {s.short[lang]}
              </span>
              <Arrow className="col-start-3 row-start-1 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground md:col-start-4" />
            </Link>
          </li>
        ))}
    </ul>
  );
}

export function ProcessSection({ lang }: { lang: Language }) {
  const t = siteContent[lang].process;
  return (
    <section className="bg-ink text-background">
      <div className="wrap py-20 md:py-28">
        <h2 className="display text-[13vw] md:text-7xl">{t.title}</h2>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <li key={s.title} className="border-t border-background/15 pt-5">
              <span className="text-sm tabular-nums text-[#df917d]">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-medium">{s.title}</h3>
              <p className="mt-2 max-w-xs text-[0.9375rem] text-background/60">{s.body}</p>
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
          <SectionHead title={title} />
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
