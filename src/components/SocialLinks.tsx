import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Expo Music</h3>
          <p>Av. Nicolás de Piérola #227</p>
          <p>Cercado de Lima, Perú</p>
          <p>(+51) 955054848</p>
          <p>info@expomusic.com.pe</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-300"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="text-lg font-bold mb-4">Mapa del Sitio</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                ¿Quiénes Somos?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tienda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Información</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Políticas de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ejercicio de Derechos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de Cookies
              </a>
            </li>
          </ul>
        </div>

        {/* Subscription */}
        <div>
          <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
          <form>
            <input
              type="email"
              placeholder="Tu email"
              className="w-full p-2 rounded bg-blue-800 text-white mb-4"
            />
            <button className="w-full bg-white text-blue-600 py-2 rounded font-bold hover:bg-gray-200">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;
