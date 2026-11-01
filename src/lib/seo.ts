import type { Language } from "@/data/translations";

const ORIGIN = "https://100kraft.com";

/** Head tags for a page that exists in both languages. `path` is the Turkish path, e.g. "/work". */
export function pageHead({
  lang,
  path,
  title,
  description,
  image = "/og-image.jpg",
  jsonLd = [],
}: {
  lang: Language;
  path: string;
  title: string;
  description: string;
  image?: string;
  jsonLd?: object[];
}) {
  const trUrl = `${ORIGIN}${path === "/" ? "/" : path}`;
  const enUrl = `${ORIGIN}${path === "/" ? "/en" : `/en${path}`}`;
  const url = lang === "tr" ? trUrl : enUrl;
  const imageUrl = image.startsWith("http") ? image : `${ORIGIN}${image}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: lang === "tr" ? "tr_TR" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "tr", href: trUrl },
      { rel: "alternate", hrefLang: "en", href: enUrl },
      { rel: "alternate", hrefLang: "x-default", href: trUrl },
    ],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", ...data }),
    })),
  };
}

export const absolute = (p: string) => (p.startsWith("http") ? p : `${ORIGIN}${p}`);

export const businessLd = {
  "@type": "LocalBusiness",
  "@id": `${ORIGIN}/#business`,
  name: "100KRAFT",
  url: ORIGIN,
  logo: `${ORIGIN}/brand/100kraft-mark-512.png`,
  image: `${ORIGIN}/og-image.jpg`,
  description:
    "Product design, 3D printing, prototyping and mould-making studio in Antalya, Turkey.",
  email: "burak@100kraft.com",
  telephone: "+905455902506",
  founder: {
    "@type": "Person",
    name: "Burak Yüzgüç",
    sameAs: "https://www.instagram.com/burakyuzguc/",
  },
  employee: [
    {
      "@type": "Person",
      name: "Burak Yüzgüç",
      jobTitle: "Industrial Designer",
      alumniOf: "Yeditepe University",
    },
    {
      "@type": "Person",
      name: "Selin Minta",
      jobTitle: "Industrial Designer",
      alumniOf: "Selçuk University",
    },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Antalya", addressCountry: "TR" },
  areaServed: "TR",
  sameAs: ["https://www.instagram.com/100kraft/", "https://store.100kraft.com"],
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function productsLd(
  products: {
    name: string;
    url: string;
    price: number | null;
    inStock: boolean;
    image?: string;
    description: string;
  }[],
) {
  return {
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        ...(p.image ? { image: absolute(p.image) } : {}),
        brand: { "@type": "Brand", name: "100KRAFT" },
        offers: {
          "@type": "Offer",
          url: p.url,
          priceCurrency: "TRY",
          ...(p.price != null ? { price: p.price } : {}),
          availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        },
      },
    })),
  };
}
