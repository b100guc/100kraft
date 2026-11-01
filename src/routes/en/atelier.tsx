import { createFileRoute } from "@tanstack/react-router";
import { AtelierPage } from "@/components/pages/AtelierPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/atelier")({
  head: () =>
    pageHead({
      lang: "en",
      path: "/atelier",
      title: "About — Burak Yüzgüç & Selin Minta | 100KRAFT",
      description:
        "100KRAFT is run by industrial designers Burak Yüzgüç and Selin Minta. 3D modelling, 3D printing, silicone moulds and casting in our Antalya workshop.",
    }),
  component: () => <AtelierPage lang="en" />,
});
