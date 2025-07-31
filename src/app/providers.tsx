"use client";

import { ThemeProvider } from "@/components/theme-provider";
import TweetProvider from "@/context/TweetContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <TweetProvider>
      {children}
    </TweetProvider>
  </ThemeProvider>
}
