import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/services/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/services/$slug", params: { slug: params.slug } });
  },
});
