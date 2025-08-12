import { FaWhatsapp, FaStar } from 'react-icons/fa';
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
                Suplemento innovador para el bienestar respiratorio. Ayuda a mantener las vías respiratorias despejadas y saludables.
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

      {/* Beneficios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Beneficios de Airo</h2>
          <p className="text-center text-lg text-gray-600 mb-12">Maximiza tu bienestar respiratorio</p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Mejora la capacidad respiratoria",
              "Reduce la inflamación en las vías respiratorias",
              "Promueve la oxigenación eficiente",
              "Alivia síntomas de alergias respiratorias",
              "Ideal para personas con asma",
              "Fortalece el sistema inmunológico",
            ].map((beneficio, index) => (
              <div key={index} className="flex items-center gap-4 bg-yellow-50 p-4 rounded-lg shadow">
                <span className="text-yellow-500 text-xl">✔</span>
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
          <p className="text-center text-lg text-gray-600 mb-12">Componentes científicamente probados para máxima efectividad</p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Extracto de Eucalipto",
              "Vitamina C",
              "Zinc",
              "Extracto de Menta",
              "Magnesio",
              "Extracto de Jengibre",
            ].map((ingrediente, index) => (
              <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 font-medium">{ingrediente}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <SocialLinks 
        gradientColors="from-orange-500 to-orange-600"
        inputBgColor="bg-orange-700"
        buttonTextColor="text-orange-600"
      />
    </div>
  );
};

export default Airo;
