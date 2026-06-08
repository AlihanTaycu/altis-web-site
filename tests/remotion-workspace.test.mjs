import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

async function exists(path) {
  try {
    await access(new URL(path, root));
    return true;
  } catch {
    return false;
  }
}

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, root), 'utf8'));
}

async function readText(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('remotion workspace exposes TrueScan web and social render scripts', async () => {
  const rootPackage = await readJson('package.json');
  assert.equal(rootPackage.scripts['video:studio'], 'npm --prefix remotion run dev');
  assert.equal(rootPackage.scripts['video:render:web'], 'npm --prefix remotion run render:web');
  assert.equal(rootPackage.scripts['video:render:social'], 'npm --prefix remotion run render:social');

  const remotionPackage = await readJson('remotion/package.json');
  assert.equal(remotionPackage.scripts.dev, 'remotion studio');
  assert.match(remotionPackage.scripts['render:web'], /TrueScanWebLoop/);
  assert.match(remotionPackage.scripts['render:social'], /TrueScanSocialPortrait/);
  assert.match(remotionPackage.dependencies.remotion, /^\^4\./);
  assert.match(remotionPackage.dependencies['@remotion/cli'], /^\^4\./);
});

test('remotion workspace registers TrueScan compositions using existing site assets', async () => {
  assert.equal(await exists('public/images/truescan/truescan-marketing.png'), true);
  assert.equal(await exists('remotion/public/images/truescan/truescan-marketing.png'), true);
  assert.equal(await exists('remotion/src/Root.tsx'), true);

  const rootSource = await readText('remotion/src/Root.tsx');
  assert.match(rootSource, /id="TrueScanWebLoop"/);
  assert.match(rootSource, /component=\{TrueScanAmbientLoop\}/);
  assert.match(rootSource, /width=\{1280\}/);
  assert.match(rootSource, /height=\{720\}/);
  assert.match(rootSource, /id="TrueScanSocialPortrait"/);
  assert.match(rootSource, /component=\{TrueScanSocialSpotlight\}/);
  assert.match(rootSource, /width=\{1080\}/);
  assert.match(rootSource, /height=\{1920\}/);
  assert.match(rootSource, /images\/truescan\/truescan-marketing\.png/);

  const ambientSource = await readText('remotion/src/TrueScanAmbientLoop.tsx');
  assert.match(ambientSource, /staticFile\(assetPath\)/);
  assert.doesNotMatch(ambientSource, /Kirli kodlarda net okuma/);
  assert.doesNotMatch(ambientSource, /Endustriyel kamera/);
  assert.doesNotMatch(ambientSource, /Altis Teknoloji/);

  const socialSource = await readText('remotion/src/TrueScanSocialSpotlight.tsx');
  assert.match(socialSource, /Zorlu yuzeylerde guvenilir okuma/);
  assert.match(socialSource, /Barkod, QR ve DPM kodlari/);
});
