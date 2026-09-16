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

const title = "100KRAFT — Product Design & Digital Manufacturing Atelier";
const description =
  "From idea to production. Industrial product design, 3D printing, rapid prototyping, mold design and low-volume production from our atelier in Antalya, Turkey.";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://100kraft.com/en" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://100kraft.com/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://100kraft.com/en" },
      { rel: "alternate", hrefLang: "tr", href: "https://100kraft.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://100kraft.com/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://100kraft.com/" },
    ],
  }),
  component: EnglishIndex,
});

function EnglishIndex() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="en" />
      <main>
        <Hero lang="en" />
        <About lang="en" />
        <Services lang="en" />
        <Projects lang="en" />
        <CinematicProductScrollSection lang="en" />
        <Process lang="en" />
        <Workshop lang="en" />
        <Expertise lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
