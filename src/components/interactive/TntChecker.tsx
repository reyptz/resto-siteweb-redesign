"use client";
import React, { useState } from "react";
import { REGIONS } from "@/data/regions";
import { Region } from "@/types";
import { Icon } from "@/components/ui/Icon";

export function TntChecker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(
    REGIONS.find((r) => r.name === "Bamako") || REGIONS[0] || null,
  );

  const filteredRegions = REGIONS.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusBadge = (status: Region["status"]) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible (Actif)
          </span>
        );
      case "progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Déploiement en cours
          </span>
        );
      case "planned":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-500/10 text-slate-400 border border-slate-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            Planifié
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-panel w-full max-w-4xl mx-auto rounded-3xl p-6 grid grid-cols-1 md:grid-cols-12 gap-8 relative overflow-hidden">
      {/* Region Selector Panel */}
      <div className="md:col-span-5 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une région..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-elevated/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:bg-surface-elevated transition-all"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted">
            <Icon name="search" size={18} />
          </div>
        </div>
        <div className="max-h-[350px] overflow-y-auto pr-2 flex flex-col gap-2 custom-scrollbar">
          {filteredRegions.length > 0 ? (
            filteredRegions.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between group ${
                  selectedRegion?.name === region.name
                    ? "bg-accent-primary/10 text-white font-semibold border border-accent-primary/30"
                    : "text-text-muted hover:bg-surface-elevated hover:text-white border border-transparent"
                }`}
              >
                <span>{region.name}</span>
                <span
                  className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                    region.status === "active"
                      ? "bg-emerald-400"
                      : region.status === "progress"
                        ? "bg-amber-400"
                        : "bg-slate-500"
                  }`}
                />
              </button>
            ))
          ) : (
            <div className="text-center py-10 text-text-muted text-xs">
              Aucune région ne correspond à votre recherche.
            </div>
          )}
        </div>
      </div>

      {/* Details Display Panel */}
      <div className="md:col-span-7 flex flex-col justify-center min-h-[300px]">
        {selectedRegion ? (
          <div className="flex flex-col gap-8 animate-fadeUp">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
              <div>
                <h3 className="font-syne font-bold text-3xl text-white mb-3">
                  Région de {selectedRegion.name}
                </h3>
                <div className="flex flex-wrap gap-3 items-center">
                  {getStatusBadge(selectedRegion.status)}
                  {selectedRegion.status === "active" && (
                    <span className="text-xs text-emerald-400 font-medium px-3 py-1.5 rounded-lg bg-emerald-500/5">
                      Couverture estimée :{" "}
                      <strong>{selectedRegion.coverage}</strong>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Content info */}
            {selectedRegion.status === "active" &&
            selectedRegion.channels.length > 0 ? (
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-sm font-semibold text-white font-syne mb-2 flex items-center gap-2">
                    <Icon name="tv" size={16} className="text-accent-primary" />
                    Chaînes TV & Radio numériques disponibles (
                    {selectedRegion.channels.length})
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Diffuseur technique officiel de la TNT en qualité numérique
                    HD.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedRegion.channels.map((ch, idx) => (
                    <div
                      key={ch}
                      className="px-4 py-3 rounded-xl bg-surface-elevated/50 border border-white/5 flex items-center gap-3 text-xs font-semibold text-text-main hover:bg-surface-elevated hover:border-accent-primary/20 transition-all cursor-default"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          idx < 2
                            ? "bg-accent-secondary"
                            : idx < 4
                              ? "bg-accent-primary"
                              : "bg-red-500"
                        }`}
                      />
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedRegion.status === "progress" ? (
              <div className="text-center py-12 px-6 bg-surface-elevated/30 border border-white/5 rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 mb-4 animate-pulse">
                  <Icon name="tool" size={32} />
                </div>
                <h4 className="font-syne font-semibold text-lg text-white mb-3">
                  Travaux en cours de finalisation
                </h4>
                <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
                  Nos techniciens SMTD-SA terminent l&apos;installation des
                  émetteurs numériques régionaux. La TNT sera disponible très
                  prochainement dans la région de {selectedRegion.name}.
                </p>
              </div>
            ) : (
              <div className="text-center py-12 px-6 bg-surface-elevated/30 border border-white/5 rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-500/10 text-slate-400 mb-4">
                  <Icon name="calendar" size={32} />
                </div>
                <h4 className="font-syne font-semibold text-lg text-white mb-3">
                  Planification réseau
                </h4>
                <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
                  Le déploiement de l&apos;infrastructure de diffusion numérique
                  TNT dans la région de {selectedRegion.name} est actuellement
                  en cours d&apos;étude par nos équipes techniques.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 text-text-muted border border-dashed border-white/10 rounded-2xl">
            <Icon
              name="map-pin"
              size={32}
              className="mx-auto mb-4 opacity-50"
            />
            Sélectionnez une région à gauche <br /> pour voir les détails de
            couverture.
          </div>
        )}
      </div>
    </div>
  );
}
