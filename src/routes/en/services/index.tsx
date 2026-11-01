import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/components/pages/ServicePages";
import { servicesIndexHead } from "@/lib/heads";

export const Route = createFileRoute("/en/services/")({
  head: () =>
    servicesIndexHead(
      "en",
      "Services — 100KRAFT",
      "Product design, 3D modelling, 3D printing, prototyping, moulds and casting, manufacturing advice.",
    ),
  component: () => <ServicesIndexPage lang="en" />,
});
