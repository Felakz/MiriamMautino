import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

// Ajustar el degradado para el producto "Linq"
const productos = [
	{
		name: "Linq",
		description:
			"Fórmula epigenética científica diseñada para apoyar múltiples sistemas del cuerpo. Mejora la función cerebral, optimiza la salud intestinal y fortalece el sistema inmunológico.",
		benefits: [
			"Mejora función cerebral e intestinal",
			"Optimiza absorción de nutrientes",
			"Aumenta metabolismo y controla apetito",
		],
		price: "S/. 300",
		image: "/LINQ.png",
		path: "/productos/linq",
		color: "bg-gradient-to-br from-yellow-200 to-yellow-400",
	},
	{
		name: "GNM-X",
		description:
			"Fórmula avanzada para potenciar el rendimiento físico y mental. Ideal para deportistas y profesionales.",
		benefits: [
			"Mejora el rendimiento",
			"Acelera la recuperación",
			"Optimiza la concentración",
		],
		price: "S/. 270",
		image: "/GNM-X.png",
		path: "/productos/gnm-x",
		color: "bg-gradient-to-br from-green-200 to-emerald-400",
	},
	{
		name: "Optimend",
		description:
			"Revolucionario suplemento nootrópico que mejora las funciones cognitivas y la claridad mental.",
		benefits: [
			"Potencia la memoria",
			"Aumenta la concentración",
			"Reduce el estrés mental",
		],
		price: "S/. 300",
		image: "/OPTIMEND.png",
		path: "/productos/optimend",
		color: "bg-gradient-to-br from-purple-200 to-pink-400",
	},
	{
		name: "Airo",
		description:
			"Suplemento innovador para el bienestar respiratorio. Ayuda a mantener las vías respiratorias despejadas y saludables.",
		benefits: [
			"Mejora la respiración",
			"Aumenta la energía",
			"Refuerza el sistema inmunológico",
		],
		price: "S/. 280",
		image: "/AIRO.png",
		path: "/productos/airo",
		color: "bg-gradient-to-br from-orange-200 to-yellow-400",
	},
	{
		name: "Nitrox",
		description:
			"Fórmula potente para aumentar el óxido nítrico en el cuerpo. Mejora el flujo sanguíneo y la entrega de nutrientes.",
		benefits: [
			"Aumenta la energía",
			"Mejora el rendimiento físico",
			"Favorece la recuperación muscular",
		],
		price: "S/. 280",
		image: "/NITROX.png",
		path: "/productos/nitrox",
		color: "bg-gradient-to-br from-red-200 to-red-400",
	},
];

