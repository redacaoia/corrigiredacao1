import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@acme/ui";
//import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import { Toaster } from "@acme/ui/toast";

//import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

export const metadata: Metadata = {
  /*   metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ), */
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
    </html>
  );
}
