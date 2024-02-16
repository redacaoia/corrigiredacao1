"use client";

import Link from "next/link";

import { useUser } from "@supabase/auth-helpers-react";

import { useSignInModal } from "./signInModal";


export function BottomLogin() {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  const user = useUser();

  return (
    <>
      <SignInModal />
      <div>
        {user ? (
          <Link
            className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
            href="/home"
          >
            Corrija sua redação
          </Link>
        ) : (
          <button
            className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
            onClick={() => setShowSignInModal(true)}
          >
            Corrija sua redação
          </button>
        )}
      </div>
    </>
  );
}
