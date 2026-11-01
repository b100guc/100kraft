import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/pages/ServicePages";
import { getServiceBySlug } from "@/data/services";
import { serviceDetailHead } from "@/lib/heads";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => (loaderData ? serviceDetailHead(loaderData.service, "tr") : {}),
  component: Page,
});

function Page() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailPage lang="tr" service={service} />;
}
