import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light";

const base =
  "inline-flex h-12 items-center justify-center gap-2 px-6 text-[0.9375rem] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const variants: Record<Variant, string> = {
  solid: "bg-foreground text-background hover:bg-accent",
  outline: "border border-foreground/25 text-foreground hover:border-foreground",
  light: "bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
};

interface Props {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external,
  className,
  onClick,
}: Props) {
  const cls = cn(base, variants[variant], className);
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("h-4 w-4", className)} fill="none">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("h-3.5 w-3.5", className)} fill="none">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
