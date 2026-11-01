import ig from "@/data/instagram.json";
import { contact, type Language } from "@/data/translations";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./Button";
import { Reveal } from "./Reveal";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-5 w-5", className)} fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function InstagramLink({ className, label }: { className?: string; label: string }) {
  return (
    <a
      href={contact.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn("inline-flex items-center justify-center transition-colors", className)}
    >
      <InstagramIcon />
    </a>
  );
}

function ReelIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

function CarouselIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="7" width="12" height="13" rx="1.5" />
      <path d="M8 4h10.5A1.5 1.5 0 0 1 20 5.5V17" />
    </svg>
  );
}

const copy = {
  tr: {
    title: "Atölyeden",
    lead: "Kalıptan çıkan ilk parça, baskıdan yeni gelen renkler, yolda olan siparişler. Hepsi Instagram'da.",
    follow: "@100kraft’ı takip et",
    reel: "Video",
    post: "Gönderi",
  },
  en: {
    title: "From the workshop",
    lead: "First pulls from the mould, fresh colours off the printer, orders on their way. All on Instagram.",
    follow: "Follow @100kraft",
    reel: "Video",
    post: "Post",
  },
};

export function InstagramSection({ lang }: { lang: Language }) {
  const c = copy[lang];
  return (
    <section className="border-t border-border">
      <div className="wrap py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="display text-[13vw] md:text-7xl">{c.title}</h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">{c.lead}</p>
          </div>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 border border-foreground/25 px-5 text-[0.9375rem] font-medium transition-colors hover:border-foreground"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
            {c.follow}
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 md:mt-14 md:grid-cols-4 md:gap-3">
          {ig.posts.map((post, i) => (
            <li key={post.code}>
              <Reveal delay={(i % 4) * 0.05}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/5] overflow-hidden bg-tile"
                >
                  <picture>
                    <source type="image/avif" srcSet={`/instagram/${post.code}.avif`} />
                    <img
                      src={`/instagram/${post.code}.webp`}
                      alt={post.alt[lang]}
                      width={480}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </picture>
                  <span className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center bg-ink/70 text-background backdrop-blur-sm">
                    {post.type === "reel" ? <ReelIcon /> : <CarouselIcon />}
                    <span className="sr-only">{post.type === "reel" ? c.reel : c.post}</span>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-10 text-sm text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="truncate">{post.alt[lang]}</span>
                    <ArrowUpRight />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
