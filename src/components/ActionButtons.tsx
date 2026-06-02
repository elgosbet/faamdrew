import { Gift, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { config } from '../config';

export function ActionButtons() {
  return (
    <section className="relative z-10 pb-16 px-6 max-w-2xl mx-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
      <motion.a
        href={config.confirmacionUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-theme-accent)] to-[var(--color-theme-accent-light)] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 rounded-full"></div>
        <motion.div 
          className="relative bg-gradient-to-br from-[var(--color-theme-accent-light)] to-[var(--color-theme-accent)] text-white shadow-[0_10px_20px_rgba(227,142,85,0.3)] font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-3 text-[15px] border border-white/40 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 0.5 } }}
          whileTap={{ scale: 0.9 }}
        >
          <CheckCircle className="w-5 h-5" />
          <span>Confirmar Asistencia</span>
        </motion.div>
      </motion.a>

      <motion.a
        href={config.regalosUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="group relative w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-white/50 blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-full"></div>
        <div className="relative bg-white/90 backdrop-blur-md text-[var(--color-theme-accent)] border-[2px] border-[var(--color-theme-accent)] shadow-[0_10px_20px_rgba(0,0,0,0.05)] font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 text-[15px]">
          <Gift className="w-5 h-5" />
          <span>Ver Lista de Regalos</span>
        </div>
      </motion.a>
    </section>
  );
}
