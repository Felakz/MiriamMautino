import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaStar } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function GNMX() {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto GNM-X. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Reducción del estrés oxidativo y envejecimiento celular",
    "Optimización de la expresión génica (epigenética)",
    "Protección prolongada de las funciones de Nrf2",
    "Activación robusta de Nrf2 (proporción 10:1)",
    "Combate efectos negativos del envejecimiento",
    "Protección contra factores ambientales adversos"
  ];

  const ingredients = [
    "Activador potente de proteína Nrf2",
    "Reguladores de expresión genética",
    "Moduladores epigenéticos celulares",
    "Mecanismos antioxidantes naturales",
    "Inhibidores de rutas de apagado intracelular",
    "Protectores contra estrés oxidativo"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"
              >
                GNMX
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                El activador más potente de Nrf2 en el mercado. Formulado para regular la expresión genética y generar cambios epigenéticos que favorecen una función celular óptima.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="text-gray-600 ml-2">(4.8/5 - 1,952 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-8">S/. 270</div>
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg"
              >
                <FaWhatsapp /> Ordenar por WhatsApp
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <img 
                  src="/GNM-X.png" 
                  alt="GNM-X"
                  className="w-64 h-64 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg items-center justify-center">
                  <span className="text-6xl font-bold text-green-600">G</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué es GNM-X?</h2>
            <p className="text-xl text-gray-600">El activador más potente de Nrf2 que regula la expresión genética para una función celular óptima</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Beneficios Principales</h2>
            <p className="text-xl text-gray-600">Descubre cómo GNM-X transforma tu salud celular</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-600">Reducción del Estrés Oxidativo</h3>
              <p className="text-gray-700 mb-4">
                Activa mecanismos antioxidantes naturales para proteger tus células del envejecimiento 
                celular y combate los efectos negativos de factores ambientales adversos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-600">Optimización Genética</h3>
              <p className="text-gray-700 mb-4">
                Mediante influencias epigenéticas, ayuda a que tus genes funcionen mejor frente a 
                factores externos adversos, regulando la expresión genética de manera óptima.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-600">Protección Prolongada Nrf2</h3>
              <p className="text-gray-700 mb-4">
                Inhibe rutas de apagado intracelular para que la proteína Nrf2 actúe más tiempo, 
                proporcionando protección celular extendida y continua.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-600">Activación Robusta 10:1</h3>
              <p className="text-gray-700 mb-4">
                GNM-X activa Nrf2 en una proporción de 10:1 comparado con productos similares, 
                ofreciendo la activación más potente disponible en el mercado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Componentes Científicos</h2>
            <p className="text-xl text-gray-600">Tecnología avanzada para activación celular y protección antioxidante</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h3 className="text-lg font-semibold text-gray-800">{ingredient}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <SocialLinks 
        gradientColors="from-green-200 via-green-300 to-emerald-200"
        textColor="text-gray-800"
      />
    </div>
  );
}
