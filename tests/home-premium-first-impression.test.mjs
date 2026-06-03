import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const page = readFileSync('src/pages/index.astro', 'utf8');

test('home hero uses a concise premium positioning statement', () => {
  assert.match(page, /Saha verisini kurumsal karar sistemlerine ba[gğ]layan teknoloji ekibi/i);
  assert.match(page, /RFID, IoT ve end[uü]striyel yaz[iı]l[iı]m/i);
  assert.doesNotMatch(page, /Altis Teknoloji; RFID, Auto-ID, IoT, RTLS ve end[uü]striyel yaz[iı]l[iı]m [^<]{180,}/i);
});

test('home first flow frames Altis around three operational focus areas', () => {
  assert.match(page, /class="focus-strip"/);
  assert.match(page, /İzlenebilirlik/);
  assert.match(page, /Operasyonel zek[aâ]/);
  assert.match(page, /Saha entegrasyonu/);
  assert.match(page, /data-reveal data-reveal-delay="80"/);
});
