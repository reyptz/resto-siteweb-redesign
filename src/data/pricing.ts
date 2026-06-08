import { FibreTier, DCRackPrice, EstimatorFibreDuration } from "@/types";

export const FIBRE_TIERS: FibreTier[] = [
  { label: "10 Mbps", price: 150000 },
  { label: "50 Mbps", price: 450000 },
  { label: "100 Mbps", price: 750000 },
  { label: "200 Mbps", price: 1200000 },
  { label: "500 Mbps", price: 2500000 },
  { label: "1 Gbps", price: 4500000 },
];

export const DC_RACK_PRICES: DCRackPrice[] = [
  { label: "1U", price: 80000 },
  { label: "2U", price: 140000 },
  { label: "4U", price: 250000 },
  { label: "8U", price: 450000 },
  { label: "½ Baie", price: 900000 },
  { label: "Baie complète", price: 1600000 },
];

export const DC_STORAGE_UNIT_PRICE = 500; // 500 FCFA par Go par mois

export const ESTIMATOR_FIBRE_DURATIONS: EstimatorFibreDuration[] = [
  { value: 1, label: "Mensuel" },
  { value: 3, label: "Trimestriel" },
  { value: 6, label: "Semestriel" },
  { value: 12, label: "Annuel (-10%)", discount: 0.1 },
];
