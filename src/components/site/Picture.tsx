import type { StoreImage } from "@/data/projects";
import { cn } from "@/lib/utils";

const srcSet = (image: StoreImage, ext: "avif" | "webp") =>
  image.widths.map((w) => `${image.src}-${w}.${ext} ${w}w`).join(", ");

/** A 1×1 transparent GIF: what a `media`-limited Picture loads outside its media query. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

/**
 * Responsive AVIF/WebP image from the store sync. The blurred LQIP sits behind the
 * image so tiles never flash empty while loading. With `media`, the real image is
 * only fetched where the query matches (e.g. desktop-only artwork).
 */
export function Picture({
  image,
  alt,
  sizes,
  priority = false,
  className,
  imgClassName,
  media,
}: {
  image: StoreImage;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  media?: string;
}) {
  const largest = image.widths[image.widths.length - 1];
  return (
    <picture
      className={cn("block bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${image.lqip})`, backgroundColor: image.color }}
    >
      <source type="image/avif" srcSet={srcSet(image, "avif")} sizes={sizes} media={media} />
      <source type="image/webp" srcSet={srcSet(image, "webp")} sizes={sizes} media={media} />
      {media && <source srcSet={BLANK} />}
      <img
        src={`${image.src}-${largest}.webp`}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </picture>
  );
}
