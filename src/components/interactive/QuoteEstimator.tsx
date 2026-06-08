"use client";
import { useState, useMemo } from "react";
import {
  FIBRE_TIERS,
  DC_RACK_PRICES,
  DC_STORAGE_UNIT_PRICE,
  ESTIMATOR_FIBRE_DURATIONS,
} from "@/data/pricing";
import { formatFCFA } from "@/lib/utils";
import Link from "next/link";
import { EstimatorFibreDuration } from "@/types";

type ServiceType = "fibre" | "datacenter";

export function QuoteEstimator() {
  const [service, setService] = useState<ServiceType>("fibre");
  const [fibreIdx, setFibreIdx] = useState(2); // Default to 100 Mbps
  const [dcIdx, setDcIdx] = useState(1); // Default to 2U
  const [dcStorage, setDcStorage] = useState(100); // Default to 100 GB
  const [fibreDuration, setFibreDuration] = useState(12); // Default to 12 months

  const estimate = useMemo(() => {
    if (service === "fibre") {
      const baseMonthly = FIBRE_TIERS[fibreIdx].price;
      const option: EstimatorFibreDuration | undefined =
        ESTIMATOR_FIBRE_DURATIONS.find(
          (d: EstimatorFibreDuration) => d.value === fibreDuration,
        );
      const discount = option?.discount ?? 0;

      const monthly = baseMonthly * (1 - discount);
      const total = monthly * fibreDuration;

      return {
        monthly,
        total,
        label: FIBRE_TIERS[fibreIdx].label,
        details: `${fibreDuration} mois d'engagement ${discount > 0 ? "(-10% inclus)" : ""}`,
      };
    } else {
      const rackMonthly = DC_RACK_PRICES[dcIdx].price;
      const storageMonthly = dcStorage * DC_STORAGE_UNIT_PRICE;
      const monthly = rackMonthly + storageMonthly;
      const total = monthly * 12; // Estimate annual cost by default

      return {
        monthly,
        total,
        label: `${DC_RACK_PRICES[dcIdx].label} + ${dcStorage} Go`,
        details: `Hébergement rack : ${formatFCFA(rackMonthly)} + Stockage (${dcStorage} Go) : ${formatFCFA(storageMonthly)}`,
      };
    }
  }, [service, fibreIdx, dcIdx, dcStorage, fibreDuration]);

  return (
    <div className="glass-panel w-full max-w-4xl mx-auto p-6 md:p-10 flex flex-col gap-8 relative overflow-hidden">
      {/* Decorative Glow inside the panel */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Service Selection Toggle */}
      <div className="flex flex-col items-center gap-5 relative z-10">
        <div className="flex p-1.5 bg-surface-elevated/80 rounded-xl w-full max-w-md border border-white/5 backdrop-blur-sm">
          <button
            onClick={() => setService("fibre")}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${service === "fibre" ? "bg-accent-primary text-white shadow-[0_0_15px_rgba(217,108,74,0.4)]" : "text-text-muted hover:text-white hover:bg-white/5"}`}
          >
            Fibre Optique
          </button>
          <button
            onClick={() => setService("datacenter")}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${service === "datacenter" ? "bg-accent-secondary text-bg-dark shadow-[0_0_15px_rgba(229,192,123,0.4)]" : "text-text-muted hover:text-white hover:bg-white/5"}`}
          >
            Data Center
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Left Side: Controls */}
        <div className="space-y-8">
          {service === "fibre" ? (
            <>
              <div className="space-y-4">
                <label className="text-sm font-semibold text-text-main uppercase tracking-wider">
                  Bande passante
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {FIBRE_TIERS.map((tier, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFibreIdx(idx)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                        fibreIdx === idx
                          ? "border-accent-primary bg-accent-primary/10 text-white shadow-[0_0_15px_rgba(217,108,74,0.15)]"
                          : "border-white/10 bg-surface-elevated/50 text-text-muted hover:border-accent-primary/50"
                      }`}
                    >
                      <div className="font-syne font-bold text-lg mb-1">
                        {tier.label}
                      </div>
                      <div className="text-xs opacity-80">
                        {formatFCFA(tier.price)}/mois
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-text-main uppercase tracking-wider">
                  Durée d&apos;engagement
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {ESTIMATOR_FIBRE_DURATIONS.map(
                    (opt: EstimatorFibreDuration) => (
                      <button
                        key={opt.value}
                        onClick={() => setFibreDuration(opt.value)}
                        className={`py-3 rounded-xl text-center text-sm font-bold border transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                          fibreDuration === opt.value
                            ? "border-accent-secondary bg-accent-secondary/10 text-accent-secondary shadow-[0_0_15px_rgba(229,192,123,0.15)]"
                            : "border-white/10 bg-surface-elevated/50 text-text-muted hover:border-accent-secondary/50"
                        }`}
                      >
                        <span>{opt.value} mois</span>
                        {opt.discount !== undefined && opt.discount > 0 && (
                          <span className="block text-[10px] text-accent-secondary/80 bg-accent-secondary/10 px-2 py-0.5 rounded-full">
                            -{opt.discount * 100}%
                          </span>
                        )}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <label className="text-sm font-semibold text-text-main uppercase tracking-wider">
                  Espace Rack
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {DC_RACK_PRICES.map((rack, idx) => (
                    <button
                      key={idx}
                      onClick={() => setDcIdx(idx)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                        dcIdx === idx
                          ? "border-accent-secondary bg-accent-secondary/10 text-white shadow-[0_0_15px_rgba(229,192,123,0.15)]"
                          : "border-white/10 bg-surface-elevated/50 text-text-muted hover:border-accent-secondary/50"
                      }`}
                    >
                      <div className="font-syne font-bold text-lg mb-1">
                        {rack.label}
                      </div>
                      <div className="text-xs opacity-80">
                        {formatFCFA(rack.price)}/mois
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-text-main uppercase tracking-wider flex justify-between">
                  <span>Stockage additionnel</span>
                  <span className="text-accent-secondary">{dcStorage} Go</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={dcStorage}
                  onChange={(e) => setDcStorage(Number(e.target.value))}
                  className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-accent-secondary"
                />
                <div className="flex justify-between text-xs text-text-muted font-mono">
                  <span>50 Go</span>
                  <span>2 To</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Side: Result */}
        <div className="relative flex flex-col justify-center">
          <div className="absolute -inset-1 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 rounded-3xl blur-md pointer-events-none" />

          <div className="relative bg-surface-elevated/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
            <div className="text-xs text-text-muted uppercase tracking-widest mb-3">
              Estimation
            </div>
            <div className="text-lg font-bold text-accent-secondary mb-2">
              {estimate.label}
            </div>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-syne font-extrabold text-white text-gradient-warm">
                {formatFCFA(estimate.monthly)}
              </span>
              <span className="text-text-muted text-sm font-medium">/mois</span>
            </div>

            <div className="w-full bg-surface/50 border border-white/5 rounded-xl p-5 mb-8">
              <div className="text-sm text-text-main mb-2">
                {estimate.details}
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <span className="text-text-muted text-xs uppercase tracking-wider">
                  Coût total estimé
                </span>
                <span className="text-xl font-bold text-accent-primary">
                  {formatFCFA(estimate.total)}
                </span>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary btn-lg w-full">
              Demander un devis officiel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
