import { createFileRoute } from "@tanstack/react-router";
import { WorkIndexPage } from "@/components/pages/WorkPages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work/")({
  head: () =>
    pageHead({
      lang: "tr",
      path: "/work",
      title: "İşler — 100KRAFT",
      description:
        "Atölyede tasarlayıp ürettiğimiz ürünler: Wall Decor, The Dragon’s Keeper, Kamp Ateşi, GrainzTag.",
    }),
  component: () => <WorkIndexPage lang="tr" />,
});
