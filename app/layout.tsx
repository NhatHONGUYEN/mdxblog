import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import { Ripple } from "@/components/ui/ripple";
import Footer from "@/components/Footer";
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
    <html lang="en">
      <body className="max-w-6xl mx-auto ">
        <Ripple />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
