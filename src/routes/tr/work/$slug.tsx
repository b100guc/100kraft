import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/work/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/work/$slug", params: { slug: params.slug } });
  },
});
