import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/sektorler/uretim.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('manufacturing page is migrated with sector content and service schema', () => {
  const requiredContent = [
    'Üretim',
    'Hat verimliliğini',
    'Üretimde her veri kaynağı, doğru platform',
    'Fabrika için 6 uygulanabilir çözüm',
    'Saha sensöründen yönetim ekranına, beş adımda',
    'Mevcut otomasyon altyapınızla çalışır',
    'Karar verici profillerine göre',
    '"@type": "Service"',
    '"name": "Üretim IoT ve Operasyonel Zekâ Çözümleri"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

test('manufacturing page uses Astro layout routes instead of legacy html links', () => {
  const forbiddenContent = [
    'altis-landing.html',
    'predictivo.html',
    'tagtrace.html',
    'sektor-depo-lojistik.html',
    '<header class="site-header">',
    '<footer>',
  ];

  for (const content of forbiddenContent) {
    assert.doesNotMatch(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(pageSource, /\{\{[^}]+}}/);
  assert.match(pageSource, /\/iletisim\//);
  assert.match(pageSource, /\/platformlar\/predictivo\//);
  assert.match(pageSource, /\/platformlar\/tag-trace\//);
  assert.match(pageSource, /\/sektorler\/depo-lojistik\//);
  assert.match(pageSource, /\/sektorler\/perakende-tekstil\//);
  assert.match(pageSource, /\/sektorler\/uretim\//);
});
