import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/store")({
  beforeLoad: () => {
    throw redirect({ href: "https://store.100kraft.com" });
  },
});
