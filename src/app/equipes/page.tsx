import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organigramme et équipes",
  description:
    "Découvrez l'organigramme et les équipes de la Société Malienne de Transmission et de Diffusion.",
};

export default function TeamPage() {
  return (
    <div className="bg-bg-main min-h-screen text-text-main pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(118,159,205,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal">
          <div className="badge badge-primary mb-6 mx-auto">
            Notre Structure
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight text-text-main">
            Organigramme et <span className="text-gradient-warm">équipes</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Une équipe professionnelle et dévouée au service du Mali, structurée pour répondre aux défis numériques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20 reveal">
          <div className="glass-panel border-brand-200 p-10 md:p-16 text-center relative overflow-hidden group shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(118,159,205,0.05),transparent_50%)] pointer-events-none" />
            <div className="w-32 h-32 mx-auto mb-8 bg-primary/10 border border-primary/20 rounded-[2rem] flex items-center justify-center text-primary shadow-xl group-hover:scale-105 transition-transform">
              <svg
                className="w-16 h-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-syne font-bold mb-3 text-text-main">Direction Générale</h2>
            <p className="text-primary font-bold text-lg tracking-wide uppercase mb-8">Poste à pourvoir</p>
            <div className="max-w-2xl mx-auto text-text-muted">
              <p className="text-lg leading-relaxed">
                La Direction Générale assure la gestion opérationnelle et
                stratégique de l&apos;entreprise, sous la supervision du Conseil
                d&apos;Administration.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {[
            {
              name: "Direction Technique",
              desc: "Déploiement et maintenance des infrastructures réseaux et data centers.",
            },
            {
              name: "Direction Commerciale",
              desc: "Relations clients, prospection et développement commercial.",
            },
            {
              name: "Direction Financière",
              desc: "Gestion financière, budgétaire et comptable de la société.",
            },
            {
              name: "Direction des Ressources Humaines",
              desc: "Gestion stratégique et opérationnelle du capital humain.",
            },
            {
              name: "Direction Juridique",
              desc: "Affaires juridiques, contentieux et conformité réglementaire.",
            },
            {
              name: "Direction de la Communication",
              desc: "Communication institutionnelle, interne et relations publiques.",
            },
          ].map((dept, index) => (
            <div
              key={index}
              className="glass-panel p-8 border-brand-200 hover:border-primary/30 transition-all group shadow-sm"
            >
              <div className="w-16 h-16 mb-6 bg-primary/10 text-primary rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform shadow-md font-bold">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-syne font-bold mb-3 text-text-main">{dept.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{dept.desc.replace(/'/g, '&apos;')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
