import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function RegistroCliente() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ciudad: "",
    interes: "",
    mensaje: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
🆕 NUEVO REGISTRO DE CLIENTE 🆕

👤 Nombre: ${formData.nombre}
📱 Teléfono: ${formData.telefono}
📧 Email: ${formData.email}
📍 Ciudad: ${formData.ciudad}
🎯 Interés: ${formData.interes}

💬 Mensaje:
${formData.mensaje || "Sin mensaje adicional"}

¡Gracias por registrarte! Me pondré en contacto contigo pronto.
    `.trim();

    const url = `https://wa.me/51900653836?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const productosInteres = [
    "Linq - Bienestar General",
    "GNM-X - Rendimiento Físico",
    "Optimend - Función Cognitiva", 
    "Todos los Productos",
    "Necesito Asesoría"
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Registro de Cliente
          </h1>
          <p className="text-xl text-gray-600">
            Únete a nuestra comunidad y recibe información exclusiva sobre nuestros productos
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="card space-y-6"
        >
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              <FaUser className="inline mr-2" />
              Nombre Completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              <FaPhone className="inline mr-2" />
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Ej: +51 999 999 999"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <FaEnvelope className="inline mr-2" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Ciudad */}
          <div>
            <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Tu ciudad"
            />
          </div>

          {/* Interés */}
          <div>
            <label htmlFor="interes" className="block text-sm font-medium text-gray-700 mb-2">
              Producto de Interés
            </label>
            <select
              id="interes"
              name="interes"
              value={formData.interes}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">Selecciona un producto</option>
              {productosInteres.map((producto) => (
                <option key={producto} value={producto}>
                  {producto}
                </option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje Adicional (Opcional)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              placeholder="¿Hay algo específico que te gustaría saber?"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
          >
            <FaWhatsapp />
            Enviar Registro por WhatsApp
          </motion.button>

          <p className="text-sm text-gray-500 text-center">
            Al registrarte, aceptas recibir información sobre nuestros productos y promociones.
          </p>
        </motion.form>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Beneficios de Registrarte
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ofertas Exclusivas",
                description: "Acceso a descuentos y promociones especiales"
              },
              {
                title: "Asesoría Personalizada",
                description: "Consulta directa con nuestros especialistas"
              },
              {
                title: "Novedades First",
                description: "Sé el primero en conocer nuestros nuevos productos"
              }
            ].map((benefit, index) => (
              <div key={index} className="card text-center">
                <h4 className="font-bold text-lg mb-2 text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <SocialLinks 
        gradientColors="from-purple-200 via-pink-200 to-purple-300" 
        textColor="text-gray-800"
      />
    </div>
  );
}
