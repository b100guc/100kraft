import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/start-project")({
  beforeLoad: () => {
    throw redirect({ to: "/start-project" });
  },
});
