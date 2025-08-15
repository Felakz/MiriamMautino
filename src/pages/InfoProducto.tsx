import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaFlask, FaUsers } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

const benefits = [
  "Ingredientes 100% naturales",
  "Certificaciones internacionales de calidad",
  "Investigación científica respaldada",
  "Sin efectos secundarios",
  "Resultados comprobados",
  "Apoyo nutricional completo"
];

const stats = [
  { number: "5,000+", label: "Clientes Satisfechos" },
  { number: "15+", label: "Años de Experiencia" },
  { number: "99%", label: "Tasa de Satisfacción" },
  { number: "24/7", label: "Soporte al Cliente" }
];

export default function InfoProducto() {
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

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Información del Producto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre la ciencia detrás de nuestros productos innovadores y cómo pueden transformar tu bienestar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                ¿Por Qué Nuestros Productos Son Únicos?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
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
              className="grid grid-cols-2 gap-6"
            >
              <div className="card text-center bg-gradient-to-br from-purple-50 to-pink-100">
                <FaLeaf className="text-4xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Natural</h3>
                <p className="text-gray-600">Ingredientes orgánicos y naturales</p>
              </div>
              <div className="card text-center bg-gradient-to-br from-pink-50 to-purple-100">
                <FaFlask className="text-4xl text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Científico</h3>
                <p className="text-gray-600">Respaldado por investigación</p>
              </div>
              <div className="card text-center bg-gradient-to-br from-purple-50 to-pink-100">
                <FaUsers className="text-4xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Confiable</h3>
                <p className="text-gray-600">Miles de clientes satisfechos</p>
              </div>
              <div className="card text-center bg-gradient-to-br from-pink-50 to-purple-100">
                <FaCheckCircle className="text-4xl text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Efectivo</h3>
                <p className="text-gray-600">Resultados comprobados</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">Números Que Hablan Por Sí Solos</h2>
            <p className="text-xl text-black/90">La confianza de nuestros clientes es nuestro mayor logro</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-black">{stat.number}</div>
                <div className="text-lg text-black/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Nuestro Proceso de Calidad</h2>
            <p className="text-xl text-gray-600">Cada producto pasa por rigurosos controles de calidad</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Investigación",
                description: "Investigamos y seleccionamos los mejores ingredientes naturales disponibles en el mercado."
              },
              {
                step: "02", 
                title: "Desarrollo",
                description: "Nuestro equipo de científicos desarrolla fórmulas innovadoras con la más alta efectividad."
              },
              {
                step: "03",
                title: "Certificación",
                description: "Cada producto es certificado y probado para garantizar su seguridad y eficacia."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center relative"
              >
                <div className="text-6xl font-bold text-blue-200 mb-4">{process.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
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
