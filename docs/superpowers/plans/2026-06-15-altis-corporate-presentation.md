# Altis Corporate Presentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create an editable Turkish Canva corporate overview presentation for Altis Teknoloji using the approved Quiet Precision visual direction.

**Architecture:** Treat the presentation as a content production pipeline: source extraction, message synthesis, slide copy, visual brief, Canva generation, and review. Keep source notes and production briefs in local Markdown files so the deck can be regenerated or translated later without relying on chat history.

**Tech Stack:** Canva connector, local Markdown files, existing Astro website Markdown export, old PDF source, PowerShell/Node verification commands.

---

## File Structure

- Read: `docs/superpowers/specs/2026-06-15-altis-corporate-presentation-design.md`
  - Approved design spec and constraints.
- Read: `docs/notebooklm/pages-md/all-pages.md`
  - Full exported website content.
- Read: `docs/notebooklm/pages-md/hakkimizda.md`
  - Primary company history and trust source.
- Read: `docs/notebooklm/pages-md/platformlar__tag-trace.md`
  - Tag&Trace messaging source.
- Read: `docs/notebooklm/pages-md/platformlar__predictivo.md`
  - Predictivo messaging source.
- Read: `docs/notebooklm/pages-md/cozumler__pick-to-light.md`
  - Pick-to-Light messaging source.
- Read: `docs/notebooklm/pages-md/cozumler__asset-yonetimi.md`
  - Asset Tag&Trace messaging source.
- Read: `docs/notebooklm/pages-md/urunler.md`
  - Product family summary source.
- Read: `C:\Users\aliha\Downloads\Altis Teknoloji Kurumsal Sunum (1).pdf`
  - Legacy PDF source, especially for company history.
- Create: `docs/presentations/altis-corporate-tr/source-notes.md`
  - Extracted facts, dates, partner names, claims, and source references.
- Create: `docs/presentations/altis-corporate-tr/slide-outline.md`
  - Final 23-24 slide structure with slide goal, headline, body copy, and visual direction.
- Create: `docs/presentations/altis-corporate-tr/canva-brief.md`
  - Complete Canva generation brief, brand values, layout rules, and slide-by-slide production instructions.
- Create: `docs/presentations/altis-corporate-tr/review-checklist.md`
  - Manual QA checklist for language, brand, claims, visual direction, and Canva editability.
- Modify only if needed: `.gitignore`
  - Keep generated local scratch assets ignored if any are created.

## Constraints

- Do not use the term `Auto-ID`, `Auto ID`, or `AutoID`.
- Use `RFID` as the primary technology term.
- Deck language is Turkish.
- Output target is Canva, editable presentation.
- Visual direction is Quiet Precision: white-first, spacious, restrained, large headlines, very limited cyan accents.
- Product families are summarized, not catalogued.
- Old PDF is an information source only; do not modify it.

---

### Task 1: Prepare Source Workspace

**Files:**
- Create: `docs/presentations/altis-corporate-tr/source-notes.md`
- Create: `docs/presentations/altis-corporate-tr/slide-outline.md`
- Create: `docs/presentations/altis-corporate-tr/canva-brief.md`
- Create: `docs/presentations/altis-corporate-tr/review-checklist.md`

- [ ] **Step 1: Create the presentation workspace**

Run:

```powershell
New-Item -ItemType Directory -Force docs\presentations\altis-corporate-tr
```

Expected: directory exists.

- [ ] **Step 2: Create empty production files**

Use `apply_patch` to add the four Markdown files listed above with placeholder headings.

- [ ] **Step 3: Verify workspace files exist**

Run:

```powershell
Get-ChildItem docs\presentations\altis-corporate-tr | Select-Object Name
```

Expected: `source-notes.md`, `slide-outline.md`, `canva-brief.md`, and `review-checklist.md`.

- [ ] **Step 4: Commit workspace scaffold**

Run:

```powershell
git add docs/presentations/altis-corporate-tr
git commit -m "docs: scaffold Altis corporate presentation workspace"
```

Expected: commit succeeds.

---

### Task 2: Extract Website Source Notes

**Files:**
- Read: `docs/notebooklm/pages-md/hakkimizda.md`
- Read: `docs/notebooklm/pages-md/platformlar__tag-trace.md`
- Read: `docs/notebooklm/pages-md/platformlar__predictivo.md`
- Read: `docs/notebooklm/pages-md/cozumler__pick-to-light.md`
- Read: `docs/notebooklm/pages-md/cozumler__asset-yonetimi.md`
- Read: `docs/notebooklm/pages-md/urunler.md`
- Modify: `docs/presentations/altis-corporate-tr/source-notes.md`

- [ ] **Step 1: Read the core company source**

Run:

