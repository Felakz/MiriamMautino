import { motion } from "framer-motion";
import { FaHeart, FaStar, FaUsers, FaLeaf } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function Emprendimiento() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ¿Quiénes Somos?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La historia de una madre luchadora que transformó su vida y la de miles de familias
            </p>
            <div className="text-6xl mb-6">💪👩‍👧‍👦✨</div>
          </motion.div>
        </div>
      </section>

      {/* Historia Personal */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Mi Historia</h2>
            <div className="prose prose-lg max-w-none text-left">
              <div className="card bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Soy <strong>Miriam Mautino</strong>, madre de familia, emprendedora y apasionada por la salud natural. 
                  Mi historia comenzó como la de muchas madres: buscando lo mejor para mi familia mientras luchaba 
                  por salir adelante económicamente.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Hace varios años, enfrenté momentos difíciles. Como madre soltera, trabajaba largas horas para 
                  mantener a mis hijos, pero los ingresos no alcanzaban. Fue entonces cuando descubrí el mundo 
                  de los suplementos naturales y la epigenética, una ciencia que cambió mi perspectiva sobre la salud.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lo que comenzó como una búsqueda personal por mejorar nuestra calidad de vida, se convirtió en 
                  una misión: ayudar a otras familias a encontrar bienestar a través de productos naturales de 
                  calidad y crear oportunidades de emprendimiento para madres como yo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores y Misión */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión en nuestro emprendimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHeart className="text-5xl text-pink-500" />,
                title: "Amor Familiar",
                description: "Todo lo que hacemos está motivado por el amor hacia nuestras familias y el deseo de brindarles lo mejor."
              },
              {
                icon: <FaLeaf className="text-5xl text-green-500" />,
                title: "Productos Naturales",
                description: "Creemos en el poder de la naturaleza y en productos que respetan nuestro cuerpo y el medio ambiente."
              },
              {
                icon: <FaUsers className="text-5xl text-blue-500" />,
                title: "Comunidad",
                description: "Construimos una red de apoyo donde madres emprendedoras se ayudan mutuamente a crecer."
              },
              {
                icon: <FaStar className="text-5xl text-yellow-500" />,
                title: "Excelencia",
                description: "Nos comprometemos con la calidad en cada producto y en cada relación que construimos."
              }
            ].map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Nuestra Misión</h2>
            <p className="text-xl leading-relaxed mb-8">
              Empoderar a madres y familias a través de productos naturales de calidad excepcional, 
              mientras creamos oportunidades de crecimiento personal y económico que transformen vidas.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-lg">
                Ser la comunidad líder de madres emprendedoras en salud natural, donde cada mujer 
                puede alcanzar su independencia económica mientras cuida el bienestar de su familia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logros y Estadísticas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Nuestros Logros</h2>
            <p className="text-xl text-gray-600">
              Números que reflejan el impacto de nuestro emprendimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Familias Beneficiadas", icon: "👨‍👩‍👧‍👦" },
              { number: "50+", label: "Madres Emprendedoras", icon: "👩‍💼" },
              { number: "3", label: "Años de Experiencia", icon: "⭐" },
              { number: "98%", label: "Clientes Satisfechos", icon: "😊" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mensaje Personal */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card bg-white shadow-xl"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                M
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Mensaje de Miriam</h3>
            </div>
            <blockquote className="text-lg text-gray-700 italic text-center leading-relaxed">
              "Si estás leyendo esto, quizás eres como yo era hace unos años: una madre que busca lo mejor 
              para su familia mientras lucha por sus sueños. Quiero que sepas que sí es posible. Con 
              determinación, productos de calidad y una comunidad que te apoye, puedes transformar tu vida. 
              Estoy aquí para acompañarte en este camino."
            </blockquote>
            <div className="text-center mt-6">
              <p className="text-gray-600 font-medium">- Miriam Mautino, Fundadora</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks gradientColors="from-purple-500 to-pink-600" />
    </div>
  );
}
