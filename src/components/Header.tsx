"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-surface-elevated to-bg-dark rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-white/5 group-hover:border-accent-primary/30 transition-all duration-300">
              <div className="relative w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-accent-primary rounded-sm shadow-[0_0_8px_rgba(217,108,74,0.5)]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1.5 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-accent-secondary rounded-sm shadow-[0_0_8px_rgba(229,192,123,0.5)]"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-syne font-extrabold text-white tracking-tight group-hover:text-accent-secondary transition-colors">
                SMTD-SA
              </h1>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Infrastructure Numérique
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos" },
              { label: "Missions", href: "/missions" },
              { label: "Services", href: "/services" },
              { label: "Actualités", href: "/actualites" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-4 btn btn-primary btn-sm">
              Nous contacter
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl border border-white/10 bg-surface hover:bg-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Ouvrir le menu"
          >
            <span
              className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white rounded transition-all duration-300 mt-1 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white rounded transition-all duration-300 mt-1 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}
            ></span>
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 pb-6 pt-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Missions", href: "/missions" },
                { label: "Services", href: "/services" },
                { label: "Actualités", href: "/actualites" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 btn btn-primary btn-md w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nous contacter
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
