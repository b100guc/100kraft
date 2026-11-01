import type { Language } from "@/data/translations";

export const faq: Record<Language, { q: string; a: string }[]> = {
  tr: [
    {
      q: "Hangi dosyaları kabul ediyorsunuz?",
      a: "STEP, STL, OBJ ve IGES modelleri; PDF teknik resim, eskiz ya da fotoğraf. Elinizde dosya yoksa da başlayabiliriz, modeli biz hazırlarız.",
    },
    {
      q: "Fiyat nasıl belirleniyor?",
      a: "Parçanın boyutu, malzemesi, adedi ve gereken tasarım işine göre. Brief'i aldıktan sonra net bir teklif gönderiyoruz.",
    },
    {
      q: "Tek parça da üretiyor musunuz?",
      a: "Evet. Tek bir prototipten küçük seri üretime kadar çalışıyoruz; daha büyük adetler için kalıp ve döküme geçiyoruz.",
    },
    {
      q: "İş ne kadar sürer?",
      a: "Kapsama göre değişiyor. Basit bir baskı günler, tasarımdan üretime bir ürün haftalar alabilir. Süreyi teklifte yazıyoruz.",
    },
    {
      q: "Mağaza ürünlerinde renk ya da ölçü değişebilir mi?",
      a: "Çoğu üründe evet. Özel ölçü, farklı renk kombinasyonu ya da kişiye özel model için bize yazın.",
    },
    {
      q: "Kargo ve iade nasıl?",
      a: "1.250 TL ve üzeri mağaza siparişlerinde kargo ücretsiz. Mesafeli satış kapsamında iade hakkınız var; kişiye özel üretilen ürünler hariç.",
    },
  ],
  en: [
    {
      q: "Which files do you accept?",
      a: "STEP, STL, OBJ and IGES models; PDF drawings, sketches or photos. No file yet? We can start from scratch and build the model.",
    },
    {
      q: "How is pricing worked out?",
      a: "By size, material, quantity and the design work involved. Once we have your brief, we send a clear quote.",
    },
    {
      q: "Do you make single parts?",
      a: "Yes. From one prototype to a small batch; for larger runs we move to moulds and casting.",
    },
    {
      q: "How long does it take?",
      a: "It depends on scope. A simple print takes days; a product from design to production can take weeks. The quote states the timeline.",
    },
    {
      q: "Can store products come in other colours or sizes?",
      a: "Most can. Write to us for custom sizes, colour combinations or a personalised model.",
    },
    {
      q: "Shipping and returns?",
      a: "Shipping is free on store orders over 1,250 TRY. Returns are accepted under Turkish distance-selling rules, except for made-to-order items.",
    },
  ],
};
