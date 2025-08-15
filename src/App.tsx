import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import InfoProducto from "./pages/InfoProducto";
import Productos from "./pages/Productos";
import Linq from "./pages/Linq";
import GNMX from "./pages/GNMX";
import Optimend from "./pages/Optimend";
import RegistroCliente from "./pages/RegistroCliente";
import RegistroEmprendedor from "./pages/RegistroEmprendedor";
import ScrollToTop from "./components/ScrollToTop";
import Airo from "./pages/Airo";
import Nitrox from "./pages/Nitrox";
import Terminos from "./pages/Terminos";
import Politicas from "./pages/Politicas";
import Derechos from "./pages/Derechos";
import Cookies from "./pages/Cookies";
import Emprendimiento from "./pages/Emprendimiento";
import Contacto from "./pages/Contacto";
import Preguntas from "./pages/Preguntas";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <AnimatedBackground />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info-producto" element={<InfoProducto />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/linq" element={<Linq />} />
            <Route path="/productos/gnm-x" element={<GNMX />} />
            <Route path="/productos/optimend" element={<Optimend />} />
            <Route path="/registro/cliente" element={<RegistroCliente />} />
            <Route path="/registro/emprendedor" element={<RegistroEmprendedor />} />
            <Route path="/productos/airo" element={<Airo />} />
            <Route path="/productos/nitrox" element={<Nitrox />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/derechos" element={<Derechos />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/emprendimiento" element={<Emprendimiento />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/preguntas" element={<Preguntas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
