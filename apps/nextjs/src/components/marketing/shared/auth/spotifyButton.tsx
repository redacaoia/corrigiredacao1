"use client";

import type { ElementType } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { FcGoogle } from "react-icons/fc";

import LoadingDots from "../icons/loadingDots";

type Props = {
  type?: "signin" | "signup";
  provider: any;
  icon: ElementType;
};

export const ButtonSignIn: React.FC<Props> = ({
  type,
  provider,
  icon: Icon,
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  const { supabaseClient } = useSessionContext();

  const handleSignIn = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: provider,
    });
  };

  return (
    <Button
      disabled={signInClicked}
      className={`${
        signInClicked
          ? "cursor-not-allowed border-gray-200 bg-gray-100"
          : "border border-gray-200 bg-white text-black hover:bg-gray-50"
      } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
      type="button"
      onClick={() => {
        handleSignIn;
        setSignInClicked(true);
      }}
    >
      {signInClicked ? (
        <LoadingDots color="#808080" />
      ) : (
        <>
          <div className="flex gap-2">
            <Icon className="w-4" />
            <p>
              {type === "signup"
                ? `Criar com ${provider}`
                : `Entrar com ${provider}`}
            </p>
          </div>
        </>
      )}
    </Button>
  );
};
