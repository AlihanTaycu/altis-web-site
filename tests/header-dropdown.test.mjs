import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const headerSource = await readFile(new URL('../src/components/layout/Header.astro', import.meta.url), 'utf8');

test('desktop header defines dropdown groups for platform, solution, and sector navigation', () => {
  const requiredContent = [
    'children:',
    'Tag&Trace',
    'Predictivo',
    'Pick-to-Light',
    'Asset Yönetimi',
    'Depo & Lojistik',
    'Perakende & Tekstil',
    'Üretim',
    "'has-dropdown': link.children",
    'dropdown-menu',
    'aria-haspopup=',
  ];

  for (const content of requiredContent) {
    assert.match(headerSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('mobile header renders grouped navigation children as nested links', () => {
  const requiredContent = [
    'mobile-link-group',
    'mobile-sub-link',
    'link.children',
  ];

  for (const content of requiredContent) {
    assert.match(headerSource, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});
