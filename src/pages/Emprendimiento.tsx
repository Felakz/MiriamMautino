import { motion } from "framer-motion";
import { FaRocket, FaDollarSign, FaCrown, FaUsers, FaChartLine, FaGift, FaTrophy, FaHandshake, FaHeart, FaFireAlt, FaLightbulb, FaShieldAlt, FaStar, FaArrowRight, FaPlay } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

const benefits = [
  {
    icon: FaDollarSign,
    title: "Ganancias Ilimitadas",
    description: "Obtén comisiones atractivas por cada venta y construye un ingreso residual que crece contigo.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: FaRocket,
    title: "Crecimiento Acelerado",
    description: "Accede a herramientas y estrategias probadas para acelerar tu éxito en el mercado.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: FaCrown,
    title: "Se Tu Propio Jefe",
    description: "Trabaja desde donde quieras, cuando quieras y construye tu imperio empresarial.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: FaUsers,
    title: "Comunidad Exclusiva",
    description: "Únete a una red de emprendedores exitosos y comparte experiencias que te enriquecen.",
    color: "from-orange-400 to-red-500"
  }
];

const successStories = [
  {
    name: "María González",
    role: "Emprendedora Líder",
    story: "En solo 6 meses logré triplicar mis ingresos y ahora trabajo desde casa con total libertad.",
    income: "$5,000+ mensual",
    months: 6
  },
  {
    name: "Carlos Rodríguez",
    role: "Distribuidor Premium",
    story: "Dejé mi trabajo de oficina y ahora genero más dinero trabajando medio tiempo.",
    income: "$8,000+ mensual",
    months: 8
  },
  {
    name: "Ana Martínez",
    role: "Líder Regional",
    story: "Construí un equipo sólido que me genera ingresos pasivos mientras duermo.",
    income: "$12,000+ mensual",
    months: 12
  }
];



const steps = [
  {
    number: "01",
    title: "Regístrate Gratis",
    description: "Únete a nuestra plataforma sin costo inicial y accede a todos los recursos.",
    icon: FaRocket
  },
  {
    number: "02",
    title: "Recibe Capacitación",
    description: "Participa en entrenamientos exclusivos y aprende de los mejores.",
    icon: FaLightbulb
  },
  {
    number: "03",
    title: "Comienza a Vender",
    description: "Usa nuestras herramientas y estrategias para generar tus primeras ventas.",
    icon: FaChartLine
  },
  {
    number: "04",
    title: "Construye tu Red",
    description: "Invita a otros emprendedores y multiplica tus ingresos exponencialmente.",
    icon: FaUsers
  }
];

function Emprendimiento() {
  return (
    <div className="min-h-screen pt-24 overflow-hidden">
      {/* Imagen de productos ACTIVZ en la parte superior */}
      <section className="bg-white py-8 flex justify-center items-center">
        <img src="/productos/activz-emprende.png" alt="Productos ACTIVZ Emprende" className="w-full max-w-2xl rounded-xl shadow-lg object-cover" style={{maxHeight: 320}} />
      </section>
      {/* Hero Section Mejorado: Vende con Epigenética */}
      <section className="py-20 bg-gradient-to-br from-purple-50/80 via-white/80 to-pink-50/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <FaFireAlt className="text-lg" />
                ¡Vende con Epigenética!
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">
                  La Ciencia que Vende
                </span><br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Productos Epigenéticos</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ofrece productos respaldados por la <span className="font-bold text-purple-600">epigenética</span>, la tendencia global en salud y bienestar. 
                Diferénciate con resultados reales y una historia científica que cautiva a tus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all"
                >
                  <FaPlay className="text-xl" />
                  ¡Quiero Vender Epigenética!
                  <FaArrowRight className="text-xl" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                  Más Información
                </motion.button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <motion.div className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-500" />
                  <span className="text-gray-700">Ciencia Real</span>
                </motion.div>
                <motion.div className="flex items-center gap-2">
                  <FaChartLine className="text-blue-500" />
                  <span className="text-gray-700">Tendencia Global</span>
                </motion.div>
                <motion.div className="flex items-center gap-2">
                  <FaGift className="text-pink-500" />
                  <span className="text-gray-700">Resultados Visibles</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 rounded-full opacity-30 blur-2xl"
                ></motion.div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <FaTrophy className="text-3xl text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">¡Gana Vendiendo Ciencia!</h3>
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      $15,000+
                    </div>
                    <p className="text-lg text-gray-700">Potencial mensual vendiendo productos epigenéticos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nueva sección: ¿Por qué vender epigenética? */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-500 to-purple-800 bg-clip-text text-transparent">
                ¿Por qué vender productos epigenéticos?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl">
                La epigenética es la ciencia que está revolucionando la salud y el bienestar. Vender productos epigenéticos te permite ofrecer soluciones innovadoras, con respaldo científico y resultados que tus clientes pueden sentir y ver.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4">
                  <FaShieldAlt className="text-3xl text-green-500" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Respaldo Científico</h3>
                    <p className="text-gray-600 text-sm">Basados en estudios epigenéticos, con ingredientes y fórmulas de última generación.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaChartLine className="text-3xl text-blue-500" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Tendencia en Crecimiento</h3>
                    <p className="text-gray-600 text-sm">La epigenética es una de las industrias de mayor crecimiento en el mundo del bienestar y la salud.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaGift className="text-3xl text-pink-500" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Resultados Reales</h3>
                    <p className="text-gray-600 text-sm">Tus clientes notarán cambios positivos en su bienestar, lo que genera confianza y ventas recurrentes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <img src="src/assets/productos/epigenetica1.png" alt="Epigenética productos" className="w-full max-w-md rounded-xl shadow-lg object-cover" style={{maxHeight: 340}} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ¿Por Qué Elegir Nuestro Programa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las ventajas exclusivas que te convertirán en un emprendedor exitoso
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <benefit.icon className="text-2xl text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Historias de Éxito Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a emprendedores que ya están viviendo la vida de sus sueños
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                    <p className="text-purple-600 font-medium">{story.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{story.income}</div>
                    <p className="text-sm text-gray-500">en {story.months} meses</p>
                  </div>
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex justify-center mb-4"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                </motion.div>
                
                <p className="text-gray-600 text-center italic leading-relaxed">"{story.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tu Camino al Éxito en 4 Pasos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y probado que te llevará de principiante a emprendedor exitoso
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg"
                  >
                    {step.number}
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <step.icon className="text-xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/80 via-white/80 to-pink-50/80 backdrop-blur-sm relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-300 to-pink-300 animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <FaRocket className="text-3xl text-white" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ¡Tu Momento es AHORA!
            </h2>
            
            <p className="text-2xl mb-8 text-gray-700">
              No esperes más para cambiar tu vida financiera.<br />
              Únete a miles de emprendedores exitosos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all"
              >
                <FaHandshake className="text-2xl" />
                REGISTRARSE GRATIS
                <FaArrowRight className="text-2xl" />
              </motion.button>
              
              <div className="flex items-center gap-2 text-gray-600">
                <FaHeart className="text-red-500" />
                <span>Sin costo inicial • Sin riesgo</span>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 shadow-lg">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-purple-600">OFERTA LIMITADA:</span> Los primeros 100 registrados reciben 
                capacitación VIP gratuita y Guia de bienestar
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks 
        gradientColors="from-purple-100 via-pink-100 to-purple-200" 
        textColor="text-gray-800"
      />
      
  {/* Botón flotante naranja eliminado */}
      
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Emprendimiento;
