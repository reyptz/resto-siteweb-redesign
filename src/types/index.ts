export interface NavItem {
  label: string;
  href: string;
}

export interface TableBookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  seating: string;
  notes?: string;
  winePairing: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
