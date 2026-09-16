import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/work/")({
  beforeLoad: () => {
    throw redirect({ to: "/work" });
  },
});
