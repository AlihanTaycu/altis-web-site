import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);

const pages = [
  {
    path: '../src/pages/platformlar/index.astro',
    name: 'platform hub',
    required: ['Platformlar', 'Tag&Trace', 'Predictivo', '/platformlar/tag-trace/', '/platformlar/predictivo/'],
  },
  {
    path: '../src/pages/cozumler/index.astro',
    name: 'solutions hub',
    required: ['Çözümler', 'Pick-to-Light', 'Asset Yönetimi', '/cozumler/pick-to-light/', '/cozumler/asset-yonetimi/'],
  },
  {
    path: '../src/pages/sektorler/index.astro',
    name: 'sectors hub',
    required: ['Sektörler', 'Depo & Lojistik', 'Perakende & Tekstil', 'Üretim', '/sektorler/depo-lojistik/', '/sektorler/perakende-tekstil/', '/sektorler/uretim/'],
  },
  {
    path: '../src/pages/iletisim.astro',
    name: 'contact page',
    required: ['İletişim', 'Demo Talep Et', 'Altis Teknoloji', 'mailto:', 'tel:'],
  },
  {
    path: '../src/pages/hakkimizda.astro',
    name: 'about page',
    required: ['Hakkımızda', 'Altis Teknoloji', 'RFID', 'IoT', '/iletisim/'],
  },
];

async function readMaybe(path) {
  try {
    return await readFile(new URL(path, import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

for (const page of pages) {
  test(`${page.name} exists with expected content and layout`, async () => {
    const source = await readMaybe(page.path);

    assert.match(source, /import Base from/);
    assert.match(source, /<Base/);

    for (const content of page.required) {
      assert.match(source, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }
  });
}

test('solutions hub uses the TrueScan marketing image instead of the placeholder SVG visual', async () => {
  const source = await readMaybe('../src/pages/cozumler/index.astro');

  assert.match(source, /\/images\/truescan\/truescan-marketing\.png/);
  assert.match(source, /TrueScan endüstriyel kamera ile kirli barkod ve QR kod okuma görseli/);
  assert.doesNotMatch(source, /id="ts-bg"/);
  await access(new URL('public/images/truescan/truescan-marketing.png', root));
});

test('sectors hub uses the pick-to-light warehouse marketing image instead of the placeholder SVG visual', async () => {
  const source = await readMaybe('../src/pages/sektorler/index.astro');

  assert.match(source, /\/images\/pick-to-light\/p2l-marketing\.png/);
  assert.match(source, /Pick-to-Light raf yönlendirme ile depo operatörü çalışma görseli/);
  assert.doesNotMatch(source, /id="wh-bg"/);
  await access(new URL('public/images/pick-to-light/p2l-marketing.png', root));
});
