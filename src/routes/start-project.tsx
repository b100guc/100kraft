import { createFileRoute } from "@tanstack/react-router";
import { StartProjectPage } from "@/components/pages/StartProjectPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/start-project")({
  head: () =>
    pageHead({
      lang: "tr",
      path: "/start-project",
      title: "Proje Başlat — 100KRAFT",
      description:
        "Fikrinizi, eskizinizi ya da CAD dosyanızı gönderin; iki iş günü içinde dönelim.",
    }),
  component: () => <StartProjectPage lang="tr" />,
});
