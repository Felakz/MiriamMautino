import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaUsers } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

export default function RegistroEmprendedor() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ciudad: "",
    experiencia: "",
    motivo: "",
    horarioDisponible: "",
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
🚀 NUEVO REGISTRO DE EMPRENDEDOR 🚀

👤 Nombre: ${formData.nombre}
📱 Teléfono: ${formData.telefono}
📧 Email: ${formData.email}
📍 Ciudad: ${formData.ciudad}
💼 Experiencia en Ventas: ${formData.experiencia}
🎯 Motivo para Emprender: ${formData.motivo}
⏰ Horario Disponible: ${formData.horarioDisponible}

💬 Mensaje adicional:
${formData.mensaje || "Sin mensaje adicional"}

¡Excelente! Pronto me pondré en contacto para explicarte todo sobre nuestra oportunidad de negocio.
    `.trim();

    const url = `https://wa.me/51900653836?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const experienciaOptions = [
    "Sin experiencia en ventas",
    "Menos de 1 año",
    "1-3 años",
    "3-5 años",
    "Más de 5 años",
    "Soy emprendedor experimentado"
  ];

  const motivoOptions = [
    "Ingresos adicionales",
    "Negocio principal",
    "Desarrollo personal",
    "Ayudar a otros",
    "Libertad financiera",
    "Trabajo desde casa"
  ];

  const horarioOptions = [
    "Tiempo parcial (2-4 horas/día)",
    "Medio tiempo (4-6 horas/día)",
    "Tiempo completo (8+ horas/día)",
    "Fines de semana",
    "Solo por las tardes",
    "Horario flexible"
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Registro de Emprendedor
          </h1>
          <p className="text-xl text-gray-600">
            Únete a nuestro equipo y construye tu propio negocio de bienestar
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Ej: +51 999 999 999"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <FaEnvelope className="inline mr-2" />
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Ciudad */}
          <div>
            <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Ciudad *
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Tu ciudad"
            />
          </div>

          {/* Experiencia */}
          <div>
            <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-2">
              <FaBriefcase className="inline mr-2" />
              Experiencia en Ventas
            </label>
            <select
              id="experiencia"
              name="experiencia"
              value={formData.experiencia}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              <option value="">Selecciona tu experiencia</option>
              {experienciaOptions.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>

          {/* Motivo */}
          <div>
            <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">
              <FaUsers className="inline mr-2" />
              ¿Por qué quieres emprender con nosotros?
            </label>
            <select
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              <option value="">Selecciona tu motivo principal</option>
              {motivoOptions.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>

          {/* Horario Disponible */}
          <div>
            <label htmlFor="horarioDisponible" className="block text-sm font-medium text-gray-700 mb-2">
              ⏰ Horario Disponible
            </label>
            <select
              id="horarioDisponible"
              name="horarioDisponible"
              value={formData.horarioDisponible}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              <option value="">¿Cuánto tiempo puedes dedicar?</option>
              {horarioOptions.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
              Cuéntanos más sobre ti (Opcional)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
              placeholder="¿Qué te motiva? ¿Cuáles son tus metas? ¿Tienes alguna pregunta específica?"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <FaWhatsapp />
            Enviar Solicitud por WhatsApp
          </motion.button>

          <p className="text-sm text-gray-500 text-center">
            Al registrarte, nuestro equipo se pondrá en contacto contigo para explicarte todos los detalles de la oportunidad de negocio.
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
            Beneficios de Ser Emprendedor con Nosotros
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Ingresos Atractivos",
                description: "Comisiones competitivas y bonos por desempeño"
              },
              {
                title: "Capacitación Completa",
                description: "Te entrenamos en productos, ventas y liderazgo"
              },
              {
                title: "Flexibilidad Total",
                description: "Trabaja desde casa en tus propios horarios"
              },
              {
                title: "Soporte Constante",
                description: "Acompañamiento y asesoría permanente"
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
      <SocialLinks gradientColors="from-purple-500 to-pink-600" />
    </div>
  );
}
