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
  title: "Prysm — Messaggistica cifrata su Tor",
  description:
    "Comunicazione decentralizzata e onion-routed senza sorveglianza né server centralizzati. Prysm usa Tor per messaggistica P2P sicura e resistente ai metadati.",
  keywords: [
    "privacy",
    "P2P",
    "tor",
    "onion routing",
    "crittografia",
    "decentralizzato",
    "comunicazione sicura",
    "messenger",
  ],
  authors: [{ name: "xmreur" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Prysm — Messaggistica cifrata su Tor",
    description:
      "Comunicazione peer-to-peer su Tor. Nessun server, nessuna sorveglianza, nessun metadato.",
    url: "https://prysmchat.xyz/",
    siteName: "Prysm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prysm — Messaggistica cifrata su Tor",
    description:
      "Comunicazione peer-to-peer su Tor. Nessun server, nessuna sorveglianza, nessun metadato.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
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
