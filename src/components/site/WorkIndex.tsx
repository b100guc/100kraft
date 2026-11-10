import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { collectionPrice, formatPrice, projects, type ProjectItem } from "@/data/projects";
import { localePath, siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Arrow } from "./Button";
import { Picture } from "./Picture";
import { ProjectCard } from "./ProjectCard";

function meta(project: ProjectItem, lang: Language) {
  const count = project.products.length;
  const price = collectionPrice(project);
  if (count > 1) return `${count} ${siteContent[lang].work.products}`;
  return price != null ? formatPrice(price) : "";
}

/**
 * The collections as an index. Desktop: a list of big names beside a stage; pointing at
 * a name "prints" its piece onto the stage. Touch: a swipeable row of cards.
 */
export function WorkIndex({ lang }: { lang: Language }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(0);
  const show = (i: number) => {
    if (i === active) return;
    setPrevious(active);
    setActive(i);
  };

  return (
    <>
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10">
        <ul className="lg:col-span-7">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-t border-border last:border-b">
              <Link
                to={localePath(lang, `/work/${p.slug}`)}
                onMouseEnter={() => show(i)}
                onFocus={() => show(i)}
                onClick={() =>
                  trackEvent({ name: "project_view", slug: p.slug, projectName: p.name })
                }
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 py-5 xl:py-6"
              >
                <span
                  className={`spec transition-colors ${i === active ? "text-accent" : "text-muted-foreground"}`}
                >
                  0{i + 1}
                </span>
                <span>
                  <span
                    className={`display block whitespace-nowrap text-5xl transition-[translate,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:text-6xl ${
                      i === active ? "translate-x-3" : "text-foreground/35"
                    }`}
                  >
                    {p.name}
                  </span>
                </span>
                <span className="flex items-center gap-4 text-right">
                  <span className="eyebrow">
                    {p.category[lang]}
                    <span className="mx-2 text-border">/</span>
                    {meta(p, lang)}
                  </span>
                  <Arrow
                    className={`transition-all duration-300 ${
                      i === active ? "opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden bg-tile">
              {projects.map((p, i) => (
                <div
                  key={`${p.slug}-${i === active ? "on" : "off"}`}
                  className={`absolute inset-0 ${
                    i === active ? "print-in z-20" : i === previous ? "z-10" : "z-0"
                  }`}
                >
                  <Picture
                    image={p.cover}
                    alt={i === active ? p.cover.alt[lang] : ""}
                    sizes="(min-width: 1024px) 40vw, 1px"
                    media="(min-width: 1024px)"
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
            <div className="eyebrow mt-3 flex justify-between">
              <span>{projects[active]!.summary[lang]}</span>
              <span className="shrink-0 pl-4">
                0{active + 1} / 0{projects.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-2 md:scroll-px-10 [scrollbar-width:none] md:-mx-10 md:px-10 lg:hidden [&::-webkit-scrollbar]:hidden">
        {projects.map((p) => (
          <div key={p.slug} className="w-[74vw] shrink-0 snap-start sm:w-[42vw]">
            <ProjectCard project={p} lang={lang} sizes="(min-width: 640px) 42vw, 74vw" />
          </div>
        ))}
      </div>
    </>
  );
}
