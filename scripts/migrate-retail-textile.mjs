import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/sektor-perakende-tekstil.html', import.meta.url);
const targetPath = new URL('../src/pages/sektorler/perakende-tekstil.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in sektor-perakende-tekstil.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find retail textile content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="altis-landing\.html#contact"/g, 'href="/iletisim/"'],
  [/href="altis-landing\.html#platforms"/g, 'href="/platformlar/tag-trace/"'],
  [/href="altis-landing\.html#solutions"/g, 'href="/cozumler/"'],
  [/href="altis-landing\.html#industries"/g, 'href="/sektorler/perakende-tekstil/"'],
  [/href="altis-landing\.html#technology"/g, 'href="/#technology"'],
  [/href="altis-landing\.html#about"/g, 'href="/hakkimizda/"'],
  [/href="altis-landing\.html"/g, 'href="/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/href="pick-to-light\.html"/g, 'href="/cozumler/pick-to-light/"'],
  [/href="asset-tag-and-trace\.html"/g, 'href="/cozumler/asset-yonetimi/"'],
  [/href="sektor-depo-lojistik\.html"/g, 'href="/sektorler/depo-lojistik/"'],
  [/href="sektor-uretim\.html"/g, 'href="/sektorler/uretim/"'],
  [/src="assets\/altis-logo\.png"/g, 'src="/assets/altis-logo.png"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

content = content.replace(/\{\{([^}]+)}}/g, '&#123;&#123;$1&#125;&#125;');

const schema = `const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Perakende ve Tekstil RFID Çözümleri",
  "provider": { "@type": "Organization", "name": "Altis Teknoloji" },
  "serviceType": "Retail and textile RFID automation",
  "areaServed": "TR",
  "description": "Perakende, tekstil ve mağaza operasyonları için RFID, envanter doğruluğu, mağaza sayımı ve omnichannel görünürlük çözümleri"
};`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Perakende ve Tekstil için RFID Çözümleri | Altis Teknoloji"
  description="Perakende ve tekstil operasyonları için RFID etiket üretimi, tünel/kutu okuma, mağaza sayımı, stok doğruluğu ve sezon devir optimizasyonu çözümleri."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/sectors/retail-textile/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/sektorler/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
