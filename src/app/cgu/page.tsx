import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site web de la Société Malienne de Transmission et de Diffusion.",
};

export default function TermsPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="badge badge-secondary mb-6 mx-auto">CGU</div>
          <h1 className="text-4xl sm:text-5xl font-syne font-extrabold mb-6 tracking-tight text-white">
            Conditions générales <span className="text-gradient-warm">d&apos;utilisation</span>
          </h1>
        </div>

        <div className="glass-panel p-8 md:p-12 border-white/5 space-y-10 reveal">
          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">
              Acceptation des conditions
            </h2>
            <p className="text-text-muted leading-relaxed">
              En accédant et en utilisant ce site web, vous acceptez sans
              réserve les présentes conditions générales d&apos;utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">
              Utilisation du site
            </h2>
            <p className="text-text-muted leading-relaxed">
              Ce site web est destiné à fournir des informations sur les
              services de la SMTD-SA. Vous vous engagez à utiliser ce site
              conformément aux lois et réglementations applicables et à ne pas
              porter atteinte aux droits de tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">Contenu du site</h2>
            <p className="text-text-muted leading-relaxed">
              La SMTD-SA s&apos;efforce d&apos;assurer l&apos;exactitude des informations
              diffusées sur ce site, mais ne peut garantir l&apos;absence d&apos;erreurs
              ou d&apos;omissions. Le contenu est susceptible d&apos;être modifié sans
              préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">
              Limitation de responsabilité
            </h2>
            <p className="text-text-muted leading-relaxed">
              La SMTD-SA ne pourra être tenue responsable des dommages directs
              ou indirects résultant de l&apos;utilisation de ce site web ou de
              l&apos;impossibilité d&apos;y accéder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-accent-secondary">
              Modification des conditions
            </h2>
            <p className="text-text-muted leading-relaxed">
              La SMTD-SA se réserve le droit de modifier les présentes
              conditions générales d&apos;utilisation à tout moment. Les
              modifications entreront en vigueur dès leur publication sur le
              site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
