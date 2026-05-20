import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/sektorler/depo-lojistik.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('warehouse logistics page is migrated with sector content and service schema', () => {
  const requiredContent = [
    'Depo &amp; Lojistik',
    'Stok doğruluğu',
    'Kullanılan platformlar',
    'Çözüm Haritası',
    'Depo Senaryoları',
    'Operasyonda Tipik Akış',
    'Karar verici profillerine göre',
    '"@type": "Service"',
    '"name": "Depo ve Lojistik RFID Çözümleri"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

test('warehouse logistics page uses Astro layout routes instead of legacy html links', () => {
  const forbiddenContent = [
    'altis-landing.html',
    'predictivo.html',
    'tagtrace.html',
    '<header class="site-header">',
    '<footer>',
  ];

  for (const content of forbiddenContent) {
    assert.doesNotMatch(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(pageSource, /\{\{[^}]+}}/);
  assert.match(pageSource, /\/iletisim\//);
  assert.match(pageSource, /\/platformlar\/tag-trace\//);
  assert.match(pageSource, /\/platformlar\/predictivo\//);
  assert.match(pageSource, /\/sektorler\/depo-lojistik\//);
});
