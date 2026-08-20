import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";

const steps = [
  {
    id: "01",
    title: "Discover",
    body: "Brief, users, constraints, target cost. We define what the product must survive before we draw it.",
    output: "Design brief · Benchmark · Cost target",
  },
  {
    id: "02",
    title: "Design",
    body: "Form exploration in sketch and clay logic, then resolved surfaces and a full CAD assembly.",
    output: "Concepts · CMF · CAD assembly",
  },
  {
    id: "03",
    title: "Prototype",
    body: "Printed in the workshop within days — looks-like and works-like samples in engineering materials.",
    output: "SLA / FDM / SLS parts",
  },
  {
    id: "04",
    title: "Validate",
    body: "Fit, tolerance, drop, thermal and assembly checks. Iterations continue until the part behaves.",
    output: "Test report · Revision set",
  },
  {
    id: "05",
    title: "Manufacture",
    body: "Tooling design, supplier qualification and pilot run supervision through to steady production.",
    output: "Mold design · DFM · Pilot run",
  },
];

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionLabel index="05" title="Process" />
          <Reveal>
            <span className="label-technical">Five stages · one continuous line</span>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-20">
            <div className="absolute top-3 right-0 left-0 h-px bg-border" />
            <motion.div
              className="absolute top-3 left-0 h-px bg-accent"
              animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="grid grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-0">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative pt-0 pr-6 text-left"
                >
                  <span
                    className={`block h-[26px] w-[26px] -translate-x-[1px] rounded-full border transition-colors duration-500 ${
                      i <= active
                        ? "border-accent bg-accent"
                        : "border-border bg-background group-hover:border-foreground"
                    }`}
                    style={{ marginTop: "-9px" }}
                  />
                  <div className="mt-7">
                    <span className="label-technical">{s.id}</span>
                    <h3
                      className={`mt-2 font-display text-2xl transition-colors duration-500 md:text-[1.7rem] ${
                        i === active ? "" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-12">
          <motion.p
            key={steps[active]!.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl leading-snug lg:col-span-7 lg:text-[2rem]"
          >
            {steps[active]!.body}
          </motion.p>
          <div className="lg:col-span-5 lg:pl-10">
            <span className="label-technical">Deliverables</span>
            <p className="mt-3 text-base text-muted-foreground">{steps[active]!.output}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
