import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function Contacto() {
  const handleWhatsAppContact = () => {
    const mensaje = "¡Hola! Me interesa conocer más sobre sus productos y servicios. ¿Podrían proporcionarme más información?";
    const numeroWhatsApp = "51900653836";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de estos medios
            </p>
            <div className="text-6xl mb-6">📞💬🤝</div>
          </motion.div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl text-blue-500 mb-4">
                <FaMapMarkerAlt className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ubicación</h3>
              <p className="text-gray-600 mb-4">Centro en Los Olivos</p>
              <p className="text-sm text-gray-500">
                Lima, Perú
              </p>
            </motion.div>

            {/* Teléfono */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl text-green-500 mb-4">
                <FaPhone className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Teléfono</h3>
              <p className="text-gray-600 mb-4">
                <a href="tel:+51900653836" className="hover:text-green-600 transition-colors">
                  (+51) 900 653 836
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Disponible para llamadas y mensajes
              </p>
            </motion.div>

            {/* Horarios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="text-5xl text-purple-500 mb-4">
                <FaClock className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Horarios</h3>
              <div className="text-gray-600 space-y-1">
                <p><strong>Lunes - Viernes:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sábados:</strong> 9:00 AM - 2:00 PM</p>
                <p><strong>Domingos:</strong> Solo emergencias</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Prefieres WhatsApp?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contáctanos directamente por WhatsApp para una respuesta rápida y personalizada
            </p>
            <motion.button
              onClick={handleWhatsAppContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={24} />
              Escribir por WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Síguenos en Redes Sociales</h2>
            <p className="text-xl text-gray-600">
              Mantente al día con nuestras novedades, consejos de salud y testimonios
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Facebook",
                icon: <FaFacebook size={48} />,
                color: "text-blue-600 hover:text-blue-700",
                bgColor: "hover:bg-blue-50",
                url: "https://web.facebook.com/EpigeneticaSaludNatural",
                description: "Únete a nuestra comunidad"
              },
              {
                name: "Instagram",
                icon: <FaInstagram size={48} />,
                color: "text-pink-600 hover:text-pink-700",
                bgColor: "hover:bg-pink-50",
                url: "https://www.instagram.com/miriammautino.activz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                description: "Fotos y historias diarias"
              },
              {
                name: "YouTube",
                icon: <FaYoutube size={48} />,
                color: "text-red-600 hover:text-red-700",
                bgColor: "hover:bg-red-50",
                url: "https://www.youtube.com/@miriammautino1",
                description: "Videos educativos"
              },
              {
                name: "TikTok",
                icon: <FaTiktok size={48} />,
                color: "text-purple-600 hover:text-purple-700",
                bgColor: "hover:bg-purple-50",
                url: "https://www.tiktok.com/@miriamepigenetica",
                description: "Contenido dinámico"
              }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`card text-center transition-all duration-300 ${social.bgColor}`}
              >
                <div className={`mb-4 ${social.color} transition-colors duration-300`}>
                  <div className="flex justify-center">{social.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{social.name}</h3>
                <p className="text-gray-600 text-sm">{social.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Mensaje de Atención */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Compromiso con la Atención</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <p className="text-lg leading-relaxed mb-6">
                En nuestro emprendimiento, cada cliente es parte de nuestra familia. Nos comprometemos a 
                brindar atención personalizada, responder todas tus consultas y acompañarte en tu camino 
                hacia una vida más saludable.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-semibold">Respuesta Rápida</p>
                  <p className="text-sm opacity-90">En menos de 24 horas</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💝</div>
                  <p className="font-semibold">Atención Personalizada</p>
                  <p className="text-sm opacity-90">Cada caso es único</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="font-semibold">Seguimiento Continuo</p>
                  <p className="text-sm opacity-90">Te acompañamos siempre</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks />
    </div>
  );
}
