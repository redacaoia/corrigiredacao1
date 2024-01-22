//import Error from "next/error";
import React from "react";
/* 
import { ShareScore } from "~/components/app/shareScore";
import Ticket from "~/components/app/ticket";
import Page from "~/components/app/ticket/page";
//import { SkipNavContent } from "@reach/skip-nav";
import { META_DESCRIPTION, SITE_NAME, SITE_URL } from "~/lib/constants";
 */
//import { getUserByUsername } from "~/lib/getUserByUsername";

/* 
interface Props {
  params: {
    username: string | null;
    usernameFromParams: string | null;
    name: string | null;
    ticketNumber: number | null;
  };
} */

interface Props {
  params: {
    userId: string;
  };
}

export default async function TicketShare({ params }: Props) {
  /*   const username = params?.username?.toString();
  let name: string | null | undefined;
  let ticketNumber: number | null | undefined;

  if (username) {
    const user = await getUserByUsername(username);
    name = user.name ?? user.username;
    ticketNumber = user.ticketNumber;
  }

  if (!ticketNumber) {
    return <Error statusCode={404} />;
  } */
  /* 
  const meta = username
    ? {
        title: `${name}’s ${SITE_NAME} Ticket`,
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${username}`,
        url: `${SITE_URL}/tickets/${username}`,
      }
    : {
        title: "Ticket Demo - Virtual Event Starter Kit",
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${username}`,
        url: `${SITE_URL}/tickets/${username}`,
      }; */
/*   const username = params?.userId?.toString();
  const user = await getUserByUsername(username);
  const name = user.name ?? user.username;
  const ticketNumber = user.ticketNumber;
 */
  return (
    <>
      {/*  <SkipNavContent /> */}
      <h1>Olá Mundo</h1>
    </>
  );
}
