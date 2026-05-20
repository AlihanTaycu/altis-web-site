import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

async function readPage() {
  try {
    return await readFile(new URL('../src/pages/platformlar/tag-trace.astro', import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const pageSource = await readPage();

test('tag trace page is migrated with product content and schema', () => {
  const requiredContent = [
    'Tag&amp;Trace',
    'RFID ve Auto-ID',
    'Üç Temel Yetenek',
    'Yetenekler · Derinlemesine',
    'Kurumsal Entegrasyon',
    'Görsel Kural Motoru',
    '"@type": "SoftwareApplication"',
    '"name": "Tag&Trace"',
  ];

  for (const content of requiredContent) {
    assert.match(pageSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('tag trace page uses Astro layout routes instead of legacy html links', () => {
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
  assert.match(pageSource, /\/platformlar\/predictivo\//);
  assert.match(pageSource, /\/platformlar\/tag-trace\//);
});
