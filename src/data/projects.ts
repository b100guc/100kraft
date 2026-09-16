import sketchPx1 from "@/assets/case-sketch.jpg";
import cadPx1 from "@/assets/case-cad.jpg";
import finalPx1 from "@/assets/case-final.jpg";
import heroPrototypes from "@/assets/hero-prototypes.jpg";
import moldAsset from "@/assets/mold.jpg";

// Store Product Images
import wallDecor1Img from "@/assets/store/wall-decor-1-1.jpg";
import wallDecor2Img from "@/assets/store/wall-decor-2-1.jpg";
import wallDecorUcluImg from "@/assets/store/wall-decor-2-uclu-1.jpg";
import dragonsKeeper1Img from "@/assets/store/the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru-1.jpg";
import dragonsKeeper3Img from "@/assets/store/the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru-3.webp";
import dragonsKeeper4Img from "@/assets/store/the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru-4.webp";
import kampAtesi1Img from "@/assets/store/kamp-atesi-1.jpg";
import kampAtesi2Img from "@/assets/store/kamp-atesi-2.webp";
import grainztag1Img from "@/assets/store/grainztag-pet-1.jpg";
import grainztag3Img from "@/assets/store/grainztag-pet-3.webp";

export interface ProjectStage {
  id: string;
  label: string;
  labelTr: string;
  title: string;
  titleTr: string;
  description: string;
  descriptionTr: string;
  image: string;
  alt: string;
}

export interface ProjectMetric {
  label: string;
  labelTr: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  year: string;
  sector: string;
  sectorTr: string;
  scope: string;
  scopeTr: string;
  story: string;
  storyTr: string;
  headline: string;
  headlineTr: string;
  overview: string;
  overviewTr: string;
  storeUrl?: string;
  metrics: ProjectMetric[];
  problem: {
    title: string;
    titleTr: string;
    body: string;
    bodyTr: string;
  };
  constraints: { en: string; tr: string }[];
  processCad: {
    title: string;
    titleTr: string;
    body: string;
    bodyTr: string;
  };
  manufacturing: {
    title: string;
    titleTr: string;
    body: string;
    bodyTr: string;
  };
  outcome: {
    title: string;
    titleTr: string;
    body: string;
    bodyTr: string;
  };
  services: string[];
  stages: ProjectStage[];
}

