import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/store")({
  beforeLoad: () => {
    throw redirect({
      href: "https://store.100kraft.com",
    });
  },
  head: () => ({
    meta: [
      { title: "Redirecting to 100KRAFT Store" },
      { httpEquiv: "refresh", content: "0; url=https://store.100kraft.com" },
    ],
  }),
  component: StoreRedirectPage,
});

function StoreRedirectPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center border border-border bg-background p-10">
        <span className="label-technical text-accent text-xs">STORE DISPATCH</span>
        <h1 className="font-display text-2xl mt-3 tracking-tight">
          Connecting to 100KRAFT Store...
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The official product store is hosted at store.100kraft.com. If you are not redirected
          automatically:
        </p>
        <a
          href="https://store.100kraft.com"
          className="mt-6 inline-flex items-center gap-3 bg-foreground px-6 py-3 label-technical text-primary-foreground text-xs font-semibold"
        >
          <span>Continue to store.100kraft.com</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
