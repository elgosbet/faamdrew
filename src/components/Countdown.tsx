import { useEffect, useState } from 'react';
import { config } from '../config';

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = config.fechaEvento.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
      setIsReady(true);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isReady) return null;

  const timeBlocks = [
    { label: 'DÍAS', value: timeLeft.dias },
    { label: 'HRS', value: timeLeft.horas },
    { label: 'MIN', value: timeLeft.minutos },
    { label: 'SEG', value: timeLeft.segundos }
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4 mt-8">
      {timeBlocks.map((block, index) => (
        <div key={index} className="bg-white/40 backdrop-blur-[10px] border border-white/60 p-4 rounded-[16px] text-center shadow-[0_8px_32px_rgba(255,180,190,0.15)] flex flex-col items-center justify-center">
          <span className="block text-[28px] md:text-[32px] font-bold font-sans text-[var(--color-theme-accent)]">
            {block.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[1.5px] opacity-70 text-[var(--color-theme-text)] mt-1">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
