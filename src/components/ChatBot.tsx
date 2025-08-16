import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaRobot } from 'react-icons/fa';

interface ChatBotProps {
  phoneNumber?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ phoneNumber = "51900653836" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  // Mostrar mensaje de bienvenida después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => setShowWelcome(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const quickOptions = [
    {
      emoji: "🛍️",
      title: "Ver Productos",
      description: "Conoce nuestros productos ACTIVZ",
      message: "",
      action: "catalog"
    },
    {
      emoji: "📋",
      title: "Registrarme",
      description: "Quiero ser cliente o emprendedor",
      message: "Hola! Me interesa registrarme. ¿Podrían ayudarme con el proceso de registro?",
      action: "whatsapp"
    },
    {
      emoji: "💬",
      title: "Consulta Personalizada",
      description: "Hablar con un asesor especializado",
      message: "Hola! Necesito una consulta personalizada sobre sus productos. ¿Cuándo podríamos hablar?",
      action: "whatsapp"
    },
    {
      emoji: "❓",
      title: "¿Cómo navegar?",
      description: "Ayuda para usar la página",
      message: "",
      action: "help"
    }
  ];

  const helpSteps = [
    {
      title: "¡Bienvenido a MM Bienestar! 👋",
      content: "Esta página te ayuda a encontrar productos naturales para tu salud y bienestar.",
      tips: ["Navega por el menú superior", "Conoce nuestros productos certificados"]
    },
    {
      title: "Productos ACTIVZ 🌟",
      content: "Encuentra productos epigenéticos de alta calidad:",
      tips: ["LINQ - Salud celular", "GNM-X - Bienestar general", "OPTIMEND - Salud mental", "AIRO/NITROX - Energía y vitalidad"]
    },
    {
      title: "Registro y Contacto 📱",
      content: "Dos formas de unirte a nuestra comunidad:",
      tips: ["Registro Cliente - Para comprar productos", "Registro Emprendedor - Para vender y generar ingresos", "WhatsApp directo para consultas"]
    },
    {
      title: "¿Necesitas más ayuda? 💭",
      content: "Estamos aquí para apoyarte en tu camino hacia el bienestar.",
      tips: ["Contáctanos por WhatsApp", "Revisa las preguntas frecuentes", "Solicita una asesoría gratuita"]
    }
  ];

  const handleWhatsAppContact = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = isMobile 
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleCatalogOpen = () => {
    const catalogUrl = `https://wa.me/c/${phoneNumber}`;
    window.open(catalogUrl, '_blank');
    setIsOpen(false);
  };

  const handleOptionClick = (option: typeof quickOptions[0]) => {
    if (option.action === "whatsapp") {
      handleWhatsAppContact(option.message);
    } else if (option.action === "catalog") {
      handleCatalogOpen();
    } else if (option.action === "help") {
      setShowHelp(true);
      setCurrentStep(0);
      // Mantener el chat abierto para mostrar la ayuda
    }
  };

  const nextStep = () => {
    if (currentStep < helpSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Mensaje de bienvenida flotante */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs border-l-4 border-green-500"
          >
            <div className="flex items-start gap-3">
              <FaRobot className="text-purple-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800 mb-1">
                  ¡Hola! 👋 Soy tu asistente virtual
                </p>
                <p className="text-xs text-gray-600">
                  ¿Necesitas ayuda navegando o quieres contactarnos? ¡Estoy aquí para ayudarte!
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel del ChatBot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-80 max-w-[calc(100vw-3rem)] border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRobot className="text-xl" />
                  <div>
                    <h3 className="font-bold text-sm">Asistente MM</h3>
                    <p className="text-xs opacity-90">Siempre disponible</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowHelp(false);
                    setCurrentStep(0);
                  }}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {showHelp && (
                <>
                  {/* Botón de volver al menú */}
                  <div className="mb-4">
                    <button
                      onClick={() => setShowHelp(false)}
                      className="text-purple-600 hover:bg-purple-100 px-3 py-1 rounded text-sm transition-colors"
                    >
                      ← Volver al menú
                    </button>
                  </div>

                  {/* Help Steps */}
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-4 bg-gray-50 rounded-lg p-3"
                  >
                    <h4 className="font-bold text-purple-600 mb-2 text-sm">
                      {helpSteps[currentStep].title}
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      {helpSteps[currentStep].content}
                    </p>
                    <ul className="space-y-1">
                      {helpSteps[currentStep].tips.map((tip, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Navigation buttons para help steps */}
                    <div className="flex justify-between mt-3">
                      <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`px-3 py-1 text-xs rounded transition-colors ${
                          currentStep === 0 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-purple-600 hover:bg-purple-100'
                        }`}
                      >
                        ← Anterior
                      </button>
                      <span className="text-xs text-gray-500 px-2 py-1">
                        {currentStep + 1} / {helpSteps.length}
                      </span>
                      <button
                        onClick={nextStep}
                        disabled={currentStep === helpSteps.length - 1}
                        className={`px-3 py-1 text-xs rounded transition-colors ${
                          currentStep === helpSteps.length - 1 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-purple-600 hover:bg-purple-100'
                        }`}
                      >
                        Siguiente →
                      </button>
                    </div>
                  </motion.div>
                </>
              )}

              {/* Quick Options - solo se muestran si no está en modo ayuda */}
              {!showHelp && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-3">¿En qué puedo ayudarte?</p>
                  {quickOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left bg-gray-50 hover:bg-purple-50 rounded-lg p-3 transition-colors group border border-transparent hover:border-purple-200"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{option.emoji}</span>
                        <div>
                          <h4 className="font-medium text-sm text-gray-800 group-hover:text-purple-600">
                            {option.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 border-t">
              <p className="text-xs text-gray-500 text-center">
                💬 Respuesta inmediata por WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <FaWhatsapp />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Indicador de notificación (opcional) */}
      {!isOpen && showWelcome && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
