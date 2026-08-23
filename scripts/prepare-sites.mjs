import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const workerDir = resolve('dist/_worker.js');
const serverDir = resolve('dist/server');

if (!existsSync(workerDir)) {
  throw new Error('Expected Astro Cloudflare output at dist/_worker.js');
}

if (existsSync(serverDir)) rmSync(serverDir, { recursive: true, force: true });
cpSync(workerDir, serverDir, { recursive: true });

if (!existsSync(resolve(serverDir, 'index.js'))) {
  throw new Error('Sites entrypoint was not created at dist/server/index.js');
}
