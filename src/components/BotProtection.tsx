/**
 * © 2025 Miriam Mautino - MM Bienestar & Emprendimiento
 * Componente de protección contra bots y ataques automatizados
 */

import { useState, useEffect } from 'react';

interface BotProtectionProps {
  onValidation: (isHuman: boolean) => void;
  children: React.ReactNode;
}

export const BotProtection: React.FC<BotProtectionProps> = ({ onValidation, children }) => {
  const [isValidated, setIsValidated] = useState(false);
  const [challenge, setChallenge] = useState({ question: '', answer: 0 });

  useEffect(() => {
    // Generar desafío matemático simple
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setChallenge({
      question: `¿Cuánto es ${num1} + ${num2}?`,
      answer: num1 + num2
    });
  }, []);

  const handleValidation = (userAnswer: number) => {
    const isHuman = userAnswer === challenge.answer;
    setIsValidated(isHuman);
    onValidation(isHuman);
  };

  if (isValidated) {
    return <>{children}</>;
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-600">🛡️</span>
        <span className="font-semibold text-gray-700">Verificación de Seguridad</span>
      </div>
      <p className="text-gray-600 mb-3">{challenge.question}</p>
      <input
        type="number"
        className="border border-gray-300 rounded px-3 py-1 mr-2"
        onChange={(e) => {
          const answer = parseInt(e.target.value);
          if (!isNaN(answer)) {
            handleValidation(answer);
          }
        }}
        placeholder="Respuesta"
      />
    </div>
  );
};

// Hook para detectar comportamiento de bot
export const useBotDetection = () => {
  const [suspiciousActivity, setSuspiciousActivity] = useState(false);
  
  useEffect(() => {
    let clickCount = 0;
    let lastClickTime = 0;
    
    const handleClick = () => {
      const now = Date.now();
      if (now - lastClickTime < 100) { // Clicks muy rápidos
        clickCount++;
        if (clickCount > 10) {
          setSuspiciousActivity(true);
        }
      } else {
        clickCount = 0;
      }
      lastClickTime = now;
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  return suspiciousActivity;
};
