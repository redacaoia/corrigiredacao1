import { NextRequest } from "next/server";
import { SAMPLE_TICKET_NUMBER, SITE_URL } from "@/lib/constants";
import { getUserByUsername } from "@/lib/getUserByUsername";
import screenshot from "@/lib/screenshot";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } },
) {
  let url: string;
  let name: string | null | undefined;
  //let ticketNumber: number | null | undefined = SAMPLE_TICKET_NUMBER;

  const searchParams = request.nextUrl.searchParams;
  const ticketNumber  = searchParams.get("ticketNumber");

  // query is "hello" for /api/search?query=hello

  const { userId } = params || {};

  if (userId) {
    const userIdString = userId.toString();

   /*  const user = await getUserByUsername(userIdString);

    name = user.name;
 */
    url = `${SITE_URL}/stories-page/${encodeURIComponent(
      userIdString,
    )}/${encodeURIComponent(ticketNumber ?? "")}`;

    const file = await screenshot(url);

    return new Response(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, no-transform,",
      },
      status: 200,
    });
  } else {
    return new Response("Not Found", {
      status: 404,
    });
  }
}
