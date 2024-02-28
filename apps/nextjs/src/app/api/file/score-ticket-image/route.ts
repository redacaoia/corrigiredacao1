import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  //const buffer = await readFile(path.join(process.cwd(), 'src/app/assets', 'image.png'));
  const buffer = await readFile(path.join(process.cwd(), '/src/assets', 'book.png'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="image.png"');
  headers.append('Content-Type', 'image/png');

  return new Response(buffer, {
    headers,
  });
}