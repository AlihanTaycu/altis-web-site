import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(rootDir, 'docs/presentations/altis-corporate-revision-tr/slide-revision.md');
const outputPath = path.join(rootDir, 'docs/presentations/altis-corporate-revision-tr/Altis-Kurumsal-Sunum-Revizyon.pptx');

const SLIDE_W = 12192000;
const SLIDE_H = 6858000;
const COLORS = {
  navy: '101827',
  blue: '1C4E80',
  cyan: '22B8CF',
  orange: 'F59E0B',
  white: 'FFFFFF',
  ink: '172033',
  muted: '5E6B7C',
  pale: 'EEF6F8',
  line: 'D7E3EA',
};

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c >>> 0;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const day = (date.getFullYear() - 1980) << 9 | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, day };
}

function makeZip(files) {
  const chunks = [];
  const central = [];
  let offset = 0;
  const { time, day } = dosDateTime();

  for (const [name, data] of files) {
    const nameBuffer = Buffer.from(name, 'utf8');
    const content = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
    const crc = crc32(content);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(day, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(content.length, 18);
    local.writeUInt32LE(content.length, 22);
    local.writeUInt16LE(nameBuffer.length, 26);
    local.writeUInt16LE(0, 28);
    chunks.push(local, nameBuffer, content);

    const dir = Buffer.alloc(46);
    dir.writeUInt32LE(0x02014b50, 0);
    dir.writeUInt16LE(20, 4);
    dir.writeUInt16LE(20, 6);
    dir.writeUInt16LE(0x0800, 8);
    dir.writeUInt16LE(0, 10);
    dir.writeUInt16LE(time, 12);
    dir.writeUInt16LE(day, 14);
    dir.writeUInt32LE(crc, 16);
    dir.writeUInt32LE(content.length, 20);
    dir.writeUInt32LE(content.length, 24);
    dir.writeUInt16LE(nameBuffer.length, 28);
    dir.writeUInt16LE(0, 30);
    dir.writeUInt16LE(0, 32);
    dir.writeUInt16LE(0, 34);
    dir.writeUInt16LE(0, 36);
    dir.writeUInt32LE(0, 38);
    dir.writeUInt32LE(offset, 42);
    central.push(dir, nameBuffer);

    offset += local.length + nameBuffer.length + content.length;
  }

  const centralSize = central.reduce((sum, part) => sum + part.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...chunks, ...central, end]);
}

function xml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function parseSlides(markdown) {
  const matches = [...markdown.matchAll(/^## Slide (\d{2}): (.+)$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.indexOf('\n## Canva Uygulama Notları');
    const body = markdown.slice(start, end > -1 ? end : undefined).trim();
    const lines = body.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const titleLine = lines.find((line) => line.startsWith('Başlık: '));
    const title = titleLine ? titleLine.replace('Başlık: ', '') : match[2];
    const content = lines.filter((line) => !line.startsWith('Başlık: '));
    return { number: Number(match[1]), sectionTitle: match[2], title, content };
  });
}

function textRuns(text, size = 2200, color = COLORS.ink, bold = false) {
  return `<a:r><a:rPr lang="tr-TR" sz="${size}"${bold ? ' b="1"' : ''}><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:latin typeface="Aptos"/></a:rPr><a:t>${xml(text)}</a:t></a:r>`;
}

function paragraph(text, opts = {}) {
  const size = opts.size ?? 2200;
  const color = opts.color ?? COLORS.ink;
  const bold = opts.bold ?? false;
  const align = opts.align ? ` algn="${opts.align}"` : '';
  return `<a:p><a:pPr${align}/>${textRuns(text, size, color, bold)}</a:p>`;
}

function shape(id, name, x, y, w, h, fill, line = fill, radius = 'roundRect') {
  return `<p:sp><p:nvSpPr><p:cNvPr id="${id}" name="${xml(name)}"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${w}" cy="${h}"/></a:xfrm><a:prstGeom prst="${radius}"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="${fill}"/></a:solidFill><a:ln w="12700"><a:solidFill><a:srgbClr val="${line}"/></a:solidFill></a:ln></p:spPr><p:txBody><a:bodyPr/><a:lstStyle/><a:p/></p:txBody></p:sp>`;
}

