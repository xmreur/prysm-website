import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prysm - P2P TOR Chat",
  description: "Decentralized, onion-routed communication without surveillance or centralized servers. Prysm uses Tor for secure, metadata-resistant P2P messaging.",
  authors: [{ name: "xmreur", url: "https://github.com/xmreur"}],
  keywords: ["privacy", "p2p messenger", "tor", "onion routing", "encryption", "decentralized", "secure communication"],
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Mg3gegdb-mnsk0kka76OMocAqbBq-VqITPFDUq5Ma1Y" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`max-w-svw ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
