import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { CinematicProductScrollSection } from "@/components/ui/cinematic-product-scroll-section";
import { Process } from "@/components/site/Process";
import { Workshop } from "@/components/site/Workshop";
import { Expertise } from "@/components/site/Expertise";
import { Contact, Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";

const title = "100KRAFT — Endüstriyel Tasarım ve Dijital Üretim Atölyesi";
const description =
  "Fikirden nihai ürüne: Endüstriyel ürün tasarımı, 3D baskı, hızlı prototipleme, kalıp mühendisliği ve düşük adetli üretim atölyesi. Antalya, Türkiye.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://100kraft.com/" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://100kraft.com/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://100kraft.com/" },
      { rel: "alternate", hrefLang: "tr", href: "https://100kraft.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://100kraft.com/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://100kraft.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="tr" />
      <main>
        <Hero lang="tr" />
        <About lang="tr" />
        <Services lang="tr" />
        <Projects lang="tr" />
        <CinematicProductScrollSection lang="tr" />
        <Process lang="tr" />
        <Workshop lang="tr" />
        <Expertise lang="tr" />
        <Contact lang="tr" />
      </main>
      <Footer lang="tr" />
    </>
  );
}
