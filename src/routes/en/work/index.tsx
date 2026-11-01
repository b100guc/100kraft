import { createFileRoute } from "@tanstack/react-router";
import { WorkIndexPage } from "@/components/pages/WorkPages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/work/")({
  head: () =>
    pageHead({
      lang: "en",
      path: "/work",
      title: "Work — 100KRAFT",
      description:
        "Products we designed and make in our workshop: Wall Decor, The Dragon’s Keeper, Kamp Ateşi, GrainzTag.",
    }),
  component: () => <WorkIndexPage lang="en" />,
});
