import { motion } from "framer-motion";
import { FaCheckCircle, FaDna, FaBrain, FaHeart, FaRunning, FaMicroscope, FaStar, FaLightbulb, FaRocket, FaFlask, FaLeaf } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

const epigeneticBenefits = [
  "Reduce el dolor crónico de manera natural",
  "Mejora significativamente tu estado de ánimo",
  "Acelera los tiempos de recuperación post-ejercicio",
  "Optimiza la recuperación después de cirugías",
  "Libera el potencial completo de tu cuerpo",
  "Mejora tu salud general de forma integral"
];

const scienceFacts = [
  { 
    icon: FaDna, 
    title: "Sin Alterar ADN", 
    description: "Influye en los genes sin cambiar su secuencia genética" 
  },
  { 
    icon: FaBrain, 
    title: "Factores Ambientales", 
    description: "Responde a dieta, estrés, ejercicio y entorno" 
  },
  { 
    icon: FaHeart, 
    title: "Impacto en Salud", 
    description: "Previene cáncer, diabetes y enfermedades cardiovasculares" 
  },
  { 
    icon: FaRunning, 
    title: "Resultados Medibles", 
    description: "Cambios observables en bienestar y rendimiento" 
  }
];

const researchStats = [
  { number: "20+", label: "Años de Investigación" },
  { number: "1000+", label: "Estudios Científicos" },
  { number: "95%", label: "Efectividad Comprobada" },
  { number: "100%", label: "Base Científica" }
];