export default function Productos() {
	const [currentProduct, setCurrentProduct] = useState(0);

	return (
		<div className="min-h-screen pt-24">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Nuestros Productos
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Descubre nuestra línea completa de productos premium diseñados para
							mejorar tu calidad de vida
						</p>
					</motion.div>
				</div>
			</section>

			{/* Products Showcase */}
			<section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
				<div className="max-w-6xl mx-auto px-4">
					{/* Custom Product Showcase */}
					<div className="relative max-w-4xl mx-auto">
						<div className="overflow-hidden">
							<motion.div
								key={currentProduct}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
								className="card h-full relative overflow-hidden group bg-white/80 backdrop-blur-sm border border-purple-100 shadow-xl"
							>
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 ${productos[currentProduct].color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
								></div>

								<div className="relative z-10">
									{/* Product Image */}
									<div className="mb-6 text-center">
										<div className="w-52 h-52 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
											<img
												src={productos[currentProduct].image}
												alt={productos[currentProduct].name}
												className="w-44 h-44 object-contain"
												onError={(e) => {
													e.currentTarget.style.display = "none";
													const fallback =
														e.currentTarget.nextElementSibling;
													if (fallback && fallback instanceof HTMLElement) {
														fallback.style.display = "flex";
													}
												}}
											/>
											<div className="hidden w-44 h-44 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg items-center justify-center">
												<span className="text-2xl font-bold text-gray-400">
													{productos[currentProduct].name[0]}
												</span>
											</div>
										</div>
										<h3 className="text-2xl font-bold text-gray-800 mb-2">
											{productos[currentProduct].name}
										</h3>
										<div
											className={`text-3xl font-bold bg-gradient-to-r ${productos[currentProduct].color} bg-clip-text text-transparent`}
										>
											{productos[currentProduct].price}
										</div>
									</div>

									{/* Product Description */}
									<p className="text-gray-600 mb-6 leading-relaxed text-center">
										{productos[currentProduct].description}
									</p>

									{/* Benefits */}
									<div className="mb-6">
										<h4 className="font-semibold text-gray-800 mb-3 text-center">
											Beneficios principales:
										</h4>
										<ul className="space-y-2">
											{productos[currentProduct].benefits.map((benefit, i) => (
												<li
													key={i}
													className="flex items-center gap-2 justify-center"
												>
													<div
														className={`w-2 h-2 rounded-full bg-gradient-to-r ${productos[currentProduct].color}`}
													></div>
													<span className="text-gray-600 text-sm">
														{benefit}
													</span>
												</li>
											))}
										</ul>
									</div>

									{/* CTA Button */}
									<Link
										to={productos[currentProduct].path}
										className={`block w-full text-center py-3 px-6 bg-gradient-to-r ${productos[currentProduct].color} text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
									>
										Ver Detalles
									</Link>
								</div>
							</motion.div>
						</div>

						{/* Navigation Dots */}
						<div className="flex justify-center mt-8 space-x-2">
							{productos.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentProduct(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentProduct
											? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							))}
						</div>

						{/* Navigation Arrows */}
						<button
							onClick={() =>
								setCurrentProduct(
									(prev) => (prev - 1 + productos.length) % productos.length
								)
							}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-200"
						>
							<FaChevronLeft className="text-purple-600" />
						</button>
						<button
							onClick={() =>
								setCurrentProduct((prev) => (prev + 1) % productos.length)
							}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-200"
						>
							<FaChevronRight className="text-purple-600" />
						</button>
					</div>
				</div>
			</section>

			{/* Product Grid */}
			<section className="py-20 bg-gradient-to-br from-purple-50/60 to-pink-50/60">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Nuestros Productos
						</h2>
						<p className="text-xl text-gray-600">
							Descubre nuestras soluciones premium
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{productos.map((producto, index) => (
							<motion.div
								key={index}
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="flex flex-col items-center group"
							>
								{/* Agregar fondo dinámico basado en el color de cada producto */}
								<div
									className={`w-52 h-52 mx-auto ${producto.color} rounded-full flex items-center justify-center mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
								>
									{/* Subtle overlay for better contrast */}
									<div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
									<img
										src={producto.image}
										alt={producto.name}
										className="w-44 h-44 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
										onError={(e) => {
											e.currentTarget.style.display = "none";
											const fallback =
												e.currentTarget.nextElementSibling;
											if (fallback && fallback instanceof HTMLElement) {
												fallback.style.display = "flex";
											}
										}}
									/>
									<div className="hidden w-44 h-44 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg items-center justify-center relative z-10">
										<span className="text-6xl font-bold text-gray-600">
											{producto.name[0]}
										</span>
									</div>
								</div>
								
								{/* Product Info */}
								<div className="text-center">
									<h3 className="text-2xl font-bold text-gray-800 mb-2">
										{producto.name}
									</h3>
									<p className="text-gray-600 mb-4 max-w-xs">
										{producto.description.substring(0, 80)}...
									</p>
									<div className={`text-2xl font-bold bg-gradient-to-r ${producto.color} bg-clip-text text-transparent mb-4`}>
										{producto.price}
									</div>
									<Link
										to={producto.path}
										className={`inline-block px-6 py-2 bg-gradient-to-r ${producto.color} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
									>
										Ver Detalles
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<SocialLinks 
				gradientColors="from-purple-200 via-pink-200 to-purple-300" 
				textColor="text-gray-800"
			/>
		</div>
	);
}
