import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { homeHead } from "@/lib/heads";

export const Route = createFileRoute("/en/")({
  head: () =>
    homeHead(
      "en",
      "100KRAFT — 3D Printing & Product Design Studio in Antalya",
      "Product design, 3D printing, prototyping and moulds. We design in Antalya and make it in our own workshop.",
    ),
  component: () => <HomePage lang="en" />,
});
