import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
