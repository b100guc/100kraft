// Pulls the live catalogue from store.100kraft.com (ikas) and writes:
//   src/data/store.generated.json  – names, prices, variants, image metadata
//   public/store/<slug>/<n>-<w>.(avif|webp) – responsive images
// Usage: npm run sync:store   (add --force to re-encode existing images)

import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const STORE = "https://store.100kraft.com";
const MERCHANT = "a988237b-cea8-4c5f-b1e1-8c050fbd528b";
const WIDTHS = [480, 960, 1600];
const UA = { "User-Agent": "Mozilla/5.0 (100kraft.com catalogue sync)" };
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(root, ".cache/store");
const publicDir = path.join(root, "public/store");
const force = process.argv.includes("--force");

async function getText(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function* findProducts(node) {
  if (Array.isArray(node)) {
    for (const v of node) yield* findProducts(v);
  } else if (node && typeof node === "object") {
    if (Array.isArray(node.variants) && node.metaData?.slug) yield node;
    for (const v of Object.values(node)) yield* findProducts(v);
  }
}

function collectImages(product) {
  const seen = new Set();
  const images = [];
  for (const v of product.variants) {
    for (const im of [...(v.images ?? [])].sort((a, b) => a.order - b.order)) {
      if (im.isVideo || seen.has(im.imageId)) continue;
      seen.add(im.imageId);
      images.push(im.imageId);
    }
  }
  // Products without gallery images still carry swatch photos on their variant values.
  for (const t of product.variantTypes ?? []) {
    for (const val of t.variantType?.values ?? []) {
      if (val.thumbnailImageId && !seen.has(val.thumbnailImageId)) {
        seen.add(val.thumbnailImageId);
        images.push(val.thumbnailImageId);
      }
    }
  }
  return images;
}

async function processImage(slug, index, imageId) {
  const raw = path.join(cacheDir, `${imageId}.webp`);
  if (!existsSync(raw)) {
    const res = await fetch(
      `https://cdn.myikas.com/images/${MERCHANT}/${imageId}/2560/image.webp`,
      {
        headers: UA,
      },
    );
    if (!res.ok) throw new Error(`image ${imageId}: ${res.status}`);
    await writeFile(raw, Buffer.from(await res.arrayBuffer()));
  }

  const input = await readFile(raw);
  const meta = await sharp(input).rotate().metadata();
  const outDir = path.join(publicDir, slug);
  await mkdir(outDir, { recursive: true });

  const widths = WIDTHS.filter((w) => w <= meta.width);
  if (widths.length === 0) widths.push(meta.width);
  for (const w of widths) {
    const base = path.join(outDir, `${index}-${w}`);
    if (force || !existsSync(`${base}.avif`)) {
      const pipeline = sharp(input).rotate().resize({ width: w, withoutEnlargement: true });
      await pipeline.clone().avif({ quality: 52, effort: 5 }).toFile(`${base}.avif`);
      await pipeline.clone().webp({ quality: 78 }).toFile(`${base}.webp`);
    }
  }

  const tiny = await sharp(input).rotate().resize(16).webp({ quality: 40 }).toBuffer();
  const { dominant } = await sharp(input).rotate().stats();
  const hex = `#${[dominant.r, dominant.g, dominant.b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;

  return {
    src: `/store/${slug}/${index}`,
    widths,
    width: meta.width,
    height: meta.height,
    lqip: `data:image/webp;base64,${tiny.toString("base64")}`,
    color: hex,
  };
}

async function main() {
  await mkdir(cacheDir, { recursive: true });
  const sitemap = await getText(`${STORE}/products.xml`);
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u.replace(/\/$/, "") !== STORE);

  const products = [];
  for (const url of urls) {
    const slug = url.split("/").pop();
    const html = await getText(url);
    const json = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)?.[1];
    if (!json) throw new Error(`no data on ${url}`);
    const product = [...findProducts(JSON.parse(json).props.pageProps)].find(
      (p) => p.metaData.slug === slug,
    );
    if (!product) throw new Error(`product ${slug} not found on its page`);

    const prices = product.variants.flatMap((v) => v.prices ?? []);
    const finals = prices.map((p) => p.discountPrice ?? p.sellPrice);
    const cheapest = prices[finals.indexOf(Math.min(...finals))];
    const stock = product.variants.reduce(
      (n, v) => n + (v.stocks ?? []).reduce((m, s) => m + (s.stockCount ?? 0), 0),
      0,
    );
    const sellIfOutOfStock = product.variants.some((v) => v.sellIfOutOfStock);

    const imageIds = collectImages(product);
    const images = [];
    for (const [i, id] of imageIds.entries()) images.push(await processImage(slug, i, id));

    products.push({
      slug,
      name: product.name,
      url,
      category: product.categories?.[0]?.name ?? null,
      categoryPath: product.categories?.[0]?.categoryPath ?? [],
      price: cheapest?.discountPrice ?? cheapest?.sellPrice ?? null,
      listPrice: cheapest?.discountPrice ? cheapest.sellPrice : null,
      priceFrom: new Set(finals).size > 1,
      inStock: stock > 0 || sellIfOutOfStock,
      options: (product.variantTypes ?? []).map((t) => ({
        name: t.variantType.name.replace(/\d+$/, ""),
        values: t.variantType.values.map((v) => v.name),
      })),
      images,
    });
    console.log(`✓ ${slug} — ${images.length} images, ₺${products.at(-1).price}`);
  }

  await writeFile(
    path.join(root, "src/data/store.generated.json"),
    `${JSON.stringify({ syncedAt: new Date().toISOString(), products }, null, 2)}\n`,
  );
  console.log(`Wrote ${products.length} products.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
