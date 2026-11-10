import {
  catalogue,
  formatPrice,
  optionSummary,
  productLabel,
  projects,
  type Img,
  type StoreProduct,
} from "@/data/projects";
import type { Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./Button";
import { Picture } from "./Picture";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

const t = {
  tr: { soldOut: "Tükendi", buy: "Satın al" },
  en: { soldOut: "Sold out", buy: "Buy" },
};

export function Price({ product, className }: { product: StoreProduct; className?: string }) {
  if (product.price == null) return null;
  return (
    <span className={cn("tabular-nums", className)}>
      {product.listPrice != null && (
        <s className="mr-2 text-muted-foreground/70 decoration-1">
          {formatPrice(product.listPrice)}
        </s>
      )}
      {formatPrice(product.price)}
      {product.priceFrom && "+"}
    </span>
  );
}

/** Collections laid out with the first one featured at double size. */
export function CollectionGrid({ lang }: { lang: Language }) {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-3 sm:gap-y-10 lg:grid-cols-4">
      {projects.map((p, i) => (
        <Reveal
          key={p.slug}
          variant="print"
          delay={(i % 4) * 0.06}
          className={i === 0 ? "col-span-2 lg:row-span-2" : ""}
        >
          <ProjectCard
            project={p}
            lang={lang}
            index={i}
            sizes={i === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
          />
        </Reveal>
      ))}
    </div>
  );
}

export function ProductTile({
  product,
  image,
  lang,
}: {
  product: StoreProduct;
  image: Img;
  lang: Language;
}) {
  const summary = optionSummary(product, lang);
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent({ name: "store_click", destination: product.url, location: "catalogue" })
      }
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-tile">
        <Picture
          image={image}
          alt={image.alt[lang]}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="absolute inset-0"
          imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        {!product.inStock && (
          <span className="absolute top-2 left-2 bg-background px-2 py-1 text-xs font-medium">
            {t[lang].soldOut}
          </span>
        )}
        {product.listPrice != null && product.price != null && (
          <span className="absolute top-2 right-2 bg-accent px-2 py-1 text-xs font-medium tabular-nums text-accent-foreground">
            −{Math.round((1 - product.price / product.listPrice) * 100)}%
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.9375rem] font-medium leading-snug transition-colors group-hover:text-accent">
            {productLabel(product, lang)}
          </p>
          {summary && <p className="mt-0.5 text-sm text-muted-foreground">{summary}</p>}
        </div>
        <ArrowUpRight className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <Price product={product} className="spec mt-1.5 block" />
    </a>
  );
}

export function CatalogueGrid({ lang }: { lang: Language }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      {catalogue().map(({ product, image }) => (
        <ProductTile key={product.slug} product={product} image={image} lang={lang} />
      ))}
    </div>
  );
}
