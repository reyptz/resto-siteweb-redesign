import React from "react";
import { MapMali } from "@/components/interactive/MapMali";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { MAP_NODES } from "@/data/regions";

export const metadata = {
  title: "Carte de Couverture Réseau | SMTD-SA",
  description:
    "Consultez la carte interactive de la dorsale nationale fibre optique et la couverture des stations de télédiffusion de la SMTD-SA.",
};

export default function CouverturePage() {
  return (
    <div className="bg-bg-main min-h-screen text-text-main pt-24 pb-24 relative overflow-hidden">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 border-b border-brand-200 bg-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(118,159,205,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-6 hover:text-primary-hover transition-colors group"
          >
            <Icon name="arrow-left" size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight text-text-main">
            Couverture Réseau <span className="text-gradient-warm">Nationale</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
            Consultez le tracé de notre dorsale fibre optique et la liste de nos
            nœuds techniques régionaux maillant le territoire malien.
          </p>
        </div>
      </section>

      {/* Map display */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal">
        <div className="mb-10">
          <h2 className="text-3xl font-syne font-bold mb-4 text-text-main">
            Carte Interactive des Nœuds Fibre Optique
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Survolez les points techniques ci-dessous pour découvrir la longueur
            de fibre active associée et les spécifications du nœud régional.
          </p>
        </div>
        <div className="glass-panel p-6 border-brand-200 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
          <MapMali />
        </div>
      </section>

      {/* Nodes list table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-brand-200 reveal">
        <h2 className="text-2xl font-syne font-bold mb-8 text-text-main">
          Détails des Stations & Points de Présence
        </h2>
        
        <div className="overflow-x-auto rounded-3xl border border-brand-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-200 bg-brand-100/30 text-xs font-mono uppercase tracking-widest text-text-muted">
                <th className="px-8 py-6 font-semibold">Nom de la station</th>
                <th className="px-8 py-6 font-semibold">Fibre active</th>
                <th className="px-8 py-6 font-semibold">Rôle technique / Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100 text-sm text-text-main">
              {MAP_NODES.map((node) => (
                <tr
                  key={node.id}
                  className="hover:bg-brand-100/10 transition-colors group"
                >
                  <td className="px-8 py-5 font-syne font-bold text-text-main group-hover:text-primary transition-colors">
                    {node.name}
                  </td>
                  <td className="px-8 py-5 font-mono text-primary font-semibold">
                    {node.km} km
                  </td>
                  <td className="px-8 py-5 text-text-muted text-sm leading-relaxed">
                    {node.desc.replace(/'/g, '&apos;')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 rounded-3xl border border-brand-200 bg-brand-100/10 flex gap-6 items-start max-w-4xl relative overflow-hidden group hover:border-brand-300 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(118,159,205,0.05),transparent_50%)] pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
            <Icon name="globe" size={32} />
          </div>
          <div className="relative z-10">
            <h4 className="text-lg font-syne font-bold text-text-main mb-2">
              Interconnexion frontalière internationale
            </h4>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              La dorsale SMTD assure l&apos;interconnexion terrestre du Mali avec la
              Côte d&apos;Ivoire (via Sikasso) et le Sénégal (via Kayes), permettant
              d&apos;assurer le transit réseau mondial et des solutions de
              sécurisation internationale (liaisons redondantes sous-marines).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