export const projects: ProjectItem[] = [
  {
    id: "01",
    slug: "wall-decor-series",
    name: "Wall Decor Series",
    year: "2025",
    sector: "Architectural & Interior Objects",
    sectorTr: "İç Mimari & Yaşam Alanı Objeleri",
    scope: "Parametric CAD · Mold Design · Precision Casting · CNC Framing",
    scopeTr: "Parametrik CAD · Kalıp Tasarımı · Hassas Döküm · CNC Çerçeveleme",
    story:
      "A modular wall art collection born in the atelier. Parametric 3D relief tiles paired with an anodized aluminum frame system, balancing organic shadows with rigid mounting tolerances.",
    storyTr:
      "Atölyemizde geliştirilen modüler duvar objesi serisi. Parametrik 3D dalga rölyefleri ile eloksallı metal çerçeve sistemi bir araya getirilerek organik gölge oyunları hassas montaj toleranslarıyla buluşturuldu.",
    headline: "Parametric depth. Zero gap tolerance in modular alignment.",
    headlineTr: "Parametrik derinlik. Modüler dizilimde sıfır montaj boşluğu.",
    overview:
      "Developed as a flagship atelier product, Wall Decor explores how complex parametric surfaces can be cast cleanly without air pockets and framed with sub-millimeter precision. Each panel features undulating geometric waves engineered in CAD to produce dynamic shadow shifts across varying room lighting conditions.",
    overviewTr:
      "100KRAFT atölyesinin imza ürünlerinden biri olarak geliştirilen Wall Decor serisi, karmaşık parametrik yüzeylerin hava boşluğu kalmadan nasıl döküleceğini ve milimetre altı hassasiyetle nasıl çerçeveleneceğini çözüyor. Her panel, oda aydınlatmasına göre dinamik gölge değişimleri sunan CAD tabanlı akışkan dalga geometrilerine sahiptir.",
    storeUrl: "https://store.100kraft.com/wall-decor-1",
    metrics: [
      { label: "Relief Depth", labelTr: "Rölyef Derinliği", value: "18mm" },
      { label: "Frame Tolerance", labelTr: "Çerçeve Toleransı", value: "±0.15mm" },
      { label: "Demolding Cycle", labelTr: "Kalıptan Çıkma Süresi", value: "45 min" },
      { label: "Weight per Unit", labelTr: "Birim Ağırlık", value: "420g" },
    ],
    problem: {
      title: "Casting Under-cuts & Dimensional Warpage",
      titleTr: "Ters Açılar ve Malzeme Çekme Problemi",
      body: "Complex 3D reliefs often trap air during rapid pouring and suffer dimensional warpage along perimeter mounting lips as the casting compound cures.",
      bodyTr:
        "Derin 3D dalga rölyefleri, döküm sırasında hava kabarcıklarını hapsedebilir ve kürleşme sırasında dış çerçeveye oturan kenarlarda çekme yaparak montaj kasıntısına yol açabilir.",
    },
    constraints: [
      {
        en: "Draft angles on steep wave peaks held to minimum 2° for clean mold release.",
        tr: "Kalıptan hasarsız ayrılma için dik dalga tepe noktalarında minimum 2° kalıp açısı korundu.",
      },
      {
        en: "Frame groove depth matched to tile expansion coefficient across 15°C–40°C.",
        tr: "Çerçeve yuva derinliği, 15°C–40°C arasındaki malzeme genleşme payı hesaplanarak işlendi.",
      },
      {
        en: "Multi-panel modular alignment without visible joint seam discrepancies.",
        tr: "Çoklu panel dizilimlerinde yan yana gelen desenlerde kesinti oluşmayacak modüler geometri.",
      },
    ],
    processCad: {
      title: "Generative Wave Modeling & Parting Lines",
      titleTr: "Parametrik Yüzey Modelleme ve Kalıp Ayrımı",
      body: "The organic topography was mathematically driven in parametric CAD to guarantee consistent wall thickness throughout. Master positives were printed on industrial SLA systems at 50-micron layer height before casting tool production.",
      bodyTr:
        "Akışkan yüzey topografyası, et kalınlığının her noktada homojen kalmasını sağlayan parametrik algoritmalarla modellendi. Kalıp öncesi ana modeller endüstriyel SLA yazıcılarda 50 mikron katman hassasiyetiyle üretilerek tezgaha alındı.",
    },
    manufacturing: {
      title: "Flexible Tooling & Precision CNC Mounting",
      titleTr: "Esnek Kalıplama ve Hassas CNC İşleme",
      body: "High-tear-strength platinum silicone tools were vacuum-cast to capture subtle micro-textures. Extruded frames are CNC mitered and hand-assembled in our Antalya workshop.",
      bodyTr:
        "Yüzeydeki mikro dokuyu eksiksiz yansıtmak için yüksek mukavemetli platin silikon kalıplar vakum altında hazırlandı. Metal çerçeveler Antalya atölyemizde CNC ile gönyeli kesilerek montajlandı.",
    },
    outcome: {
      title: "Commercial Atelier Production Run",
      titleTr: "Atölye İçi Seri Üretim ve Satış",
      body: "The Wall Decor series is actively manufactured and sold through 100KRAFT Store in single and triptych formats with zero assembly defects reported.",
      bodyTr:
        "Wall Decor serisi tekli ve 3'lü triptych formatlarında 100KRAFT Store üzerinden düzenli olarak üretilip sevk edilmekte; montaj hatası ve uyumsuzluk oranı sıfırda tutulmaktadır.",
    },
    services: ["Industrial Design", "Mold Design", "DFM Optimization", "Atelier Manufacturing"],
    stages: [
      {
        id: "stage-1",
        label: "Tile #1",
        labelTr: "Tekli Rölyef #1",
        title: "Wall Decor #1 Single 10x10cm Tile",
        titleTr: "Wall Decor #1 Tekli 10x10cm Panel",
        description: "High-contrast geometric relief with central focal dispersion.",
        descriptionTr: "Merkezi odak dağılımlı yüksek kontrastlı geometrik rölyef.",
        image: wallDecor1Img,
        alt: "100KRAFT Wall Decor 1 Single Tile",
      },
      {
        id: "stage-2",
        label: "Tile #2",
        labelTr: "Tekli Rölyef #2",
        title: "Wall Decor #2 Diagonal Geometry",
        titleTr: "Wall Decor #2 Köşegen Geometri",
        description: "Dynamic directional wave flow engineered for asymmetric wall compositions.",
        descriptionTr: "Asimetrik duvar kompozisyonları için yönlendirilmiş dinamik dalga akışı.",
        image: wallDecor2Img,
        alt: "100KRAFT Wall Decor 2 Diagonal Tile",
      },
      {
        id: "stage-3",
        label: "Triptych",
        labelTr: "Üçlü Seri",
        title: "Wall Decor #2 Three-Panel Modular Composition (10x28cm)",
        titleTr: "Wall Decor #2 Üçlü Modüler Kompozisyon (10x28cm)",
        description:
          "Continuous panoramic relief flowing across three independently framed modules.",
        descriptionTr: "Üç bağımsız çerçeveli modül boyunca kesintisiz akan panoramik rölyef.",
        image: wallDecorUcluImg,
        alt: "100KRAFT Wall Decor Three-Piece Composition",
      },
    ],
  },
  {
    id: "02",
    slug: "the-dragons-keeper",
    name: "The Dragon’s Keeper",
    year: "2024",
    sector: "Functional Art & Lifestyle",
    sectorTr: "Fonksiyonel Heykel & Aksesuar",
    scope: "Sculptural Modeling · SLA Prototyping · Mechanical Balance · Composite Casting",
    scopeTr: "Heykelsi Modelleme · SLA Prototipleme · Mekanik Denge · Kompozit Döküm",
    story:
      "A sculptural wall-mounted organizer and jewelry display. Complex organic anatomy resolved into functional cantilever hooks that bear practical load without tip deflection.",
    storyTr:
      "Duvara monte edilen heykelsi düzenleyici ve takı askısı. Karmaşık organik ejderha formu, sarkma yapmadan pratik yük taşıyabilen fonksiyonel askı tırnaklarına dönüştürüldü.",
    headline: "Organic sculpture engineered to bear load.",
    headlineTr: "Yük taşımak üzere mühendisliği çözülmüş organik heykel.",
    overview:
      "Designed as a crossover between mythological character design and daily utility, The Dragon's Keeper required reconciling intricate scales and claws with structural strength. Using high-resolution SLA additive prototyping, we iterated through 8 iterations of arm curvature to guarantee keys and heavy jewelry hang securely without slipping.",
    overviewTr:
      "Mitolojik karakter tasarımı ile gündelik kullanımın kesişiminde tasarlanan Dragon's Keeper; ince pul ve pençe detaylarını yapısal mukavemetle birleştirmeyi gerektirdi. Yüksek çözünürlüklü SLA prototiplerle 8 farklı kol açısı test edilerek ağır anahtarların ve takıların kaymadan taşınması sağlandı.",
    storeUrl: "https://store.100kraft.com/the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru",
    metrics: [
      { label: "Load Capacity", labelTr: "Taşıma Kapasitesi", value: "2.4 kg" },
      { label: "SLA Layer Resolution", labelTr: "SLA Katman Hassasiyeti", value: "25 µm" },
      {
        label: "Mounting Stability",
        labelTr: "Duvar Tutunma Kuvveti",
        value: "Single Flush Mount",
      },
      { label: "Atelier Iterations", labelTr: "Prototip İterasyonu", value: "8 Loops" },
    ],
    problem: {
      title: "Cantilever Stress & Demolding Traps",
      titleTr: "Konsol Gerilmesi ve Kalıp Tuzakları",
      body: "Projecting claws and tail geometry act as mechanical cantilevers under load, risking brittle fracture. Simultaneously, deep undercuts complicate multi-part silicone tooling.",
      bodyTr:
        "Öne uzanan pençeler ve kanat uçları yük altında konsol kiriş gibi davranarak kırılma riski oluşturur. Aynı zamanda derin ters açılar kalıptan çıkarma sırasında parçanın yırtılmasına neden olabilir.",
    },
    constraints: [
      {
        en: "Internal core ribbing hidden within the torso to resist bending moment.",
        tr: "Eğilme momentini karşılamak için gövde içine gizlenmiş takviye geometrileri yerleştirildi.",
      },
      {
        en: "Zero visible fastener from the front — completely concealed keyhole wall slot.",
        tr: "Önden bakıldığında hiçbir vida görünmeyecek şekilde gizli anahtar deliği montaj yuvası.",
      },
    ],
    processCad: {
      title: "SubD Surface Sculpting to Solid Body Conversion",
      titleTr: "SubD Organik Yüzeyden Katı Modele Dönüşüm",
      body: "Initial organic sculpts were converted into watertight parametric solids to engineer the internal wall thickness, center-of-gravity balance, and recessed anchor geometry.",
      bodyTr:
        "İlk organik heykel çalışması, et kalınlığı, ağırlık merkezi dengesi ve gizli dübel yuvasını milimetrik çözebilmek adına katı CAD modeline dönüştürüldü.",
    },
    manufacturing: {
      title: "Vacuum Degassed Polyurethane & Hand Finish",
      titleTr: "Vakumlu Poliüretan Döküm ve El İşçiliği",
      body: "Each piece is pressure-cast in high-impact hybrid polyurethane to eliminate voids, then post-cured and hand-detailed in our atelier.",
      bodyTr:
        "Hava kabarcıklarını yok etmek için yüksek darbe dayanımlı hibrit poliüretan basınç altında döküldü; fırınlama sonrası atölyemizde elle sonlandırıldı.",
    },
    outcome: {
      title: "Live Production in Store",
      titleTr: "Store Üzerinde Canlı Satış",
      body: "Actively manufactured in Antalya and shipped to customers with dedicated hanging hardware included.",
      bodyTr:
        "Antalya atölyemizde üretilen parça, özel montaj pimiyle birlikte 100KRAFT Store üzerinden sunulmaktadır.",
    },
    services: ["Product Design", "Rapid Prototyping", "Additive Manufacturing", "Tooling"],
    stages: [
      {
        id: "dk-stage-1",
        label: "Finished Piece",
        labelTr: "Nihai Ürün",
        title: "The Dragon’s Keeper Wall Sculpture & Organizer",
        titleTr: "The Dragon’s Keeper Duvar Heykeli ve Askı",
        description: "Matte textured functional organizer mounted flush to the wall.",
        descriptionTr: "Duvara sıfır oturan mat dokulu fonksiyonel düzenleyici.",
        image: dragonsKeeper1Img,
        alt: "100KRAFT The Dragon's Keeper Mounted",
      },
      {
        id: "dk-stage-2",
        label: "Scale Detail",
        labelTr: "Yüzey Detayı",
        title: "Micro-texture & Parting Line Suppression",
        titleTr: "Mikro Doku ve Kalıp İzi Giderme",
        description: "Zero visible parting seams along the organic spine.",
        descriptionTr: "Organik omurga boyunca kalıp çizgisi görünmeyecek kalıp tasarımı.",
        image: dragonsKeeper3Img,
        alt: "The Dragon's Keeper Anatomy Detail",
      },
      {
        id: "dk-stage-3",
        label: "Load Hooks",
        labelTr: "Askı Tırnakları",
        title: "Cantilever Hooks Engineered for Keyrings & Jewelry",
        titleTr: "Anahtar ve Takılar İçin Mukavemetli Askı Tırnakları",
        description: "Optimized hook radius prevents slippage while maintaining sleek silhouette.",
        descriptionTr: "Zarif silueti bozmadan kaymayı önleyen optimize edilmiş tırnak açısı.",
        image: dragonsKeeper4Img,
        alt: "The Dragon's Keeper Hook Details",
      },
    ],
  },
  {
    id: "03",
    slug: "kamp-atesi",
    name: "Kamp Ateşi Bioethanol",
    year: "2024",
    sector: "Home & Outdoor Living",
    sectorTr: "Yaşam Alanı & Şömine",
    scope: "Thermal Simulation · Refractory Concrete · Stainless Burner · Safety Testing",
    scopeTr: "Termal Simülasyon · Refrakter Beton · Paslanmaz Brülör · Güvenlik Testleri",
    story:
      "A tabletop smokeless fire pit for indoor and patio ambiance. Cast from proprietary heat-resistant refractory concrete with an integrated stainless steel fuel vessel.",
    storyTr:
      "İç ve dış mekanlar için tasarlanmış dumansız masaüstü bioethanol ateş çukuru. Termal şoka dayanıklı özel refrakter beton karışımı ve paslanmaz çelik yakıt haznesiyle üretildi.",
    headline: "Controlled tabletop flame. Thermal-shock certified refractory body.",
    headlineTr: "Kontrollü masaüstü alevi. Termal şoka dayanıklı refrakter beton gövde.",
    overview:
      "Desktop ethanol burners must withstand high localized temperatures (up to 400°C) without micro-cracking or burning table surfaces. We formulated a custom aggregate mix with glass-fiber reinforcement and engineered a dual-wall stainless air cavity that keeps the exterior base under 48°C during full burn.",
    overviewTr:
      "Masaüstü etanol şömineleri, mikro çatlaklar oluşturmadan ve konulduğu masayı yakmadan 400°C'ye varan yerel sıcaklıklara dayanmalıdır. Cam elyaf takviyeli özel bir refrakter beton reçetesi geliştirdik ve çift cidarlı paslanmaz çelik hazne tasarımıyla dış taban sıcaklığını 48°C'nin altında tuttuk.",
    storeUrl: "https://store.100kraft.com/kamp-atesi",
    metrics: [
      { label: "Max Burn Temp", labelTr: "Maks Yanma Sıcaklığı", value: "380°C" },
      { label: "Base Temp Under Load", labelTr: "Taban Sıcaklığı", value: "< 48°C" },
      { label: "Burn Duration", labelTr: "Kesintisiz Yanma", value: "65 min" },
      { label: "Concrete Mix Tensile", labelTr: "Beton Karışım Dayanımı", value: "C40 Refractory" },
    ],
    problem: {
      title: "Thermal Stress Fracture & Heat Transfer",
      titleTr: "Isıl Gerilme Çatlağı ve Isı İletimi Problemi",
      body: "Standard cement mixtures shatter under sudden flame heat cycles. Heat conducted down to wooden tabletops poses direct safety risks.",
      bodyTr:
        "Standart harçlar alevin ani ısı döngüsü altında genleşip çatlar. Tabana iletilen ısı ise ahşap yüzeylerde leke ve yangın riski oluşturur.",
    },
    constraints: [
      {
        en: "Dual-wall burner insert with 3mm air gap isolating flame chamber from concrete rim.",
        tr: "Brülör ile beton gövde arasında 3 mm hava boşluğu bırakan çift cidarlı izolasyon.",
      },
      {
        en: "Custom cured aggregate eliminating free water before first heat exposure.",
        tr: "İlk kullanımda patlama yapmaması için serbest nemi sıfırlayan fırınlanmış refrakter karışım.",
      },
    ],
    processCad: {
      title: "Airflow Chimney & Chamber Engineering",
      titleTr: "Hava Akışı ve Brülör Yuva Modellemesi",
      body: "Thermal distribution was analyzed to position internal insulating voids. The burner well was dimensioned for drop-in stainless inserts with zero rattle.",
      bodyTr:
        "Termal dağılım hesaplanarak tabana doğru ısı geçişini kesen izolasyon boşlukları modellendi. Paslanmaz hazne için boşluksuz geçme yuvası oluşturuldu.",
    },
    manufacturing: {
      title: "Precision Mold Vibration & Silane Sealing",
      titleTr: "Titreşimli Kalıplama ve Silan Yüzey Koruması",
      body: "Vibration table casting guarantees maximum packing density. Once cured, bodies receive high-temp hydrophobic sealing to resist fuel spills.",
      bodyTr:
        "Vibrasyon masasında döküm yapılarak gözeneksiz maksimum yoğunluk sağlandı. Kürleşme sonrası yakıt lekelerine karşı yüksek ısıya dayanıklı koruyucu uygulandı.",
    },
    outcome: {
      title: "Proven Living Appliance",
      titleTr: "Test Edilmiş Güvenli Ürün",
      body: "Consistently delivered via 100KRAFT Store with 100% thermal safety record across residential deployments.",
      bodyTr:
        "100KRAFT Store üzerinden satılan ürün, test edilen tüm mekanlarda sıfır çatlak ve tam termal güvenlikle çalışmaktadır.",
    },
    services: ["Industrial Design", "Material Engineering", "Prototyping", "Manufacturing"],
    stages: [
      {
        id: "ka-stage-1",
        label: "Active Flame",
        labelTr: "Aktif Yanma",
        title: "Desktop Flame Architecture",
        titleTr: "Masaüstü Alev Mimarisi",
        description: "Smokeless ethanol flame dancing within the sculpted refractory bowl.",
        descriptionTr: "Refrakter beton hazne içinde dans eden dumansız ve kokusuz alev.",
        image: kampAtesi1Img,
        alt: "Kamp Atesi Desktop Fireplace Active",
      },
      {
        id: "ka-stage-2",
        label: "Refractory Texture",
        labelTr: "Beton Doku",
        title: "Dense Smooth Aggregate Finish",
        titleTr: "Yoğun ve Pürüzsüz Beton Yüzey",
        description: "Tactile industrial concrete finish with chamfered rim.",
        descriptionTr: "Pah kırılmış kenarları ve ipeksi dokusuyla endüstriyel beton gövde.",
        image: kampAtesi2Img,
        alt: "Kamp Atesi Material Detail",
      },
    ],
  },
  {
    id: "04",
    slug: "grainztag-pet",
    name: "GrainzTag #Pet",
    year: "2024",
    sector: "IoT & Smart Hardware",
    sectorTr: "IoT & Akıllı Donanım",
    scope: "Electronics Packaging · NFC Integration · Laser Etching · IP68 Sealing",
    scopeTr: "Elektronik Paketleme · NFC Entegrasyonu · Lazer Markalama · IP68 İzolasyon",
    story:
      "A rugged, waterproof smart pet tag with dual NFC and dynamic QR technology. Built to survive active dogs without scratching, fading, or water ingress.",
    storyTr:
      "Çift yönlü NFC ve dinamik QR teknolojisine sahip, suya ve darbeye tam dayanıklı akıllı evcil hayvan künyesi. Çizilmeye, suya ve zorlu koşullara karşı dayanıklı üretildi.",
    headline: "Zero bulk. IP68 sealed smart identity capsule.",
    headlineTr: "Sıfır ağırlık hissi. IP68 su geçirmez akıllı kimlik kapsülü.",
    overview:
      "Pet tags experience aggressive mechanical abrasion, mud, and water immersion. Instead of cheap printed plastic or metal that fades, GrainzTag encapsulates a tuned high-frequency NFC antenna inside high-strength optical polymer with deep subsurface laser engraving that can never wear off.",
    overviewTr:
      "Evcil hayvan künyeleri sürekli darbelere, çamura ve suya maruz kalır. Zamanla silinen ucuz baskılar yerine GrainzTag; ayarlanmış yüksek frekanslı NFC antenini optik polimer gövde içine hapseder ve asla silinmeyen lazer markalamayla birleştirir.",
    storeUrl: "https://store.100kraft.com/grainztag-pet",
    metrics: [
      { label: "Water Resistance", labelTr: "Su Geçirmezlik", value: "IP68 (Submersible)" },
      { label: "Weight", labelTr: "Toplam Ağırlık", value: "8.5g" },
      { label: "NFC Read Range", labelTr: "NFC Okuma Mesafesi", value: "35mm" },
      { label: "Abrasion Resistance", labelTr: "Aşınma Dayanımı", value: "Shore 85D Surface" },
    ],
    problem: {
      title: "Antenna Detuning & Scuff Degradation",
      titleTr: "Anten Bozulması ve Yüzey Silinmesi",
      body: "Metal split-rings and moisture detune NFC resonance. Surface-printed QR codes rub off within weeks of outdoor collar movement.",
      bodyTr:
        "Metal tasma halkaları ve nem, NFC rezonansını bozabilir. Yüzeye basılan QR kodlar ise birkaç haftalık tasma sürtünmesinde silinip okunamaz hale gelir.",
    },
    constraints: [
      {
        en: "Encapsulation material must match dielectric constant of NFC tag to preserve read range.",
        tr: "Kapsülleme reçinesi, NFC anteninin okuma mesafesini korumak için dielektrik sabitiyle eşleştirildi.",
      },
      {
        en: "Ultra-compact form factor suitable for both small cats and large dogs.",
        tr: "Hem kediler hem de büyük ırk köpekler için ergonomik ve hafif form faktörü.",
      },
    ],
    processCad: {
      title: "Micro-cavity Injection Geometry",
      titleTr: "Mikro Hazne ve Kapsül Geometrisi",
      body: "The internal cavity holds the tag in absolute center during polymer injection, preventing off-axis antenna displacement.",
      bodyTr:
        "İç hazne tasarımı, reçine basımı sırasında NFC etiketini tam merkezde tutarak antenin kaymasını ve sinyal kaybını önleyecek şekilde modellendi.",
    },
    manufacturing: {
      title: "Subsurface Fiber Laser & UV Barrier",
      titleTr: "Fiber Lazer Markalama ve UV Koruma",
      body: "Direct fiber laser etching burns identification data inside the polymer layer. UV-stabilizers prevent yellowing under intense Mediterranean sun.",
      bodyTr:
        "Fiber lazer teknolojisi kimlik verisini polimer tabakanın içine işler; böylece silinme riski kalmaz. Akdeniz güneşine karşı UV stabilizatörlü malzeme kullanıldı.",
    },
    outcome: {
      title: "Shipped Globally",
      titleTr: "Yüzlerce Kullanıcıda Aktif",
      body: "In continuous production at our workshop, serving pet owners with instant cloud-connected animal safety profiles.",
      bodyTr:
        "Atölyemizde düzenli üretilen GrainzTag, bulut profiliyle entegre olarak evcil hayvan güvenliğini sağlamaktadır.",
    },
    services: ["Product Design", "Electronics Integration", "Manufacturing", "Packaging"],
    stages: [
      {
        id: "gt-stage-1",
        label: "Encapsulated Tag",
        labelTr: "Kapsül Künye",
        title: "GrainzTag #Pet Sealed Capsule",
        titleTr: "GrainzTag #Pet İzolasyonlu Kapsül",
        description: "Compact matte black capsule with stainless collar ring.",
        descriptionTr: "Paslanmaz halkalı kompakt mat siyah akıllı künye.",
        image: grainztag1Img,
        alt: "GrainzTag Pet Smart Tag",
      },
      {
        id: "gt-stage-2",
        label: "Laser Detail",
        labelTr: "Lazer İşleme",
        title: "High-density Laser Marking",
        titleTr: "Yüksek Çözünürlüklü Lazer Markalama",
        description: "Instant phone tap read without apps required.",
        descriptionTr: "Uygulama gerektirmeden telefona dokundurulduğunda anında açılan profil.",
        image: grainztag3Img,
        alt: "GrainzTag Laser Precision Detail",
      },
    ],
  },
  {
    id: "05",
    slug: "px-1-handheld",
    name: "PX-1 Handheld",
    year: "2025",
    sector: "Consumer Appliance",
    sectorTr: "Tüketici Cihazı & El Aleti",
    scope: "Product design · Prototyping · Mold design",
    scopeTr: "Ürün tasarımı · Prototipleme · Kalıp tasarımı",
    story:
      "A cordless handheld built around a single-piece housing. We cut part count from 22 to 11, then engineered the tooling so the transparent chamber could be molded without a secondary operation.",
    storyTr:
      "Tek parça gövde etrafında inşa edilmiş kablosuz el cihazı. Parça sayısını 22'den 11'e düşürdük ve şeffaf haznenin ikincil bir işleme gerek kalmadan kalıplanabilmesi için kalıp mühendisliğini gerçekleştirdik.",
    headline: "Half the components. Zero secondary bonding operations.",
    headlineTr: "Yarı yarıya parça sayısı. İkincil yapıştırma operasyonu yok.",
    overview:
      "The PX-1 was conceived as an ultra-compact handheld device requiring both high mechanical rigidity and high-clarity optical viewing of internal media. Conventional designs in this category relied on split-shell clamshells with ultrasonic welding seams. Our team redesigned the architecture into a unified monocoque structure with an integrated bayonet-locking transparent chamber.",
    overviewTr:
      "PX-1, hem yüksek mekanik rijitlik hem de dahili haznenin optik berraklıkla izlenmesini gerektiren ultra kompakt bir el cihazı olarak tasarlandı. Bu kategorideki geleneksel ürünler ultrasonik kaynakla birleştirilen iki parçalı kabuklara dayanıyordu. Ekibimiz mimariyi tek parça monokok gövdeye ve entegre süngü kilitli şeffaf hazneye dönüştürdü.",
    metrics: [
      { label: "Part Count Reduction", labelTr: "Parça Sayısı Azaltımı", value: "22 → 11" },
      { label: "Weight Savings", labelTr: "Ağırlık Tasarrufu", value: "-28%" },
      { label: "Assembly Steps", labelTr: "Montaj Adımları", value: "-45%" },
      { label: "Prototype Cycles", labelTr: "Prototip Döngüsü", value: "6 Loops" },
    ],
    problem: {
      title: "The Clamshell Seam Problem",
      titleTr: "Ayrık Gövde ve Kaynak İzi Problemi",
      body: "Split-shell enclosures create seam lines right across the user's primary grip zone. They require internal screw bosses, flex under torsional hand load, and present sealing challenges along the split perimeter.",
      bodyTr:
        "İki parçalı gövde tasarımları, kullanıcının tam kavrama alanında dikiş çizgisi oluşturur. İç vidalama kuleleri gerektirir, burulma yükü altında esner ve sızdırmazlık problemleri yaratır.",
    },
    constraints: [
      {
        en: "Must withstand a 1.5-meter drop onto concrete across 6 orientation angles.",
        tr: "6 farklı düşme açısında betona 1.5 metre yükseklikten düşmeye dayanmalı.",
      },
      {
        en: "Wall thickness restricted to 1.8mm–2.4mm to meet cycle time targets under 28 seconds.",
        tr: "28 saniyenin altında enjeksiyon çevrim süresi için et kalınlığı 1.8mm–2.4mm ile sınırlandırıldı.",
      },
      {
        en: "Optical chamber must achieve SPI-A2 mold polish without post-demold buffing.",
        tr: "Optik hazne, kalıptan sonra polisaj gerektirmeksizin SPI-A2 kalıp parlaklığına ulaşmalı.",
      },
    ],
    processCad: {
      title: "From Ergonomic Clay Scans to Parametric Tooling CAD",
      titleTr: "Ergonomik Kil Taramalarından Parametrik Kalıp CAD Modeline",
      body: "We shaped physical foam and clay mockups to lock down thumb reach and palm contour before converting the surfaces to Class-A CAD. Rib structures were engineered along primary bending vectors.",
      bodyTr:
        "Yüzeyleri A-Class CAD modeline aktarmadan önce başparmak erişimi ve avuç içi konturunu kil modellerle netleştirdik. Mukavemet kaburgaları ana bükülme vektörlerine göre konumlandırıldı.",
    },
    manufacturing: {
      title: "Collapsible Core Tooling for Bayonet Lock",
      titleTr: "Süngü Kilit İçin Çöken Maça Kalıp Tasarımı",
      body: "Rather than ultrasonically welding a threaded neck after molding, we implemented a collapsible core mechanism that forms the internal locking lugs inside the main injection cycle.",
      bodyTr:
        "Kalıplama sonrası kaynak yapmak yerine, ana enjeksiyon döngüsünde dahili kilit tırnaklarını oluşturan çöken maça mekanizması uyguladık.",
    },
    outcome: {
      title: "Production Ready in 14 Weeks",
      titleTr: "14 Haftada Seri Üretime Hazır",
      body: "T1 trial samples matched nominal CAD dimensions within 0.04mm. Part cost came in 18% under client target.",
      bodyTr:
        "T1 deneme numuneleri nominal CAD ölçüleriyle 0.04mm tolerans içinde eşleşti. Parça maliyeti hedeflenen bütçenin %18 altında tamamlandı.",
    },
    services: ["Product Design", "DFM Analysis", "Prototyping", "Mold Design"],
    stages: [
      {
        id: "px-sketch",
        label: "Phase 01",
        labelTr: "Aşama 01",
        title: "Ergonomic Concept & Grip Studies",
        titleTr: "Ergonomik Konsept ve Tutuş Çalışmaları",
        description:
          "Initial proportion explorations, mass distribution, and hand clearance studies.",
        descriptionTr: "Başlangıç oran etütleri, ağırlık dağılımı ve el kavrama çalışmaları.",
        image: sketchPx1,
        alt: "PX-1 Ergonomic Concept Sketches",
      },
      {
        id: "px-cad",
        label: "Phase 02",
        labelTr: "Aşama 02",
        title: "Internal Packaging & DFM Assembly",
        titleTr: "Dahili Mekanik Yerleşim ve DFM Montajı",
        description:
          "Full parametric CAD assembly with draft angles, ribbing, and collapsible core detailing.",
        descriptionTr:
          "Kalıp açıları, kaburga ağları ve maça detaylarıyla tam parametrik CAD montajı.",
        image: cadPx1,
        alt: "PX-1 CAD Assembly View",
      },
      {
        id: "px-final",
        label: "Phase 03",
        labelTr: "Aşama 03",
        title: "T1 Verification & Pilot Assembly",
        titleTr: "T1 Doğrulama ve Pilot Montaj",
        description:
          "Finished production units after pilot run showing the seamless monocoque finish.",
        descriptionTr: "Dikişsiz monokok gövdeyi sergileyen pilot üretim onaylı nihai ürün.",
        image: finalPx1,
        alt: "PX-1 Final Production Unit",
      },
    ],
  },
  {
    id: "06",
    slug: "aluminium-series",
    name: "Aluminium Series",
    year: "2024",
    sector: "Industrial Hardware",
    sectorTr: "Endüstriyel Donanım",
    scope: "Thermal Engineering · CNC Machining · Bead-blasting · Anodizing",
    scopeTr: "Termal Mühendislik · CNC Talaşlı İmalat · Kumlama · Eloksal",
    story:
      "A modular enclosure family designed for high-heat edge computing boards. Every surface is machined from 6061-T6 billet with integrated passive thermal fins and ingress seals.",
    storyTr:
      "Yüksek ısı yayan uç bilişim donanımları için tasarlanmış modüler gövde ailesi. Her yüzey, entegre pasif soğutma kanatçıkları ve sızdırmazlık kanallarıyla 6061-T6 kütük alüminyumdan işlendi.",
    headline: "Thermal fins integrated into structural unibody.",
    headlineTr: "Gövdeye entegre pasif soğutma kanatçıkları.",
    overview:
      "Industrial edge computing hardware generates intense localized heat without allowing active fan cooling due to dust ingress. We designed an all-aluminum thermal-dissipation enclosure that pulls heat directly from the board's SoC via copper heat pipes and redistributes it across exterior fins.",
    overviewTr:
      "Endüstriyel donanımlar, tozlu ortam nedeniyle fan kullanamazken yüksek yerel ısı üretir. SoC üzerindeki ısıyı doğrudan gövdeye ileten ve dış kanatçıklardan yayan yekpare alüminyum gövde mimarisi tasarladık.",
    metrics: [
      { label: "Thermal Drop", labelTr: "Sıcaklık Düşüşü", value: "-14.2°C" },
      { label: "Machining Time", labelTr: "İşleme Süresi", value: "22 min" },
      { label: "Surface Finish", labelTr: "Yüzey Dokusu", value: "Ra 0.8" },
      { label: "Ingress Rating", labelTr: "Koruma Sınıfı", value: "IP67" },
    ],
    problem: {
      title: "Fanless Thermal Bottlenecks",
      titleTr: "Fansız Termal Boğulma Problemi",
      body: "Sealed enclosures trap heat inside. When processors throttle down, system reliability plummets. Gasket channels also deform if wall sections lack uniform stiffness.",
      bodyTr:
        "Sızdırmaz gövdeler içerideki ısıyı hapsederek işlemcilerin frekans düşürmesine yol açar. Conta kanalları ise homojen rijitlik sağlanmadığında sızdırmaya başlar.",
    },
    constraints: [
      {
        en: "Component operating envelope restricted to maximum 72°C in ambient 45°C environments.",
        tr: "45°C ortam sıcaklığında bileşen sıcaklığı maksimum 72°C ile sınırlandırıldı.",
      },
      {
        en: "Zero secondary fasteners on top face — underside blind mounting with helicoil inserts.",
        tr: "Üst yüzde sıfır vida görünümü — alttan helikoil yaylı kör bağlantı yuvaları.",
      },
    ],
    processCad: {
      title: "Conjugate Heat Transfer FEA to Machine Paths",
      titleTr: "Isı Transfer Simülasyonundan İşleme Yollarına",
      body: "We ran CFD thermal simulations to optimize fin spacing for natural convection before generating 5-axis toolpaths that cut setup count from four to two.",
      bodyTr:
        "Doğal hava konveksiyonu için kanatçık aralıklarını CFD simülasyonlarıyla optimize ettik; bağlama sayısını dörtten ikiye indiren 5 eksen işleme stratejisi geliştirdik.",
    },
    manufacturing: {
      title: "Billet 6061-T6 to Type II Matte Anodizing",
      titleTr: "6061-T6 Kütükten Tip II Mat Eloksala",
      body: "Machined parts undergo automated glass bead-blasting to eliminate tool marks, followed by deep black Type II anodizing tested to 500-hour salt spray resistance.",
      bodyTr:
        "İşlenen parçalar takım izlerini gidermek için cam küreyle kumlama işlemine tabi tutuldu; 500 saat tuz sisi testinden geçen derin siyah mat eloksalla kaplandı.",
    },
    outcome: {
      title: "Field Deployment in Hazardous Plants",
      titleTr: "Zorlu Tesislerde Sahada Aktif",
      body: "Over 800 enclosures successfully deployed with zero reported thermal throttle events across a 12-month monitoring cycle.",
      bodyTr:
        "12 aylık izleme döngüsünde sıfır termal tıkanma ile 800'ün üzerinde gövde endüstriyel tesislerde sorunsuz çalışmaktadır.",
    },
    services: ["Enclosure Design", "Thermal Engineering", "CNC Machining", "Finishing"],
    stages: [
      {
        id: "al-stage-1",
        label: "Prototype",
        labelTr: "Prototip",
        title: "Thermal Validation Unit",
        titleTr: "Termal Doğrulama Prototipi",
        description:
          "Initial 3D printed nylon concept fitted with thermocouples to verify internal airflow channels.",
        descriptionTr:
          "Dahili hava kanallarını doğrulamak için termokupl takılmış ilk fonksiyonel prototip.",
        image: heroPrototypes,
        alt: "Thermal Enclosure Prototype Stage",
      },
      {
        id: "al-stage-2",
        label: "Machining",
        labelTr: "Talaşlı İmalat",
        title: "CNC Toolpath Verification",
        titleTr: "CNC İşleme Yolu Doğrulaması",
        description:
          "Billet aluminum cavity machining showing the integrated fin profile and seal channel.",
        descriptionTr:
          "Entegre kanatçık profilini ve conta yuvasını gösteren kütük alüminyum işleme.",
        image: moldAsset,
        alt: "CNC Machining Process for Aluminium Series",
      },
      {
        id: "al-stage-3",
        label: "Final Product",
        labelTr: "Nihai Ürün",
        title: "Bead-blasted & Anodized Enclosure Assembly",
        titleTr: "Kumlama ve Eloksal Sonrası Nihai Montaj",
        description: "Complete IP67 sealed assembly ready for mission-critical plant installation.",
        descriptionTr: "Tesis kurulumuna hazır eksiksiz IP67 sızdırmaz gövde montajı.",
        image: finalPx1,
        alt: "Finished Aluminium Enclosure",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: ProjectItem;
  next: ProjectItem;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex = (safeIndex - 1 + projects.length) % projects.length;
  const nextIndex = (safeIndex + 1) % projects.length;
  return {
    prev: projects[prevIndex]!,
    next: projects[nextIndex]!,
  };
}
