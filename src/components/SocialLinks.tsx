import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

interface SocialLinksProps {
  gradientColors?: string;
}

const SocialLinks = ({ 
  gradientColors = "from-blue-600 to-purple-600"
}: SocialLinksProps) => {
  return (
    <footer className={`bg-gradient-to-r ${gradientColors} text-white py-10`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information and Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            MM Bienestar & Emprendimiento
          </h3>
          <p className="mb-2">Centro en Los Olivos</p>
          <p className="mb-6">(+51) 900653836</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://web.facebook.com/EpigeneticaSaludNatural"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/miriammautino.activz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors duration-300"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.youtube.com/@miriammautino1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-300 transition-colors duration-300"
            >
              <FaYoutube size={32} />
            </a>
            <a
              href="https://www.tiktok.com/@miriamepigenetica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              <FaTiktok size={32} />
            </a>
          </div>
        </div>

        {/* Mapa del Sitio */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Mapa del Sitio</h3>
          <ul className="space-y-2">
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
          <h3 className="text-lg font-bold mb-4">Información</h3>
          <ul className="space-y-2">
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
    </footer>
  );
};

export default SocialLinks;
