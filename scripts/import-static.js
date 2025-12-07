#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const srcRoot = process.argv[2] ? path.resolve(process.argv[2]) : null;
if (!srcRoot) {
  console.error('Usage: node scripts/import-static.js <source-root>');
  process.exit(1);
}

const candidates = ['public', 'assets', 'static', 'img', 'images', 'css', 'styles', 'js', 'scripts'];
const destPublic = path.resolve(process.cwd(), 'public');

(async () => {
  const exists = (p) => fs.existsSync(p);
  await fse.ensureDir(destPublic);

  for (const name of candidates) {
    const srcPath = path.join(srcRoot, name);
    if (exists(srcPath)) {
      const target = path.join(destPublic, name);
      console.log(`Copying ${srcPath} -> ${target}`);
      await fse.ensureDir(path.dirname(target));
      await fse.copy(srcPath, target, { overwrite: true, filter: (src) => !/\.html?$/i.test(src) });
    }
  }

  // Also copy top-level assets if present
  const topFiles = (fs.readdirSync(srcRoot, { withFileTypes: true }) || []).filter(d => d.isFile());
  for (const f of topFiles) {
    if (/\.(png|jpe?g|gif|svg|webp|ico|css|js|woff2?|ttf|eot|mp4|webm|pdf)$/i.test(f.name)) {
      await fse.copy(path.join(srcRoot, f.name), path.join(destPublic, f.name));
    }
  }

  console.log('Static import completed.');
})();
