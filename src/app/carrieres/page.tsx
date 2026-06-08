import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const metadata = {
  title: "Recrutement & Carrières | SMTD-SA",
  description:
    "Rejoignez les équipes de la SMTD-SA. Découvrez nos opportunités de carrière pour ingénieurs, techniciens et téléconseillers au Mali.",
};

const JOBS = [
  {
    title: "Ingénieur Système & Virtualisation Cloud",
    department: "Direction des Systèmes d'Information",
    type: "CDI",
    location: "Bamako",
    desc: "Supervision et maintenance de nos infrastructures de virtualisation au sein du Data Center national.",
  },
  {
    title: "Technicien de Maintenance Fibre Optique",
    department: "Direction Technique & Réseau",
    type: "CDI",
    location: "Ségou / Mopti",
    desc: "Maintenance préventive et curative des liaisons optiques de la dorsale et déploiement de liaisons FTTx.",
  },
  {
    title: "Téléconseiller Clientèle (Call Center)",
    department: "Service Client & Support",
    type: "CDD",
    location: "Bamako",
    desc: "Accueil téléphonique, assistance technique de premier niveau en français et langues locales.",
  },
];

export default function CarrieresPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-primary uppercase tracking-wider mb-6 hover:text-white transition-colors group"
          >
            <Icon name="arrow-left" size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight">
            Rejoignez la <span className="text-gradient-warm">SMTD-SA</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
            Participez activement au développement de la souveraineté numérique
            du Mali en rejoignant une entreprise d&apos;État dynamique et
            ambitieuse.
          </p>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal">
        <h2 className="text-3xl font-syne font-bold mb-10 text-white">
          Pourquoi nous rejoindre ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Projets d'envergure",
              desc: "Travaillez sur le plus grand réseau fibre optique du Mali, la TNT nationale et le Data Center souverain.",
            },
            {
              title: "Développement de compétences",
              desc: "Bénéficiez de formations régulières sur les technologies réseaux et télécoms de pointe.",
            },
            {
              title: "Engagement citoyen",
              desc: "Mettez votre expertise technique au service du développement économique et social de notre pays.",
            },
          ].map((v, i) => (
            <div
              key={v.title}
              className="glass-panel p-8 border-white/5 hover:border-accent-secondary/30 transition-all group"
            >
              <div className="w-12 h-12 mb-6 bg-surface-elevated text-accent-secondary rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                <span className="font-syne font-bold text-xl">{i + 1}</span>
              </div>
              <h3 className="font-syne font-bold text-white text-xl mb-3">
                {v.title.replace(/'/g, '&apos;')}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs list */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5 reveal">
        <h2 className="text-3xl font-syne font-bold mb-10 text-white">
          Postes ouverts
        </h2>
        <div className="flex flex-col gap-6 max-w-4xl">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="p-8 rounded-2xl glass-panel border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent-primary/30 transition-colors group"
            >
              <div className="flex-1">
                <h3 className="text-xl font-syne font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                  {job.title.replace(/'/g, '&apos;')}
                </h3>
                <span className="text-xs font-mono text-accent-secondary block mb-3 uppercase tracking-wider">
                  {job.department.replace(/'/g, '&apos;')}
                </span>
                <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                  {job.desc}
                </p>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                <span className="px-3 py-1.5 rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20 text-xs font-bold uppercase tracking-wider">
                  {job.type}
                </span>
                <span className="text-sm text-text-muted font-mono flex items-center gap-2">
                  <Icon name="map-pin" size={14} />
                  {job.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Application details */}
        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-surface-elevated/50 max-w-4xl flex flex-col gap-6 relative overflow-hidden group hover:border-accent-secondary/30 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,192,123,0.1),transparent_50%)] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-syne font-bold text-2xl text-white mb-4">
              Candidature Spontanée
            </h3>
            <p className="text-base text-text-muted leading-relaxed mb-6 max-w-3xl">
              Aucun poste ne correspond à votre profil ? Vous pouvez nous faire
              parvenir votre curriculum vitae (CV) accompagné d&apos;une lettre de
              motivation pour une candidature spontanée. Nous étudions avec
              attention toutes les demandes.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-base text-white/80">
              <span className="flex items-center gap-2">
                <Icon name="mail" size={18} className="text-accent-secondary" /> 
                Envoyer votre candidature à :
              </span>
              <a
                href="mailto:recrutement@smtd.ml"
                className="font-mono font-bold text-accent-primary hover:text-accent-secondary transition-colors"
              >
                recrutement@smtd.ml
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
