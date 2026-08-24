import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const workerDir = resolve('dist/_worker.js');
const serverDir = resolve('dist/server');
const publicDir = resolve('public');
const clientDir = resolve('dist/client');

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

if (!existsSync(resolve(serverDir, 'index.js'))) {
  throw new Error('Sites entrypoint was not created at dist/server/index.js');
}
