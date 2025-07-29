import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import InfoProducto from "./pages/InfoProducto";
import Productos from "./pages/Productos";
import Linq from "./pages/Linq";
import GNMX from "./pages/GNMX";
import Optimend from "./pages/Optimend";
import RegistroCliente from "./pages/RegistroCliente";
import RegistroEmprendedor from "./pages/RegistroEmprendedor";
import ScrollToTop from "./components/ScrollToTop";
import SocialLinks from "./components/SocialLinks";
import Airo from "./pages/Airo";
import Nitrox from "./pages/Nitrox";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
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
          </Routes>
        </main>
        <footer className="mt-auto">
          <SocialLinks />
        </footer>
      </div>
    </Router>
  );
}

export default App;
