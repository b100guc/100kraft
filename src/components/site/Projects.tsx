import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import sketch from "@/assets/case-sketch.jpg";
import cad from "@/assets/case-cad.jpg";
import final from "@/assets/case-final.jpg";
import { useLanguage } from "@/context/LanguageContext";

type StageKey = "sketch" | "cad" | "final";

const stageImages: Record<StageKey, string> = {
  sketch,
  cad,
  final,
};

export function Projects() {
  const [stage, setStage] = useState<StageKey>("sketch");
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  const stages: { key: StageKey; label: string; image: string }[] = [
    { key: "sketch", label: t.projects.stages.sketch, image: stageImages.sketch },
    { key: "cad", label: t.projects.stages.cad, image: stageImages.cad },
    { key: "final", label: t.projects.stages.final, image: stageImages.final },
  ];

  const activeStage = stages.find((s) => s.key === stage)!;
  const project = t.projects.items[openIndex] || t.projects.items[0]!;

  return (
    <section id="projects" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index={t.projects.sectionIndex} title={t.projects.sectionTitle} />

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${openIndex}-${stage}`}
                  src={activeStage.image}
                  alt={`${project.name} — ${activeStage.label}`}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-foreground/10" />
            </div>

            <div className="mt-5 flex gap-px bg-border">
              {stages.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setStage(s.key)}
                  className={`flex-1 bg-background px-4 py-3 transition-colors ${
                    stage === s.key ? "bg-foreground" : "hover:bg-secondary"
                  }`}
                >
                  <span
                    className={`label-technical ${
                      stage === s.key ? "text-primary-foreground" : ""
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="divide-y divide-border">
              {t.projects.items.map((p, i) => (
                <Reveal key={p.id} delay={0.05 * i}>
                  <button onClick={() => setOpenIndex(i)} className="group w-full py-8 text-left">
                    <div className="flex items-baseline justify-between gap-6">
                      <div className="flex items-baseline gap-5">
                        <span className={`label-technical ${openIndex === i ? "text-accent" : ""}`}>
                          {p.id}
                        </span>
                        <h3
                          className={`font-display text-3xl transition-colors md:text-[2.4rem] ${
                            openIndex === i ? "" : "text-muted-foreground"
                          } group-hover:text-foreground`}
                        >
                          {p.name}
                        </h3>
                      </div>
                      <span className="label-technical shrink-0">{p.year}</span>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                            {p.story}
                          </p>
                          <div className="label-technical mt-6 flex flex-wrap gap-x-6 gap-y-2">
                            <span>{p.sector}</span>
                            <span className="text-accent">{p.scope}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
