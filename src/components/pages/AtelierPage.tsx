import ig from "@/data/instagram.json";
import { storeProducts } from "@/data/projects";
import { siteContent, type Language } from "@/data/translations";
import { ArrowUpRight } from "@/components/site/Button";
import { InstagramIcon, InstagramSection } from "@/components/site/Instagram";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, ProcessSection, SectionHead } from "@/components/site/Sections";

const copy = {
  tr: {
    storyTitle: "Burada çizilen, burada üretilir.",
    story: [
      "100KRAFT, Antalya’da bir tasarım ve üretim atölyesi. Masada bir bilgisayar, yanında yazıcılar, rafta silikon kalıplar ve dökümü bekleyen beton. Bir parçanın ilk çizgisinden kutuya girdiği ana kadar her adım aynı odada atılıyor.",
      "Kendi koleksiyonumuz bu tezgâhın en iyi kanıtı: duvar panelleri, ejderha figürleri, lambalar ve NFC künyeler. Aynı titizliği, aklında bir parça olan herkesin projesine taşıyoruz.",
    ],
    benchTitle: "Tezgâhta neler var",
    bench: [
      {
        title: "Tasarım masası",
        body: "Parametrik ve organik 3D modelleme. Eskizden, fotoğraftan ya da kırık parçadan baskıya hazır dosyaya.",
      },
      {
        title: "Yazıcılar",
        body: "FDM 3D baskı; PLA, PETG ve esnek malzemelerle tek parçadan küçük seriye.",
      },
      {
        title: "Kalıp & döküm",
        body: "Basılı ana modellerden silikon kalıp; beton ve reçine döküm.",
      },
      {
        title: "Son işlem & paket",
        body: "Destek temizliği, zımpara, boya ve montaj. Sonra kargoya hazır paketleme.",
      },
    ],
    principlesTitle: "Nasıl çalışırız",
    principles: [
      {
        title: "Önce numune",
        body: "Hiçbir şey ekranda onaylanmaz. Onay, elde tutulan bir numuneyle verilir.",
      },
      {
        title: "Elde biter",
        body: "Baskıdan çıkan her parça temizlenir, kontrol edilir; gerekiyorsa zımparalanır ve boyanır.",
      },
      {
        title: "Açık konuşuruz",
        body: "Bir iş için doğru yer biz değilsek, ya da başka bir yöntem daha mantıklıysa bunu söyleriz.",
      },
    ],
    facts: [
      ["Konum", "Antalya, Türkiye"],
      ["Ekip", "Burak Yüzgüç, Selin Minta"],
      ["Mağaza", `${storeProducts.length} ürün · store.100kraft.com`],
      ["Özel üretim", "Ölçü, renk ve kişiye özel model"],
    ],
    moments: "Atölyeden anlar",
    teamTitle: "Ekip",
    teamLead:
      "100KRAFT’ı iki endüstriyel tasarımcı yürütüyor. Çizimden kalıba, her işin başında onlar var.",
    role: "Endüstriyel tasarımcı",
  },
  en: {
    storyTitle: "Drawn here, made here.",
    story: [
      "100KRAFT is a design and fabrication workshop in Antalya. A computer on the desk, printers beside it, silicone moulds on the shelf and concrete waiting to be cast. Every step, from a part’s first line to the moment it goes in a box, happens in the same room.",
      "Our own collection is the best proof of this bench: wall panels, dragon figures, lamps and NFC tags. We bring the same care to anyone with a part in mind.",
    ],
    benchTitle: "On the bench",
    bench: [
      {
        title: "Design desk",
        body: "Parametric and organic 3D modelling. From a sketch, a photo or a broken part to a print-ready file.",
      },
      {
        title: "Printers",
        body: "FDM 3D printing in PLA, PETG and flexible materials, from one part to a small batch.",
      },
      {
        title: "Moulds & casting",
        body: "Silicone moulds from printed masters; concrete and resin casting.",
      },
      {
        title: "Finishing & packing",
        body: "Support removal, sanding, paint and assembly. Then packed, ready to ship.",
      },
    ],
    principlesTitle: "How we work",
    principles: [
      {
        title: "Sample first",
        body: "Nothing is approved on screen. Approval comes with a sample in your hand.",
      },
      {
        title: "Finished by hand",
        body: "Every printed part is cleaned and checked, then sanded and painted where needed.",
      },
      {
        title: "Straight talk",
        body: "If we’re not the right place for a job, or another process makes more sense, we say so.",
      },
    ],
    facts: [
      ["Location", "Antalya, Turkey"],
      ["Team", "Burak Yüzgüç, Selin Minta"],
      ["Store", `${storeProducts.length} products · store.100kraft.com`],
      ["Made to order", "Size, colour and personalised models"],
    ],
    moments: "Moments from the workshop",
    teamTitle: "The team",
    teamLead:
      "100KRAFT is run by two industrial designers. From the first sketch to the mould, they’re on every job.",
    role: "Industrial designer",
  },
};

