import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const workerDir = resolve('dist/_worker.js');
const serverDir = resolve('dist/server');
const publicDir = resolve('public');
const clientDir = resolve('dist/client');
const astroAssetsDir = resolve('dist/_astro');
const clientAstroAssetsDir = resolve('dist/client/_astro');

if (!existsSync(workerDir)) {
  throw new Error('Expected Astro Cloudflare output at dist/_worker.js');
}

if (existsSync(serverDir)) rmSync(serverDir, { recursive: true, force: true });
cpSync(workerDir, serverDir, { recursive: true });

if (existsSync(publicDir)) {
  cpSync(publicDir, clientDir, { recursive: true });

  for (const entry of readdirSync(publicDir)) {
    const rootAsset = resolve('dist', entry);
    if (existsSync(rootAsset)) rmSync(rootAsset, { recursive: true, force: true });
  }
}

// The Cloudflare adapter emits Vite's browser bundle beside the worker, while
// Sites serves static files from dist/client. Keep the generated module in the
// client payload so the accordion and galleries can initialize in production.
if (existsSync(astroAssetsDir)) {
  if (existsSync(clientAstroAssetsDir)) rmSync(clientAstroAssetsDir, { recursive: true, force: true });
  cpSync(astroAssetsDir, clientAstroAssetsDir, { recursive: true });
}

if (!existsSync(resolve(serverDir, 'index.js'))) {
  throw new Error('Sites entrypoint was not created at dist/server/index.js');
}
