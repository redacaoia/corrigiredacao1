"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@supabase/auth-helpers-react";

import useScroll from "~/hooks/useScroll";
import { MenuBarButton } from "../marketingHeader/fragments/menuBarButton";
import { useSignInModal } from "../marketingHeader/fragments/signInModal";
import { DesktopMenubar } from "./desktopMenubar";

export function Header(/* { session }: { session: Session | null } */) {
  // const user = useUser();

  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const session = false;

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
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <div className="flex items-center md:hidden">
            <MenuBarButton />
          </div>

          <Link
            href="/"
            className="font-display hidden items-center text-2xl md:flex"
          >
            <Image
              src="/book.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Redação IA</p>
          </Link>

          <div className="hidden md:flex md:items-center">
            <DesktopMenubar />
          </div>

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
        </div>
      </header>
    </>
  );
}
