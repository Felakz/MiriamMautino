import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaStar } from "react-icons/fa";

export default function GNMX() {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto GNM-X. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Mejora el rendimiento físico y mental",
    "Acelera la recuperación muscular",
    "Optimiza la concentración y enfoque",
    "Aumenta la resistencia y stamina",
    "Reduce la fatiga y el cansancio",
    "Ideal para deportistas y profesionales"
  ];

  const ingredients = [
    "Creatina Monohidrato",
    "Beta-Alanina",
    "L-Carnitina",
    "Extracto de Rhodiola",
    "Vitaminas del Complejo B",
    "Taurina"
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
                La fórmula avanzada para potenciar tu rendimiento físico y mental. Diseñado especialmente para deportistas y profesionales que buscan excelencia.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="text-gray-600 ml-2">(4.8/5 - 1,952 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-8">S/. 349</div>
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
                  src="/src/assets/productos/GNM-X.png" 
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Beneficios de GNM-X</h2>
            <p className="text-xl text-gray-600">Maximiza tu potencial físico y mental</p>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Ingredientes de Alto Rendimiento</h2>
            <p className="text-xl text-gray-600">Componentes científicamente probados para máxima efectividad</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lleva tu Rendimiento al Siguiente Nivel
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a los atletas y profesionales que confían en GNM-X para alcanzar la excelencia
            </p>
            <button 
              onClick={handleWhatsAppOrder}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <FaWhatsapp /> Ordenar Ahora - S/. 349
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
