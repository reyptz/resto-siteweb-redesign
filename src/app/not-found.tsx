import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page introuvable (404) | Maison Velours Paris",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0C] text-white">
      <div className="max-w-2xl w-full text-center space-y-6">
        <p className="eyebrow-label">Erreur 404</p>

        <h1 className="text-6xl sm:text-8xl font-serif font-bold text-white tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Page Introuvable
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          La création ou la page que vous recherchez n&apos;est pas disponible. Nous vous invitons à rejoindre la page d&apos;accueil ou notre carte gastronomique.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/#carte"
            className="px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm border border-zinc-700 transition-colors flex items-center gap-2"
          >
            <span>Découvrir la Carte</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
