"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";

export interface MenuItem {
  id: string;
  category: "entrees" | "plats" | "desserts" | "cave";
  name: string;
  subtitle: string;
  description: string;
  price: string;
  tags: string[];
  pairing: string;
  itemCode: string;
  isSpecial?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Entrées
  {
    id: "e1",
    category: "entrees",
    name: "Foie Gras Poêlé & Mangues de Sikasso",
    subtitle: "Réduction au miel du Mandé & pain toasté au Fonio",
    description: "Escalope de foie gras poêlée minute, chutney de mangues fraîches de Sikasso délicatement épicées et éclats de fèves de cacao.",
    price: "18 000 FCFA",
    tags: ["Signature", "Sikasso", "Mandé"],
    pairing: "Accord : Nectar de Tamarin doux et gingembre",
    itemCode: "E-01",
    isSpecial: true,
  },
  {
    id: "e2",
    category: "entrees",
    name: "Carpaccio de Capitaine du Niger",
    subtitle: "Émulsion Yuzu-Gingembre & perles de Caviar",
    description: "Filet de Capitaine frais du Niger finement tranché, perles d'agrumes, huile d'olive vierge infusée à la citronnelle de Baguinéda.",
    price: "16 000 FCFA",
    tags: ["Fleuve Niger", "Pêche Locale"],
    pairing: "Accord : Infusion glacée de Kinkeliba doré & menthe",
    itemCode: "E-02",
    isSpecial: true,
  },
  {
    id: "e3",
    category: "entrees",
    name: "Velouté de Soumbala & Morilles",
    subtitle: "Œuf fermier bio cuit à 64°C",
    description: "Crème onctueuse d'igname et soumbala artisanal raffiné, morilles sautées au beurre et émulsion légère aux herbes du Sahel.",
    price: "14 000 FCFA",
    tags: ["Tradition", "Bio", "Sahel"],
    pairing: "Accord : Bouillon clair infusé aux baies sauvages",
    itemCode: "E-03",
  },

  // Plats
  {
    id: "p1",
    category: "plats",
    name: "Filet de Zébu Peul au Tamarinier",
    subtitle: "Jus corsé réduit & millefeuille de patates douces de Kati",
    description: "Cœur de filet de zébu sélectionné auprès des éleveurs nomades, braisé au charbon de tamarinier, purée d'igname truffée et légumes glacés.",
    price: "28 000 FCFA",
    tags: ["Zébu Peul", "Prestige", "Signature"],
    pairing: "Accord : Grand Cru Rouge Sélection Sommelier",
    itemCode: "P-01",
    isSpecial: true,
  },
  {
    id: "p2",
    category: "plats",
    name: "Dos de Capitaine Fumé à Chaud",
    subtitle: "Royale de gombo florale & mousseline de manioc",
    description: "Pavé de Capitaine du fleuve fumé aux essences de bois sahélien, tombée de jeunes feuilles d'épinards sauvages et jus iodé réduit.",
    price: "24 000 FCFA",
    tags: ["Fleuve Niger", "Fumé Artisanal"],
    pairing: "Accord : Vin Blanc Minéral ou Thé Blanc du Sahel",
    itemCode: "P-02",
    isSpecial: true,
  },
  {
    id: "p3",
    category: "plats",
    name: "Pintade Fermière au Fonio Soufflé",
    subtitle: "Jus perlé au Kinkeliba & échalotes de Bandiagara",
    description: "Suprême de pintade fermière dorée au sautoir, Fonio royal étuvé au beurre clarifié et purée fine de courge musquée.",
    price: "22 000 FCFA",
    tags: ["Pintade Mandé", "Fonio", "Bandiagara"],
    pairing: "Accord : Infusion tiède de Kinkeliba aux épices douces",
    itemCode: "P-03",
  },

  // Desserts
  {
    id: "d1",
    category: "desserts",
    name: "Sphère Chocolat & Cœur Zaban",
    subtitle: "Coulis chaud de caramel au sel de Taoudénit",
    description: "Coque de chocolat noir grand cru 72%, crémeux glacé au Zaban sauvage du Mandé et éclats de praliné d'arachides de Kayes.",
    price: "15 000 FCFA",
    tags: ["Haute Pâtisserie", "Or 24K", "Signature"],
    pairing: "Accord : Café Moka d'Afrique de l'Ouest",
    itemCode: "D-01",
    isSpecial: true,
  },
  {
    id: "d2",
    category: "desserts",
    name: "Pavlova au Bissap Pourpre",
    subtitle: "Meringue croquante & mangues de Sikasso",
    description: "Nuage de meringue légère parfumée à la vanille, coulis réduit de Bissap pourpre de Koutiala et dés de mangues fraîches.",
    price: "14 000 FCFA",
    tags: ["Bissap Pourpre", "Sikasso", "Fraîcheur"],
    pairing: "Accord : Pétillant d'Hibiscus Brut Nature",
    itemCode: "D-02",
  },
  {
    id: "d3",
    category: "desserts",
    name: "Moelleux au Miel Sauvage du Mandé",
    subtitle: "Cuit minute & glace à la pulpe de Baobab (Zira)",
    description: "Gâteau coulant au miel de brousse, servi avec une quenelle de glace rafraîchissante au baobab blanc et brisures de sablé Fonio.",
    price: "13 500 FCFA",
    tags: ["Miel Mandé", "Baobab Zira"],
    pairing: "Accord : Dégé onctueux au parfum de brousse",
    itemCode: "D-03",
    isSpecial: true,
  },

