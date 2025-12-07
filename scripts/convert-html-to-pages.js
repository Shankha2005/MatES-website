#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const glob = require('glob');

const srcRoot = process.argv[2] ? path.resolve(process.argv[2]) : null;
if (!srcRoot) {
  console.error('Usage: node scripts/convert-html-to-pages.js <source-root>');
  process.exit(1);
}

function htmlToJsx(html) {
  // Minimal transform: wrap body content in JSX and fix class -> className
  let body = html;
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) body = bodyMatch[1];
  // Strip inline scripts which break JSX; these should be re-implemented in useEffect as needed
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  // Convert HTML comments to JSX comments
  body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  // Normalize internal asset URLs to start with '/'
  // Handles: img/foo.png, ./img/foo.png, ../img/foo.png and same for css/js/images
  body = body.replace(/(src|href)=["'](?:\.?\/+)?(img|images|css|js)\/([^"']+)["']/gi,
    (_m, attr, dir, rest) => `${attr}="/${dir}/${rest}"`);
  // Fix inline style url(...) paths to absolute
  body = body.replace(/url\((['"]?)(?:\.?\/+)?(img|images)\/([^\)'"]+)\1\)/gi, (_m, q, dir, rest) => `url(${q}/${dir}/${rest}${q})`);
  // Fix common internal page links to Next routes
  body = body.replace(/href=["']index\.html#([^"']+)["']/gi, (_m, anchor) => `href="/#${anchor}"`);
  body = body.replace(/href=["']index\.html["']/gi, 'href="/"');
  body = body.replace(/href=["']gallery\.html["']/gi, 'href="/gallery"');
  body = body.replace(/href=["']team\.html["']/gi, 'href="/team"');
  // Fix JSX attribute casing differences
  body = body.replace(/\bframeborder\b/gi, 'frameBorder');
  body = body.replace(/\ballowfullscreen\b/gi, 'allowFullScreen');
  body = body.replace(/\sautoplay(=(["'][^"']*["']))?/gi, ' autoPlay');
  body = body.replace(/\splaysinline(=(["'][^"']*["']))?/gi, ' playsInline');
  body = body.replace(/\scolspan=/gi, ' colSpan=');
  body = body.replace(/\srowspan=/gi, ' rowSpan=');
  // Convert inline style attributes to React style objects
  const camelCase = (prop) => prop.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const toStyleObj = (cssText) => {
    const decls = cssText.split(';').map(s => s.trim()).filter(Boolean);
    const entries = [];
    for (const d of decls) {
      const idx = d.indexOf(':');
      if (idx === -1) continue;
      const key = camelCase(d.slice(0, idx));
      let val = d.slice(idx + 1).trim().replace(/!important/g, '').trim();
      val = val.replace(/"/g, '\\"');
      entries.push(`${key}: "${val}"`);
    }
    return `{{ ${entries.join(', ')} }}`;
  };
  // double-quoted style
  body = body.replace(/style\s*=\s*"([^"]*)"/gi, (_, css) => `style=${toStyleObj(css)}`);
  // single-quoted style
  body = body.replace(/style\s*=\s*'([^']*)'/gi, (_, css) => `style=${toStyleObj(css)}`);
  return body
    .replace(/\sclass=/g, ' className=')
    .replace(/\sfor=/g, ' htmlFor=');
}

(async () => {
  const htmlFiles = glob.sync('**/*.html', { cwd: srcRoot, nodir: true, ignore: ['node_modules/**'] });
  if (!htmlFiles.length) {
    console.warn('No HTML files found to convert.');
    process.exit(0);
  }
  const appDir = path.resolve(process.cwd(), 'app');
  await fse.ensureDir(appDir);

  for (const rel of htmlFiles) {
    const abs = path.join(srcRoot, rel);
    const html = fs.readFileSync(abs, 'utf8');
    const jsx = htmlToJsx(html);

    // route path
    let routePath = rel.replace(/index\.html$/i, '').replace(/\.html$/i, '');
    routePath = routePath.replace(/\\/g, '/');
    const segments = routePath.split('/').filter(Boolean);

    let destDir;
    if (segments.length === 0) {
      destDir = appDir;
    } else {
      destDir = path.join(appDir, ...segments);
    }
    const destFile = path.join(destDir, 'page.js');
    await fse.ensureDir(destDir);

    const component = `export const metadata = { title: 'Mates' }\n\nexport default function Page() {\n  return (\n    <main>\n${jsx.split('\n').map(l => '      ' + l).join('\n')}\n    </main>\n  )\n}\n`;

    fs.writeFileSync(destFile, component, 'utf8');
    console.log(`Converted ${rel} -> ${path.relative(process.cwd(), destFile)}`);
  }

  console.log('HTML conversion completed.');
})();
