import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import { projects, type ProjectItem, type ProjectStage } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

interface ProjectsProps {
  lang?: "en" | "tr";
}

export function Projects({ lang = "tr" }: ProjectsProps) {
  const isTr = lang === "tr";
  const [openIndex, setOpenIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  const activeProject: ProjectItem = projects[openIndex] ?? projects[0]!;
  const activeStage: ProjectStage = activeProject.stages[stageIndex] ?? activeProject.stages[0]!;

  const handleSelectProject = (index: number) => {
    setOpenIndex(index);
    setStageIndex(0);
    const selected = projects[index];
    if (selected) {
      trackEvent({
        name: "project_view",
        slug: selected.slug,
        projectName: selected.name,
      });
    }
  };

  const workBase = isTr ? "/work" : "/en/work";

  return (
    <section id="projects" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionLabel index="04" title={isTr ? "Seçilmiş İşler" : "Selected Work"} />
          <Link
            to={workBase}
            className="label-technical underline-offset-8 hover:underline text-accent transition-colors"
          >
            {isTr ? "Tüm Projeleri Görüntüle →" : "View All Case Studies →"}
          </Link>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          {/* Project Stage Visualizer */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeProject.slug}-${activeStage.id}`}
                  src={activeStage.image}
                  alt={activeStage.alt}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-foreground/10 pointer-events-none" />

              {/* Stage Title Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6 pt-12">
                <span className="label-technical text-xs text-accent">
                  {isTr ? activeStage.labelTr : activeStage.label} Stage
                </span>
                <p className="font-display text-lg text-foreground mt-1">
                  {isTr ? activeStage.titleTr : activeStage.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 max-w-md hidden sm:block">
                  {isTr ? activeStage.descriptionTr : activeStage.description}
                </p>
              </div>
            </div>

            {/* Stage Selector Tabs */}
            <div className="mt-5 flex gap-px bg-border">
              {activeProject.stages.map((stg, i) => {
                const isActive = stageIndex === i;
                return (
                  <button
                    key={stg.id}
                    type="button"
                    onClick={() => setStageIndex(i)}
                    className={`flex-1 bg-background px-4 py-3 transition-colors ${
                      isActive ? "bg-foreground" : "hover:bg-secondary"
                    }`}
                  >
                    <span
                      className={`label-technical text-xs sm:text-sm ${
                        isActive ? "text-primary-foreground font-semibold" : ""
                      }`}
                    >
                      {isTr ? stg.labelTr : stg.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Accordion List */}
          <div className="lg:col-span-6 lg:pl-8">
            <div className="divide-y divide-border">
              {projects.map((p, i) => {
                const isOpen = openIndex === i;
                const caseStudyUrl = `${workBase}/${p.slug}`;

                return (
                  <Reveal key={p.id} delay={0.05 * i}>
                    <div className="group w-full py-8 text-left">
                      <button
                        type="button"
                        onClick={() => handleSelectProject(i)}
                        className="w-full text-left"
                      >
                        <div className="flex items-baseline justify-between gap-6">
                          <div className="flex items-baseline gap-5">
                            <span
                              className={`label-technical ${isOpen ? "text-accent font-semibold" : ""}`}
                            >
                              {p.id}
                            </span>
                            <h3
                              className={`font-display text-3xl transition-colors md:text-[2.4rem] ${
                                isOpen ? "text-foreground" : "text-muted-foreground"
                              } group-hover:text-foreground`}
                            >
                              {p.name}
                            </h3>
                          </div>
                          <span className="label-technical shrink-0">{p.year}</span>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                              {isTr ? p.storyTr : p.story}
                            </p>

                            <div className="label-technical mt-5 flex flex-wrap gap-x-6 gap-y-2">
                              <span>{isTr ? p.sectorTr : p.sector}</span>
                              <span className="text-accent">{isTr ? p.scopeTr : p.scope}</span>
                            </div>

                            {/* Metrics Strip */}
                            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border max-w-xl">
                              {p.metrics.map((m) => (
                                <div key={m.label} className="bg-background p-3">
                                  <div className="font-display text-xl font-medium tracking-tight">
                                    {m.value}
                                  </div>
                                  <div className="label-technical text-[10px] mt-1 text-muted-foreground">
                                    {isTr ? m.labelTr : m.label}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Link to Dedicated Case Study */}
                            <div className="mt-6 pt-2">
                              <Link
                                to={caseStudyUrl}
                                className="group/link inline-flex items-center gap-3 border-b border-foreground/30 pb-1 hover:border-accent transition-colors"
                              >
                                <span className="label-technical text-foreground group-hover/link:text-accent font-semibold transition-colors">
                                  {isTr ? "Detaylı Vaka Analizi" : "Full Case Study"}
                                </span>
                                <span className="text-accent transition-transform duration-300 group-hover/link:translate-x-1">
                                  →
                                </span>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