function textBox(id, name, x, y, w, h, paragraphs, fill = null, line = null) {
  const fillXml = fill ? `<a:solidFill><a:srgbClr val="${fill}"/></a:solidFill>` : '<a:noFill/>';
  const lineXml = line ? `<a:ln w="12700"><a:solidFill><a:srgbClr val="${line}"/></a:solidFill></a:ln>` : '<a:ln><a:noFill/></a:ln>';
  return `<p:sp><p:nvSpPr><p:cNvPr id="${id}" name="${xml(name)}"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${w}" cy="${h}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom>${fillXml}${lineXml}</p:spPr><p:txBody><a:bodyPr wrap="square" lIns="91440" tIns="68580" rIns="91440" bIns="68580"><a:spAutoFit/></a:bodyPr><a:lstStyle/>${paragraphs.join('')}</p:txBody></p:sp>`;
}

function splitLabel(line) {
  const match = line.match(/^([^:]{2,48}):\s+(.+)$/);
  if (!match) return null;
  return { label: match[1], text: match[2] };
}

function slideLines(slide) {
  return slide.content
    .filter((line) => !line.startsWith('Not: '))
    .filter((line) => !line.startsWith('Kaynak Canva'))
    .map((line) => line.replace(/^Gövde:\s+/, '').replace(/^Destek metni:\s+/, '').trim());
}

function makeCover(slide) {
  const subtitle = slide.content.find((line) => line.startsWith('Alt başlık: '))?.replace('Alt başlık: ', '') ?? '';
  const support = slide.content.find((line) => line.startsWith('Destek metni: '))?.replace('Destek metni: ', '') ?? '';
  return [
    shape(2, 'Hero background', 0, 0, SLIDE_W, SLIDE_H, COLORS.navy, COLORS.navy, 'rect'),
    shape(3, 'Accent bar', 0, 0, 228600, SLIDE_H, COLORS.cyan, COLORS.cyan, 'rect'),
    shape(4, 'Orange accent', 10058400, 0, 1600200, 6858000, COLORS.orange, COLORS.orange, 'rect'),
    textBox(5, 'Brand', 914400, 914400, 7772400, 1371600, [paragraph('Altis', { size: 6000, color: COLORS.white, bold: true }), paragraph('Teknoloji', { size: 6000, color: COLORS.white, bold: true })]),
    textBox(6, 'Subtitle', 914400, 3154680, 7315200, 914400, [paragraph(subtitle, { size: 2500, color: COLORS.white })]),
    textBox(7, 'Support', 914400, 5029200, 3657600, 609600, [paragraph(support, { size: 2100, color: COLORS.cyan, bold: true })]),
  ];
}

function makeContact(slide) {
  const lines = slideLines(slide);
  const paragraphs = lines.map((line) => {
    const item = splitLabel(line);
    return item ? paragraph(`${item.label}: ${item.text}`, { size: 2050, color: COLORS.ink, bold: /Adres|Telefon|Web/.test(item.label) }) : paragraph(line, { size: 2050 });
  });
  return [
    shape(2, 'Background', 0, 0, SLIDE_W, SLIDE_H, COLORS.navy, COLORS.navy, 'rect'),
    textBox(3, 'Title', 762000, 685800, 5334000, 762000, [paragraph(slide.title, { size: 4200, color: COLORS.white, bold: true })]),
    textBox(4, 'Contact content', 762000, 1836420, 9144000, 3352800, paragraphs, COLORS.white, COLORS.white),
    textBox(5, 'Web', 762000, 5715000, 6400800, 609600, [paragraph('www.altis.com.tr', { size: 2500, color: COLORS.cyan, bold: true })]),
  ];
}

