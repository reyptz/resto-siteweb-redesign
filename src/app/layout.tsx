import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0a1628] text-gray-100">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <RevealProvider />
      </body>
    </html>
  );
}
