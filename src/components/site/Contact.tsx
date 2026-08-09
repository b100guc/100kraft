import { Reveal } from "./Reveal";

const inquiries = [
  ["Manufacturing inquiries", "production@100kraft.com"],
  ["Design collaborations", "studio@100kraft.com"],
  ["Product development", "projects@100kraft.com"],
];

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
            <div className="divide-y divide-border border-y border-border">
              {inquiries.map(([label, email], i) => (
                <Reveal key={label} delay={0.05 * i}>
                  <a
                    href={`mailto:${email}`}
                    className="group flex flex-wrap items-baseline justify-between gap-4 py-7"
                  >
                    <span className="label-technical">{label}</span>
                    <span className="font-display text-xl transition-colors group-hover:text-accent md:text-2xl">
                      {email}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <a
                href="mailto:studio@100kraft.com"
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
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 md:px-12">
        <span className="font-display text-base tracking-[-0.04em]">100KRAFT</span>
        <span className="label-technical">
          Product Design · 3D Printing · Mold Design · Manufacturing
        </span>
        <span className="label-technical">© {new Date().getFullYear()} Antalya</span>
      </div>
    </footer>
  );
}
