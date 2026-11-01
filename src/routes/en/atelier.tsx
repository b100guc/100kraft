import { createFileRoute } from "@tanstack/react-router";
import { AtelierPage } from "@/components/pages/AtelierPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/atelier")({
  head: () =>
    pageHead({
      lang: "en",
      path: "/atelier",
      title: "Atelier — Design and fabrication workshop in Antalya | 100KRAFT",
      description:
        "Burak Yüzgüç’s workshop in Antalya: 3D modelling, 3D printing, silicone moulds, concrete and resin casting, hand finishing. What we draw, we make here.",
    }),
  component: () => <AtelierPage lang="en" />,
});
