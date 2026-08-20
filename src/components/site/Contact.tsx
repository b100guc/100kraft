import { Reveal } from "./Reveal";
import { Instagram } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-28 md:py-40">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex items-baseline gap-4">
          <span className="label-technical text-accent">08</span>
          <span className="label-technical">Contact</span>
        </div>

        <Reveal>
          <h2 className="mt-14 max-w-4xl font-display text-[11vw] leading-[0.9] sm:text-[7vw] lg:text-[5.4rem]">
            Tell us what you want to <span className="italic text-accent">build.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="border-y border-border">
              <Reveal>
                <a
                  href="mailto:burak@100kraft.com"
                  className="group flex flex-wrap items-baseline justify-between gap-4 py-7"
                >
                  <span className="label-technical">Contact</span>
                  <span className="font-display text-xl transition-colors group-hover:text-accent md:text-2xl">
                    burak@100kraft.com
                  </span>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <a
                href="mailto:burak@100kraft.com"
                className="group relative mt-12 inline-flex items-center gap-4 overflow-hidden bg-foreground px-8 py-4"
              >
                <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="label-technical relative text-primary-foreground">
                  Start a Project
                </span>
                <span className="relative text-primary-foreground transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <Reveal>
              <span className="label-technical">Atelier</span>
              <p className="mt-4 font-display text-2xl leading-snug">
                Antalya, Turkey
                <br />
                <span className="text-muted-foreground">36.8969° N, 30.7133° E</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-sm text-base leading-relaxed text-muted-foreground">
                Working with clients across Europe and the Middle East. Send a brief, a sketch or a
                CAD file — we reply within two working days.
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
                  src="https://www.openstreetmap.org/export/embed.html?bbox=30.6933%2C36.8769%2C30.7333%2C36.9169&amp;layer=mapnik&amp;marker=36.8969%2C30.7133"
                  className="filter grayscale contrast-125 opacity-80"
                  title="Map of Antalya, Turkey"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 md:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl tracking-[-0.04em]">100KRAFT</span>
            <span className="label-technical text-muted-foreground">
              Product Design · 3D Printing · Mold Design · Manufacturing
            </span>
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
                      <span className="label-technical">100KRAFT</span>
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
                      <span className="label-technical">GRAINZ STUDIO</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit GRAINZ STUDIO Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            <a
              href="https://grainz.site"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <span className="label-technical text-muted-foreground transition-colors group-hover:text-foreground">
                A COMPANY BY
              </span>
              <span className="font-display text-lg tracking-wide transition-colors group-hover:text-accent">
                GRAINZ
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex justify-between items-center">
          <span className="label-technical text-muted-foreground">
            © {new Date().getFullYear()} Antalya, Turkey
          </span>
          <a
            href="#top"
            className="label-technical text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
