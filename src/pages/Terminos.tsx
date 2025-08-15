import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

export default function Terminos() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Términos y Condiciones
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Aceptación de los Términos</h2>
            <p className="text-gray-600 mb-6">
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones de uso. 
              Si no está de acuerdo con alguna parte de estos términos, entonces no debe utilizar nuestro sitio web.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Descripción del Servicio</h2>
            <p className="text-gray-600 mb-6">
              Expo Music es una plataforma que ofrece productos de salud y bienestar natural. Nos especializamos en 
              suplementos nutricionales de alta calidad respaldados por investigación científica.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Uso del Sitio Web</h2>
            <p className="text-gray-600 mb-4">Usted se compromete a:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Utilizar el sitio web únicamente para fines legales</li>
              <li>No interferir con el funcionamiento del sitio</li>
              <li>No intentar acceder a áreas restringidas</li>
              <li>Proporcionar información veraz en los formularios</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Productos y Servicios</h2>
            <p className="text-gray-600 mb-6">
              Todos los productos ofrecidos están sujetos a disponibilidad. Los precios pueden cambiar sin previo aviso. 
              Nos reservamos el derecho de modificar o discontinuar productos en cualquier momento.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 mb-6">
              En ningún caso seremos responsables por daños directos, indirectos, incidentales, especiales o 
              consecuentes que resulten del uso o la imposibilidad de usar el sitio web.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Modificaciones</h2>
            <p className="text-gray-600 mb-6">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones 
              entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Contacto</h2>
            <p className="text-gray-600">
              Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos al teléfono 
              (+51) 900653836 o a través de nuestras redes sociales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks 
        gradientColors="from-pink-200 via-purple-200 to-pink-300" 
        textColor="text-gray-800"
      />
    </div>
  );
}
