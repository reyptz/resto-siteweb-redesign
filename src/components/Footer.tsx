"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  onOpenReservation?: () => void;
}

export default function Footer({ onOpenReservation }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0C] border-t border-zinc-800 text-white pt-16 pb-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-amber-400 font-bold font-serif text-base">
                V
              </div>
              <span className="text-base font-serif font-bold text-white tracking-wider">
                MAISON VELOURS
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Restaurant gastronomique d&apos;exception et maison de haute pâtisserie à Bamako. Terroirs du Mali, saveurs du Mandé et accords de prestige.
            </p>
            <div className="text-xs text-amber-400 font-semibold">
              Table de Prestige · Bamako, République du Mali
            </div>
          </div>

          {/* Horaires de Service */}
          <div className="space-y-3">
            <p className="eyebrow-label text-[10px]">Horaires de Service</p>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex justify-between">
                <span>Mardi au samedi (déjeuner) :</span>
                <span className="text-white font-medium">12:00 à 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Mardi au samedi (dîner) :</span>
                <span className="text-white font-medium">19:30 à 23:30</span>
              </li>
              <li className="flex justify-between text-zinc-500">
                <span>Dimanche et lundi :</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          {/* Accès & Contact */}
          <div className="space-y-3">
            <p className="eyebrow-label text-[10px]">Accès & Conciergerie</p>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Boulevard du 22 Octobre, ACI 2000, Bamako, Mali</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+223 20 70 80 90 / +223 76 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>reservation@maisonvelours-bamako.ml</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <p className="eyebrow-label text-[10px]">Lettre Gastronomique</p>
            <p className="text-xs text-zinc-400">
              Recevez les invitations aux dîners à quatre mains et l&apos;ouverture des menus de saison à Bamako.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Maison Velours Bamako. Tous droits réservés. République du Mali.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">
              Politique de confidentialité
            </Link>
            <span>·</span>
            <Link href="/cgu" className="hover:text-amber-400 transition-colors">
              CGU & Réservations
            </Link>
            <span>·</span>
            <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
