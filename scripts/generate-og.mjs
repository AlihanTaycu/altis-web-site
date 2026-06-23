// Altis Teknoloji — Open Graph paylaşım görseli üretici
// Çalıştır: node scripts/generate-og.mjs
// Çıktı: public/assets/og/altis-default.jpg (1200x630)
//
// Sosyal paylaşımlarda (WhatsApp, LinkedIn, X, Facebook) link önizlemesinde
// görünen görseldir. Marka renkleri: navy #00125C, cyan #18B7D6.

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'assets', 'og');
const outFile = join(outDir, 'altis-default.jpg');

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00125C"/>
      <stop offset="55%" stop-color="#031A6E"/>
      <stop offset="100%" stop-color="#0A2A8C"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="18%" r="55%">
      <stop offset="0%" stop-color="#18B7D6" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#18B7D6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- ince üst çizgi -->
  <rect x="80" y="120" width="64" height="6" rx="3" fill="#18B7D6"/>

  <!-- wordmark -->
  <text x="80" y="300" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="118" font-weight="800" fill="#FFFFFF" letter-spacing="-2">altis<tspan fill="#18B7D6">.</tspan></text>
  <text x="80" y="300" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="118" font-weight="800" fill="#FFFFFF" letter-spacing="-2" opacity="0"> </text>

  <!-- teknoloji + tagline -->
  <text x="84" y="372" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="46" font-weight="600" fill="#C7D2FE" letter-spacing="8">TEKNOLOJİ</text>

  <!-- alt açıklama -->
  <text x="80" y="480" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="34" font-weight="500" fill="#E5EAF7">RFID · IoT · Akıllı Teknoloji Çözümleri</text>

  <!-- alt domain -->
  <text x="80" y="552" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="26" font-weight="500" fill="#7C8BC4">www.altis.com.tr</text>
</svg>`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toFile(outFile);

const meta = await sharp(outFile).metadata();
console.log(`✓ OG görseli üretildi: ${outFile}`);
console.log(`  ${meta.width}x${meta.height}, ${meta.format}`);
