import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const ELEMENTS = ['sun', 'cloud', 'star', 'rainbow'];

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
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-md">
    <path d="M50 5L53.5 15L64 12L64.5 22.5L74.5 23.5L71 33.5L79.5 38L73 46.5L79.5 55L71 59.5L74.5 69.5L64.5 70.5L64 81L53.5 78L50 88L46.5 78L36 81L35.5 70.5L25.5 69.5L29 59.5L20.5 55L27 46.5L20.5 38L29 33.5L25.5 23.5L35.5 22.5L36 12L46.5 15L50 5Z" fill="#F4C773" stroke="#F1AD41" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="50" cy="46.5" r="22" fill="#F8BC5C"/>
    <circle cx="43" cy="44" r="3" fill="#6A6865"/>
    <circle cx="57" cy="44" r="3" fill="#6A6865"/>
    <path d="M46 51Q50 55 54 51" stroke="#6A6865" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="37" cy="48" r="4" fill="#E38E55" opacity="0.5"/>
    <circle cx="63" cy="48" r="4" fill="#E38E55" opacity="0.5"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-14 drop-shadow-md opacity-80">
    <path d="M75 50C75 35 65 30 55 35C50 20 30 20 25 35C10 40 10 65 25 70L75 70C90 70 90 55 75 50Z" fill="#C4E0E8" stroke="#A7CFDB" strokeWidth="1"/>
    <path d="M35 45A5 5 0 0 1 45 45" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M60 40A5 5 0 0 1 70 40" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const RainbowIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 drop-shadow-md">
    <path d="M10 90 A40 40 0 0 1 90 90" stroke="#E67B65" strokeWidth="6" strokeLinecap="round"/>
    <path d="M20 90 A30 30 0 0 1 80 90" stroke="#F4C773" strokeWidth="6" strokeLinecap="round"/>
    <path d="M30 90 A20 20 0 0 1 70 90" stroke="#87C4C9" strokeWidth="6" strokeLinecap="round"/>
    {/* Tiny clouds at the bottom */}
    <circle cx="10" cy="90" r="8" fill="#FFF" />
    <circle cx="20" cy="90" r="10" fill="#FFF" />
    <circle cx="30" cy="90" r="8" fill="#FFF" />
    <circle cx="90" cy="90" r="8" fill="#FFF" />
    <circle cx="80" cy="90" r="10" fill="#FFF" />
    <circle cx="70" cy="90" r="8" fill="#FFF" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 drop-shadow-sm">
    <path d="M50 5L62 38L95 38L68 58L78 90L50 70L22 90L32 58L5 38L38 38L50 5Z" fill="#F6C153" stroke="#F1AD41" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

export function FloatingElements() {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 16 : 28;
    
    // Create an array of types, ensuring they are evenly distributed.
    // For rainbows, we can make them slightly less frequent if desired,
    // or just ensure they are spaced out by shuffling the assignment.
    const shuffledIndices = Array.from({ length: count }).map((_, i) => i).sort(() => Math.random() - 0.5);
    
    const newElements = Array.from({ length: count }).map((_, i) => {
      // 4 columns on mobile, 7 on desktop
      const cols = isMobile ? 4 : 7;
      const col = i % cols;
      const row = Math.floor(i / cols);
      const rows = Math.ceil(count / cols);

      return {
        id: i,
        // Cycle through elements perfectly to guarantee even distribution of types
        type: ELEMENTS[shuffledIndices[i] % ELEMENTS.length],
        // Spread x evenly across columns, add some random jitter
        x: (col * (100 / cols)) + (Math.random() * (100 / cols) * 0.6),
        // Keep initial 'y' for starting offset jitter
        y: Math.random() * 20,
        size: Math.random() * 1.2 + 0.8,
        duration: Math.random() * 30 + 45,
        // Distribute delay based on row so they are spaced vertically over time
        delay: - (row * (60 / rows)) - (Math.random() * (60 / rows)),
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
            y: `-${30}vh`,
            rotate: el.type === 'star' ? 180 : el.type === 'rainbow' ? 5 : Math.random() > 0.5 ? 15 : -15,
          }}
          transition={{
            y: { duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay },
            x: { duration: el.duration * 0.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            rotate: { duration: el.duration * 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
          }}
        >
          <motion.div 
            style={{ 
              filter: el.zDepth < 0 ? 'blur(2px)' : 'none', 
              cursor: 'grab',
              transform: `scale(${el.size})` 
            }}
            whileHover={{ scale: el.size * 1.15, rotate: 10 }}
            whileTap={{ scale: el.size * 0.9, rotate: -10, cursor: 'grabbing' }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          >
            {el.type === 'sun' && <SunIcon />}
            {el.type === 'cloud' && <CloudIcon />}
            {el.type === 'star' && <StarIcon />}
            {el.type === 'rainbow' && <RainbowIcon />}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
