import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Actualités et événements",
  description:
    "Retrouvez toutes les actualités et les événements de la Société Malienne de Transmission et de Diffusion.",
};

export default function NewsPage() {
  const news = [
    {
      date: "27 Juin 2024",
      title: "La SMTD-SA et la SOGEB signent une convention de partenariat",
      excerpt:
        "La Société guinéenne de Gestion du Backbone (SOGEB) a fait le déplacement de Bamako pour opérer une nouvelle ère de partenariat fécond avec sa sœur malienne, la SMTD-SA.",
    },
    {
      date: "20 Juin 2024",
      title:
        "Les ministres chargés du numérique des États membres de l'AES visitent la SMTD-SA",
      excerpt:
        "Ce mercredi 20 juin 2024, la SMTD-SA a reçu des visiteurs de marque : les ministres chargés du numérique des États membres de l'AES.",
    },
    {
      date: "10 Juin 2024",
      title:
        "La SMTD-SA, actrice et partenaire de la Semaine du Numérique 2024 du Mali",
      excerpt:
        "Pendant les trois jours de la Semaine du Numérique au CICB, notre stand s'est dressé majestueusement pour accueillir les visiteurs.",
    },
  ];

  return (
    <div className="bg-bg-main min-h-screen text-text-main pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(118,159,205,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="badge badge-primary mb-6 mx-auto">
            Actualités
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold mb-6 tracking-tight text-text-main">
            Actualités et <span className="text-gradient-warm">événements</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Retrouvez toute l&apos;actualité de la SMTD-SA et nos événements à
            venir.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {news.map((item, index) => (
            <article
              key={index}
              className="glass-panel p-8 md:p-10 border-brand-200 hover:border-primary/30 transition-all group reveal"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                  {item.date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-syne font-bold mb-4 text-text-main group-hover:text-primary transition-colors">
                <Link href="#">
                  {item.title.replace(/'/g, '&apos;')}
                </Link>
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed text-base">
                {item.excerpt.replace(/'/g, '&apos;')}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors group/link"
              >
                Lire la suite
                <Icon name="arrow-right" size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
