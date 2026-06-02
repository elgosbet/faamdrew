import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const ELEMENTS = ['sun', 'cloud', 'star'];

interface Element {
  id: number;
  type: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  zDepth: number;
}

const SunIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <path d="M50 8C50 8 55 18 62 20C69 22 78 18 78 18C78 18 76 28 80 34C84 40 94 40 94 40C94 40 86 48 88 55C90 62 98 68 98 68C98 68 88 72 84 78C80 84 82 94 82 94C82 94 72 88 65 90C58 92 50 100 50 100C50 100 42 92 35 90C28 88 18 94 18 94C18 94 20 84 16 78C12 72 2 68 2 68C2 68 10 62 12 55C14 48 6 40 6 40C6 40 16 40 20 34C24 28 22 18 22 18C22 18 31 22 38 20C45 18 50 8 50 8Z" fill="#F6C153"/>
    <circle cx="50" cy="50" r="28" fill="#F9A03F"/>
    <circle cx="40" cy="46" r="4" fill="#6A6865"/>
    <circle cx="60" cy="46" r="4" fill="#6A6865"/>
    <path d="M44 56Q50 62 56 56" stroke="#6A6865" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="33" cy="52" r="5" fill="#E38E55" opacity="0.6"/>
    <circle cx="67" cy="52" r="5" fill="#E38E55" opacity="0.6"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-10">
    <path d="M75 50C75 40 65 35 55 40C50 25 30 25 25 40C15 45 15 60 25 65L75 65C85 65 85 55 75 50Z" fill="#D4E1E6"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M50 5L62 38L95 38L68 58L78 90L50 70L22 90L32 58L5 38L38 38L50 5Z" fill="#F6C153" stroke="#E38E55" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export function FloatingElements() {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 12 : 24;
    
    const newElements = Array.from({ length: count }).map((_, i) => {
      return {
        id: i,
        type: ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1 + 0.8,
        duration: Math.random() * 30 + 35,
        delay: Math.random() * -30, // Negative delay so they start already on screen
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
          className="absolute flex items-center justify-center will-change-transform"
          style={{ opacity: el.zDepth < 0 ? 0.4 : 0.7 }}
          initial={{ 
            x: `${el.x}vw`, 
            y: `${110 + el.y}vh`,
            rotate: 0,
            scale: el.size,
            z: el.zDepth
          }}
          animate={{ 
            x: `${el.x + (Math.random() * 20 - 10)}vw`,
            y: `-${20}vh`,
            rotate: el.type === 'star' ? 180 : Math.random() > 0.5 ? 20 : -20,
          }}
          transition={{
            y: { duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay },
            x: { duration: el.duration * 0.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            rotate: { duration: el.duration * 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
          }}
        >
          <div style={{ filter: el.zDepth < 0 ? 'blur(3px)' : 'none' }}>
            {el.type === 'sun' && <SunIcon />}
            {el.type === 'cloud' && <CloudIcon />}
            {el.type === 'star' && <StarIcon />}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
