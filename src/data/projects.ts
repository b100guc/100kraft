import type { Language } from "@/data/translations";
import storeData from "@/data/store.generated.json";

type Localized = Record<Language, string>;

/** One responsive image produced by scripts/sync-store.mjs. */
export interface StoreImage {
  src: string;
  widths: number[];
  width: number;
  height: number;
  lqip: string;
  color: string;
}

export interface StoreProduct {
  slug: string;
  name: string;
  url: string;
  category: string | null;
  price: number | null;
  listPrice: number | null;
  priceFrom: boolean;
  inStock: boolean;
  options: { name: string; values: string[] }[];
  images: StoreImage[];
}

export interface Img extends StoreImage {
  alt: Localized;
}

export interface ProjectItem {
  slug: string;
  name: string;
  category: Localized;
  summary: Localized;
  body: Localized;
  specs: { label: Localized; value: Localized }[];
  products: StoreProduct[];
  cover: Img;
  gallery: Img[];
  services: string[];
}

export const storeProducts = storeData.products as StoreProduct[];
export const storeSyncedAt = storeData.syncedAt;

function product(slug: string): StoreProduct {
  const p = storeProducts.find((x) => x.slug === slug);
  if (!p) throw new Error(`Store product "${slug}" missing — run npm run sync:store`);
  return p;
}

function img(slug: string, index: number, tr: string, en: string): Img {
  const image = product(slug).images[index];
  if (!image) throw new Error(`Image ${index} of "${slug}" missing — run npm run sync:store`);
  return { ...image, alt: { tr, en } };
}

const DRAGON = "the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru";
const TOOTHLESS = "dissiz-toothless-hareketli-eklemli-ejderha-figuru-20-cm";
const LIGHT_FURY = "light-fury-hareketli-eklemli-ejderha-figuru-20-cm";
const FLEXI_SET = "toothless-light-fury-ikili-sevgili-koleksiyon-paketi-avantajli-set";

/** Hero panels: Wall Decor #2 in its four colours, unframed. */
export const heroPanels: Img[] = [
  img("wall-decor-2-uclu", 0, "Wall Decor #2, kırmızı", "Wall Decor #2, red"),
  img("wall-decor-2-uclu", 1, "Wall Decor #2, gri", "Wall Decor #2, grey"),
  img("wall-decor-2-uclu", 2, "Wall Decor #2, yeşil", "Wall Decor #2, green"),
  img("wall-decor-2-uclu", 3, "Wall Decor #2, mavi", "Wall Decor #2, blue"),
];

