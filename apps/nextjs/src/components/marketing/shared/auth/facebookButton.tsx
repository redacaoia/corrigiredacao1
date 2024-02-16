import { useSessionContext } from "@supabase/auth-helpers-react";
import { FaFacebook } from "react-icons/fa";

type Props = {
  type?: "signin" | "signup";
  setSignInClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FacebookButton: React.FC<Props> = ({ type, setSignInClicked }) => {
  const { supabaseClient } = useSessionContext();

  const handleFacebookSignUp = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "facebook",
    });
  };

  return (
    <button
      className="border-1 flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      type="button"
      onClick={() => {
        setSignInClicked(true);
        handleFacebookSignUp;
      }}
    >
      <div className="flex gap-2">
        <FaFacebook color="#006AFF" className="h-7 w-7" />
        {type === "signup" ? "Criar com Facebook" : "Login com Facebook"}
      </div>
    </button>
  );
};
