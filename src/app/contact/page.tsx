"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "privatisation",
    message: "",
    website_hp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website_hp) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="eyebrow-label">Conciergerie & Privatisations</p>
          <h1 className="text-editorial-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Contact & Accès à Bamako
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Pour vos réservations de groupes, réceptions privées dans le Salon Mandé ou événements officiels à Bamako, notre conciergerie est à votre disposition.
          </p>
        </div>

        {/* Grid content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-editorial-serif text-2xl sm:text-3xl font-bold text-white">
              Coordonnées de la Maison à Bamako
            </h2>

            <div className="space-y-3.5">
              <div className="p-6 rounded-2xl bg-[#121216] border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Adresse</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Boulevard du 22 Octobre, ACI 2000, Bamako, République du Mali
                  </p>
                  <p className="text-[11px] text-amber-400 mt-0.5">
                    Service voiturier et parking sécurisé
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#121216] border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Téléphone Conciergerie</h3>
                  <p className="text-xs text-zinc-300 mt-1">+223 20 70 80 90 / +223 76 00 00 00</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Ligne directe du mardi au samedi de 10:00 à 23:00 (Heure de Bamako)
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#121216] border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Courriel</h3>
                  <p className="text-xs text-zinc-300 mt-1">reservation@maisonvelours-bamako.ml</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Événements & Banquets : evenements@maisonvelours-bamako.ml
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#121216] border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Horaires de Table</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Déjeuner : 12:00 à 15:00 · Dîner : 19:30 à 23:30
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Fermeture hebdomadaire le dimanche et le lundi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#121216] border border-zinc-800 shadow-2xl">
            <h2 className="text-editorial-serif text-2xl font-bold text-white mb-1">
              Demande Privilège
            </h2>
            <p className="text-xs text-zinc-400 mb-6">
              Remplissez ce formulaire pour toute demande de privatisation du Salon Mandé, banquet d&apos;affaires ou menu dégustation personnalisé à Bamako.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 text-amber-400 border border-amber-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-editorial-serif text-2xl font-bold text-white">
                  Message Transmis
                </h3>
                <p className="text-xs text-zinc-300">
                  Notre équipe de conciergerie à Bamako prendra contact avec vous dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_hp"
                    tabIndex={-1}
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300">Nom & Prénom</label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Seydou Keïta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@domaine.ml"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">Téléphone (Mali)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+223 76 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300">Objet de la demande</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
                  >
                    <option value="privatisation">Privatisation du Salon Mandé (jusqu&apos;à 24 convives)</option>
                    <option value="groupe">Déjeuner ou dîner d&apos;affaires (plus de 8 convives)</option>
                    <option value="sur-mesure">Menu Dégustation Terroirs du Mali personnalisé</option>
                    <option value="presse">Presse, Partenariats & Événements Officiels</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez la date envisagée, le nombre d'invités et vos demandes particulières..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Envoyer la demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
