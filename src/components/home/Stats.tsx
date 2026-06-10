import React from "react";

interface StatItemProps {
  number: string;
  accent: string;
  label: string;
  subtitle: string;
}

function StatBlock({ number, accent, label, subtitle }: StatItemProps) {
  return (
    <div className="flex flex-col items-center md:items-start p-6 rounded-2xl glass-panel border-white/5 hover:border-accent-secondary/30 transition-all group reveal">
      <div className="text-4xl lg:text-5xl font-syne font-extrabold mb-3 text-text-main group-hover:scale-105 transition-transform origin-left">
        <span className="text-gradient-warm">{accent}</span>
        {number.replace(accent, "")}
      </div>
      <div className="text-lg font-syne font-bold text-text-main mb-2">{label}</div>
      <div className="text-sm text-text-muted leading-relaxed max-w-xs">{subtitle}</div>
    </div>
  );
}

export function Stats() {
  const statsList: StatItemProps[] = [
    {
      number: "3 000+",
      accent: "3 000",
      label: "Km de Fibre Optique",
      subtitle: "Réseau national déployé sur le territoire",
    },
    {
      number: "24/7",
      accent: "24",
      label: "Support Client",
      subtitle: "Disponibilité continue — Call Center",
    },
    {
      number: "100%",
      accent: "100",
      label: "Souveraineté",
      subtitle: "Données hébergées sous loi malienne",
    },
    {
      number: "2015",
      accent: "2015",
      label: "Fondation",
      subtitle: "Société d'État — Entreprise publique",
    },
  ];

  return (
    <div className="bg-surface relative overflow-hidden py-16 border-y border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,192,123,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, i) => (
            <StatBlock key={i} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
