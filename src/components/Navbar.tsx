import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";


const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Información del Producto", path: "/info-producto" },
];

const productLinks = [
  { name: "Linq", path: "/productos/linq", icon: <span className="text-yellow-500">★</span> },
  { name: "GNM-X", path: "/productos/gnm-x", icon: <span className="text-green-500">🌿</span> },
  { name: "Optimend", path: "/productos/optimend", icon: <span className="text-purple-500">🪻</span> },
  { name: "Airo", path: "/productos/airo", icon: <span className="text-orange-500">🔥</span> },
  { name: "Nitrox", path: "/productos/nitrox", icon: <span className="text-red-500">🍒</span> }
];

const registroLinks = [
  { name: "Registro Cliente", path: "/registro/cliente" },
  { name: "Registro Emprendedor", path: "/registro/emprendedor" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Función para cerrar todos los menús
  const closeAllMenus = () => {
    setProdOpen(false);
    setRegOpen(false);
  };

  // Manejar clics fuera del navbar para cerrar menús
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para abrir menú de productos (cierra el de registro)
  const handleProductsToggle = () => {
    setRegOpen(false);
    setProdOpen(!prodOpen);
  };

  // Función para abrir menú de registro (cierra el de productos)
  const handleRegistroToggle = () => {
    setProdOpen(false);
    setRegOpen(!regOpen);
  };

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          MM Bienestar & Emprendimiento
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Productos Dropdown */}
          <div className="relative">
            <button
              onClick={handleProductsToggle}
              className="navbar-link flex items-center gap-1"
              onMouseEnter={() => {
                setRegOpen(false);
                setProdOpen(true);
              }}
            >
              Productos <FaChevronDown className={`text-xs transition-transform ${prodOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {prodOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-white rounded-xl shadow-xl py-2 w-56 border border-gray-100"
                  onMouseLeave={() => setProdOpen(false)}
                >
                  {productLinks.map(prod => (
                    <NavLink
                      key={prod.name}
                      to={prod.path}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 transition-colors duration-200"
                      onClick={closeAllMenus}
                    >
                      {prod.icon}
                      <span className="font-medium">{prod.name}</span>
                    </NavLink>
                  ))}
                  <NavLink
                    to="/productos"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 transition-colors duration-200 border-t border-gray-100 mt-2"
                    onClick={closeAllMenus}
                  >
                    <span className="font-medium text-blue-600">Ver Todos los Productos</span>
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Registro Dropdown */}
          <div className="relative">
            <button
              onClick={handleRegistroToggle}
              className="navbar-link flex items-center gap-1"
              onMouseEnter={() => {
                setProdOpen(false);
                setRegOpen(true);
              }}
            >
              Registro <FaChevronDown className={`text-xs transition-transform ${regOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {regOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-white rounded-xl shadow-xl py-2 w-64 border border-gray-100"
                  onMouseLeave={() => setRegOpen(false)}
                >
                  {registroLinks.map(link => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className="block px-4 py-3 hover:bg-purple-50 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-800">Menú</h2>
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="space-y-6">
              {navLinks.map(link => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className="block py-3 text-lg font-medium border-b border-gray-100" 
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Productos</h3>
                <div className="space-y-2 ml-4">
                  {productLinks.map(prod => (
                    <NavLink 
                      key={prod.name} 
                      to={prod.path} 
                      className="flex items-center gap-3 py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {prod.icon} {prod.name}
                    </NavLink>
                  ))}
                  <NavLink 
                    to="/productos" 
                    className="block py-2 font-medium text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Ver Todos
                  </NavLink>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Registro</h3>
                <div className="space-y-2 ml-4">
                  {registroLinks.map(link => (
                    <NavLink 
                      key={link.name} 
                      to={link.path} 
                      className="block py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
