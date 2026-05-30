import { MessageCircle, CheckCircle, X, CalendarPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { config } from '../config';

export function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (phone: string, name: string) => {
    const text = encodeURIComponent(`¡Hola ${name}! Estaremos felices de acompañarlos en la primera vuelta al sol. 🌿`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const addToCalendar = () => {
    const title = encodeURIComponent('Primer Añito de Andrew');
    const details = encodeURIComponent('Te esperamos para celebrar la primera vuelta al sol de nuestro príncipe Andrew.');
    const location = encodeURIComponent('Por confirmar');
    const dates = '20260614T160000/20260614T200000'; // 14 de Junio de 16:00 a 20:00 (Hora local)
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } }}
            transition={{ duration: 0.3, type: "spring", stiffness: 250, damping: 20, staggerChildren: 0.1 }}
            className="flex flex-col gap-3 items-end mb-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsApp(config.whatsappAndrea, 'Andrea')}
              className="pointer-events-auto bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white p-3 md:px-5 md:py-3.5 rounded-[24px] shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 md:gap-3 border border-white/40 group relative overflow-hidden min-h-[48px] md:h-auto"
              title="WhatsApp Andrea"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-semibold text-sm relative z-10 pr-1 md:pr-0">Mamá</span>
              <MessageCircle className="w-5 h-5 md:w-5 md:h-5 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsApp(config.whatsappFranklin, 'Franklin')}
              className="pointer-events-auto bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white p-3 md:px-5 md:py-3.5 rounded-[24px] shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 md:gap-3 border border-white/40 group relative overflow-hidden min-h-[48px] md:h-auto"
              title="WhatsApp Franklin"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-semibold text-sm relative z-10 pr-1 md:pr-0">Papá</span>
              <MessageCircle className="w-5 h-5 md:w-5 md:h-5 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(config.confirmacionUrl, '_blank')}
              className="pointer-events-auto bg-gradient-to-r from-[var(--color-theme-accent)] to-[var(--color-theme-accent-light)] text-white p-3 md:px-5 md:py-3.5 rounded-[24px] shadow-[0_10px_25px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2 md:gap-3 border border-white/40 group relative overflow-hidden min-h-[48px] md:h-auto"
              title="Confirmar Asistencia"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-semibold text-sm relative z-10 pr-1 md:pr-0">Confirmar</span>
              <CheckCircle className="w-5 h-5 md:w-5 md:h-5 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addToCalendar}
              className="pointer-events-auto bg-gradient-to-r from-[#DB4437] to-[#C1352A] text-white p-3 md:px-5 md:py-3.5 rounded-[24px] shadow-[0_10px_25px_rgba(219,68,55,0.4)] flex items-center justify-center gap-2 md:gap-3 border border-white/40 group relative overflow-hidden min-h-[48px] md:h-auto"
              title="Agregar al Calendario"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-semibold text-sm relative z-10 pr-1 md:pr-0">Agendar</span>
              <CalendarPlus className="w-5 h-5 md:w-5 md:h-5 relative z-10" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className="pointer-events-auto bg-gradient-to-tr from-[var(--color-theme-accent)] to-[var(--color-theme-accent-light)] text-white shadow-[0_10px_30px_rgba(56,189,248,0.5)] flex items-center justify-center border-[2px] border-white/60 relative overflow-hidden h-14 w-14 md:h-16 md:w-16 rounded-full outline-none focus:outline-none"
        title="Opciones de Contacto"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF6B6B] rounded-full border-[2px] border-white z-20 animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