export const projects: ProjectItem[] = [
  {
    slug: "wall-decor-series",
    name: "Wall Decor",
    category: { tr: "Duvar dekoru", en: "Wall decor" },
    summary: {
      tr: "Geometrik kabartmalı, modüler duvar panelleri.",
      en: "Modular wall panels with a geometric relief.",
    },
    body: {
      tr: "İki desen, dört renk, üç çerçeve. Paneller tek başına ya da yan yana kullanılıyor; üçlü formatta her bölümün rengi ayrı seçiliyor. Tasarım, baskı ve montaj atölyede.",
      en: "Two patterns, four colours, three frames. Panels work alone or side by side; in the triptych each section takes its own colour. Design, printing and assembly happen in the workshop.",
    },
    specs: [
      { label: { tr: "Üretim", en: "Process" }, value: { tr: "3D baskı", en: "3D printed" } },
      {
        label: { tr: "Ölçü", en: "Size" },
        value: {
          tr: "10 × 10 cm tekli · 10 × 28 cm üçlü",
          en: "10 × 10 cm single · 10 × 28 cm triptych",
        },
      },
      {
        label: { tr: "Renk", en: "Colour" },
        value: { tr: "Kırmızı, gri, yeşil, mavi", en: "Red, grey, green, blue" },
      },
      {
        label: { tr: "Çerçeve", en: "Frame" },
        value: { tr: "Siyah, ahşap, beyaz", en: "Black, wood, white" },
      },
    ],
    products: [
      product("wall-decor-1"),
      product("wall-decor-2"),
      product("wall-decor-1-uclu"),
      product("wall-decor-2-uclu"),
    ],
    cover: img(
      "wall-decor-1",
      0,
      "Siyah çerçeveli kırmızı Wall Decor #1",
      "Red Wall Decor #1 in a black frame",
    ),
    gallery: [
      img("wall-decor-1", 1, "Wall Decor #1, gri", "Wall Decor #1, grey"),
      img("wall-decor-1", 2, "Wall Decor #1, yeşil", "Wall Decor #1, green"),
      img("wall-decor-1", 3, "Wall Decor #1, mavi", "Wall Decor #1, blue"),
      img("wall-decor-2", 0, "Wall Decor #2, kırmızı", "Wall Decor #2, red"),
      img("wall-decor-2", 1, "Wall Decor #2, gri", "Wall Decor #2, grey"),
      img("wall-decor-2", 2, "Wall Decor #2, yeşil", "Wall Decor #2, green"),
      img("wall-decor-2", 3, "Wall Decor #2, mavi", "Wall Decor #2, blue"),
      ...heroPanels,
    ],
    services: ["product-design", "3d-design-cad", "3d-printing"],
  },
  {
    slug: "the-dragons-keeper",
    name: "The Dragon’s Keeper",
    category: { tr: "Duvar büstü", en: "Wall sculpture" },
    summary: {
      tr: "Kanatları ve pençeleri takı askısı olan duvar büstü.",
      en: "A wall-mounted dragon whose wings and claws hold jewellery.",
    },
    body: {
      tr: "Kolye, yüzük, bileklik ve anahtarlar için duvara asılan 25 cm'lik bir ejderha. Pençeler ve kanat uçları askı olarak tasarlandı; ince detaylar baskı sonrası elde tamamlanıyor.",
      en: "A 25 cm dragon for necklaces, rings, bracelets and keys. Claws and wing tips are shaped as hooks; fine details are finished by hand after printing.",
    },
    specs: [
      {
        label: { tr: "Üretim", en: "Process" },
        value: { tr: "3D baskı, el işçiliği", en: "3D printed, hand-finished" },
      },
      { label: { tr: "Ölçü", en: "Size" }, value: { tr: "25 cm", en: "25 cm" } },
      {
        label: { tr: "Renk", en: "Colour" },
        value: {
          tr: "Siyah, bronz, kırmızı, beyaz, rainbow",
          en: "Black, bronze, red, white, rainbow",
        },
      },
      {
        label: { tr: "Montaj", en: "Mounting" },
        value: { tr: "Duvar aparatı dahil", en: "Wall fixing included" },
      },
    ],
    products: [product(DRAGON)],
    cover: img(DRAGON, 1, "Takılarla siyah ejderha askısı", "Black dragon holder with jewellery"),
    gallery: [
      img(DRAGON, 0, "Kırmızı-siyah ejderha", "Red and black dragon"),
      img(DRAGON, 3, "Kırmızı ejderha", "Red dragon"),
      img(DRAGON, 4, "Beyaz ejderha", "White dragon"),
      img(DRAGON, 2, "Siyah ejderha", "Black dragon"),
    ],
    services: ["3d-design-cad", "3d-printing"],
  },
  {
    slug: "flexi-dragons",
    name: "Flexi Ejderhalar",
    category: { tr: "Figür", en: "Figures" },
    summary: {
      tr: "Her boğumu ayrı hareket eden, eklemli 20 cm ejderha figürleri.",
      en: "Articulated 20 cm dragon figures with independently moving joints.",
    },
    body: {
      tr: "Gövde, kanat ve kuyruk tek baskıda, birbirine geçmiş eklemlerle çıkıyor; montaj gerektirmiyor. Toothless ve Light Fury tek tek ya da ikili kutu olarak satılıyor.",
      en: "Body, wings and tail print in one go with interlocking joints, so no assembly is needed. Toothless and Light Fury are sold individually or as a boxed pair.",
    },
    specs: [
      {
        label: { tr: "Üretim", en: "Process" },
        value: { tr: "3D baskı, eklemli", en: "3D printed, articulated" },
      },
      { label: { tr: "Ölçü", en: "Size" }, value: { tr: "20–25 cm", en: "20–25 cm" } },
      { label: { tr: "Malzeme", en: "Material" }, value: { tr: "PLA", en: "PLA" } },
    ],
    products: [product(FLEXI_SET), product(TOOTHLESS), product(LIGHT_FURY)],
    cover: img(
      FLEXI_SET,
      0,
      "Siyah ve beyaz eklemli ejderha figürleri",
      "Black and white articulated dragon figures",
    ),
    gallery: [
      img(FLEXI_SET, 4, "Havada iki ejderha figürü", "Two dragon figures mid-air"),
      img(FLEXI_SET, 1, "Ahşap masada iki figür", "Both figures on a wooden desk"),
      img(TOOTHLESS, 1, "Siyah ejderha figürü", "Black dragon figure"),
      img(LIGHT_FURY, 0, "Beyaz ejderha figürü", "White dragon figure"),
      img(FLEXI_SET, 5, "Kutulu ikili set", "The boxed pair"),
      img(FLEXI_SET, 2, "Figürlerin eklem detayı", "Joint detail of the figures"),
    ],
    services: ["3d-design-cad", "3d-printing"],
  },
  {
    slug: "kamp-atesi",
    name: "Kamp Ateşi",
    category: { tr: "Aydınlatma", en: "Lighting" },
    summary: {
      tr: "Alev ve odun formunu birleştiren dekoratif lamba.",
      en: "A decorative lamp shaped as a flame over a log pile.",
    },
    body: {
      tr: "Işığı geçiren alev gövdesi, dokulu odun yığınının üzerine oturuyor. Masa, raf ya da çocuk odası için küçük bir kamp ateşi.",
      en: "A light-diffusing flame sits on a textured log pile. A small campfire for a desk, shelf or kids’ room.",
    },
    specs: [
      { label: { tr: "Üretim", en: "Process" }, value: { tr: "3D baskı", en: "3D printed" } },
      {
        label: { tr: "Kullanım", en: "Use" },
        value: { tr: "Dekoratif aydınlatma", en: "Decorative lighting" },
      },
    ],
    products: [product("kamp-atesi")],
    cover: img("kamp-atesi", 0, "Kamp ateşi şeklinde lamba", "Campfire-shaped lamp"),
    gallery: [],
    services: ["product-design", "3d-printing"],
  },
  {
    slug: "grainztag-pet",
    name: "GrainzTag",
    category: { tr: "NFC künye", en: "NFC tag" },
    summary: {
      tr: "NFC çipli, kişiye özel evcil hayvan künyeleri.",
      en: "Personalised pet tags with an NFC chip.",
    },
    body: {
      tr: "Telefonu dokundurmak iletişim bilgisini açmaya yetiyor. İsim baskılı, renkli ve hafif; tekli, 10'lu ve 100'lü paketlerle üretiliyor.",
      en: "Tap a phone to open the owner’s contact details. Name-printed, colourful and light; made singly or in packs of 10 and 100.",
    },
    specs: [
      {
        label: { tr: "Üretim", en: "Process" },
        value: { tr: "3D baskı, NFC çip", en: "3D printed, NFC chip" },
      },
      {
        label: { tr: "Paket", en: "Packs" },
        value: { tr: "Tekli, 10'lu, 100'lü", en: "Single, 10, 100" },
      },
    ],
    products: [product("grainztag-pet2"), product("grainztag-pet")],
    cover: img(
      "grainztag-pet2",
      0,
      "İsim baskılı NFC evcil hayvan künyeleri",
      "Name-printed NFC pet tags",
    ),
    gallery: [img("grainztag-pet", 0, "Renkli pati künyeler", "Colourful paw tags")],
    services: ["product-design", "3d-printing"],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): ProjectItem {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  return projects[(index + 1) % projects.length]!;
}

/** Lowest current price across a collection's products. */
export function collectionPrice(project: ProjectItem): number | null {
  const prices = project.products.map((p) => p.price).filter((n): n is number => n != null);
  return prices.length ? Math.min(...prices) : null;
}

const formatter = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });
export function formatPrice(value: number): string {
  return `₺${formatter.format(value)}`;
}

