import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../../Altis WEB 2/altis-landing.html', import.meta.url);
const targetPath = new URL('../src/pages/index.astro', import.meta.url);

const source = await readFile(sourcePath, 'utf8');
const current = await readFile(targetPath, 'utf8');

const frontmatterMatch = current.match(/^---[\s\S]*?---/);
if (!frontmatterMatch) {
  throw new Error('Could not find frontmatter in src/pages/index.astro');
}

const frontmatter = frontmatterMatch[0];
const baseOpen = `<Base
  title="Altis Teknoloji - Saha Verisini Akilli Operasyonlara Donusturuyoruz"
  description="Altis Teknoloji; RFID, Auto-ID, IoT, RTLS ve endustriyel yazilim cozumleriyle depo, uretim, lojistik ve varlik yonetimi sureclerinizi dijitallestirir. Tag&Trace ve Predictivo platformlari ile fark yaratin."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/"
>`;

const styleBlocks = [...source.matchAll(/<style>[\s\S]*?<\/style>/g)]
  .map(match => match[0])
  .join('\n\n');

const headerEnd = source.indexOf('</header>');
const footerStart = source.indexOf('<!-- ============== Footer ==============');
if (headerEnd === -1 || footerStart === -1) {
  throw new Error('Could not find landing content boundaries');
}

let content = source.slice(headerEnd + '</header>'.length, footerStart).trim();

const replacements = [
  [/href="#contact"/g, 'href="/iletisim/"'],
  [/href="#platforms"/g, 'href="/platformlar/tag-trace/"'],
  [/href="tagtrace\.html"/g, 'href="/platformlar/tag-trace/"'],
  [/href="predictivo\.html"/g, 'href="/platformlar/predictivo/"'],
  [/href="pick-to-light\.html"/g, 'href="/cozumler/pick-to-light/"'],
  [/href="asset-tag-and-trace\.html"/g, 'href="/cozumler/asset-yonetimi/"'],
  [/href="asset-tag-and-trace\.html#pricing"/g, 'href="/cozumler/asset-yonetimi/#pricing"'],
  [/href="#about"/g, 'href="/hakkimizda/"'],
  [/href="#solutions"/g, 'href="/cozumler/"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

const output = `${frontmatter}

${baseOpen}
${content}
</Base>

${styleBlocks}
`;

await writeFile(targetPath, output, 'utf8');