const TEAM = [
  {
    name: "Burak Yüzgüç",
    photo: "burak",
    instagram: "burakyuzguc",
    school: {
      tr: "Yeditepe Üniversitesi, Endüstriyel Tasarım",
      en: "Yeditepe University, Industrial Design",
    },
  },
  {
    name: "Selin Minta",
    photo: "selin",
    instagram: "selinminta",
    school: {
      tr: "Selçuk Üniversitesi, Endüstriyel Tasarım",
      en: "Selçuk University, Industrial Design",
    },
  },
];

const MOMENTS = ["DfNiB_0ovnT", "DekBC8YjAkh", "DfDFTbMIM3D"];

export function AtelierPage({ lang }: { lang: Language }) {
  const t = siteContent[lang].atelier;
  const c = copy[lang];
  const moments = MOMENTS.flatMap((code) => ig.posts.filter((p) => p.code === code));

  return (
    <SiteLayout lang={lang}>
      <PageHeader title={t.title} lead={t.lead} />

      <section className="wrap pb-20 md:pb-28" aria-label={c.moments}>
        <div className="grid gap-2 md:grid-cols-3 md:gap-3">
          {moments.map((post, i) => (
            <a
              key={post.code}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="print-in group relative block aspect-[4/5] overflow-hidden bg-tile"
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              <picture>
                <source type="image/avif" srcSet={`/instagram/${post.code}.avif`} />
                <img
                  src={`/instagram/${post.code}.webp`}
                  alt=""
                  width={480}
                  height={600}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </picture>
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/80 to-transparent p-4 pt-12 font-mono text-xs tracking-wide text-background uppercase">
                {post.alt[lang]}
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6">
            <Reveal variant="print">
              <h2 className="display text-[12vw] md:text-7xl xl:text-8xl">{c.storyTitle}</h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            {c.story.map((p) => (
              <p key={p.slice(0, 20)} className="mb-6 text-xl leading-relaxed">
                {p}
              </p>
            ))}
            <dl className="mt-10 border-t border-border">
              {c.facts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[8rem_1fr] items-baseline gap-4 border-b border-border py-3 text-[0.9375rem]"
                >
                  <dt className="eyebrow">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <SectionHead title={c.teamTitle} />
            <p className="mt-6 max-w-sm text-lg text-muted-foreground">{c.teamLead}</p>
          </div>
          <ul className="grid gap-px bg-border sm:grid-cols-2 md:col-span-8">
            {TEAM.map((m) => (
              <li key={m.name} className="flex flex-col bg-background p-6 md:p-8">
                <picture>
                  <source type="image/avif" srcSet={`/team/${m.photo}.avif`} />
                  <img
                    src={`/team/${m.photo}.webp`}
                    alt={m.name}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="h-24 w-24 rounded-full object-cover"
                  />
                </picture>
                <h3 className="display mt-8 text-4xl md:text-5xl">{m.name}</h3>
                <p className="eyebrow mt-4 !text-accent">{c.role}</p>
                <p className="mt-2 text-[0.9375rem] text-muted-foreground">{m.school[lang]}</p>
                <a
                  href={`https://www.instagram.com/${m.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start text-[0.9375rem] font-medium underline decoration-foreground/20 underline-offset-4 hover:decoration-accent"
                >
                  <InstagramIcon className="h-4 w-4" />@{m.instagram}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="wrap py-20 md:py-28">
          <SectionHead title={c.benchTitle} />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.bench.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <span className="spec text-accent">0{i + 1}</span>
                  <span aria-hidden className="h-px flex-1 bg-foreground" />
                </div>
                <h3 className="display mt-5 text-4xl">{b.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-muted-foreground">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <SectionHead title={c.principlesTitle} />
          </div>
          <ol className="md:col-span-8">
            {c.principles.map((p, i) => (
              <li
                key={p.title}
                className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-3 gap-y-2 border-t border-border py-6 last:border-b md:grid-cols-[3.5rem_16rem_1fr] md:gap-x-6"
              >
                <span className="spec text-accent">0{i + 1}</span>
                <h3 className="display text-3xl md:text-4xl">{p.title}</h3>
                <p className="col-start-2 text-[1.0625rem] text-muted-foreground md:col-start-auto">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSection lang={lang} />
      <InstagramSection lang={lang} />
      <ContactBlock lang={lang} />
    </SiteLayout>
  );
}
