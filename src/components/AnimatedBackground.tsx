const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {/* Corazones flotantes */}
      <div className="floating-hearts">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Estrellas románticas */}
      <div className="romantic-stars">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="romantic-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Partículas rosadas */}
      <div className="pink-particles">
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={i}
            className="pink-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Corazones ascendentes */}
      <div className="rising-hearts">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="rising-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Puntos brillantes románticos */}
      <div className="love-sparkles">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className="love-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Notas musicales */}
      <div className="music-notes">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="music-note"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Círculos de amor pulsantes */}
      <div className="love-circles">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="love-circle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
