import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const sourceFiles = [
  'src/components/layout/Header.astro',
  'src/components/layout/Footer.astro',
  'src/pages/platformlar/tag-trace.astro',
  'src/pages/platformlar/predictivo.astro',
  'src/pages/cozumler/goruntu-isleme.astro',
  'src/pages/cozumler/asset-yonetimi.astro',
  'src/pages/sektorler/depo-lojistik.astro',
  'src/pages/sektorler/perakende-tekstil.astro',
  'src/pages/sektorler/uretim.astro',
];

const forbiddenPatterns = [
  { pattern: /href="#"/, label: 'empty placeholder href' },
  { pattern: /PARTNER\s*(?:·|&middot;|\u00b7)?\s*0?\d/i, label: 'partner placeholder label' },
  { pattern: /\+902123456789|902123456789/, label: 'placeholder phone number' },
  { pattern: /tel:\+908508850950|0\s*850\s*885\s*09\s*50/, label: 'legacy public phone number' },
  { pattern: /hello@altis\.com\.tr/i, label: 'placeholder email address' },
  { pattern: /wa\.me\/902123456789/i, label: 'placeholder WhatsApp link' },
];

test('premium pages do not expose placeholder links or contact details', () => {
  const violations = [];

  for (const file of sourceFiles) {
    const content = readFileSync(file, 'utf8');
    for (const { pattern, label } of forbiddenPatterns) {
      if (pattern.test(content)) {
        violations.push(`${file}: ${label}`);
      }
    }
  }

  assert.deepEqual(violations, []);
});

test('footer contact details use the current public Altis contact standard', () => {
  const footer = readFileSync('src/components/layout/Footer.astro', 'utf8');

  assert.match(footer, /mailto:info@altis\.com\.tr/);
  assert.match(footer, /tel:\+902164158255/);
  assert.match(footer, /\+90 216 415 82 55/);
  assert.doesNotMatch(footer, /tel:\+908508850950|0 \(850\) 885 09 50|0 850 885 09 50/);
});

test('header mega menu does not point resource items to unfinished root placeholders', () => {
  const header = readFileSync('src/components/layout/Header.astro', 'utf8');

  assert.doesNotMatch(header, /href:\s*'#'/);
  assert.doesNotMatch(header, /label:\s*'Teknik dok[^']+',\s*href:\s*'\/'/);
  assert.doesNotMatch(header, /label:\s*'SSS',\s*href:\s*'\/'/);
});
