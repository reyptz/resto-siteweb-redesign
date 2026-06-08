import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire et la gouvernance de la Société Malienne de Transmission et de Diffusion.",
};

export default function AboutPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
          <div className="badge badge-primary mb-6 mx-auto">
            La SMTD-SA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 text-text-main tracking-tight">
            À propos de la <span className="text-gradient-warm">SMTD-SA</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Une entreprise d&apos;État au service de la souveraineté numérique du Mali.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start reveal">
          <div className="space-y-6">
            <h2 className="text-3xl font-syne font-bold mb-8">Notre histoire</h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Créée en 2015, la Société Malienne de Transmission et de Diffusion (SMTD-SA) est une entreprise publique sous la tutelle du Ministère de la Communication, de l&apos;Économie numérique et de la Modernisation de l&apos;Administration.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Depuis sa création, la SMTD-SA a pour mission de développer, exploiter et maintenir les infrastructures numériques nationales afin de garantir l&apos;accès à des services de qualité pour tous les Maliens.
            </p>
          </div>
          
          <div className="glass-panel p-10 border-accent-secondary/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,192,123,0.1),transparent_50%)] pointer-events-none" />
            <h3 className="text-2xl font-syne font-bold mb-8 text-accent-secondary">
              Chiffres & Faits clés
            </h3>
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-text-muted">Année de création</span>
                <span className="text-2xl font-bold text-white">2015</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-text-muted">Statut juridique</span>
                <span className="text-lg font-semibold text-accent-primary">Entreprise d&apos;État</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-text-muted">Tutelle</span>
                <span className="text-base font-semibold text-white">Ministère de la Communication</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Siège social</span>
                <span className="text-lg font-semibold text-white">Bamako, Mali</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 lg:p-16 border-accent-primary/20 text-center relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,108,74,0.1),transparent_50%)] pointer-events-none" />
          <h2 className="text-3xl font-syne font-bold mb-8 text-white relative z-10">Gouvernance</h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed relative z-10">
            La SMTD-SA est gouvernée par un Conseil d&apos;Administration et dirigée par un Directeur Général, conformément aux dispositions légales et réglementaires en vigueur en République du Mali.
          </p>
        </div>
      </div>
    </div>
  );
}
