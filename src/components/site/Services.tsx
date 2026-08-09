import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";

type Service = {
  id: string;
  title: string;
  description: string;
  meta: string;
  visual: "form" | "cad" | "print" | "proto" | "mold" | "consult";
};

const services: Service[] = [
  {
    id: "01",
    title: "Product Design",
    description:
      "Concept direction, form language, ergonomics and material strategy — resolved into a product with a point of view.",
    meta: "Concept · CMF · Ergonomics",
    visual: "form",
  },
  {
    id: "02",
    title: "3D Design",
    description:
      "Parametric CAD and surface modelling built to be edited, tolerance-checked and handed to production.",
    meta: "CAD · Surfacing · Assemblies",
    visual: "cad",
  },
  {
    id: "03",
    title: "3D Printing",
    description:
      "FDM, SLA and SLS in engineering-grade materials, printed and finished in our own workshop.",
    meta: "FDM · SLA · SLS",
    visual: "print",
  },
  {
    id: "04",
    title: "Rapid Prototyping",
    description:
      "Fast iteration loops — looks-like, works-like and pre-production samples in days, not quarters.",
    meta: "Iteration · Fit · Function",
    visual: "proto",
  },
  {
    id: "05",
    title: "Mold Design",
    description:
      "Injection mold design with draft, gating, cooling and ejection engineered around the part.",
    meta: "Tooling · DFM · Gating",
    visual: "mold",
  },
  {
    id: "06",
    title: "Manufacturing Consulting",
    description:
      "Process selection, supplier evaluation and cost engineering to bring a product to volume.",
    meta: "Process · Cost · Supply",
    visual: "consult",
  },
];

function ProcessVisual({ kind, active }: { kind: Service["visual"]; active: boolean }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 0.7,
  } as const;

  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: { duration: 0.9, delay, ease: "easeInOut" as const },
  });

  return (
    <svg viewBox="0 0 100 60" className="h-full w-full text-accent">
      {kind === "form" && (
        <>
          <motion.path
            d="M18 44 C18 20 42 12 58 20 C72 27 78 40 70 46 C60 52 30 54 18 44 Z"
            {...stroke}
            {...draw(0)}
          />
          <motion.path d="M26 44 C30 30 44 24 56 28" {...stroke} {...draw(0.2)} />
        </>
      )}
      {kind === "cad" && (
        <>
          <motion.path d="M28 18 H68 V44 H28 Z" {...stroke} {...draw(0)} />
          <motion.path d="M28 18 L40 10 H80 L68 18" {...stroke} {...draw(0.15)} />
          <motion.path d="M68 44 L80 36 V10" {...stroke} {...draw(0.3)} />
        </>
      )}
      {kind === "print" && (
        <>
          <motion.path d="M24 46 H76" {...stroke} {...draw(0)} />
          <motion.path d="M34 46 V34 H66 V46" {...stroke} {...draw(0.15)} />
          <motion.path d="M42 34 V24 H58 V34" {...stroke} {...draw(0.3)} />
          <motion.path d="M50 8 V20" {...stroke} {...draw(0.45)} />
        </>
      )}
      {kind === "proto" && (
        <>
          <motion.path d="M22 40 H44 V16 H22 Z" {...stroke} {...draw(0)} />
          <motion.path d="M52 46 H78 V22 H52 Z" {...stroke} {...draw(0.2)} />
          <motion.path d="M44 28 H52" {...stroke} {...draw(0.4)} />
        </>
      )}
      {kind === "mold" && (
        <>
          <motion.path d="M20 12 H80 V28 H20 Z" {...stroke} {...draw(0)} />
          <motion.path d="M20 32 H80 V48 H20 Z" {...stroke} {...draw(0.15)} />
          <motion.path d="M44 28 H56 V32 H44 Z" {...stroke} {...draw(0.3)} />
          <motion.path d="M50 4 V12" {...stroke} {...draw(0.45)} />
        </>
      )}
      {kind === "consult" && (
        <>
          <motion.path d="M18 46 H82" {...stroke} {...draw(0)} />
          <motion.path d="M18 46 L36 32 L52 38 L70 14" {...stroke} {...draw(0.2)} />
          <motion.circle cx="70" cy="14" r="3" {...stroke} {...draw(0.5)} />
        </>
      )}
    </svg>
  );
}

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionLabel index="03" title="Capabilities" />
          <Reveal>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Six disciplines, one continuous workflow. A project can enter at any point and leave
              as a manufacturable product.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i}>
              <div
                data-cursor
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(s.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="group relative flex h-full min-h-[22rem] flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-secondary/60 focus:outline-none md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="label-technical">{s.id}</span>
                  <span className="label-technical opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
                    {s.meta}
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-x-8 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100 md:inset-x-10">
                  <div className="h-32">
                    <ProcessVisual kind={s.visual} active={active === s.id} />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl transition-transform duration-500 group-hover:-translate-y-1 md:text-[1.75rem]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 group-hover:opacity-40">
                    {s.description}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-focus:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
