export function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  // Simple validation for international or Malian phone numbers (typically 8 digits or with +223)
  const clean = phone.replace(/[\s\-\+\(\)]/g, "");
  return clean.length >= 8 && clean.length <= 15;
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}
