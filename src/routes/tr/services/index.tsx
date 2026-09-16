import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/services/")({
  beforeLoad: () => {
    throw redirect({ to: "/services" });
  },
});
