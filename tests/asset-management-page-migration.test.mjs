import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/cozumler/asset-yonetimi.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('asset management page is migrated with app content and schema', () => {
  const requiredContent = [
    'Asset Tag <span class="amp">&amp;</span> Trace',
    'Demirbaş yönetimi',
    'Üç Temel Modül',
    'Yeni Nesil Demirbaş Yönetimi',
    'Yetenekler · Derinlemesine',
    'Abonelik Paketleri',
    '$49',
    '15 gün ücretsiz',
    '"@type": "SoftwareApplication"',
    '"price": "49"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

test('asset management page uses Astro layout routes instead of legacy html links', () => {
  const forbiddenContent = [
    'altis-landing.html',
    'predictivo.html',
    'tagtrace.html',
    'pick-to-light.html',
    'asset-tag-and-trace.html',
    '<header class="site-header">',
    '<footer>',
  ];

  for (const content of forbiddenContent) {
    assert.doesNotMatch(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(pageSource, /\{\{[^}]+}}/);
  assert.match(pageSource, /\/cozumler\//);
});