  // Cave & Infusions d'Exception
  {
    id: "c1",
    category: "cave",
    name: "Cérémonie du Kinkeliba Grand Cru",
    subtitle: "Infusion royale aux feuilles dorées & menthe",
    description: "Service d'infusion de prestige préparé à votre table, associant les feuilles rares de Kinkeliba du Mandé et menthe fraîche de Baguinéda.",
    price: "6 000 FCFA / serv.",
    tags: ["Cérémonie", "Plantes", "Prestige"],
    pairing: "Parfait pour clôturer vos dégustations en douceur",
    itemCode: "V-01",
    isSpecial: true,
  },
  {
    id: "c2",
    category: "cave",
    name: "Grands Crus & Champagnes",
    subtitle: "Sélection conservée en cave régulée à Bamako",
    description: "Carte privée des plus grands domaines et champagnes d'exception conservés à hygrométrie et température idéales à Bamako.",
    price: "Sur Demande (dès 65 000 FCFA)",
    tags: ["Cave Privée", "Prestige"],
    pairing: "Accords personnalisés créés pour votre table",
    itemCode: "V-02",
    isSpecial: true,
  },
];

interface InteractiveMenuProps {
  onOpenReservation?: () => void;
}

export default function InteractiveMenuExperience({ onOpenReservation }: InteractiveMenuProps) {
  const [activeTab, setActiveTab] = useState<"entrees" | "plats" | "desserts" | "cave">("plats");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  const toggleFav = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="space-y-8 py-6">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <p className="eyebrow-label">Carte Gastronomique</p>
        <h2 className="text-editorial-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
          La Haute Table Malienne
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
          Chaque création met en valeur la richesse exceptionnelle des terroirs du Mali : poissons nobles du Niger, viandes sahéliennes et fruits d&apos;or de Sikasso.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-800 pb-4">
        {[
          { id: "entrees", label: "Entrées", count: "3" },
          { id: "plats", label: "Plats", count: "3" },
          { id: "desserts", label: "Desserts", count: "3" },
          { id: "cave", label: "Infusions & Cave", count: "2" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-amber-400 text-black font-bold"
                  : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-black/20 text-black font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => {
          const isFav = !!favorites[item.id];
          return (
            <div
              key={item.id}
              className="rounded-2xl p-5 sm:p-6 bg-[#121216] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between min-w-0"
            >
              <div className="space-y-3.5">
                {/* Header Code, Favorite & Price */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-amber-400 font-mono text-xs font-bold shrink-0">
                    {item.itemCode}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleFav(item.id)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        isFav ? "text-rose-400 bg-rose-500/20" : "text-zinc-500 hover:text-white bg-zinc-800"
                      }`}
                      aria-label="Ajouter aux favoris"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-rose-400" : ""}`} />
                    </button>

                    <span className="text-base sm:text-lg font-serif font-bold text-amber-300 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-editorial-serif text-lg sm:text-xl font-bold text-white break-words">
                    {item.name}
                  </h3>
                  <div className="text-xs text-zinc-400 font-medium mt-1 leading-snug">
                    {item.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Pairing & Action */}
              <div className="mt-5 pt-3.5 border-t border-zinc-800 space-y-2.5">
                <div className="text-[11px] text-zinc-400 truncate">
                  <span className="font-semibold text-zinc-300">Accord : </span>
                  <span className="text-amber-200">{item.pairing.replace("Accord : ", "")}</span>
                </div>

                <button
                  onClick={onOpenReservation}
                  className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-zinc-700 transition-colors cursor-pointer"
                >
                  Sélectionner pour ma réservation
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tasting Menu Banner */}
      <div className="rounded-2xl p-6 sm:p-8 bg-zinc-900 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl text-left">
          <p className="eyebrow-label text-[10px]">Service Spécial</p>
          <h3 className="text-editorial-serif text-xl sm:text-2xl font-bold text-white">
            Menu Dégustation Mandé en 7 Temps
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Parcours culinaire exclusif à travers les trésors du Mali : du Capitaine du fleuve Niger au filet de zébu, jusqu&apos;aux douceurs de mangues de Sikasso et Zaban sauvage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <div className="text-center sm:text-right">
            <div className="text-xl sm:text-2xl font-serif font-bold text-amber-300">65 000 FCFA</div>
            <div className="text-[10px] text-zinc-400">Accords Boissons : + 25 000 FCFA</div>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Réserver le Menu 7 Temps
          </button>
        </div>
      </div>
    </section>
  );
}
