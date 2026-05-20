import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/sektor-uretim.html', import.meta.url);
const targetPath = new URL('../src/pages/sektorler/uretim.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in sektor-uretim.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find manufacturing content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="altis-landing\.html#contact"/g, 'href="/iletisim/"'],
  [/href="altis-landing\.html#platforms"/g, 'href="/platformlar/predictivo/"'],
  [/href="altis-landing\.html#solutions"/g, 'href="/cozumler/"'],
  [/href="altis-landing\.html#industries"/g, 'href="/sektorler/uretim/"'],
  [/href="altis-landing\.html#technology"/g, 'href="/#technology"'],
  [/href="altis-landing\.html#about"/g, 'href="/hakkimizda/"'],
  [/href="altis-landing\.html"/g, 'href="/"'],
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/href="pick-to-light\.html"/g, 'href="/cozumler/pick-to-light/"'],
  [/href="asset-tag-and-trace\.html"/g, 'href="/cozumler/asset-yonetimi/"'],
  [/href="sektor-depo-lojistik\.html"/g, 'href="/sektorler/depo-lojistik/"'],
  [/src="assets\/altis-logo\.png"/g, 'src="/assets/altis-logo.png"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

content = content.replace('href="#">\n        <div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7 12 3 4 7v10l8 4 8-4z"/></svg></div>\n        <span>Perakende &amp; Tekstil</span>', 'href="/sektorler/perakende-tekstil/">\n        <div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7 12 3 4 7v10l8 4 8-4z"/></svg></div>\n        <span>Perakende &amp; Tekstil</span>');
content = content.replace(/\{\{([^}]+)}}/g, '&#123;&#123;$1&#125;&#125;');

const schema = `const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Üretim IoT ve Operasyonel Zekâ Çözümleri",
  "provider": { "@type": "Organization", "name": "Altis Teknoloji" },
  "serviceType": "Manufacturing IoT and operational intelligence",
  "areaServed": "TR",
  "description": "Üretim tesisleri için OEE, kestirimci bakım, enerji izleme, üretim izlenebilirliği, SCADA, MES ve ERP entegrasyonu çözümleri"
};`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Üretim için IoT ve Operasyonel Zekâ Çözümleri | Altis Teknoloji"
  description="Üretim tesisleri için canlı OEE, kestirimci bakım, enerji izleme, üretim izlenebilirliği, SCADA/MES/ERP entegrasyonu ve operasyonel zekâ çözümleri."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/sectors/manufacturing/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/sektorler/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
