import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Points Hauts & Hébergement Pylônes | SMTD-SA",
  description:
    "Louez de l'espace sur nos pylônes de télédiffusion et télécoms stratégiquement répartis à travers tout le Mali.",
};

export default function PointsHautsPage() {
  return (
    <div className="bg-bg-main min-h-screen text-text-main pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(118,159,205,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 border-b border-brand-200 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(118,159,205,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-6 hover:text-primary-hover transition-colors font-semibold"
          >
            ← Retour aux services
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 text-text-main tracking-tight">
            Points Hauts & <br />
            <span className="text-gradient-warm">Hébergement Pylônes</span>
          </h1>
          <p className="text-lg text-text-muted max-w-3xl leading-relaxed">
            Profitez de l&apos;excellente couverture altimétrique de nos
            infrastructures de télédiffusion et de pylônes partagés pour
            installer vos antennes et équipements radio.
          </p>
        </div>
      </section>

      {/* Details & Specs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start reveal">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-syne font-bold border-b border-brand-200 pb-4 mb-6 text-text-main">
              La colocation d&apos;infrastructures pour optimiser vos coûts
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              La SMTD-SA dispose d&apos;un patrimoine d&apos;infrastructures
              verticales (pylônes d&apos;émissions radio et télévision
              auto-stables ou haubanés, terrasses et points hauts urbains)
              idéalement situés dans les zones urbaines et rurales du pays. Nous
              offrons aux opérateurs de téléphonie mobile, aux réseaux de
              sécurité privés, aux radiodiffuseurs FM et aux administrations des
              solutions d&apos;hébergement d&apos;antennes de transmission.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Cette mutualisation d&apos;infrastructure permet de réduire
              significativement les coûts de déploiement (CAPEX et OPEX) de vos
              réseaux de télécommunications, tout en accélérant la couverture
              des populations dans les zones ciblées.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold mb-6 text-text-main">
              Spécifications des sites
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Hauteurs variables",
                  desc: "Pylônes auto-stables et pylônes haubanés allant de 30 mètres à plus de 150 mètres de hauteur.",
                },
                {
                  title: "Abris techniques (Shelters)",
                  desc: "Mise à disposition de locaux techniques équipés pour abriter vos baies indoor.",
                },
                {
                  title: "Énergie principale secourue",
                  desc: "Alimentation réseau ou solaire doublée par des groupes de secours fiables.",
                },
                {
                  title: "Sécurisation renforcée",
                  desc: "Clôture périmétrique blindée, télésurveillance et gardiens physiques 24h/24.",
                },
              ].map((spec) => (
                <div
                  key={spec.title}
                  className="p-5 rounded-2xl border border-brand-200 bg-white hover:border-primary/30 transition-all shadow-sm"
                >
                  <h4 className="text-sm font-syne font-bold text-text-main mb-2">
                    {spec.title.replace(/'/g, "&apos;")}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {spec.desc.replace(/'/g, "&apos;")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="flex flex-col gap-6">
          <div className="glass-panel p-8 border-brand-200">
            <h3 className="font-syne font-bold text-lg mb-6 text-primary">
              Avantages Mutualisés
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Déploiement rapide",
                  desc: "Installez vos liaisons hertziennes ou relais mobiles en quelques jours.",
                },
                {
                  title: "Maintenance incluse",
                  desc: "La SMTD assure l'entretien physique du pylône et la sécurité du site.",
                },
                {
                  title: "Conformité technique",
                  desc: "Calculs de charges de structure systématiques avant installation.",
                },
                {
                  title: "Présence nationale",
                  desc: "Des points hauts disponibles dans toutes les 20 régions du Mali.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main">
                      {item.title.replace(/'/g, "&apos;")}
                    </h4>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {item.desc.replace(/'/g, "&apos;")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center flex flex-col items-center gap-6 reveal">
        <h3 className="font-syne font-bold text-2xl md:text-3xl text-text-main">
          Souhaitez-vous planifier une visite de site ?
        </h3>
        <p className="text-base text-text-muted max-w-xl">
          Nos équipes techniques sont à votre disposition pour étudier la charge
          de vos équipements et réaliser des études de faisabilité radio sur nos
          pylônes.
        </p>
        <Link
          href="/contact?subject=partenariat&service=Points Hauts"
          className="btn btn-primary btn-md mt-4 font-semibold"
        >
          Contacter notre Département Infrastructures
        </Link>
      </section>
    </div>
  );
}
