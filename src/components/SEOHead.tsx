import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({
  title = "MM Bienestar & Emprendimiento - Productos Naturales Activz",
  description = "Descubre productos naturales premium de Activz. Linq, GNM-X, Optimend, Airo y Nitrox para tu bienestar integral. Entrega en Lima Norte. Consultoría personalizada con Miriam Mautino.",
  keywords = "productos naturales, activz, bienestar, salud natural, suplementos, Lima Norte, Miriam Mautino, linq, gnm-x, optimend, airo, nitrox, epigenética",
  image = "/OPTIMEND-detail.png",
  url = "https://miriam-mautino.vercel.app"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Establecer el título
    document.title = title;
    
    // Función para establecer meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    
    // Meta tags básicos
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Miriam Mautino - MM Bienestar & Emprendimiento');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'Spanish');
    setMetaTag('theme-color', '#9333ea');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:locale', 'es_PE', true);
    setMetaTag('og:site_name', 'MM Bienestar & Emprendimiento', true);
    
    // Twitter tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:url', url);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    
    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
    
    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MM Bienestar & Emprendimiento",
      "description": description,
      "image": image,
      "telephone": "+51900653836",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Olivos",
        "addressRegion": "Lima",
        "addressCountry": "PE"
      },
      "url": url,
      "sameAs": [
        "https://web.facebook.com/EpigeneticaSaludNatural",
        "https://www.instagram.com/miriammautino.activz",
        "https://www.youtube.com/@miriammautino1",
        "https://www.tiktok.com/@miriamepigenetica"
      ]
    };
    
    let ldJsonScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!ldJsonScript) {
      ldJsonScript = document.createElement('script');
      ldJsonScript.type = 'application/ld+json';
      document.head.appendChild(ldJsonScript);
    }
    ldJsonScript.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, image, url]);
  
  return null; // Este componente no renderiza nada visible
};

export default SEOHead;
