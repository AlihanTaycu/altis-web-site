import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const revisionPath = new URL('../docs/presentations/altis-corporate-revision-tr/slide-revision.md', import.meta.url);
const pptxPath = new URL('../docs/presentations/altis-corporate-revision-tr/Altis-Kurumsal-Sunum-Revizyon.pptx', import.meta.url);

async function readRevision() {
  return readFile(revisionPath, 'utf8');
}

test('corporate presentation revision keeps the deck at 24 slides', async () => {
  const revision = await readRevision();
  const slides = revision.match(/^## Slide \d{2}:/gm) ?? [];

  assert.equal(slides.length, 24);
});

test('corporate presentation revision uses current website contact details', async () => {
  const revision = await readRevision();

  assert.match(revision, /info@altis\.com\.tr/);
  assert.match(revision, /\+90 216 415 82 55/);
  assert.match(revision, /Kartal Plaza/);
  assert.match(revision, /www\.altis\.com\.tr/);

  assert.doesNotMatch(revision, /info@altisteknoloji\.com\.tr/);
  assert.doesNotMatch(revision, /\+90\s*\(?212\)?\s*285\s*00\s*00/);
  assert.doesNotMatch(revision, /Ayazağa|Ari 3|Arı 3/i);
  assert.doesNotMatch(revision, /www\.altisteknoloji\.com\.tr/);
});

test('corporate presentation revision softens unsupported performance and SLA claims', async () => {
  const revision = await readRevision();

  assert.doesNotMatch(revision, /%99\.9|%80|%50|%30/);
  assert.doesNotMatch(revision, /7\/24/);
  assert.doesNotMatch(revision, /AES-256|OAuth2/i);
});

test('corporate presentation revision includes required missing content areas', async () => {
  const revision = await readRevision();

  for (const required of [
    'Ürün Portföyü',
    'Sektörel Çözümler',
    'Altis Yaklaşımı',
    'Vuzix',
    'akıllı gözlük',
    'resmi distribütör',
  ]) {
    assert.match(revision, new RegExp(required, 'i'));
  }
});

test('corporate presentation revision expands partner ecosystem from website data', async () => {
  const revision = await readRevision();

  for (const partner of [
    'Zebra',
    'Honeywell',
    'Vuzix',
    'Stanley Healthcare',
    'Banner',
    'Brady',
    'SATO',
    'Datalogic',
    'Nordic ID',
    'Impinj',
    'Alien',
    'Avery Dennison',
    'Confidex',
    'FEIG',
    'SICK',
    'Siemens',
    'Turck',
  ]) {
    assert.match(revision, new RegExp(partner.replace(' ', '\\s+'), 'i'));
  }
});

test('solution slides follow problem approach output framing', async () => {
  const revision = await readRevision();
  const solutionSlides = revision
    .split(/^## Slide \d{2}:/m)
    .filter((slide) => /Problem:|Altis yaklaşımı:|Çıktı:/i.test(slide));

  assert.ok(solutionSlides.length >= 12);
  for (const slide of solutionSlides) {
    assert.match(slide, /Problem:/);
    assert.match(slide, /Altis yaklaşımı:/);
    assert.match(slide, /Çıktı:/);
  }
});

test('PowerPoint export exists with 24 slides and revised contact content', async () => {
  const pptx = await readFile(pptxPath);
  const body = pptx.toString('utf8');

  const slideEntries = [...body.matchAll(/ppt\/slides\/slide\d+\.xml/g)].map(([entry]) => entry);

  assert.equal(new Set(slideEntries).size, 24);
  assert.match(body, /info@altis\.com\.tr/);
  assert.match(body, /\+90 216 415 82 55/);
  assert.match(body, /Kartal Plaza/);
  assert.match(body, /www\.altis\.com\.tr/);
  assert.doesNotMatch(body, /info@altisteknoloji\.com\.tr|www\.altisteknoloji\.com\.tr/);
});
