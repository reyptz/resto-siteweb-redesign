"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Check } from "lucide-react";

export interface FlavorCreation {
  id: string;
  name: string;
  subtitle: string;
  bgWord: string;
  description: string;
  price: string;
  image: string;
  notes: string[];
  pairing: string;
  chefTag: string;
  sensorGauges: { label: string; value: number }[];
}

const CREATIONS: FlavorCreation[] = [
  {
    id: "ruby-velvet",
    name: "Ruby Velvet Swirl",
    subtitle: "Mangues Kent de Sikasso & Nectar de Bissap Pourpre",
    bgWord: "Sikasso - Bissap",
    description:
      "Ganache onctueuse au chocolat noir grand cru et fèves d'Afrique de l'Ouest, compotée de mangues Kent de Sikasso mûries à point, miroir de Bissap pourpre de Koutiala et fines paillettes d'or pur 24 carats.",
    price: "15 000 FCFA",
    image: "/images/creations/ruby_velvet_swirl.jpg",
    notes: ["Mangue de Sikasso", "Bissap de Koutiala", "Cacao Pur", "Or 24K"],
    pairing: "Accord : Infusion glacée de Kinkeliba doré & fleurs d'hibiscus",
    chefTag: "Création Signature",
    sensorGauges: [
      { label: "Intensité Cacao", value: 92 },
      { label: "Fraîcheur Fruitée", value: 96 },
      { label: "Acidité Noble", value: 88 },
      { label: "Longueur en Bouche", value: 98 },
    ],
  },
  {
    id: "violet-bloom",
    name: "Sahel Gold Swirl",
    subtitle: "Nectar de Zaban Sauvage & Miel Boisé du Mandé",
    bgWord: "Zaban - Mandé",
    description:
      "Pulpe acidulée de Zaban sauvage cueillie dans les monts du Mandé, crème veloutée glacée au miel de brousse et biscuit croustillant au Fonio doré torréfié.",
    price: "16 000 FCFA",
    image: "/images/creations/violet_bloom_fig.jpg",
    notes: ["Zaban du Mandé", "Fonio Doré", "Miel de Brousse", "Vanille"],
    pairing: "Accord : Nectar frais de Tamarin infusé au gingembre doux",
    chefTag: "Terroir du Mandé",
    sensorGauges: [
      { label: "Vivacité Zaban", value: 94 },
      { label: "Douceur Miel", value: 90 },
      { label: "Croustillant Fonio", value: 95 },
      { label: "Équilibre Terroir", value: 96 },
    ],
  },
  {
    id: "amber-caramel",
    name: "Amber Caramel Swirl",
    subtitle: "Caramel au Sel de Taoudénit & Arachides de Kayes",
    bgWord: "Kayes - Taoudénit",
    description:
      "Coulis de caramel doré au beurre de Karité pur raffiné, cristaux de sel gemme de Taoudénit, tuile dentelle croustillante et éclats d'arachides de Kayes grillées à cœur.",
    price: "14 000 FCFA",
    image: "/images/creations/amber_caramel_lemon.jpg",
    notes: ["Sel de Taoudénit", "Arachides de Kayes", "Beurre de Karité", "Caramel"],
    pairing: "Accord : Thé vert Sahélien à la menthe fraîche de Baguinéda",
    chefTag: "Grand Cru Sahélien",
    sensorGauges: [
      { label: "Gourmandise Caramel", value: 98 },
      { label: "Contraste Salin", value: 91 },
      { label: "Croquant Arachide", value: 94 },
      { label: "Rondeur Karité", value: 89 },
    ],
  },
  {
    id: "midnight-blueberry",
    name: "Midnight Baobab Swirl",
    subtitle: "Pulpe de Baobab Blanc (Zira) & Yaourt Sahélien",
    bgWord: "Zira - Baobab",
    description:
      "Crème glacée soyeuse au yaourt de brebis sahélien et pulpe de baobab sauvage (Zira), coulis intense de mûres sauvages de la vallée du Niger et perles craquantes.",
    price: "15 500 FCFA",
    image: "/images/creations/midnight_blueberry_nectar.jpg",
    notes: ["Baobab Blanc (Zira)", "Yaourt Sahélien", "Mûres du Niger", "Perles"],
    pairing: "Accord : Dégé onctueux parfumé à la fleur d'oranger",
    chefTag: "Édition Cueillette",
    sensorGauges: [
      { label: "Onctuosité Baobab", value: 96 },
      { label: "Fraîcheur Acidulée", value: 93 },
      { label: "Douceur Lactée", value: 92 },
      { label: "Sucre Réduit", value: 38 },
    ],
  },
  {
    id: "roast-espresso",
    name: "Roast Moka & Praliné",
    subtitle: "Chocolat Noir & Praliné d'Arachides du Mali",
    bgWord: "Moka - Chocolat",
    description:
      "Café torréfié artisanalement pour la Maison, ganache velours au chocolat noir pur 74% et praliné maison aux arachides caramélisées du Mandé.",
    price: "14 500 FCFA",
    image: "/images/creations/roast_espresso_mocha.jpg",
    notes: ["Café Torréfié", "Chocolat Noir 74%", "Praliné Arachides", "Sablé Cacao"],
    pairing: "Accord : Café noir d'altitude infusé aux gousses de vanille",
    chefTag: "Création Torréfaction",
    sensorGauges: [
      { label: "Amertume Noble", value: 95 },
      { label: "Arômes Torréfiés", value: 97 },
      { label: "Longueur en Bouche", value: 99 },
      { label: "Croustillant", value: 90 },
    ],
  },
];

interface VelvetFlavorStageProps {
  onOpenReservation?: () => void;
}

