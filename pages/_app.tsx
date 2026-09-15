import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import "@/styles/globals.css";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/shadcn/ui/toaster";

// Routes that render full-screen, without the site's Navbar/Footer chrome.
const BARE_ROUTES = ["/studio", "/og-temp"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isBare = BARE_ROUTES.some((route) => router.pathname.startsWith(route));

  return (
    <Providers>
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
          <div aria-hidden="true" className="flex h-[6px]">
            <span className="flex-1 bg-primary" />
            <span className="flex-1 bg-accent" />
            <span className="flex-1 bg-text" />
          </div>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
      <Toaster />
    </Providers>
  );
}
