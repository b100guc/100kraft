import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

const title = "Design & Manufacturing Capabilities — 100KRAFT Atelier";
const description =
  "Explore 100KRAFT's six core disciplines: Product Design, 3D Design/CAD, 3D Printing, Rapid Prototyping, Mold Design, and Manufacturing Consulting.";

export const Route = createFileRoute("/en/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://100kraft.com/en/services" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "https://100kraft.com/en/services" },
      { rel: "alternate", hrefLang: "tr", href: "https://100kraft.com/services" },
      { rel: "alternate", hrefLang: "en", href: "https://100kraft.com/en/services" },
      { rel: "alternate", hrefLang: "x-default", href: "https://100kraft.com/services" },
    ],
  }),
  component: EnglishServicesIndexPage,
});

function EnglishServicesIndexPage() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="en" />
      <main className="min-h-screen bg-background pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Header */}
          <div className="border-b border-border pb-16">
            <SectionLabel index="01" title="Atelier Capabilities" />
            <Reveal>
              <h1 className="mt-8 font-display text-[10vw] leading-[0.9] sm:text-6xl lg:text-7xl">
                Six disciplines. One continuous workflow.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                100KRAFT sits between the drawing board and the production line. A program can enter
                at any stage — from raw napkin sketch to finished CAD needing injection mold tooling
                — and leave as a validated, manufacturable product.
              </p>
            </Reveal>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-16 divide-y divide-border">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={0.06 * i}>
                <article className="group py-14 md:py-20">
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-2">
                      <span className="font-display text-4xl text-accent/80 md:text-5xl">
                        {service.number}
                      </span>
                    </div>

                    <div className="lg:col-span-5">
                      <h2 className="font-display text-3xl md:text-4xl text-foreground transition-colors group-hover:text-accent">
                        <Link to="/en/services/$slug" params={{ slug: service.slug }}>
                          {service.title}
                        </Link>
                      </h2>
                      <p className="mt-2 label-technical text-xs text-muted-foreground">
                        {service.tagline}
                      </p>
                      <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {service.shortDesc}
                      </p>

                      <div className="mt-8">
                        <Link
                          to="/en/services/$slug"
                          params={{ slug: service.slug }}
                          className="group/link inline-flex items-center gap-3 label-technical text-xs text-foreground font-semibold hover:text-accent transition-colors"
                        >
                          <span>Explore Discipline</span>
                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-5 lg:pl-8">
                      <div className="border border-border/80 bg-secondary/20 p-6">
                        <span className="label-technical text-[10px] text-muted-foreground uppercase block mb-3">
                          CORE PROBLEMS RESOLVED
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80">
                          {service.problemsSolved.map((prob) => (
                            <li key={prob} className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">▸</span>
                              <span>{prob}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-24 border border-border bg-foreground text-background p-8 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <span className="label-technical text-accent text-xs">
                FIND THE RIGHT ENTRY POINT
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl">
                Not sure which discipline your project requires?
              </h2>
              <p className="mt-3 text-sm text-background/70 max-w-xl">
                Share a sketch, technical requirement, or 3D model. We will structure the exact
                milestones, tooling, and manufacturing path needed.
              </p>
            </div>
            <Link
              to="/en/start-project"
              onClick={() =>
                trackEvent({ name: "start_project_click", location: "services_index" })
              }
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-background text-foreground px-8 py-4 whitespace-nowrap hover:bg-accent hover:text-foreground transition-colors"
            >
              <span className="label-technical text-xs font-semibold">Start Project →</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
