import { BottomMenu } from "@/components/app/shared/BottomMenu";

import { AppHeader } from "~/components/app/shared/appHeader";
import { Header } from "~/components/app/shared/appHeader/fragments";

/* import { Header } from "@/components/app/Header";
import { Footer } from "@/components/Footer";
 */
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AuthLayoutProps) {
  //const session = await getServerSession(authOptions);

  return (
    <>
      <AppHeader />
      <main className=" bg-background ">
        <div className="mx-auto  min-h-screen w-full max-w-7xl flex-col items-center justify-center  px-8 py-32">
          {children}
        </div>
      </main>
      <BottomMenu />
    </>
  );
}
