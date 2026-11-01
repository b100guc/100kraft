import { faq } from "@/data/faq";
import { productLabel, type Img, type ProjectItem } from "@/data/projects";
import type { ServiceItem } from "@/data/services";
import { siteContent, type Language } from "@/data/translations";
import type { BlogPost } from "@/data/blog";
import { absolute, breadcrumbLd, faqLd, pageHead, productsLd } from "@/lib/seo";

const home = { tr: "Ana sayfa", en: "Home" };
const largest = (image: Img) => `${image.src}-${image.widths[image.widths.length - 1]}.webp`;
const prefix = (lang: Language) => (lang === "tr" ? "" : "/en");

export function homeHead(lang: Language, title: string, description: string) {
  return pageHead({ lang, path: "/", title, description, jsonLd: [faqLd(faq[lang])] });
}

export function workDetailHead(project: ProjectItem, lang: Language) {
  const p = prefix(lang);
  return pageHead({
    lang,
    path: `/work/${project.slug}`,
    title: `${project.name} — ${project.category[lang]} | 100KRAFT`,
    description: `${project.summary[lang]} ${project.body[lang]}`.slice(0, 158),
    image: largest(project.cover),
    jsonLd: [
      productsLd(
        project.products.map((prod) => ({
          name: productLabel(prod, lang),
          url: prod.url,
          price: prod.price,
          inStock: prod.inStock,
          description: project.summary[lang],
          ...(prod.images[0]
            ? { image: largest({ ...prod.images[0], alt: { tr: "", en: "" } }) }
            : {}),
        })),
      ),
      breadcrumbLd([
        { name: home[lang], path: p || "/" },
        { name: siteContent[lang].work.title, path: `${p}/work` },
        { name: project.name, path: `${p}/work/${project.slug}` },
      ]),
    ],
  });
}

export function serviceDetailHead(service: ServiceItem, lang: Language) {
  const p = prefix(lang);
  return pageHead({
    lang,
    path: `/services/${service.slug}`,
    title: `${service.title[lang]} — Antalya | 100KRAFT`,
    description: service.intro[lang].slice(0, 158),
    jsonLd: [
      {
        "@type": "Service",
        name: service.title[lang],
        description: service.intro[lang],
        areaServed: "TR",
        provider: { "@id": "https://100kraft.com/#business" },
      },
      faqLd(service.faq.map((f) => ({ q: f.q[lang], a: f.a[lang] }))),
      breadcrumbLd([
        { name: home[lang], path: p || "/" },
        { name: siteContent[lang].services.title, path: `${p}/services` },
        { name: service.title[lang], path: `${p}/services/${service.slug}` },
      ]),
    ],
  });
}

export function blogPostHead(post: BlogPost) {
  const url = `/blog/${post.slug}`;
  const image = `${post.cover.src}-${post.cover.widths[post.cover.widths.length - 1]}.webp`;
  const head = pageHead({
    lang: "tr",
    path: url,
    title: `${post.title} | 100KRAFT Blog`,
    description: post.description,
    image,
    jsonLd: [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: absolute(image),
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "tr-TR",
        wordCount: post.words,
        mainEntityOfPage: absolute(url),
        author: { "@type": "Organization", name: "100KRAFT", url: "https://100kraft.com" },
        publisher: { "@id": "https://100kraft.com/#business" },
      },
      ...(post.faq.length ? [faqLd(post.faq)] : []),
      breadcrumbLd([
        { name: home.tr, path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: url },
      ]),
    ],
  });
  // Articles are Turkish only: no English alternate.
  return { ...head, links: head.links.filter((l) => l.hrefLang !== "en") };
}
