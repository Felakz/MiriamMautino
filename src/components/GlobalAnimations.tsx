import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Componente de fondo animado global
const GlobalAnimatedBackground = () => {
	const location = useLocation();
	
	// Ya no ocultamos animaciones en productos específicos

	// Detectar página de info-producto, productos y TODOS los productos específicos (animaciones sutiles)
	const isInfoProductPage = location.pathname.includes('/info-producto');
	const isProductsPage = location.pathname.includes('/productos');
	const isLinqPage = location.pathname.includes('/linq');
	const isAiroPage = location.pathname.includes('/airo');
	const isGnmxPage = location.pathname.includes('/gnm-x') || location.pathname.includes('/gnmx');
	const isNitroxPage = location.pathname.includes('/nitrox');
	const isOptimendPage = location.pathname.includes('/optimend');
	
	// Detectar páginas legales e informativas
	const isLegalPage = location.pathname.includes('/politicas') || 
		location.pathname.includes('/terminos') || 
		location.pathname.includes('/derechos') || 
		location.pathname.includes('/cookies');
	const isContactPage = location.pathname.includes('/contacto');
	const isPreguntasPage = location.pathname.includes('/preguntas');
	const isEmprendimientoPage = location.pathname.includes('/emprendimiento');

	// Todas las páginas de productos y páginas especiales tienen animaciones sutiles
	const needsSubtleAnimations = isInfoProductPage || isProductsPage || isLinqPage || 
		isAiroPage || isGnmxPage || isNitroxPage || isOptimendPage ||
		isLegalPage || isContactPage || isPreguntasPage || isEmprendimientoPage;
	
	const particleCount = needsSubtleAnimations ? 8 : 15; // Menos corazones en páginas con contenido
	const starCount = needsSubtleAnimations ? 10 : 20; // Menos estrellas en páginas con contenido

	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
			{/* Fondo sutil para mantener el color del footer como imagen 1 */}
			<div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 opacity-20"></div>
			
			{/* Corazones flotantes - Sutiles en todas las páginas de productos */}
			{Array.from({ length: particleCount }, (_, i) => (
				<div
					key={`heart-${i}`}
					className={`absolute animate-bounce ${needsSubtleAnimations ? 'opacity-30' : 'opacity-70'}`}
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 5}s`,
						animationDuration: `${3 + Math.random() * 2}s`,
						zIndex: needsSubtleAnimations ? -1 : 1, // Detrás del texto en páginas con contenido
					}}
				>
					💖
				</div>
			))}

			{/* Estrellas brillantes - Sutiles en todas las páginas de productos */}
			{Array.from({ length: starCount }, (_, i) => (
				<div
					key={`star-${i}`}
					className={`absolute animate-ping ${needsSubtleAnimations ? 'opacity-20' : 'opacity-50'}`}
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 3}s`,
						animationDuration: `${2 + Math.random() * 1}s`,
						zIndex: needsSubtleAnimations ? -1 : 1, // Detrás del texto en páginas con contenido
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
	
	// Detectar todas las páginas que necesitan animaciones sutiles
	const isInfoProductPage = location.pathname.includes('/info-producto');
	const isProductsPage = location.pathname.includes('/productos');
	const isLinqPage = location.pathname.includes('/linq');
	const isAiroPage = location.pathname.includes('/airo');
	const isGnmxPage = location.pathname.includes('/gnm-x') || location.pathname.includes('/gnmx');
	const isNitroxPage = location.pathname.includes('/nitrox');
	const isOptimendPage = location.pathname.includes('/optimend');
	
	// Detectar páginas legales e informativas
	const isLegalPage = location.pathname.includes('/politicas') || 
		location.pathname.includes('/terminos') || 
		location.pathname.includes('/derechos') || 
		location.pathname.includes('/cookies');
	const isContactPage = location.pathname.includes('/contacto');
	const isPreguntasPage = location.pathname.includes('/preguntas');
	const isEmprendimientoPage = location.pathname.includes('/emprendimiento');
	
	const needsSubtleAnimations = isInfoProductPage || isProductsPage || isLinqPage || 
		isAiroPage || isGnmxPage || isNitroxPage || isOptimendPage ||
		isLegalPage || isContactPage || isPreguntasPage || isEmprendimientoPage;

	// Ajustar cantidad de mariposas - todas las páginas con contenido tienen animaciones sutiles
	const butterflyCount = needsSubtleAnimations ? 3 : 6; 

	return (
		<div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
			{Array.from({ length: butterflyCount }, (_, i) => (
				<div
					key={`butterfly-${i}`}
					className={`absolute animate-pulse ${needsSubtleAnimations ? 'opacity-15' : 'opacity-30'}`}
					style={{
						left: `${Math.random() * 90}%`,
						top: `${Math.random() * 90}%`,
						animationDelay: `${Math.random() * 8}s`,
						animationDuration: `${4 + Math.random() * 3}s`,
						zIndex: needsSubtleAnimations ? -1 : 1, // Detrás del texto en páginas con contenido importante
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
			/* Estilos específicos para páginas de producto SOLAMENTE */
			body.product-page {
				background: transparent !important;
			}
			
			body.product-page::before {
				display: none !important;
			}
			
			/* Reducir animaciones SOLO en páginas de produto */
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
