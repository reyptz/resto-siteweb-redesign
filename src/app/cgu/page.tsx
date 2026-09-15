import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Réservation & d'Utilisation | Maison Velours Bamako",
  description:
    "Conditions générales d'utilisation et de réservation de la Maison Velours Bamako, Mali.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pt-10 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <p className="eyebrow-label">Cadre Juridique</p>
          <h1 className="text-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="text-xs text-zinc-400">
            En vigueur au 1er janvier 2026 · Maison Velours Bamako · République du Mali
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-[#121216] border border-zinc-800 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed shadow-2xl">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              1. Objet & Réservations
            </h2>
            <p>
              Les présentes conditions régissent l&apos;utilisation de la plateforme numérique de la Maison Velours Bamako et la réservation de tables de restaurant pour nos déjeuners et dîners gastronomiques.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              2. Modalités d&apos;Accueil & Ponctualité
            </h2>
            <p>
              Afin d&apos;assurer un service au guéridon irréprochable et la fraîcheur des arrivages du jour, nous prions nos convives de nous aviser de toute modification ou annulation au moins 12 heures à l&apos;avance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              3. Droit Applicable
            </h2>
            <p>
              Les présentes conditions sont régies et interprétées conformément au droit en vigueur en République du Mali.
            </p>
          </section>

          <div className="pt-6 border-t border-zinc-800 flex flex-wrap justify-between items-center text-xs text-zinc-400">
            <span>Contact : reservation@maisonvelours-bamako.ml</span>
            <Link href="/contact" className="text-amber-400 hover:underline">
              Contacter la conciergerie à Bamako →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
