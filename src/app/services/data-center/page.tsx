import React from "react";
import { QuoteEstimator } from "@/components/interactive/QuoteEstimator";
import Link from "next/link";

export const metadata = {
  title: "Data Center Souverain | SMTD-SA",
  description:
    "Hébergez vos serveurs, données et applications métiers au sein du Data Center d'État souverain de la SMTD-SA.",
};

export default function DataCenterPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-20 pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,192,123,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-secondary uppercase tracking-wider mb-6 hover:text-white transition-colors"
          >
            ← Retour aux services
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 text-text-main tracking-tight">
            Data Center <br />
            <span className="text-gradient-warm">Souverain</span>
          </h1>
          <p className="text-lg text-text-muted max-w-3xl leading-relaxed">
            Sécurisez vos données stratégiques au sein d&apos;un centre de
            données national hautement disponible, résilient, et régi
            exclusivement par les lois maliennes.
          </p>
        </div>
      </section>

      {/* Details & Specs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start reveal">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-syne font-bold border-b border-white/5 pb-4 mb-6">
              Une infrastructure d&apos;hébergement de niveau international
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              Le Data Center de la SMTD-SA est conçu selon les standards de
              résilience Tier-III, garantissant un taux de disponibilité
              électrique et de refroidissement supérieur à 99.98%. C&apos;est
              l&apos;infrastructure idéale pour les banques, institutions
              publiques, opérateurs et FAI souhaitant externaliser tout ou
              partie de leurs serveurs de production ou de secours (plan de
              reprise d&apos;activité - PRA).
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              En choisissant la SMTD-SA, vous bénéficiez de la souveraineté
              numérique : vos données restent physiquement stockées sur le
              territoire national, réduisant la latence d&apos;accès et vous
              protégeant contre les lois extraterritoriales d&apos;autres pays.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold mb-6">
              Spécifications techniques
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Énergie redondante",
                  desc: "Double adduction électrique ondulée (2N) avec secours assuré par des groupes électrogènes de forte puissance.",
                },
                {
                  title: "Climatisation contrôlée",
                  desc: "Refroidissement redondant assurant une température et une hygrométrie stables au sein des allées.",
                },
                {
                  title: "Sécurité physique stricte",
                  desc: "Contrôle d'accès par badge et biométrie, surveillance vidéo HD continue, et gardiennage armé.",
                },
                {
                  title: "Connectivité multi-opérateurs",
                  desc: "Interconnexion fibre directe vers les cœurs de réseau de tous les principaux opérateurs maliens.",
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
          <div className="glass-panel p-8 border-accent-secondary/20">
            <h3 className="font-syne font-bold text-lg mb-6 text-accent-secondary">
              Services Offerts
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Colocation de serveurs",
                  desc: "Mise à disposition d'unités de rack (1U, 2U, 4U, 8U) ou baies complètes privées.",
                },
                {
                  title: "Hébergement de sauvegarde",
                  desc: "Stockage cloud managé pour vos sauvegardes et serveurs de réplication.",
                },
                {
                  title: "Supervision & Infogérance",
                  desc: "Assistance technique sur site par nos techniciens 24/7 (gestes de proximité).",
                },
                {
                  title: "Liaison directe fibre",
                  desc: "Interconnexion point-à-point fibre dédiée entre vos locaux et le Data Center.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-secondary/10 text-accent-secondary flex items-center justify-center shrink-0 mt-0.5 text-xs">
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
            Simulateur de Devis Hébergement Data Center
          </h2>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Configurez la taille de rack nécessaire et le volume de stockage
            cloud pour estimer le coût de votre projet d&apos;hébergement.
          </p>
        </div>
        <QuoteEstimator />
      </section>
    </div>
  );
}
