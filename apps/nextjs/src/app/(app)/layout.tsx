import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BottomMenu } from "@/components/app/shared/BottomMenu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { AppHeader } from "~/components/app/shared/appHeader";
import { Toaster } from "@/components/ui/toaster";

//import { Typebot } from "~/components/app/shared/typebot";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AuthLayoutProps) {
  //const session = await getServerSession(authOptions);
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session},
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
   // redirect("/");
  }

  return (
    <>
      <AppHeader />
      <main className="  bg-background">
        <div className="mx-auto  min-h-screen w-full max-w-7xl flex-col items-center justify-center  px-8 py-32">
          {children}
        </div>
      </main>
      <Toaster />
      {/*  <Typebot /> */}
      <BottomMenu />
    </>
  );
}
