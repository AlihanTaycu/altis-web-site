import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/sektorler/perakende-tekstil.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('retail textile page is migrated with sector content and service schema', () => {
  const requiredContent = [
    'Perakende &amp; Tekstil',
    'Konfeksiyon',
    'RFID için 6 uygulanabilir çözüm',
    'Altis tasarımı RFID tünel ve kutuları',
    'Fabrikadan mağaza rafına, beş adımda',
    'RFID destekli perakende, ölçülebilir kazanç',
    'Karar verici profillerine göre',
    '"@type": "Service"',
    '"name": "Perakende ve Tekstil RFID Çözümleri"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

test('retail textile page uses Astro layout routes instead of legacy html links', () => {
  const forbiddenContent = [
    'altis-landing.html',
    'tagtrace.html',
    'sektor-depo-lojistik.html',
    'sektor-uretim.html',
    '<header class="site-header">',
    '<footer>',
  ];

  for (const content of forbiddenContent) {
    assert.doesNotMatch(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(pageSource, /\{\{[^}]+}}/);
  assert.match(pageSource, /\/iletisim\//);
  assert.match(pageSource, /\/platformlar\/tag-trace\//);
  assert.match(pageSource, /\/sektorler\/depo-lojistik\//);
  assert.match(pageSource, /\/sektorler\/uretim\//);
  assert.match(pageSource, /\/sektorler\/perakende-tekstil\//);
});
