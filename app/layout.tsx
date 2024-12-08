import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Toaster } from "@/components/shadcn/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Liquidator",
  description:
    "A liquidation platform based in Malaysia that helps you to liquidate your assets or find long-term solutions for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-text relative bg-background`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
