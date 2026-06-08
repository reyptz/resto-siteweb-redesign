import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const metadata = {
  title: "Avis d'Appels d'Offres Publics | SMTD-SA",
  description:
    "Consultez les publications officielles d'appels d'offres, consultations restreintes et marchés publics de la SMTD-SA.",
};

const TENDERS = [
  {
    id: "SMTD-AO-2026-004",
    title: "Extension de la boucle locale fibre optique urbaine à Bamako",
    datePub: "28/05/2026",
    dateLimit: "25/06/2026",
    status: "open",
    desc: "Fourniture et pose de câbles optiques souterrains et aériens pour le raccordement de nouvelles administrations publiques.",
  },
  {
    id: "SMTD-AO-2026-003",
    title:
      "Acquisition d'équipements de climatisation de précision pour Data Center",
    datePub: "15/05/2026",
    dateLimit: "12/06/2026",
    status: "open",
    desc: "Fourniture, installation et mise en service de deux armoires de climatisation de précision redondantes.",
  },
  {
    id: "SMTD-AO-2026-002",
    title: "Fourniture de groupes électrogènes de secours pour stations TNT",
    datePub: "04/04/2026",
    dateLimit: "02/05/2026",
    status: "closed",
    desc: "Achat de générateurs de secours de 15 kVA destinés aux stations d'émissions TNT régionales.",
  },
];

export default function AppelsOffresPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-secondary uppercase tracking-wider mb-6 hover:text-white transition-colors group"
          >
            <Icon name="arrow-left" size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight">
            Marchés Publics & <span className="text-gradient-warm">Appels d&apos;Offres</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
            Consultez les appels d&apos;offres en cours et téléchargez les cahiers
            des charges (DAO) pour collaborer avec la SMTD-SA.
          </p>
        </div>
      </section>

      {/* Tender List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal">
        <h2 className="text-3xl font-syne font-bold mb-10 text-white">
          Avis en cours de validité
        </h2>
        <div className="flex flex-col gap-8 max-w-4xl">
          {TENDERS.map((tender) => (
            <div
              key={tender.id}
              className={`p-8 rounded-3xl border glass-panel transition-all ${
                tender.status === "open"
                  ? "border-white/10 hover:border-accent-primary/30"
                  : "border-white/5 opacity-60 grayscale"
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5 pb-4 mb-4">
                <span className="text-sm font-mono text-accent-secondary font-bold tracking-wider">
                  {tender.id}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest ${
                      tender.status === "open"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-surface-elevated text-text-muted border border-white/10"
                    }`}
                  >
                    {tender.status === "open" ? "En cours" : "Clôturé"}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-syne font-bold text-white mb-3">
                  {tender.title.replace(/'/g, '&apos;')}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-3xl">
                  {tender.desc.replace(/'/g, '&apos;')}
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-text-muted/80 font-mono bg-surface-elevated/50 p-4 rounded-xl border border-white/5 inline-flex">
                  <span className="flex items-center gap-2">
                    <Icon name="calendar" size={14} /> Publication : {tender.datePub}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="clock" size={14} className="text-accent-primary" />
                    Limite : <strong className="text-white ml-1">{tender.dateLimit}</strong>
                  </span>
                </div>
              </div>
              
              {tender.status === "open" && (
                <div className="flex justify-end pt-6 mt-6 border-t border-white/5">
                  <a
                    href={`mailto:marches.publics@smtd.ml?subject=Demande DAO ${tender.id}`}
                    className="btn btn-primary btn-sm flex items-center gap-2 text-sm px-6"
                  >
                    <Icon name="document" size={16} /> Demander le dossier DAO
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bidding principles */}
        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-surface-elevated/80 max-w-4xl flex flex-col gap-6 relative overflow-hidden group hover:border-white/20 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-syne font-bold text-2xl text-white mb-4">
              Règlement des consultations
            </h3>
            <p className="text-base text-text-muted leading-relaxed mb-6">
              Toutes les consultations et passations de marchés de la SMTD-SA sont
              régies par le Code des Marchés Publics de la République du Mali. Les
              dossiers de réponse doivent être déposés physiquement sous pli fermé
              au secrétariat de notre direction générale ou envoyés par recommandé
              avant les dates limites fixées.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-base text-white/80">
              <span className="flex items-center gap-2">
                <Icon name="info" size={18} className="text-accent-secondary" />
                Renseignements complémentaires :
              </span>
              <a
                href="mailto:marches.publics@smtd.ml"
                className="font-mono font-bold text-accent-secondary hover:text-white transition-colors"
              >
                marches.publics@smtd.ml
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
