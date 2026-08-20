import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function Process() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const steps = t.process.steps;
  const currentStep = steps[active] || steps[0]!;

  return (
    <section id="process" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionLabel index={t.process.sectionIndex} title={t.process.sectionTitle} />
          <Reveal>
            <span className="label-technical">{t.process.subtitle}</span>
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
            key={currentStep.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl leading-snug lg:col-span-7 lg:text-[2rem]"
          >
            {currentStep.body}
          </motion.p>
          <div className="lg:col-span-5 lg:pl-10">
            <span className="label-technical">{t.process.deliverablesLabel}</span>
            <p className="mt-3 text-base text-muted-foreground">{currentStep.output}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