function makeDefault(slide) {
  const lines = slideLines(slide);
  const fields = lines.map(splitLabel).filter(Boolean);
  const hasTriplet = fields.some((field) => field.label === 'Problem') &&
    fields.some((field) => field.label === 'Altis yaklaşımı') &&
    fields.some((field) => field.label === 'Çıktı');
  const shapes = [
    shape(2, 'Background', 0, 0, SLIDE_W, SLIDE_H, COLORS.white, COLORS.white, 'rect'),
    shape(3, 'Header band', 0, 0, SLIDE_W, 762000, COLORS.navy, COLORS.navy, 'rect'),
    textBox(4, 'Slide number', 762000, 152400, 914400, 457200, [paragraph(String(slide.number).padStart(2, '0'), { size: 2100, color: COLORS.cyan, bold: true, align: 'ctr' })]),
    textBox(5, 'Header title', 1752600, 152400, 7924800, 457200, [paragraph(slide.sectionTitle, { size: 2100, color: COLORS.white, bold: true })]),
    textBox(6, 'Title', 762000, 990600, 9906000, 762000, [paragraph(slide.title, { size: slide.title.length > 42 ? 3200 : 3800, color: COLORS.navy, bold: true })]),
  ];

  if (hasTriplet) {
    const cardData = ['Problem', 'Altis yaklaşımı', 'Çıktı'].map((label) => fields.find((field) => field.label === label));
    cardData.forEach((field, index) => {
      const x = 762000 + index * 3810000;
      shapes.push(shape(10 + index, `${field.label} card`, x, 2057400, 3429000, 3048000, index === 1 ? COLORS.pale : 'F8FBFC', COLORS.line));
      shapes.push(textBox(20 + index, `${field.label} text`, x + 76200, 2133600, 3276600, 2895600, [
        paragraph(field.label, { size: 1850, color: index === 1 ? COLORS.blue : COLORS.orange, bold: true }),
        paragraph(field.text, { size: field.text.length > 190 ? 1700 : 1850, color: COLORS.ink }),
      ]));
    });
    const extra = lines.filter((line) => !['Problem', 'Altis yaklaşımı', 'Çıktı'].includes(splitLabel(line)?.label ?? ''));
    if (extra.length > 0) {
      shapes.push(textBox(30, 'Extra notes', 914400, 5486400, 10058400, 609600, extra.slice(0, 2).map((line) => paragraph(line, { size: 1450, color: COLORS.muted }))));
    }
    return shapes;
  }

  const paragraphs = lines.slice(0, 9).map((line) => {
    const item = splitLabel(line);
    if (item) return paragraph(`${item.label}: ${item.text}`, { size: item.text.length > 160 ? 1650 : 1850, color: COLORS.ink, bold: /^\d{4}|^\d{2}|^[A-ZÇĞİÖŞÜ ]+$/.test(item.label) });
    return paragraph(line, { size: line.length > 150 ? 1650 : 1850, color: COLORS.ink });
  });

  shapes.push(shape(7, 'Content card', 762000, 2057400, 10668000, 3810000, COLORS.pale, COLORS.line));
  shapes.push(textBox(8, 'Content', 990600, 2217420, 10134600, 3429000, paragraphs));
  return shapes;
}

function slideXml(slide) {
  const shapes = slide.number === 1 ? makeCover(slide) : slide.number === 24 ? makeContact(slide) : makeDefault(slide);
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${SLIDE_W}" cy="${SLIDE_H}"/><a:chOff x="0" y="0"/><a:chExt cx="${SLIDE_W}" cy="${SLIDE_H}"/></a:xfrm></p:grpSpPr>${shapes.join('')}</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>`;
}

