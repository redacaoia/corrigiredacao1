import React from "react";
import { Header } from "~/components/marketing/shared/header";

/* import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/marketing/Header";
 */
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  /* const res = await fetch("https://api.github.com/repos/tierrun/tier-vercel-openai", {
    method: "GET",
    next: { revalidate: 60 },
  });
  const data = await res.json();

  const stargazers_count: number = data.stargazers_count; */

  /* console.log(data); */
  //const session = await getServerSession(authOptions);
  return (
    <>
       <Header /* session={session} */ />
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br  from-indigo-50 via-white to-cyan-100 py-32">
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
}
