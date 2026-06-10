import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SMTD-SA | Société Malienne de Transmission et de Diffusion",
    template: "%s | SMTD-SA",
  },
  description:
    "La Société Malienne de Transmission et de Diffusion assure le déploiement et l'exploitation des infrastructures numériques nationales.",
  keywords: [
    "SMTD",
    "Mali",
    "fibre optique",
    "data center",
    "TNT",
    "infrastructure numérique",
  ],
  authors: [{ name: "SMTD-SA" }],
  creator: "SMTD-SA",
  publisher: "SMTD-SA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <RevealProvider />
      </body>
    </html>
  );
}
