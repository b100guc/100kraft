import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light";

// On hover the fill rises from the bottom in steps, like layers going down on a print.
const base =
  "group/btn relative isolate inline-flex h-12 items-center justify-center gap-2 overflow-hidden px-6 text-[0.9375rem] font-medium transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:transition-transform before:duration-300 before:ease-[steps(6,end)] hover:before:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground motion-reduce:before:transition-none [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1";

const variants: Record<Variant, string> = {
  solid: "bg-foreground text-background before:bg-accent hover:text-accent-foreground",
  outline:
    "border border-foreground/25 text-foreground before:bg-foreground hover:border-foreground hover:text-background",
  light: "bg-background text-foreground before:bg-accent hover:text-accent-foreground",
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
