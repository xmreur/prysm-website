import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prysm — Encrypted Messaging on Tor",
  description:
    "Decentralized, onion-routed communication without surveillance or centralized servers. Prysm uses Tor for secure, metadata-resistant P2P messaging.",
  keywords: [
    "privacy",
    "P2P",
    "tor",
    "onion routing",
    "encryption",
    "decentralized",
    "secure communication",
    "messenger",
  ],
  authors: [{ name: "xmreur" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Prysm — Encrypted Messaging on Tor",
    description:
      "Peer-to-peer communication over Tor. No servers, no surveillance, no metadata.",
    url: "https://prysmchat.xyz/",
    siteName: "Prysm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prysm — Encrypted Messaging on Tor",
    description:
      "Peer-to-peer communication over Tor. No servers, no surveillance, no metadata.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
