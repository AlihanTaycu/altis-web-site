import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const headerSource = await readFile(new URL('../src/components/layout/Header.astro', import.meta.url), 'utf8');

// Legacy test file retained for compatibility — assertions migrated to mega menu structure.
test('header still surfaces the core navigation labels used across the site', () => {
  const requiredLabels = [
    'Platformlar',
    'Çözümler',
    'Sektörler',
    'Ürünler',
    'Kaynaklar',
    'Tag&Trace',
    'Predictivo',
    'Pick-to-Light',
    'Asset Yönetimi',
    'Depo & Lojistik',
    'Perakende & Tekstil',
    'Üretim',
  ];

  for (const label of requiredLabels) {
    assert.ok(
      headerSource.includes(label),
      `Header should include navigation label "${label}"`,
    );
  }
});

test('mobile header still renders grouped navigation children as nested links', () => {
  const requiredContent = [
    'mobile-link-group',
    'mobile-sub-link',
    'mobile-sub-links',
  ];

  for (const content of requiredContent) {
    assert.match(headerSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});
