import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const page = readFileSync('src/pages/cozumler/goruntu-isleme.astro', 'utf8');

test('TrueScan accuracy claims are framed with pilot context', () => {
  assert.match(page, /pilot ko[^<"]*ullar[^<"]*nda|pilot kapsam/i);
  assert.match(page, /saha ko[^<"]*ullar[^<"]*na g[^<"]*re de[^<"]*i[^<"]*ebilir/i);
  assert.doesNotMatch(page, /%99\.5 do[^<"]*rulukla 2D\/QR\/barkod okuyan/i);
  assert.doesNotMatch(page, /%99\.5 do[^<"]*rulukla okuma sa[^<"]*lar/i);
});

test('TrueScan case study copy avoids absolute or over-claiming language', () => {
  const riskyPhrases = [
    /tamamen k[oö]rle[sş]ti/i,
    /Mevcut donan[ıi]mlar durdu/i,
    /insan g[oö]z[uü]n[uü]n bile/i,
    /Manuel veri giri[sş]i ihtiyac[ıi] ortadan kalkt[ıi]/i,
    /<div class="cs-v">0<\/div>\s*<div class="cs-l">Manuel m[uü]dahale<\/div>/i,
    /<div class="v">S[ıi]f[ıi]r<\/div>\s*<div class="l">ek donan[ıi]m yat[ıi]r[ıi]m[ıi]<\/div>/i,
  ];

  for (const pattern of riskyPhrases) {
    assert.doesNotMatch(page, pattern);
  }
});
