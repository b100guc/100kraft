import { createFileRoute, notFound } from "@tanstack/react-router";
import { WorkDetailPage } from "@/components/pages/WorkPages";
import { getProjectBySlug } from "@/data/projects";
import { workDetailHead } from "@/lib/heads";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => (loaderData ? workDetailHead(loaderData.project, "tr") : {}),
  component: Page,
});

function Page() {
  const { project } = Route.useLoaderData();
  return <WorkDetailPage lang="tr" project={project} />;
}
