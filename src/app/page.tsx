"use client";

import React, { useState } from "react";
import VelvetFlavorStage from "@/components/motion/VelvetFlavorStage";
import LiquidSensoryBanner from "@/components/restaurant/LiquidSensoryBanner";
import SignatureDishBuilder from "@/components/restaurant/SignatureDishBuilder";
import InteractiveMenuExperience from "@/components/restaurant/InteractiveMenuExperience";
import ChefAtelierSection from "@/components/restaurant/ChefAtelierSection";
import GastronomyReviews from "@/components/restaurant/GastronomyReviews";
import TableReservationModal from "@/components/restaurant/TableReservationModal";
import { ArrowRight, MapPin } from "lucide-react";

export default function HomePage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white space-y-20 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO CREATIONS STAGE */}
      <section id="velvet-creations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <VelvetFlavorStage onOpenReservation={() => setIsReservationOpen(true)} />
      </section>

      {/* 2. SENSORY LIQUID CHOCOLATE & CARAMEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiquidSensoryBanner onOpenReservation={() => setIsReservationOpen(true)} />
      </section>

      {/* 3. SIGNATURE DISH BUILDER */}
      <section id="atelier-composition" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignatureDishBuilder onOpenReservation={() => setIsReservationOpen(true)} />
      </section>

      {/* 4. GASTRONOMIC MENU & WINE PAIRING */}
      <section id="carte" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveMenuExperience onOpenReservation={() => setIsReservationOpen(true)} />
      </section>

      {/* 5. CHEF PHILOSOPHY & TERROIR */}
      <section id="atelier" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChefAtelierSection />
      </section>

      {/* 6. PRESS & REVIEWS */}
      <section id="avis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GastronomyReviews />
      </section>

      {/* 7. FINAL RESERVATION BANNER */}
      <section id="reservation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 lg:p-14 bg-[#121216] border border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <p className="eyebrow-label">Réservation de Table</p>
            <h2 className="text-editorial-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Prenez Place à la Table des Saveurs du Mali
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Pour un dîner d&apos;exception, un déjeuner d&apos;affaires ou la privatisation de notre Salon Mandé à Bamako, notre équipe de conciergerie veille à chaque détail.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Boulevard du 22 Octobre, ACI 2000, Bamako</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">Service Voiturier Sécurisé</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Réserver à Bamako</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+22320708090"
              className="px-5 py-3.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm border border-zinc-700 transition-colors"
            >
              Conciergerie (+223)
            </a>
          </div>
        </div>
      </section>

      {/* 8. TABLE RESERVATION MODAL */}
      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
