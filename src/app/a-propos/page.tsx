import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "La Maison & Terroirs du Mali",
  description:
    "Découvrez l'histoire, la vision culinaire et l'engagement de la Maison Velours Bamako pour la gastronomie malienne.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pt-10 pb-24">
      {/* Hero Banner */}
      <section className="py-14 sm:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="eyebrow-label">Héritage & Terroirs du Mali</p>
          <h1 className="text-editorial-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            L&apos;Histoire de la Maison Velours Bamako
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Fondée au cœur de Bamako, la Maison Velours célèbre la richesse inestimable des terroirs du Mali : du Fonio royal du Sahel aux mangues de Sikasso et poissons du fleuve Niger.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <h2 className="text-editorial-serif text-2xl sm:text-3xl font-bold text-white">
              Une Table Gastronomique d&apos;Auteur à Bamako
            </h2>
            <p>
              Située dans le quartier de prestige de l&apos;ACI 2000, la Maison Velours est née d&apos;une passion : hisser les produits nobles du Mali au sommet de la haute gastronomie contemporaine.
            </p>
            <p>
              Notre carte évolue au fil des récoltes et des arrivages : zébu des pâturages du Sahel, capitaine du fleuve Niger, miel sauvage des collines du Mandé, cacaos d&apos;Afrique de l&apos;Ouest et pulpe d&apos;or du Baobab blanc.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#121216] border border-zinc-800 space-y-6 shadow-2xl">
            <h3 className="text-editorial-serif text-2xl font-bold text-white">
              Nos Engagements d&apos;Excellence
            </h3>
            <div className="space-y-5 text-xs sm:text-sm text-zinc-300">
              <div className="pb-4 border-b border-zinc-800">
                <strong className="text-white block font-semibold mb-1">
                  Circuits Courts & Coopératives Maliennes
                </strong>
                Partenariats directs et rémunération équitable avec les producteurs de Baguinéda, Kati, Sikasso et Bandiagara.
              </div>
              <div className="pb-4 border-b border-zinc-800">
                <strong className="text-white block font-semibold mb-1">
                  Transmission & Savoir-Faire Culinaire
                </strong>
                Formation des jeunes talents maliens aux techniques de haute cuisine, pâtisserie d&apos;orfèvre et sommellerie.
              </div>
              <div>
                <strong className="text-white block font-semibold mb-1">
                  Pâtisserie Désucrée aux Fruits du Sahel
                </strong>
                Mise en valeur de la sucrosité naturelle de la mangue Kent, du Zaban et du Bissap, sans additifs de synthèse.
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-zinc-800 space-y-4">
          <h3 className="text-editorial-serif text-2xl sm:text-3xl font-bold text-white">
            Prendre Place à Notre Table
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
            Notre brigade et notre équipe d&apos;accueil vous reçoivent du mardi au samedi pour le déjeuner et le dîner à Bamako.
          </p>
          <div className="pt-2">
            <Link
              href="/#reservation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Réserver votre table</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
