export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleTr: string;
  shortDesc: string;
  shortDescTr: string;
  tagline: string;
  taglineTr: string;
  meta: string;
  metaTr: string;
  overview: string;
  overviewTr: string;
  problemsSolved: string[];
  problemsSolvedTr: string[];
  workflow: { step: string; stepTr: string; desc: string; descTr: string }[];
  capabilities: string[];
  capabilitiesTr: string[];
  materials?: string[];
  relatedProjects: string[];
}

export const services: ServiceItem[] = [
  {
    id: "01",
    slug: "product-design",
    number: "01",
    title: "Product Design",
    titleTr: "Ürün Tasarımı",
    shortDesc:
      "Concept direction, form language, ergonomics and material strategy — resolved into a physical product with a point of view.",
    shortDescTr:
      "Konsept yönü, form dili, ergonomi ve malzeme stratejisi — duruşu olan bir ürüne dönüştürülür.",
    tagline: "Concept · CMF · Ergonomics · Manufacturability",
    taglineTr: "Konsept · CMF · Ergonomi · Üretilebilirlik",
    meta: "Concept · CMF · Ergonomics",
    metaTr: "Konsept · CMF · Ergonomi",
    overview:
      "At 100KRAFT, product design does not stop at surface sketches. We design products from the core mechanical packaging outwards. Geometry, user interaction, ergonomics, parting lines, and material constraints are balanced simultaneously so the concept that gets approved is the exact product that enters production.",
    overviewTr:
      "100KRAFT'ta ürün tasarımı sadece yüzey eskizleriyle sınırlı kalmaz. Ürünleri mekanik yerleşimden dış kabuğa doğru tasarlarız. Geometri, kullanıcı etkileşimi, ergonomi, kalıp ayırma çizgileri ve malzeme kısıtlamaları eşzamanlı çözülür; böylece onaylanan konsept, üretime giren ürünle birebir örtüşür.",
    problemsSolved: [
      "Translating ambiguous product ideas into production-ready physical form",
      "Ergonomic fit, hand-feel, and user interface ergonomics",
      "CMF (Color, Material, Finish) specification matching real-world durability requirements",
      "Consolidating assemblies to minimize component count before tooling",
    ],
    problemsSolvedTr: [
      "Fikir aşamasındaki ürünleri üretime hazır fiziksel forma dönüştürme",
      "Ergonomik tutuş, kullanıcı hissi ve arayüz ergonomisi",
      "Gerçek kullanım koşullarına uygun CMF (Renk, Malzeme, Doku) spesifikasyonu",
      "Kalıp öncesinde parça sayısını düşürmek için montaj optimizasyonu",
    ],
    workflow: [
      {
        step: "Design Research & Brief",
        stepTr: "Tasarım Araştırması ve Brief",
        desc: "Define user constraints, internal electronics envelope, target unit cost, and mechanical boundaries.",
        descTr:
          "Kullanıcı kısıtları, dahili elektronik hacim, hedef birim maliyet ve mekanik sınırlar belirlenir.",
      },
      {
        step: "Form Exploration & Ideation",
        stepTr: "Form Keşfi ve İdeasyon",
        desc: "Rapid sketching, proportion studies, and volumetric foam/print mockups for ergonomic validation.",
        descTr:
          "Hızlı eskizler, oran çalışmaları ve ergonomi doğrulaması için hacimsel prototipler.",
      },
      {
        step: "CMF & Detail Resolution",
        stepTr: "CMF ve Detay Çözümü",
        desc: "Textures, draft considerations, parting lines, display integration, and fastener planning.",
        descTr:
          "Doku, kalıp açısı, ayrım çizgileri, ekran entegrasyonu ve bağlantı detayları netleştirilir.",
      },
      {
        step: "Engineering Hand-off",
        stepTr: "Mühendislik Teslimi",
        desc: "Surfaces exported directly into parametric CAD for mechanical detail design and tooling.",
        descTr:
          "Yüzeyler, mekanik detay tasarımı ve kalıplama için doğrudan parametrik CAD ortamına aktarılır.",
      },
    ],
    capabilities: [
      "Industrial Design Ideation",
      "Class-A Surfacing",
      "CMF Specifications",
      "Ergonomic Mockups & Testing",
      "Packaging & Mechanical Enveloping",
    ],
    capabilitiesTr: [
      "Endüstriyel Tasarım İdeasyonu",
      "Class-A Yüzey Modelleme",
      "CMF Spesifikasyonları",
      "Ergonomik Mockup ve Testler",
      "Paketleme ve Mekanik Hacim Yerleşimi",
    ],
    materials: ["Engineering Polymers", "Anodized Aluminum", "Silicone & TPU", "Sheet Metal"],
    relatedProjects: ["px-1-handheld", "aluminium-series"],
  },
  {
    id: "02",
    slug: "3d-design-cad",
    number: "02",
    title: "3D Design & CAD",
    titleTr: "3D Tasarım & CAD",
    shortDesc:
      "Parametric CAD and surface modelling built to be edited, tolerance-checked, and handed directly to production.",
    shortDescTr:
      "Düzenlenebilir, toleransları kontrol edilmiş ve doğrudan üretime aktarılmaya hazır parametrik CAD ve yüzey modelleme.",
    tagline: "Parametric CAD · Surfacing · GD&T · Assemblies",
    taglineTr: "Parametrik CAD · Yüzey Modelleme · GD&T · Montajlar",
    meta: "CAD · Surfacing · Assemblies",
    metaTr: "CAD · Yüzey Modelleme · Montaj",
    overview:
      "Robust digital engineering is the backbone of physical manufacturing. We build master parametric CAD assemblies where parts fit with calculated clearances, thermal expansion is accounted for, and tooling draft angles are engineered into the solid body from day one.",
    overviewTr:
      "Güçlü dijital mühendislik, fiziksel üretimin omurgasıdır. Parçaların hesaplanmış toleranslarla birleştiği, termal genleşmenin hesaba katıldığı ve kalıp açılarının ilk günden gövdeye işlendiği ana parametrik CAD montajları inşa ediyoruz.",
    problemsSolved: [
      "Rigid, un-editable CAD files converted to clean parametric feature trees",
      "Draft angle analysis, undercut elimination, and wall-thickness uniformity",
      "Complex mechanical linkages, snap-fits, and hinge mechanisms",
      "GD&T (Geometric Dimensioning & Tolerancing) for CNC and molding inspection",
    ],
    problemsSolvedTr: [
      "Düzenlenemeyen CAD modellerinin temiz parametrik ağaçlara dönüştürülmesi",
      "Kalıp açısı analizi, ters açıların giderilmesi ve et kalınlığı homojenliği",
      "Karmaşık mekanik mafsallar, tırnaklı kilitler ve menteşe mekanizmaları",
      "CNC ve kalıp kontrolü için GD&T geometrik boyutlandırma ve toleranslandırma",
    ],
    workflow: [
      {
        step: "Internal Architecture",
        stepTr: "İç Mimari & Paketleme",
        desc: "Arrange PCB, batteries, actuators, and structural ribs inside coordinate space.",
        descTr: "PCB, batarya, motor ve yapısal federler koordinat sisteminde yerleştirilir.",
      },
      {
        step: "Parametric Solid Modeling",
        stepTr: "Parametrik Katı Modelleme",
        desc: "Feature-based modeling allowing immediate parametric adjustments during prototyping.",
        descTr: "Prototipleme sırasında anlık değişikliklere olanak tanıyan parametrik modelleme.",
      },
      {
        step: "Tolerance Stack-up Analysis",
        stepTr: "Tolerans Birikim Analizi",
        desc: "Worst-case and statistical clearance verification across multi-part assemblies.",
        descTr: "Çok parçalı montajlarda en kötü senaryo ve istatistiksel boşluk doğrulaması.",
      },
      {
        step: "Production 2D Drawings",
        stepTr: "Üretim Teknik Resimleri",
        desc: "Dimensioned drawings with datum references, surface finish symbols, and fit tolerances.",
        descTr:
          "Referans düzlemleri, yüzey pürüzlülük sembolleri ve geçme toleransları içeren teknik resimler.",
      },
    ],
    capabilities: [
      "Parametric Solid & Surface CAD",
      "Snap-fit & Threaded Boss Design",
      "Tolerance Stack-Up Calculations",
      "STEP / IGES Production Packages",
      "Assembly Drawings with GD&T",
    ],
    capabilitiesTr: [
      "Parametrik Katı ve Yüzey CAD",
      "Tırnaklı Geçme ve Vidalı Kovan Tasarımı",
      "Tolerans Birikim Hesaplamaları",
      "STEP / IGES Üretim Paketleri",
      "GD&T İçeren Montaj Teknik Resimleri",
    ],
    materials: ["Polymers (ABS, PC, POM)", "Metals (6061/7075-T6, Stainless)", "Die-cast Alloys"],
    relatedProjects: ["px-1-handheld", "aluminium-series", "velora-diffuser"],
  },
  {
    id: "03",
    slug: "3d-printing",
    number: "03",
    title: "3D Printing & Additive",
    titleTr: "3D Baskı & Katmanlı İmalat",
    shortDesc:
      "FDM, SLA, and SLS in engineering-grade materials, printed, cured, and finished in our own Antalya atelier.",
    shortDescTr:
      "Kendi Antalya atölyemizde basılan, fırınlanan ve yüzey işlemleri tamamlanan mühendislik sınıfı FDM, SLA ve SLS üretimleri.",
    tagline: "FDM · SLA · SLS · Engineering Resins & Filaments",
    taglineTr: "FDM · SLA · SLS · Mühendislik Reçineleri & Filamentler",
    meta: "FDM · SLA · SLS",
    metaTr: "FDM · SLA · SLS",
    overview:
      "We operate an in-house fabrication workshop three meters from our design desks. From high-detail SLA for clear optical chambers and snap-fits, to carbon-reinforced PA12 for functional test rigs, our additive capabilities eliminate the delay of outsourcing.",
    overviewTr:
      "Tasarım masalarımızdan üç metre mesafede kendi üretim atölyemizi işletiyoruz. Optik parçalar ve tırnaklı montajlar için yüksek detaylı SLA'dan, fonksiyonel test aparatları için karbon takviyeli PA12'ye kadar eklemeli imalat kapasitemiz dışa bağımlılığı ve gecikmeleri ortadan kaldırır.",
    problemsSolved: [
      "Fast functional validation without investing in hard tooling",
      "Direct testing of mechanical engagement, click feel, and thread engagement",
      "Low-volume end-use functional enclosures and production brackets",
      "Overnight turnaround of design modifications in physical hand",
    ],
    problemsSolvedTr: [
      "Kalıp yatırımı yapmadan hızlı fonksiyonel doğrulama",
      "Mekanik geçmelerin, klik hissiyatının ve vida adımlarının doğrudan testi",
      "Düşük adetli nihai kullanım muhafazaları ve montaj braketleri",
      "Tasarım revizyonlarının ertesi gün fiziksel olarak elde incelenmesi",
    ],
    workflow: [
      {
        step: "DFAM Optimization",
        stepTr: "Katmanlı İmalat Uyarlaması (DFAM)",
        desc: "Orient parts to align layer strength with mechanical stress vectors and eliminate support scars on critical faces.",
        descTr:
          "Katman mukavemetini mekanik gerilme yönleriyle hizalamak ve kritik yüzeylerde destek izlerini önlemek için parça yönlendirmesi.",
      },
      {
        step: "Additive Execution",
        stepTr: "Üretim",
        desc: "Printed using calibrated industrial parameters in controlled temperature and humidity environments.",
        descTr:
          "Sıcaklık ve nem kontrollü ortamda, kalibre edilmiş endüstriyel parametrelerle baskı.",
      },
      {
        step: "Post-Processing & Curing",
        stepTr: "Yüzey İşlemi & Kürleme",
        desc: "Solvent washing, UV post-cure, support de-burring, and thread insert heat-staking.",
        descTr:
          "Solvent yıkama, UV kürleme, destek temizliği ve pirinç insertlerin ısıyla çakılması.",
      },
      {
        step: "Metrology & Verification",
        stepTr: "Metroloji ve Kontrol",
        desc: "Calipers, bore gauges, and optical verification to verify critical tolerances against CAD.",
        descTr:
          "Kritik toleransların CAD modeliyle karşılaştırılması için kumpas ve optik kontroller.",
      },
    ],
    capabilities: [
      "High-Resolution SLA (Rigid, Tough, High-Temp, Clear)",
      "Industrial FDM (ASA, PC, PETG, TPU, PA-CF)",
      "SLS Nylon (PA12)",
      "Heat-set Thread Inserts",
      "Vapor Smoothing & Sanding",
    ],
    capabilitiesTr: [
      "Yüksek Çözünürlüklü SLA (Rigid, Tough, Yüksek Isı, Şeffaf)",
      "Endüstriyel FDM (ASA, PC, PETG, TPU, Karbon PA)",
      "SLS Naylon (PA12)",
      "Isıl Çakma Pirinç Somunlar (Inserts)",
      "Buharla Pürüzsüzleştirme ve Zımpara",
    ],
    materials: ["PA12-CF", "Polycarbonate (PC)", "ASA / ABS", "Engineering Resins", "TPU 95A"],
    relatedProjects: ["px-1-handheld", "velora-diffuser"],
  },
  {
    id: "04",
    slug: "rapid-prototyping",
    number: "04",
    title: "Rapid Prototyping",
    titleTr: "Hızlı Prototipleme",
    shortDesc:
      "Fast iteration loops — looks-like, works-like, and pre-production samples in days, not quarters.",
    shortDescTr:
      "Hızlı iterasyon döngüleri — aylar yerine günler içinde görsel, fonksiyonel ve seri üretim öncesi numuneler.",
    tagline: "Looks-Like · Works-Like · Pre-Production Validation",
    taglineTr: "Görsel Numune · Fonksiyonel Numune · Seri Öncesi Doğrulama",
    meta: "Iteration · Fit · Function",
    metaTr: "İterasyon · Uyum · Fonksiyon",
    overview:
      "Prototyping is not a validation checkpoint at the end of a project; it is our primary design method. We build physical artifacts continuously to reveal mechanical clashes, ergonomic discomfort, and acoustic resonance before commitments are cast in steel.",
    overviewTr:
      "Prototipleme projenin sonundaki bir kontrol noktası değil, temel tasarım yöntemimizdir. Mekanik çakışmaları, ergonomik rahatsızlıkları ve akustik rezonansları kalıp çeliği işlenmeden önce açığa çıkarmak için sürekli fiziksel modeller üretiriz.",
    problemsSolved: [
      "Catching assembly interference before tooling commits",
      "Validating weight balance, grip contours, and tactile switches in real hands",
      "Pre-compliance drop, fit, and thermal testing",
      "Realistic visual models for investor presentations and user testing",
    ],
    problemsSolvedTr: [
      "Kalıp yatırımı öncesi montaj çakışmalarının yakalanması",
      "Ağırlık dengesi, tutuş konturları ve buton hissiyatının gerçek elle doğrulanması",
      "Düşme, geçme ve termal ön testlerin yapılması",
      "Yatırımcı sunumları ve kullanıcı testleri için gerçekçi görsel modeller",
    ],
    workflow: [
      {
        step: "Looks-Like Prototypes",
        stepTr: "Görsel (Looks-Like) Modeller",
        desc: "Color, texture, weight, and surface fidelity matching the intended mass-production aesthetic.",
        descTr:
          "Seri üretim estetiğini yansıtan renk, doku, ağırlık ve yüzey hassasiyetinde modeller.",
      },
      {
        step: "Works-Like Prototypes",
        stepTr: "Fonksiyonel (Works-Like) Modeller",
        desc: "Internal drive mechanisms, snap-fits, electronics, and battery run-time verification.",
        descTr:
          "Mekanizma, tırnaklı kilitler, elektronik bileşenler ve pil çalışma sürelerinin doğrulanması.",
      },
      {
        step: "Multi-Material Assemblies",
        stepTr: "Çok Malzemeli Montajlar",
        desc: "Combining rigid frames with soft-touch overmolds, gaskets, and machined fasteners.",
        descTr:
          "Sert gövdeleri yumuşak contalar, overmold yüzeyler ve işlenmiş bağlantı elemanlarıyla birleştirme.",
      },
      {
        step: "Iteration Feedback Loop",
        stepTr: "İterasyon Geri Besleme Döngüsü",
        desc: "Measurements fed immediately back into CAD for the next print cycle within 24–48 hours.",
        descTr:
          "Elde edilen ölçümlerin 24-48 saat içinde bir sonraki baskı için CAD'e aktarılması.",
      },
    ],
    capabilities: [
      "Physical Ergonomic Mockups",
      "Functional Mechanical Assemblies",
      "Painted & Textured Aesthetic Samples",
      "Drop & Clearance Testing",
      "Fast 48-hour Turnaround",
    ],
    capabilitiesTr: [
      "Fiziksel Ergonomi Modelleri",
      "Fonksiyonel Mekanik Montajlar",
      "Boyalı ve Dokulandırılmış Estetik Numuneler",
      "Düşme ve Geçme Testleri",
      "48 Saatlik Hızlı İterasyon Döngüsü",
    ],
    materials: ["Functional Polymers", "Machined Metals", "Elastomers", "Acrylic & Optical Parts"],
    relatedProjects: ["px-1-handheld", "aluminium-series", "velora-diffuser"],
  },
  {
    id: "05",
    slug: "mold-design",
    number: "05",
    title: "Mold Design & Tooling",
    titleTr: "Kalıp Tasarımı & Tooling",
    shortDesc:
      "Injection mold design with draft, gating, cooling, and ejection engineered around the part geometry.",
    shortDescTr:
      "Açı, yolluk, soğutma ve itici sistemleri parçaya özel olarak mühendisliği yapılmış enjeksiyon kalıp tasarımı.",
    tagline: "Tool Layout · Gating · Cooling Channels · DFM",
    taglineTr: "Kalıp Yerleşimi · Yolluk · Soğutma Kanalları · DFM",
    meta: "Tooling · DFM · Gating",
    metaTr: "Kalıplama · DFM · Yolluk",
    overview:
      "A great part design is useless if the tool cannot run reliably at cycle. We engineer injection mold layouts, side actions, slides, sub-gates, and cooling circuits before steel cutting begins, preventing costly tool modifications and warranty sinkholes.",
    overviewTr:
      "Kalıbı seri üretim çevrim süresinde sorunsuz çalışmayan bir parça tasarımı eksiktir. Çelik işlenmeden önce enjeksiyon kalıp yerleşimlerini, maça mekanizmalarını, yollukları ve soğutma kanallarını tasarlayarak maliyetli kalıp revizyonlarını önlüyoruz.",
    problemsSolved: [
      "Sink marks, weld lines, and warpage eliminated through wall thickness optimization",
      "Parting line placement aligned with aesthetic split lines",
      "Side action and lifter planning for complex internal undercuts",
      "Balancing runner and gate sizes for uniform cavity filling",
    ],
    problemsSolvedTr: [
      "Et kalınlığı optimizasyonuyla çöküntü, birleşme izi ve çarpılmaların önlenmesi",
      "Kalıp ayrım çizgisinin ürünün estetik hatlarıyla gizlenmesi",
      "İç ters açılar için maça ve itici mekanizmalarının planlanması",
      "Homojen dolum için yolluk ve giriş ölçülerinin dengelenmesi",
    ],
    workflow: [
      {
        step: "DFM Audit",
        stepTr: "DFM Denetimi",
        desc: "Draft angle map, thickness gradient scan, and undercut analysis on final part CAD.",
        descTr: "Kalıp açısı haritası, et kalınlığı geçiş analizi ve ters açı taraması.",
      },
      {
        step: "Cavity & Core Split",
        stepTr: "Erkek-Dişi Ayrımı",
        desc: "Generate clean shut-offs and parting surfaces matching the parting line.",
        descTr: "Kalıp ayrım çizgisine uygun temiz kapama yüzeyleri ve çekirdek ayrımı.",
      },
      {
        step: "Gating & Ejection Strategy",
        stepTr: "Yolluk ve İtici Stratejisi",
        desc: "Submarine gates, edge gates, pin/blade ejectors positioned away from cosmetic faces.",
        descTr: "Görsel yüzeylerden uzakta konumlandırılan tünel yolluklar ve itici pim yerleşimi.",
      },
      {
        step: "Tooling Package Release",
        stepTr: "Kalıp Üretim Paketi",
        desc: "Full 3D mold layout with BOM, steel grades, and critical machining tolerances for moldmakers.",
        descTr:
          "Kalıpçılar için parça listesi, çelik kaliteleri ve işleme toleranslarını içeren 3D kalıp seti.",
      },
    ],
    capabilities: [
      "Injection Mold 3D Tooling Design",
      "Slider & Lifter Kinematics",
      "Conformal & Baffled Cooling Layouts",
      "Draft Angle & Thickness Analysis",
      "Toolmaker DFM Packages",
    ],
    capabilitiesTr: [
      "Enjeksiyon Kalıp 3D Tasarımı",
      "Maça ve İtici Kinematik Tasarımı",
      "Soğutma Kanalı Yerleşimi",
      "Açı ve Et Kalınlığı Analizleri",
      "Kalıpçı DFM İmalat Paketleri",
    ],
    materials: [
      "Tool Steels (P20, H13, S136)",
      "Beryllium Copper Inserts",
      "Aluminium Tooling (7075)",
    ],
    relatedProjects: ["px-1-handheld"],
  },
  {
    id: "06",
    slug: "manufacturing-consulting",
    number: "06",
    title: "Manufacturing Consulting",
    titleTr: "Üretim Danışmanlığı",
    shortDesc:
      "Process selection, supplier evaluation, and cost engineering to scale your hardware product to volume.",
    shortDescTr:
      "Ürünü seri üretime taşımak için süreç seçimi, tedarikçi değerlendirmesi ve maliyet mühendisliği.",
    tagline: "Process Selection · Cost Engineering · Supplier Audits",
    taglineTr: "Süreç Seçimi · Maliyet Mühendisliği · Tedarikçi Denetimi",
    meta: "Process · Cost · Supply",
    metaTr: "Süreç · Maliyet · Tedarik",
    overview:
      "Bridging the gulf between the prototype atelier and high-volume mass production. We advise on manufacturing process tradeoffs (CNC vs. Die Casting vs. Injection Molding), evaluate supplier quotes, and negotiate tolerances so quality remains high while BOM costs drop.",
    overviewTr:
      "Prototip atölyesi ile seri üretim hattı arasındaki köprüyü kuruyoruz. Üretim yöntemi seçiminde (CNC vs. Basınçlı Döküm vs. Enjeksiyon), tedarikçi teklif değerlendirmelerinde ve tolerans müzakerelerinde rehberlik ederek maliyetleri düşürürken kaliteyi koruyoruz.",
    problemsSolved: [
      "Determining optimal break-even volume for tooling investments",
      "Reducing unit BOM cost without compromising surface finish or structural integrity",
      "Supplier qualification and on-site production audits in Turkey and internationally",
      "Establishing quality control criteria and inspection jigs",
    ],
    problemsSolvedTr: [
      "Kalıp yatırımı için başa baş üretim hacminin belirlenmesi",
      "Yüzey kalitesinden ödün vermeden birim parça maliyetlerinin düşürülmesi",
      "Türkiye'de ve uluslararası pazarda tedarikçi seçimi ve üretim denetimi",
      "Kalite kontrol kriterleri ve kontrol mastarlarının oluşturulması",
    ],
    workflow: [
      {
        step: "BOM & Process Analysis",
        stepTr: "BOM ve Süreç Analizi",
        desc: "Break down bill of materials to identify high-cost parts and secondary operations.",
        descTr:
          "Maliyeti artıran parçaları ve ikincil operasyonları belirlemek için parça listesi analizi.",
      },
      {
        step: "Process Trade-Off Study",
        stepTr: "Yöntem Karşılaştırma Çalışması",
        desc: "Compare sheet metal vs. stamping, or urethane casting vs. aluminum tooling for your exact volume.",
        descTr:
          "Hedef üretim adetleriniz için CNC, döküm, kalıplama yöntemlerinin fizibilite kıyaslaması.",
      },
      {
        step: "Vendor Audit & RFQ",
        stepTr: "Tedarikçi Denetimi & RFQ",
        desc: "Prepare technical drawing packs, solicit bids from vetted machinists and molders, and benchmark responses.",
        descTr:
          "Teknik resim paketlerinin hazırlanması, güvenilir üreticilerden teklif toplanması ve karşılaştırılması.",
      },
      {
        step: "First Article Inspection (FAI)",
        stepTr: "İlk Numune Onayı (FAI)",
        desc: "Audit initial production samples against dimensional tolerances and cosmetic standards.",
        descTr:
          "Seri üretimden çıkan ilk numunelerin boyutsal ve görsel kriterlere göre denetlenmesi.",
      },
    ],
    capabilities: [
      "Manufacturing Feasibility Audits",
      "BOM & Unit Cost Optimization",
      "Supplier Vetting & RFQ Management",
      "Pilot Run Oversight",
      "Inspection Jigs & QC Plans",
    ],
    capabilitiesTr: [
      "Üretilebilirlik Fizibilite Denetimleri",
      "BOM ve Birim Maliyet Optimizasyonu",
      "Tedarikçi Seçimi ve Teklif Yönetimi",
      "Pilot Üretim Gözetimi",
      "Kontrol Mastarları ve Kalite Planları",
    ],
    materials: ["Global Supply Chain Options", "Local Manufacturing Ecosystem (Antalya / Turkey)"],
    relatedProjects: ["velora-diffuser", "px-1-handheld", "aluminium-series"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
