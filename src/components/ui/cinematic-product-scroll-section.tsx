"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Eye, ExternalLink } from "lucide-react";
import { animate, stagger } from "animejs";

// Store Product Images
import wallDecor1Img from "@/assets/store/wall-decor-1-1.jpg";
import dragonsKeeperImg from "@/assets/store/the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru-1.jpg";
import kampAtesiImg from "@/assets/store/kamp-atesi-1.jpg";
import grainztagImg from "@/assets/store/grainztag-pet-1.jpg";
import wallDecorUcluImg from "@/assets/store/wall-decor-2-uclu-1.jpg";

export interface StoreProduct {
  id: string;
  title: string;
  titleEn: string;
  handle: string;
  thumbnail: string;
  description: string;
  descriptionEn: string;
  collection: {
    title: string;
    titleEn: string;
  };
  price: string;
  storeUrl: string;
  colors: string[];
  sizes: string[];
}

const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "prod_wall_decor_1",
    title: "Wall Decor #1",
    titleEn: "Wall Decor #1",
    handle: "wall-decor-1",
    thumbnail: wallDecor1Img,
    description:
      "Parametrik dalga rölyefi, hassas döküm yüzey ve siyah metal montaj çerçevesiyle üretilmiş modüler duvar objesi.",
    descriptionEn:
      "Modular architectural wall relief with parametric wave geometry, precision cast surface, and black metal frame.",
    collection: {
      title: "Modüler Rölyef",
      titleEn: "Modular Relief",
    },
    price: "₺ 499.00",
    storeUrl: "https://store.100kraft.com/wall-decor-1",
    colors: ["#B83B26", "#1E1E1E", "#D4D4D4"],
    sizes: ["10x10cm", "Tekli"],
  },
  {
    id: "prod_dragons_keeper",
    title: "The Dragon’s Keeper",
    titleEn: "The Dragon’s Keeper",
    handle: "the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru",
    thumbnail: dragonsKeeperImg,
    description:
      "Organik form dili ve yüksek mukavemetli kompozit döküm gövdeyle tasarlanan heykelsi takı ve anahtar askısı.",
    descriptionEn:
      "Sculptural jewelry and key organizer engineered with organic form language and high-strength composite casting.",
    collection: {
      title: "Fonksiyonel Heykel",
      titleEn: "Functional Sculpture",
    },
    price: "₺ 499.00",
    storeUrl: "https://store.100kraft.com/the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru",
    colors: ["#1E1E1E", "#D4D4D4", "#8B8C89"],
    sizes: ["Standart"],
  },
  {
    id: "prod_kamp_atesi",
    title: "Kamp Ateşi Bioethanol",
    titleEn: "Bioethanol Tabletop Fire Pit",
    handle: "kamp-atesi",
    thumbnail: kampAtesiImg,
    description:
      "Isıya dayanıklı özel refrakter beton gövde ve paslanmaz çelik yanma odası içeren masaüstü ateş çukuru.",
    descriptionEn:
      "Smokeless tabletop fire pit with thermal-shock resistant refractory cast concrete and stainless steel burner.",
    collection: {
      title: "Refrakter Döküm",
      titleEn: "Refractory Casting",
    },
    price: "₺ 400.00",
    storeUrl: "https://store.100kraft.com/kamp-atesi",
    colors: ["#4A4A4A", "#1E1E1E"],
    sizes: ["Kompakt"],
  },
  {
    id: "prod_grainztag",
    title: "GrainzTag #Pet",
    titleEn: "GrainzTag #Pet",
    handle: "grainztag-pet",
    thumbnail: grainztagImg,
    description:
      "NFC ve QR teknolojili, IP68 su geçirmez reçine kapsülleme ve lazer markalamayla üretilmiş akıllı künye.",
    descriptionEn:
      "Smart pet companion tag with NFC & QR integration, IP68 waterproof resin encapsulation, and precision laser engraving.",
    collection: {
      title: "Akıllı Aksesuar",
      titleEn: "Smart Accessories",
    },
    price: "₺ 399.00",
    storeUrl: "https://store.100kraft.com/grainztag-pet",
    colors: ["#1E1E1E", "#C65A2C", "#E6E6E6"],
    sizes: ["Pet Mini", "Standard"],
  },
  {
    id: "prod_wall_decor_uclu",
    title: "Wall Decor #2 Üçlü Kompozisyon",
    titleEn: "Wall Decor #2 Triptych",
    handle: "wall-decor-2-uclu",
    thumbnail: wallDecorUcluImg,
    description:
      "Üç parçalı kesintisiz akışkan rölyef kompozisyonu. Mimari mekanlar ve iç tasarım projeleri için özel seriler.",
    descriptionEn:
      "Three-piece continuous fluid relief composition engineered for architectural spaces and interior design installations.",
    collection: {
      title: "Triptych Seri",
      titleEn: "Triptych Series",
    },
    price: "₺ 999.00",
    storeUrl: "https://store.100kraft.com/wall-decor-2-uclu",
    colors: ["#1E1E1E", "#B83B26"],
    sizes: ["10x28cm", "3'lü Set"],
  },
];

