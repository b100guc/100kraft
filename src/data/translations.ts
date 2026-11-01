export type Language = "en" | "tr";

export const contact = {
  email: "burak@100kraft.com",
  phone: "+90 545 590 25 06",
  whatsapp: "https://wa.me/905455902506",
  instagram: "https://www.instagram.com/100kraft/",
  store: "https://store.100kraft.com",
};

/** Builds a path for the given language: "/work" -> "/en/work" for English. */
export function localePath(lang: Language, path: string): string {
  if (lang === "tr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export const siteContent = {
  tr: {
    nav: {
      work: "İşler",
      services: "Hizmetler",
      atelier: "Atölye",
      blog: "Blog",
      store: "Mağaza",
      startProject: "Proje başlat",
      menu: "Menü",
      close: "Kapat",
    },
    hero: {
      eyebrow: "100KRAFT · Antalya’da bir tasarım ve üretim atölyesi",
      title: "Çizeriz. Basarız. Bitiririz.",
      lead: "Bir fikri, elde tutulan bir parçaya dönüştürüyoruz. Kendi koleksiyonumuz da sizin projeniz de aynı tezgâhtan çıkıyor.",
      cta: "Proje başlat",
      secondary: "Mağazaya git",
      caption: "Wall Decor #2 · tek desen, dört renk, aynı tezgâh",
    },
    services: {
      title: "Hizmetler",
      all: "Tüm hizmetler",
    },
    work: {
      title: "İşler",
      lead: "Kendi koleksiyonumuz. Çizimden paketlemeye her adım atölyede.",
      all: "Tüm işler",
      view: "İncele",
      buy: "Mağazada gör",
    },
    atelier: {
      title: "Atölye",
      lead: "Yazıcıların, kalıpların ve zımpara tozunun arasında: Burak Yüzgüç’ün Antalya’daki atölyesi.",
      body: "Burada çizilen her şey burada üretilir. Kendi ürünlerimizi tasarlayıp satıyoruz; aynı tezgâhı markaların, tasarımcıların ve aklında bir parça olan herkesin projesi için açıyoruz.",
      facts: {
        place: "Konum",
        placeValue: "Antalya, Türkiye",
        store: "Mağaza",
        storeValue: "ürün, store.100kraft.com",
        custom: "Özel üretim",
        customValue: "Ölçü, renk ve kişiye özel model",
      },
      instagram: "Atölyeden kareler: @100kraft",
    },
    process: {
      title: "Bir parça nasıl doğar",
      steps: [
        {
          title: "Dinleriz",
          body: "Ne işe yarayacak, nerede duracak, kaç tane lazım? İlk konuşma sonraki her kararı belirler.",
        },
        {
          title: "Çizeriz",
          body: "Eskizden 3D modele. Ölçüyü, geçmeyi ve baskı yönünü baştan düşünürüz.",
        },
        {
          title: "Basarız",
          body: "İlk numune atölyede çıkar. Elde tutar, dener, gerekirse yeniden basarız.",
        },
        {
          title: "Bitiririz",
          body: "Zımpara, boya, montaj ya da kalıp ve döküm. Teslim edilen parça, onayladığınız numunedir.",
        },
      ],
    },
    contact: {
      title: "Masanızda ne var?",
      lead: "Bir eskiz, bir fotoğraf, bir STL ya da sadece bir fikir. Gönderin; iki iş günü içinde nasıl yapılacağını konuşalım.",
      cta: "Proje başlat",
      whatsapp: "WhatsApp",
      location: "Antalya, Türkiye",
    },
    footer: {
      by: "Site: Grainz Digital",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      atelier: "Atelier",
      blog: "Journal",
      store: "Store",
      startProject: "Start a project",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "100KRAFT · A design and fabrication workshop in Antalya",
      title: "Draw. Print. Finish.",
      lead: "We turn an idea into a part you can hold. Our own collection and your project come off the same bench.",
      cta: "Start a project",
      secondary: "Visit the store",
      caption: "Wall Decor #2 · one pattern, four colours, one bench",
    },
    services: {
      title: "Services",
      all: "All services",
    },
    work: {
      title: "Work",
      lead: "Our own collection. Every step from sketch to packing happens in the workshop.",
      all: "All work",
      view: "View",
      buy: "View in store",
    },
    atelier: {
      title: "Atelier",
      lead: "Among the printers, moulds and sanding dust: Burak Yüzgüç’s workshop in Antalya.",
      body: "Everything drawn here is made here. We design and sell our own products, and open the same bench to brands, designers and anyone with a part in mind.",
      facts: {
        place: "Location",
        placeValue: "Antalya, Turkey",
        store: "Store",
        storeValue: "products, store.100kraft.com",
        custom: "Made to order",
        customValue: "Size, colour and personalised models",
      },
      instagram: "From the workshop: @100kraft",
    },
    process: {
      title: "How a part is born",
      steps: [
        {
          title: "Listen",
          body: "What does it do, where will it live, how many do you need? The first talk shapes every later decision.",
        },
        {
          title: "Draw",
          body: "From sketch to 3D model, with size, fit and print orientation thought through early.",
        },
        {
          title: "Print",
          body: "The first sample comes off our printers. We hold it, test it and reprint if needed.",
        },
        {
          title: "Finish",
          body: "Sanding, paint, assembly, or moulds and casting. What you receive is the sample you approved.",
        },
      ],
    },
    contact: {
      title: "What’s on your desk?",
      lead: "A sketch, a photo, an STL or just an idea. Send it over and within two working days we’ll talk about how to make it.",
      cta: "Start a project",
      whatsapp: "WhatsApp",
      location: "Antalya, Turkey",
    },
    footer: {
      by: "Site by Grainz Digital",
    },
  },
};
