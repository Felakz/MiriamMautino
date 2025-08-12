import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import optimendImage from "../assets/productos/El texto del párrafo (29).png";

const features = [
	{
		emoji: "🚀",
		title: "Innovación",
		description:
			"Productos desarrollados con la más alta tecnología y investigación científica que marcan la diferencia.",
	},
	{
		emoji: "💪",
		title: "Bienestar Real",
		description:
			"Resultados tangibles que transforman tu vida. No promesas vacías, solo cambios reales y duraderos.",
	},
	{
		emoji: "🏆",
		title: "Calidad Garantizada",
		description: "Certificados internacionales y avalados por los más altos estándares de calidad mundial.",
	},
];

const testimonials = [
	{
		text: "No creía que algo natural pudiera cambiar tanto mi vida. Después de años luchando con mi salud, finalmente encontré la solución real que necesitaba.",
		author: "María González",
		role: "Cliente satisfecha",
	},
	{
		text: "Desde que uso estos productos, tengo más energía, duermo mejor y ya no me duele el cuerpo como antes. Mi vida cambió completamente.",
		author: "José Ramírez",
		role: "Cliente feliz",
	},
	{
		text: "Estaba escéptica al principio, pero me sorprendieron los resultados. ¡Ahora hasta recomiendo el producto a toda mi familia!",
		author: "Laura Méndez",
		role: "Emprendedora y usuaria",
	},
	{
		text: "Después de probar muchas alternativas sin éxito, estos productos me devolvieron la esperanza y la salud que había perdido.",
		author: "Carlos Torres",
		role: "Cliente agradecido",
	},
];

const videos = [
	{ id: 1, src: "https://www.youtube.com/embed/zUSq9MSIGsU?si=LHIiU_yT3ALJxgqr", title: "Testimonio de GNM-X dolor de CABEZA,TRIGLICERIDOS," },
	{ id: 2, src: "https://www.youtube.com/embed/i9Ljif_OaRw", title: "Testimonio de salud GNM-X PARÁLISIS MEDIO CUERPO" },
	{ id: 3, src: "https://www.youtube.com/embed/JpcLXbg2E8Q?si=ezI3pzdoBHscYgiU", title: "Testimonio de salud COVID-19 con GNM-X" },
	{ id: 4, src: "https://www.youtube.com/embed/RGxVVUsQdmM", title: "Testimonio GNM-X contra la DEPRESION, ANSIEDAD, ACNÉ, ROSACEA." },
];

