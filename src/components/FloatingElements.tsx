import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const SPHERE_COLORS = [
  { start: '#FFFFFF', end: '#FEF08A' }, // Butter yellow
  { start: '#FFFFFF', end: '#FED7AA' }, // Peach
  { start: '#FFFFFF', end: '#FBCFE8' }, // Dusty rose
  { start: '#FFFFFF', end: '#BBF7D0' }, // Sage green / pastel green
  { start: '#FFFFFF', end: '#BFDBFE' }, // Pastel blue
  { start: '#FFFFFF', end: '#E7E5E4' }, // Warm gray/beige
  { start: '#FFFFFF', end: '#FEF3C7' }, // Cream/ivory
];

interface Element {
  id: number;
  color: { start: string; end: string };
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
      return {
        id: i,
        color: SPHERE_COLORS[Math.floor(Math.random() * SPHERE_COLORS.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8,
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
          className="absolute flex items-center justify-center will-change-transform"
          style={{ opacity: el.zDepth < 0 ? 0.6 : 0.9 }}
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
            rotate: Math.random() > 0.5 ? 45 : -45, // slight rotation for light shifting
          }}
          transition={{
            y: { duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay },
            x: { duration: el.duration * 0.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            rotate: { duration: el.duration * 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
          }}
        >
          <div 
            className="rounded-full shadow-[inset_-4px_-4px_12px_rgba(0,0,0,0.1),_2px_4px_12px_rgba(0,0,0,0.05)] border border-white/50 backdrop-blur-sm"
            style={{ 
              width: '40px',
              height: '40px',
              background: `radial-gradient(circle at 35% 35%, ${el.color.start} 0%, ${el.color.end} 100%)`,
              filter: el.zDepth < 0 ? 'blur(3px)' : 'none'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
