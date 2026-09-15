"use client";

import React, { useState } from "react";
import { X, Calendar, Users, Clock, CheckCircle2 } from "lucide-react";

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEATING_OPTIONS = [
  {
    id: "table-chef",
    name: "Table du Chef",
    desc: "Vue sur le passe et la brigade en action",
    code: "TC",
    badge: "Signature",
  },
  {
    id: "terrasse-niger",
    name: "Terrasse Bord du Niger",
    desc: "Brise du fleuve et atmosphère feutrée",
    code: "TN",
    badge: "Plein Air",
  },
  {
    id: "salon-mande",
    name: "Salon Privé Mandé",
    desc: "Alcôve VIP en boiseries nobles",
    code: "SM",
    badge: "Privilège",
  },
  {
    id: "grande-salle",
    name: "Grande Salle ACI 2000",
    desc: "Ambiance élégante et feutrée",
    code: "GS",
    badge: "Prestige",
  },
];

export default function TableReservationModal({ isOpen, onClose }: TableReservationModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "20:00",
    guests: "2",
    seating: "table-chef",
    notes: "",
    beveragePairing: true,
  });
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "MV-ML-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#121216] border border-zinc-800 shadow-2xl text-white my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Fermer le formulaire de réservation"
        >
          <X className="w-4 h-4" />
        </button>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5 relative z-10 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="space-y-1 pr-8">
              <p className="eyebrow-label text-[10px]">Réservation de Table</p>
              <h2 className="text-editorial-serif text-2xl sm:text-3xl font-bold text-white">
                Réserver votre Table à Bamako
              </h2>
              <p className="text-xs text-zinc-400">
                Service attentionné, conciergerie et accueil d&apos;honneur à la Maison Velours Bamako (ACI 2000).
              </p>
            </div>

            {/* Visual Seating Atmosphere Selector (2x2 grid) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300 flex items-center justify-between">
                <span>Ambiance de Salle</span>
                <span className="text-amber-400 font-normal text-[10px]">Service voiturier inclus</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SEATING_OPTIONS.map((opt) => {
                  const isSelected = formData.seating === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, seating: opt.id })}
                      className={`p-3 rounded-xl border transition-colors cursor-pointer flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-zinc-800 border-amber-400 text-white"
                          : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60"
                      }`}
                    >
                      <span className="w-6 h-6 rounded bg-zinc-800 text-amber-400 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {opt.code}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-white truncate">{opt.name}</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 shrink-0">
                            {opt.badge}
                          </span>
                        </div>
                        <div className="text-[10px] text-zinc-400 leading-tight mt-0.5">{opt.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grid fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Date */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Date du service
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Time slot */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Horaire
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none"
                >
                  <option value="12:30">12:30 (Déjeuner)</option>
                  <option value="13:15">13:15 (Déjeuner)</option>
                  <option value="19:30">19:30 (Dîner 1er Service)</option>
                  <option value="20:00">20:00 (Dîner Signature)</option>
                  <option value="20:45">20:45 (Dîner Table du Chef)</option>
                  <option value="21:30">21:30 (Dîner Nocturne)</option>
                </select>
              </div>

              {/* Guests */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" /> Convives
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none"
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="6">6 personnes</option>
                  <option value="8">8+ personnes (Salon Mandé)</option>
                </select>
              </div>
            </div>

            {/* Guest Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Nom complet</label>
                <input
                  type="text"
                  required
                  placeholder="ex: Ousmane Traoré"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Email</label>
                <input
                  type="email"
                  required
                  placeholder="votre.email@domaine.ml"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none"
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
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Beverage Pairing Checkbox */}
            <label className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={formData.beveragePairing}
                onChange={(e) => setFormData({ ...formData, beveragePairing: e.target.checked })}
                className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 accent-amber-400 shrink-0"
              />
              <span className="text-zinc-300 font-medium">
                Inclure l&apos;accord Boissons & Infusions de Prestige (Kinkeliba Grand Cru, Nectars frais)
              </span>
            </label>

            {/* Special notes */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-300">Allergies & Demandes particulières</label>
              <textarea
                rows={2}
                placeholder="Intolérances, événement spécial, placement souhaité..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:border-amber-400 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-zinc-800">
              <div className="text-[11px] text-zinc-400">
                Confirmation immédiate par notre conciergerie à Bamako
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors cursor-pointer"
              >
                Confirmer la Réservation
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 sm:p-10 text-center space-y-5 relative z-10">
            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-amber-400 flex items-center justify-center mx-auto text-amber-400">
              <CheckCircle2 className="w-6 h-6 text-amber-400" />
            </div>

            <div className="space-y-1.5">
              <p className="eyebrow-label text-[10px]">Confirmation Enregistrée</p>
              <h2 className="text-editorial-serif text-2xl sm:text-3xl font-bold text-white">
                Réservation Confirmée
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                Un message de confirmation contenant votre référence et les détails d&apos;accès a été envoyé à{" "}
                <span className="text-amber-300 font-semibold">{formData.email}</span>.
              </p>
            </div>

            {/* Booking Summary Ticket */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Référence</span>
                <span className="font-mono font-bold text-amber-400">{bookingRef}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Convives & Heure</span>
                <span className="text-white font-semibold">
                  {formData.guests} personnes à {formData.time}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Date</span>
                <span className="text-white font-semibold">{formData.date || "Date confirmée"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Ambiance</span>
                <span className="text-zinc-200 capitalize font-medium">{formData.seating.replace("-", " ")}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
