import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/cozumler/pick-to-light.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('pick-to-light page is migrated with product content and schema', () => {
  const requiredContent = [
    'Pick-to-Light',
    'Işık yanar',
    'Nasıl Çalışır?',
    'Sade modül, sağlam saha',
    'Çalışma Modları',
    'WMS / ERP',
    '"@type": "Product"',
    '"@type": "Service"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('pick-to-light page uses Astro layout routes instead of legacy html links', () => {
  const forbiddenContent = [
    'altis-landing.html',
    'predictivo.html',
    'tagtrace.html',
    'pick-to-light.html',
    '<header class="site-header">',
    '<footer>',
  ];

  for (const content of forbiddenContent) {
    assert.doesNotMatch(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(pageSource, /\{\{[^}]+}}/);
  assert.match(pageSource, /\/iletisim\//);
  assert.match(pageSource, /\/platformlar\/tag-trace\//);
  assert.match(pageSource, /\/cozumler\/pick-to-light\//);
});
