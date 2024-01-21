"use client";

import { Button } from "~/components/ui/button";

/* 
import { signIn } from "next-auth/react";
 */

export function SignUpButton({ className }: { className: string }) {
  async function handleGithub() {
    //signIn("google", { callbackUrl: "/home" });
    console.log("");
  }

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
      <Button
        type="button"
        variant="default"
        className={className}
        onClick={() => {
          handleGithub();
        }}
      >
        Sign up with Google
      </Button>
    </div>
  );
}
