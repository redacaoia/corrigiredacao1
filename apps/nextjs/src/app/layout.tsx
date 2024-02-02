import "~/app/globals.css";

import type { Metadata, Viewport } from "next";
/* import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
 */
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@acme/ui";
//import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import { Toaster } from "@acme/ui/toast";

//import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  /*   metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ), */
  metadataBase: new URL("https://corrigiredacao.vercel.app"),
  title: "Redação IA - Corrigir Redação",
  description: "Redação IA - Corrigir Redação",
  openGraph: {
    title: "Redação IA - Corrigir Redação",
    description: "Redação IA - Corrigir Redação",
    url: "https://corrigiredacao.vercel.app",
    siteName: "Redação IA - Corrigir Redação",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RedacaoIA",
    creator: "@RedacaoIA",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/*   <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      > */}

      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        {/*  <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <TRPCReactProvider>{props.children}</TRPCReactProvider>
        {/*  <div className="fixed bottom-4 right-12">
            <ThemeToggle />
          </div> */}
        <Toaster />
        {/*   </ThemeProvider> */}
      </body>
      {/*   </ClerkProvider>  */}
    </html>
  );
}
