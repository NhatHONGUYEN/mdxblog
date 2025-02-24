import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Header from "@/components/Header";
import { Ripple } from "@/components/ui/ripple";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";

// import { ScreenSize } from "@/components/ScreenSize";

export const metadata: Metadata = {
  title: "Nhat.dev BLOG",
  description:
    "Bienvenue sur mon blog ! Retrouvez des articles sur mon évolution pour devenir développeur. Je partagerai mes ressentis, mes difficultés, mes stacks et autres.",
  icons: {
    icon: "/404-page-not-found.svg",
  },
  openGraph: {
    title: "Nhat.dev BLOG",
    description:
      "Bienvenue sur mon blog ! Retrouvez des articles sur mon évolution pour devenir développeur. Je partagerai mes ressentis, mes difficultés, mes stacks et autres.",
    url: "https://nhathnblog.vercel.app/",
    siteName: "Nhat.dev BLOG",
    images: [
      {
        url: "https://nhathnblog.vercel.app/cartoon-smoke-with-kid.jpg",
        width: 1200,
        height: 630,
        alt: "Nhat.dev BLOG - Bienvenue sur mon blog !.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhat.dev BLOG",
    description:
      "Bienvenue sur mon blog ! Retrouvez des articles sur mon évolution pour devenir développeur. Je partagerai mes ressentis, mes difficultés, mes stacks et autres.",
    images: [
      {
        url: "https://nhathnblog.vercel.app/cartoon-smoke-with-kid.jpg",
        alt: "Nhat.dev BLOG - Bienvenue sur mon blog !.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className="max-w-6xl mx-auto ">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
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
