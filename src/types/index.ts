import { IconType } from "@/components/ui/Icon";

export interface Service {
  id: string;
  name: string;
  org: string;
  desc: string;
  features: string[];
  icon: IconType;
  tag: string;
  colorClass: string;
}

export interface FibreTier {
  label: string;
  price: number;
}

export interface DCRackPrice {
  label: string;
  price: number;
}

export interface EstimatorFibreDuration {
  value: number;
  label: string;
  discount?: number;
}

export interface Region {
  name: string;
  status: "active" | "progress" | "planned";
  coverage: string;
  channels: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type ContactTabKey = "technique" | "devis" | "partenariat";

export interface ContactFormData {
  tab: ContactTabKey;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  partnershipType?: string;
  message: string;
}
