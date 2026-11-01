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
      atelier: "Hakkımızda",
      blog: "Blog",
      store: "Mağaza",
      startProject: "Proje başlat",
      menu: "Menü",
      close: "Kapat",
    },
    hero: {
      eyebrow: "Tasarım · 3D baskı · Kalıp & döküm · Antalya",
      title: "Elle tutulur fikirler.",
      lead: "100KRAFT, Antalya’da bir tasarım ve üretim atölyesi. Fikri çiziyor, 3D baskı ve dökümle üretiyor, elde bitiriyoruz.",
      cta: "Proje başlat",
      secondary: "Mağazaya git",
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
    workshop: {
      title: "Atölyeden",
      lead: "Kalıptan çıkan ilk parça, baskıdan yeni gelen renkler. En son ne yaptığımızı Instagram’da paylaşıyoruz.",
      about: "Biz kimiz",
    },
    atelier: {
      title: "Hakkımızda",
      lead: "Yazıcıların, kalıpların ve zımpara tozunun arasında: iki endüstriyel tasarımcının Antalya’daki atölyesi.",
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
          title: "Dinleme",
          body: "Ne işe yarayacak, nerede duracak, kaç tane lazım? İlk konuşma sonraki her kararı belirler.",
        },
        {
          title: "Tasarım",
          body: "Eskizden 3D modele. Ölçüyü, geçmeyi ve baskı yönünü baştan düşünürüz.",
        },
        {
          title: "Numune",
          body: "İlk numune atölyede çıkar. Elde tutar, dener, gerekirse yeniden basarız.",
        },
        {
          title: "Üretim",
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
      atelier: "About",
      blog: "Journal",
      store: "Store",
      startProject: "Start a project",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Design · 3D printing · Moulds & casting · Antalya",
      title: "Ideas you can hold.",
      lead: "100KRAFT is a design and fabrication workshop in Antalya. We draw the idea, make it with 3D printing and casting, and finish it by hand.",
      cta: "Start a project",
      secondary: "Visit the store",
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
    workshop: {
      title: "From the workshop",
      lead: "First pulls from the mould, fresh colours off the printer. We share what we’re making on Instagram.",
      about: "Who we are",
    },
    atelier: {
      title: "About",
      lead: "Among the printers, moulds and sanding dust: a workshop run by two industrial designers in Antalya.",
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
          title: "Design",
          body: "From sketch to 3D model, with size, fit and print orientation thought through early.",
        },
        {
          title: "Sample",
          body: "The first sample comes off our printers. We hold it, test it and reprint if needed.",
        },
        {
          title: "Make",
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
