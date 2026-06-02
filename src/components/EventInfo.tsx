import { Heart, MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

export function EventInfo() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="bg-transparent text-center w-full">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-[var(--color-theme-text)] mb-2"
            >
              acompáñanos a su primer cumpleaños
            </motion.h2>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="my-12 flex justify-center items-center gap-4 text-4xl md:text-6xl font-serif font-bold text-[var(--color-theme-accent)]"
            >
               <span>junio</span>
               <span className="text-[var(--color-theme-gold)] font-light">|</span>
               <span>14</span>
               <span className="text-[var(--color-theme-gold)] font-light">|</span>
               <span>4pm</span>
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl text-[var(--color-theme-text)] mb-6 opacity-90"
            >
              Av. Campo verde lt9 Lurigancho
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[18px] md:text-[20px] font-sans font-semibold text-[var(--color-theme-text)] opacity-80 mb-8"
            >
               Nos encantará verte ahí. Toca el botón de abajo para llegar sin problemas.
            </motion.p>
              
            <motion.a 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               href="https://maps.app.goo.gl/eVbjtNcxeVNTkAz76?g_st=aw" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-[var(--color-theme-gold)] text-white px-8 py-3.5 rounded-full font-serif font-bold shadow-md hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 text-lg"
            >
               <Navigation className="w-5 h-5" fill="currentColor" />
               ubicación
            </motion.a>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-[var(--color-theme-text)] max-w-lg mx-auto"
            >
              <h3 className="text-sm uppercase tracking-[2px] font-bold text-[var(--color-theme-gold)] mb-2">Con Mucho Amor</h3>
              <p className="text-xl font-serif">Mis Papás, Franklin y Andrea</p>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
