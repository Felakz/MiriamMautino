import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

export default function Derechos() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ejercicio de Derechos
            </h1>
            <p className="text-xl text-gray-600">
              Conozca sus derechos de protección de datos personales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sus Derechos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Derecho de Acceso",
                  description: "Solicitar información sobre qué datos personales tenemos sobre usted"
                },
                {
                  title: "Derecho de Rectificación",
                  description: "Corregir datos personales inexactos o incompletos"
                },
                {
                  title: "Derecho de Eliminación",
                  description: "Solicitar la eliminación de sus datos personales"
                },
                {
                  title: "Derecho de Oposición",
                  description: "Oponerse al procesamiento de sus datos personales"
                },
                {
                  title: "Derecho de Portabilidad",
                  description: "Recibir sus datos en un formato estructurado"
                },
                {
                  title: "Derecho de Limitación",
                  description: "Limitar el procesamiento de sus datos personales"
                }
              ].map((derecho, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{derecho.title}</h3>
                  <p className="text-gray-600">{derecho.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cómo Ejercer sus Derechos</h2>
            <p className="text-gray-600 mb-6">
              Para ejercer cualquiera de estos derechos, puede contactarnos a través de los siguientes medios:
            </p>
            
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Información de Contacto</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Teléfono:</strong> (+51) 900653836</li>
                <li><strong>Ubicación:</strong> Centro en Los Olivos</li>
                <li><strong>Redes Sociales:</strong> Facebook, Instagram, YouTube, TikTok</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">Tiempo de Respuesta</h2>
            <p className="text-gray-600 mb-6">
              Todas las solicitudes de ejercicio de derechos serán procesadas en un plazo máximo de 
              <strong> 30 días hábiles</strong> a partir de la fecha de recepción de la solicitud completa.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Información Requerida</h2>
            <p className="text-gray-600 mb-4">Para procesar su solicitud, necesitaremos:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Identificación completa (nombre y apellidos)</li>
              <li>Información de contacto (teléfono y/o email)</li>
              <li>Descripción clara del derecho que desea ejercer</li>
              <li>Detalles específicos sobre su solicitud</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Nota Importante</h3>
              <p className="text-blue-700">
                Nos comprometemos a proteger su privacidad y manejar sus datos personales de acuerdo 
                con las mejores prácticas de seguridad y las regulaciones aplicables de protección de datos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks />
    </div>
  );
}
