import React from "react";
import Link from "next/link";
import { Icon, IconType } from "@/components/ui/Icon";

interface FeatureItem {
  icon: IconType;
  color: string;
  title: string;
  desc: string;
}

export function AboutPreview() {
  const features: FeatureItem[] = [
    {
      icon: "shield",
      color:
        "bg-primary/10 text-primary border-primary/20",
      title: "Sécurité des données",
      desc: "Protection des informations sensibles et hébergement sous juridiction malienne.",
    },
    {
      icon: "server",
      color:
        "bg-secondary/10 text-secondary border-secondary/20",
      title: "Infrastructure robuste",
      desc: "Réseau fibre optique national et data center redondant à haute disponibilité.",
    },
    {
      icon: "handshake",
      color: "bg-gray-100 text-gray-800 border-gray-200",
      title: "Partenariat public-privé",
      desc: "Collaboration avec tous les acteurs du secteur télécom en République du Mali.",
    },
  ];
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="glow-bg top-[20%] left-[-10%] bg-secondary/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal mb-16 text-center lg:text-left">
          <div className="badge badge-primary mb-4">À propos</div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-main leading-tight tracking-tight">
            La souveraineté numérique <br className="hidden md:block" />
            <span className="text-gradient">au service du Mali</span>
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
          {/* Left Column: Text & Features */}
          <div className="flex flex-col gap-8 text-left">
            <div className="space-y-6">
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                La{" "}
                <strong className="text-gray-900">
                  Société Malienne de Transmission et de Diffusion (SMTD-SA)
                </strong>{" "}
                est une entreprise d&apos;État créée en 2015 par décret
                présidentiel, placée sous la tutelle du Ministère de la
                Communication, de l&apos;Économie Numérique et de la
                Modernisation de l&apos;Administration.
              </p>

              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Notre mission stratégique est de planifier, déployer, exploiter
                et maintenir les infrastructures numériques nationales (fibre
                optique, centres de données, réseaux de télédiffusion analogique
                et numérique TNT) afin d&apos;assurer l&apos;indépendance
                technologique et d&apos;accompagner le développement
                socio-économique du Mali.
              </p>
            </div>

            <div className="grid gap-4 mt-2">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100/80 transition-colors group"
                >
                  <div
                    className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-105 transition-transform`}
                  >
                    <Icon name={item.icon} size={24} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-heading font-bold text-gray-900 text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/a-propos"
              className="btn btn-outline btn-lg self-start mt-4 group"
            >
              En savoir plus
              <Icon
                name="arrow-right"
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right Column: Visual / Map / Stats */}
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-[3rem] blur-2xl opacity-50 pointer-events-none" />
            <div className="glass-panel p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,181,58,0.05),transparent_50%)]" />

              <div className="relative space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner">
                  <span className="text-xs text-text-muted uppercase tracking-widest mb-2 block font-medium">
                    Structure
                  </span>
                  <div className="text-3xl font-heading font-bold text-gray-900">
                    Société d&apos;État
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner group hover:border-primary/30 transition-colors">
                    <span className="text-xs text-text-muted uppercase tracking-widest mb-2 block font-medium">
                      Création
                    </span>
                    <div className="text-2xl font-heading font-bold text-primary">
                      2015
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner group hover:border-secondary/30 transition-colors">
                    <span className="text-xs text-text-muted uppercase tracking-widest mb-2 block font-medium">
                      Activité
                    </span>
                    <div className="text-2xl font-heading font-bold text-secondary">
                      Télécom
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner">
                  <span className="text-xs text-text-muted uppercase tracking-widest mb-2 block font-medium">
                    Tutelle
                  </span>
                  <div className="text-lg font-heading font-semibold text-gray-900">
                    Min. Communication & Numérique
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