function relsXml(slideCount) {
  const slideRels = Array.from({ length: slideCount }, (_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${slideRels}<Relationship Id="rId${slideCount + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/><Relationship Id="rId${slideCount + 2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/></Relationships>`;
}

function presentationXml(slideCount) {
  const slideIds = Array.from({ length: slideCount }, (_, i) => `<p:sldId id="${256 + i}" r:id="rId${i + 1}"/>`).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId${slideCount + 1}"/></p:sldMasterIdLst><p:sldIdLst>${slideIds}</p:sldIdLst><p:sldSz cx="${SLIDE_W}" cy="${SLIDE_H}" type="wide"/><p:notesSz cx="6858000" cy="9144000"/></p:presentation>`;
}

function contentTypes(slideCount) {
  const slideOverrides = Array.from({ length: slideCount }, (_, i) => `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/><Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/><Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/><Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>${slideOverrides}</Types>`;
}

function staticFiles(slideCount) {
  return [
    ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>'],
    ['docProps/core.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>Altis Kurumsal Sunum Revizyon</dc:title><dc:creator>Altis Teknoloji</dc:creator><cp:lastModifiedBy>Codex</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:modified></cp:coreProperties>`],
    ['docProps/app.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Altis Web</Application><PresentationFormat>On-screen Show (16:9)</PresentationFormat><Slides>${slideCount}</Slides></Properties>`],
    ['ppt/presentation.xml', presentationXml(slideCount)],
    ['ppt/_rels/presentation.xml.rels', relsXml(slideCount)],
    ['ppt/slideMasters/slideMaster1.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${SLIDE_W}" cy="${SLIDE_H}"/><a:chOff x="0" y="0"/><a:chExt cx="${SLIDE_W}" cy="${SLIDE_H}"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld><p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst><p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles></p:sldMaster>`],
    ['ppt/slideMasters/_rels/slideMaster1.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/></Relationships>'],
    ['ppt/slideLayouts/slideLayout1.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank" preserve="1"><p:cSld name="Blank"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${SLIDE_W}" cy="${SLIDE_H}"/><a:chOff x="0" y="0"/><a:chExt cx="${SLIDE_W}" cy="${SLIDE_H}"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>`],
    ['ppt/slideLayouts/_rels/slideLayout1.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/></Relationships>'],
    ['ppt/theme/theme1.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Altis"><a:themeElements><a:clrScheme name="Altis"><a:dk1><a:srgbClr val="101827"/></a:dk1><a:lt1><a:srgbClr val="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="172033"/></a:dk2><a:lt2><a:srgbClr val="EEF6F8"/></a:lt2><a:accent1><a:srgbClr val="22B8CF"/></a:accent1><a:accent2><a:srgbClr val="F59E0B"/></a:accent2><a:accent3><a:srgbClr val="1C4E80"/></a:accent3><a:accent4><a:srgbClr val="5E6B7C"/></a:accent4><a:accent5><a:srgbClr val="D7E3EA"/></a:accent5><a:accent6><a:srgbClr val="101827"/></a:accent6><a:hlink><a:srgbClr val="1C4E80"/></a:hlink><a:folHlink><a:srgbClr val="5E6B7C"/></a:folHlink></a:clrScheme><a:fontScheme name="Aptos"><a:majorFont><a:latin typeface="Aptos Display"/></a:majorFont><a:minorFont><a:latin typeface="Aptos"/></a:minorFont></a:fontScheme><a:fmtScheme name="Altis"><a:fillStyleLst/><a:lnStyleLst/><a:effectStyleLst/><a:bgFillStyleLst/></a:fmtScheme></a:themeElements></a:theme>'],
  ];
}

async function main() {
  const markdown = await readFile(sourcePath, 'utf8');
  const slides = parseSlides(markdown);
  if (slides.length !== 24) throw new Error(`Expected 24 slides, found ${slides.length}`);

  const files = [
    ['[Content_Types].xml', contentTypes(slides.length)],
    ...staticFiles(slides.length),
  ];

  slides.forEach((slide, index) => {
    files.push([`ppt/slides/slide${index + 1}.xml`, slideXml(slide)]);
    files.push([`ppt/slides/_rels/slide${index + 1}.xml.rels`, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/></Relationships>']);
  });

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, makeZip(files));
  console.log(`Generated ${path.relative(rootDir, outputPath)} (${slides.length} slides)`);
}

await main();
