"""Editorial blog covers from real product photography.

Writes content/blog/covers/<slug>.png (1600x900); `npm run build:blog` then encodes them.
Usage: python3 scripts/make-blog-covers.py   (needs Pillow)
"""

from pathlib import Path

import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "content/blog/covers"
W, H, PANEL = 1600, 900, 640

PAPER, INK, TERRACOTTA = (238, 235, 231), (20, 19, 18), (181, 90, 73)
MUTED_ON_PAPER, MUTED_ON_INK = (107, 102, 97), (160, 155, 150)

DRAGON = "the-dragons-keeper-ejderha-taki-askisi-ve-duvar-dekoru"

# slug, category, (store product, image index)
POSTS = [
    ("3d-baski-fiyatlari-nasil-belirlenir", "Rehber", (DRAGON, 2)),
    ("fdm-sla-sls-hangi-3d-baski-teknolojisi", "Teknoloji", ("toothless-light-fury-ikili-sevgili-koleksiyon-paketi-avantajli-set", 0)),
    ("3d-baski-malzeme-secimi-pla-petg-abs-tpu", "Malzeme", ("grainztag-pet", 0)),
    ("fikirden-prototipe-urun-gelistirme-sureci", "Süreç", ("wall-decor-2-uclu", 2)),
    ("3d-baski-icin-dosya-hazirlama-stl-step", "Rehber", ("wall-decor-1", 1)),
    ("hizli-prototipleme-ile-kalip-maliyeti-dusurmek", "Süreç", ("wall-decor-2", 3)),
    ("silikon-kalip-ve-dokum-kucuk-seri-uretim", "Kalıp & döküm", ("wall-decor-2-uclu", 1)),
    ("eklemli-flexi-figur-nasil-tasarlanir", "Tasarım", ("dissiz-toothless-hareketli-eklemli-ejderha-figuru-20-cm", 1)),
    ("nfc-etiketli-akilli-urunler-grainztag", "Ürün", ("grainztag-pet2", 0)),
    ("moduler-duvar-dekoru-wall-decor", "Ürün", ("wall-decor-2", 0)),
    ("3d-baski-yuzey-islemleri-zimpara-astar-boya", "Son işlem", (DRAGON, 3)),
    ("tersine-muhendislik-kirik-parcayi-yeniden-uretmek", "Rehber", ("light-fury-hareketli-eklemli-ejderha-figuru-20-cm", 0)),
]


FONT_URL = "https://github.com/google/fonts/raw/main/ofl/archivo/Archivo%5Bwdth,wght%5D.ttf"


def font_file() -> Path:
    # Full Archivo (the site's subset lacks some Turkish capitals).
    ttf = ROOT / ".cache/archivo-full.ttf"
    if not ttf.exists():
        ttf.parent.mkdir(parents=True, exist_ok=True)
        urllib.request.urlretrieve(FONT_URL, ttf)
    return ttf


def tr_upper(text: str) -> str:
    return text.replace("i", "İ").replace("ı", "I").upper()


def archivo(size: int, weight: int, width: int) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(font_file()), size)
    font.set_variation_by_axes([weight, width])
    return font


def photo(slug: str, index: int) -> Image.Image:
    folder = ROOT / "public/store" / slug
    files = sorted(folder.glob(f"{index}-*.webp"), key=lambda p: int(p.stem.split("-")[1]))
    return Image.open(files[-1]).convert("RGB")


def tracked(draw, xy, text, font, fill, spacing):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + spacing


def cover(n: int, slug: str, category: str, source: tuple[str, int]) -> None:
    dark = n % 2 == 0
    bg, fg, muted = (INK, PAPER, MUTED_ON_INK) if dark else (PAPER, INK, MUTED_ON_PAPER)
    canvas = Image.new("RGB", (W, H), bg)
    canvas.paste(ImageOps.fit(photo(*source), (W - PANEL, H), centering=(0.5, 0.5)), (PANEL, 0))

    d = ImageDraw.Draw(canvas)
    tracked(d, (72, 72), "100KRAFT · BLOG", archivo(24, 600, 100), muted, 3)

    label = tr_upper(category)
    size = 120
    while d.textlength(label, font=archivo(size, 650, 70)) > PANEL - 144 and size > 60:
        size -= 4
    d.text((72, 470 - size), label, font=archivo(size, 650, 70), fill=fg)

    d.text((64, H - 340), f"{n:02d}", font=archivo(300, 700, 62), fill=TERRACOTTA)
    d.line([(72, H - 72), (PANEL - 72, H - 72)], fill=muted, width=2)

    OUT.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT / f"{slug}.png", optimize=True)


if __name__ == "__main__":
    for i, (slug, category, source) in enumerate(POSTS, start=1):
        cover(i, slug, category, source)
        print("✓", slug)
