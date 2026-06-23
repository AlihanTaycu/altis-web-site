# Altis Web - Developer Onboarding

## Purpose

This repository contains the Altis Teknoloji corporate website and B2B quote-oriented product catalog. The business goal is to improve customer acquisition through clearer positioning, stronger lead flows and a reliable RFID/IoT product catalog.

Read these first:

1. `PLAN.md` - active business and implementation priorities
2. `HANDOFF.md` - current technical state and known risks
3. This file - setup and development workflow

## Setup

```powershell
git clone <repo-url>
cd altis-web
npm.cmd install
npm.cmd run dev
```

Local dev server defaults to Astro's dev URL, usually:

```text
http://localhost:4321
```

On Windows PowerShell, use `npm.cmd` instead of `npm`.

## Project Structure

```text
altis-web/
|-- src/
|   |-- components/
|   |   |-- layout/       # Header, Footer, CookieBanner
|   |   |-- sections/     # Shared section components
|   |   `-- seo/          # Head metadata component
|   |-- data/             # Product and partner data
|   |-- layouts/          # Base page layout
|   |-- pages/            # Astro file-based routes
|   `-- styles/           # Global CSS
|-- public/               # Static assets, product images, datasheets, videos
|-- tests/                # Node test suite
|-- docs/                 # Backlogs, specs, plans and working notes
|-- PLAN.md               # Active project priorities
|-- HANDOFF.md            # Technical handoff
`-- package.json
```

## Page Pattern

Use the shared base layout for new pages:

```astro
---
import Base from '../layouts/Base.astro';

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Page name",
  "description": "Page description",
  "url": "https://www.altis.com.tr/path/"
};
---

<Base
  title="Page Title - Altis Teknoloji"
  description="Short SEO description."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/path/"
>
  <!-- Page content -->
</Base>
```

Route examples:

- `src/pages/platformlar/tag-trace.astro` -> `/platformlar/tag-trace/`
- `src/pages/urunler/etiketler/[slug].astro` -> `/urunler/etiketler/<slug>/`
- `src/pages/en/products/rfid-tags/[slug].astro` -> `/en/products/rfid-tags/<slug>/`

## Product Catalog Rules

The current catalog is a B2B quote catalog.

- Do not add cart or checkout behavior without a separate plan.
- Quote CTAs should route users toward contact or quote request flows.
- Product facts should live in `src/data/*.ts`.
- Datasheets belong under `public/assets/products/<product-slug>/`.
- Keep category pages decision-oriented: help users understand which product family fits which scenario.
- Keep detail pages balanced: commercial use case first, technical specs second, datasheet/quote CTA clearly visible.

## Copy And Claims

Altis sells industrial systems where trust matters. Avoid unsupported absolute claims.

Use safer phrasing:

- "pilot kapsaminda olculen"
- "saha kosullarina gore dogrulanir"
- "proje kapsaminda netlestirilir"
- "manuel isi azaltmaya yardimci olur"
- "stok gorunurlugunu artirir"

Avoid unsupported phrasing:

- exact percentages without source context
- guaranteed uptime/SLA claims without contract context
- "kesin", "her kosulda", "tam dogruluk" style absolutes

If RFID is the preferred public term, avoid introducing "Auto-ID" in new copy unless the page intentionally discusses a broader category.

## Current Priority Areas

Follow `PLAN.md`, currently:

1. Fix English navigation/page gaps.
2. Improve home/contact lead flow.
3. Reframe performance and success claims.
4. Clarify the B2B catalog experience.
5. Later: real form backend/CRM/e-mail integration.

## Verification

Run before handing work off:

```powershell
npm.cmd test
npm.cmd run build
```

Targeted checks that are often useful:

```powershell
rg -n 'Auto-ID|Auto ID|AutoID' src
rg -n '%99|%80|99\.97|uptime|SLA' src/pages src/components src/data
rg -n '<form|onsubmit|method=|action=' src/pages src/components
```

## Workflow

1. Check `git status -sb` before editing.
2. Do not overwrite unrelated user changes.
3. Keep edits scoped to the active priority.
4. Add or update tests when behavior changes.
5. Run the verification commands.
6. Summarize changed files and any remaining risk.
