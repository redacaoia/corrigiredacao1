/* import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { Ticket } from "../../../components/Ticket";
import { getUser } from "../../../lib/database";

interface TicketPageProps {
  user: {
    id: string;
    name: string;
    roleOrCompany?: string;
    githubUsername?: string;
    avatarUrl: string;
  };
}

export default function TicketPage({ user }: TicketPageProps) {
  const ogOriginalUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${user.githubUsername}/share`;
  const ogImageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ticket.png?userId=${user.githubUsername}`;
  const ogTitle = `Junte-se à ${
    user.name || user.githubUsername
  } | Maratona Explorer`;
  const ogDescription = `Junte-se a ${
    user.name || user.githubUsername
  } na Maratona Explorer da Rocketseat`;

  return (
    <main className="mx-auto flex max-w-[480px] flex-col items-center gap-24 p-12 lg:h-screen lg:max-w-[1240px] lg:flex-row">
      <Head>
        <title>{ogTitle}</title>

        <meta name="image" content={ogImageUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:src" content={ogImageUrl} />
        <meta name="description" content={ogDescription} />
        <meta property="og:url" content={ogOriginalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={ogTitle} />
        <meta property="og:image:alt" content={ogTitle} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:site" content="@rocketseat" />
        <meta name="twitter:creator" content="@rocketseat" />
        <meta name="twitter:image:alt" content={ogTitle} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <link rel="canonical" href={ogOriginalUrl} />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="max-w-[420px] text-center lg:text-left">
        <Image src="/logo.svg" width={228} height={63} />

        <strong className="mt-4 block text-4xl leading-tight text-neutral-200">
          {ogDescription}
        </strong>

        <a
          href="https://lp.rocketseat.com.br/inscricao/maratona-explorer?utm_source=redes_sociais&utm_medium=ticket&utm_campaign=capture-maratona&utm_term=referral&utm_content=ticket-lead-convite"
          className="bg-brand-500 hover:bg-brand-300 group mt-8 flex w-full items-center justify-center gap-2 rounded px-6 py-4 font-bold text-black"
        >
          PARTICIPAR GRATUITAMENTE
          <img src="/icons/link.svg" alt="" />
        </a>
      </div>

      <Ticket
        name={user.name}
        githubUsername={user.githubUsername}
        roleOrCompany={user.roleOrCompany}
        avatarUrl={user.avatarUrl}
        className="drop-shadow-ticket h-auto w-full flex-1"
      />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = await getUser(String(params.userId));

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
 */