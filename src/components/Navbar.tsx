/**
 * © 2025 Miriam Mautino - MM Bienestar & Emprendimiento
 * Código protegido por derechos de autor.
 * Prohibida la copia, distribución o uso comercial sin autorización.
 * Contacto legal: +51 900 653 836
 */

import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';


const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Información del Producto", path: "/info-producto" },
  { name: "Emprendimiento", path: "/emprendimiento" },
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
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const [mobileRegOpen, setMobileRegOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Función para cerrar todos los menús
  const closeAllMenus = () => {
    setProdOpen(false);
    setRegOpen(false);
    setMobileProdOpen(false);
    setMobileRegOpen(false);
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

  // Manejar scroll y timeout para cambiar transparencia
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Cambiar a opaco después de 3 segundos automáticamente
    const timer = setTimeout(() => {
      setIsScrolled(true);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
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
      className={`fixed w-full z-50 transition-all duration-500 shadow-lg border-b border-gray-100 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md' 
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300">
          MM Bienestar & Emprendimiento
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) =>
                `navbar-link transition-all duration-300 ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                } ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-900 hover:text-blue-600 font-medium'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Productos Dropdown */}
          <div className="relative">
            <button
              onClick={handleProductsToggle}
              className={`navbar-link flex items-center gap-1 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-900 hover:text-blue-600 font-medium'
              }`}
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
                  className="absolute left-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-max whitespace-nowrap border border-gray-100 z-50"
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
              className={`navbar-link flex items-center gap-1 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-900 hover:text-blue-600 font-medium'
              }`}
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
                  className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-max whitespace-nowrap border border-gray-100 z-50"
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
          className={`md:hidden text-2xl p-2 rounded-lg transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 hover:bg-gray-100' 
              : 'text-gray-900 hover:bg-gray-100/20'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.4 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="space-y-6">
                {/* Enlaces de navegación básicos */}
                {navLinks.map(link => (
                  <NavLink 
                    key={link.name} 
                    to={link.path} 
                    className="block py-3 font-semibold text-gray-800 text-lg border-b border-gray-200 pb-2 hover:text-purple-600 transition-colors" 
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                
                <div>
                  <button
                    onClick={() => setMobileProdOpen(!mobileProdOpen)}
                    className="w-full flex items-center justify-between font-semibold text-gray-800 text-lg border-b border-gray-200 pb-2 hover:text-purple-600 transition-colors"
                  >
                    <span>Productos</span>
                    <FaChevronDown className={`text-sm transition-transform duration-200 ${mobileProdOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileProdOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 ml-4 mt-3">
                          {productLinks.map(prod => (
                            <NavLink 
                              key={prod.name} 
                              to={prod.path} 
                              className="flex items-center gap-3 py-3 font-medium hover:bg-purple-50 -ml-4 pl-4 rounded-lg transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {prod.icon} {prod.name}
                            </NavLink>
                          ))}
                          <NavLink 
                            to="/productos" 
                            className="block py-3 font-medium text-purple-600 hover:bg-purple-50 -ml-4 pl-4 rounded-lg transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            Ver Todos los Productos
                          </NavLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div>
                  <button
                    onClick={() => setMobileRegOpen(!mobileRegOpen)}
                    className="w-full flex items-center justify-between font-semibold text-gray-800 text-lg border-b border-gray-200 pb-2 hover:text-purple-600 transition-colors"
                  >
                    <span>Registro</span>
                    <FaChevronDown className={`text-sm transition-transform duration-200 ${mobileRegOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileRegOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 ml-4 mt-3">
                          {registroLinks.map(link => (
                            <NavLink 
                              key={link.name} 
                              to={link.path} 
                              className="block py-3 font-medium hover:bg-purple-50 -ml-4 pl-4 rounded-lg transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {link.name}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            style={{ top: '80px' }} // Empieza después del navbar
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
