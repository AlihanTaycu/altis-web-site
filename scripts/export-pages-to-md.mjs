import { mkdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const outputDir = path.join(root, 'docs', 'notebooklm', 'pages-md');
const siteUrl = 'https://www.altis.com.tr';

if (!existsSync(distDir)) {
  throw new Error('dist directory not found. Run npm run build first.');
}

const blockTags = [
  'article',
  'aside',
  'blockquote',
  'br',
  'div',
  'figcaption',
  'figure',
  'footer',
  'form',
  'header',
  'hr',
  'li',
  'main',
  'nav',
  'ol',
  'option',
  'p',
  'section',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'tr',
  'ul',
];

const entityMap = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"',
};

async function listHtmlFiles(dir) {
  const entries = await import('node:fs/promises').then((fs) =>
    fs.readdir(dir, { withFileTypes: true }),
  );
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function decodeEntities(value) {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);/g, (match, entity) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    }
    if (entity.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    }
    return entityMap[entity] ?? match;
  });
}

function getMeta(html, name) {
  const propertyPattern = new RegExp(
    `<meta\\s+[^>]*(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    'i',
  );
  const contentFirstPattern = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["'][^>]*>`,
    'i',
  );
  return decodeEntities(html.match(propertyPattern)?.[1] ?? html.match(contentFirstPattern)?.[1] ?? '');
}

function getTitle(html) {
  return decodeEntities(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? 'Untitled');
}

function routeFromFile(filePath) {
  const relative = path.relative(distDir, filePath).replaceAll(path.sep, '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'/index.html'.length)}/`;
  return `/${relative}`;
}

function filenameFromRoute(route) {
  const normalized = route === '/' ? 'index' : route.replace(/^\/|\/$/g, '').replaceAll('/', '__');
  return `${normalized || 'index'}.md`;
}

function makeHeading(level, text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean ? `\n${'#'.repeat(level)} ${clean}\n` : '\n';
}

function htmlToMarkdown(html) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  let body = mainMatch?.[1] ?? html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;

  body = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<picture\b[\s\S]*?<\/picture>/gi, ' ')
    .replace(/<img\b[^>]*alt=["']([^"']+)["'][^>]*>/gi, '\nImage: $1\n')
    .replace(/<input\b[^>]*placeholder=["']([^"']+)["'][^>]*>/gi, '\n$1\n')
    .replace(/<textarea\b[^>]*placeholder=["']([^"']+)["'][^>]*><\/textarea>/gi, '\n$1\n')
    .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, (_, text) => makeHeading(1, stripTags(text)))
    .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, (_, text) => makeHeading(2, stripTags(text)))
    .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, (_, text) => makeHeading(3, stripTags(text)))
    .replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/gi, (_, text) => makeHeading(4, stripTags(text)))
    .replace(/<h5\b[^>]*>([\s\S]*?)<\/h5>/gi, (_, text) => makeHeading(5, stripTags(text)))
    .replace(/<h6\b[^>]*>([\s\S]*?)<\/h6>/gi, (_, text) => makeHeading(6, stripTags(text)))
    .replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const label = stripTags(text).replace(/\s+/g, ' ').trim();
      return label ? `${label} (${href})` : href;
    });

  const blockPattern = new RegExp(`</?(?:${blockTags.join('|')})\\b[^>]*>`, 'gi');
  body = body.replace(blockPattern, '\n');
  body = stripTags(body);

  return body
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter((line, index, lines) => index === 0 || line !== lines[index - 1])
    .join('\n\n');
}

function stripTags(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, ' '));
}

function documentForPage({ title, description, route, markdown }) {
  const lines = [`# ${title}`, '', `Source URL: ${siteUrl}${route}`];
  if (description) lines.push(`Description: ${description}`);
  lines.push('', markdown);
  return `${lines.join('\n').trim()}\n`;
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const htmlFiles = (await listHtmlFiles(distDir)).sort((a, b) => routeFromFile(a).localeCompare(routeFromFile(b)));
const documents = [];

for (const filePath of htmlFiles) {
  const html = await import('node:fs/promises').then((fs) => fs.readFile(filePath, 'utf8'));
  const route = routeFromFile(filePath);
  const title = getTitle(html);
  const description = getMeta(html, 'description');
  const markdown = htmlToMarkdown(html);
  const document = documentForPage({ title, description, route, markdown });
  const outputPath = path.join(outputDir, filenameFromRoute(route));

  await writeFile(outputPath, document, 'utf8');
  documents.push({ route, title, document });
}

const index = [
  '# Altis Web Pages Markdown Export',
  '',
  `Generated from ${htmlFiles.length} built HTML pages.`,
  '',
  ...documents.map((doc) => `- ${doc.route} - ${doc.title}`),
  '',
].join('\n');

const combined = documents
  .map((doc) => `<!-- ${doc.route} -->\n\n${doc.document}`)
  .join('\n\n---\n\n');

await writeFile(path.join(outputDir, 'README.md'), index, 'utf8');
await writeFile(path.join(outputDir, 'all-pages.md'), combined, 'utf8');

console.log(`Exported ${documents.length} markdown files to ${path.relative(root, outputDir)}`);
