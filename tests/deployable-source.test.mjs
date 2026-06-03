import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const englishProductCopySource = await readFile(
  new URL('../src/data/english-product-copy.ts', import.meta.url),
  'utf8',
);

test('english product copy is deployable from repository sources', () => {
  assert.doesNotMatch(englishProductCopySource, /Altis Gate Products/);
});
