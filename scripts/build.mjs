import { cp, mkdir, rm } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const publicFiles = ['index.html', 'styles.css', 'script.js', 'assets', 'robots.txt', 'sitemap.xml'];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of publicFiles) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}

console.log('Static website built in dist/');
