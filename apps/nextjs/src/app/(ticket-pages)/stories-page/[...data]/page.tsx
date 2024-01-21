import React from "react";

interface Props {
  params: {
    data: string[];
  };
}

export default function TicketOnlyPage({ params }: Props) {
  const [userId, ticketNumberScore] = params.data;

  //  const { query } = useRouter();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-sm rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Hello, Instagram!</h1>
        <h1>{userId}</h1>
        <h2>{ticketNumberScore}</h2>
        <p className="text-gray-600">This is my awesome story content.</p>
      </div>
    </div>
    /*  <TicketStoriesImage
      size={1700 / 650}
      userId={userId ? userId.toString() : undefined}
      ticketNumberScore={parseInt(ticketNumberScore.toString(), 10)}
      name={
        query.name
          ? query.name?.toString()
          : query.username
            ? query.username.toString()
            : undefined
      }
    /> */
  );
}