// Minimal Product Card Component for horizontal overview
function MinimalProductCard({ product, isTr = true }: { product: StoreProduct; isTr?: boolean }) {
  const fullImageUrl = product.thumbnail ?? "";
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const touch = e.touches[0];
    if (!touch) return;
    const rect = card.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--reveal-x", `${String(x)}%`);
    card.style.setProperty("--reveal-y", `${String(y)}%`);
    setActive(true);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--reveal-x", `${String(x)}%`);
    card.style.setProperty("--reveal-y", `${String(y)}%`);
    setActive(true);
  };

  return (
    <a
      href={product.storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-foreground group"
    >
      <div
        ref={cardRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={() => setActive(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setActive(false)}
        className={`relative w-full aspect-[4/5] bg-secondary border border-border/80 overflow-hidden cursor-pointer transition-colors duration-300 ${
          active ? "border-foreground/40" : ""
        }`}
        style={
          {
            "--reveal-x": "50%",
            "--reveal-y": "50%",
          } as React.CSSProperties
        }
      >
        {/* Background product photography */}
        <img
          src={fullImageUrl}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Hover overlay with badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="p-1.5 bg-background/90 border border-border inline-flex items-center justify-center">
            <ExternalLink className="w-3.5 h-3.5 text-foreground" />
          </span>
        </div>

        {/* Bottom details */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <span className="label-technical text-[10px] text-accent block uppercase">
            {isTr ? product.collection.title : product.collection.titleEn}
          </span>
          <p className="font-display text-sm tracking-tight text-foreground truncate mt-0.5">
            {isTr ? product.title : product.titleEn}
          </p>
          <p className="label-technical text-xs text-foreground/80 font-semibold mt-1">
            {product.price}
          </p>
        </div>
      </div>
    </a>
  );
}

// Product Hero Component for vertical cinematic scroll
function ProductHero({
  product,
  reversed = false,
  isTr = true,
}: {
  product: StoreProduct;
  reversed?: boolean;
  isTr?: boolean;
}) {
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Parallax effect on main image
      if (imageRef.current) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const yOffset = (progress - 0.5) * 60;
        imageRef.current.style.transform = `translateY(${yOffset}px) scale(1.04)`;
      }

      // Staggered reveal for details
      const steps = containerRef.current.querySelectorAll(".reveal-step");
      steps.forEach((step) => {
        const threshold = Number((step as HTMLElement).dataset["progress"]) || 0.3;
        const elementProgress = (windowHeight - rect.top) / windowHeight;
        if (elementProgress > threshold) {
          step.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-12 border-b border-border"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Visual Column */}
          <div
            className={`lg:col-span-7 relative overflow-hidden bg-secondary border border-border/80 aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] ${
              reversed ? "lg:col-start-6" : ""
            }`}
          >
            <img
              ref={imageRef}
              src={product.thumbnail}
              alt={product.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform ease-out will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4">
              <span className="label-technical text-xs bg-background/80 border border-border px-3 py-1 text-accent backdrop-blur-sm">
                {isTr ? product.collection.title : product.collection.titleEn}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className={`lg:col-span-5 ${reversed ? "lg:col-start-1" : ""}`}>
            <div className="space-y-6">
              {/* Step 1: Category & Title */}
              <div
                className="reveal-step transition-all duration-700 ease-out opacity-0 translate-y-8 [&.active]:opacity-100 [&.active]:translate-y-0"
                data-progress="0.2"
              >
                <span className="label-technical text-xs text-muted-foreground tracking-widest block uppercase">
                  100KRAFT ATELIER COLLECTION
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mt-2">
                  {isTr ? product.title : product.titleEn}
                </h3>
                <div className="mt-3 flex items-baseline gap-4">
                  <span className="font-display text-2xl text-accent font-medium">
                    {product.price}
                  </span>
                  <span className="label-technical text-xs text-muted-foreground">
                    {isTr ? "Doğrudan Atölye Üretimi" : "Direct Atelier Manufacturing"}
                  </span>
                </div>
              </div>

              {/* Step 2: Description */}
              <div
                className="reveal-step transition-all duration-700 ease-out opacity-0 translate-y-8 [&.active]:opacity-100 [&.active]:translate-y-0"
                data-progress="0.35"
              >
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground border-l border-border pl-4">
                  {isTr ? product.description : product.descriptionEn}
                </p>
              </div>

              {/* Step 3: Attributes (Colors & Sizes) */}
              <div
                className="reveal-step space-y-4 pt-2 transition-all duration-700 ease-out opacity-0 translate-y-8 [&.active]:opacity-100 [&.active]:translate-y-0"
                data-progress="0.5"
              >
                {product.sizes.length > 0 && (
                  <div>
                    <span className="label-technical text-xs text-muted-foreground block mb-2">
                      {isTr ? "VARYASYON" : "VARIATION"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz, idx) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setActiveSize(idx)}
                          className={`px-3 py-1.5 label-technical text-xs border transition-colors cursor-pointer ${
                            activeSize === idx
                              ? "bg-foreground text-background border-foreground font-semibold"
                              : "border-border hover:border-foreground/50 text-foreground/80"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.colors.length > 0 && (
                  <div>
                    <span className="label-technical text-xs text-muted-foreground block mb-2">
                      {isTr ? "MATERYAL / RENK TONU" : "MATERIAL / COLOR"}
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colors.map((c, idx) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setActiveColor(idx)}
                          className={`w-6 h-6 border transition-all cursor-pointer ${
                            activeColor === idx ? "scale-110 border-accent" : "border-border/60"
                          }`}
                          style={{ backgroundColor: c }}
                          aria-label={`Color ${c}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Step 4: Action Button */}
              <div
                className="reveal-step pt-4 transition-all duration-700 ease-out opacity-0 translate-y-8 [&.active]:opacity-100 [&.active]:translate-y-0"
                data-progress="0.65"
              >
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block group"
                >
                  <button className="w-full h-14 bg-foreground text-background hover:bg-accent hover:text-foreground text-xs font-medium uppercase flex items-center justify-center gap-3 rounded-none transition-colors duration-300 cursor-pointer">
                    <span className="tracking-widest label-technical font-semibold">
                      {isTr ? "MAĞAZADA İNCELE ↗" : "VIEW ON STORE ↗"}
                    </span>
                    <Eye width={16} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CinematicProductScrollSectionProps {
  lang?: "en" | "tr";
}

// Main Unified Cinematic Product Section
export function CinematicProductScrollSection({ lang = "tr" }: CinematicProductScrollSectionProps) {
  const isTr = lang === "tr";
  const finalTitle = isTr ? "100KRAFT MAĞAZA" : "100KRAFT STORE";
  const finalButtonText = isTr ? "Tüm Ürünleri İncele ↗" : "View All Products ↗";

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const finalCollectionRef = useRef<HTMLDivElement>(null);
  const animeTriggered = useRef(false);

  useEffect(() => {
    if (!finalCollectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animeTriggered.current) {
          if (!finalCollectionRef.current) return;
          animeTriggered.current = true;

          animate(finalCollectionRef.current.querySelectorAll(".anime-card"), {
            translateY: [-60, 0],
            opacity: [0, 1],
            delay: stagger(100),
            duration: 800,
            easing: "easeOutCubic",
          });
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(finalCollectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleContainerScroll = () => {
      const indicator = scrollIndicatorRef.current;
      const track = indicator?.parentElement;
      if (!indicator || !track) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) {
        track.style.display = "none";
        return;
      } else {
        track.style.display = "block";
      }

      const scrollPercentage = (Math.abs(container.scrollLeft) / maxScroll) * 100;
      indicator.style.left = `${scrollPercentage * 0.666}%`;
    };

    container.addEventListener("scroll", handleContainerScroll, {
      passive: true,
    });
    const timeoutId = setTimeout(handleContainerScroll, 100);
    window.addEventListener("resize", handleContainerScroll);

    return () => {
      container.removeEventListener("scroll", handleContainerScroll);
      window.removeEventListener("resize", handleContainerScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="store-showcase"
      className="relative bg-background text-foreground overflow-hidden border-t border-border"
    >
      {/* Section Header */}
      <div className="pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <span className="label-technical text-xs text-accent uppercase">
              {isTr ? "05 · Atölye Üretimleri" : "05 · Atelier Collection"}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight mt-2 text-foreground">
              {finalTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              {isTr
                ? "Antalya atölyemizde geliştirilen, kalıplanan ve seri üretimi yapılan fiziksel ürünler."
                : "Physical objects engineered, molded, and crafted in our Antalya atelier."}
            </p>
          </div>
          <a
            href="https://store.100kraft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 label-technical text-xs font-semibold bg-foreground text-background px-5 py-3 hover:bg-accent hover:text-foreground transition-colors"
          >
            <span>{finalButtonText}</span>
            <ArrowDown className="-rotate-90 w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Featured Products - Render ProductHero for top 3 items */}
      {STORE_PRODUCTS.slice(0, 3).map((product, index) => (
        <ProductHero key={product.id} product={product} reversed={index % 2 !== 0} isTr={isTr} />
      ))}

      {/* Horizontal Carousel Overview - All products */}
      <div
        ref={finalCollectionRef}
        id="final-collection"
        className="w-full pt-16 pb-20 border-t border-border bg-secondary/20"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between border-b border-border pb-4 mb-8">
            <span className="label-technical text-muted-foreground text-xs block">
              {isTr ? "TÜM ÜRÜN VİTRİNİ" : "FULL PRODUCT SHOWCASE"}
            </span>
            <a
              href="https://store.100kraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 label-technical font-semibold text-xs text-accent hover:underline"
            >
              <span>{isTr ? "store.100kraft.com'a Git" : "Visit store.100kraft.com"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 scrollbar-hide snap-x snap-mandatory justify-start"
          >
            {STORE_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="anime-card group cursor-pointer w-[240px] sm:w-[280px] md:w-[300px] snap-center flex-shrink-0 opacity-0"
              >
                <MinimalProductCard product={product} isTr={isTr} />
              </div>
            ))}
          </div>

          {/* Horizontal Scroll Progress Bar */}
          <div className="w-24 h-[2px] bg-foreground/10 mx-auto mt-2 rounded-full overflow-hidden relative">
            <div
              ref={scrollIndicatorRef}
              className="h-full bg-accent w-8 rounded-full absolute left-0 transition-all duration-75"
              style={{ left: "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
