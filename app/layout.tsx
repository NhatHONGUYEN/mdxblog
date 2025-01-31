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
  openGraph: {
    title: "Nhat.dev BLOG",
    description:
      "Bienvenue sur mon blog ! Retrouvez des articles sur mon évolution pour devenir développeur. Je partagerai mes ressentis, mes difficultés, mes stacks et autres.",
    url: "https://nhathnblog.vercel.app/", // Remplacez par l'URL de votre blog
    siteName: "Nhat.dev BLOG",
    images: [
      {
        url: `https://res.cloudinary.com/nhatflux/image/upload/c_crop,g_auto,h_800,w_800/idii5lwwpxknebuusbqe`, // Remplacez par l'URL de votre image Open Graph
        width: 1200,
        height: 800,
        alt: "Nhat.dev BLOG",
      },
    ],
    type: "website",
  },
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
