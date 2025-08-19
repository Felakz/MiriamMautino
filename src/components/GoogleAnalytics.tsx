import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ID de Google Analytics para MM Bienestar & Emprendimiento
const GA_MEASUREMENT_ID = 'G-9SPWFK871W'; // ✅ CONFIGURADO CORRECTAMENTE

// Función para cargar Google Analytics
const loadGoogleAnalytics = () => {
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);
};

// Hook para Google Analytics
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Cargar GA solo una vez
    if (!window.gtag) {
      loadGoogleAnalytics();
    }
  }, []);

  useEffect(() => {
    // Rastrear cambios de página
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

// Funciones para eventos personalizados
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Eventos específicos para tu negocio
export const trackWhatsAppClick = () => {
  trackEvent('contact_whatsapp', {
    method: 'whatsapp',
    content_type: 'contact_button'
  });
};

export const trackProductView = (productName: string) => {
  trackEvent('view_item', {
    item_name: productName,
    content_type: 'product'
  });
};

export const trackFormSubmit = (formType: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    content_type: 'registration'
  });
};

// Componente principal
const GoogleAnalytics = () => {
  useGoogleAnalytics();
  return null;
};

export default GoogleAnalytics;
