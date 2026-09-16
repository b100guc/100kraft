import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Instagram } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { siteContent, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";

interface ContactProps {
  lang?: Language;
}

export function Contact({ lang = "tr" }: ContactProps) {
  const isTr = lang === "tr";
  const t = siteContent[lang].contactSection;
  const startProjectUrl = isTr ? "/start-project" : "/en/start-project";

  return (
    <section id="contact" className="relative border-t border-border py-28 md:py-40">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex items-baseline gap-4">
          <span className="label-technical text-accent">{t.index}</span>
          <span className="label-technical">{t.label}</span>
        </div>

        <Reveal>
          <h2 className="mt-14 max-w-4xl font-display text-[11vw] leading-[0.9] sm:text-[7vw] lg:text-[5.4rem]">
            {t.headlinePrefix}
            <span className="italic text-accent">{t.headlineAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="border-y border-border">
              <Reveal>
                <a
                  href="mailto:burak@100kraft.com"
                  onClick={() =>
                    trackEvent({
                      name: "email_click",
                      address: "burak@100kraft.com",
                      location: "contact_row",
                    })
                  }
                  className="group flex flex-wrap items-baseline justify-between gap-4 py-7"
                >
                  <span className="label-technical">{t.emailLabel}</span>
                  <span className="font-display text-xl transition-colors group-hover:text-accent md:text-2xl">
                    burak@100kraft.com
                  </span>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  to={startProjectUrl}
                  onClick={() =>
                    trackEvent({ name: "start_project_click", location: "contact_section" })
                  }
                  className="group relative inline-flex items-center gap-4 overflow-hidden bg-foreground px-8 py-4"
                >
                  <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                  <span className="label-technical relative text-primary-foreground">
                    {t.startProjectCta}
                  </span>
                  <span className="relative text-primary-foreground transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href="mailto:burak@100kraft.com"
                  onClick={() =>
                    trackEvent({
                      name: "email_click",
                      address: "burak@100kraft.com",
                      location: "contact_secondary",
                    })
                  }
                  className="label-technical underline-offset-8 hover:underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isTr ? "Doğrudan E-posta Gönder" : "Send direct email"}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <Reveal>
              <span className="label-technical">{t.atelierLabel}</span>
              <p className="mt-4 font-display text-2xl leading-snug">
                {t.location}
                <br />
                <span className="text-muted-foreground">{t.coordinates}</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-sm text-base leading-relaxed text-muted-foreground">
                {t.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 w-full overflow-hidden rounded-md border border-border">
                <iframe
                  width="100%"
                  height="250"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=30.6933%2C36.8769%2C30.7333%2C36.9169&layer=mapnik&marker=36.8969%2C30.7133"
                  className="filter grayscale contrast-125 opacity-80"
                  title={
                    isTr ? "100KRAFT Atölye Haritası, Antalya" : "Map of 100KRAFT Atelier, Antalya"
                  }
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FooterProps {
  lang?: Language;
}

export function Footer({ lang = "tr" }: FooterProps) {
  const isTr = lang === "tr";
  const t = siteContent[lang].footer;
  const servicesUrl = isTr ? "/services" : "/en/services";
  const workUrl = isTr ? "/work" : "/en/work";
  const startProjectUrl = isTr ? "/start-project" : "/en/start-project";

  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 md:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="font-display text-2xl tracking-[-0.04em]">100KRAFT</span>
            <span className="label-technical text-muted-foreground text-xs leading-relaxed">
              {t.tagline}
            </span>
            <div className="flex flex-wrap gap-6 pt-2">
              <Link
                to={servicesUrl}
                className="label-technical text-xs hover:text-foreground transition-colors"
              >
                {isTr ? "Hizmetler" : "Services"}
              </Link>
              <Link
                to={workUrl}
                className="label-technical text-xs hover:text-foreground transition-colors"
              >
                {isTr ? "İşler" : "Work"}
              </Link>
              <Link
                to={startProjectUrl}
                className="label-technical text-xs hover:text-foreground transition-colors"
              >
                {isTr ? "Proje Başlat" : "Start a Project"}
              </Link>
              <a
                href="https://store.100kraft.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent({
                    name: "store_click",
                    destination: "https://store.100kraft.com",
                    location: "footer",
                  })
                }
                className="label-technical text-xs hover:text-foreground transition-colors"
              >
                {isTr ? "Mağaza" : "Store"}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <TooltipProvider delayDuration={100}>
              <div className="flex items-center gap-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/100kraft/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
                    >
                      <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="label-technical text-xs">100KRAFT</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit 100KRAFT Instagram</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/grainzstudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
                    >
                      <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="label-technical text-xs">GRAINZ STUDIO</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit GRAINZ STUDIO Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            <a
              href="https://grainzdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <span className="label-technical text-muted-foreground text-xs transition-colors group-hover:text-foreground">
                {t.grainzAttribution}
              </span>
              <span className="font-display text-lg tracking-wide transition-colors group-hover:text-accent">
                GRAINZ DIGITAL
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex justify-between items-center">
          <span className="label-technical text-muted-foreground text-xs">
            © {new Date().getFullYear()} {t.rights}
          </span>
          <a
            href="#top"
            className="label-technical text-muted-foreground text-xs hover:text-foreground transition-colors"
          >
            {t.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
