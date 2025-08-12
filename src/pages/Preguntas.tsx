import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function Preguntas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué hace que sus productos sean diferentes a otros en el mercado?",
      answer: "Nuestros productos están respaldados por investigación en epigenética y están formulados con ingredientes naturales de la más alta calidad. Además, cada producto es seleccionado personalmente por Miriam, quien como madre comprende las necesidades reales de las familias."
    },
    {
      question: "¿Los productos son seguros para toda la familia?",
      answer: "Sí, todos nuestros productos son naturales y seguros. Sin embargo, recomendamos consultar con un profesional de la salud antes de comenzar cualquier suplemento, especialmente en casos de embarazo, lactancia o condiciones médicas específicas."
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer: "Los resultados pueden variar según la persona y el producto. Generalmente, muchos clientes reportan mejoras en las primeras 2-4 semanas de uso consistente. Es importante ser constante y seguir las recomendaciones de uso."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, ofrecemos garantía de satisfacción. Si no está completamente satisfecho con su compra, puede contactarnos dentro de los primeros 30 días para resolver cualquier inconveniente."
    },
    {
      question: "¿Cómo puedo convertirme en emprendedora con ustedes?",
      answer: "¡Nos encanta que preguntes! Tenemos un programa de emprendimiento diseñado especialmente para madres. Puedes contactarnos por WhatsApp y te explicaremos todo sobre cómo puedes comenzar tu propio negocio con nosotros."
    },
    {
      question: "¿Realizan entregas a todo el país?",
      answer: "Sí, realizamos entregas a nivel nacional. Los tiempos de entrega varían según la ubicación, generalmente entre 2-7 días hábiles. El costo de envío se calcula según el destino y el peso del pedido."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, depósitos, Yape, Plin y pago contra entrega en algunas zonas de Lima. Para mayor comodidad, también aceptamos pagos fraccionados en algunos productos."
    },
    {
      question: "¿Puedo consultar sobre qué producto es mejor para mi caso específico?",
      answer: "¡Absolutamente! Miriam y nuestro equipo ofrecen asesoría personalizada gratuita. Puedes contactarnos por WhatsApp y te ayudaremos a elegir el producto más adecuado para tus necesidades específicas."
    },
    {
      question: "¿Los productos tienen efectos secundarios?",
      answer: "Al ser productos naturales, los efectos secundarios son mínimos. Sin embargo, algunas personas pueden experimentar ajustes iniciales como cambios digestivos leves. Siempre recomendamos comenzar con las dosis sugeridas."
    },
    {
      question: "¿Ofrecen descuentos por compras al por mayor?",
      answer: "Sí, ofrecemos descuentos especiales para compras de múltiples productos y para nuestras emprendedoras. También tenemos promociones mensuales y descuentos para clientes frecuentes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
            </p>
            <div className="text-6xl mb-6">❓💡🤔</div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaQuestionCircle className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Las Respuestas que Buscas
            </h2>
            <p className="text-lg text-gray-600">
              Hemos recopilado las preguntas más frecuentes de nuestros clientes
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FaChevronDown className="text-yellow-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-yellow-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">¿No Encontraste tu Respuesta?</h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos aquí para ayudarte. Contáctanos directamente y resolveremos todas tus dudas
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Formas de Contacto</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">📱</div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-90">Respuesta inmediata</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📞</div>
                  <p className="font-semibold">Llamada</p>
                  <p className="text-sm opacity-90">(+51) 900 653 836</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📲</div>
                  <p className="font-semibold">Redes Sociales</p>
                  <p className="text-sm opacity-90">Facebook, Instagram</p>
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => {
                const mensaje = "¡Hola! Tengo algunas preguntas que no encontré en la sección de FAQ. ¿Podrían ayudarme?";
                const numeroWhatsApp = "51900653836";
                const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
                window.open(url, "_blank");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
            >
              💬 Hacer una Pregunta
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Consejos para Mejores Resultados
            </h2>
            <p className="text-lg text-gray-600">
              Recomendaciones de Miriam para maximizar los beneficios de nuestros productos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "⏰",
                title: "Consistencia es Clave",
                description: "Toma los productos a la misma hora todos los días para crear un hábito saludable y obtener mejores resultados."
              },
              {
                icon: "💧",
                title: "Hidratación Adecuada",
                description: "Bebe suficiente agua durante el día. La hidratación ayuda a que tu cuerpo absorba mejor los nutrientes."
              },
              {
                icon: "🥗",
                title: "Alimentación Balanceada",
                description: "Los suplementos son complementos. Mantén una dieta equilibrada rica en frutas y verduras."
              },
              {
                icon: "😴",
                title: "Descanso de Calidad",
                description: "Un buen descanso permite que tu cuerpo se regenere y aproveche al máximo los beneficios de los productos."
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks gradientColors="from-purple-500 to-pink-600" />
    </div>
  );
}