function InfoProducto() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/80 via-white/80 to-pink-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <motion.div
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <FaDna className="text-white text-3xl" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">
              Epigenética Revolucionaria
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Descubre cómo la <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">epigenética</span> puede transformar tu salud 
              sin alterar tu ADN. La ciencia que permite <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">liberar el potencial de tu cuerpo</span> 
              a través de factores ambientales y de estilo de vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Epigenetics Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">¿Qué es la Epigenética?</h2>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                La <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">epigenética</span> es el campo revolucionario que estudia cómo 
                factores como la <span className="font-semibold">dieta, estrés, ejercicio y entorno</span> pueden 
                <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> activar o desactivar genes específicos</span> sin alterar 
                la secuencia del ADN. Es como tener un <span className="font-bold">interruptor inteligente</span> que 
                controla qué genes trabajan para tu bienestar.
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scienceFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center bg-gradient-to-br from-blue-50 to-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <fact.icon className="text-white text-xl" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
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
                  className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <FaLightbulb className="text-white text-xl" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">EL POTENCIAL</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                <span className="font-bold text-purple-600">Imagina utilizar la epigenética</span> para liberar el potencial 
                completo de tu cuerpo y transformar tu salud de maneras que antes parecían imposibles.
              </p>
              <div className="space-y-4">
                {epigeneticBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <FaCheckCircle className="text-purple-500 text-xl flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 rounded-full opacity-20"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaDna className="text-8xl text-purple-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800">Tu Potencial</h3>
                    <p className="text-gray-600">Liberado por la Ciencia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
              >
                <FaMicroscope className="text-white text-xl" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">LA CIENCIA</h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Los científicos <span className="font-bold text-purple-600">ya han aprendido</span> cómo funciona la epigenética. 
                <span className="font-bold text-purple-600"> Ahora es posible influir en tus genes</span> para mejorar 
                tu salud general de manera segura y efectiva.
              </p>
              <div className="flex items-center justify-center gap-2">
                <FaStar className="text-pink-500 text-xl" />
                <span className="font-bold text-gray-800">La revolución científica está aquí</span>
                <FaStar className="text-pink-500 text-xl" />
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg text-gray-800 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
              >
                <FaStar className="text-white text-lg" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">BENEFICIOS DE LA EPIGENÉTICA</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Descubre cómo la epigenética está revolucionando nuestra comprensión de la salud
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaRunning className="text-white text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Mejor Comprensión del Desarrollo Humano</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Al estudiar los <span className="font-bold text-purple-600">cambios epigenéticos</span> que ocurren durante el desarrollo, 
                se puede obtener una mejor comprensión de los mecanismos subyacentes y 
                <span className="font-bold text-purple-600"> cómo se forman diferentes tejidos y órganos</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaHeart className="text-white text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Influencia en el Estilo de Vida</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                El <span className="font-bold text-purple-600">estilo de vida</span>, como la dieta, el ejercicio y el estrés, 
                pueden afectar la expresión génica a través de cambios epigenéticos. 
                <span className="font-bold text-pink-600"> Nuestras elecciones diarias</span> pueden influir en nuestra salud y bienestar a nivel epigenético.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaMicroscope className="text-white text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Prevención de Enfermedades</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Entendiendo qué <span className="font-bold text-purple-600">factores ambientales</span> influyen en la expresión génica, 
                identificamos señales asociados a enfermedades. 
                <span className="font-bold text-pink-600"> Esto ayuda a la detección y prevención</span> de enfermedades.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaDna className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">El Poder Está En Tus Manos</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                La epigenética nos demuestra que <span className="font-bold text-purple-600">tenemos más control</span> sobre nuestra salud de lo que pensábamos. 
                Cada decisión que tomas puede influir positivamente en <span className="font-bold text-purple-600">la expresión de tus genes</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Datos Científicos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <FaMicroscope className="text-white text-2xl" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">Datos Científicos</h2>
            <p className="text-lg text-gray-600">Explora los resultados de búsqueda en estudios científicos relacionados con nuestros productos.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Imagen Centrada con Fondo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg"
            >
              <img
                src="/src/assets/productos/productos-todos.png"
                alt="Productos Científicos"
                className="max-w-full rounded-lg shadow-md"
              />
            </motion.div>

            {/* Descripciones Alrededor */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <FaFlask className="text-white text-lg" />
                </motion.div>
                <h3 className="text-xl font-bold text-orange-600">Ácido Butírico</h3>
                <p className="text-gray-600 text-sm">104,503 resultados de búsqueda en estudios científicos relacionados en PubMed.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <FaLeaf className="text-white text-lg" />
                </motion.div>
                <h3 className="text-xl font-bold text-yellow-600">Cúrcuma</h3>
                <p className="text-gray-600 text-sm">24,602 resultados de búsqueda en estudios científicos relacionados en PubMed.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <FaDna className="text-white text-lg" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600">NRF2</h3>
                <p className="text-gray-600 text-sm">32,122 resultados de búsqueda en estudios científicos relacionados en PubMed.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <FaMicroscope className="text-white text-lg" />
                </motion.div>
                <h3 className="text-xl font-bold text-red-600">Óxido Nítrico</h3>
                <p className="text-gray-600 text-sm">199,860 resultados de búsqueda en estudios científicos relacionados en PubMed.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
              >
                <FaRocket className="text-white text-xl" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">TU FUTURO SALUDABLE</h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                <span className="font-bold text-pink-600">La epigenética</span> nos ha demostrado que 
                <span className="font-bold text-purple-600"> no somos prisioneros de nuestros genes</span>. 
                Ahora tenemos el poder de influir positivamente en nuestra salud y bienestar.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-purple-600">Tu futuro saludable</span> comienza con las decisiones que tomas hoy. 
                La ciencia epigenética te da las herramientas para escribir tu propia historia de salud.
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaHeart className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Salud Optimizada</h3>
              <p className="text-gray-700">Toma el control de tu bienestar a nivel genético y vive con máxima vitalidad</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaBrain className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mente Clara</h3>
              <p className="text-gray-700">Potencia tu capacidad cognitiva y mental para enfrentar cualquier desafío</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaLightbulb className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vida Plena</h3>
              <p className="text-gray-700">Vive cada día con energía renovada y la confianza de un futuro saludable</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks 
        gradientColors="from-purple-200 via-pink-200 to-purple-300" 
        textColor="text-black"
      />
    </div>
  );
}

export default InfoProducto;
