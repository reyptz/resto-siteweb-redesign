import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Maison Velours Bamako",
  description:
    "Mentions légales du site de la Maison Velours Bamako, Mali.",
};

export default function LegalNoticePage() {
  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pt-10 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <p className="eyebrow-label">Mentions Légales</p>
          <h1 className="text-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Informations Légales
          </h1>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-[#121216] border border-zinc-800 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed shadow-2xl">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">Éditeur du site</h2>
            <div className="space-y-1">
              <p className="text-white font-semibold">Maison Velours Bamako SARL</p>
              <p>Boulevard du 22 Octobre, ACI 2000, Bamako, République du Mali</p>
              <p>Email : contact@maisonvelours-bamako.ml</p>
              <p>Téléphone : +223 20 70 80 90</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">
              Propriété Intellectuelle & Terroirs
            </h2>
            <p>
              L&apos;ensemble des recettes, photographies et créations culinaires est protégé au titre des droits de propriété intellectuelle et du patrimoine immatériel de la gastronomie malienne.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
