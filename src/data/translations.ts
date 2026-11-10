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
      eyebrow: "Tasarım ve üretim atölyesi · Antalya",
      title: "Yüzde yüz zanaat.",
      lead: "Çizer, basar, kalıbını alır, dökeriz. Bir parçanın bütün yolculuğu Antalya’daki tek bir atölyede geçer.",
      cta: "Proje başlat",
      secondary: "Mağazaya git",
    },
    chain: {
      label: "Tek atölyede",
      steps: ["Tasarım", "3D baskı", "Kalıp", "Döküm", "Boya", "Montaj"],
    },
    services: {
      label: "Sizin projeniz için",
      title: "Hizmetler",
      lead: "Kendi ürünlerimizi yaptığımız tezgâh, sizin parçanız için de çalışır. Tek bir numune de olur, küçük bir seri de.",
      all: "Tüm hizmetler",
    },
    work: {
      label: "Koleksiyon",
      title: "İşler",
      collections: "koleksiyon",
      products: "ürün",
      lead: "Önce kendimiz için tasarladık, sonra mağazaya koyduk. Hepsi aynı tezgâhtan çıkıyor.",
      all: "Tüm işler",
      view: "İncele",
      buy: "Mağazada gör",
    },
    workshop: {
      label: "Instagram",
      title: "Atölyeden",
      lead: "Kalıptan yeni çıkan parça, yazıcıdan gelen ilk renk. O hafta tezgâhta ne varsa burada.",
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
      label: "Süreç",
      unit: "adım",
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
      label: "İletişim",
      reply: "2 iş günü içinde dönüş",
      title: "Masanızda ne var?",
      lead: "Bir eskiz, bir fotoğraf, bir STL ya da sadece bir fikir. Gönderin; nasıl yapılacağını birlikte konuşalım.",
      cta: "Proje başlat",
      whatsapp: "WhatsApp",
      location: "Antalya, Türkiye",
    },
    footer: {
      tagline: "Tasarım ve üretim atölyesi",
      menu: "Site",
      reach: "Ulaşın",
      top: "Başa dön",
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
      eyebrow: "Design and fabrication workshop · Antalya",
      title: "One hundred percent craft.",
      lead: "We draw it, print it, mould it and cast it. A part’s whole journey happens in one workshop in Antalya.",
      cta: "Start a project",
      secondary: "Visit the store",
    },
    chain: {
      label: "Under one roof",
      steps: ["Design", "3D printing", "Moulds", "Casting", "Paint", "Assembly"],
    },
    services: {
      label: "For your project",
      title: "Services",
      lead: "The bench that makes our own products works for your part too. One sample or a small batch.",
      all: "All services",
    },
    work: {
      label: "Collection",
      title: "Work",
      collections: "collections",
      products: "products",
      lead: "We designed them for ourselves first, then put them in the store. All off the same bench.",
      all: "All work",
      view: "View",
      buy: "View in store",
    },
    workshop: {
      label: "Instagram",
      title: "From the workshop",
      lead: "A part fresh out of the mould, the first colour off the printer. Whatever is on the bench that week.",
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
      label: "Process",
      unit: "steps",
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
      label: "Contact",
      reply: "Reply within 2 working days",
      title: "What’s on your desk?",
      lead: "A sketch, a photo, an STL or just an idea. Send it over and we’ll talk through how to make it.",
      cta: "Start a project",
      whatsapp: "WhatsApp",
      location: "Antalya, Turkey",
    },
    footer: {
      tagline: "Design and fabrication workshop",
      menu: "Site",
      reach: "Reach us",
      top: "Back to top",
      by: "Site by Grainz Digital",
    },
  },
};
