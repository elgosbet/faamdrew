import { motion } from 'motion/react';
import { Camera, PlayCircle } from 'lucide-react';
import { config } from '../config';
import { TiltCard } from './TiltCard';

export function Gallery() {
  const placeholders = [
    { id: 1, delay: 0.1, color: 'bg-rose-100', emoji: '🧸' },
    { id: 2, delay: 0.2, color: 'bg-yellow-100', emoji: '✨' },
    { id: 3, delay: 0.3, color: 'bg-purple-100', emoji: '🪁' },
    { id: 4, delay: 0.4, color: 'bg-mint-100/50', emoji: '🍃' }
  ];

  return (
    <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-theme-text)] mb-4 inline-flex items-center gap-3">
          <Camera className="w-8 h-8 text-[var(--color-theme-accent)]" />
          Mis Primeros Momentos
        </h2>
        <p className="text-[var(--color-theme-text)] opacity-70 mb-4">Video y galería de recuerdos</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 w-full max-w-3xl mx-auto"
      >
        <TiltCard>
          <div 
            className="w-full aspect-video rounded-[24px] bg-white bg-opacity-70 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[4px] border-white relative cursor-pointer group transition-transform overflow-hidden"
            onClick={() => window.open(config.videoUrl, '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-theme-accent-light)] to-[var(--color-theme-mint)] opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center gap-4 relative z-10 p-6 text-center" style={{ transform: "translateZ(50px)" }}>
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-10 h-10 text-[var(--color-theme-accent)]" />
              </div>
              <span className="text-[var(--color-theme-text)] font-semibold tracking-wide text-lg drop-shadow-sm">Reproducir Video Especial</span>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {placeholders.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item.delay }}
            className="w-full"
          >
            <TiltCard>
              <div
                className={`aspect-square w-full rounded-[16px] bg-white bg-opacity-80 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-[3px] border-white overflow-hidden relative group cursor-pointer`}
                onClick={() => window.open(config.fotosUrl, '_blank')}
              >
                {/* Visual element representing a photo placeholder */}
                <span className="text-5xl group-hover:scale-110 transition-transform duration-500 text-[var(--color-theme-accent)]" style={{ transform: "translateZ(30px)" }}>{item.emoji}</span>
                <div className="absolute inset-0 bg-[var(--color-theme-accent-light)] opacity-0 group-hover:opacity-20 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

