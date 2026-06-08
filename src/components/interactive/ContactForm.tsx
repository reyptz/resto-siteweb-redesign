"use client";

import React, { useState, FormEvent } from "react";
import { ContactTabKey, ContactFormData } from "@/types";
import { validateEmail, validateRequired } from "@/lib/validators";
import { Icon } from "@/components/ui/Icon";

type TabOption = {
  key: ContactTabKey;
  label: string;
  icon: "clipboard" | "wrench" | "handshake";
};

const TABS: TabOption[] = [
  { key: "devis", label: "Demande de Devis", icon: "clipboard" },
  { key: "technique", label: "Demande Technique", icon: "wrench" },
  { key: "partenariat", label: "Partenariat", icon: "handshake" },
];

const SERVICES = [
  "Fibre Optique Dédiée",
  "Hébergement Data Center",
  "Diffusion TNT",
  "Call Center",
  "Points Hauts",
  "Liaison Satellite DSNG",
  "Autre",
];

export function ContactForm() {
  const [tab, setTab] = useState<ContactTabKey>("devis");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [message, setMessage] = useState("");

  // UI States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleTabChange = (key: ContactTabKey) => {
    setTab(key);
    setError(null);
    setSuccess(false);
    // Reset service / partnership specific values
    setService("");
    setPartnershipType("");
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Client side validation
    if (!validateRequired(name)) {
      setError("Le nom est requis.");
      return;
    }
    if (!validateRequired(email) || !validateEmail(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }
    if (!validateRequired(message)) {
      setError("Le message est requis.");
      return;
    }

    setLoading(true);

    try {
      const formData: ContactFormData = {
        tab: tab,
        name,
        email,
        phone,
        company,
        service: tab === "devis" ? service : undefined,
        partnershipType: tab === "partenariat" ? partnershipType : undefined,
        message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur lors de l'envoi du message.");

      // Success state
      setSuccess(true);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setService("");
      setPartnershipType("");
      setMessage("");
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 lg:p-12 glass-panel border-accent-secondary/30 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,192,123,0.1),transparent_70%)] pointer-events-none" />
        <div className="text-center flex flex-col items-center animate-fadeUp relative z-10">
          <div className="w-20 h-20 rounded-full bg-accent-secondary/20 border border-accent-secondary/40 flex items-center justify-center text-4xl mb-6 text-accent-secondary shadow-lg">
            <Icon name="check" size={40} />
          </div>
          <h3 className="text-3xl font-syne font-bold text-white mb-4">
            Message envoyé !
          </h3>
          <p className="text-text-muted mb-10 max-w-md text-lg">
            Merci de nous avoir contactés. Notre équipe vous répondra dans les
            plus brefs délais.
          </p>
          <button
            type="button"
            onClick={() => {
              setSuccess(false);
              setTab("devis");
            }}
            className="btn btn-outline"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 lg:p-10 glass-panel border-white/10 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,108,74,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="mb-8 relative z-10">
        <h2 className="text-2xl font-syne font-bold text-white mb-2">
          Formulaire de Contact
        </h2>
        <p className="text-text-muted text-base">
          Remplissez le formulaire ci-dessous, nous nous chargeons du reste.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-surface-elevated/50 rounded-xl relative z-10 border border-white/5">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              tab === t.key
                ? "bg-accent-primary text-white shadow-md shadow-accent-primary/20"
                : "text-text-muted hover:text-white hover:bg-white/5"
            }`}
            onClick={() => handleTabChange(t.key)}
          >
            <Icon name={t.icon} size={18} /> <span className="hidden sm:inline">{t.label}</span><span className="sm:hidden">{t.label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Nom complet *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all shadow-inner"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all shadow-inner"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-300"
            >
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all shadow-inner"
              placeholder="+223 7X XX XX XX"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="company"
              className="text-sm font-medium text-gray-300"
            >
              Entreprise / Organisation
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all shadow-inner"
              placeholder="Nom de l'entreprise"
            />
          </div>
        </div>

        {/* Conditional Fields */}
        {tab === "devis" && (
          <div className="space-y-1.5 animate-fadeUp">
            <label
              htmlFor="service"
              className="text-sm font-medium text-gray-300"
            >
              Service souhaité *
            </label>
            <div className="relative">
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all shadow-inner"
              >
                <option value="" disabled className="text-gray-500">
                  Sélectionnez un service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-bg-dark text-white">
                    {s}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
                <Icon name="chevron-down" size={16} />
              </div>
            </div>
          </div>
        )}

        {tab === "partenariat" && (
          <div className="space-y-1.5 animate-fadeUp">
            <label
              htmlFor="partnershipType"
              className="text-sm font-medium text-gray-300"
            >
              Type de partenariat *
            </label>
            <input
              id="partnershipType"
              type="text"
              value={partnershipType}
              onChange={(e) => setPartnershipType(e.target.value)}
              className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all shadow-inner"
              placeholder="Ex: Distributeur, Partenaire technique..."
            />
          </div>
        )}

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            Message *
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-5 py-3 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary transition-all resize-none shadow-inner"
            placeholder="Dites-nous en plus..."
          />
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl flex items-center gap-3 animate-fadeUp">
            <Icon name="x" size={18} className="shrink-0" /> {error}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary flex items-center justify-center gap-2 py-4 text-base shadow-lg shadow-accent-primary/20"
          >
            {loading ? (
              "Envoi en cours..."
            ) : (
              <>
                Envoyer le message <Icon name="arrow-right" size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
