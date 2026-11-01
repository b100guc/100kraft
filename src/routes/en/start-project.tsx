import { createFileRoute } from "@tanstack/react-router";
import { StartProjectPage } from "@/components/pages/StartProjectPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/start-project")({
  head: () =>
    pageHead({
      lang: "en",
      path: "/start-project",
      title: "Start a Project — 100KRAFT",
      description: "Send your idea, sketch or CAD file; we reply within two working days.",
    }),
  component: () => <StartProjectPage lang="en" />,
});
