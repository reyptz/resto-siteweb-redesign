import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site web de la Société Malienne de Transmission et de Diffusion.",
};

export default function LegalNoticePage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="badge badge-secondary mb-6 mx-auto">Légal</div>
          <h1 className="text-4xl sm:text-5xl font-syne font-extrabold mb-6 tracking-tight text-white">
            Mentions <span className="text-gradient-warm">légales</span>
          </h1>
        </div>

        <div className="glass-panel p-8 md:p-12 border-white/5 space-y-10 reveal">
          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">Éditeur du site</h2>
            <div className="text-text-muted leading-relaxed space-y-2">
              <p>
                <strong className="text-white">
                  Société Malienne de Transmission et de Diffusion (SMTD-SA)
                </strong>
              </p>
              <p>Route de l&apos;Aéroport, en face de la Météo</p>
              <p>Bamako, Mali</p>
              <p>Email : info@smtd.ml</p>
              <p>Téléphone : +223 20 70 81 71</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">
              Directeur de la publication
            </h2>
            <p className="text-text-muted leading-relaxed">Directeur Général de la SMTD-SA</p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">Hébergement</h2>
            <p className="text-text-muted leading-relaxed">
              Ce site est hébergé sur les infrastructures souveraines de la SMTD-SA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">
              Propriété intellectuelle
            </h2>
            <p className="text-text-muted leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, illustrations,
              logos, etc.) est protégé par le droit d&apos;auteur et le droit des
              marques. Toute reproduction, représentation, modification,
              publication ou adaptation de tout ou partie des éléments du site
              est interdite sans autorisation écrite préalable de la SMTD-SA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">Responsabilité</h2>
            <p className="text-text-muted leading-relaxed">
              La SMTD-SA s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur ce site. Toutefois, la SMTD-SA ne peut
              garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des
              informations mises à disposition sur ce site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
