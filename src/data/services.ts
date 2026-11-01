import type { Language } from "@/data/translations";

type Localized = Record<Language, string>;
type LocalizedList = Record<Language, string[]>;

export interface ServiceItem {
  slug: string;
  number: string;
  title: Localized;
  short: Localized;
  intro: Localized;
  includes: LocalizedList;
  forWhom: LocalizedList;
  steps: { title: Localized; body: Localized }[];
  deliverables: LocalizedList;
  faq: { q: Localized; a: Localized }[];
  /** Blog posts that go deeper on this service. */
  posts: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "product-design",
    number: "01",
    title: { tr: "Ürün Tasarımı", en: "Product Design" },
    short: {
      tr: "Bir fikri, raflara çıkabilecek bir ürüne çeviririz.",
      en: "We turn an idea into something that can go on a shelf.",
    },
    intro: {
      tr: "Form, kullanım ve üretim aynı masada konuşulur. Nasıl görüneceğini düşünürken nasıl basılacağını, nasıl paketleneceğini ve ne kadara mal olacağını da düşünürüz. Onaylanan tasarım, üretilen üründür.",
      en: "Form, use and manufacture are discussed at the same table. While we think about how it looks, we also think about how it prints, packs and what it costs. The approved design is the product that gets made.",
    },
    includes: {
      tr: [
        "Konsept ve form çalışması",
        "Ergonomi ve kullanım",
        "Malzeme, renk ve yüzey",
        "Üretime uygunluk kontrolü",
      ],
      en: [
        "Concept and form studies",
        "Ergonomics and use",
        "Material, colour and finish",
        "Design for manufacture",
      ],
    },
    forWhom: {
      tr: [
        "Kendi ürününü çıkarmak isteyen girişimciler",
        "Koleksiyonuna yeni parça ekleyen markalar",
        "Fikri olan ama nereden başlayacağını bilmeyenler",
      ],
      en: [
        "Founders launching their own product",
        "Brands adding a piece to their range",
        "Anyone with an idea and no starting point",
      ],
    },
    steps: [
      {
        title: { tr: "Brief", en: "Brief" },
        body: {
          tr: "Ürün ne yapacak, kime satılacak, kaç adet, hangi bütçe.",
          en: "What it does, who buys it, how many, what budget.",
        },
      },
      {
        title: { tr: "Konsept", en: "Concept" },
        body: {
          tr: "Eskizler ve hızlı modellerle iki üç yön; birini birlikte seçeriz.",
          en: "Two or three directions in sketches and quick models; we pick one together.",
        },
      },
      {
        title: { tr: "Numune", en: "Sample" },
        body: {
          tr: "Seçilen yön baskıyla numuneye dönüşür; elde test edip netleştiririz.",
          en: "The chosen direction becomes a printed sample, tested in hand and refined.",
        },
      },
    ],
    deliverables: {
      tr: ["Onaylı numune", "3D model ve teknik resim", "Malzeme ve renk listesi"],
      en: ["Approved sample", "3D model and drawings", "Material and colour spec"],
    },
    faq: [
      {
        q: {
          tr: "Elimde sadece bir fikir var, yeterli mi?",
          en: "I only have an idea. Is that enough?",
        },
        a: {
          tr: "Evet. İlk görüşmede fikri birlikte netleştirir, ilk eskizleri biz çıkarırız.",
          en: "Yes. We shape the idea together in the first call and make the first sketches ourselves.",
        },
      },
      {
        q: { tr: "Tasarımın hakları kime ait olur?", en: "Who owns the design?" },
        a: {
          tr: "Sizin için yaptığımız tasarımın hakları teslimle size geçer; bunu teklifte yazılı olarak belirtiriz.",
          en: "Rights to a design we make for you pass to you on delivery; we state this in writing in the quote.",
        },
      },
    ],
    posts: ["fikirden-prototipe-urun-gelistirme-sureci", "moduler-duvar-dekoru-wall-decor"],
  },
  {
    slug: "3d-design-cad",
    number: "02",
    title: { tr: "3D Modelleme", en: "3D Modelling" },
    short: {
      tr: "Eskizden, fotoğraftan ya da kırık parçadan baskıya hazır dosya.",
      en: "Print-ready files from a sketch, a photo or a broken part.",
    },
    intro: {
      tr: "Elinizdeki eskiz, fotoğraf, ölçü ya da kırık parça bizim için yeterli bir başlangıç. Parçayı ölçer, modeller ve baskıya, CNC'ye ya da kalıpçıya gidecek dosyayı hazırlarız. Organik figürler de mekanik parçalar da bu masada çizilir.",
      en: "A sketch, a photo, a set of measurements or a broken part is enough to start. We measure, model and prepare files ready for printing, CNC or the toolmaker. Organic figures and mechanical parts are both drawn at this desk.",
    },
    includes: {
      tr: [
        "Parametrik parça ve montaj modeli",
        "Organik ve heykelsi formlar",
        "Tersine mühendislik",
        "STEP, STL, OBJ ve teknik resim",
      ],
      en: [
        "Parametric parts and assemblies",
        "Organic and sculptural forms",
        "Reverse engineering",
        "STEP, STL, OBJ and drawings",
      ],
    },
    forWhom: {
      tr: [
        "Bulunmayan yedek parçası olanlar",
        "Baskıya dosya hazırlatmak isteyen tasarımcılar",
        "Figür ve obje üreten sanatçılar",
      ],
      en: [
        "People with a spare part nobody sells",
        "Designers who need print-ready files",
        "Artists making figures and objects",
      ],
    },
    steps: [
      {
        title: { tr: "Ölçü", en: "Measure" },
        body: {
          tr: "Kumpas, fotoğraf ve referans ölçülerle başlarız.",
          en: "We start from callipers, photos and reference dimensions.",
        },
      },
      {
        title: { tr: "Model", en: "Model" },
        body: {
          tr: "Baskı yönü, et kalınlığı ve toleranslar düşünülerek modellenir.",
          en: "Modelled with print orientation, wall thickness and tolerances in mind.",
        },
      },
      {
        title: { tr: "Deneme", en: "Test" },
        body: {
          tr: "Kritik ölçüler için deneme baskısı alır, gerekirse düzeltiriz.",
          en: "A test print checks the critical fits before final files.",
        },
      },
    ],
    deliverables: {
      tr: ["Kaynak model (STEP)", "Baskı dosyası (STL/3MF)", "İsteğe bağlı teknik resim"],
      en: ["Source model (STEP)", "Print file (STL/3MF)", "Drawings on request"],
    },
    faq: [
      {
        q: { tr: "Kırık parçayı nasıl göndermeliyim?", en: "How do I send a broken part?" },
        a: {
          tr: "Önce fotoğraf ve birkaç ölçü yeterli. Gerekirse parçayı kargoyla isteriz.",
          en: "Photos and a few measurements are enough to start. If needed, we ask for the part by post.",
        },
      },
      {
        q: {
          tr: "Sadece dosya alıp başka yerde bastırabilir miyim?",
          en: "Can I just get the files and print elsewhere?",
        },
        a: { tr: "Elbette. Dosyalar size teslim edilir.", en: "Of course. The files are yours." },
      },
    ],
    posts: [
      "3d-baski-icin-dosya-hazirlama-stl-step",
      "tersine-muhendislik-kirik-parcayi-yeniden-uretmek",
    ],
  },
  {
    slug: "3d-printing",
    number: "03",
    title: { tr: "3D Baskı", en: "3D Printing" },
    short: {
      tr: "Tek parçadan küçük seriye; basılır, temizlenir, elde bitirilir.",
      en: "One part to a small batch; printed, cleaned and hand-finished.",
    },
    intro: {
      tr: "Parçaları kendi atölyemizde basıyor, destekleri temizliyor ve gerekiyorsa zımparalayıp boyuyoruz. Malzemeyi ve baskı yönünü parçanın nerede ve nasıl kullanılacağına göre seçiyoruz; en hızlı yol değil, doğru yol.",
      en: "We print parts in our own workshop, clean off supports and, where needed, sand and paint them. Material and orientation are chosen for how and where the part will be used: the right way, not the fastest.",
    },
    includes: {
      tr: [
        "Fonksiyonel ve dekoratif parçalar",
        "PLA, PETG, TPU gibi malzemeler",
        "Zımpara, astar, boya",
        "Küçük seri üretim ve paketleme",
      ],
      en: [
        "Functional and decorative parts",
        "PLA, PETG, TPU and more",
        "Sanding, priming, painting",
        "Small batches and packing",
      ],
    },
    forWhom: {
      tr: [
        "STL dosyası hazır olanlar",
        "Etkinlik, vitrin ve hediye için obje arayan markalar",
        "Az adetli ürün satan küçük işletmeler",
      ],
      en: [
        "Anyone with an STL ready",
        "Brands needing objects for events, windows or gifts",
        "Small businesses selling short runs",
      ],
    },
    steps: [
      {
        title: { tr: "Dosya kontrolü", en: "File check" },
        body: {
          tr: "Dosyayı baskıya uygunluk için kontrol eder, gerekirse düzeltiriz.",
          en: "We check the file for printability and fix it if needed.",
        },
      },
      {
        title: { tr: "Baskı", en: "Print" },
        body: {
          tr: "Doğru malzeme, katman ve yönle basarız.",
          en: "Printed with the right material, layers and orientation.",
        },
      },
      {
        title: { tr: "Son işlem", en: "Finish" },
        body: {
          tr: "Destek temizliği, zımpara ve istenirse boya.",
          en: "Support removal, sanding and paint on request.",
        },
      },
    ],
    deliverables: {
      tr: ["Bitmiş parçalar", "Kargo ya da atölyeden teslim"],
      en: ["Finished parts", "Shipping or workshop pickup"],
    },
    faq: [
      {
        q: { tr: "Hangi malzemeyi seçmeliyim?", en: "Which material should I choose?" },
        a: {
          tr: "Parçanın ısıya, darbeye ya da esnemeye maruz kalıp kalmadığını söyleyin; malzemeyi birlikte seçelim.",
          en: "Tell us whether it faces heat, impact or flexing, and we’ll choose together.",
        },
      },
      {
        q: { tr: "Tek parça bastırabilir miyim?", en: "Can I print just one part?" },
        a: { tr: "Evet, tek parça da basıyoruz.", en: "Yes, single parts are welcome." },
      },
    ],
    posts: [
      "3d-baski-fiyatlari-nasil-belirlenir",
      "3d-baski-malzeme-secimi-pla-petg-abs-tpu",
      "fdm-sla-sls-hangi-3d-baski-teknolojisi",
      "3d-baski-yuzey-islemleri-zimpara-astar-boya",
    ],
  },
  {
    slug: "rapid-prototyping",
    number: "04",
    title: { tr: "Prototipleme", en: "Prototyping" },
    short: {
      tr: "Kalıba para harcamadan önce elde tutulan, test edilen modeller.",
      en: "Models you can hold and test before spending on tooling.",
    },
    intro: {
      tr: "Ekranda doğru görünen bir tasarımın elde de doğru olduğundan emin oluruz. Ölçü, geçme ve kullanım hissi prototiple görülür; hata kalıba girmeden, ucuzken düzeltilir.",
      en: "We make sure a design that looks right on screen is right in the hand too. Size, fit and feel show up on a prototype, so mistakes get fixed while they’re still cheap, before any tooling.",
    },
    includes: {
      tr: [
        "Görsel ve fonksiyonel prototip",
        "Geçme ve montaj denemesi",
        "Hızlı revizyon turları",
        "Sunum ve fuar modeli",
      ],
      en: [
        "Visual and functional prototypes",
        "Fit and assembly checks",
        "Fast revision rounds",
        "Presentation and trade-show models",
      ],
    },
    forWhom: {
      tr: [
        "Yatırımcıya ya da müşteriye ürün gösterecek ekipler",
        "Kalıp öncesi doğrulama isteyen üreticiler",
        "Tasarım öğrencileri ve stüdyolar",
      ],
      en: [
        "Teams pitching to investors or clients",
        "Manufacturers validating before tooling",
        "Design students and studios",
      ],
    },
    steps: [
      {
        title: { tr: "İlk numune", en: "First sample" },
        body: {
          tr: "Modelden ilk baskı; ölçü ve oran kontrolü.",
          en: "First print from the model; size and proportion check.",
        },
      },
      {
        title: { tr: "Test", en: "Test" },
        body: { tr: "Montaj, geçme ve kullanım denemesi.", en: "Assembly, fit and use trials." },
      },
      {
        title: { tr: "Revizyon", en: "Revise" },
        body: {
          tr: "Bulunanları düzeltir, yeni numune basarız.",
          en: "Fix what we found and print the next sample.",
        },
      },
    ],
    deliverables: {
      tr: ["Prototip(ler)", "Revizyon notları", "Güncel 3D model"],
      en: ["Prototype(s)", "Revision notes", "Updated 3D model"],
    },
    faq: [
      {
        q: { tr: "Kaç prototip turu gerekir?", en: "How many rounds does it take?" },
        a: {
          tr: "Ürüne göre değişir; her turdan sonra bir sonrakine birlikte karar veririz.",
          en: "It depends on the product; after each round we decide on the next together.",
        },
      },
      {
        q: {
          tr: "Prototip son ürünle aynı malzemeden mi olur?",
          en: "Is the prototype in the final material?",
        },
        a: {
          tr: "Bazen evet, bazen benzer davranan bir baskı malzemesiyle; amaç neyi test ettiğimize bağlı.",
          en: "Sometimes; otherwise in a print material that behaves similarly, depending on what we’re testing.",
        },
      },
    ],
    posts: [
      "hizli-prototipleme-ile-kalip-maliyeti-dusurmek",
      "fikirden-prototipe-urun-gelistirme-sureci",
    ],
  },
  {
    slug: "mold-design",
    number: "05",
    title: { tr: "Kalıp & Döküm", en: "Moulds & Casting" },
    short: {
      tr: "Basılan ana modelden silikon kalıp; beton ve reçine döküm.",
      en: "Silicone moulds from printed masters; concrete and resin casting.",
    },
    intro: {
      tr: "Basılı bir ana modelden silikon kalıp alıp beton ya da reçineyle döküm yapıyoruz. Baskının veremediği ağırlığı, dokuyu ve yüzeyi dökümle elde ediyoruz. Enjeksiyon kalıbına gidecek parçalar için kalıplanabilirlik kontrolü de yapıyoruz.",
      en: "We take silicone moulds from a printed master and cast in concrete or resin, getting the weight, texture and surface that printing alone can’t. For parts headed to injection moulding, we also review mouldability.",
    },
    includes: {
      tr: [
        "Ana model (master) üretimi",
        "Silikon kalıp",
        "Beton ve reçine döküm",
        "Enjeksiyona uygunluk kontrolü",
      ],
      en: [
        "Master model production",
        "Silicone moulds",
        "Concrete and resin casting",
        "Injection-moulding review",
      ],
    },
    forWhom: {
      tr: [
        "Beton ya da reçine obje üretmek isteyen markalar",
        "Aynı parçadan onlarca adet gerekenler",
        "Kalıp öncesi danışmanlık isteyen üreticiler",
      ],
      en: [
        "Brands making concrete or resin objects",
        "Anyone needing dozens of the same part",
        "Manufacturers wanting a pre-tooling review",
      ],
    },
    steps: [
      {
        title: { tr: "Master", en: "Master" },
        body: {
          tr: "Ana model basılır ve yüzeyi kalıba hazırlanır.",
          en: "The master is printed and its surface prepared.",
        },
      },
      {
        title: { tr: "Kalıp", en: "Mould" },
        body: {
          tr: "Silikon kalıp dökülür, ayırma hatları planlanır.",
          en: "The silicone mould is poured, with parting lines planned.",
        },
      },
      {
        title: { tr: "Döküm", en: "Cast" },
        body: {
          tr: "Beton ya da reçine dökülür, kürlenir ve bitirilir.",
          en: "Concrete or resin is cast, cured and finished.",
        },
      },
    ],
    deliverables: {
      tr: ["Döküm parçalar", "İsteğe bağlı kalıp", "Ana model"],
      en: ["Cast parts", "The mould, on request", "The master"],
    },
    faq: [
      {
        q: { tr: "Döküm ne zaman 3D baskıdan mantıklı?", en: "When does casting beat printing?" },
        a: {
          tr: "Aynı parçadan çok sayıda gerektiğinde ya da beton gibi ağır, dokulu bir malzeme istendiğinde.",
          en: "When you need many of the same part, or a heavy, textured material like concrete.",
        },
      },
      {
        q: {
          tr: "Bir silikon kalıp kaç döküm çıkarır?",
          en: "How many casts does a silicone mould give?",
        },
        a: {
          tr: "Malzemeye ve parçanın formuna bağlı; teklif aşamasında projeye göre belirtiriz.",
          en: "It depends on the material and shape; we state it per project in the quote.",
        },
      },
    ],
    posts: [
      "silikon-kalip-ve-dokum-kucuk-seri-uretim",
      "hizli-prototipleme-ile-kalip-maliyeti-dusurmek",
    ],
  },
  {
    slug: "manufacturing-consulting",
    number: "06",
    title: { tr: "Üretim Danışmanlığı", en: "Manufacturing Advice" },
    short: {
      tr: "Hangi yöntem, hangi malzeme, kaç adet: doğru kararı birlikte veririz.",
      en: "Which process, which material, how many: we decide it together.",
    },
    intro: {
      tr: "Bir ürünün kaç adet, hangi yöntemle ve hangi maliyetle üretileceği çoğu zaman tasarım kadar önemlidir. Baskı, döküm ve enjeksiyon arasındaki eşikleri birlikte konuşur; gerektiğinde doğru tedarikçiye yönlendiririz.",
      en: "How many units, which process and at what cost often matter as much as the design. We talk through the thresholds between printing, casting and injection moulding, and point you to the right supplier when needed.",
    },
    includes: {
      tr: [
        "Yöntem ve malzeme seçimi",
        "Adet ve maliyet planı",
        "Tedarikçi yönlendirme",
        "Seri üretime geçiş",
      ],
      en: [
        "Process and material choice",
        "Quantity and cost planning",
        "Supplier referrals",
        "Moving to production",
      ],
    },
    forWhom: {
      tr: [
        "İlk üretimine hazırlanan girişimler",
        "Maliyet düşürmek isteyen üreticiler",
        "Teklifleri karşılaştırmak isteyenler",
      ],
      en: [
        "Start-ups preparing a first run",
        "Manufacturers cutting cost",
        "Anyone comparing quotes",
      ],
    },
    steps: [
      {
        title: { tr: "Mevcut durum", en: "Where you are" },
        body: {
          tr: "Tasarım, hedef adet ve bütçe masaya yatırılır.",
          en: "Design, target quantity and budget on the table.",
        },
      },
      {
        title: { tr: "Seçenekler", en: "Options" },
        body: {
          tr: "Yöntemler artı ve eksileriyle karşılaştırılır.",
          en: "Processes compared with their pros and cons.",
        },
      },
      {
        title: { tr: "Yol haritası", en: "Roadmap" },
        body: {
          tr: "Numuneden seriye net bir plan çıkarılır.",
          en: "A clear plan from sample to series.",
        },
      },
    ],
    deliverables: {
      tr: ["Yöntem önerisi", "Üretim yol haritası", "Tedarikçi listesi (gerekirse)"],
      en: ["Process recommendation", "Production roadmap", "Supplier list (if needed)"],
    },
    faq: [
      {
        q: {
          tr: "Ürünü siz üretmeseniz de danışmanlık alabilir miyim?",
          en: "Can I get advice even if you don’t make it?",
        },
        a: {
          tr: "Evet. Bazen en doğru cevap başka bir atölye ya da fabrikadır; bunu açıkça söyleriz.",
          en: "Yes. Sometimes the right answer is another workshop or factory, and we’ll say so.",
        },
      },
      {
        q: { tr: "Görüşmeler yüz yüze mi?", en: "Do we meet in person?" },
        a: {
          tr: "Antalya'daysanız atölyede, değilseniz çevrim içi görüşüyoruz.",
          en: "In the workshop if you’re in Antalya, online otherwise.",
        },
      },
    ],
    posts: [
      "fikirden-prototipe-urun-gelistirme-sureci",
      "silikon-kalip-ve-dokum-kucuk-seri-uretim",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