```powershell
Get-Content docs\notebooklm\pages-md\hakkimizda.md | Select-Object -First 220
```

Expected: company history, experience, awards, partners, and expertise text is visible.

- [ ] **Step 2: Read platform and solution sources**

Run:

```powershell
Get-Content docs\notebooklm\pages-md\platformlar__tag-trace.md | Select-Object -First 180
Get-Content docs\notebooklm\pages-md\platformlar__predictivo.md | Select-Object -First 180
Get-Content docs\notebooklm\pages-md\cozumler__pick-to-light.md | Select-Object -First 180
Get-Content docs\notebooklm\pages-md\cozumler__asset-yonetimi.md | Select-Object -First 180
```

Expected: product/platform messaging is available.

- [ ] **Step 3: Read product family source**

Run:

```powershell
Get-Content docs\notebooklm\pages-md\urunler.md | Select-Object -First 180
```

Expected: product family categories and summary claims are available.

- [ ] **Step 4: Populate source notes**

Use `apply_patch` to fill `source-notes.md` with these sections:

```markdown
# Altis Corporate Presentation Source Notes

## Company Facts

## History

## Trust And Awards

## Technology Areas

## Platforms And Solutions

## Product Family Summary

## Industries

## Project Approach

## Partner Ecosystem

## Claims To Preserve

## Claims To Avoid Or Rephrase
```

Keep each fact short and cite the local source filename in parentheses.

- [ ] **Step 5: Verify banned terminology is absent from new notes**

Run:

```powershell
rg -n "Auto-ID|Auto ID|AutoID" docs\presentations\altis-corporate-tr\source-notes.md
```

Expected: no matches.

- [ ] **Step 6: Commit website source notes**

Run:

```powershell
git add docs/presentations/altis-corporate-tr/source-notes.md
git commit -m "docs: collect Altis presentation source notes"
```

Expected: commit succeeds.

---

### Task 3: Extract Legacy PDF History Notes

**Files:**
- Read: `C:\Users\aliha\Downloads\Altis Teknoloji Kurumsal Sunum (1).pdf`
- Modify: `docs/presentations/altis-corporate-tr/source-notes.md`

- [ ] **Step 1: Check for installed PDF extraction tools**

Run:

```powershell
Get-Command pdftotext,mutool,magick,gswin64c -ErrorAction SilentlyContinue | Select-Object Name,Source
```

Expected: if any tool exists, use it to extract PDF text or page previews.

- [ ] **Step 2: If no PDF extraction tool exists, use a controlled fallback**

If no local PDF extraction tool exists, do not invent old PDF facts. Use the current website history as the verified baseline and add a `Legacy PDF Review Needed` note in `source-notes.md`.

Fallback text:

```markdown
## Legacy PDF Review Needed

The legacy PDF exists at `C:\Users\aliha\Downloads\Altis Teknoloji Kurumsal Sunum (1).pdf`, but no local PDF extraction tool was available in the current environment. The deck will use verified website history unless the PDF history pages are reviewed manually or a PDF extraction tool is installed.
```

- [ ] **Step 3: If extraction succeeds, append PDF history facts**

Add a section:

```markdown
## Legacy PDF History Notes

- [fact] (legacy PDF)
- [date or milestone] (legacy PDF)
```

Preserve exact dates and claims only if visible in the extracted text.

- [ ] **Step 4: Verify banned terminology is absent from source notes**

Run:

```powershell
rg -n "Auto-ID|Auto ID|AutoID" docs\presentations\altis-corporate-tr\source-notes.md
```

Expected: no matches.

- [ ] **Step 5: Commit legacy PDF notes**

Run:

```powershell
git add docs/presentations/altis-corporate-tr/source-notes.md
git commit -m "docs: add legacy presentation history notes"
```

Expected: commit succeeds.

---

### Task 4: Write Final Slide Outline

**Files:**
- Read: `docs/superpowers/specs/2026-06-15-altis-corporate-presentation-design.md`
- Read: `docs/presentations/altis-corporate-tr/source-notes.md`
- Modify: `docs/presentations/altis-corporate-tr/slide-outline.md`

- [ ] **Step 1: Draft 23-slide outline**

Use `apply_patch` to write `slide-outline.md` with this schema for every slide:

```markdown
## Slide NN: [Title]

Goal:

Headline:

Body:

Visual Direction:

Source:
```

- [ ] **Step 2: Use the approved slide flow**

Base the deck on these slides:

