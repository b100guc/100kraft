import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/pages/BlogPages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const head = pageHead({
      lang: "tr",
      path: "/blog",
      title: "Blog — 3D baskı, prototip ve kalıp rehberleri | 100KRAFT",
      description:
        "3D baskı fiyatları, malzeme seçimi, dosya hazırlama, silikon kalıp ve ürün geliştirme üzerine atölyeden pratik rehberler.",
    });
    return { ...head, links: head.links.filter((l) => l.hrefLang !== "en") };
  },
  component: BlogIndexPage,
});
