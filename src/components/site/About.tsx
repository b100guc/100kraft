import { Reveal, SectionLabel } from "./Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index={t.about.sectionIndex} title={t.about.sectionTitle} />

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.6rem]">
                {t.about.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t.about.p1}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t.about.p2}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="grid grid-cols-2 gap-px bg-border">
              {t.about.stats.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <div className="bg-background p-8">
                    <div className="font-display text-3xl tracking-[-0.04em]">{s.value}</div>
                    <div className="label-technical mt-3">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
