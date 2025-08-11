"use client";

import { ThemeProvider } from "@/components/theme-provider";
import TweetProvider from "@/context/TweetContext";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TweetProvider>{children}</TweetProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
