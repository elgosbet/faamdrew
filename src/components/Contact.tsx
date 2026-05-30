import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { config } from '../config';

export function Contact() {
  const openWhatsApp = (phone: string, name: string) => {
    const text = encodeURIComponent(`¡Hola ${name}! Estaremos felices de acompañarlos en la primera vuelta al sol. 🌿`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative z-10 py-16 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-12 text-center bg-white/40 backdrop-blur-xl rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white/60 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-theme-accent-light)] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-theme-mint)] opacity-30 blur-3xl"></div>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-theme-text)] mb-8 relative z-10">
          ¿Tienes alguna duda? Escríbenos
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4 relative z-10">
          <button
            onClick={() => openWhatsApp(config.whatsappFranklin, 'Franklin')}
            className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white text-[14px] font-semibold py-4 px-6 rounded-[16px] flex items-center justify-center gap-3 decoration-none shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-transform hover:scale-105 active:scale-95 border border-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WA Papá</span>
          </button>

          <button
            onClick={() => openWhatsApp(config.whatsappAndrea, 'Andrea')}
            className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white text-[14px] font-semibold py-4 px-6 rounded-[16px] flex items-center justify-center gap-3 decoration-none shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-transform hover:scale-105 active:scale-95 border border-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WA Mamá</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
