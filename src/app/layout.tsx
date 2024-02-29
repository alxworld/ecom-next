import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/app/SessionProvider";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Alex Store",
  description: "Shopping at your fingerTips",
  openGraph: {
    title: "Alex Store",
    description: "Shopping at your fingerTips",
    image: "url/image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@alexcs",
    title: "Alex Store",
    description: "Shopping at your fingerTips",
    image: "url/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
