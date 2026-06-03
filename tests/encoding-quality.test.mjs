import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const roots = ['src', 'docs'];
const textExtensions = new Set(['.astro', '.css', '.js', '.mjs', '.ts', '.md', '.json']);
const mojibakePatterns = [
  /Ã/,
  /Â/,
  /â€[œ€�˜™“”–—¢]/,
  /ï¿½/,
  /\uFFFD/,
];

function extensionOf(file) {
  const match = file.match(/\.[^.]+$/);
  return match ? match[0] : '';
}

function collectTextFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectTextFiles(path));
      continue;
    }

    if (entry.isFile() && textExtensions.has(extensionOf(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

test('source and docs do not contain mojibake sequences', () => {
  const offenders = [];
  const scannedFiles = [];

  for (const root of roots) {
    assert.equal(statSync(root).isDirectory(), true);

    for (const file of collectTextFiles(root)) {
      scannedFiles.push(file);
      const text = readFileSync(file, 'utf8');
      const lines = text.split(/\r?\n/);

      lines.forEach((line, index) => {
        if (mojibakePatterns.some(pattern => pattern.test(line))) {
          offenders.push(`${file}:${index + 1}: ${line.trim()}`);
        }
      });
    }
  }

  assert.ok(scannedFiles.length > 0, 'expected to scan source and documentation files');
  assert.deepEqual(offenders, []);
});
