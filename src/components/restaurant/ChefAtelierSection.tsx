"use client";

import React from "react";

export default function ChefAtelierSection() {
  return (
    <section className="space-y-10 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Storytelling */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <p className="eyebrow-label">Philosophie & Terroirs du Mali</p>

          <h2 className="text-editorial-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            La Richesse Culinaire du Mali, <br />
            Sublimée par le Geste & La Précision.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Installée à Bamako, la Maison Velours réinvente la gastronomie malienne et ouest-africaine en valorisant les ingrédients ancestraux : céréales millénaires comme le Fonio royal, poissons nobles du fleuve Niger, et fruits sauvages de la brousse et des vergers de Sikasso.
          </p>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Notre brigade travaille en partenariat direct et équitable avec les maraîchers de Baguinéda et Kati, les pêcheurs traditionnels de Koulikoro et les cueilleurs de miel sauvage du Mandé.
          </p>

          {/* Structured Editorial Manifest List */}
          <div className="pt-4 border-t border-zinc-800 space-y-4">
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-zinc-800/80">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Pêche & Maraîchage Durable de la Vallée du Niger
                </span>
                <span className="text-xs text-zinc-400">
                  Arrivages quotidiens de Capitaine frais et légumes biologiques de Baguinéda.
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 shrink-0">01</span>
            </div>

            <div className="flex items-start justify-between gap-4 pb-3 border-b border-zinc-800/80">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Valorisation du Fonio & des Céréales du Sahel
                </span>
                <span className="text-xs text-zinc-400">
                  Techniques de haute pâtisserie appliquées aux farines pures de Fonio et mil perlé.
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 shrink-0">02</span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Hospitalité Malienne & Service au Guéridon
                </span>
                <span className="text-xs text-zinc-400">
                  L&apos;art de l&apos;accueil chaleureux de Bamako allié à l&apos;exigence de la haute table.
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 shrink-0">03</span>
            </div>
          </div>
        </div>

        {/* Right Column: Solid Architectural Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-zinc-800 bg-[#121216] p-8 sm:p-10 space-y-6 shadow-2xl">
            <p className="text-xs uppercase tracking-wider font-bold text-zinc-400">
              Maison de Haute Table à Bamako
            </p>

            <blockquote className="text-editorial-serif text-xl sm:text-2xl text-white font-normal leading-relaxed border-l-2 border-amber-400 pl-4">
              « Le Mali possède des trésors gustatifs uniques au monde. Notre mission est de leur donner la place d&apos;honneur qu&apos;ils méritent sur la scène gastronomique. »
            </blockquote>

            <div className="pt-2 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-amber-400 font-serif text-sm">
                MV
              </div>
              <div>
                <div className="text-sm font-bold text-white">Chefs de la Maison Velours</div>
                <div className="text-xs text-zinc-400">Direction Culinaire & Pâtisserie · Bamako</div>
              </div>
            </div>

            {/* Micro stats table */}
            <div className="pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-amber-300">100%</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Produits du Terroir</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-amber-300">8+</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Régions du Mali</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-amber-300">ACI 2000</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Adresse de Prestige</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
