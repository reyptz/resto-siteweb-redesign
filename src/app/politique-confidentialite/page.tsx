import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Maison Velours Bamako",
  description:
    "Protection des données personnelles - Maison Velours Bamako (Loi N° 2013-015 du Mali).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pt-10 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <p className="eyebrow-label">Protection des Données</p>
          <h1 className="text-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Politique de Confidentialité
          </h1>
          <p className="text-xs text-zinc-400">
            Conforme à la Loi N° 2013-015 de la République du Mali
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-[#121216] border border-zinc-800 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed shadow-2xl">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              1. Responsable de Traitement
            </h2>
            <p>
              Maison Velours Bamako SARL traite vos données personnelles en conformité avec la réglementation de la République du Mali (APDP). Les coordonnées enregistrées lors d&apos;une réservation sont exclusivement destinées à l&apos;accueil et au service en salle.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              2. Sécurité & Confidentialité
            </h2>
            <p>
              Aucune donnée personnelle n&apos;est vendue ou transmise à des tiers. Les informations sont protégées par des protocoles sécurisés.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              3. Contact
            </h2>
            <p>
              Pour toute question relative à vos données : <strong className="text-amber-400">confidentialite@maisonvelours-bamako.ml</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
