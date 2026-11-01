import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/components/pages/ServicePages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      lang: "tr",
      path: "/services",
      title: "Hizmetler — 100KRAFT",
      description:
        "Ürün tasarımı, 3D modelleme, 3D baskı, prototipleme, kalıp ve döküm, üretim danışmanlığı.",
    }),
  component: () => <ServicesIndexPage lang="tr" />,
});
