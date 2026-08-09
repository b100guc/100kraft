import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { CinematicProductScrollSection } from "@/components/ui/cinematic-product-scroll-section";

const title = "100KRAFT STORE — Premium Industrial Design Products";
const description =
  "Discover premium industrial design products, CNC prototypes, and precision 3D printed objects from our atelier.";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-20">
        <CinematicProductScrollSection />
      </main>
      <Footer />
    </>
  );
}
