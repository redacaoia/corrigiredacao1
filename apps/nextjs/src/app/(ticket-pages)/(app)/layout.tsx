import { BottomMenu } from "@/components/app/shared/BottomMenu";
import { Header } from "@/components/app/shared/Header";

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
      <Header.Root>
        <div className="flex items-center gap-4">
          <Header.Avatar /* session={session} */ />
          <Header.Content name="Walyson Moura" />
        </div>
        <Header.Notifications />
      </Header.Root>

      <main className=" bg-background ">
        <div className="mx-auto  min-h-screen w-full max-w-7xl flex-col items-center justify-center  px-8 py-32">
          {children}
        </div>
      </main>
      <BottomMenu />
    </>
  );
}
