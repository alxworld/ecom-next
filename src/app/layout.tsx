import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
