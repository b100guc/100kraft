// Writes public/sitemap.xml (with hreflang pairs and image entries).
// Usage: npm run build:sitemap  — run after sync:store / build:blog.

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://100kraft.com";
const today = new Date().toISOString().slice(0, 10);
const store = JSON.parse(await readFile(path.join(root, "src/data/store.generated.json"), "utf8"));
const blog = JSON.parse(await readFile(path.join(root, "src/data/blog.generated.json"), "utf8"));

const productImages = (slug) =>
  (store.products.find((p) => p.slug === slug)?.images ?? [])
    .slice(0, 4)
    .map((i) => `${ORIGIN}${i.src}-${i.widths.at(-1)}.webp`);

const works = {
  "wall-decor-series": "wall-decor-1",
  "the-dragons-keeper": "the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru",
  "flexi-dragons": "toothless-light-fury-ikili-sevgili-koleksiyon-paketi-avantajli-set",
  "kamp-atesi": "kamp-atesi",
  "grainztag-pet": "grainztag-pet2",
};
const services = [
  "product-design",
  "3d-design-cad",
  "3d-printing",
  "rapid-prototyping",
  "mold-design",
  "manufacturing-consulting",
];

// [path, priority, changefreq, images, bilingual]
const pages = [
  ["/", 1.0, "weekly", [], true],
  ["/work", 0.9, "weekly", [], true],
  ...Object.entries(works).map(([w, p]) => [`/work/${w}`, 0.8, "weekly", productImages(p), true]),
  ["/services", 0.8, "monthly", [], true],
  ...services.map((s) => [`/services/${s}`, 0.8, "monthly", [], true]),
  ["/atelier", 0.7, "monthly", [], true],
  ["/start-project", 0.6, "yearly", [], true],
  ["/blog", 0.7, "weekly", [], false],
  ...blog.posts.map((p) => [`/blog/${p.slug}`, 0.6, "monthly", [], false]),
];

const urls = [];
for (const [p, priority, changefreq, images, bilingual] of pages) {
  const tr = `${ORIGIN}${p}`;
  const en = `${ORIGIN}${p === "/" ? "/en" : `/en${p}`}`;
  const variants = bilingual
    ? [
        [tr, priority],
        [en, +(priority - 0.05).toFixed(2)],
      ]
    : [[tr, priority]];
  for (const [loc, prio] of variants) {
    const alt = bilingual
      ? [
          ["tr", tr],
          ["en", en],
          ["x-default", tr],
        ]
          .map(([l, h]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${h}"/>`)
          .join("\n")
      : "";
    const imgs = images
      .map((i) => `    <image:image><image:loc>${i}</image:loc></image:image>`)
      .join("\n");
    urls.push(
      [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        alt,
        imgs,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${prio}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}

await writeFile(
  path.join(root, "public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`,
);
console.log(`sitemap: ${urls.length} urls`);
