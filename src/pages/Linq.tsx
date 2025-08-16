import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaStar } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function Linq() {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto Linq. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Mejora la función cerebral y la conexión intestino-cerebro",
    "Optimiza la salud intestinal y absorción de nutrientes",
    "Aumenta el metabolismo y controla el apetito",
    "Fortalece el sistema inmunológico",
    "Mejora la salud de la piel y estimula colágeno",
    "Regula la inflamación y mejora el estado de ánimo",
    "Potencia la producción de neurotransmisores",
    "Aumenta el número de mitocondrias (energía celular)"
  ];

  const ingredients = [
    "Fórmula epigenética científica",
    "Moduladores del gen MUC2 (barrera intestinal)",
    "Estimuladores de neurotransmisores intestinales",
    "Potenciadores mitocondriales",
    "Reguladores de sensibilidad a la insulina",
    "Moduladores del sistema inmune",
    "Estimuladores de síntesis de colágeno",
    "Reguladores de citocinas y células T"
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
                Fórmula epigenética científica diseñada para apoyar múltiples sistemas del cuerpo. Mejora la función cerebral, optimiza la salud intestinal, aumenta el metabolismo y fortalece el sistema inmunológico.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="text-gray-600 ml-2">(4.9/5 - 2,847 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-8">S/. 300</div>
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
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mb-8 shadow-2xl">
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
                <div className="hidden w-64 h-64 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg items-center justify-center">
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué es ACTIVZ LINQ?</h2>
            <p className="text-xl text-gray-600">LINQ es una fórmula epigenética científica diseñada para apoyar múltiples sistemas del cuerpo</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg"
              >
                <FaCheckCircle className="text-yellow-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Beneficios Destacados</h2>
            <p className="text-xl text-gray-600">Conoce en detalle cómo LINQ transforma tu salud</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Función Cerebral e Intestinal</h3>
              <p className="text-gray-700 mb-4">
                Potencia la producción de neurotransmisores desde el intestino (nuestro "segundo cerebro"), 
                fortalece la conexión del eje intestino-cerebro y ayuda a equilibrar el microbioma para 
                un mejor estado de ánimo y claridad mental.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Salud Intestinal</h3>
              <p className="text-gray-700 mb-4">
                Influye epigenéticamente en el gen MUC2, reforzando la barrera del intestino y 
                eliminando obstáculos que afectan la absorción de nutrientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Metabolismo Activo</h3>
              <p className="text-gray-700 mb-4">
                Aumenta el número de mitocondrias (las "centrales energéticas" de las células), 
                mejora la sensibilidad a la insulina y favorece la saciedad, ayudando a sentir menos hambre.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Inmunidad Regulada</h3>
              <p className="text-gray-700 mb-4">
                Modula genes responsables del sistema inmune, fortaleciendo su respuesta ante agresiones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Dermis Fortalecida</h3>
              <p className="text-gray-700 mb-4">
                Estimula la síntesis de colágeno y ayuda a equilibrar las defensas de la piel, 
                mejorando su elasticidad y capacidad regenerativa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Inflamación Controlada</h3>
              <p className="text-gray-700 mb-4">
                Regula la respuesta inflamatoria actuando sobre genes relacionados con citocinas y células T.
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
            <p className="text-xl text-gray-600">Tecnología epigenética avanzada para resultados precisos y efectivos</p>
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
        gradientColors="from-yellow-200 via-yellow-300 to-orange-200"
        textColor="text-gray-800"
      />
    </div>
  );
}
