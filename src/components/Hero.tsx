import { motion } from 'motion/react';
import { Countdown } from './Countdown';
import { TiltCard } from './TiltCard';

const CuteSunSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 8C50 8 55 18 62 20C69 22 78 18 78 18C78 18 76 28 80 34C84 40 94 40 94 40C94 40 86 48 88 55C90 62 98 68 98 68C98 68 88 72 84 78C80 84 82 94 82 94C82 94 72 88 65 90C58 92 50 100 50 100C50 100 42 92 35 90C28 88 18 94 18 94C18 94 20 84 16 78C12 72 2 68 2 68C2 68 10 62 12 55C14 48 6 40 6 40C6 40 16 40 20 34C24 28 22 18 22 18C22 18 31 22 38 20C45 18 50 8 50 8Z" fill="#F6C153"/>
    <circle cx="50" cy="50" r="28" fill="#F9A03F"/>
    <circle cx="40" cy="46" r="4" fill="#6A6865"/>
    <circle cx="60" cy="46" r="4" fill="#6A6865"/>
    <path d="M44 56Q50 62 56 56" stroke="#6A6865" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="33" cy="52" r="5" fill="#E38E55" opacity="0.6"/>
    <circle cx="67" cy="52" r="5" fill="#E38E55" opacity="0.6"/>
  </svg>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl w-full"
      >
        <TiltCard>
          <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 relative overflow-hidden flex flex-col items-center w-full">
            
            {/* Arched text: MI PRIMERA VUELTA AL SOL */}
            <motion.div 
              style={{ transform: "translateZ(60px)" }}
              className="w-full max-w-[400px] mb-[-40px]"
            >
              <svg viewBox="0 0 500 150" className="w-full drop-shadow-sm">
                <path id="curve" d="M 50,140 Q 250,20 450,140" fill="transparent" />
                <text 
                  className="font-serif font-bold uppercase tracking-[0.25em] text-xl fill-[var(--color-theme-accent)]" 
                  textAnchor="middle"
                >
                  <textPath href="#curve" startOffset="50%">
                    mi primera vuelta al sol
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[var(--color-theme-hero-title)] font-bold text-xl md:text-2xl mt-8 mb-4 font-sans drop-shadow-sm"
              style={{ transform: "translateZ(70px)" }}
            >
              Andrew cumple
            </motion.p>

            {/* Large "UNO" with cute sun as O */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-8"
              style={{ transform: "translateZ(100px)" }}
            >
              <span className="font-serif text-[100px] md:text-[140px] font-bold text-[var(--color-theme-accent)] leading-none pt-4">U</span>
              <span className="font-serif text-[100px] md:text-[140px] font-bold text-[var(--color-theme-accent)] leading-none pt-4">N</span>
              <CuteSunSVG className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] -mt-2 animate-[spin_20s_linear_infinite]" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-[18px] md:text-[20px] font-semibold text-[var(--color-theme-text)] opacity-80 max-w-md mx-auto mb-6"
              style={{ transform: "translateZ(60px)" }}
            >
              Te invitamos a celebrar su primer añito de vida
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.1, duration: 1 }}
               style={{ transform: "translateZ(70px)" }}
               className="w-full"
            >
              <Countdown />
            </motion.div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
