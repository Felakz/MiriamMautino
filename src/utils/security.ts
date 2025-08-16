/**
 * © 2025 Miriam Mautino - MM Bienestar & Emprendimiento
 * Utilitarios de seguridad para protección contra ataques
 */

// Sanitizar inputs para prevenir XSS
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remover < y >
    .replace(/javascript:/gi, '') // Remover javascript:
    .replace(/on\w+=/gi, '') // Remover eventos onclick, onload, etc.
    .replace(/script/gi, '') // Remover palabra script
    .trim()
    .slice(0, 1000); // Limitar longitud
};

// Validar email de forma segura
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Validar teléfono peruano
export const isValidPeruvianPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  return /^9\d{8}$/.test(cleanPhone);
};

// Rate limiting básico (para evitar spam)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (identifier: string, maxRequests = 5, windowMs = 60000): boolean => {
  const now = Date.now();
  const record = requestCounts.get(identifier);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

// Generar nonce para CSP
export const generateNonce = (): string => {
  return btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
};

// Logging seguro (sin exponer datos sensibles)
export const secureLog = (action: string, details: Record<string, any> = {}) => {
  const safeDetails = { ...details };
  delete safeDetails.password;
  delete safeDetails.token;
  delete safeDetails.email;
  
  console.log(`[${new Date().toISOString()}] ${action}:`, safeDetails);
};
