import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Componente de fondo animado global
const GlobalAnimatedBackground = () => {
	const location = useLocation();
	const isProductPage = location.pathname.includes('/productos/') && 
		!location.pathname.includes('/productos') && 
		location.pathname !== '/productos';

	// Lista de productos específicos
	const specificProductPages = ['/airo', '/linq', '/gnmx', '/nitrox', '/optimend'];
	const isSpecificProductPage = specificProductPages.some(page => location.pathname.includes(page));

	// Aplicar clase CSS condicional al body para controlar el fondo
	useEffect(() => {
		if (isProductPage || isSpecificProductPage) {
			document.body.classList.add('product-page');
		} else {
			document.body.classList.remove('product-page');
		}

		// Cleanup al desmontar
		return () => {
			document.body.classList.remove('product-page');
		};
	}, [isProductPage, isSpecificProductPage]);

	const shouldShowBackground = !isProductPage && !isSpecificProductPage;
	const particleCount = (isProductPage || isSpecificProductPage) ? 8 : 15;
	const starCount = (isProductPage || isSpecificProductPage) ? 12 : 20;
	const particleQuantity = (isProductPage || isSpecificProductPage) ? 6 : 10;

	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
			{/* Fondo base con degradado romántico - Solo si no es página de producto específica */}
			{shouldShowBackground && (
				<div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 opacity-20 animate-pulse"></div>
			)}
			
			{/* Corazones flotantes - Reducidos en páginas de producto */}
			{Array.from({ length: particleCount }, (_, i) => (
				<div
					key={`heart-${i}`}
					className="absolute animate-bounce"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 5}s`,
						animationDuration: `${3 + Math.random() * 2}s`,
					}}
				>
					<div className={`text-pink-400 ${(isProductPage || isSpecificProductPage) ? 'text-lg opacity-20' : 'text-xl opacity-60'}`}>💖</div>
				</div>
			))}
			
			{/* Estrellas parpadeantes */}
			{Array.from({ length: starCount }, (_, i) => (
				<div
					key={`star-${i}`}
					className="absolute animate-ping"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 3}s`,
						animationDuration: `${2 + Math.random() * 1}s`,
					}}
				>
					<div className={`text-pink-300 ${(isProductPage || isSpecificProductPage) ? 'text-sm opacity-15' : 'text-sm opacity-50'}`}>✨</div>
				</div>
			))}
			
			{/* Partículas rosadas - Más sutiles en páginas de producto */}
			{Array.from({ length: particleQuantity }, (_, i) => (
				<div
					key={`particle-${i}`}
					className={`absolute rounded-full animate-pulse ${
						(isProductPage || isSpecificProductPage) ? 'w-1 h-1 bg-purple-300 opacity-10' : 'w-2 h-2 bg-pink-400 opacity-30'
					}`}
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 4}s`,
					}}
				></div>
			))}
		</div>
	);
};

// Componente de animaciones del primer plano
const GlobalForegroundAnimations = () => {
	const location = useLocation();
	const isProductPage = location.pathname.includes('/productos/') && 
		!location.pathname.includes('/productos') && 
		location.pathname !== '/productos';

	// Lista de productos específicos
	const specificProductPages = ['/airo', '/linq', '/gnmx', '/nitrox', '/optimend'];
	const isSpecificProductPage = specificProductPages.some(page => location.pathname.includes(page));

	const shouldShowFullAnimations = !isProductPage && !isSpecificProductPage;
	const heartCount = (isProductPage || isSpecificProductPage) ? 2 : 8;
	const butterflyCount = (isProductPage || isSpecificProductPage) ? 1 : 4;

	return (
		<div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
			{/* Corazones grandes flotando por encima - Muy reducidos en páginas de producto */}
			{Array.from({ length: heartCount }, (_, i) => (
				<div
					key={`fg-heart-${i}`}
					className="absolute animate-bounce"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 6}s`,
						animationDuration: `${4 + Math.random() * 3}s`,
					}}
				>
					<div className={`text-pink-500 drop-shadow-lg ${
						(isProductPage || isSpecificProductPage) ? 'text-lg opacity-15' : 'text-3xl opacity-60'
					}`}>💕</div>
				</div>
			))}
			
			{/* Estrellas brillantes por encima - Solo en páginas que no sean productos */}
			{shouldShowFullAnimations && Array.from({ length: 12 }, (_, i) => (
				<div
					key={`fg-star-${i}`}
					className="absolute animate-spin opacity-50"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 4}s`,
						animationDuration: `${3 + Math.random() * 2}s`,
					}}
				>
					<div className="text-yellow-400 text-2xl drop-shadow-lg">⭐</div>
				</div>
			))}
			
			{/* Burbujas de amor ascendentes - Solo en páginas que no sean productos específicos */}
			{shouldShowFullAnimations && Array.from({ length: 6 }, (_, i) => (
				<div
					key={`bubble-${i}`}
					className="absolute animate-pulse"
					style={{
						left: `${Math.random() * 100}%`,
						bottom: '-50px',
						animationDelay: `${i * 2}s`,
					}}
				>
					<div 
						className="text-pink-400 text-xl opacity-50"
						style={{
							animation: `riseUp ${8 + Math.random() * 4}s ease-out infinite`,
							animationDelay: `${i * 1.5}s`,
						}}
					>
						💖
					</div>
				</div>
			))}
			
			{/* Mariposas volando - Muy sutiles en páginas de producto */}
			{Array.from({ length: butterflyCount }, (_, i) => (
				<div
					key={`butterfly-${i}`}
					className="absolute"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animation: `flyAround ${10 + Math.random() * 5}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 8}s`,
						opacity: (isProductPage || isSpecificProductPage) ? 0.1 : 0.55,
					}}
				>
					<div className={`text-purple-400 drop-shadow-lg ${
						(isProductPage || isSpecificProductPage) ? 'text-sm' : 'text-2xl'
					}`}>🦋</div>
				</div>
			))}
		</div>
	);
};

// Animaciones CSS para burbujas ascendentes y mariposas
const GlobalAnimationStyles = () => (
	<style>{`
		@keyframes riseUp {
			0% {
				transform: translateY(100vh) rotate(0deg);
				opacity: 0;
			}
			10% {
				opacity: 1;
			}
			90% {
				opacity: 1;
			}
			100% {
				transform: translateY(-100px) rotate(360deg);
				opacity: 0;
			}
		}
		
		@keyframes flyAround {
			0%, 100% {
				transform: translateX(0) translateY(0) rotate(0deg);
			}
			25% {
				transform: translateX(100px) translateY(-50px) rotate(90deg);
			}
			50% {
				transform: translateX(-50px) translateY(-100px) rotate(180deg);
			}
			75% {
				transform: translateX(-100px) translateY(50px) rotate(270deg);
			}
		}
	`}</style>
);

export { GlobalAnimatedBackground, GlobalForegroundAnimations, GlobalAnimationStyles };
