"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  functional: boolean;
}

const STORAGE_KEY = "maison_velours_cookie_consent";

export default function CookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setHasConsent(true);
        setPreferences({
          necessary: true,
          analytics: parsed.analytics ?? false,
          functional: parsed.functional ?? false,
        });
      } else {
        setHasConsent(false);
      }
    } catch {
      setHasConsent(false);
    }

    const handleOpenSettings = () => {
      setShowCustomize(true);
      setHasConsent(false);
    };

    window.addEventListener("velours-open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("velours-open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...prefs,
          timestamp: new Date().toISOString(),
        })
      );
      window.dispatchEvent(
        new CustomEvent("velours_consent_updated", { detail: prefs })
      );
    } catch (e) {
      console.error("Failed to save cookie preferences", e);
    }
    setHasConsent(true);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    const all = { necessary: true as const, analytics: true, functional: true };
    setPreferences(all);
    savePreferences(all);
  };

  const handleRefuseAll = () => {
    const min = { necessary: true as const, analytics: false, functional: false };
    setPreferences(min);
    savePreferences(min);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (hasConsent === null || (hasConsent && !showCustomize)) {
    return null;
  }

  return (
    <aside
      aria-label="Gestion des cookies et du consentement"
      role="region"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-lg z-50"
    >
      <div className="bg-[#121216] border border-zinc-800 rounded-2xl p-6 shadow-2xl text-white">
        {!showCustomize ? (
          <div>
            <div className="space-y-2 mb-4">
              <p className="eyebrow-label text-[10px]">Vie Privée</p>
              <h3 className="text-base font-bold text-white font-serif">
                Respect de votre vie privée
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Maison Velours utilise des cookies pour assurer le bon fonctionnement de sa plateforme de réservation et mesurer l&apos;audience de manière anonyme.
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4 text-xs text-zinc-400">
              <Link
                href="/politique-confidentialite"
                className="underline hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
              <span>·</span>
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="underline hover:text-white transition-colors cursor-pointer"
              >
                Personnaliser
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer"
              >
                Tout accepter
              </button>
              <button
                type="button"
                onClick={handleRefuseAll}
                className="py-2 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="text-xs px-3 py-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Options
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
              <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                Préférences des cookies
              </h3>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-zinc-400 hover:text-white text-sm cursor-pointer"
                aria-label="Fermer la personnalisation"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 mb-5 max-h-60 overflow-y-auto pr-1 text-xs">
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-white">
                    Cookies nécessaires
                    <span className="ml-2 text-[10px] bg-zinc-800 text-amber-300 px-1.5 py-0.5 rounded font-mono">
                      Obligatoire
                    </span>
                  </div>
                  <p className="text-zinc-400 mt-1 text-[11px] leading-relaxed">
                    Essentiels pour la sécurité, le routage et le système de réservation.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 rounded text-amber-400 cursor-not-allowed opacity-70"
                />
              </div>

              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-white">Mesure d&apos;audience</div>
                  <p className="text-zinc-400 mt-1 text-[11px] leading-relaxed">
                    Statistiques agrégées et anonymes pour améliorer les performances de notre site.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: e.target.checked,
                    }))
                  }
                  className="mt-1 rounded text-amber-400 accent-amber-400 h-4 w-4 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-white">Fonctionnalités avancées</div>
                  <p className="text-zinc-400 mt-1 text-[11px] leading-relaxed">
                    Mémorisation de vos choix de création et préférences de table.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-functional"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      functional: e.target.checked,
                    }))
                  }
                  className="mt-1 rounded text-amber-400 accent-amber-400 h-4 w-4 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="flex-1 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer"
              >
                Enregistrer mes choix
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="py-2 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Tout accepter
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
