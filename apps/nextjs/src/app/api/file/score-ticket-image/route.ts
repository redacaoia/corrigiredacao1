import { readFile } from 'fs/promises';
import path from 'path';

/* export async function GET() {
  //const buffer = await readFile(path.join(process.cwd(), 'src/app/assets', 'image.png'));
  const buffer = await readFile(path.join(process.cwd(), '/src/assets', 'book.png'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="image.png"');
  headers.append('Content-Type', 'image/png');

  return new Response(buffer, {
    headers,
  });
}
 */
interface GetParams  {
  params: {
    filename: string;
  };
};

// export an async GET function. This is a convention in NextJS
export async function GET(req: Request, { params }: GetParams) {
  // filename for the file that the user is trying to download
  const filename = params.filename;

  // external file URL
  const DUMMY_URL =
    "https://ticket-generate-score.vercel.app/api/dynamic-image?username=vercel";

  // use fetch to get a response
  const response = await fetch(DUMMY_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="ggg"`,
    },
  });
}
