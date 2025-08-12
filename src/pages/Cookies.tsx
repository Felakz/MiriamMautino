import { motion } from "framer-motion";
import { useState } from "react";
import SocialLinks from "../components/SocialLinks";

export default function Cookies() {
  const [preferences, setPreferences] = useState({
    esenciales: true,
    analiticas: false,
    marketing: false,
    funcionales: false
  });

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'esenciales') return; // Las esenciales no se pueden desactivar
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Preferencias guardadas exitosamente');
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Política de Cookies
            </h1>
            <p className="text-xl text-gray-600">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué son las Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro 
              sitio web. Nos ayudan a mejorar su experiencia de navegación y proporcionarle contenido personalizado.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tipos de Cookies que Utilizamos</h2>
            
            <div className="grid gap-6 mb-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">🔒 Cookies Esenciales</h3>
                <p className="text-gray-600 mb-3">
                  Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Cookies de sesión</li>
                  <li>Cookies de seguridad</li>
                  <li>Cookies de funcionalidad básica</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">📊 Cookies Analíticas</h3>
                <p className="text-gray-600 mb-3">
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Google Analytics</li>
                  <li>Métricas de rendimiento</li>
                  <li>Análisis de comportamiento</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">🎯 Cookies de Marketing</h3>
                <p className="text-gray-600 mb-3">
                  Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Cookies de redes sociales</li>
                  <li>Seguimiento de conversiones</li>
                  <li>Publicidad personalizada</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">⚙️ Cookies Funcionales</h3>
                <p className="text-gray-600 mb-3">
                  Mejoran la funcionalidad y personalización del sitio web.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Preferencias de idioma</li>
                  <li>Configuraciones personalizadas</li>
                  <li>Recordar información del usuario</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Gestionar Preferencias de Cookies
            </h2>
            <p className="text-gray-600">
              Configure qué tipos de cookies desea permitir
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card space-y-6"
          >
            {/* Cookies Esenciales */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-100">
              <div>
                <h3 className="font-bold text-gray-800">Cookies Esenciales</h3>
                <p className="text-sm text-gray-600">Siempre activadas - Necesarias para el funcionamiento del sitio</p>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Activado
              </div>
            </div>

            {/* Cookies Analíticas */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800">Cookies Analíticas</h3>
                <p className="text-sm text-gray-600">Nos ayudan a mejorar el sitio web</p>
              </div>
              <button
                onClick={() => handlePreferenceChange('analiticas')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  preferences.analiticas
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {preferences.analiticas ? 'Activado' : 'Desactivado'}
              </button>
            </div>

            {/* Cookies de Marketing */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800">Cookies de Marketing</h3>
                <p className="text-sm text-gray-600">Para publicidad personalizada</p>
              </div>
              <button
                onClick={() => handlePreferenceChange('marketing')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  preferences.marketing
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {preferences.marketing ? 'Activado' : 'Desactivado'}
              </button>
            </div>

            {/* Cookies Funcionales */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800">Cookies Funcionales</h3>
                <p className="text-sm text-gray-600">Para una mejor experiencia de usuario</p>
              </div>
              <button
                onClick={() => handlePreferenceChange('funcionales')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  preferences.funcionales
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {preferences.funcionales ? 'Activado' : 'Desactivado'}
              </button>
            </div>

            <motion.button
              onClick={savePreferences}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              Guardar Preferencias
            </motion.button>

            <p className="text-sm text-gray-500 text-center">
              Puede cambiar estas preferencias en cualquier momento visitando esta página.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cómo Controlar las Cookies</h2>
            <p className="text-gray-600 mb-4">
              También puede controlar las cookies directamente desde su navegador:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos de sitio</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacto</h2>
            <p className="text-gray-600">
              Si tiene preguntas sobre nuestra política de cookies, puede contactarnos al teléfono 
              (+51) 900653836 o a través de nuestras redes sociales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks />
    </div>
  );
}
