import { Reveal, SectionLabel } from "./Reveal";
import mold from "@/assets/mold.jpg";
import { useLanguage } from "@/context/LanguageContext";

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index={t.expertise.sectionIndex} title={t.expertise.sectionTitle} />

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={mold}
                  alt="Precision injection mold insert machined for production tooling"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <h2 className="font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.2rem]">
                {t.expertise.headline}
              </h2>
            </Reveal>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {t.expertise.items.map((it, i) => (
                <Reveal key={it.title} delay={0.06 * i}>
                  <div className="group grid gap-4 py-8 md:grid-cols-12">
                    <h3 className="font-display text-xl md:col-span-4">{it.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground md:col-span-8">
                      {it.body}
                    </p>
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
