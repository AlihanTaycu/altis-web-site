// Büyük PNG görselleri WebP'ye dönüştürür (boyut/performans için)
// Çalıştır: node scripts/optimize-images.mjs
//
// Hedef: 1.6-2.1 MB'lik marketing/ürün PNG'leri. Max 1600px genişlik,
// WebP quality 80. Orijinal .png yanına .webp yazılır. Referanslar
// kaynak kodda elle .webp'ye güncellenmiştir; eski PNG'ler sonra silinir.

import sharp from 'sharp';
import { stat, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Optimize edilecek kaynak görseller. Kaynak .png silinmiş (zaten .webp'ye
// çevrilmiş) olanlar otomatik atlanır — script idempotent çalışır.
// NOT: truescan-marketing.png Remotion video kaynağı olduğu için silinmez;
// burada webp'si web poster için yeniden üretilir.
const targets = [
  'public/images/truescan/truescan-marketing.png',
  'public/images/sectors/perakende-marketing.png',
  'public/images/sectors/uretim-marketing.png',
  'public/images/pick-to-light/p2l-marketing.png',
  'public/images/vuzix/vuzix-marketing.png',
  'public/assets/products/r-widetunnel/main.png',
  'public/assets/products/r-visiondeskomni/main.png',
  'public/assets/products/r-visiondeskmini/main.png',
  'public/assets/products/r-overheadr/main.png',
  'public/assets/products/r-inbasketreader/main.png',
  'public/assets/products/r-basketreader/main.png',
  'public/assets/products/r-shieldedbox/main.png',
  'public/assets/products/r-boxtunnel/main.png',
  'public/assets/products/r-aerotunnel/main.png',
  'public/assets/products/r-minitunnel/main.png',
  'public/assets/products/r-protunnel/main.png',
];

const fileExists = (p) => access(p).then(() => true).catch(() => false);

const kb = (b) => (b / 1024).toFixed(0) + ' KB';
let beforeTotal = 0;
let afterTotal = 0;

for (const rel of targets) {
  const src = join(root, rel);
  const out = src.replace(/\.png$/i, '.webp');

  if (!(await fileExists(src))) {
    console.log(`– atlandı (kaynak yok, zaten webp): ${rel}`);
    continue;
  }

  const before = (await stat(src)).size;

  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);

  const after = (await stat(out)).size;
  beforeTotal += before;
  afterTotal += after;
  const saved = (100 - (after / before) * 100).toFixed(0);
  console.log(`✓ ${rel}\n    ${kb(before)} → ${kb(after)}  (-%${saved})`);
}

console.log(
  `\nToplam: ${kb(beforeTotal)} → ${kb(afterTotal)}  ` +
  `(-%${(100 - (afterTotal / beforeTotal) * 100).toFixed(0)})`
);
