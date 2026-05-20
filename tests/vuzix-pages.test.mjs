import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);

async function readSource(path) {
  return readFile(new URL(path, root), 'utf8');
}

function assertIncludesAll(source, values) {
  for (const value of values) {
    assert.match(source, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
}

test('vuzix data defines the three active smart glasses with detail routes', async () => {
  const source = await readSource('src/data/vuzix-smart-glasses.ts');

  assertIncludesAll(source, [
    'vuzix-m400',
    'vuzix-m4000',
    'vuzix-lx1',
    '/urunler/akilli-gozluk/vuzix-m400/',
    '/urunler/akilli-gozluk/vuzix-m4000/',
    '/urunler/akilli-gozluk/vuzix-lx1/',
    'Product',
  ]);
});

test('vuzix hub links to all model detail pages and premium sections', async () => {
  const source = await readSource('src/pages/urunler/akilli-gozluk.astro');
  const dataSource = await readSource('src/data/vuzix-smart-glasses.ts');
  const searchable = `${source}\n${dataSource}`;

  assertIncludesAll(searchable, [
    'vuzixSmartGlasses',
    '/urunler/akilli-gozluk/vuzix-m400/',
    '/urunler/akilli-gozluk/vuzix-m4000/',
    '/urunler/akilli-gozluk/vuzix-lx1/',
    'Modeli İncele',
    'Karşılaştır',
    'Neden Altis Teknoloji',
  ]);
});

test('vuzix dynamic detail page renders model content, specs, and related models', async () => {
  const source = await readSource('src/pages/urunler/akilli-gozluk/[slug].astro');

  assertIncludesAll(source, [
    'getStaticPaths',
    'vuzixSmartGlasses',
    '"@type": "Product"',
    'Teknik Özellikler',
    'Öne Çıkan Özellikler',
    'Diğer Vuzix Modelleri',
    'Fiyat Teklifi Al',
  ]);
});

test('vuzix local image references exist under public', async () => {
  const dataSource = await readSource('src/data/vuzix-smart-glasses.ts');
  const pageSource = await readSource('src/pages/urunler/akilli-gozluk.astro');
  const allSources = `${dataSource}\n${pageSource}`;
  const imageMatches = [...allSources.matchAll(/["'](\/images\/vuzix\/[^"']+)["']/g)];
  const images = [...new Set(imageMatches.map(match => match[1]))];

  assert.ok(images.length >= 3, 'expected at least one local image per Vuzix model');

  for (const image of images) {
    await access(new URL(`public${image}`, root));
  }
});
