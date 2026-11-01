import blogData from "@/data/blog.generated.json";
import { storeProducts, type StoreImage } from "@/data/projects";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  html: string;
  toc: { id: string; title: string }[];
  faq: { q: string; a: string }[];
  words: number;
  minutes: number;
  category: string;
  date: string;
  cover: StoreImage;
  coverAlt: string;
}

const PUBLISHED = "2026-11-01";

function storeImage(slug: string, index: number): StoreImage {
  const image = storeProducts.find((p) => p.slug === slug)?.images[index];
  if (!image) throw new Error(`Blog cover ${slug}#${index} missing — run npm run sync:store`);
  return image;
}

const DRAGON = "the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru";
const FLEXI_SET = "toothless-light-fury-ikili-sevgili-koleksiyon-paketi-avantajli-set";

/** Editorial details per post: category and a cover from the real product photography. */
const meta: Record<string, { category: string; cover: [string, number]; alt: string }> = {
  "3d-baski-fiyatlari-nasil-belirlenir": {
    category: "Rehber",
    cover: ["kamp-atesi", 0],
    alt: "3D baskı Kamp Ateşi lamba",
  },
  "fdm-sla-sls-hangi-3d-baski-teknolojisi": {
    category: "Teknoloji",
    cover: [FLEXI_SET, 2],
    alt: "FDM baskı eklemli figürler",
  },
  "3d-baski-malzeme-secimi-pla-petg-abs-tpu": {
    category: "Malzeme",
    cover: ["grainztag-pet", 0],
    alt: "Renkli 3D baskı künyeler",
  },
  "fikirden-prototipe-urun-gelistirme-sureci": {
    category: "Süreç",
    cover: ["wall-decor-2", 1],
    alt: "Gri Wall Decor paneli",
  },
  "3d-baski-icin-dosya-hazirlama-stl-step": {
    category: "Rehber",
    cover: [DRAGON, 2],
    alt: "Siyah ejderha duvar büstü",
  },
  "hizli-prototipleme-ile-kalip-maliyeti-dusurmek": {
    category: "Süreç",
    cover: ["wall-decor-1", 3],
    alt: "Mavi Wall Decor paneli",
  },
  "silikon-kalip-ve-dokum-kucuk-seri-uretim": {
    category: "Kalıp & döküm",
    cover: ["wall-decor-2-uclu", 1],
    alt: "Gri kabartmalı panel",
  },
  "eklemli-flexi-figur-nasil-tasarlanir": {
    category: "Tasarım",
    cover: ["dissiz-toothless-hareketli-eklemli-ejderha-figuru-20-cm", 1],
    alt: "Eklemli siyah ejderha figürü",
  },
  "nfc-etiketli-akilli-urunler-grainztag": {
    category: "Ürün",
    cover: ["grainztag-pet2", 0],
    alt: "İsim baskılı NFC künyeler",
  },
  "moduler-duvar-dekoru-wall-decor": {
    category: "Ürün",
    cover: ["wall-decor-2", 0],
    alt: "Kırmızı Wall Decor #2",
  },
  "3d-baski-yuzey-islemleri-zimpara-astar-boya": {
    category: "Son işlem",
    cover: [DRAGON, 3],
    alt: "Kırmızı boyalı ejderha",
  },
  "tersine-muhendislik-kirik-parcayi-yeniden-uretmek": {
    category: "Rehber",
    cover: ["light-fury-hareketli-eklemli-ejderha-figuru-20-cm", 0],
    alt: "Beyaz eklemli ejderha",
  },
};

type RawPost = Omit<BlogPost, "category" | "date" | "cover" | "coverAlt"> & {
  cover: StoreImage | null;
};

export const posts: BlogPost[] = (blogData.posts as RawPost[]).flatMap((p) => {
  const m = meta[p.slug];
  if (!m) return [];
  return [
    {
      ...p,
      category: m.category,
      date: PUBLISHED,
      // Generated editorial cover when available, otherwise a product photo.
      cover: p.cover ?? storeImage(m.cover[0], m.cover[1]),
      coverAlt: p.cover ? p.title : m.alt,
    },
  ];
});

const order = Object.keys(meta);
posts.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsBySlugs(slugs: string[]): BlogPost[] {
  return slugs.flatMap((s) => posts.filter((p) => p.slug === s));
}
