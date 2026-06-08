import { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Ressources documentaires",
  description:
    "Retrouvez toutes les ressources documentaires de la SMTD-SA : rapports d'activité, plaquettes, brochures et plus.",
};

export default function ResourcesPage() {
  const documents = [
    { title: "Rapport d'activité 2023", type: "PDF", size: "2.4 MB" },
    { title: "Plaquette de présentation", type: "PDF", size: "1.8 MB" },
    { title: "Catalogue des services", type: "PDF", size: "3.1 MB" },
    { title: "Guide utilisateur Data Center", type: "PDF", size: "1.2 MB" },
  ];

  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="badge badge-secondary mb-6 mx-auto">
            Documentation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight">
            Ressources <span className="text-gradient-warm">documentaires</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Retrouvez toutes nos publications, rapports et documents officiels en libre téléchargement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="flex flex-col gap-5">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 glass-panel border-white/5 hover:border-accent-secondary/30 transition-colors group gap-6"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-accent-secondary/10 text-accent-secondary rounded-2xl flex items-center justify-center shrink-0 border border-accent-secondary/20 group-hover:scale-105 transition-transform">
                    <Icon name="document" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-syne font-semibold text-white mb-1 group-hover:text-accent-secondary transition-colors">
                      {doc.title.replace(/'/g, '&apos;')}
                    </h3>
                    <p className="text-sm font-mono text-text-muted">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>
                
                <button className="btn btn-outline btn-sm w-full sm:w-auto flex items-center justify-center gap-2 px-6">
                  Télécharger
                  <Icon name="download" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
