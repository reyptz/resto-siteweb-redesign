"use client";

import React, { useState } from "react";

interface LiquidSensoryBannerProps {
  onOpenReservation?: () => void;
}

export default function LiquidSensoryBanner({ onOpenReservation }: LiquidSensoryBannerProps) {
  const [temperature, setTemperature] = useState(42);

  return (
    <section className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#121216] p-8 sm:p-12 lg:p-14 shadow-2xl">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Story */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <p className="eyebrow-label">Travail des Textures & Températures</p>

          <h2 className="text-editorial-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Le Service au Guéridon à Bamako : <br />
            Chocolat Grand Cru & Miel Boisé du Mandé.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
            Nos créations sont finalisées en salle par notre maître d&apos;hôtel avec un nappage minute de chocolat noir pur et caramel au beurre de Karité raffiné tiédi, créant un contraste thermique et aromatique exceptionnel avec nos glaces artisanales.
          </p>

          {/* Temperature Control Module */}
          <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 max-w-lg space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white uppercase tracking-wider">
                Température de Nappage
              </span>
              <span className="font-mono text-amber-300 font-bold text-sm">
                {temperature}°C (Tempéré à cœur)
              </span>
            </div>

            <input
              type="range"
              min="36"
              max="52"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />

            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>36°C : Onctuosité Soyeuse</span>
              <span className="text-amber-300 font-semibold">42°C : Point d&apos;Équilibre Maison Velours</span>
              <span>52°C : Nappage Fluide</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Réserver le Service au Guéridon
            </button>
          </div>
        </div>

        {/* Right Feature Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 space-y-5">
            <p className="text-xs uppercase tracking-wider font-bold text-zinc-400">
              Terroirs d&apos;Exception du Mali
            </p>

            <h3 className="text-editorial-serif text-xl sm:text-2xl font-bold text-white">
              Mangues de Sikasso & Sel de Taoudénit
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Nous collaborons directement avec les vergers de Sikasso, les récoltants de miel des forêts du Mandé et les coopératives maraîchères de Baguinéda. Chaque matière première est sublimée sans conservateurs artificiels.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-lg bg-[#121216] border border-zinc-800">
                <div className="font-bold text-amber-300 font-serif text-lg">100%</div>
                <div className="text-[11px] text-zinc-400">Terroirs & Producteurs Locaux</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#121216] border border-zinc-800">
                <div className="font-bold text-amber-300 font-serif text-lg">0%</div>
                <div className="text-[11px] text-zinc-400">Additif Chimique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
