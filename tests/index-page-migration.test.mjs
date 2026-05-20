import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const indexSource = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

test('home page has the migrated landing content instead of the stub', () => {
  const requiredContent = [
    'Tag&Trace',
    'Predictivo',
    'Pick-to-Light',
    'Asset Tag & Trace',
    'Rox Card',
    'Teknoloji &amp; Mimari',
    'Demo Talep Et',
  ];

  for (const content of requiredContent) {
    assert.match(indexSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(indexSource, /Ana sayfa i[cç]eri/);
});

test('home page uses clean Astro routes and removes dev-only scripts', () => {
  const forbiddenContent = [
    'tagtrace.html',
    'predictivo.html',
    'pick-to-light.html',
    'asset-tag-and-trace.html',
    'tweaks-panel',
    'babel.min.js',
    'react.production',
    'react-dom.production',
  ];

  for (const content of forbiddenContent) {
    assert.doesNotMatch(indexSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.match(indexSource, /\/platformlar\/tag-trace\//);
  assert.match(indexSource, /\/platformlar\/predictivo\//);
  assert.match(indexSource, /\/cozumler\/pick-to-light\//);
  assert.match(indexSource, /\/cozumler\/asset-yonetimi\//);
});
