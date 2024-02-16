import type { ReactNode } from "react";
import useScroll from "@/hooks/useScroll";


interface PreviousWritingRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: PreviousWritingRootProps) {
  const scrolled = useScroll(50);
  const { SignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
      <header
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200  bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        {/*    <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          
            <MenuBarButton />
         

          <Link href="/" className="font-display flex items-center text-2xl">
            <Image
              src="/book.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Redação IA</p>
          </Link>

          <DesktopMenubar />
      

          <div>
            {session ? (
              <Link href="/home">Corrija sua redação</Link>
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Corrija sua redação
              </button>
            )}
          </div>
        </div> */}
      </header>
    </>
  );
}
