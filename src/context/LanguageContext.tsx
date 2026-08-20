import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "tr";

export const translations = {
  en: {
    nav: {
      about: "Atelier",
      services: "Services",
      projects: "Work",
      store: "STORE",
      contact: "Start a Project",
      langSwitchAria: "Switch language",
    },
    hero: {
      tag: "Design & Manufacturing Atelier",
      titleLine1: "From Idea",
      titleLine2: "to Production.",
      titleLine2Accent: "Production.",
      description: "Product Design, 3D Printing, Mold Design & Manufacturing Consulting.",
      startProject: "Start a Project",
      viewWork: "View selected work",
      imageAlt: "3D printed prototype parts and machined components produced by 100KRAFT",
    },
    about: {
      sectionIndex: "02",
      sectionTitle: "The Atelier",
      headline: "A design and manufacturing atelier — not a print shop.",
      p1: "100KRAFT sits between the drawing board and the production line. We shape products with the discipline of industrial design and the constraints of real manufacturing held in the same hand — geometry, material, tooling and cost resolved together rather than in sequence.",
      p2: "Every concept that leaves the atelier is manufacturable. We prove it in resin, filament and metal before a single mold is cut.",
      stats: [
        { value: "120+", label: "Products developed" },
        { value: "14", label: "Industries served" },
        { value: "48h", label: "Prototype turnaround" },
        { value: "0.05mm", label: "Typical tolerance" },
      ],
    },
    services: {
      sectionIndex: "03",
      sectionTitle: "Capabilities",
      subtitle: "Six disciplines, one continuous workflow. A project can enter at any point and leave as a manufacturable product.",
      items: [
        {
          id: "01",
          title: "Product Design",
          description: "Concept direction, form language, ergonomics and material strategy — resolved into a product with a point of view.",
          meta: "Concept · CMF · Ergonomics",
        },
        {
          id: "02",
          title: "3D Design",
          description: "Parametric CAD and surface modelling built to be edited, tolerance-checked and handed to production.",
          meta: "CAD · Surfacing · Assemblies",
        },
        {
          id: "03",
          title: "3D Printing",
          description: "FDM, SLA and SLS in engineering-grade materials, printed and finished in our own workshop.",
          meta: "FDM · SLA · SLS",
        },
        {
          id: "04",
          title: "Rapid Prototyping",
          description: "Fast iteration loops — looks-like, works-like and pre-production samples in days, not quarters.",
          meta: "Iteration · Fit · Function",
        },
        {
          id: "05",
          title: "Mold Design",
          description: "Injection mold design with draft, gating, cooling and ejection engineered around the part.",
          meta: "Tooling · DFM · Gating",
        },
        {
          id: "06",
          title: "Manufacturing Consulting",
          description: "Process selection, supplier evaluation and cost engineering to bring a product to volume.",
          meta: "Process · Cost · Supply",
        },
      ],
    },
    projects: {
      sectionIndex: "04",
      sectionTitle: "Selected Work",
      stages: {
        sketch: "Sketch",
        cad: "CAD",
        final: "Product",
      },
      items: [
        {
          id: "01",
          name: "PX-1 Handheld",
          sector: "Consumer Appliance",
          year: "2025",
          scope: "Product design · Prototyping · Mold design",
          story: "A cordless handheld built around a single-piece housing. We cut part count from 22 to 11, then engineered the tooling so the transparent chamber could be molded without a secondary operation.",
        },
        {
          id: "02",
          name: "Aluminium Series",
          sector: "Professional Tools",
          year: "2024",
          scope: "Industrial design · CNC · Surface finishing",
          story: "A machined instrument body developed from clay study to anodised production part, with the grip geometry validated across nine printed iterations.",
        },
        {
          id: "03",
          name: "Velora Diffuser",
          sector: "Home Product",
          year: "2024",
          scope: "3D design · Rapid prototyping · Manufacturing consulting",
          story: "Soft-touch beige housing with a copper control detail. Process selection and supplier qualification brought unit cost down 31% before the first production run.",
        },
      ],
    },
    process: {
      sectionIndex: "05",
      sectionTitle: "Process",
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
      ],
    },
    workshop: {
      sectionIndex: "06",
      sectionTitle: "The Workshop",
      headline: "A fabrication laboratory, three metres from the drawing board.",
      p1: "Design and production share one roof in Antalya. A geometry change in the morning is a part in hand by afternoon — which is why our iterations are measured in hours instead of weeks.",
      equipment: [
        ["Additive", "FDM · SLA · SLS printers"],
        ["Materials", "PA12, ASA, PC, TPU, resin, carbon-filled"],
        ["Metrology", "Calipers, gauges, 3D scanning"],
        ["Finishing", "Sanding, vapour smoothing, painting, anodising"],
      ],
    },
    expertise: {
      sectionIndex: "07",
      sectionTitle: "Manufacturing Expertise",
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
    contact: {
      sectionIndex: "08",
      sectionTitle: "Contact",
      headlinePrefix: "Tell us what you want to ",
      headlineAccent: "build.",
      contactLabel: "Contact",
      startProject: "Start a Project",
      atelierLabel: "Atelier",
      city: "Antalya, Turkey",
      description: "Working with clients across Europe and the Middle East. Send a brief, a sketch or a CAD file — we reply within two working days.",
    },
    footer: {
      tagline: "Product Design · 3D Printing · Mold Design · Manufacturing",
      backToTop: "Back to Top ↑",
      location: "Antalya, Turkey",
    },
  },
  tr: {
    nav: {
      about: "Atölye",
      services: "Hizmetler",
      projects: "Projeler",
      store: "STORE",
      contact: "Proje Başlat",
      langSwitchAria: "Dili değiştir",
    },
    hero: {
      tag: "Tasarım & Dijital Üretim Atölyesi",
      titleLine1: "Fikirden",
      titleLine2: "Üretime.",
      titleLine2Accent: "Üretime.",
      description: "Ürün Tasarımı, 3D Baskı, Kalıp Tasarımı & Üretim Danışmanlığı.",
      startProject: "Proje Başlat",
      viewWork: "Seçilmiş işleri incele",
      imageAlt: "100KRAFT tarafından üretilen 3D baskı prototip parçalar ve hassas bileşenler",
    },
    about: {
      sectionIndex: "02",
      sectionTitle: "Atölye",
      headline: "Bir tasarım ve üretim atölyesi — sıradan bir baskı merkezi değil.",
      p1: "100KRAFT, çizim masası ile üretim hattı arasında konumlanır. Ürünleri endüstriyel tasarım disiplini ve gerçek üretimin gerekliliklerini bir arada tutarak şekillendiriyoruz — geometri, malzeme, kalıplama ve maliyet sırayla değil, eş zamanlı olarak çözümlenir.",
      p2: "Atölyeden çıkan her konsept üretilebilirdir. Tek bir kalıp kesilmeden önce reçine, filament ve metal ile bunu kanıtlıyoruz.",
      stats: [
        { value: "120+", label: "Geliştirilen ürün" },
        { value: "14", label: "Hizmet verilen sektör" },
        { value: "48s", label: "Prototip teslim süresi" },
        { value: "0.05mm", label: "Tipik tolerans" },
      ],
    },
    services: {
      sectionIndex: "03",
      sectionTitle: "Yetenekler",
      subtitle: "Altı uzmanlık alanı, kesintisiz tek bir iş akışı. Bir proje herhangi bir aşamada dahil olup üretilebilir bir ürün olarak çıkabilir.",
      items: [
        {
          id: "01",
          title: "Ürün Tasarımı",
          description: "Konsept yönlendirmesi, form dili, ergonomi ve malzeme stratejisi — net bir vizyona sahip bir ürüne dönüştürülür.",
          meta: "Konsept · CMF · Ergonomi",
        },
        {
          id: "02",
          title: "3D Tasarım",
          description: "Düzenlenebilir, toleransları kontrol edilmiş ve üretime hazır parametrik CAD ve yüzey modelleme.",
          meta: "CAD · Yüzey Modelleme · Montaj",
        },
        {
          id: "03",
          title: "3D Baskı",
          description: "Kendi atölyemizde basılan ve yüzey işlemleri tamamlanan mühendislik sınıfı FDM, SLA ve SLS üretimleri.",
          meta: "FDM · SLA · SLS",
        },
        {
          id: "04",
          title: "Hızlı Prototipleme",
          description: "Hızlı iterasyon döngüleri — aylar yerine günler içinde görsel, fonksiyonel ve seri üretim öncesi numuneler.",
          meta: "İterasyon · Uyum · Fonksiyon",
        },
        {
          id: "05",
          title: "Kalıp Tasarımı",
          description: "Açı, yolluk, soğutma ve itici sistemleri parçaya özel olarak mühendisliği yapılmış enjeksiyon kalıp tasarımı.",
          meta: "Kalıplama · DFM · Yolluk",
        },
        {
          id: "06",
          title: "Üretim Danışmanlığı",
          description: "Ürünü seri üretime taşımak için süreç seçimi, tedarikçi değerlendirmesi ve maliyet mühendisliği.",
          meta: "Süreç · Maliyet · Tedarik",
        },
      ],
    },
    projects: {
      sectionIndex: "04",
      sectionTitle: "Seçilmiş İşler",
      stages: {
        sketch: "Eskiz",
        cad: "CAD",
        final: "Ürün",
      },
      items: [
        {
          id: "01",
          name: "PX-1 Handheld",
          sector: "Tüketici Cihazı",
          year: "2025",
          scope: "Ürün tasarımı · Prototipleme · Kalıp tasarımı",
          story: "Tek parça gövde etrafında inşa edilmiş kablosuz el cihazı. Parça sayısını 22'den 11'e düşürdük ve şeffaf haznenin ikincil bir işleme gerek kalmadan kalıplanabilmesi için kalıp mühendisliğini gerçekleştirdik.",
        },
        {
          id: "02",
          name: "Aluminium Series",
          sector: "Profesyonel El Aletleri",
          year: "2024",
          scope: "Endüstriyel tasarım · CNC · Yüzey işlemleri",
          story: "Kil model çalışmasından eloksallı üretim parçasına kadar geliştirilen, tutuş ergonomisi dokuz farklı 3D baskı iterasyonuyla doğrulanan işlenmiş enstrüman gövdesi.",
        },
        {
          id: "03",
          name: "Velora Diffuser",
          sector: "Ev Ürünleri",
          year: "2024",
          scope: "3D tasarım · Hızlı prototipleme · Üretim danışmanlığı",
          story: "Bakır kontrol detayına sahip soft-touch bej gövde. Süreç seçimi ve tedarikçi yeterliliği sayesinde ilk seri üretim öncesinde birim maliyet %31 oranında düşürüldü.",
        },
      ],
    },
    process: {
      sectionIndex: "05",
      sectionTitle: "Süreç",
      subtitle: "Beş aşama · kesintisiz tek bir çizgi",
      deliverablesLabel: "Çıktılar",
      steps: [
        {
          id: "01",
          title: "Keşif",
          body: "Brief, kullanıcılar, kısıtlamalar, hedef maliyet. Çizime başlamadan önce ürünün hangi koşullara dayanması gerektiğini belirliyoruz.",
          output: "Tasarım brief'i · Kıyaslama · Hedef maliyet",
        },
        {
          id: "02",
          title: "Tasarım",
          body: "Eskiz ve form keşifleri, ardından netleştirilmiş yüzeyler ve eksiksiz bir CAD montaj modeli.",
          output: "Konseptler · CMF · CAD montajı",
        },
        {
          id: "03",
          title: "Prototip",
          body: "Günler içinde atölyemizde üretilir — mühendislik malzemeleriyle görsel ve fonksiyonel numuneler.",
          output: "SLA / FDM / SLS parçalar",
        },
        {
          id: "04",
          title: "Doğrulama",
          body: "Uyum, tolerans, düşme, termal ve montaj kontrolleri. Parça kusursuz çalışana kadar iterasyonlar devam eder.",
          output: "Test raporu · Revizyon paketi",
        },
        {
          id: "05",
          title: "Üretim",
          body: "Kalıp tasarımı, tedarikçi yeterliliği ve seri üretime kadar pilot üretim gözetimi.",
          output: "Kalıp tasarımı · DFM · Pilot üretim",
        },
      ],
    },
    workshop: {
      sectionIndex: "06",
      sectionTitle: "Atölye",
      headline: "Çizim masasından üç metre mesafede bir üretim laboratuvarı.",
      p1: "Tasarım ve üretim Antalya'da aynı çatıyı paylaşıyor. Sabah yapılan bir geometri değişikliği öğleden sonra elde tutulan bir parçaya dönüşüyor — bu yüzden iterasyonlarımız haftalarla değil, saatlerle ölçülür.",
      equipment: [
        ["Katmanlı Üretim", "FDM · SLA · SLS yazıcılar"],
        ["Malzemeler", "PA12, ASA, PC, TPU, reçine, karbon takviyeli"],
        ["Metroloji", "Kumpaslar, mastarlar, 3D tarama"],
        ["Yüzey İşlemleri", "Zımparalama, buharla pürüzsüzleştirme, boyama, eloksal"],
      ],
    },
    expertise: {
      sectionIndex: "07",
      sectionTitle: "Üretim Uzmanlığı",
      headline: "Üretim hattında ayakta kalan tasarım kararları.",
      items: [
        {
          title: "Enjeksiyon Kalıplama",
          body: "Çelik işlenmeden önce çekme, et kalınlığı, kalıp açısı, yolluk ve soğutma kanalları parçayla birlikte tasarlanır.",
        },
        {
          title: "Üretim Optimizasyonu",
          body: "Algılanan kaliteden ödün vermeden birim maliyeti düşürmek için döngü süresi, parça birleştirme ve süreç seçimi hacme göre optimize edilir.",
        },
        {
          title: "Ürün Geliştirme",
          body: "Brief'ten pilot üretime kadar tedarikçi kalifikasyonu, numune onayı ve üretim dokümantasyonu dahil uçtan uca yönetim.",
        },
      ],
    },
    contact: {
      sectionIndex: "08",
      sectionTitle: "İletişim",
      headlinePrefix: "Ne inşa etmek istediğinizi ",
      headlineAccent: "anlatın.",
      contactLabel: "İletişim",
      startProject: "Proje Başlat",
      atelierLabel: "Atölye",
      city: "Antalya, Türkiye",
      description: "Avrupa ve Orta Doğu'daki müşterilerle çalışıyoruz. Bir brief, eskiz veya CAD dosyası gönderin — iki iş günü içinde dönüş yapalım.",
    },
    footer: {
      tagline: "Ürün Tasarımı · 3D Baskı · Kalıp Tasarımı · Üretim",
      backToTop: "Başa Dön ↑",
      location: "Antalya, Türkiye",
    },
  },
};

export type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("100kraft_lang") as Language | null;
      if (savedLang === "en" || savedLang === "tr") {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "tr") {
          setLanguageState("tr");
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("100kraft_lang", lang);
    } catch {
      // ignore
    }
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
