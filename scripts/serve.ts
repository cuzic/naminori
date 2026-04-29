import { join } from 'node:path';
import { existsSync } from 'node:fs';

const DIST = join(import.meta.dir, '..', 'dist');
const PORT = 3456;

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const filePath = join(DIST, pathname);

    if (!existsSync(filePath)) {
      return new Response('Not found', { status: 404 });
    }

    const ext = pathname.slice(pathname.lastIndexOf('.')) as string;
    const contentType = MIME[ext] || 'application/octet-stream';
    return new Response(Bun.file(filePath), {
      headers: { 'Content-Type': contentType },
    });
  },
});

console.log(`Naminori dev server: http://localhost:${server.port}`);
