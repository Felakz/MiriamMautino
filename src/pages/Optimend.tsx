import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaBalanceScale, FaHandHoldingHeart, FaRunning, FaCogs, FaShieldAlt, FaPuzzlePiece } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function Optimend() {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto Optimend. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Inflamación equilibrada y respuesta saludable",
    "Alivia dolores menores y molestias comunes",
    "Mejora la movilidad articular y flexibilidad",
    "Más eficacia que la cúrcuma estándar",
    "Opción más segura que antiinflamatorios comunes",
    "Complemento ideal dentro del 'health mesh' ACTIVZ"
  ];

  const ingredients = [
    "Cúrcuma y Curcumina (medicina ayurvédica)",
    "Boswellia (conocimiento ancestral)",
    "Tetrahidrocurcumina (metabolito especial)",
    "Tecnología CyLoc™ (jaula molecular)",
    "Tecnología DexKey™ (liberación precisa)",
    "Sistema de absorción maximizada"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Optimend
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fórmula avanzada con tecnología patent pending para apoyar inflamación saludable, reducir molestias y promover mejor movilidad articular y flexibilidad.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
                <span className="text-gray-600 ml-2">(4.9/5 - 3,284 reseñas)</span>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-8">S/. 300</div>
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg"
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
             <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
  <img 
    src="/OPTIMEND.png" 
    alt="OPTIMEND"
    className="w-64 h-64 object-contain"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
      if (fallback) fallback.style.display = 'flex';
    }}
  />
  <div className="hidden w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg items-center justify-center">
    <span className="text-6xl font-bold text-purple-600">O</span>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué es ACTIVZ OPTIMEND?</h2>
            <p className="text-xl text-gray-600">Fórmula avanzada que combina medicina ayurvédica con tecnologías innovadoras</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg"
              >
                <FaCheckCircle className="text-purple-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Principales Beneficios</h2>
            <p className="text-xl text-gray-600">Descubre las ventajas únicas de OPTIMEND</p>
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
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <FaBalanceScale className="text-purple-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600">Inflamación Equilibrada</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ayuda a mantener una respuesta inflamatoria saludable, promoviendo el equilibrio natural 
                de tu cuerpo sin efectos secundarios adversos.
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
                    y: [0, -8, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <FaHandHoldingHeart className="text-purple-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600">Alivia Dolores Menores</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Reduce molestias comunes, incluyendo las relacionadas con ejercicio o lesiones, 
                ofreciendo alivio natural y efectivo.
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
                    x: [0, 10, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <FaRunning className="text-purple-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600">Movilidad Articular</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Promueve mayor flexibilidad y movilidad en las articulaciones, mejorando tu 
                calidad de vida y capacidad de movimiento.
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
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <FaCogs className="text-purple-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600">Tecnología Avanzada</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Gracias a CyLoc™ + DexKey™, maximiza la absorción de ingredientes clave, 
                siendo más eficaz que la cúrcuma estándar tradicional.
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
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <FaShieldAlt className="text-purple-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600">Opción Más Segura</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A diferencia de medicamentos convencionales, evita riesgos como problemas cardíacos, 
                gastritis, adicción o complicaciones gastrointestinales.
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
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <FaPuzzlePiece className="text-purple-600 text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600">Health Mesh ACTIVZ</h3>
              </div>
              <p className="text-gray-700 mb-4">
                No reemplaza a GNM-X, sino que lo complementa perfectamente dentro del enfoque 
                holístico de ACTIVZ para una salud celular óptima.
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Tecnologías Innovadoras</h2>
            <p className="text-xl text-gray-600">Combinación única de sabiduría ancestral con ciencia moderna avanzada</p>
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
        gradientColors="from-purple-200 via-purple-300 to-pink-200"
        textColor="text-gray-800"
      />
    </div>
  );
}
