import {
  Outlet,
  createRootRoute,
  useLocation,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import { ButtonLink } from "@/components/site/Button";
import { businessLd } from "@/lib/seo";

function NotFoundComponent() {
  const { pathname } = useLocation();
  const isEn = pathname.startsWith("/en");
  return (
    <div className="wrap flex min-h-screen flex-col justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[18vw] md:text-[9rem]">
        {isEn ? "Not found." : "Sayfa yok."}
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        {isEn
          ? "This page doesn’t exist or has moved."
          : "Aradığınız sayfa bulunamadı ya da taşındı."}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={isEn ? "/en" : "/"}>{isEn ? "Home" : "Ana sayfa"}</ButtonLink>
        <ButtonLink href={isEn ? "/en/work" : "/work"} variant="outline">
          {isEn ? "Work" : "İşler"}
        </ButtonLink>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="wrap flex min-h-screen flex-col justify-center py-20">
      <h1 className="display text-6xl md:text-8xl">Bir şeyler ters gitti.</h1>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        Sayfa yüklenemedi. Tekrar deneyin ya da ana sayfaya dönün.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex h-12 items-center bg-foreground px-6 text-[0.9375rem] font-medium text-background hover:bg-accent"
        >
          Tekrar dene
        </button>
        <a
          href="/"
          className="inline-flex h-12 items-center border border-foreground/25 px-6 text-[0.9375rem] font-medium hover:border-foreground"
        >
          Ana sayfa
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f1eeea" },
      { name: "author", content: "100KRAFT" },
      { property: "og:site_name", content: "100KRAFT" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "preload",
        href: "/fonts/archivo-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", ...businessLd }),
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
  return <Outlet />;
}
