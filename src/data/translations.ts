export type Language = "en" | "tr";

export const siteContent = {
  en: {
    nav: {
      atelier: "Atelier",
      services: "Services",
      work: "Work",
      store: "STORE",
      startProject: "Start a Project",
      contact: "Contact",
    },
    hero: {
      badge: "Design & Manufacturing Atelier",
      h1Line1: "From Idea",
      h1Line2: "to ",
      h1Highlight: "Production.",
      subtext: "Product Design, 3D Printing, Mold Design & Manufacturing Consulting.",
      cta: "Start a Project",
      secondaryCta: "View selected work",
    },
    atelier: {
      index: "02",
      label: "The Atelier",
      headline: "A design and manufacturing atelier — not a print shop.",
      p1: "100KRAFT sits between the drawing board and the production line. We shape products with the discipline of industrial design and the constraints of real manufacturing held in the same hand — geometry, material, tooling and cost resolved together rather than in sequence.",
      p2: "Every concept that leaves the atelier is manufacturable. We prove it in resin, filament and metal before a single mold is cut.",
      stats: [
        { value: "120+", label: "Products developed", note: "Across client engagements" },
        { value: "14", label: "Industries served", note: "Consumer, medical, industrial" },
        { value: "48h", label: "Prototype turnaround", note: "Typical in-house iteration loop" },
        {
          value: "0.05mm",
          label: "Typical tolerance",
          note: "For precision additive / CNC tooling",
        },
      ],
    },
    servicesSection: {
      index: "03",
      label: "Capabilities",
      headline: "Six disciplines, one continuous workflow.",
      subtext: "A project can enter at any point and leave as a manufacturable product.",
      viewService: "Explore Service",
      allServices: "All Capabilities",
    },
    projectsSection: {
      index: "04",
      label: "Selected Work",
      viewCaseStudy: "View Case Study →",
      allWork: "All Selected Work",
    },
    processSection: {
      index: "05",
      label: "Process",
      subtitle: "Five stages · one continuous line",
      deliverablesLabel: "Deliverables",
      steps: [
        {
          id: "01",
          title: "Discover",
          body: "Brief, users, constraints, target cost. We define what the product must survive before we draw it.",
          output: "Design brief · Benchmark · Cost target",
        },
        {
          id: "02",
          title: "Design",
          body: "Form exploration and ergonomic studies, resolved into high-precision CAD and assembly architecture.",
          output: "Concepts · CMF · CAD assembly",
        },
        {
          id: "03",
          title: "Prototype",
          body: "Printed in-house in hours — engineering-grade functional and aesthetic parts for real-world testing.",
          output: "SLA / FDM / SLS functional parts",
        },
        {
          id: "04",
          title: "Validate",
          body: "Clearance, drop, thermal, and fit checks. We cycle through revisions until every tolerance is locked.",
          output: "Test reports · Revision loops",
        },
        {
          id: "05",
          title: "Manufacture",
          body: "Injection mold layout, tooling DFM, supplier vetting, and pilot production oversight.",
          output: "Mold design · DFM · Pilot run",
        },
      ],
    },
    workshopSection: {
      index: "06",
      label: "The Workshop",
      headline: "A fabrication laboratory, three metres from the drawing board.",
      p1: "Design and production share one roof in Antalya. A geometry change in the morning is a part in hand by afternoon — which is why our iterations are measured in hours instead of weeks.",
      equipment: [
        { label: "Additive", detail: "FDM · SLA · SLS printers" },
        { label: "Materials", detail: "PA12, ASA, PC, TPU, resin, carbon-filled" },
        { label: "Metrology", detail: "Calipers, bore gauges, 3D scanning" },
        { label: "Finishing", detail: "Sanding, vapour smoothing, painting, anodising" },
      ],
    },
    expertiseSection: {
      index: "07",
      label: "Manufacturing Expertise",
      headline: "Design decisions that survive the production line.",
      items: [
        {
          title: "Injection Molding",
          body: "Tool layout, gating and cooling designed with the part, plus draft, shrinkage and wall-thickness resolved before steel is cut.",
        },
        {
          title: "Manufacturing Optimization",
          body: "Cycle-time, part consolidation and process selection reviewed against volume so unit cost falls without touching perceived quality.",
        },
        {
          title: "Product Development",
          body: "End-to-end ownership from brief to pilot run, including supplier qualification, sample approval and production documentation.",
        },
      ],
    },
    contactSection: {
      index: "08",
      label: "Contact",
      headlinePrefix: "Tell us what you want to ",
      headlineAccent: "build.",
      emailLabel: "Contact",
      startProjectCta: "Start a Project",
      atelierLabel: "Atelier",
      location: "Antalya, Turkey",
      coordinates: "36.8969° N, 30.7133° E",
      description:
        "Working with clients across Europe and the Middle East. Send a brief, a sketch or a CAD file — we reply within two working days.",
    },
    footer: {
      tagline: "Product Design · 3D Printing · Mold Design · Manufacturing",
      rights: "Antalya, Turkey",
      backToTop: "Back to Top ↑",
      grainzAttribution: "A COMPANY BY",
    },
  },
  tr: {
    nav: {
      atelier: "Atölye",
      services: "Hizmetler",
      work: "İşler",
      store: "MAĞAZA",
      startProject: "Proje Başlat",
      contact: "İletişim",
    },
    hero: {
      badge: "ANTALYA · TASARIM VE ÜRETİM ATÖLYESİ",
      h1Line1: "Fikirden",
      h1Line2: "Montaj ",
      h1Highlight: "Masasına.",
      subtext:
        "Endüstriyel ürün tasarımı, hızlı prototipleme, kalıp mühendisliği ve düşük adetli üretim. Sadece ekranda değil; tezgâhta üretilen, elde çalışan ürünler geliştiriyoruz.",
      cta: "Proje Başlat",
      secondaryCta: "Üretilen İşleri İncele",
    },
    atelier: {
      index: "02",
      label: "Atölye Yaklaşımı",
      headline: "3D baskı servisi değil; malzeme, kalıp ve mekanik bilen bir üretim atölyesiyiz.",
      p1: "Tasarımı üretimden ayrı tutmuyoruz. Ekranda çizilen her detay atölyede doğrudan test edilir: Kalıp ayırma hatları, et kalınlığı, çekme payı, montaj toleransı ve birim maliyet. Parçanın nasıl üretileceğini ilk eskiz aşamasında hesaba katarız.",
      p2: "Kalıp çeliği işletmeden önce tasarımı kendi atölyemizde prototipliyor, fonksiyonel testlerini yapıyor ve seri üretime sorunsuz geçecek şekilde teslim ediyoruz.",
      stats: [
        {
          value: "120+",
          label: "Geliştirilen Ürün & Parça",
          note: "Fiziksel prototipler ve nihai üretim parçaları",
        },
        {
          value: "48s",
          label: "İlk Fonksiyonel Prototip",
          note: "Atölye içi hızlı iterasyon ve test döngüsü",
        },
        {
          value: "0.05mm",
          label: "Mekanik Tolerans",
          note: "Hassas reçine, FDM ve kalıp eşleşmeleri",
        },
        {
          value: "6",
          label: "Yetkinlik Alanı",
          note: "Tasarım, prototip, kalıp ve montaj tek çatıda",
        },
      ],
    },
    servicesSection: {
      index: "03",
      label: "Disiplinler",
      headline: "Fikirden nihai ürüne kesintisiz hat.",
      subtext:
        "İster peçete eskiziyle gelin, ister üretim öncesi son kalıp aşamasında. Sürece doğrudan atölye pratiğiyle dahil oluruz.",
      viewService: "Hizmeti İncele",
      allServices: "Tüm Yetkinlikler",
    },
    projectsSection: {
      index: "04",
      label: "Seçilmiş İşler",
      viewCaseStudy: "Üretim Hikayesini İncele →",
      allWork: "Tüm Seçilmiş İşler",
    },
    processSection: {
      index: "05",
      label: "Çalışma Şekli",
      subtitle: "Beş aşama · tezgâhtan geçen net süreç",
      deliverablesLabel: "Teslim Edilenler",
      steps: [
        {
          id: "01",
          title: "Keşif & Fizibilite",
          body: "Ürünün çalışacağı ortam, mekanik zorlamalar, malzeme seçimi ve hedef adetler masaya yatırılır. Çizime başlamadan önce ürünün gerçek kısıtlamalarını belirleriz.",
          output: "Tasarım şartnamesi · Malzeme seçimi · Hedef parça maliyeti",
        },
        {
          id: "02",
          title: "CAD & Mekanik Tasarım",
          body: "Form ve ergonomi çalışmaları, üretime uygun (DFM) parametrik CAD montaj modeline dönüştürülür.",
          output: "3D CAD montajı · STEP/Parasolid modeller · CMF dokümanı",
        },
        {
          id: "03",
          title: "Hızlı Prototipleme",
          body: "Saatler içinde kendi yazıcılarımız ve işleme tezgahlarımızla çalışan fonksiyonel modeller üretiriz.",
          output: "FDM / SLA / SLS mekanik prototipler",
        },
        {
          id: "04",
          title: "Test & Fonksiyon Doğrulama",
          body: "Geçme boşlukları, vida yuvaları, yük testleri ve montaj ergonomisi sahada test edilir. Hatalar kalıba girmeden elenir.",
          output: "Test raporu · Tolerans doğrulaması · Revizyon döngüsü",
        },
        {
          id: "05",
          title: "Kalıp & Düşük Adetli Üretim",
          body: "Enjeksiyon kalıp tasarımı, silikon döküm veya doğrudan atölyede küçük seri üretimle ilk partiyi teslim ederiz.",
          output: "Kalıp verisi · DFM onayı · İlk parti ürün teslimi",
        },
      ],
    },
    workshopSection: {
      index: "06",
      label: "Atölye Altyapısı",
      headline: "Çizim masasından bir adım ötede üretim tezgâhları.",
      p1: "Tasarım ofisimiz ve atölyemiz Antalya'da aynı alanda. Sabah bilgisayarda değiştirilen bir vida yuvası veya et kalınlığı, öğleden sonra elde tutulan çalışan bir numuneye dönüşür. Bu yüzden iterasyonlarımız haftalarla değil, saatlerle ilerler.",
      equipment: [
        {
          label: "Katmanlı Üretim",
          detail: "Endüstriyel FDM, yüksek çözünürlüklü SLA ve SLS sistemleri",
        },
        {
          label: "Mühendislik Malzemeleri",
          detail: "PA12, Karbon Takviyeli Naylon, PC, ASA, TPU, Teknik Reçine, Döküm Beton",
        },
        {
          label: "Ölçüm & Metroloji",
          detail: "Hassas kumpaslar, mikrometreler ve 3D optik tarama",
        },
        {
          label: "Yüzey & Son İşlem",
          detail: "Kumlama, buharla pürüzsüzleştirme, eloksal, boya ve montaj",
        },
      ],
    },
    expertiseSection: {
      index: "07",
      label: "Üretim Bilgisi",
      headline: "Sahada ve tezgâhta çalışan tasarım kararları.",
      items: [
        {
          title: "Enjeksiyon Kalıp Tasarımı",
          body: "Çelik işlenmeden önce kalıp açısı, maça hareketleri, yolluk girişleri ve çekme payları parçayla birlikte çözülür.",
        },
        {
          title: "Üretilebilirlik Analizi (DFM)",
          body: "Montaj kolaylığı sağlamak, parça birleştirmek ve birim maliyeti düşürmek için her detay üretim yöntemine göre optimize edilir.",
        },
        {
          title: "Uçtan Uca Ürün Geliştirme",
          body: "Tasarımından malzeme seçimine, prototipten kalıba kadar tüm üretim sürecini tek elden yönetiyoruz.",
        },
      ],
    },
    contactSection: {
      index: "08",
      label: "İletişim",
      headlinePrefix: "Aklınızdaki ürünü ",
      headlineAccent: "birlikte konuşalım.",
      emailLabel: "E-posta",
      startProjectCta: "Proje Başlat",
      atelierLabel: "Atölye",
      location: "Antalya, Türkiye",
      coordinates: "36.8969° N, 30.7133° E",
      description:
        "Fikrinizi, eskizinizi veya CAD dosyanızı iletin. Üretim fizibilitesini ve yol haritasını değerlendirip 2 iş günü içinde dönüş yapalım.",
    },
    footer: {
      tagline: "Endüstriyel Ürün Tasarımı · Fonksiyonel Prototipleme · Kalıp Mühendisliği · Üretim",
      rights: "Antalya, Türkiye",
      backToTop: "Başa Dön ↑",
      grainzAttribution: "A COMPANY BY",
    },
  },
};
