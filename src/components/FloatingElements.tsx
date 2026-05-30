import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const ELEMENTS = ['🎈', '🍃', '🌿', '☁️', '🪁', '🧸', '✨', '🎈'];

interface Element {
  id: number;
  icon: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  zDepth: number;
}

export function FloatingElements() {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 15 : 30;
    
    const newElements = Array.from({ length: count }).map((_, i) => {
      const isBalloon = i % 3 === 0;

      return {
        id: i,
        icon: isBalloon ? '🎈' : ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 1.2,
        duration: Math.random() * 20 + 25,
        delay: Math.random() * -20, // Negative delay so they start already on screen
        zDepth: Math.random() * 100 - 50, // For 3D parallax effect
      };
    });
    
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ perspective: '1000px' }}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute will-change-transform flex items-center justify-center"
          style={{ opacity: el.zDepth < 0 ? 0.4 : 0.8 }}
          initial={{ 
            x: `${el.x}vw`, 
            y: `${110 + el.y}vh`,
            rotate: 0,
            scale: el.size,
            z: el.zDepth
          }}
          animate={{ 
            x: `${el.x + (Math.random() * 30 - 15)}vw`,
            y: `-${20}vh`,
            rotate: el.icon === '🎈' ? [-5, 5, -5] : 360,
          }}
          transition={{
            y: { duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay },
            x: { duration: el.duration * 0.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            rotate: { duration: el.icon === '🎈' ? 4 : el.duration, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-3xl md:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] filter" style={{ filter: el.zDepth < 0 ? 'blur(2px)' : 'none' }}>
            {el.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