1. Kapak
2. Altis Tek Cümlede
3. Ne Yapıyoruz?
4. Neden Altis?
5. Tarihçe I
6. Tarihçe II
7. Tarihçe III
8. Bugün Altis
9. Teknoloji Alanlarımız
10. RFID Yetkinliği
11. IoT ve Endüstriyel Veri
12. RTLS ve Konum Görünürlüğü
13. Yazılım Platformları
14. Ürün Aileleri Özeti
15. Sektörler
16. Proje Yaklaşımı
17. Entegrasyon Disiplini
18. Çözüm Ortakları
19. Başarılar ve Güven
20. Nasıl Değer Üretiyoruz?
21. Altis ile Çalışmak
22. Kapanış
23. İletişim

- [ ] **Step 3: Keep slide copy minimal**

For each slide:
- Headline should be one strong sentence.
- Body should be 1-3 short lines.
- Avoid dense bullet lists except where the slide is explicitly a summary.
- Avoid repeated eyebrow labels.

- [ ] **Step 4: Verify banned terminology and length**

Run:

```powershell
rg -n "Auto-ID|Auto ID|AutoID" docs\presentations\altis-corporate-tr\slide-outline.md
```

Expected: no matches.

Run:

```powershell
rg -n "^## Slide" docs\presentations\altis-corporate-tr\slide-outline.md
```

Expected: 23 slide headings, or 24 if a PDF-derived history point justifies an extra slide.

- [ ] **Step 5: Commit slide outline**

Run:

```powershell
git add docs/presentations/altis-corporate-tr/slide-outline.md
git commit -m "docs: draft Altis corporate presentation outline"
```

Expected: commit succeeds.

---

### Task 5: Write Canva Production Brief

**Files:**
- Read: `docs/presentations/altis-corporate-tr/slide-outline.md`
- Read: `src/styles/global.css`
- Read: `public/assets/altis-logo.png`
- Modify: `docs/presentations/altis-corporate-tr/canva-brief.md`

- [ ] **Step 1: Extract brand values**

Use these values:

```markdown
- Primary navy: `#00125C`
- Accent cyan: `#18B7D6`
- White: `#FFFFFF`
- Soft background: `#F6F8FC`
- Text: `#111827`
- Muted text: `#5F6675`
- Font direction: Inter or closest Canva equivalent
- Logo source: `public/assets/altis-logo.png`
```

- [ ] **Step 2: Write design rules**

Add these rules to `canva-brief.md`:

```markdown
## Visual Rules

- White-first slides.
- Large headline, short body copy.
- No heavy cards.
- No repeated eyebrow labels.
- No decorative gradients or abstract blobs.
- Use cyan only as a small line, dot, or emphasis.
- Prefer real product/partner logos only when they clarify the message.
- Keep each slide editable in Canva.
```

- [ ] **Step 3: Add slide-by-slide Canva instructions**

For each slide in `slide-outline.md`, include:
- Layout type.
- Text hierarchy.
- Suggested visual assets.
- Whether partner/product logos are needed.

- [ ] **Step 4: Verify banned terminology is absent**

Run:

```powershell
rg -n "Auto-ID|Auto ID|AutoID" docs\presentations\altis-corporate-tr\canva-brief.md
```

Expected: no matches.

- [ ] **Step 5: Commit Canva brief**

Run:

```powershell
git add docs/presentations/altis-corporate-tr/canva-brief.md
git commit -m "docs: prepare Canva brief for Altis corporate deck"
```

Expected: commit succeeds.

---

### Task 6: Create Review Checklist

**Files:**
- Modify: `docs/presentations/altis-corporate-tr/review-checklist.md`

- [ ] **Step 1: Add content QA checks**

Use `apply_patch` to add:

```markdown
## Content QA

- [ ] Turkish deck only.
- [ ] No banned terminology.
- [ ] RFID is the primary technology term.
- [ ] Product families are summarized, not catalogued.
- [ ] History spans multiple slides.
- [ ] Dates and awards match source notes.
- [ ] Partner/distributor claims are sourced.
```

- [ ] **Step 2: Add visual QA checks**

Use `apply_patch` to add:

```markdown
## Visual QA

- [ ] Quiet Precision direction is visible.
- [ ] White-first and spacious.
- [ ] Headline-led slides.
- [ ] Minimal cyan accents.
- [ ] No heavy cards.
- [ ] No repeated eyebrow labels.
- [ ] Canva elements remain editable.
```

- [ ] **Step 3: Add Canva delivery checks**

Use `apply_patch` to add:

```markdown
## Canva Delivery QA

