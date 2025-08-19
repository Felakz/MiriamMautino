import { FaWhatsapp, FaStar, FaCheckCircle, FaBolt, FaFire, FaLeaf, FaDna, FaSeedling, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SocialLinks from "../components/SocialLinks";

const Airo = () => {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto Airo. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Airo
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Una poderosa fórmula epigenética científicamente comprobada para aumentar la energía y apoyar la pérdida de peso. ¡Una alternativa saludable a las bebidas energéticas, refrescos e incluso el café!
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="text-gray-600 ml-2">(4.8/5 - 2,134 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-orange-500 mb-8">S/. 280</div>
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg"
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
             <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
  <img 
    src="/AIRO.png" 
    alt="AIRO"
    className="w-64 h-64 object-contain"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
      if (fallback) fallback.style.display = 'flex';
    }}
  />
  <div className="hidden w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg items-center justify-center">
    <span className="text-6xl font-bold text-yellow-600">A</span>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué es ACTIVZ AIRO?</h2>
            <p className="text-xl text-gray-600">Una poderosa fórmula epigenética científicamente comprobada para aumentar la energía y apoyar la pérdida de peso</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Aumenta la energía natural sin cafeína excesiva",
              "Estimula el metabolismo para quemar calorías",
              "Suprime el apetito de forma natural",
              "Reduce los antojos y regula el azúcar en sangre",
              "Activadores metabólicos naturales con guaraná",
              "Alternativa saludable a bebidas energéticas y café",
              "Primera bebida epigenética para mezclar",
              "Impulso de energía comparable al café matutino"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg"
              >
                <FaCheckCircle className="text-orange-500 text-xl flex-shrink-0" />
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
            <p className="text-xl text-gray-600">Descubre cómo AIRO transforma tu energía y metabolismo</p>
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
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                >
                  <FaBolt className="text-orange-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600">Energía Natural Sostenida</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Utiliza la ciencia de la expresión genética para aprovechar las funciones naturales de tu cuerpo, 
                proporcionando un impulso de energía comparable al café matutino pero sin los efectos secundarios 
                de las bebidas energéticas tradicionales.
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
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                >
                  <FaFire className="text-orange-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600">Metabolismo Acelerado</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Los activadores metabólicos naturales como el guaraná y el complejo de vitamina B 
                estimulan tu metabolismo para quemar calorías de manera más eficiente, 
                apoyando tus objetivos de pérdida de peso.
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
                    rotate: [0, -360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                >
                  <FaLeaf className="text-orange-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600">Control de Apetito</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Reduce naturalmente los antojos y ayuda a regular los niveles de azúcar en sangre, 
                facilitando el control de las porciones y la adherencia a una alimentación saludable.
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
                    y: [0, -8, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                >
                  <FaDna className="text-orange-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600">Fórmula Epigenética</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Primera bebida para mezclar que utiliza ingredientes epigenéticos para influir en la 
                expresión genética natural, optimizando los procesos metabólicos desde nivel celular.
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
                    scale: [1, 1.1, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                >
                  <FaSeedling className="text-orange-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600">Alternativa Saludable</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Reemplaza las bebidas energéticas, refrescos y café excesivo con una alternativa 
                natural que proporciona energía sin azúcares añadidos ni estimulantes artificiales.
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
                    scale: [1, 1.2, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                >
                  <FaHeart className="text-orange-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600">Soporte Nutricional Completo</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Rico en vitaminas y minerales esenciales que no solo proporcionan energía, 
                sino que también apoyan la función inmunológica y el bienestar general del organismo.
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
            <p className="text-xl text-gray-600">Fórmula epigenética avanzada con ingredientes naturales respaldados por la ciencia</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Guaraná (Energía natural sostenida)",
              "Complejo de Vitamina B (Metabolismo)",
              "Vitamina C (Antioxidante y energía)",
              "Biotina (Metabolismo de grasas)",
              "Niacina (Circulación y energía)",
              "Magnesio (Función muscular)",
              "Potasio (Equilibrio electrolítico)",
              "Zinc (Metabolismo y inmunidad)"
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
        gradientColors="from-orange-200 via-orange-300 to-yellow-200"
        textColor="text-gray-800"
      />
    </div>
  );
};

export default Airo;
