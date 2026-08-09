import { Reveal, SectionLabel } from "./Reveal";

const stats = [
  { value: "120+", label: "Products developed" },
  { value: "14", label: "Industries served" },
  { value: "48h", label: "Prototype turnaround" },
  { value: "0.05mm", label: "Typical tolerance" },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index="02" title="The Atelier" />

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.6rem]">
                A design and manufacturing atelier — not a print shop.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                100KRAFT sits between the drawing board and the production line. We shape products
                with the discipline of industrial design and the constraints of real manufacturing
                held in the same hand — geometry, material, tooling and cost resolved together
                rather than in sequence.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Every concept that leaves the atelier is manufacturable. We prove it in resin,
                filament and metal before a single mold is cut.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <div className="bg-background p-8">
                    <div className="font-display text-3xl tracking-[-0.04em]">{s.value}</div>
                    <div className="label-technical mt-3">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="label-technical mt-8 leading-loose">
                Precision · Craftsmanship · Innovation · Design Thinking
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
