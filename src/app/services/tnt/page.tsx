import React from "react";
import { TntChecker } from "@/components/interactive/TntChecker";
import Link from "next/link";

export const metadata = {
  title: "Diffusion TNT & Satellite | SMTD-SA",
  description:
    "Vérifiez la disponibilité de la TNT et découvrez les solutions de diffusion télévisuelle et radio de la SMTD-SA.",
};

export default function TntPage() {
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
            Diffusion TNT & <br />
            <span className="text-gradient-warm">Satellite</span>
          </h1>
          <p className="text-lg text-text-muted max-w-3xl leading-relaxed">
            Diffusez vos programmes TV et radio partout au Mali grâce au réseau
            terrestre numérique de la SMTD-SA et à nos liaisons satellites de
            transport de signal.
          </p>
        </div>
      </section>

      {/* Details & Specs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start reveal">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-syne font-bold border-b border-brand-200 pb-4 mb-6 text-text-main">
              La transition vers le numérique au Mali
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              La SMTD-SA est le pilier technique national de la transition de la
              télévision analogique vers la Télévision Numérique Terrestre
              (TNT). Nous exploitons le réseau de diffusion hertzienne numérique
              du Mali, permettant aux chaînes de télévision publiques et privées
              d&apos;atteindre les foyers maliens en qualité numérique HD.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Grâce à la norme de transmission moderne DVB-T2, les
              téléspectateurs maliens bénéficient d&apos;une image haute
              définition, d&apos;un son de qualité supérieure et d&apos;un large
              choix de chaînes gratuites (bouquet national), le tout accessible
              simplement avec un décodeur standard et une antenne râteau.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold mb-6 text-text-main">
              Spécifications de diffusion
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Norme de diffusion DVB-T2",
                  desc: "Utilisation de la norme la plus récente et efficace pour la transmission télévisuelle terrestre.",
                },
                {
                  title: "Multiplexage national",
                  desc: "Collecte et assemblage des différents signaux TV des éditeurs de programmes publics et privés.",
                },
                {
                  title: "Liaison Satellite & DSNG",
                  desc: "Véhicules DSNG équipés pour le direct d'événements et la transmission vers notre centre d'émission.",
                },
                {
                  title: "Télédiffusion FM / Radio",
                  desc: "Gestion technique et hébergement des émetteurs radio FM régionaux de l'ORTM.",
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
              Bouquet National TNT
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Chaînes publiques",
                  desc: "ORTM 1, ORTM 2, TM2 diffusées sur l'ensemble des stations opérationnelles.",
                },
                {
                  title: "Chaînes privées majeures",
                  desc: "Africable TV, Joliba TV, Renouveau TV, Chérifla TV, etc.",
                },
                {
                  title: "Télévision internationale",
                  desc: "TV5 Monde et autres chaînes internationales autorisées.",
                },
                {
                  title: "Gratuité d'accès",
                  desc: "Pas d'abonnement mensuel requis pour le bouquet de base national.",
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

      {/* TNT Regional Checker Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-brand-200 reveal">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-syne font-bold mb-4 text-text-main">
            Disponibilité Régionale TNT
          </h2>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Utilisez notre outil de recherche pour vérifier le statut de la
            couverture TNT et les chaînes reçues dans votre région
            administrative.
          </p>
        </div>
        <TntChecker />
      </section>
    </div>
  );
}
