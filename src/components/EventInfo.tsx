import { CalendarDays, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

export function EventInfo() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <TiltCard>
          <div className="bg-white/70 backdrop-blur-[20px] rounded-[32px] p-8 md:p-10 border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.1)] text-center w-full">
            <Heart className="w-10 h-10 text-[var(--color-theme-accent)] mx-auto mb-6" style={{ transform: "translateZ(50px)" }} />
            
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-theme-text)] mb-4" style={{ transform: "translateZ(40px)" }}>
              Con mucho amor
            </h2>
            
            <p className="text-[var(--color-theme-text)] opacity-80 mb-12 text-lg" style={{ transform: "translateZ(30px)" }}>
              Te esperamos para compartir juntos este momento tan especial.
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12" style={{ transform: "translateZ(60px)" }}>
              {/* Date & Time */}
              <div className="text-center bg-white/60 p-6 rounded-3xl shadow-sm border border-white/80">
                <h3 className="text-[11px] uppercase tracking-[1.5px] mb-2 text-[var(--color-theme-gold)] font-bold">Día del Evento</h3>
                <p className="text-[18px] font-semibold text-[var(--color-theme-text)]">14 de Junio</p>
                <p className="text-[14px] font-normal opacity-70 text-[var(--color-theme-text)] mt-1">4:00 p.m.</p>
              </div>

              {/* Parents */}
              <div className="text-center bg-white/60 p-6 rounded-3xl shadow-sm border border-white/80">
                <h3 className="text-[11px] uppercase tracking-[1.5px] mb-2 text-[var(--color-theme-gold)] font-bold">Mis Papás</h3>
                <p className="text-[18px] font-semibold text-[var(--color-theme-text)]">Franklin y Andrea</p>
                <p className="text-[14px] font-normal opacity-70 text-[var(--color-theme-text)] mt-1">Con Cariño</p>
              </div>
            </div>

            <div className="mt-12 text-[var(--color-theme-text)] opacity-70 italic max-w-lg mx-auto text-[14px]" style={{ transform: "translateZ(40px)" }}>
              "Gracias por formar parte de nuestra alegría y acompañarnos a celebrar la vida de nuestro pequeño príncipe Andrew."
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
