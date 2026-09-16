import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

const title = "Tasarım ve Üretim Yetkinlikleri — 100KRAFT Atölye";
const description =
  "100KRAFT'ın altı temel uzmanlık alanı: Ürün Tasarımı, 3D Tasarım/CAD, 3D Baskı, Hızlı Prototipleme, Kalıp Tasarımı ve Üretim Danışmanlığı.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://100kraft.com/services" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "https://100kraft.com/services" },
      { rel: "alternate", hrefLang: "tr", href: "https://100kraft.com/services" },
      { rel: "alternate", hrefLang: "en", href: "https://100kraft.com/en/services" },
      { rel: "alternate", hrefLang: "x-default", href: "https://100kraft.com/services" },
    ],
  }),
  component: TurkishServicesIndexPage,
});

function TurkishServicesIndexPage() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="tr" />
      <main className="min-h-screen bg-background pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Header */}
          <div className="border-b border-border pb-16">
            <SectionLabel index="01" title="Atölye Yetkinlikleri" />
            <Reveal>
              <h1 className="mt-8 font-display text-[10vw] leading-[0.9] sm:text-6xl lg:text-7xl">
                Altı disiplin. Kesintisiz tek bir iş akışı.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                100KRAFT, çizim masası ile üretim hattının kesişiminde yer alır. Bir proje herhangi
                bir aşamada dahil olabilir — ilk fikir eskizinden seri enjeksiyon kalıbına kadar —
                ve doğrudan tezgâhta doğrulanmış bir ürün olarak tamamlanır.
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
                        <Link to="/services/$slug" params={{ slug: service.slug }}>
                          {service.titleTr}
                        </Link>
                      </h2>
                      <p className="mt-2 label-technical text-xs text-muted-foreground">
                        {service.taglineTr}
                      </p>
                      <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {service.shortDescTr}
                      </p>

                      <div className="mt-8">
                        <Link
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className="group/link inline-flex items-center gap-3 label-technical text-xs text-foreground font-semibold hover:text-accent transition-colors"
                        >
                          <span>Disiplin Detaylarını İncele</span>
                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-5 lg:pl-8">
                      <div className="border border-border/80 bg-secondary/20 p-6">
                        <span className="label-technical text-[10px] text-muted-foreground uppercase block mb-3">
                          ÇÖZÜLEN TEMEL PROBLEMLER
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80">
                          {service.problemsSolvedTr.map((prob) => (
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
                PROJENİZ İÇİN DOĞRU BAŞLANGIÇ NOKTASI
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl">
                Hangi disipline ihtiyacınız olduğundan emin değil misiniz?
              </h2>
              <p className="mt-3 text-sm text-background/70 max-w-xl">
                Brief veya dosyanızı iletin; ürününüz için en verimli geliştirme ve üretim yolunu
                birlikte netleştirelim.
              </p>
            </div>
            <Link
              to="/start-project"
              onClick={() =>
                trackEvent({ name: "start_project_click", location: "services_index" })
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
