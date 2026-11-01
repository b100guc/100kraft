import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/components/pages/ServicePages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/services/")({
  head: () =>
    pageHead({
      lang: "en",
      path: "/services",
      title: "Services — 100KRAFT",
      description:
        "Product design, 3D modelling, 3D printing, prototyping, moulds and casting, manufacturing advice.",
    }),
  component: () => <ServicesIndexPage lang="en" />,
});
