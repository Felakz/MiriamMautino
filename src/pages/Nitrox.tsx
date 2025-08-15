import { FaWhatsapp, FaStar, FaCheckCircle } from 'react-icons/fa';
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
                El suplemento definitivo para maximizar tu energía y resistencia.
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

      {/* Beneficios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Beneficios de Nitrox</h2>
          <p className="text-center text-lg text-gray-600 mb-12">Maximiza tu potencial físico y mental</p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Mejora el rendimiento físico y mental", "Acelera la recuperación muscular", "Optimiza la concentración y enfoque", "Aumenta la resistencia y stamina", "Reduce la fatiga y el cansancio", "Ideal para deportistas y profesionales"].map((beneficio, index) => (
              <div key={index} className="flex items-center gap-4 bg-red-50 p-4 rounded-lg shadow">
                <FaCheckCircle className="text-red-500 text-xl flex-shrink-0" />
                <p className="text-gray-700">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredientes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Ingredientes de Alto Rendimiento</h2>
          <p className="text-center text-lg text-gray-600 mb-12">
          Componentes científicamente probados para máxima efectividad</p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Creatina Monohidrato", "Beta-Alanina", "L-Carnitina", "Extracto de Rhodiola", "Vitaminas del Complejo B", "Taurina"].map((ingrediente, index) => (
              <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 font-medium">{ingrediente}</p>
              </div>
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
