import { createFileRoute } from "@tanstack/react-router";
import { AtelierPage } from "@/components/pages/AtelierPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/atelier")({
  head: () =>
    pageHead({
      lang: "tr",
      path: "/atelier",
      title: "Atölye — Antalya’da tasarım ve üretim atölyesi | 100KRAFT",
      description:
        "Burak Yüzgüç’ün Antalya’daki atölyesi: 3D modelleme, 3D baskı, silikon kalıp, beton ve reçine döküm, elde son işlem. Çizdiğimizi burada üretiyoruz.",
    }),
  component: () => <AtelierPage lang="tr" />,
});
