"use client";

import React, { useState } from "react";
import { Check, ArrowRight, RotateCcw } from "lucide-react";

interface OptionItem {
  id: string;
  name: string;
  desc: string;
  priceDelta: number;
  categoryCode: string;
}

const BASES: OptionItem[] = [
  { id: "mango", name: "Mangue Kent de Sikasso", desc: "Infusion gousse et pulpe mûrie au soleil", priceDelta: 0, categoryCode: "B1" },
  { id: "chocolate", name: "Chocolat Noir Grand Cru", desc: "Cacao 72% pur origine d'Afrique", priceDelta: 1500, categoryCode: "B2" },
  { id: "dege", name: "Crème de Dégé & Yaourt", desc: "Douceur lactée et perles de mil délicates", priceDelta: 2000, categoryCode: "B3" },
  { id: "baobab", name: "Pulpe de Baobab (Zira)", desc: "Fraîcheur acidulée et texture soyeuse", priceDelta: 2500, categoryCode: "B4" },
];

const COULIS: OptionItem[] = [
  { id: "bissap", name: "Coulis d'Hibiscus & Bissap", desc: "Acidité noble de Koutiala", priceDelta: 0, categoryCode: "C1" },
  { id: "zaban", name: "Nectar de Zaban du Mandé", desc: "Notes sauvages et vivacité aromatique", priceDelta: 1500, categoryCode: "C2" },
  { id: "caramel-karite", name: "Caramel au Sel de Taoudénit", desc: "Caramel chaud au beurre de Karité", priceDelta: 2000, categoryCode: "C3" },
  { id: "miel", name: "Miel Boisé & Gingembre", desc: "Miel sauvage des monts du Mandé", priceDelta: 1800, categoryCode: "C4" },
];

const CRUNCH: OptionItem[] = [
  { id: "peanut", name: "Arachides de Kayes", desc: "Caramélisées au sucre brut de canne", priceDelta: 0, categoryCode: "T1" },
  { id: "fonio", name: "Croustillant Fonio Doré", desc: "Céréale millénaire torréfiée au miel", priceDelta: 1200, categoryCode: "T2" },
  { id: "sesame", name: "Tuile Dentelle au Sésame", desc: "Croustillant délicat au beurre doré", priceDelta: 1500, categoryCode: "T3" },
  { id: "pearls", name: "Perles Cacao Craquantes", desc: "Cœur biscuit sablé et cacao noir", priceDelta: 1000, categoryCode: "T4" },
];

const FINISHES: OptionItem[] = [
  { id: "gold", name: "Feuilles d'Or Pur 24K", desc: "Éclat d'orfèvre du Mandé", priceDelta: 3000, categoryCode: "F1" },
  { id: "sel-taoudenit", name: "Sel Gemme de Taoudénit", desc: "Contraste salin pur du Nord", priceDelta: 800, categoryCode: "F2" },
  { id: "zest-orange", name: "Zestes d'Oranges de Kati", desc: "Macération lente au sirop parfumé", priceDelta: 1500, categoryCode: "F3" },
  { id: "baobab-dust", name: "Voile de Poudre de Zira", desc: "Subtilité aromatique de brousse", priceDelta: 1000, categoryCode: "F4" },
];

interface SignatureDishBuilderProps {
  onOpenReservation?: () => void;
}

