import { motion } from 'motion/react';
import { Countdown } from './Countdown';
import { TiltCard } from './TiltCard';

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
          <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/80 relative overflow-hidden flex flex-col items-center gap-4 w-full">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[var(--color-theme-accent)] font-semibold tracking-[1px] text-sm md:text-base uppercase mb-2"
              style={{ transform: "translateZ(60px)" }}
            >
              Andrew cumple su primer añito
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-5xl md:text-[72px] font-bold text-[var(--color-theme-hero-title)] leading-[0.9]"
              style={{ transform: "translateZ(80px)" }}
            >
              Mi Primera <br />
              Vuelta al Sol
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="my-4 flex justify-center"
              style={{ transform: "translateZ(100px)" }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative">
                 <span className="text-6xl md:text-7xl drop-shadow-lg opacity-90 relative z-10">🪁</span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-[20px] font-light italic opacity-80 text-[var(--color-theme-text)] max-w-md mx-auto"
              style={{ transform: "translateZ(60px)" }}
            >
              Te invitamos a celebrar el primer añito de nuestro príncipe Andrew
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.1, duration: 1 }}
               style={{ transform: "translateZ(70px)" }}
            >
              <Countdown />
            </motion.div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
