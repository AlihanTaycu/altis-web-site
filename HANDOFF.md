# Altis Web - Technical Handoff

## Project

Altis Teknoloji kurumsal web sitesi ve teklif odakli B2B urun katalogu.

- Framework: Astro 6
- Output: static site
- Package manager command on Windows: use `npm.cmd`
- Main plan: `PLAN.md`
- Active scope: web site, lead generation flow, B2B catalog, SEO/content quality
- Out of scope for now: PowerPoint/corporate presentation work, real form backend/CRM integration

## Current Structure

| Area | Path | Notes |
|---|---|---|
| Layout wrapper | `src/layouts/Base.astro` | Shared `Head`, `Header`, `Footer`, cookie banner and analytics |
| SEO head | `src/components/seo/Head.astro` | Title, description, canonical, hreflang, OG, Twitter and JSON-LD |
| Navigation | `src/components/layout/Header.astro` | TR mega menu and EN navigation |
| Footer | `src/components/layout/Footer.astro` | Shared footer links and contact info |
| Global styles | `src/styles/global.css` | Design tokens, reset, typography, buttons and shared layout |
| Product data | `src/data/*.ts` | RFID product and Vuzix catalog data |
| Public assets | `public/` | Logo, product media, datasheets, partner logos, videos |

## Main Routes

Turkish site:

- `/`
- `/platformlar/`
- `/platformlar/tag-trace/`
- `/platformlar/predictivo/`
- `/cozumler/`
- `/cozumler/goruntu-isleme/`
- `/cozumler/pick-to-light/`
- `/cozumler/asset-yonetimi/`
- `/sektorler/`
- `/sektorler/depo-lojistik/`
- `/sektorler/perakende-tekstil/`
- `/sektorler/uretim/`
- `/urunler/`
- `/urunler/rfid-etiketler/`
- `/urunler/rfid-okuyucular/`
- `/urunler/rfid-el-terminalleri/`
- `/urunler/rfid-yazicilar/`
- `/urunler/rfid-perakende/`
- `/urunler/akilli-gozluk/`
- `/hakkimizda/`
- `/iletisim/`
- `/gizlilik/`

English site:

- `/en/`
- `/en/products/`
- `/en/products/...`

Known English gap: header links for `/en/about/`, `/en/contact/`, `/en/platforms/`, `/en/solutions/`, and `/en/sectors/` currently need either pages or navigation cleanup.

## Current Product Catalog Model

The catalog is a B2B quote catalog, not a checkout e-commerce system.

- Category pages introduce product families.
- Dynamic detail pages expose product images, descriptions, technical specs, datasheets where available, related products and quote CTAs.
- Quote CTAs generally link to `/iletisim/?urun=...`.
- Prices, stock sync, cart and checkout are not part of the current implementation.

## Active Priorities

Use `PLAN.md` as the source of truth. Current order:

1. Fix English site navigation/page gaps.
2. Simplify home and contact flow around lead generation.
3. Reframe unsupported performance and success claims.
4. Clarify the product catalog as a B2B quote experience.
5. Later: implement real form backend/CRM/e-mail handling.

## Known Risks

- The contact page form has no real submit backend.
- The home page has a fake submit handler that only changes button text.
- Some claims use exact percentages or uptime-style wording without source context.
- "Auto-ID" appears in multiple web copy locations; if RFID should be the primary public term, copy cleanup is needed.
- English product pages exist, but English corporate/funnel pages are incomplete.

## Commands

```powershell
cd "C:\Users\aliha\OneDrive - Altis Teknoloji\Desktop\altis-web"
npm.cmd install
npm.cmd run dev
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Useful checks:

```powershell
rg -n 'Auto-ID|Auto ID|AutoID' src
rg -n '%99|%80|99\.97|x2|X2|uptime|SLA' src/pages src/components src/data
rg -n '<form|onsubmit|method=|action=' src/pages src/components
```

## Development Notes

- Prefer existing Astro patterns before adding new abstractions.
- Use `Base.astro` for pages and pass `title`, `description`, `schema`, `lang`, and `alternateUrl` when relevant.
- Keep Turkish routes under `src/pages/` and English routes under `src/pages/en/`.
- Keep product facts in `src/data/*.ts`; avoid scattering product specs directly into templates.
- Run `npm.cmd test` and `npm.cmd run build` before calling work complete.
