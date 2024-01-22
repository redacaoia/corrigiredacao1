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
// https://vigilant-space-winner-5ggjp7jxwg9g3vj76-3000.app.github.dev/api/1?ticketNumber=990
  const searchParams = request.nextUrl.searchParams;
  const ticketNumber = searchParams.get("ticketNumber");


 
    

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

    return new Response(file);
  } else {
    return new Response("Not Found", {
      status: 404,
    });
  }
}
