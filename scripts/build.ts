import { readdir, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');

async function loadContexts(): Promise<Record<string, unknown>> {
  const ctxDir = join(SRC, 'contexts');
  const files = (await readdir(ctxDir))
    .filter(f => f.endsWith('.ts') && !f.startsWith('_'));

  const contexts: Record<string, unknown> = {};
  for (const file of files) {
    const mod = await import(join(ctxDir, file));
    const ctx = mod.default;
    if (ctx?.id) contexts[ctx.id] = ctx;
  }
  // Sort by sortOrder
  return Object.fromEntries(
    Object.entries(contexts).sort(
      ([, a]: [string, any], [, b]: [string, any]) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99)
    )
  );
}

async function build() {
  await mkdir(DIST, { recursive: true });

  const [data, contexts, template] = await Promise.all([
    Bun.file(join(SRC, 'data.json')).json(),
    loadContexts(),
    Bun.file(join(ROOT, 'index.html')).text(),
  ]);

  const injection = `<script>
window.__DATA__ = ${JSON.stringify(data)};
window.__CONTEXTS__ = ${JSON.stringify(contexts)};
</script>`;

  const html = template.replace('</head>', `${injection}\n</head>`);
  await Bun.write(join(DIST, 'index.html'), html);
  console.log(`Built: dist/index.html (${contexts ? Object.keys(contexts).length : 0} contexts)`);
}

build().catch(e => { console.error(e); process.exit(1); });
