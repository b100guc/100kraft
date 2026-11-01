import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/components/pages/ServicePages";
import { servicesIndexHead } from "@/lib/heads";

export const Route = createFileRoute("/services/")({
  head: () =>
    servicesIndexHead(
      "tr",
      "Hizmetler — 100KRAFT",
      "Ürün tasarımı, 3D modelleme, 3D baskı, prototipleme, kalıp ve döküm, üretim danışmanlığı.",
    ),
  component: () => <ServicesIndexPage lang="tr" />,
});
