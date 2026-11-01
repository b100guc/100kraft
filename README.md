# 100KRAFT

Site for 100KRAFT, Burak Yüzgüç's design and fabrication workshop in Antalya.
TanStack Start + React + Tailwind v4. Turkish at `/`, English at `/en`, blog (Turkish) at `/blog`.

## Develop

```bash
npm install
npm run dev
```

## Content

| Command | What it does |
| --- | --- |
| `npm run sync:store` | Pulls products, prices, discounts, stock and photos from store.100kraft.com (ikas). Writes `src/data/store.generated.json` and responsive AVIF/WebP images to `public/store/`. Run it whenever the store changes. |
| `npm run build:blog` | Turns the drafts in `content/blog/*.json` into `src/data/blog.generated.json` (sanitised HTML, table of contents, FAQ schema). |
| `npm run build:sitemap` | Regenerates `public/sitemap.xml`. |
| `npm run content` | All three, in order. |

- Collections (Wall Decor, Dragon's Keeper, …) and which store photos they use: `src/data/projects.ts`
- Services: `src/data/services.ts` · FAQ: `src/data/faq.ts` · UI copy: `src/data/translations.ts`
- Blog categories and covers: `src/data/blog.ts` (covers in `public/blog/` when present)
- Instagram grid: `src/data/instagram.json` + `public/instagram/`

## Project form

The form posts to `/api/contact`, which sends mail through [Resend](https://resend.com).
Set `RESEND_API_KEY` (and optionally `CONTACT_TO`, `CONTACT_FROM`) in the hosting environment;
see `.env.example`. Without a key the form falls back to opening the visitor's mail app.

## Brand

Logo files traced from the official mark: `public/brand/` (wordmark and circle mark, SVG + PNG).
In code: `src/components/site/Brand.tsx`.
