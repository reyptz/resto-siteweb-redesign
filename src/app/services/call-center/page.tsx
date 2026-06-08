import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Call Center & Support 24/7 | SMTD-SA",
  description:
    "Externalisez votre relation client ou votre support technique auprès de notre Call Center professionnel 24/7/365.",
};

export default function CallCenterPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-20 pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-secondary uppercase tracking-wider mb-6 hover:text-white transition-colors"
          >
            ← Retour aux services
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 text-text-main tracking-tight">
            Call Center & <br />
            <span className="text-gradient-warm">Relation Client</span>
          </h1>
          <p className="text-lg text-text-muted max-w-3xl leading-relaxed">
            Optimisez la satisfaction de vos usagers et clients avec notre
            plateforme de centre d&apos;appels professionnelle de dernière
            génération, opérationnelle en continu.
          </p>
        </div>
      </section>

      {/* Details & Specs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start reveal">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-syne font-bold border-b border-white/5 pb-4 mb-6">
              Un service d&apos;accueil téléphonique de haute performance
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              La SMTD-SA met à la disposition des entreprises privées et des
              administrations publiques une infrastructure complète de centre de
              contacts (Call Center) située à Bamako. Équipé d&apos;outils de
              routage d&apos;appels intelligents et de logiciels CRM modernes,
              notre Call Center est armé pour traiter de gros volumes de
              requêtes.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Nos téléconseillers qualifiés sont formés pour répondre avec
              rigueur et courtoisie à toutes les demandes, assurant le support
              de premier niveau, la prise de rendez-vous, la gestion de
              réclamations, ou la réalisation d&apos;enquêtes de satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold mb-6">
              Prestations incluses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Support technique (NOC/Helpdesk)",
                  desc: "Assistance technique pour vos clients ou utilisateurs de niveau 1 et 2 en 24/7/365.",
                },
                {
                  title: "Traitement d'appels entrants",
                  desc: "Gestion de l'accueil téléphonique général, service client commercial, et réclamations.",
                },
                {
                  title: "Campagnes sortantes",
                  desc: "Téléprospection, enquêtes de satisfaction, sondages d'opinion, et qualification de fichiers.",
                },
                {
                  title: "Intégration d'outils CRM",
                  desc: "Couplage Téléphonie-Informatique (CTI) pour un suivi précis de chaque fiche contact client.",
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
              Fonctionnalités Clés
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Disponibilité 24/7/365",
                  desc: "Des équipes d'opérateurs se relayant jour et nuit sans interruption.",
                },
                {
                  title: "Écoute & Qualité",
                  desc: "Enregistrement systématique des appels et contrôle qualité rigoureux.",
                },
                {
                  title: "Langues supportées",
                  desc: "Réponses assurées en Français, Bambara, Peul, et Soninké.",
                },
                {
                  title: "Reporting régulier",
                  desc: "Envoi hebdomadaire des indicateurs clés (SLA, Taux de décroché).",
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

      {/* CTA section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center flex flex-col items-center gap-6 reveal">
        <h3 className="font-syne font-bold text-2xl md:text-3xl">
          Besoin d&apos;externaliser votre support client ?
        </h3>
        <p className="text-base text-text-muted max-w-xl">
          Discutez avec nos experts en relation client pour concevoir une offre
          sur-mesure adaptée à la taille de votre entreprise ou de votre
          administration.
        </p>
        <Link
          href="/contact?subject=partenariat&service=Call Center"
          className="btn btn-primary btn-lg mt-4"
        >
          Demander une Proposition Commerciale
        </Link>
      </section>
    </div>
  );
}
