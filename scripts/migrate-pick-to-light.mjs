import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/pick-to-light.html', import.meta.url);
const targetPath = new URL('../src/pages/cozumler/pick-to-light.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');

const styleMatch = source.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  throw new Error('Could not find style block in pick-to-light.html');
}

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- Footer -->');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find Pick-to-Light content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="altis-landing\.html#contact"/g, 'href="/iletisim/"'],
  [/href="altis-landing\.html#platforms"/g, 'href="/cozumler/pick-to-light/"'],
  [/href="altis-landing\.html#solutions"/g, 'href="/cozumler/"'],
  [/href="altis-landing\.html#industries"/g, 'href="/sektorler/depo-lojistik/"'],
  [/href="altis-landing\.html#technology"/g, 'href="/#technology"'],
  [/href="altis-landing\.html#about"/g, 'href="/hakkimizda/"'],
  [/href="altis-landing\.html"/g, 'href="/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/href="pick-to-light\.html"/g, 'href="/cozumler/pick-to-light/"'],
  [/src="assets\/altis-logo\.png"/g, 'src="/assets/altis-logo.png"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

content = content.replace(/\{\{([^}]+)}}/g, '&#123;&#123;$1&#125;&#125;');

const schema = `const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pick-to-Light",
    "brand": { "@type": "Brand", "name": "Altis Teknoloji" },
    "description": "Işıklı toplama, put-to-light ve cluster picking operasyonları için P2Cloud tabanlı saha çözümü"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pick-to-Light Sistem Kurulumu",
    "provider": { "@type": "Organization", "name": "Altis Teknoloji" },
    "serviceType": "Warehouse automation",
    "description": "Depo toplama operasyonları için Pick-to-Light donanım, yazılım ve entegrasyon hizmeti"
  }
];`;

const output = `---
import Base from '../../layouts/Base.astro';

${schema}
---

<Base
  title="Pick-to-Light - Işıklı Toplama Sistemleri | Altis Teknoloji"
  description="Pick-to-Light; ışıklı modüller, P2Cloud Framework ve WMS/ERP entegrasyonu ile depo toplama hızını ve doğruluğunu artıran Altis çözümüdür."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/solutions/pick-to-light/"
>
${content}
</Base>

${styleMatch[0]}
`;

await mkdir(new URL('../src/pages/cozumler/', import.meta.url), { recursive: true });
await writeFile(targetPath, output, 'utf8');
