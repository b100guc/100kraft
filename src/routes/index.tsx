import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { homeHead } from "@/lib/heads";

export const Route = createFileRoute("/")({
  head: () =>
    homeHead(
      "tr",
      "100KRAFT — Antalya 3D Baskı, Ürün Tasarımı ve Prototip Atölyesi",
      "Ürün tasarımı, 3D baskı, prototip ve kalıp. Antalya'da tasarlıyor, kendi atölyemizde üretiyoruz.",
    ),
  component: () => <HomePage lang="tr" />,
});
