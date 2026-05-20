import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/platformlar/predictivo.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('predictivo page is migrated with product content and schema', () => {
  const requiredContent = [
    'Predictivo',
    'Industrial IoT',
    'Operasyonel verilerinizi karar destek sistemine dönüştürün',
    'Beş Adımda Veri Aksiyona Dönüşür',
    'Yetenekler · Derinlemesine',
    'Görsel Kural Motoru',
    '"@type": "SoftwareApplication"',
    '"name": "Predictivo"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('predictivo page uses Astro layout routes instead of legacy html links', () => {
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
});