export default function SignatureDishBuilder({ onOpenReservation }: SignatureDishBuilderProps) {
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [selectedCoulis, setSelectedCoulis] = useState(COULIS[0]);
  const [selectedCrunch, setSelectedCrunch] = useState(CRUNCH[0]);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const basePrice = 14000;
  const totalPrice =
    basePrice +
    selectedBase.priceDelta +
    selectedCoulis.priceDelta +
    selectedCrunch.priceDelta +
    selectedFinish.priceDelta;

  const handleAddToCart = () => {
    setAddedNotice(
      `Votre création personnalisée (${selectedBase.name} et ${selectedCoulis.name}) a été enregistrée pour votre service.`
    );
    setTimeout(() => setAddedNotice(null), 4000);
  };

  const handleReset = () => {
    setSelectedBase(BASES[0]);
    setSelectedCoulis(COULIS[0]);
    setSelectedCrunch(CRUNCH[0]);
    setSelectedFinish(FINISHES[0]);
  };

  return (
    <section className="space-y-8 py-6">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <p className="eyebrow-label">Atelier Personnalisé</p>
        <h2 className="text-editorial-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Composez Votre Création
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
          Associez les saveurs emblématiques du Mali : base glacée veloutée, coulis de terroir, croquants de céréales sahéliennes et finition d&apos;orfèvre.
        </p>
      </div>

      {/* Builder Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 4-step selection panels (7 cols) */}
        <div className="lg:col-span-7 space-y-4 min-w-0">
          {/* Step 1: Base */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121216] border border-zinc-800 space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-[11px]">
                <span className="w-5 h-5 rounded bg-zinc-800 text-amber-300 font-bold flex items-center justify-center text-[10px]">
                  1
                </span>
                Base Glacée
              </span>
              <span className="text-amber-300 font-semibold text-xs truncate max-w-[180px]">{selectedBase.name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BASES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBase(b)}
                  className={`p-3 rounded-xl border text-left transition-colors flex items-start gap-2.5 cursor-pointer min-w-0 ${
                    selectedBase.id === b.id
                      ? "bg-zinc-800 border-amber-400 text-white"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60"
                  }`}
                >
                  <span className="w-6 h-6 rounded bg-zinc-800 text-amber-400 font-mono text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {b.categoryCode}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white truncate">{b.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 leading-tight">{b.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Coulis */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121216] border border-zinc-800 space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-[11px]">
                <span className="w-5 h-5 rounded bg-zinc-800 text-amber-300 font-bold flex items-center justify-center text-[10px]">
                  2
                </span>
                Coulis Chaud
              </span>
              <span className="text-amber-300 font-semibold text-xs truncate max-w-[180px]">{selectedCoulis.name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COULIS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCoulis(c)}
                  className={`p-3 rounded-xl border text-left transition-colors flex items-start gap-2.5 cursor-pointer min-w-0 ${
                    selectedCoulis.id === c.id
                      ? "bg-zinc-800 border-amber-400 text-white"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60"
                  }`}
                >
                  <span className="w-6 h-6 rounded bg-zinc-800 text-amber-400 font-mono text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {c.categoryCode}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white truncate">{c.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 leading-tight">{c.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Crunch */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121216] border border-zinc-800 space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-[11px]">
                <span className="w-5 h-5 rounded bg-zinc-800 text-amber-300 font-bold flex items-center justify-center text-[10px]">
                  3
                </span>
                Croustillants Sahéliens
              </span>
              <span className="text-amber-300 font-semibold text-xs truncate max-w-[180px]">{selectedCrunch.name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CRUNCH.map((cr) => (
                <button
                  key={cr.id}
                  onClick={() => setSelectedCrunch(cr)}
                  className={`p-3 rounded-xl border text-left transition-colors flex items-start gap-2.5 cursor-pointer min-w-0 ${
                    selectedCrunch.id === cr.id
                      ? "bg-zinc-800 border-amber-400 text-white"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60"
                  }`}
                >
                  <span className="w-6 h-6 rounded bg-zinc-800 text-amber-400 font-mono text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {cr.categoryCode}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white truncate">{cr.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 leading-tight">{cr.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Finish */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121216] border border-zinc-800 space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-[11px]">
                <span className="w-5 h-5 rounded bg-zinc-800 text-amber-300 font-bold flex items-center justify-center text-[10px]">
                  4
                </span>
                Finition d&apos;Orfèvre
              </span>
              <span className="text-amber-300 font-semibold text-xs truncate max-w-[180px]">{selectedFinish.name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FINISHES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFinish(f)}
                  className={`p-3 rounded-xl border text-left transition-colors flex items-start gap-2.5 cursor-pointer min-w-0 ${
                    selectedFinish.id === f.id
                      ? "bg-zinc-800 border-amber-400 text-white"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60"
                  }`}
                >
                  <span className="w-6 h-6 rounded bg-zinc-800 text-amber-400 font-mono text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {f.categoryCode}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white truncate">{f.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 leading-tight">{f.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Live Composition Ticket (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 space-y-4 min-w-0">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#121216] border border-zinc-800 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2.5 border-b border-zinc-800">
              <div>
                <p className="eyebrow-label text-[9px]">Récapitulatif Dégustation</p>
                <h3 className="text-editorial-serif text-lg sm:text-xl font-bold text-white">
                  Création Personnalisée
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Réinitialiser"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Visual preview representation */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
              <div className="text-xs font-serif font-bold text-amber-300 truncate">
                {selectedBase.name} & {selectedCoulis.name}
              </div>
              <div className="text-[11px] text-zinc-400 font-normal truncate">
                Avec {selectedCrunch.name} · Finition {selectedFinish.name}
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between pb-1 border-b border-zinc-800/80">
                <span className="truncate pr-2">Base : {selectedBase.name}</span>
                <span className="text-white font-medium shrink-0">Inclus</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-zinc-800/80">
                <span className="truncate pr-2">Coulis : {selectedCoulis.name}</span>
                <span className="text-white font-medium shrink-0">+{selectedCoulis.priceDelta.toLocaleString("fr-FR")} FCFA</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-zinc-800/80">
                <span className="truncate pr-2">Croquant : {selectedCrunch.name}</span>
                <span className="text-white font-medium shrink-0">+{selectedCrunch.priceDelta.toLocaleString("fr-FR")} FCFA</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-zinc-800/80">
                <span className="truncate pr-2">Finition : {selectedFinish.name}</span>
                <span className="text-white font-medium shrink-0">+{selectedFinish.priceDelta.toLocaleString("fr-FR")} FCFA</span>
              </div>
            </div>

            {/* Total price and buttons */}
            <div className="pt-2 border-t border-zinc-800 space-y-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Total Création</span>
                <div className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                  {totalPrice.toLocaleString("fr-FR")} FCFA
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors cursor-pointer"
                >
                  Mémoriser pour mon dîner
                </button>

                <button
                  onClick={onOpenReservation}
                  className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Réserver à Bamako</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {addedNotice && (
                <div className="p-2 rounded-lg bg-zinc-900 border border-amber-400 text-amber-300 text-xs font-medium flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{addedNotice}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
