// Componente de animaciones neutras para páginas de productos
// Solo incluye las animaciones sin fondos de color

const ProductAnimations = () => {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">			
			{/* Corazones flotantes */}
			{Array.from({ length: 10 }, (_, i) => (
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
					<div className="text-pink-400 text-lg opacity-40">💖</div>
				</div>
			))}
			
			{/* Estrellas parpadeantes */}
			{Array.from({ length: 12 }, (_, i) => (
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
					<div className="text-yellow-300 text-sm opacity-30">✨</div>
				</div>
			))}
			
			{/* Partículas sutiles */}
			{Array.from({ length: 8 }, (_, i) => (
				<div
					key={`particle-${i}`}
					className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-20 animate-pulse"
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

// Animaciones del primer plano más sutiles para productos
const ProductForegroundAnimations = () => {
	return (
		<div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
			{/* Corazones pequeños flotando */}
			{Array.from({ length: 4 }, (_, i) => (
				<div
					key={`fg-heart-${i}`}
					className="absolute animate-bounce opacity-30"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 6}s`,
						animationDuration: `${4 + Math.random() * 3}s`,
					}}
				>
					<div className="text-pink-400 text-xl drop-shadow-sm">💕</div>
				</div>
			))}
			
			{/* Mariposas más sutiles */}
			{Array.from({ length: 2 }, (_, i) => (
				<div
					key={`butterfly-${i}`}
					className="absolute opacity-25"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animation: `flyAround ${10 + Math.random() * 5}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 8}s`,
					}}
				>
					<div className="text-purple-400 text-lg drop-shadow-sm">🦋</div>
				</div>
			))}
		</div>
	);
};

export { ProductAnimations, ProductForegroundAnimations };
