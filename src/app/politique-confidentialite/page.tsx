import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site web de la Société Malienne de Transmission et de Diffusion.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bg-main min-h-screen text-text-main pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(118,159,205,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="badge badge-primary mb-6 mx-auto">Confidentialité</div>
          <h1 className="text-4xl sm:text-5xl font-syne font-extrabold mb-6 tracking-tight text-text-main">
            Politique de <span className="text-gradient-warm">confidentialité</span>
          </h1>
        </div>

        <div className="glass-panel p-8 md:p-12 border-brand-200 space-y-10 reveal shadow-sm">
          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-primary">Introduction</h2>
            <p className="text-text-muted leading-relaxed">
              La Société Malienne de Transmission et de Diffusion (SMTD-SA)
              attache une grande importance à la protection de vos données
              personnelles. Cette politique de confidentialité décrit comment
              nous collectons, utilisons et protégeons vos informations lorsque
              vous visitez notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-primary">
              Collecte des données
            </h2>
            <p className="text-text-muted leading-relaxed">
              Nous collectons les informations que vous nous fournissez
              volontairement via nos formulaires de contact : nom, prénom,
              adresse email, numéro de téléphone et message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-primary">
              Utilisation des données
            </h2>
            <p className="text-text-muted leading-relaxed">
              Les données collectées sont utilisées exclusivement pour répondre
              à vos demandes, traiter vos requêtes et vous fournir les
              informations nécessaires sur nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-primary">
              Protection des données
            </h2>
            <p className="text-text-muted leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et
              organisationnelles appropriées pour protéger vos données
              personnelles contre tout accès non autorisé, modification,
              divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-syne font-bold mb-4 text-primary">Vos droits</h2>
            <p className="text-text-muted leading-relaxed">
              Conformément à la réglementation applicable, vous disposez d&apos;un
              droit d&apos;accès, de rectification, d&apos;effacement et de limitation du
              traitement de vos données personnelles. Pour exercer ces droits,
              veuillez nous contacter à <a href="mailto:info@smtd.ml" className="text-primary font-semibold hover:text-primary-hover hover:underline">info@smtd.ml</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
