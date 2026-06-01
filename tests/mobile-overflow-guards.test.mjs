import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('mobile header does not force horizontal overflow', async () => {
  const header = await source('src/components/layout/Header.astro');

  assert.match(header, /@media \(max-width: 640px\)/);
  assert.match(header, /\.nav-actions\s*>\s*\.btn\s*\{\s*display:\s*none;\s*\}/);
  assert.match(header, /\.mobile-cta\s*\{\s*display:\s*inline-flex;/);
});

test('solution hero pills can wrap inside narrow mobile viewports', async () => {
  const pages = [
    'src/pages/cozumler/goruntu-isleme.astro',
    'src/pages/cozumler/pick-to-light.astro',
    'src/pages/cozumler/asset-yonetimi.astro',
  ];

  for (const page of pages) {
    const content = await source(page);
    assert.match(content, /\.(?:solution-pill|platform-pill)\{[^}]*max-width:100%/s, page);
    assert.match(content, /\.(?:solution-pill|platform-pill)\{[^}]*flex-wrap:wrap/s, page);
    assert.match(content, /\.(?:solution-pill|platform-pill)\{[^}]*white-space:normal/s, page);
  }
});

test('solution mockups are constrained on mobile', async () => {
  const trueScan = await source('src/pages/cozumler/goruntu-isleme.astro');
  const pickToLight = await source('src/pages/cozumler/pick-to-light.astro');
  const assetManagement = await source('src/pages/cozumler/asset-yonetimi.astro');

  assert.match(trueScan, /\.compare-card\{[^}]*max-width:100%/s);
  assert.match(pickToLight, /\.rack-scene\{[^}]*max-width:100%/s);
  assert.match(assetManagement, /\.showcase\{[^}]*max-width:100%/s);
});

test('global layout clips accidental decorative overflow on narrow screens', async () => {
  const css = await source('src/styles/global.css');

  assert.match(css, /html,\s*body\s*\{[^}]*overflow-x:\s*clip/s);
  assert.match(css, /\.container\s*\{[^}]*width:\s*100%/s);
  assert.match(css, /main,\s*section,\s*\.container\s*\{[^}]*min-width:\s*0/s);
});

test('solution pages include mobile-specific overflow containment', async () => {
  const pages = [
    'src/pages/cozumler/goruntu-isleme.astro',
    'src/pages/cozumler/pick-to-light.astro',
    'src/pages/cozumler/asset-yonetimi.astro',
  ];

  for (const page of pages) {
    const content = await source(page);
    assert.match(content, /@media \(max-width:720px\)\{[^}]*\.container\{padding:0 20px\}/s, page);
    assert.match(content, /@media \(max-width:720px\)[\s\S]*\.hero-inner\s*>\s*\*\{[^}]*min-width:0/s, page);
    assert.match(content, /@media \(max-width:720px\)[\s\S]*\.hero-inner\s*>\s*\*\{[^}]*max-width:calc\(100vw - 40px\)/s, page);
    assert.match(content, /@media \(max-width:720px\)[\s\S]*\.hero-cta\s+\.btn\{width:100%\}/s, page);
  }
});

test('solution hub has a narrow-screen typography guard', async () => {
  const hub = await source('src/pages/cozumler/index.astro');

  assert.match(hub, /@media \(max-width: 760px\)[\s\S]*\.hub-hero h1\{[^}]*overflow-wrap:break-word/s);
});
