import { motion } from 'motion/react';
import { Countdown } from './Countdown';
import { TiltCard } from './TiltCard';

const CuteSunSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 5L53.5 15L64 12L64.5 22.5L74.5 23.5L71 33.5L79.5 38L73 46.5L79.5 55L71 59.5L74.5 69.5L64.5 70.5L64 81L53.5 78L50 88L46.5 78L36 81L35.5 70.5L25.5 69.5L29 59.5L20.5 55L27 46.5L20.5 38L29 33.5L25.5 23.5L35.5 22.5L36 12L46.5 15L50 5Z" fill="#F4C773" stroke="#F1AD41" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="50" cy="46.5" r="22" fill="#F8BC5C"/>
    <circle cx="43" cy="44" r="3" fill="#6A6865"/>
    <circle cx="57" cy="44" r="3" fill="#6A6865"/>
    <path d="M46 51Q50 55 54 51" stroke="#6A6865" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="37" cy="48" r="4" fill="#E38E55" opacity="0.5"/>
    <circle cx="63" cy="48" r="4" fill="#E38E55" opacity="0.5"/>
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
          <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 relative overflow-hidden flex flex-col items-center w-full">
            
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

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              style={{ transform: "translateZ(80px)" }}
              className="mb-2"
            >
              <img 
                src="/imagenes/fot_1.jpg" 
                alt="Andrew" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white mx-auto" 
              />
            </motion.div>

            {/* Large "UNO" with cute sun as O */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", bounce: 0.6, duration: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 cursor-default"
              style={{ transform: "translateZ(100px)" }}
            >
              <motion.span 
                whileHover={{ y: -10, rotate: -5, color: 'var(--color-theme-gold)' }}
                className="font-serif text-[80px] sm:text-[100px] md:text-[140px] font-bold text-[var(--color-theme-accent)] leading-none pt-4 transition-colors"
              >
                U
              </motion.span>
              <motion.span 
                whileHover={{ y: -10, rotate: 5, color: 'var(--color-theme-gold)' }}
                className="font-serif text-[80px] sm:text-[100px] md:text-[140px] font-bold text-[var(--color-theme-accent)] leading-none pt-4 transition-colors"
              >
                N
              </motion.span>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CuteSunSVG className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] -mt-2 animate-[spin_20s_linear_infinite]" />
              </motion.div>
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
