import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaStar } from "react-icons/fa";

export default function Linq() {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto Linq. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Aumenta los niveles de energía naturalmente",
    "Mejora el estado de ánimo y reduce el estrés",
    "Fortalece el sistema inmunológico",
    "Mejora la calidad del sueño",
    "Apoya la función cognitiva",
    "100% ingredientes naturales"
  ];

  const ingredients = [
    "Extracto de Ginseng Coreano",
    "Vitamina B12",
    "Coenzima Q10",
    "Extracto de Ginkgo Biloba",
    "Magnesio",
    "Zinc"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Linq
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                El suplemento premium que revoluciona tu bienestar. Formulado con ingredientes naturales de la más alta calidad para darte la energía y vitalidad que necesitas.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="text-gray-600 ml-2">(4.9/5 - 2,847 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-8">S/. 299</div>
              <button 
                onClick={handleWhatsAppOrder}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white"
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
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <img 
                  src="/LINQ.png" 
                  alt="LINQ"
                  className="w-64 h-64 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback && fallback instanceof HTMLElement) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-64 h-64 bg-gradient-to-br from-yellow-200 to-yellow-200 rounded-lg items-center justify-center">
                  <span className="text-6xl font-bold text-blue-600">L</span>
                </div>
              </div>
              <div className="relative">
                
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Beneficios de Linq</h2>
            <p className="text-xl text-gray-600">Descubre cómo Linq puede transformar tu vida diaria</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg"
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Ingredientes Premium</h2>
            <p className="text-xl text-gray-600">Cada ingrediente ha sido cuidadosamente seleccionado por su calidad y eficacia</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Experimentar Linq?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a miles de personas que ya han transformado su bienestar con Linq
            </p>
            <button 
              onClick={handleWhatsAppOrder}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <FaWhatsapp /> Ordenar Ahora - S/. 299
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
