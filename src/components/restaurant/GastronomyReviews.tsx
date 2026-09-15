"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  quote: string;
  author: string;
  role: string;
  source: string;
  rating: number;
  highlight: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      "Une réinvention spectaculaire des saveurs maliennes. L'accord entre la mangue de Sikasso, le Bissap pourpre et le chocolat noir d'Afrique de l'Ouest est une révélation culinaire pour Bamako.",
    author: "Revue Gastronomique Africaine",
    role: "Critique Culinaire",
    source: "Palmarès des Tables d'Exception",
    rating: 5,
    highlight: "Table d'Exception Bamako",
  },
  {
    quote:
      "Le Capitaine du fleuve Niger préparé en carpaccio et le filet de zébu braisé au bois de tamarinier démontrent une maîtrise technique digne des plus grands restaurants internationaux.",
    author: "Guide des Grandes Tables Ouest-Africaines",
    role: "Sélection Gastronomique 2026",
    source: "Édition Prestige",
    rating: 5,
    highlight: "Excellence & Terroir",
  },
  {
    quote:
      "Un service en salle attentionné dans un cadre somptueux à l'ACI 2000. Le dessert au Zaban sauvage et miel du Mandé est un hommage inoubliable à notre patrimoine.",
    author: "Mamadou & Fatoumata T.",
    role: "Hôtes Table Privée",
    source: "Dîner Signature · Bamako",
    rating: 5,
    highlight: "Expérience Inoubliable",
  },
];

export default function GastronomyReviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  const r = REVIEWS[activeIdx];

  return (
    <section className="space-y-8 py-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <p className="eyebrow-label">Reconnaissance & Critiques</p>
        <h2 className="text-editorial-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          La Presse & Nos Hôtes
        </h2>
      </div>

      <div className="rounded-2xl p-8 sm:p-12 bg-[#121216] border border-zinc-800 max-w-4xl mx-auto text-center space-y-6 shadow-2xl">
        {/* Highlight badge */}
        <span className="inline-block px-3.5 py-1 rounded bg-zinc-800 text-amber-400 text-xs font-bold font-mono">
          {r.highlight}
        </span>

        {/* Quote text */}
        <p className="text-editorial-serif text-lg sm:text-2xl text-white font-normal leading-relaxed max-w-2xl mx-auto">
          « {r.quote} »
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center text-amber-400 gap-1">
          {[...Array(r.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        {/* Author */}
        <div className="space-y-0.5">
          <div className="text-sm font-bold text-white">{r.author}</div>
          <div className="text-xs text-zinc-400">{r.role} · {r.source}</div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIdx ? "w-6 bg-amber-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Aller au témoignage ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