const labels: Record<string, Localized> = {
  "wall-decor-1": { tr: "Wall Decor #1 · Tekli", en: "Wall Decor #1 · Single" },
  "wall-decor-2": { tr: "Wall Decor #2 · Tekli", en: "Wall Decor #2 · Single" },
  "wall-decor-1-uclu": { tr: "Wall Decor #1 · Üçlü", en: "Wall Decor #1 · Triptych" },
  "wall-decor-2-uclu": { tr: "Wall Decor #2 · Üçlü", en: "Wall Decor #2 · Triptych" },
  [DRAGON]: { tr: "The Dragon’s Keeper", en: "The Dragon’s Keeper" },
  [TOOTHLESS]: { tr: "Toothless", en: "Toothless" },
  [LIGHT_FURY]: { tr: "Light Fury", en: "Light Fury" },
  [FLEXI_SET]: { tr: "Toothless & Light Fury · İkili set", en: "Toothless & Light Fury · Pair" },
  "kamp-atesi": { tr: "Kamp Ateşi", en: "Kamp Ateşi" },
  "grainztag-pet": { tr: "GrainzTag #Pet", en: "GrainzTag #Pet" },
  "grainztag-pet2": { tr: "GrainzTag #Pet2", en: "GrainzTag #Pet2" },
};

/** Short display name; store titles carry SEO suffixes we don't need here. */
export function productLabel(p: StoreProduct, lang: Language): string {
  return labels[p.slug]?.[lang] ?? p.name;
}

const optionNames: Record<string, Localized> = {
  Renk: { tr: "renk", en: "colours" },
  "Ejderha Renk": { tr: "renk", en: "colours" },
  Çerçeve: { tr: "çerçeve", en: "frames" },
  Miktar: { tr: "paket", en: "pack sizes" },
};

/** "4 renk · 3 çerçeve" — distinct option groups, duplicates (per-section colour pickers) merged. */
export function optionSummary(p: StoreProduct, lang: Language): string {
  const seen = new Map<string, number>();
  for (const o of p.options) {
    const label = optionNames[o.name]?.[lang] ?? o.name.toLowerCase();
    seen.set(label, Math.max(seen.get(label) ?? 0, o.values.length));
  }
  return [...seen].map(([label, n]) => `${n} ${label}`).join(" · ");
}

/** Every store product with an image to show (falls back to its collection cover). */
export function catalogue(): { product: StoreProduct; image: Img; collection: ProjectItem }[] {
  return projects.flatMap((collection) =>
    collection.products.map((p) => ({
      product: p,
      collection,
      image: p.images[0]
        ? { ...p.images[0], alt: { tr: p.name, en: labels[p.slug]?.en ?? p.name } }
        : collection.cover,
    })),
  );
}
