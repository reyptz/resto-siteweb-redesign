import React from "react";
import { QuoteEstimator } from "@/components/interactive/QuoteEstimator";
import Link from "next/link";

export const metadata = {
  title: "Fibre Optique Dédiée | SMTD-SA",
  description:
    "Profitez d'une connexion Très Haut Débit symétrique et garantie grâce au réseau national de fibre optique de la SMTD-SA.",
};

export default function FibreOptiquePage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-20 pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.08)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-primary uppercase tracking-wider mb-6 hover:text-white transition-colors"
          >
            ← Retour aux services
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 text-text-main tracking-tight">
            Fibre Optique <br />
            <span className="text-gradient-warm">Dédiée</span>
          </h1>
          <p className="text-lg text-text-muted max-w-3xl leading-relaxed">
            Reliez vos établissements ou accédez à un Internet Très Haut Débit
            d&apos;une stabilité exceptionnelle grâce à notre réseau national en
            fibre optique de plus de 3 500 km.
          </p>
        </div>
      </section>

      {/* Details & Specs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start reveal">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-syne font-bold border-b border-white/5 pb-4 mb-6">
              La connectivité de référence pour les entreprises
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              La SMTD-SA, opérateur national d&apos;infrastructures, met à votre
              disposition un réseau capillaire de fibre optique hautement
              disponible reliant toutes les capitales régionales du Mali et
              interconnecté aux réseaux des pays voisins (Sénégal, Côte
              d&apos;Ivoire, etc.).
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Nos offres de liaisons louées et d&apos;accès Internet dédié
              s&apos;adressent aux administrations publiques, opérateurs de
              télécommunications, fournisseurs d&apos;accès Internet (FAI),
              banques et grandes entreprises ayant des exigences élevées de
              débits, de sécurité et de disponibilité.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold mb-6">
              Spécifications techniques
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Technologie de pointe",
                  desc: "Déploiement sur pylônes haute tension et voies ferrées en technologies SDH et DWDM.",
                },
                {
                  title: "Sécurité et Résilience",
                  desc: "Réseau maillé avec boucles de sécurisation pour garantir le transit en cas de coupure.",
                },
                {
                  title: "SLA Élevé",
                  desc: "Garantie de Temps de Rétablissement (GTR) de 4 heures avec pénalités contractuelles.",
                },
                {
                  title: "Débits Symétriques",
                  desc: "Débit montant égal au débit descendant, sans aucune limitation de volume.",
                },
              ].map((spec) => (
                <div
                  key={spec.title}
                  className="p-5 rounded-2xl border border-white/5 bg-surface-elevated/50 hover:bg-surface-elevated transition-colors"
                >
                  <h4 className="text-sm font-syne font-bold text-white mb-2">
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
          <div className="glass-panel p-8 border-accent-primary/20">
            <h3 className="font-syne font-bold text-lg mb-6 text-accent-primary">
              Avantages Clés
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Débit flexible",
                  desc: "De 10 Mbps à plus de 1 Gbps selon vos besoins.",
                },
                {
                  title: "Garantie 99.5%",
                  desc: "Taux de disponibilité annuel garanti par SLA.",
                },
                {
                  title: "Support 24/7/365",
                  desc: "Supervision continue par notre NOC.",
                },
                {
                  title: "Souveraineté",
                  desc: "Réseau d'État géré de manière indépendante.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
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

      {/* Quote Estimator Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5 reveal">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-syne font-bold mb-4">
            Simulateur de Devis Fibre Optique
          </h2>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Sélectionnez votre débit et la durée d&apos;engagement pour estimer
            vos coûts d&apos;accès à la fibre SMTD.
          </p>
        </div>
        <QuoteEstimator />
      </section>
    </div>
  );
}
