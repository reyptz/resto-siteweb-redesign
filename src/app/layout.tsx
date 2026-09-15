import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maisonvelours-bamako.ml";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maison Velours Bamako | Haute Gastronomie & Terroirs d'Auteur du Mali",
    template: "%s | Maison Velours Bamako",
  },
  description:
    "Restaurant gastronomique d'exception et haute pâtisserie d'auteur à Bamako, Mali. Terroirs du Mandé, Sikasso et de la Vallée du Niger.",
  keywords: [
    "Maison Velours Bamako",
    "Restaurant Gastronomique Bamako",
    "Haute Cuisine Malienne",
    "Terroir du Mandé",
    "Mangue de Sikasso",
    "Table d'Exception Mali",
    "ACI 2000 Bamako",
  ],
  authors: [{ name: "Maison Velours Bamako", url: siteUrl }],
  creator: "Maison Velours Bamako",
  publisher: "Maison Velours Bamako",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Maison Velours Bamako | Haute Gastronomie du Mali",
    description:
      "Restaurant gastronomique d'exception et créations d'auteur à Bamako.",
    siteName: "Maison Velours Bamako",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Maison Velours Bamako",
    url: siteUrl,
    description:
      "Restaurant gastronomique d'exception et haute pâtisserie d'auteur à Bamako, Mali.",
    servesCuisine: ["Malian Gastronomic", "West African Modern", "Haute Pâtisserie"],
    priceRange: "FCFA 15000 - 65000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard du 22 Octobre, ACI 2000",
      addressLocality: "Bamako",
      addressCountry: "ML",
    },
    telephone: "+223 20 70 80 90",
  };

  return (
    <html lang="fr" className={`${plusJakarta.variable} ${playfair.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0A0A0C] text-white selection:bg-amber-400 selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-black focus:rounded-lg focus:shadow-lg focus:outline-none font-bold text-xs"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
