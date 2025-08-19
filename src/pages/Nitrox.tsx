import { FaWhatsapp, FaStar, FaCheckCircle, FaHeart, FaDumbbell, FaLeaf, FaBolt, FaSync, FaRunning } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SocialLinks from "../components/SocialLinks";

const Nitrox = () => {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto Nitrox. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Nitrox
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bebida para mezcla en polvo cargada de Betabel, L-citrulina y Rutinósidos para potenciar la producción de óxido nítrico. Sin cafeína ni estimulantes, mejora tu energía, concentración y recuperación física.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="text-gray-600 ml-2">(4.7/5 - 1,876 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-red-500 mb-8">S/. 280</div>
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg"
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
             <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-100 to-rose-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
  <img 
    src="/NITROX.png" 
    alt="NITROX"
    className="w-64 h-64 object-contain"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
      if (fallback) fallback.style.display = 'flex';
    }}
  />
  <div className="hidden w-64 h-64 bg-gradient-to-br from-red-200 to-rose-200 rounded-lg items-center justify-center">
    <span className="text-6xl font-bold text-red-600">N</span>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué es ACTIVZ NITROXPRO?</h2>
            <p className="text-xl text-gray-600">Bebida en polvo que potencia y equilibra la producción de óxido nítrico para mejorar tu bienestar cardiovascular</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Potencia la producción natural de óxido nítrico",
              "Mejora el bienestar cardiovascular significativamente",
              "Aumenta la energía sin cafeína ni estimulantes",
              "Optimiza la concentración y claridad mental",
              "Acelera la recuperación muscular post-ejercicio",
              "Mejora la absorción de nutrientes del cuerpo",
              "Reduce la fatiga durante ejercicio intenso",
              "Apoya la salud de vasos sanguíneos integralmente"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-red-50 rounded-lg"
              >
                <FaCheckCircle className="text-red-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Beneficios Destacados</h2>
            <p className="text-xl text-gray-600">Descubre cómo NITROXPRO transforma tu salud cardiovascular y rendimiento</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <FaHeart className="text-red-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-600">Salud de Vasos Sanguíneos</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Nuestros vasos sanguíneos conectan y cargan el bienestar de todo el cuerpo. 
                NITROXPRO promueve su salud, ayudando a trabajar de manera más efectiva y eficiente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <FaDumbbell className="text-red-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-600">Resistencia Mental y Física</h3>
              </div>
              <p className="text-gray-700 mb-4">
                El óxido nítrico carga energía para el ejercicio mental y físico. Ya sea alivio muscular, 
                energía mental para reuniones o impulso corporal, NITROXPRO te ayuda a aprovechar tu día al máximo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <FaLeaf className="text-red-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-600">Impulsa Absorción de Nutrientes</h3>
              </div>
              <p className="text-gray-700 mb-4">
                El óxido nítrico mejora la absorción de nutrientes. NITROXPRO aumenta el impacto de 
                suplementos ACTIVZ y alimentos saludables, maximizando su efectividad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <FaBolt className="text-red-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-600">Energía Sin Estimulantes</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Sin cafeína ni estimulantes, NITROXPRO energiza naturalmente, ayuda en la recuperación 
                y mejora la calidad del sueño, proporcionando mejor estado de ánimo y energía sostenida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <FaSync className="text-red-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-600">Solución Integral Anti-Agotamiento</h3>
              </div>
              <p className="text-gray-700 mb-4">
                El agotamiento requiere una solución integral: mayor salud cardiovascular. Tu sistema 
                cardiovascular entrega energía a todo el cuerpo, afectando claridad mental y rendimiento físico.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    x: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <FaRunning className="text-red-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-600">Recuperación Optimizada</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Mejora la resistencia y reduce la fatiga durante ejercicio intenso, disminuye el dolor 
                muscular post-ejercicio y acelera la recuperación con mejor flujo sanguíneo a los músculos.
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
            <p className="text-xl text-gray-600">Ingredientes naturales respaldados por la ciencia para potenciar el óxido nítrico</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Betabel (Rico en nitratos naturales)",
              "L-Citrulina (Aminoácido esencial)",
              "Rutinósidos (Salud vascular premium)",
              "Sistema CyLoc™/DexKey™ (Absorción optimizada)",
              "Vitamina C (Antioxidante cardiovascular)",
              "Potasio (Regulación presión arterial)",
              "Compuestos Vegetales Antioxidantes",
              "Nitratos Biodisponibles Naturales"
            ].map((ingredient, index) => (
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
        gradientColors="from-red-200 via-rose-300 to-pink-200"
        textColor="text-gray-800"
      />
    </div>
  );
};

export default Nitrox;
