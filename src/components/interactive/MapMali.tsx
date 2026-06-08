"use client";
import React, { useState } from "react";
import { MAP_NODES, MAP_LINKS, MapNode } from "@/data/regions";

const TYPE_COLORS: Record<string, string> = {
  major: "#d96c4a", // Terracotta
  relay: "#e5c07b", // Sable
  remote: "#f3f4f6", // White/gray
  minor: "#9ca3af",
};

export function MapMali() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ? MAP_NODES.find((n) => n.id === hovered) : null;

  return (
    <div className="relative bg-surface border border-white/5 rounded-3xl p-6 overflow-hidden min-h-[420px] flex flex-col justify-between group">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_55%,rgba(217,108,74,0.05)_0%,transparent_60%),radial-gradient(circle_at_75%_30%,rgba(229,192,123,0.05)_0%,transparent_50%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
      
      {/* Header Info */}
      <div className="absolute top-6 left-6 text-[10px] sm:text-xs font-mono text-text-muted uppercase tracking-widest pointer-events-none bg-surface-elevated/50 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm z-10">
        SMTD-SA · Réseau Fibre Optique National · 3 000+ km
      </div>
      
      {/* Legend */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 z-10 bg-surface-elevated/50 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
        {[
          { c: "#d96c4a", l: "Nœud Principal" },
          { c: "#e5c07b", l: "Relais Régional" },
          { c: "#f3f4f6", l: "Point Satellite" },
        ].map(({ c, l }) => (
          <div key={l} className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: c, boxShadow: `0 0 8px ${c}80` }}
            />
            <span className="text-[10px] font-mono text-white font-medium tracking-wide">
              {l}
            </span>
          </div>
        ))}
      </div>
      
      {/* SVG Map */}
      <svg viewBox="0 0 480 400" className="w-full relative z-0 mt-12 drop-shadow-2xl">
        {/* Mali outline (simplified) */}
        <path
          d="M60 80 L90 60 L150 55 L220 60 L290 50 L360 60 L420 80 L440 120 L430 170 L410 200 L420 240 L400 290 L370 320 L310 340 L280 360 L250 355 L210 340 L170 360 L130 350 L90 330 L70 290 L60 250 L45 210 L50 160 L60 120 Z"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Links */}
        {MAP_LINKS.map(([from, to]) => {
          const a = MAP_NODES.find((n) => n.id === from);
          const b = MAP_NODES.find((n) => n.id === to);
          if (!a || !b) return null;
          const isActive = hovered === from || hovered === to;
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={
                  isActive ? "rgba(229,192,123,0.5)" : "rgba(255,255,255,0.1)"
                }
                strokeWidth={isActive ? 2.5 : 1.5}
                strokeDasharray={isActive ? undefined : "4,4"}
                className="transition-all duration-300"
              />
              {/* Animated data packet */}
              {isActive && (
                <circle r="3" fill={TYPE_COLORS[a.type]} opacity="0.95" style={{ filter: `drop-shadow(0 0 4px ${TYPE_COLORS[a.type]})` }}>
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={`M${a.x},${a.y} L${b.x},${b.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}
        
        {/* Nodes */}
        {MAP_NODES.map((n) => {
          const isHov = hovered === n.id;
          const color = TYPE_COLORS[n.type];
          const r = n.type === "major" ? 8 : n.type === "relay" ? 6 : 5;
          return (
            <g
              key={n.id}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pulse ring */}
              <circle
                cx={n.x}
                cy={n.y}
                r={isHov ? r + 12 : r + 4}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                opacity={isHov ? 0.4 : 0.1}
                className="transition-all duration-300"
              />
              {/* Main dot */}
              <circle
                cx={n.x}
                cy={n.y}
                r={isHov ? r + 2 : r}
                fill={isHov ? color : `${color}e6`}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                style={{
                  filter: isHov ? `drop-shadow(0 0 8px ${color})` : undefined,
                }}
                className="transition-all duration-200"
              />
              {/* Label */}
              <text
                x={n.x}
                y={n.y - r - (isHov ? 8 : 6)}
                textAnchor="middle"
                fontSize={isHov ? 11 : 9}
                fontFamily="'DM Mono', monospace"
                fill={isHov ? "#ffffff" : "rgba(255,255,255,0.6)"}
                fontWeight={isHov ? "700" : "500"}
                className="transition-all duration-200 select-none pointer-events-none"
              >
                {n.name}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Info Tooltip */}
      {active && (
        <div className="absolute bottom-6 left-6 right-6 bg-surface-elevated/95 border border-white/10 rounded-2xl p-5 backdrop-blur-xl animate-fadeUp z-10 flex items-center gap-5 shadow-2xl">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-inner"
            style={{
              backgroundColor: `${TYPE_COLORS[active.type]}15`,
              borderColor: `${TYPE_COLORS[active.type]}30`,
            }}
          >
            <div
              className="w-3 h-3 rounded-full shadow-lg"
              style={{ backgroundColor: TYPE_COLORS[active.type], boxShadow: `0 0 10px ${TYPE_COLORS[active.type]}` }}
            />
          </div>
          <div>
            <div className="font-syne font-bold text-white text-base">
              {active.name}
            </div>
            <div className="font-mono text-[10px] text-accent-secondary font-semibold mt-1 uppercase tracking-wider">
              {active.km} km de fibre active
            </div>
            <div className="text-sm text-text-muted mt-2 leading-relaxed">
              {active.desc.replace(/'/g, '&apos;')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
