"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenReservation?: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0C] border-b border-zinc-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2">
          {/* Logo Maison Velours Bamako */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-amber-400 font-bold font-serif text-base">V</span>
            </div>
            <div>
              <span className="text-sm sm:text-base font-serif font-bold text-white tracking-wider block">
                MAISON VELOURS
              </span>
              <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-[0.15em] block">
                Bamako · Mali
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {[
              { label: "Créations", href: "#velvet-creations" },
              { label: "La Carte", href: "#carte" },
              { label: "L'Atelier", href: "#atelier" },
              { label: "Critiques", href: "#avis" },
              { label: "La Maison", href: "/a-propos" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+22320708090"
              className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors hidden md:inline-block"
            >
              +223 20 70 80 90
            </a>

            <button
              onClick={onOpenReservation}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer"
            >
              Réserver une table
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white cursor-pointer"
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-zinc-800 py-4 space-y-3 bg-[#0A0A0C]">
            <nav className="flex flex-col gap-1">
              {[
                { label: "Créations", href: "#velvet-creations" },
                { label: "La Carte", href: "#carte" },
                { label: "L'Atelier", href: "#atelier" },
                { label: "Critiques", href: "#avis" },
                { label: "La Maison", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-2 border-t border-zinc-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenReservation) onOpenReservation();
                }}
                className="w-full py-2.5 rounded-lg bg-amber-400 text-black font-bold text-xs text-center cursor-pointer"
              >
                Réserver une table
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