export default function Home() {
	const [currentVideo, setCurrentVideo] = useState(0);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	// Auto-cambio de testimonios cada 4 segundos
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	// Remover cualquier emoji / icono pequeño de bebida (taza, vaso, etc.) que se inyecte fuera del código
	useEffect(() => {
		const UNWANTED = new Set(['☕','🍵','🍶','🥛','🥤','🧋','🍺','🍻','🍷','🍸','🍹']);
		const KEYWORDS = ['coffee','café','cafe','vaso','taza','drink'];
		const isUnwantedElement = (el: HTMLElement) => {
			const txt = el.textContent?.trim() || '';
			if (el.childNodes.length === 1 && UNWANTED.has(txt)) return true;
			// Revisar atributos comunes
			const attrs = [el.getAttribute('alt'), el.getAttribute('title'), el.getAttribute('aria-label')]
				.filter(Boolean)
				.map(s => s!.toLowerCase());
			if (attrs.some(a => KEYWORDS.some(k => a.includes(k)))) return true;
			// Imágenes muy pequeñas sospechosas con palabras clave
			if (el.tagName === 'IMG') {
				const img = el as HTMLImageElement;
				if ((img.width && img.width < 90) && attrs.length && attrs.some(a => KEYWORDS.some(k => a.includes(k)))) return true;
			}
			return false;
		};
		const clean = () => {
			const all = Array.from(document.querySelectorAll('body *')) as HTMLElement[];
			all.forEach(el => { if (isUnwantedElement(el)) el.remove(); });
		};
		clean();
		const obs = new MutationObserver(() => clean());
		obs.observe(document.body, { childList: true, subtree: true });
		return () => obs.disconnect();
	}, []);

	const handleWhatsAppContact = () => {
		const message =
			"Hola, me interesa conocer más sobre sus productos. ¿Podrían brindarme más información?";
		const url = `https://wa.me/51900653836?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank");
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
				
				{/* Floating Background Elements */}
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
				/>
				<motion.div
					animate={{
						y: [0, 20, 0],
						rotate: [0, -5, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"
				/>

				{/* Main Content */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Column - Content */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-center lg:text-left"
						>
							{/* Promo Banner */}
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
							>
								🎯 PROMO DE AGOSTO: Asesoría gratuita + guía de bienestar
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="font-bold mb-6 leading-tight text-[clamp(2.2rem,6vw,4.2rem)]"
							>
								<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Recupera tu energía, fortalece tu salud</span> <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">y transforma tu vida</span>
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
							>
								Con productos epigenéticos naturales y tecnología de vanguardia. 
								Miles de personas ya están viviendo con menos dolor, más vitalidad y bienestar. 
								<span className="font-semibold text-gray-800">¿Te unes?</span>
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
							>
								<button
									onClick={handleWhatsAppContact}
									className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
								>
									<FaWhatsapp /> Empezar mi cambio
								</button>
								<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
									Ver productos
								</button>
							</motion.div>
						</motion.div>

						{/* Right Column - Product Image */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="relative flex justify-center lg:justify-end"
						>
	       <div className="relative inline-block" style={{ width: '100%', maxWidth: '600px' }}>
	       {/* Main product image sin borde */}
	       <div 
		       className="relative rounded-3xl overflow-hidden"
		       style={{ width: '100%', display: 'inline-block' }}
	       >
		       {/* Etiquetas pegadas a la imagen, alineadas verticalmente */}
		       <img 
			       src={optimendImage}
			       alt="Mujer feliz sosteniendo producto ACTIVZ OPTIMEND"
			       className="object-cover rounded-3xl w-full h-auto"
			       style={{ display: 'block' }}
			       onError={(e) => {
				       e.currentTarget.style.display = 'none';
				       const fallback = e.currentTarget.nextElementSibling as HTMLElement;
				       if (fallback) fallback.style.display = 'flex';
			       }}
		       />
		       {/* Fallback content */}
		       <div className="hidden w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl items-center justify-center">
			       <div className="text-6xl mb-4">💊</div>
			       <div className="text-2xl font-bold text-purple-600 mb-2">ACTIVZ</div>
			       <div className="text-lg text-gray-600">OPTIMEND</div>
		       </div>
	       </div>
				</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
							¿Por qué miles nos prefieren?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Porque combinamos ciencia, naturaleza y resultados reales. Aquí no vendemos humo, vendemos transformación.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
								whileHover={{ y: -10, scale: 1.02 }}
								className="bg-white p-8 rounded-xl text-center group hover:shadow-2xl transition-all duration-300 border border-gray-100"
							>
								<div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
									{feature.emoji}
								</div>
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
							Historias Reales, Cambios Reales
						</h2>
						<p className="text-xl text-gray-600 mb-8">
							Nada habla mejor que los resultados. Mira lo que dicen quienes ya confiaron en nosotros.
						</p>
						<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-12 border border-white/20">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentTestimonial}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.6, ease: "easeInOut" }}
									className="text-center"
								>
									<blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-6 leading-relaxed">
										"{testimonials[currentTestimonial].text}"
									</blockquote>
									<div className="flex items-center justify-center gap-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
											{testimonials[currentTestimonial].author.charAt(0)}
										</div>
										<div className="text-left">
											<cite className="block text-blue-600 font-semibold text-lg not-italic">
												{testimonials[currentTestimonial].author}
											</cite>
											<span className="text-gray-500 text-sm">
												{testimonials[currentTestimonial].role}
											</span>
										</div>
									</div>
								</motion.div>
							</AnimatePresence>
							
							{/* Indicadores de testimonios */}
							<div className="flex justify-center mt-6 space-x-2">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentTestimonial(index)}
										className={`w-2 h-2 rounded-full transition-all duration-300 ${
											index === currentTestimonial 
												? "bg-blue-600 w-6" 
												: "bg-gray-300 hover:bg-gray-400"
										}`}
									/>
								))}
							</div>
						</div>
					</motion.div>

					<div className="relative max-w-4xl mx-auto">
						<div className="overflow-hidden">
							<motion.div
								key={currentVideo}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
								className="relative bg-white rounded-lg shadow-lg p-4"
							>
								<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
									<iframe
										src={videos[currentVideo].src}
										title={videos[currentVideo].title}
										className="absolute top-0 left-0 w-full h-full rounded-lg"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
								<h4 className="text-center font-bold text-gray-800 mt-4">
									{videos[currentVideo].title}
								</h4>
							</motion.div>
						</div>

						<div className="flex justify-center mt-8 space-x-2">
							{videos.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentVideo(index)}
									className={`w-3 h-3 rounded-full transition-colors duration-300 ${
										index === currentVideo ? "bg-blue-600" : "bg-gray-300"
									}`}
								/>
							))}
						</div>

						<button
							onClick={() =>
								setCurrentVideo(
									(prev) => (prev - 1 + videos.length) % videos.length
								)
							}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
						>
							<FaChevronLeft className="text-gray-600" />
						</button>
						<button
							onClick={() =>
								setCurrentVideo((prev) => (prev + 1) % videos.length)
							}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
						>
							<FaChevronRight className="text-gray-600" />
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<SocialLinks />

		</div>
	);
}
