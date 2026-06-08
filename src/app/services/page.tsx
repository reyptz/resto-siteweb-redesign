import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Découvrez l'ensemble des services proposés par la SMTD-SA : fibre optique, data center, TNT, call center et plus.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Réseau de Fibre Optique",
      description:
        "Réseau national de fibre optique de plus de 3 000 kilomètres couvrant l'ensemble du territoire malien, offrant une connectivité haut débit fiable et résiliente pour les institutions publiques, les entreprises et les opérateurs de télécommunications.",
      features: [
        "Couverture nationale",
        "Débit élevé",
        "Résilience réseau",
        "Support 24/7",
      ],
    },
    {
      title: "Centre de Données (Data Center)",
      description:
        "Data center souverain hébergé sur le territoire malien, offrant des solutions d'hébergement sécurisées, redondantes et certifiées, avec une garantie de disponibilité 24 heures sur 24 et 7 jours sur 7.",
      features: [
        "Souveraineté des données",
        "Haute disponibilité",
        "Sécurité physique et logique",
        "Sauvegarde régulière",
      ],
    },
    {
      title: "Télévision Numérique Terrestre (TNT)",
      description:
        "Diffusion de la télévision numérique terrestre sur l'ensemble du territoire national, avec une qualité de signal optimale et une large palette de chaînes de télévision gratuites et payantes.",
      features: [
        "Couverture nationale",
        "Qualité HD",
        "Multiples chaînes",
        "Compatibilité DVB-T2",
      ],
    },
    {
      title: "Call Center et Support Technique",
      description:
        "Service clientèle et support technique disponibles 24 heures sur 24 et 7 jours sur 7 pour répondre à toutes vos demandes, résoudre les incidents et assister les utilisateurs.",
      features: [
        "Disponibilité 24/7",
        "Support multi-canal",
        "SLA garantis",
        "Techniciens qualifiés",
      ],
    },
    {
      title: "Points Hauts et Infrastructures",
      description:
        "Infrastructures de télécommunication de haute altitude pour une couverture maximale du territoire, incluant des sites de transmission et des équipements de réception et d'émission.",
      features: [
        "Couverture étendue",
        "Maintenance régulière",
        "Équipements modernes",
        "Énergie redondante",
      ],
    },
    {
      title: "Solutions de Transmission",
      description:
        "Solutions complètes de transmission de données et de voix pour les entreprises et les administrations publiques, adaptées à vos besoins spécifiques.",
      features: [
        "Solutions sur mesure",
        "Haute fiabilité",
        "Sécurité des transmissions",
        "Intégration système",
      ],
    },
  ];
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
          <div className="badge badge-primary mb-6 mx-auto">
            Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 text-text-main tracking-tight">
            Nos <span className="text-gradient-warm">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Solutions complètes et sécurisées pour les institutions publiques et les entreprises privées.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center reveal ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div
                className={`p-10 rounded-3xl border ${index % 2 === 0 ? "bg-surface-elevated/80 border-accent-primary/20" : "glass-panel border-white/5"}`}
              >
                <div
                  className={`w-16 h-16 mb-8 rounded-2xl flex items-center justify-center shadow-lg ${index % 2 === 0 ? "bg-accent-primary/20 text-accent-primary border border-accent-primary/30" : "bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30"}`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7h16M4 12h16M4 17h16"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-syne font-bold mb-6 text-white">{service.title.replace(/'/g, '&apos;')}</h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {service.description.replace(/'/g, '&apos;')}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${index % 2 === 0 ? "bg-accent-primary/20 text-accent-primary" : "bg-accent-secondary/20 text-accent-secondary"}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`aspect-video rounded-3xl flex items-center justify-center border border-white/5 relative overflow-hidden group ${index % 2 === 0 ? "bg-surface-elevated" : "bg-surface"}`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${index % 2 === 0 ? "bg-[radial-gradient(circle_at_center,rgba(217,108,74,1)_0%,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,rgba(229,192,123,1)_0%,transparent_70%)]"}`} />
                <div className="text-center text-white/30 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 drop-shadow-xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <p className="text-sm font-mono uppercase tracking-widest text-white/50">Illustration</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
