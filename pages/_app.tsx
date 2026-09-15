import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { Lora, Schibsted_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/shadcn/ui/toaster";

// Lora replaces Newsreader — Newsreader's small-size optical cut read too
// tight/unclear (see git history). Lora has no optical-size axis at all, so
// there's no risk of the same size-dependent tightening, and it's designed
// specifically for legibility as on-screen text, not just display headings.
const newsreader = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-newsreader",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

// Routes that render full-screen, without the site's Navbar/Footer chrome.
const BARE_ROUTES = ["/studio"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isBare = BARE_ROUTES.some((route) => router.pathname.startsWith(route));

  return (
    <div
      className={`${newsreader.variable} ${schibstedGrotesk.variable} font-sans`}
    >
      <Head>
        <title>The Liquidator</title>
        <meta
          name="description"
          content="A liquidation platform based in Malaysia that helps you to liquidate your assets or find long-term solutions for your business."
        />
      </Head>
      {isBare ? (
        <Component {...pageProps} />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="h-[5px] bg-gradient-to-r from-primary/50 to-accent/50"
          />
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
      <Toaster />
    </div>
  );
}
