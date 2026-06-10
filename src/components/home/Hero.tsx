import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="hero relative overflow-hidden bg-[#0a1628] min-h-[90vh] flex items-center pt-8 pb-16">
      {/* Visual background layers */}
      <div className="hero-pattern absolute inset-0 opacity-20 pointer-events-none" />
      <div className="hero-noise absolute inset-0 opacity-[0.02] pointer-events-none" />
      <div className="hero-orb orb-1 absolute w-96 h-96 rounded-full bg-[#1e3a5f]/25 blur-[100px] -top-20 -left-20 pointer-events-none" />
      <div className="hero-orb orb-2 absolute w-96 h-96 rounded-full bg-[#c9a227]/15 blur-[120px] bottom-10 right-10 pointer-events-none" />
      <div className="hero-orb orb-3 absolute w-96 h-96 rounded-full bg-[#3a6ea5]/10 blur-[100px] top-1/2 left-1/3 pointer-events-none" />
      <div className="hero-orb orb-4 absolute w-80 h-80 rounded-full bg-[#e04020]/5 blur-[80px] top-20 right-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="hero-pill inline-flex items-center gap-2 self-start bg-[#3a6ea5]/10 border border-[#3a6ea5]/20 text-[#3a6ea5] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <span className="pill-dot w-2 h-2 rounded-full bg-[#3a6ea5] animate-pulse" />
              Réseau opérationnel — 24/7/365
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight tracking-tight">
              Infrastructure numérique <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a6ea5] via-[#f5d24f] to-[#e04020]">
                souveraine
              </span>{" "}
              pour le Mali
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Fibre optique dédiée, hébergement data center, diffusion TNT et
              services de télécommunication de niveau opérateur pour les
              entreprises et institutions maliennes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/#estimator"
                className="btn btn-primary btn-lg w-full sm:w-auto"
              >
                Estimer mon projet
                <Icon name="chevron-right" size={18} className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="btn btn-outline btn-lg w-full sm:w-auto"
              >
                Découvrir les services
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="text-left">
                <div className="text-2xl font-bold text-white">2015</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Création
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  État
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">Sécurisé</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Data Center
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column (Visual) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a6ea5]/20 via-transparent to-[#c9a227]/20 rounded-full blur-3xl opacity-50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Orbit 1 */}
                  <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#3a6ea5] shadow-lg shadow-[#3a6ea5]/30" />
                  </div>
                  {/* Orbit 2 */}
                  <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]">
                    <div className="absolute bottom-4 -right-2 w-5 h-5 rounded-full bg-[#f5d24f] shadow-lg shadow-[#f5d24f]/30" />
                  </div>
                  {/* Orbit 3 */}
                  <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]">
                    <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rounded-full bg-[#e04020] shadow-lg shadow-[#e04020]/30" />
                  </div>

                  {/* Center Core */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#1e3a5f]/40 to-[#0a1628] border border-[#3a6ea5]/20 flex items-center justify-center">
                    <Icon name="globe" size={64} className="text-[#3a6ea5]" />
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
