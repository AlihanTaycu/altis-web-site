import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/sektor-depo-lojistik.html', import.meta.url);
const targetPath = new URL('../src/pages/sektorler/depo-lojistik.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in sektor-depo-lojistik.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find warehouse logistics content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="altis-landing\.html#contact"/g, 'href="/iletisim/"'],
  [/href="altis-landing\.html#platforms"/g, 'href="/platformlar/tag-trace/"'],
  [/href="altis-landing\.html#solutions"/g, 'href="/cozumler/"'],
  [/href="altis-landing\.html#industries"/g, 'href="/sektorler/depo-lojistik/"'],
  [/href="altis-landing\.html#technology"/g, 'href="/#technology"'],
  [/href="altis-landing\.html#about"/g, 'href="/hakkimizda/"'],
  [/href="altis-landing\.html"/g, 'href="/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/src="assets\/altis-logo\.png"/g, 'src="/assets/altis-logo.png"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

content = content.replace(/\{\{([^}]+)}}/g, '&#123;&#123;$1&#125;&#125;');

const schema = `const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Depo ve Lojistik RFID Çözümleri",
  "provider": { "@type": "Organization", "name": "Altis Teknoloji" },
  "serviceType": "Warehouse and logistics automation",
  "areaServed": "TR",
  "description": "RFID, Auto-ID, WMS entegrasyonu, depo görünürlüğü ve lojistik operasyon optimizasyonu çözümleri"
};`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Depo ve Lojistik için RFID Çözümleri | Altis Teknoloji"
  description="Depo ve lojistik operasyonları için RFID kapı geçişleri, palet doğrulama, hızlı sayım, WMS entegrasyonu ve canlı operasyon dashboard çözümleri."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/sectors/warehouse-logistics/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/sektorler/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
