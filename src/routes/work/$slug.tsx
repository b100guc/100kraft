import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { SectionLabel } from "@/components/site/Reveal";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.project) return {};
    const p = loaderData.project;
    const title = `${p.name} — Atölye Üretim Hikayesi | 100KRAFT`;
    const description = `${p.storyTr} Mühendislik zorlukları, CAD mimarisi, prototip döngüleri ve üretim aşamaları.`;
    const canonical = `https://100kraft.com/work/${p.slug}`;
    const enCanonical = `https://100kraft.com/en/work/${p.slug}`;
    const image = p.stages[p.stages.length - 1]?.image || "https://100kraft.com/og-image.jpg";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: canonical },
        { rel: "alternate", hrefLang: "tr", href: canonical },
        { rel: "alternate", hrefLang: "en", href: enCanonical },
        { rel: "alternate", hrefLang: "x-default", href: canonical },
      ],
    };
  },
  component: TurkishCaseStudyPage,
});

function TurkishCaseStudyPage() {
  const { project } = Route.useLoaderData();
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="tr" />
      <main className="min-h-screen bg-background pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 border-b border-border pb-6">
            <Link
              to="/work"
              className="label-technical text-xs hover:text-accent transition-colors"
            >
              ← Seçilmiş İşlere Dön
            </Link>
            <span className="text-border">/</span>
            <span className="label-technical text-xs text-foreground font-semibold">
              {project.name}
            </span>
          </div>

          {/* Editorial Header */}
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-baseline gap-4">
                <span className="label-technical text-accent text-xs">
                  VAKA ANALİZİ // {project.id}
                </span>
                <span className="label-technical text-xs">{project.year}</span>
                <span className="label-technical text-xs text-muted-foreground">
                  {project.sectorTr}
                </span>
              </div>
              <h1 className="mt-6 font-display text-[10vw] leading-[0.88] sm:text-6xl lg:text-7xl tracking-tight">
                {project.name}
              </h1>
              <p className="mt-8 font-display text-2xl sm:text-3xl text-muted-foreground leading-snug max-w-3xl">
                {project.headlineTr}
              </p>
            </div>

            <div className="lg:col-span-4 lg:pl-6">
              <div className="border border-border p-6 bg-secondary/30">
                <span className="label-technical text-[10px] text-muted-foreground block">
                  KAPSAM DİSİPLİNLERİ
                </span>
                <p className="mt-2 font-display text-lg text-foreground">{project.scopeTr}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.map((srv) => {
                    const matchedService = getServiceBySlug(
                      srv.toLowerCase().replace(/[\s&]+/g, "-"),
                    );
                    return matchedService ? (
                      <Link
                        key={srv}
                        to="/services/$slug"
                        params={{ slug: matchedService.slug }}
                        className="label-technical text-xs border border-border px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
                      >
                        {matchedService.titleTr}
                      </Link>
                    ) : (
                      <span
                        key={srv}
                        className="label-technical text-xs border border-border px-3 py-1.5 text-muted-foreground"
                      >
                        {srv}
                      </span>
                    );
                  })}
                </div>

                {project.storeUrl && (
                  <div className="mt-6 pt-6 border-t border-border/80">
                    <a
                      href={project.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between bg-foreground px-4 py-3 text-primary-foreground hover:bg-accent transition-colors"
                    >
                      <span className="label-technical text-xs font-semibold">
                        Store'da İncele ↗
                      </span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hero Hero Image Stage */}
          <div className="mt-16 aspect-[16/9] w-full overflow-hidden bg-secondary border border-border">
            <img
              src={project.stages[0]?.image}
              alt={project.stages[0]?.alt}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Metrics Ribbon */}
          <div className="mt-12 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.labelTr} className="bg-background p-6 sm:p-8">
                <span className="label-technical text-xs text-muted-foreground uppercase">
                  {m.labelTr}
                </span>
                <p className="mt-2 font-display text-3xl sm:text-4xl text-accent font-semibold">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Dive Grid */}
          <div className="mt-24 grid gap-16 lg:grid-cols-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* Overview */}
              <div>
                <SectionLabel index="01" title="Genel Bakış & Hedefler" />
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {project.overviewTr}
                </p>
              </div>

              {/* Problem / Engineering Challenge */}
              <div>
                <SectionLabel index="02" title="Mühendislik Kısıtı" />
                <h3 className="mt-6 font-display text-2xl sm:text-3xl text-foreground">
                  {project.problem.titleTr}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.problem.bodyTr}
                </p>

                <div className="mt-6 border-l-2 border-accent pl-6 py-2 bg-secondary/20">
                  <span className="label-technical text-xs text-accent font-semibold block mb-2">
                    KRİTİK TOLERANS VE TEST KRİTERLERİ
                  </span>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {project.constraints.map((c) => (
                      <li key={c.tr} className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{c.tr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CAD & DFM Architecture */}
              <div>
                <SectionLabel index="03" title="CAD Mimarisi & DFM" />
                <h3 className="mt-6 font-display text-2xl sm:text-3xl text-foreground">
                  {project.processCad.titleTr}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.processCad.bodyTr}
                </p>
              </div>

              {/* Manufacturing & Tooling */}
              <div>
                <SectionLabel index="04" title="Kalıplama & Üretim Süreci" />
                <h3 className="mt-6 font-display text-2xl sm:text-3xl text-foreground">
                  {project.manufacturing.titleTr}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.manufacturing.bodyTr}
                </p>
              </div>

              {/* Outcome */}
              <div className="border border-border p-8 bg-secondary/20">
                <SectionLabel index="05" title="Sonuç & Doğrulama" />
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  {project.outcome.titleTr}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.outcome.bodyTr}
                </p>
              </div>
            </div>

            {/* Right Stages Sticky Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <span className="label-technical text-xs text-muted-foreground block border-b border-border pb-3">
                  AŞAMA GÖRSELLERİ ({project.stages.length})
                </span>
                {project.stages.map((stage) => (
                  <div key={stage.id} className="border border-border bg-background p-4 space-y-3">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={stage.image}
                        alt={stage.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="pt-2">
                      <span className="label-technical text-[10px] text-accent">
                        {stage.labelTr}
                      </span>
                      <h4 className="font-display text-base text-foreground mt-0.5">
                        {stage.titleTr}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{stage.descriptionTr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Adjacent Projects Navigation */}
          <div className="mt-28 border-t border-border pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to="/work/$slug"
              params={{ slug: prev.slug }}
              className="group border border-border p-6 hover:bg-secondary/40 transition-colors"
            >
              <span className="label-technical text-xs text-muted-foreground">← Önceki İş</span>
              <p className="font-display text-xl sm:text-2xl text-foreground mt-2 group-hover:text-accent transition-colors">
                {prev.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{prev.sectorTr}</p>
            </Link>

            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group border border-border p-6 text-right hover:bg-secondary/40 transition-colors"
            >
              <span className="label-technical text-xs text-muted-foreground">Sonraki İş →</span>
              <p className="font-display text-xl sm:text-2xl text-foreground mt-2 group-hover:text-accent transition-colors">
                {next.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{next.sectorTr}</p>
            </Link>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="mt-20 border border-border p-10 sm:p-14 bg-foreground text-background flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <span className="label-technical text-accent text-xs">
                BENZER BİR PROJENİZ Mİ VAR?
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl">
                Tasarım ve üretim kısıtlarınızı masaya yatıralım.
              </h2>
            </div>
            <Link
              to="/start-project"
              onClick={() =>
                trackEvent({
                  name: "start_project_click",
                  location: `work_${project.slug}`,
                })
              }
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-background text-foreground px-8 py-4 whitespace-nowrap hover:bg-accent hover:text-foreground transition-colors"
            >
              <span className="label-technical text-xs font-semibold">Proje Başlat →</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="tr" />
    </>
  );
}
