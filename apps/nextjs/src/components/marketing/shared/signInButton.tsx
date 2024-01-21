"use client";

import { signIn } from "next-auth/react";

import { Button } from "~/components/ui/button";

export function SignInButton({ className }: { className: string }) {
  async function handleGithub() {
    //signIn("google", { callbackUrl: "/home" });
    console.log("");
  }

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
      <Button
        type="button"
        variant="outline"
        className={className}
        onClick={() => {
          handleGithub();
        }}
      >
        Login
      </Button>
    </div>
  );
} /*  */
