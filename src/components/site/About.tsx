import { Reveal, SectionLabel } from "./Reveal";
import { siteContent, type Language } from "@/data/translations";

interface AboutProps {
  lang?: Language;
}

export function About({ lang = "tr" }: AboutProps) {
  const isTr = lang === "tr";
  const t = siteContent[lang].atelier;

  return (
    <section id="about" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index={t.index} title={t.label} />

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.6rem]">
                {t.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t.p1}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.p2}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="grid grid-cols-2 gap-px bg-border">
              {t.stats.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <div className="bg-background p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="font-display text-3xl tracking-[-0.04em]">{s.value}</div>
                      <div className="label-technical mt-3">{s.label}</div>
                    </div>
                    {s.note && (
                      <p className="mt-3 text-xs text-muted-foreground/80 leading-normal">
                        {isTr
                          ? s.label === "Geliştirilen ürün"
                            ? "Müşteri projeleri genelinde"
                            : s.label === "Hizmet verilen sektör"
                              ? "Tüketici, medikal, endüstriyel"
                              : s.label === "Prototip teslim süresi"
                                ? "Atölye içi hızlı iterasyon döngüsü"
                                : "Hassas eklemeli üretim ve CNC kalıplama"
                          : s.note}
                      </p>
                    )}
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
