import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { projects } from "@/data/projects";

const title = "Seçilmiş İşler & Üretim Hikayeleri — 100KRAFT Atölye";
const description =
  "100KRAFT tasarım ve üretim atölyesinden belgelenmiş ürünler, prototip iterasyonları, kalıp mühendisliği ve atölye üretimleri.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://100kraft.com/work" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "https://100kraft.com/work" },
      { rel: "alternate", hrefLang: "tr", href: "https://100kraft.com/work" },
      { rel: "alternate", hrefLang: "en", href: "https://100kraft.com/en/work" },
      { rel: "alternate", hrefLang: "x-default", href: "https://100kraft.com/work" },
    ],
  }),
  component: TurkishWorkIndexPage,
});

function TurkishWorkIndexPage() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="tr" />
      <main className="min-h-screen bg-background pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Section Header */}
          <div className="border-b border-border pb-16">
            <SectionLabel index="01" title="Seçilmiş Arşiv" />
            <Reveal>
              <h1 className="mt-8 font-display text-[10vw] leading-[0.9] sm:text-6xl lg:text-7xl">
                Tezgâhta doğrulanmış ürünler.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Atölyemizde geliştirilen tüketici donanımları, hassas kalıplama projeleri, heykelsi
                formlar ve mimari rölyefleri inceleyin. Her ürün geometri, malzeme ve kalıbın
                birlikte çözüldüğü bir atölye sürecidir.
              </p>
            </Reveal>
          </div>

          {/* Project Showcase List */}
          <div className="mt-16 divide-y divide-border">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i}>
                <article className="group py-16 md:py-24">
                  <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-6">
                      <Link
                        to="/work/$slug"
                        params={{ slug: project.slug }}
                        className="block overflow-hidden bg-secondary aspect-[4/3] border border-border group-hover:border-foreground/40 transition-colors"
                      >
                        <img
                          src={project.stages[0]?.image}
                          alt={project.stages[0]?.alt}
                          loading="lazy"
                          className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                        />
                      </Link>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3">
                        <span className="label-technical text-xs text-accent">0{i + 1}</span>
                        <span className="h-3 w-px bg-border" />
                        <span className="label-technical text-xs text-muted-foreground">
                          {project.year} · {project.sectorTr}
                        </span>
                      </div>

                      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground transition-colors group-hover:text-accent">
                        <Link to="/work/$slug" params={{ slug: project.slug }}>
                          {project.name}
                        </Link>
                      </h2>

                      <p className="mt-2 label-technical text-xs text-muted-foreground">
                        {project.scopeTr}
                      </p>

                      <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                        {project.storyTr}
                      </p>

                      {/* Key metrics grid */}
                      <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border/70 py-6 sm:grid-cols-4">
                        {project.metrics.map((m) => (
                          <div key={m.labelTr}>
                            <span className="label-technical text-[10px] text-muted-foreground uppercase">
                              {m.labelTr}
                            </span>
                            <span className="mt-1 block font-display text-xl text-foreground">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-6">
                        <Link
                          to="/work/$slug"
                          params={{ slug: project.slug }}
                          className="group/btn relative inline-flex items-center gap-3 overflow-hidden bg-foreground px-6 py-3.5"
                        >
                          <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0" />
                          <span className="label-technical relative text-primary-foreground text-xs font-semibold">
                            İncele →
                          </span>
                        </Link>

                        {project.storeUrl && (
                          <a
                            href={project.storeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label-technical text-xs text-accent hover:underline inline-flex items-center gap-1.5"
                          >
                            <span>Store'da İncele ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-24 border border-border bg-secondary/30 p-8 sm:p-14 text-center">
            <span className="label-technical text-accent text-xs">
              YENİ BİR ÜRÜN MÜ GELİŞTİRİYORSUNUZ?
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-foreground">
              Fikrinizi atölyemizde gerçeğe dönüştürelim.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              CAD dosyanızı veya fikir eskizinizi iletin; malzeme seçimi, tolerans analizi ve üretim
              planını birlikte çıkaralım.
            </p>
            <div className="mt-8">
              <Link
                to="/start-project"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-foreground px-8 py-4"
              >
                <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="label-technical relative text-primary-foreground text-xs font-semibold">
                  Proje Başlat →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="tr" />
    </>
  );
}
