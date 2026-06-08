import { NavItem } from "@/types";
export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Couverture", href: "/couverture" },
  { label: "Simulateur", href: "/#estimator" },
  { label: "TNT", href: "/services/tnt" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];
export const FOOTER_SERVICES_LINKS: NavItem[] = [
  { label: "Fibre Optique Dédiée", href: "/services/fibre-optique" },
  { label: "Data Center Souverain", href: "/services/data-center" },
  { label: "Diffusion TNT", href: "/services/tnt" },
  { label: "Call Center", href: "/services/call-center" },
  { label: "Points Hauts & Pylônes", href: "/services/points-hauts" },
];
export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { label: "À propos de SMTD-SA", href: "/a-propos" },
  { label: "Couverture Réseau", href: "/couverture" },
  { label: "Recrutement / Carrières", href: "/carrieres" },
  { label: "Appels d'offres", href: "/appels-d-offres" },
  { label: "Contact & Support", href: "/contact" },
];
export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  {
    label: "Politique de Confidentialité",
    href: "/mentions-legales#confidentialite",
  },
  {
    label: "Conditions Générales d'Utilisation",
    href: "/mentions-legales#cgu",
  },
];
