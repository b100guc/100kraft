// Turns the drafts in content/blog/*.json into src/data/blog.generated.json:
// sanitised HTML (allow-listed tags, no attributes), heading ids, table of contents,
// FAQ pairs for FAQPage schema and reading time.
// Usage: npm run build:blog

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "content/blog");
const ALLOWED = new Set([
  "h2",
  "h3",
  "p",
  "ul",
  "ol",
  "li",
  "strong",
  "em",
  "b",
  "i",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "blockquote",
  "br",
]);

const slugify = (s) =>
  s
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const text = (html) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function sanitize(html) {
  let out = html
    .replace(/<(script|style|svg|button)[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(\/?)([a-z0-9]+)[^>]*>/gi, (_, close, tag) => {
      const t = tag.toLowerCase();
      const norm = t === "b" ? "strong" : t === "i" ? "em" : t;
      return ALLOWED.has(t) ? `<${close}${norm}>` : "";
    });
  // Cut to the article markers, dropping the META line and the markers themselves.
  const start = out.indexOf("&lt;&lt;&lt;YAZI");
  const end = out.lastIndexOf("YAZI&gt;&gt;&gt;");
  if (start >= 0 && end > start) out = out.slice(start + "&lt;&lt;&lt;YAZI".length, end);
  out = out.trim();
  if (!out.startsWith("<")) out = `<p>${out}`;
  if (!out.endsWith(">")) out = `${out}</p>`;
  return out
    .replace(/<p>\s*<\/p>/g, "")
    .replace(/^\s*<\/p>/, "")
    .replace(/<p>\s*$/, "")
    .replace(/\s+\n/g, "\n")
    .trim();
}

/** Encodes content/blog/covers/<slug>.png (if present) into public/blog/<slug>-<w>.(avif|webp). */
async function cover(slug) {
  const src = path.join(dir, "covers", `${slug}.png`);
  if (!existsSync(src)) return null;
  const outDir = path.join(root, "public/blog");
  await mkdir(outDir, { recursive: true });
  const input = await sharp(src).resize({ width: 1600, height: 900, fit: "cover" }).toBuffer();
  const widths = [640, 1024, 1600];
  for (const w of widths) {
    const base = path.join(outDir, `${slug}-${w}`);
    if (existsSync(`${base}.avif`)) continue;
    const img = sharp(input).resize(w);
    await img.clone().avif({ quality: 52, effort: 5 }).toFile(`${base}.avif`);
    await img.clone().webp({ quality: 78 }).toFile(`${base}.webp`);
  }
  const tiny = await sharp(input).resize(16).webp({ quality: 40 }).toBuffer();
  const { dominant } = await sharp(input).stats();
  return {
    src: `/blog/${slug}`,
    widths,
    width: 1600,
    height: 900,
    lqip: `data:image/webp;base64,${tiny.toString("base64")}`,
    color: `#${[dominant.r, dominant.g, dominant.b].map((c) => c.toString(16).padStart(2, "0")).join("")}`,
  };
}

/**
 * Optional in-article illustration (content/blog/inline/<slug>.png, made with Gemini in
 * Antigravity). Encoded to public/blog/<slug>-figure-<w>.(avif|webp) and placed after the
 * first section, captioned as AI-generated.
 */
async function figure(slug, title) {
  const src = path.join(dir, "inline", `${slug}.png`);
  if (!existsSync(src)) return null;
  const outDir = path.join(root, "public/blog");
  await mkdir(outDir, { recursive: true });
  const input = await sharp(src).resize({ width: 1600, height: 900, fit: "cover" }).toBuffer();
  const widths = [640, 1024, 1600];
  for (const w of widths) {
    const base = path.join(outDir, `${slug}-figure-${w}`);
    if (existsSync(`${base}.avif`)) continue;
    const img = sharp(input).resize(w);
    await img.clone().avif({ quality: 52, effort: 5 }).toFile(`${base}.avif`);
    await img.clone().webp({ quality: 78 }).toFile(`${base}.webp`);
  }
  const set = (ext) => widths.map((w) => `/blog/${slug}-figure-${w}.${ext} ${w}w`).join(", ");
  const sizes = "(min-width: 1024px) 58vw, 100vw";
  return `<figure><picture><source type="image/avif" srcset="${set("avif")}" sizes="${sizes}"><img src="/blog/${slug}-figure-1600.webp" srcset="${set("webp")}" sizes="${sizes}" width="1600" height="900" loading="lazy" decoding="async" alt="${title.replace(/"/g, "&quot;")} — illüstrasyon"></picture><figcaption>İllüstrasyon: Gemini ile üretildi.</figcaption></figure>`;
}

const files = (await readdir(dir)).filter((f) => f.endsWith(".json"));
const posts = [];
for (const f of files) {
  const raw = JSON.parse(await readFile(path.join(dir, f), "utf8"));
  let html = sanitize(raw.html);
  const toc = [];
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner) => {
    const id = slugify(inner);
    toc.push({ id, title: text(inner) });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  const fig = await figure(raw.slug, raw.title);
  if (fig) {
    // After the first section: just before the second h2.
    const h2s = [...html.matchAll(/<h2 id=/g)];
    const at = h2s[1]?.index ?? h2s[0]?.index ?? html.length;
    html = `${html.slice(0, at)}${fig}\n${html.slice(at)}`;
  }

  // FAQ: h3 + following paragraph(s) after the "Sık sorulanlar" heading.
  const faq = [];
  const faqStart = html.search(/<h2 id="sik-sorulanlar">/);
  if (faqStart >= 0) {
    const tail = html.slice(faqStart);
    for (const m of tail.matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)) {
      faq.push({ q: text(m[1]), a: text(m[2]) });
    }
  }

  const words = text(html).split(" ").length;
  posts.push({
    slug: raw.slug,
    title: raw.title,
    description: raw.meta,
    html,
    toc: toc.filter((t) => t.id !== "sik-sorulanlar"),
    faq,
    words,
    minutes: Math.max(1, Math.round(words / 200)),
    cover: await cover(raw.slug),
  });
  console.log(`✓ ${raw.slug} — ${words} words, ${toc.length} sections, ${faq.length} faq`);
}

await writeFile(
  path.join(root, "src/data/blog.generated.json"),
  `${JSON.stringify({ posts }, null, 2)}\n`,
);
