# Nav Dropdown and Hub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add desktop hover dropdown navigation and create the missing Turkish hub/support routes linked from the header and CTAs.

**Architecture:** Keep the existing `Header.astro` component as the single source of navigation data, adding dropdown metadata for grouped nav items. Add focused Astro pages for `/platformlar/`, `/cozumler/`, `/sektorler/`, `/iletisim/`, and `/hakkimizda/` using the existing `Base.astro` layout and simple page-local CSS.

**Tech Stack:** Astro 6, Node test runner, static CSS.

---

### Task 1: Header Dropdown Navigation

**Files:**
- Modify: `src/components/layout/Header.astro`
- Test: `tests/header-dropdown.test.mjs`

- [ ] Write a failing test that verifies Platformlar, Cozumler, and Sektorler include dropdown children and accessible submenu markup.
- [ ] Run `npm.cmd test -- tests/header-dropdown.test.mjs` and confirm it fails because dropdown markup is absent.
- [ ] Update `Header.astro` nav data to include child links for the three grouped items.
- [ ] Add desktop hover/focus dropdown CSS and mobile nested links.
- [ ] Run the header test and confirm it passes.

### Task 2: Hub and Support Pages

**Files:**
- Create: `src/pages/platformlar/index.astro`
- Create: `src/pages/cozumler/index.astro`
- Create: `src/pages/sektorler/index.astro`
- Create: `src/pages/iletisim.astro`
- Create: `src/pages/hakkimizda.astro`
- Test: `tests/hub-pages.test.mjs`

- [ ] Write a failing test that verifies all five routes exist, use `Base`, include expected page-specific content, and link to migrated detail pages.
- [ ] Run `npm.cmd test -- tests/hub-pages.test.mjs` and confirm it fails because pages are absent.
- [ ] Add the five Astro pages using existing layout and restrained page-local styles.
- [ ] Run the hub page test and confirm it passes.

### Task 3: Full Verification

**Files:**
- Existing test suite and Astro build.

- [ ] Run `npm.cmd test`.
- [ ] Run `npm.cmd run build`.
- [ ] Update `HANDOFF.md` with the new completed routes and latest verification results.

