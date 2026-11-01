import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/pages/ServicePages";
import { getServiceBySlug } from "@/data/services";
import { serviceDetailHead } from "@/lib/heads";

export const Route = createFileRoute("/en/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => (loaderData ? serviceDetailHead(loaderData.service, "en") : {}),
  component: Page,
});

function Page() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailPage lang="en" service={service} />;
}
