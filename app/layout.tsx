import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import Header from "@/components/Header";
import { Ripple } from "@/components/ui/ripple";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
// import { ScreenSize } from "@/components/ScreenSize";
export const metadata: Metadata = {
  title: "Nhat.dev BLOG",
  description:
    "Bienvenue sur mon blog ! Retrouvez des articles sur mon évolution pour devenir développeur. Je partagerai mes ressentis, mes difficultés, mes stacks et autres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="max-w-6xl mx-auto ">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Ripple className="hidden md:block " />
            <Header />
            {children}
            {/* <ScreenSize /> */}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
