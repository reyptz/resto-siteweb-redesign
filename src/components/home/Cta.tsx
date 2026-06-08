import React from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/data/contact";
import { Icon } from "@/components/ui/Icon";

export function Cta() {
  return (
    <section className="relative py-24 border-y border-white/5 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-bg-dark" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal flex flex-col gap-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-elevated border border-white/10 shadow-xl mx-auto mb-2 text-accent-primary">
          <Icon name="sparkles" size={32} />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight tracking-tight">
          Prêt à digitaliser <br />
          <span className="text-gradient-warm">votre entreprise ?</span>
        </h2>

        <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Nos conseillers techniques et commerciaux sont disponibles pour
          étudier votre projet de connectivité par fibre optique,
          d&apos;hébergement cloud dans notre Data Center, ou de couverture TNT
          nationale.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-6">
          <Link
            href="/contact"
            className="btn btn-primary btn-lg w-full sm:w-auto min-w-[200px]"
          >
            Nous contacter
          </Link>
          <a
            href={`mailto:${CONTACT_INFO.emails[0].value}`}
            className="btn btn-outline btn-lg w-full sm:w-auto min-w-[200px] group"
          >
            Envoyer un email
            <Icon
              name="arrow-right"
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
