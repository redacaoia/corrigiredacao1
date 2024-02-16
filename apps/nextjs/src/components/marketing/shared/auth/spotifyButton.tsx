import { useSessionContext } from "@supabase/auth-helpers-react";
import { FcGoogle } from "react-icons/fc";

type Props = {
  type?: "signin" | "signup";
};

export const GoogleButton: React.FC<Props> = ({ type }) => {
  const { supabaseClient } = useSessionContext();

  const handleGoogleSignUp = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "spotify",
    });
  };

  return (
    <button
      className="border-1 flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      type="button"
      onClick={handleGoogleSignUp}
    >
      <div className="flex gap-2">
        <FcGoogle className="w-4" />
        {type === "signup" ? "Criar com Google" : "Login com Google"}
      </div>
    </button>
  );
};
