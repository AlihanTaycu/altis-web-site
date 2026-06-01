import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const headerSource = await readFile(new URL('../src/components/layout/Header.astro', import.meta.url), 'utf8');

test('header source declares mega-panel structure', () => {
  assert.match(headerSource, /class="mega-panel"/);
  assert.match(headerSource, /has-mega/);
  assert.match(headerSource, /mega-platform-grid/);
  assert.match(headerSource, /mega-cards-grid/);
  assert.match(headerSource, /mega-sectors-grid/);
  assert.match(headerSource, /mega-products-grid/);
  assert.match(headerSource, /mega-resources-grid/);
});

test('platform mega menu lists Tag&Trace and Predictivo platforms', () => {
  const platformLabels = ['Tag&Trace', 'Predictivo', 'Asset Tag & Trace'];
  for (const label of platformLabels) {
    assert.ok(headerSource.includes(label), `Platform mega should include "${label}"`);
  }
});

test('platform mega menu includes Yapı Taşları block items', () => {
  const blockLabels = [
    'RFID altyapısı',
    'WMS / ERP entegrasyonu',
    'Mobil saha uygulaması',
    'Dashboard & raporlama',
    'IoT / sensör verisi',
    'API / entegrasyon',
  ];
  for (const label of blockLabels) {
    assert.ok(headerSource.includes(label), `Yapı Taşları should include "${label}"`);
  }
});

test('platform mega menu has Öne Çıkanlar strip with featured product links', () => {
  assert.ok(headerSource.includes('Öne Çıkanlar'));
  const featured = ['RFID Okuyucular', 'RFID El Terminalleri', 'RFID Yazıcılar', 'Akıllı Gözlükler'];
  for (const label of featured) {
    assert.ok(headerSource.includes(label), `Öne Çıkanlar should include "${label}"`);
  }
});

test('solutions mega menu surfaces all six solution cards', () => {
  const cards = [
    'TrueScan',
    'Pick-to-Light',
    'Asset Yönetimi',
    'RFID Perakende',
    'Tag&Trace',
    'Rox Card',
  ];
  for (const card of cards) {
    assert.ok(headerSource.includes(card), `Solutions mega should include "${card}"`);
  }
});

test('sectors mega menu surfaces all three sector cards', () => {
  const sectors = ['Depo & Lojistik', 'Perakende & Tekstil', 'Üretim'];
  for (const sector of sectors) {
    assert.ok(headerSource.includes(sector), `Sectors mega should include "${sector}"`);
  }
});

test('products mega menu surfaces RFID products and Vuzix glasses group', () => {
  const products = [
    'RFID Ürünleri',
    'Akıllı Gözlükler',
    'RFID Etiketler',
    'RFID Okuyucular',
    'RFID El Terminalleri',
    'RFID Yazıcılar',
    'Vuzix Akıllı Gözlükler',
  ];
  for (const product of products) {
    assert.ok(headerSource.includes(product), `Products mega should include "${product}"`);
  }
});

test('resources mega menu links to Hakkımızda and İletişim', () => {
  assert.ok(headerSource.includes('Hakkımızda'));
  assert.ok(headerSource.includes('İletişim'));
  assert.ok(headerSource.includes('/hakkimizda/'));
  assert.ok(headerSource.includes('/iletisim/'));
});

test('mobile menu retains accordion toggle for mega groups', () => {
  assert.match(headerSource, /mobile-toggle/);
  assert.match(headerSource, /mobile-sub-links/);
  assert.match(headerSource, /aria-expanded="false"/);
});

test('header imports lucide icons used in mega menu', () => {
  assert.match(headerSource, /from\s+['"]@lucide\/astro['"]/);
  for (const icon of ['Tag', 'Activity', 'Camera', 'Lightbulb', 'Warehouse', 'Factory', 'Glasses', 'ChevronDown', 'ArrowUpRight']) {
    assert.ok(headerSource.includes(icon), `Header should import lucide icon "${icon}"`);
  }
});
