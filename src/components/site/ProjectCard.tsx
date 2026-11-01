import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { collectionPrice, formatPrice, type ProjectItem } from "@/data/projects";
import { localePath, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { Picture } from "./Picture";

export function ProjectCard({
  project,
  lang,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: {
  project: ProjectItem;
  lang: Language;
  sizes?: string;
}) {
  const price = collectionPrice(project);
  const count = project.products.length;
  const meta =
    count > 1
      ? lang === "tr"
        ? `${count} ürün`
        : `${count} products`
      : price != null
        ? formatPrice(price)
        : null;
  const second = project.gallery[0];
  // Only fetch the hover image once someone actually hovers (saves bandwidth on touch).
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={localePath(lang, `/work/${project.slug}`)}
      onClick={() =>
        trackEvent({ name: "project_view", slug: project.slug, projectName: project.name })
      }
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onFocus={() => setHovered(true)}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden bg-tile">
        <Picture
          image={project.cover}
          alt={project.cover.alt[lang]}
          sizes={sizes}
          className="absolute inset-0"
          imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        {second && hovered && (
          <Picture
            image={second}
            alt=""
            sizes={sizes}
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        )}
      </div>
      <div className="mt-3 flex flex-col gap-1 sm:mt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-medium leading-tight transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-1 text-[0.9375rem] text-muted-foreground">{project.category[lang]}</p>
        </div>
        {meta && (
          <span className="shrink-0 text-[0.9375rem] tabular-nums text-muted-foreground">
            {meta}
          </span>
        )}
      </div>
    </Link>
  );
}
