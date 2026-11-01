import { createFileRoute } from "@tanstack/react-router";
import { AtelierPage } from "@/components/pages/AtelierPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/atelier")({
  head: () =>
    pageHead({
      lang: "tr",
      path: "/atelier",
      title: "Hakkımızda — Burak Yüzgüç & Selin Minta | 100KRAFT",
      description:
        "100KRAFT’ı iki endüstriyel tasarımcı yürütüyor: Burak Yüzgüç ve Selin Minta. Antalya’daki atölyemizde 3D modelleme, 3D baskı, silikon kalıp ve döküm.",
    }),
  component: () => <AtelierPage lang="tr" />,
});
