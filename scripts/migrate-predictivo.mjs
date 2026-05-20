import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/predictivo.html', import.meta.url);
const targetPath = new URL('../src/pages/platformlar/predictivo.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in predictivo.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find Predictivo content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="altis-landing\.html#contact"/g, 'href="/iletisim/"'],
  [/href="altis-landing\.html#platforms"/g, 'href="/platformlar/predictivo/"'],
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
  "@type": "SoftwareApplication",
  "name": "Predictivo",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "IoT ve operasyon verilerini karar destek sistemine dönüştüren endüstriyel IoT platformu",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" }
};`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Predictivo - Industrial IoT ve Operational Intelligence Platformu | Altis Teknoloji"
  description="Predictivo; sensör, makine, sayaç, beacon, SCADA ve operasyon verilerini dashboard, alarm, rapor ve kural motoruyla karar destek sistemine dönüştürür."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/platforms/predictivo/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/platformlar/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
