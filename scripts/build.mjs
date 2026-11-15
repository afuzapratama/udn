import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { errorPages, renderErrorPage } from './error-pages.mjs';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const publicFiles = ['index.html', 'styles.css', 'script.js', 'assets', 'robots.txt', 'sitemap.xml'];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of publicFiles) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}

const [logo, css, script] = await Promise.all([
  readFile(new URL('assets/udn.svg', root), 'utf8'),
  readFile(new URL('errors/styles.css', root), 'utf8'),
  readFile(new URL('errors/script.js', root), 'utf8'),
]);
for (const code of Object.keys(errorPages)) {
  await writeFile(new URL(`${code}.html`, output), renderErrorPage(code, { logo, css, script }));
}

console.log('Static website built in dist/');
