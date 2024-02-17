"use client";

import type { Provider } from "@supabase/supabase-js";
import type { ElementType } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { IconBaseProps, IconType } from "react-icons/lib";

import LoadingDots from "../../icons/loadingDots";

type Props = {
  type?: "signin" | "signup";
  provider: Provider;
  icon: IconType | ElementType;
  color?: string;
};

export const SignInButton: React.FC<Props> = ({
  type,
  provider,
  icon: Icon,
  color,
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  const { supabaseClient } = useSessionContext();

  const handleSignIn = async () => {
    let options = {};

    // Verifica se o provedor é 'google' e adiciona as opções específicas
    if (provider === "google") {
      options = {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      };
    }

    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: provider,
      options: options,
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
            <Icon color={color} className="w-4" />
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