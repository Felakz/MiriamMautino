import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function Optimend() {
  const handleWhatsAppOrder = () => {
    const message = "Hola, estoy interesado/a en el producto Optimend. ¿Podrían brindarme más información sobre precios y disponibilidad?";
    const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Potencia la memoria y el aprendizaje",
    "Aumenta la concentración y claridad mental",
    "Reduce el estrés y la ansiedad",
    "Mejora la función cognitiva general",
    "Protege contra el deterioro mental",
    "Optimiza el rendimiento cerebral"
  ];

  const ingredients = [
    "Lion's Mane Mushroom",
    "Bacopa Monnieri",
    "Omega-3 DHA",
    "Fosfatidilserina",
    "Vitamina D3",
    "Acetil L-Carnitina"
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
                El revolucionario suplemento nootrópico que desbloquea todo el potencial de tu mente. Mejora tu capacidad cognitiva y claridad mental como nunca antes.
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Beneficios de Optimend</h2>
            <p className="text-xl text-gray-600">Desbloquea todo el potencial de tu mente</p>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Ingredientes Nootrópicos Premium</h2>
            <p className="text-xl text-gray-600">Componentes respaldados por la neurociencia para optimizar tu cerebro</p>
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
        gradientColors="from-purple-500 to-purple-600"
      />
    </div>
  );
}
