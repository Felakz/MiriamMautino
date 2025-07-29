import { motion } from "framer-motion";
import { FaRocket, FaHeart, FaShieldAlt, FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const features = [
	{
		icon: <FaRocket className="text-4xl text-blue-500" />,
		title: "Innovación",
		description:
			"Productos desarrollados con la más alta tecnología y investigación científica.",
	},
	{
		icon: <FaHeart className="text-4xl text-red-500" />,
		title: "Bienestar",
		description:
			"Enfocados en mejorar tu salud y calidad de vida de manera natural.",
	},
	{
		icon: <FaShieldAlt className="text-4xl text-green-500" />,
		title: "Calidad",
		description: "Certificados y avalados por los más altos estándares de calidad.",
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

	const handleWhatsAppContact = () => {
		const message =
			"Hola, me interesa conocer más sobre sus productos. ¿Podrían brindarme más información?";
		const url = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank");
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative z-10 max-w-4xl mx-auto px-4 text-center"
				>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
					>
						Descubre el Futuro
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-2xl md:text-4xl font-semibold mb-8 text-gray-700"
					>
						de tu Bienestar
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="text-xl mb-12 text-gray-600 leading-relaxed max-w-2xl mx-auto"
					>
						Productos innovadores que transforman vidas. Únete a miles de
						personas que ya han mejorado su salud y bienestar con nuestras
						soluciones premium.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<button
							onClick={handleWhatsAppContact}
							className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
						>
							<FaWhatsapp /> Contactar Ahora
						</button>
						<button className="btn-secondary text-lg px-8 py-4">
							Ver Productos
						</button>
					</motion.div>
				</motion.div>

				{/* Floating Elements */}
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
							¿Por Qué Elegirnos?
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Somos líderes en innovación y calidad, comprometidos con tu bienestar
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
								whileHover={{ y: -10 }}
								className="card text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
							>
								<div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
									{feature.icon}
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
							Testimonios en Video
						</h2>
						<p className="text-xl text-gray-600">
							Descubre lo que nuestros clientes tienen que decir
						</p>
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
								<iframe
									src={videos[currentVideo].src}
									title={videos[currentVideo].title}
									className="w-full h-64 rounded-lg"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
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

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							¿Listo para Transformar tu Vida?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							No esperes más. Únete a nuestra comunidad y comienza tu viaje
							hacia un mejor bienestar hoy mismo.
						</p>
						<button
							onClick={handleWhatsAppContact}
							className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
						>
							<FaWhatsapp /> Comenzar Ahora
						</button>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
