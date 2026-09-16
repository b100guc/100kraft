import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { SectionLabel } from "@/components/site/Reveal";
import { getServiceBySlug } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/en/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      throw notFound();
    }
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.service) return {};
    const s = loaderData.service;
    const title = `${s.title} — 100KRAFT Atelier Capabilities`;
    const description = `${s.shortDesc} ${s.overview.slice(0, 140)}...`;
    const canonical = `https://100kraft.com/en/services/${s.slug}`;
    const trCanonical = `https://100kraft.com/services/${s.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: canonical },
        { rel: "alternate", hrefLang: "tr", href: trCanonical },
        { rel: "alternate", hrefLang: "en", href: canonical },
        { rel: "alternate", hrefLang: "x-default", href: canonical },
      ],
    };
  },
  component: EnglishServiceDetailPage,
});

function EnglishServiceDetailPage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="en" />
      <main className="min-h-screen bg-background pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 border-b border-border pb-6">
            <Link
              to="/en/services"
              className="label-technical text-xs hover:text-accent transition-colors"
            >
              ← Back to Capabilities
            </Link>
            <span className="text-border">/</span>
            <span className="label-technical text-xs text-foreground font-semibold">
              {service.title}
            </span>
          </div>

          {/* Editorial Header */}
          <div className="mt-12 max-w-4xl">
            <span className="font-display text-5xl text-accent sm:text-6xl">{service.number}</span>
            <h1 className="mt-4 font-display text-[10vw] leading-[0.88] sm:text-6xl lg:text-7xl tracking-tight">
              {service.title}
            </h1>
            <p className="mt-4 label-technical text-xs text-muted-foreground uppercase tracking-widest">
              {service.tagline}
            </p>
            <p className="mt-8 font-display text-2xl sm:text-3xl text-muted-foreground leading-snug">
              {service.overview}
            </p>
          </div>

          {/* Deep Content Grid */}
          <div className="mt-24 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-16">
              {/* Problems Solved */}
              <div>
                <SectionLabel index="01" title="Problems Resolved" />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {service.problemsSolved.map((prob) => (
                    <div key={prob} className="border border-border p-6 bg-secondary/20">
                      <span className="text-accent text-lg block mb-2">▸</span>
                      <p className="text-sm sm:text-base text-foreground/90">{prob}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Steps */}
              <div>
                <SectionLabel index="02" title="How We Execute" />
                <div className="mt-8 divide-y divide-border border-y border-border">
                  {service.workflow.map((w) => (
                    <div key={w.step} className="py-6 sm:flex sm:items-start sm:gap-8">
                      <span className="label-technical text-accent text-xs block sm:w-48 flex-shrink-0">
                        {w.step}
                      </span>
                      <p className="mt-2 sm:mt-0 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              {service.relatedProjects.length > 0 && (
                <div>
                  <SectionLabel index="03" title="Related Case Studies" />
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {service.relatedProjects.map((pSlug) => {
                      const proj = getProjectBySlug(pSlug);
                      if (!proj) return null;
                      return (
                        <Link
                          key={pSlug}
                          to="/en/work/$slug"
                          params={{ slug: pSlug }}
                          className="group border border-border p-6 bg-secondary/10 hover:bg-secondary/40 transition-colors"
                        >
                          <span className="label-technical text-xs text-muted-foreground">
                            {proj.year} · {proj.sector}
                          </span>
                          <h3 className="mt-2 font-display text-2xl text-foreground group-hover:text-accent transition-colors">
                            {proj.name}
                          </h3>
                          <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                            {proj.story}
                          </p>
                          <span className="mt-4 inline-block label-technical text-xs text-accent">
                            Case Study →
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Sticky Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Capabilities Box */}
                <div className="border border-border p-6 bg-secondary/20">
                  <span className="label-technical text-xs text-muted-foreground block mb-4">
                    SPECIFIC CAPABILITIES
                  </span>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-accent" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials Box if applicable */}
                {service.materials && service.materials.length > 0 && (
                  <div className="border border-border p-6 bg-secondary/20">
                    <span className="label-technical text-xs text-muted-foreground block mb-4">
                      SUPPORTED MATERIALS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((mat) => (
                        <span
                          key={mat}
                          className="label-technical text-xs border border-border bg-background px-2.5 py-1 text-foreground/80"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct CTA Box */}
                <div className="border border-foreground bg-foreground p-6 text-background">
                  <span className="label-technical text-xs text-accent block">
                    ENGAGE THIS DISCIPLINE
                  </span>
                  <p className="mt-2 font-display text-lg">
                    Have a program requiring {service.title}?
                  </p>
                  <Link
                    to="/en/start-project"
                    onClick={() =>
                      trackEvent({
                        name: "start_project_click",
                        location: `service_${service.slug}`,
                      })
                    }
                    className="mt-6 block w-full bg-background text-foreground py-3 text-center label-technical text-xs font-semibold hover:bg-accent hover:text-foreground transition-colors"
                  >
                    Start Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
