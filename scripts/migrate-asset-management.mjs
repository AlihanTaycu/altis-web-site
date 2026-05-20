import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/asset-tag-and-trace.html', import.meta.url);
const targetPath = new URL('../src/pages/cozumler/asset-yonetimi.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in asset-tag-and-trace.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find Asset Tag & Trace content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="altis-landing\.html#contact"/g, 'href="/iletisim/"'],
  [/href="altis-landing\.html#platforms"/g, 'href="/cozumler/asset-yonetimi/"'],
  [/href="altis-landing\.html#solutions"/g, 'href="/cozumler/"'],
  [/href="altis-landing\.html#industries"/g, 'href="/sektorler/depo-lojistik/"'],
  [/href="altis-landing\.html#technology"/g, 'href="/#technology"'],
  [/href="altis-landing\.html#about"/g, 'href="/hakkimizda/"'],
  [/href="altis-landing\.html"/g, 'href="/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/href="pick-to-light\.html"/g, 'href="/cozumler/pick-to-light/"'],
  [/href="asset-tag-and-trace\.html"/g, 'href="/cozumler/asset-yonetimi/"'],
  [/src="assets\/altis-logo\.png"/g, 'src="/assets/altis-logo.png"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

content = content.replace(/\{\{([^}]+)}}/g, '&#123;&#123;$1&#125;&#125;');

const schema = `const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Asset Tag & Trace",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Barkod, QR, NFC ve RFID destekli bulut tabanlı demirbaş ve varlık yönetim sistemi",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD",
    "description": "İlk 30 gün ücretsiz, yıllık başlangıç paketi"
  }
};`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Asset Tag & Trace - Demirbaş Yönetim Sistemi | Altis Teknoloji"
  description="Asset Tag & Trace; barkod, QR, NFC ve RFID ile çalışan, iOS, Android ve web üzerinden kullanılabilen bulut tabanlı demirbaş yönetim sistemidir."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/solutions/asset-management/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/cozumler/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
