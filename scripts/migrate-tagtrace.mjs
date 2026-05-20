import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/tagtrace.html', import.meta.url);
const targetPath = new URL('../src/pages/platformlar/tag-trace.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in tagtrace.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find Tag&Trace content boundaries');
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
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/src="assets\/altis-logo\.png"/g, 'src="/assets/altis-logo.png"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

content = content.replace(/\{\{([^}]+)}}/g, '&#123;&#123;$1&#125;&#125;');

const schema = `const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tag&Trace",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "RFID ve Auto-ID operasyonlarını tek merkezden yöneten orkestrasyon platformu",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" }
};`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Tag&Trace - RFID ve Auto-ID Orkestrasyon Platformu | Altis Teknoloji"
  description="Tag&Trace; RFID okuyucular, yazıcılar, barkod sistemleri, PLC'ler, sensörler ve kurumsal sistemler arasında çalışan Auto-ID orkestrasyon platformudur."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/platforms/tag-trace/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/platformlar/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
