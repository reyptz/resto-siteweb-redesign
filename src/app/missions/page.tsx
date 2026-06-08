import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missions et valeurs",
  description:
    "Découvrez les missions, la vision et les valeurs de la Société Malienne de Transmission et de Diffusion.",
};

export default function MissionsPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(229,192,123,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal">
          <div className="badge badge-secondary mb-6 mx-auto">
            Vision & Objectifs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight text-white">
            Missions et <span className="text-gradient-warm">valeurs</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Notre raison d&apos;être et les principes qui guident notre action au quotidien.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-24">
          <div className="reveal">
            <h2 className="text-3xl font-syne font-bold mb-10 text-center text-white">
              Notre mission
            </h2>
            <div className="glass-panel relative overflow-hidden p-10 md:p-16 border-accent-secondary/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,108,74,0.15),transparent_70%)] pointer-events-none" />
              <p className="text-xl md:text-2xl leading-relaxed text-center max-w-4xl mx-auto text-white relative z-10 font-medium">
                Assurer le déploiement, l&apos;exploitation et la maintenance des
                infrastructures numériques nationales de fibre optique, de
                diffusion et de centres de données, afin de garantir une
                connectivité accessible, sécurisée et souveraine pour tous les
                Maliens.
              </p>
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-3xl font-syne font-bold mb-8 text-center text-white">
              Notre vision
            </h2>
            <p className="text-lg md:text-xl text-text-muted text-center max-w-3xl mx-auto leading-relaxed">
              Devenir l&apos;acteur de référence en matière d&apos;infrastructures
              numériques en Afrique de l&apos;Ouest, en offrant des services de qualité
              mondiale tout en préservant la souveraineté digitale du Mali.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-3xl font-syne font-bold mb-12 text-center text-white">
              Nos valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Intégrité",
                  description:
                    "Agir avec transparence, honnêteté et éthique dans toutes nos actions.",
                },
                {
                  title: "Excellence",
                  description:
                    "Rechercher constamment la qualité et l'amélioration continue.",
                },
                {
                  title: "Engagement",
                  description:
                    "Être au service du Mali et des Maliens avec dévouement.",
                },
                {
                  title: "Innovation",
                  description:
                    "Anticiper les besoins et adopter les technologies de pointe.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="glass-panel p-8 text-center border-white/5 hover:border-accent-primary/30 transition-all group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-surface-elevated text-accent-primary rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-syne font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-syne font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{value.description.replace(/'/g, '&apos;')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
