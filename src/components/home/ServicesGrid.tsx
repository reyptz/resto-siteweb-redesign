import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { Icon } from "@/components/ui/Icon";

export const ServicesGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="glow-bg top-[10%] right-[-10%] bg-accent-primary/5 blur-[120px]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="badge badge-secondary mb-4">
            Services & Expertises
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-text-main mt-2 mb-6 tracking-tight">
            Des solutions sur-mesure pour <br />
            <span className="text-gradient-warm">
              votre croissance numérique
            </span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            SMTD-SA propose des solutions complètes de télécommunications et de
            diffusion audiovisuelle de pointe en République du Mali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="tech-card group p-8 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-surface-elevated border border-white/5 shadow-inner group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-all duration-300">
                <div
                  className={`text-2xl ${service.colorClass} group-hover:text-accent-primary transition-colors`}
                >
                  <Icon name={service.icon} size={32} />
                </div>
              </div>
              <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-accent-secondary transition-colors">
                {service.name}
              </h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-surface-elevated/80 border border-white/5 text-xs rounded-md text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-accent-secondary text-sm font-medium hover:text-accent-secondary-hover transition-colors group/link"
                >
                  Explorer le service
                  <Icon
                    name="arrow-right"
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}

          <div
            className="tech-card reveal relative overflow-hidden p-8 flex flex-col justify-center items-center text-center shadow-[0_0_50px_rgba(217,108,74,0.1)] border-accent-primary/20"
            style={{ transitionDelay: `${services.length * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-surface pointer-events-none" />
            <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-accent-primary/20 text-accent-secondary backdrop-blur-sm border border-accent-secondary/30">
              <Icon name="sparkles" size={32} />
            </div>
            <h3 className="relative z-10 text-2xl font-syne font-bold text-white mb-3">
              Besoin d&apos;un devis ?
            </h3>
            <p className="relative z-10 text-sm text-text-muted mb-8 max-w-xs mx-auto">
              Utilisez notre simulateur interactif pour estimer vos coûts de
              fibre optique dédiée ou d&apos;hébergement en temps réel.
            </p>
            <Link
              href="/#estimator"
              className="relative z-10 btn btn-primary btn-md w-full"
            >
              Simuler maintenant{" "}
              <Icon name="arrow-right" size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