export default function VelvetFlavorStage({ onOpenReservation }: VelvetFlavorStageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [orderedNotice, setOrderedNotice] = useState<string | null>(null);

  const current = CREATIONS[currentIndex];

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % CREATIONS.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + CREATIONS.length) % CREATIONS.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handleSelect = (idx: number) => {
    if (idx === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 200);
  };

  const handleOrder = () => {
    setOrderedNotice(`Création "${current.name}" mémorisée pour votre service.`);
    setTimeout(() => setOrderedNotice(null), 3500);
  };

  return (
    <section className="relative w-full rounded-2xl overflow-hidden bg-[#111115] border border-zinc-800 shadow-2xl flex flex-col justify-between p-5 sm:p-8 lg:p-10 select-none">
      {/* 1. TOP BRAND BAR */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 font-bold font-serif text-base shrink-0">
            V
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">
              MAISON VELOURS BAMAKO
            </div>
            <div className="text-[11px] text-zinc-400 truncate max-w-[260px] sm:max-w-none">
              Haute Gastronomie & Pâtisserie d&apos;Auteur · ACI 2000, Bamako
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:inline-flex items-center gap-2 text-xs text-zinc-300 border-r border-zinc-800 pr-3">
            <span className="text-amber-400 font-semibold">Table d&apos;Excellence du Mali</span>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer"
          >
            Réserver une table
          </button>
        </div>
      </div>

      {/* 2. MAIN STAGE CONTENT GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        {/* Left Column: Flavor Story & Sensory Gauges (5 cols) */}
        <div className="lg:col-span-5 space-y-4 text-left min-w-0">
          {/* Eyebrow & Rating */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="eyebrow-label text-[10px]">{current.chefTag}</span>
            <div className="flex items-center text-amber-400 text-xs gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
              <span className="text-zinc-400 ml-1 text-[11px] font-medium">5.0 (Avis Bamako)</span>
            </div>
          </div>

          {/* Titles */}
          <div className="space-y-1">
            <h1 className="text-editorial-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight break-words">
              {current.name}
            </h1>
            <p className="text-sm sm:text-base text-amber-300 font-normal break-words">
              {current.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg">
            {current.description}
          </p>

          {/* Sensory Gauges */}
          <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2.5 max-w-lg">
            <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-300 pb-1 flex justify-between items-center border-b border-zinc-800">
              <span>Profil Gustatif</span>
              <span className="text-[10px] text-zinc-400 font-normal">Terroirs du Mali & Sahel</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              {current.sensorGauges.map((gauge) => (
                <div key={gauge.label} className="space-y-1">
                  <div className="flex justify-between text-zinc-300 text-[10px]">
                    <span className="truncate pr-1">{gauge.label}</span>
                    <span className="font-bold text-amber-300 shrink-0">{gauge.value}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all duration-500"
                      style={{ width: `${gauge.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pairing */}
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1 max-w-lg">
            <span className="text-zinc-400 uppercase tracking-wider text-[10px] font-semibold shrink-0">Accord Signature</span>
            <span className="text-amber-200 text-xs font-medium truncate">{current.pairing}</span>
          </div>

          {/* Price & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-baseline gap-1 mr-2">
              <span className="text-xl sm:text-2xl font-bold text-white font-serif">{current.price}</span>
            </div>

            <button
              onClick={handleOrder}
              className="px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors cursor-pointer"
            >
              Sélectionner
            </button>

            <button
              onClick={onOpenReservation}
              className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-colors cursor-pointer"
            >
              Réserver la Table du Chef
            </button>
          </div>

          {orderedNotice && (
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-amber-400 text-amber-300 text-xs font-medium flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{orderedNotice}</span>
            </div>
          )}
        </div>

        {/* Center Column: Creation Photography (3 cols) */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center relative py-2">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-900">
            <Image
              src={current.image}
              alt={current.name}
              fill
              priority
              className={`object-cover object-center transition-opacity duration-300 ${
                isTransitioning ? "opacity-60" : "opacity-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom info bar */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs gap-2">
              <div className="px-2.5 py-1 rounded bg-black/80 text-white font-semibold text-[11px] truncate">
                {current.name}
              </div>
              <div className="px-2 py-1 rounded bg-amber-400 text-black font-bold font-serif text-[11px] shrink-0">
                {current.price}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Gallery Card Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5 min-w-0">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-300 uppercase tracking-wider pb-2 border-b border-zinc-800">
            <span>Créations ({CREATIONS.length})</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Création précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Création suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {CREATIONS.map((creation, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <div
                  key={creation.id}
                  onClick={() => handleSelect(idx)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                    isSelected
                      ? "bg-zinc-800 border-amber-400 text-white"
                      : "bg-zinc-900/60 hover:bg-zinc-800/80 border-zinc-800 text-zinc-300"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-zinc-700">
                      <Image
                        src={creation.image}
                        alt={creation.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs font-bold truncate ${isSelected ? "text-amber-300" : "text-white"}`}>
                        {creation.name}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate">
                        {creation.notes[0]} · {creation.notes[1]}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-white font-serif">{creation.price}</div>
                    {isSelected && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-0.5" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM CAROUSEL PROGRESS INDICATORS */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-zinc-800 text-xs text-zinc-400">
        <div className="flex items-center gap-1.5">
          {CREATIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-7 bg-amber-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Aller à la création ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span>
            <strong className="text-white">{currentIndex + 1}</strong> sur {CREATIONS.length}
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline text-zinc-400">
            Maison fondée à Bamako · Terroirs du Mali
          </span>
        </div>
      </div>
    </section>
  );
}
