import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Componente de fondo animado global
const GlobalAnimatedBackground = () => {
	const location = useLocation();
	
	// Detectar páginas de productos específicos
	const specificProductPages = ['/produtos/airo', '/produtos/linq', '/produtos/gnmx', '/produtos/gnm-x', '/produtos/nitrox', '/produtos/optimend'];
	const isSpecificProductPage = specificProductPages.some(page => location.pathname.includes(page)) ||
		['/airo', '/linq', '/gnmx', '/gnm-x', '/nitrox', '/optimend'].some(page => location.pathname.includes(page));

	// Aplicar clase CSS condicional al body para controlar el fondo
	useEffect(() => {
		if (isSpecificProductPage) {
			document.body.classList.add('product-page');
		} else {
			document.body.classList.remove('product-page');
		}

		// Cleanup al desmontar
		return () => {
			document.body.classList.remove('product-page');
		};
	}, [isSpecificProductPage]);

	// NO mostrar fondo global en páginas de productos específicos
	const shouldShowBackground = !isSpecificProductPage;
	const particleCount = isSpecificProductPage ? 3 : 15;
	const starCount = isSpecificProductPage ? 5 : 20;

	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
			{/* Solo mostrar fondo en páginas que NO son de produtos específicos */}
			{shouldShowBackground && (
				<div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 opacity-15 animate-pulse"></div>
			)}
			
			{/* Corazones flotantes - Muy reducidos en páginas de produto */}
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
					💖
				</div>
			))}

			{/* Estrellas brillantes - Muy reducidas en páginas de produto */}
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
					⭐
				</div>
			))}
		</div>
	);
};

// Componente de animaciones de primer plano
const GlobalForegroundAnimations = () => {
	const location = useLocation();
	const isSpecificProductPage = ['/airo', '/linq', '/gnmx', '/gnm-x', '/nitrox', '/optimend']
		.some(page => location.pathname.includes(page));

	const butterflyCount = isSpecificProductPage ? 1 : 6;

	return (
		<div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
			{Array.from({ length: butterflyCount }, (_, i) => (
				<div
					key={`butterfly-${i}`}
					className="absolute animate-pulse opacity-30"
					style={{
						left: `${Math.random() * 90}%`,
						top: `${Math.random() * 90}%`,
						animationDelay: `${Math.random() * 8}s`,
						animationDuration: `${4 + Math.random() * 3}s`,
					}}
				>
					🦋
				</div>
			))}
		</div>
	);
};

// Componente de estilos CSS globales
const GlobalAnimationStyles = () => {
	useEffect(() => {
		const style = document.createElement('style');
		style.textContent = `
			/* Estilos específicos para páginas de produto */
			body.product-page {
				background: transparent !important;
			}
			
			body.product-page::before {
				display: none !important;
			}
			
			/* Reducir animaciones en páginas de produto */
			body.product-page .animate-bounce,
			body.product-page .animate-pulse,
			body.product-page .animate-ping {
				animation-duration: 6s !important;
				opacity: 0.2 !important;
			}
		`;
		document.head.appendChild(style);

		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return null;
};

export { GlobalAnimatedBackground, GlobalForegroundAnimations, GlobalAnimationStyles };
