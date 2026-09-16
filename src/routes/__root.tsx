import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center border border-border/80 bg-background/90 p-10 sm:p-14">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="label-technical text-accent text-xs">ERR_404</span>
          <span className="h-3 w-px bg-border" />
          <span className="label-technical text-xs">OUT OF BOUNDS</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl tracking-tight">Coordinate not found.</h1>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          The component, case study, or document you are seeking does not exist in our atelier
          coordinate space.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Link
            to="/"
            className="group relative flex items-center justify-center overflow-hidden bg-foreground px-4 py-3 text-center"
          >
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-primary-foreground text-xs font-semibold">
              Return Home
            </span>
          </Link>

          <Link
            to="/work"
            className="flex items-center justify-center border border-foreground/20 px-4 py-3 text-center transition-colors hover:bg-secondary"
          >
            <span className="label-technical text-foreground text-xs font-semibold">
              Selected Work
            </span>
          </Link>

          <Link
            to="/services"
            className="flex items-center justify-center border border-foreground/20 px-4 py-3 text-center transition-colors hover:bg-secondary"
          >
            <span className="label-technical text-foreground text-xs font-semibold">
              Capabilities
            </span>
          </Link>

          <Link
            to="/start-project"
            className="flex items-center justify-center border border-foreground/20 px-4 py-3 text-center transition-colors hover:bg-secondary"
          >
            <span className="label-technical text-accent text-xs font-semibold">Start Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center border border-destructive/30 bg-background/90 p-8 sm:p-12">
        <span className="label-technical text-destructive text-xs">RUNTIME_EXCEPTION</span>
        <h1 className="mt-3 font-display text-2xl tracking-tight text-foreground">
          Rendering interrupted
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A processing error occurred. Re-verifying tolerances or returning to the atelier index may
          resolve it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-foreground px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-accent cursor-pointer"
          >
            <span className="label-technical text-primary-foreground">Try Again</span>
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <span className="label-technical">Return Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "100KRAFT — Endüstriyel Tasarım ve Dijital Üretim Atölyesi" },
      {
        name: "description",
        content:
          "Fikirden nihai ürüne: Endüstriyel ürün tasarımı, 3D baskı, hızlı prototipleme, kalıp mühendisliği ve düşük adetli üretim atölyesi. Antalya, Türkiye.",
      },
      { name: "author", content: "100KRAFT" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "100KRAFT" },
      {
        property: "og:title",
        content: "100KRAFT — Endüstriyel Tasarım ve Dijital Üretim Atölyesi",
      },
      {
        property: "og:description",
        content:
          "Fikirden nihai ürüne: Endüstriyel ürün tasarımı, 3D baskı, hızlı prototipleme, kalıp mühendisliği ve düşük adetli üretim atölyesi. Antalya, Türkiye.",
      },
      { property: "og:url", content: "https://100kraft.com/" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "100KRAFT — Endüstriyel Tasarım ve Dijital Üretim Atölyesi",
      },
      {
        name: "twitter:description",
        content:
          "Fikirden nihai ürüne: Endüstriyel ürün tasarımı, 3D baskı, hızlı prototipleme, kalıp mühendisliği ve düşük adetli üretim atölyesi. Antalya, Türkiye.",
      },
      { name: "twitter:image", content: "https://100kraft.com/og-image.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&f[]=satoshi@400,500,700&f[]=general-sans@400,500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "100KRAFT",
          url: "https://100kraft.com",
          logo: "https://100kraft.com/favicon.svg",
          description:
            "Product design, 3D printing, rapid prototyping, mold design and manufacturing consulting atelier in Antalya, Turkey.",
          email: "burak@100kraft.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Antalya",
            addressCountry: "TR",
          },
          sameAs: [
            "https://www.instagram.com/100kraft/",
            "https://www.instagram.com/grainzstudio/",
            "https://store.100kraft.com",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isEn = pathname.startsWith("/en");

  return (
    <html lang={isEn ? "en" : "tr"}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
