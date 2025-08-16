import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

interface SocialLinksProps {
  gradientColors?: string;
  textColor?: string;
}

const SocialLinks = ({ 
  gradientColors = "from-blue-600 to-purple-600",
  textColor = "text-white"
}: SocialLinksProps) => {
  return (
    <footer className={`bg-gradient-to-r ${gradientColors} ${textColor} py-6`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information and Social Media */}
        <div className="text-center">
          <h3 className={`text-xl font-bold mb-3 ${textColor}`}>
            MM Bienestar & Emprendimiento
          </h3>
          <p className="mb-1 text-sm"><strong>Miriam Mautino</strong> - Consultora Activz</p>
          <p className="mb-1 text-sm">Entregas en Lima Norte</p>
          <p className="mb-1 text-sm">Centro en Los Olivos</p>
          <p className="mb-4 text-sm">(+51) 900653836</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://web.facebook.com/EpigeneticaSaludNatural"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColor} hover:text-blue-300 transition-colors duration-300`}
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/miriammautino.activz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColor} hover:text-pink-300 transition-colors duration-300`}
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@miriammautino1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColor} hover:text-red-300 transition-colors duration-300`}
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@miriamepigenetica"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColor} hover:text-purple-300 transition-colors duration-300`}
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Mapa del Sitio */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-3">Mapa del Sitio</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/emprendimiento" className="hover:underline">
                ¿Quiénes Somos?
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline">
                Contacto
              </a>
            </li>
            <li>
              <a href="/preguntas" className="hover:underline">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-3">Información</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/terminos" className="hover:underline">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="/politicas" className="hover:underline">
                Políticas de Privacidad
              </a>
            </li>
            <li>
              <a href="/derechos" className="hover:underline">
                Ejercicio de Derechos
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Política de Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className={`mt-6 pt-4 border-t border-white/20 text-center ${textColor}`}>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} MM Bienestar & Emprendimiento - Miriam Mautino. Todos los derechos reservados.
        </p>
        <p className="text-xs opacity-60 mt-1">
          Productos naturales para tu bienestar integral ✨
        </p>
      </div>
    </footer>
  );
};

export default SocialLinks;
