import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

export default function Politicas() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Políticas de Privacidad
            </h1>
            <p className="text-xl text-gray-600">
              Última actualización: 11 de agosto de 2025
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
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Información que Recopilamos</h2>
            <p className="text-gray-600 mb-4">Recopilamos la siguiente información:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Información personal (nombre, teléfono, email)</li>
              <li>Información de ubicación (ciudad)</li>
              <li>Preferencias de productos</li>
              <li>Datos de navegación y uso del sitio web</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Cómo Utilizamos su Información</h2>
            <p className="text-gray-600 mb-4">Utilizamos su información para:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Procesar sus solicitudes y consultas</li>
              <li>Proporcionar asesoría personalizada</li>
              <li>Enviar información sobre productos y promociones</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Compartir Información</h2>
            <p className="text-gray-600 mb-6">
              No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, 
              excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Seguridad de los Datos</h2>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información 
              personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Cookies</h2>
            <p className="text-gray-600 mb-6">
              Utilizamos cookies para mejorar su experiencia de navegación. Puede desactivar las cookies en su 
              navegador, aunque esto puede afectar la funcionalidad del sitio web.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Sus Derechos</h2>
            <p className="text-gray-600 mb-4">Usted tiene derecho a:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Rectificar datos incorrectos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Portabilidad de datos</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Contacto</h2>
            <p className="text-gray-600">
              Para ejercer sus derechos o realizar consultas sobre privacidad, contáctenos al teléfono 
              (+51) 900653836 o a través de nuestras redes sociales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks 
        gradientColors="from-purple-200 via-pink-200 to-purple-300" 
        textColor="text-gray-800"
      />
    </div>
  );
}