- [ ] Deck is editable in Canva.
- [ ] Altis logo appears cleanly.
- [ ] Final link opens.
- [ ] Sharing permissions are appropriate.
- [ ] Turkish text renders correctly.
- [ ] Exported preview can be reviewed by the user.
```

- [ ] **Step 4: Commit review checklist**

Run:

```powershell
git add docs/presentations/altis-corporate-tr/review-checklist.md
git commit -m "docs: add Altis deck review checklist"
```

Expected: commit succeeds.

---

### Task 7: Generate Editable Canva Presentation

**Files:**
- Read: `docs/presentations/altis-corporate-tr/canva-brief.md`
- Read: `docs/presentations/altis-corporate-tr/slide-outline.md`
- Read: `docs/presentations/altis-corporate-tr/review-checklist.md`

- [ ] **Step 1: Load Canva capabilities**

Use the Canva branded presentation workflow. If tools are not loaded, search for Canva presentation tools with `tool_search`.

- [ ] **Step 2: Generate presentation candidates**

Use `canva-brief.md` as the generation prompt. Request an editable presentation with 23-24 slides in Turkish.

Expected: Canva returns one or more candidate designs.

- [ ] **Step 3: Choose the candidate closest to Quiet Precision**

Select the candidate that best matches:
- White-first minimalism.
- Large headline hierarchy.
- Low decoration.
- Low card usage.
- Clear corporate story.

- [ ] **Step 4: Create final editable presentation**

Create the final Canva design from the selected candidate.

Expected: final editable Canva link is available.

- [ ] **Step 5: Record the Canva link locally**

Use `apply_patch` to add a `## Canva Deliverable` section to `review-checklist.md`:

```markdown
## Canva Deliverable

- Final Canva link: [paste link]
- Created date: 2026-06-15
- Language: Turkish
```

- [ ] **Step 6: Do not commit private Canva links if the user does not want them in git**

Ask before committing `review-checklist.md` if it contains a private or editable Canva URL.

---

### Task 8: Review Canva Deck Against Checklist

**Files:**
- Read: `docs/presentations/altis-corporate-tr/review-checklist.md`
- Read: Canva final deck
- Modify: `docs/presentations/altis-corporate-tr/review-checklist.md`

- [ ] **Step 1: Run text checks on local production files**

Run:

```powershell
rg -n "Auto-ID|Auto ID|AutoID" docs\presentations\altis-corporate-tr
```

Expected: no matches.

- [ ] **Step 2: Manually review deck language**

Check every Canva slide for:
- Turkish text.
- No banned terminology.
- No typos in Altis, Tag&Trace, Predictivo, Pick-to-Light, Asset Tag&Trace, Rox Card.
- Correct use of RFID, IoT, IIoT, RTLS.

- [ ] **Step 3: Manually review deck visual direction**

Check every Canva slide for:
- Quiet Precision visual direction.
- No heavy cards.
- No repeated eyebrow labels.
- Adequate whitespace.
- Editable text and assets.

- [ ] **Step 4: Update checklist results**

Mark completed checklist items in `review-checklist.md`. Add a short `## Review Notes` section with any remaining issues.

- [ ] **Step 5: Present deck to user for review**

Return:
- Final Canva link.
- Slide count.
- Any remaining assumptions.
- Items that need user review, especially old PDF history details if PDF extraction was unavailable.

---

### Task 9: Prepare English Localization Handoff

**Files:**
- Read: `docs/presentations/altis-corporate-tr/slide-outline.md`
- Create: `docs/presentations/altis-corporate-en/localization-notes.md`

- [ ] **Step 1: Create English localization directory**

Run:

```powershell
New-Item -ItemType Directory -Force docs\presentations\altis-corporate-en
```

Expected: directory exists.

- [ ] **Step 2: Create localization notes**

Use `apply_patch` to add `localization-notes.md` with:

```markdown
# Altis Corporate Presentation English Localization Notes

## Source Deck

Turkish Canva deck created from `docs/presentations/altis-corporate-tr/slide-outline.md`.

## Translation Rules

- Preserve company names, product names, dates, awards, and partner claims.
- Translate meaning, not word-for-word phrasing.
- Keep headlines short and presentation-ready.
- Keep the same Quiet Precision visual direction.
```

- [ ] **Step 3: Commit localization handoff**

Run:

```powershell
git add docs/presentations/altis-corporate-en/localization-notes.md
git commit -m "docs: prepare English deck localization handoff"
```

Expected: commit succeeds.

---

## Final Verification

- [ ] **Run build if website source export may have changed**

Run:

```powershell
npm.cmd run build
npm.cmd run export:notebooklm
```

Expected: build succeeds and Markdown export completes.

- [ ] **Run banned terminology check**

Run:

```powershell
rg -n "Auto-ID|Auto ID|AutoID" docs\presentations
```

Expected: no matches.

- [ ] **Review git status**

Run:

```powershell
git status -sb
```

Expected: only intentional files are modified or untracked.

- [ ] **Report final outcome**

Final response must include:
- Canva link.
- Slide count.
- Whether PDF history was extracted or fallback was used.
- Verification commands run and outcomes.
- Any remaining review items for the user.
