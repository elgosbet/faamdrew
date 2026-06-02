import { motion, AnimatePresence } from 'motion/react';
import { Camera, PlayCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { config } from '../config';
import { TiltCard } from './TiltCard';
import React, { useState, useRef, useEffect } from 'react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftValue = useRef(0);

  const photoFiles = [
    'Foto001.png',
    'Foto002.jpg',
    'Foto003.jpg',
    'Foto004.jpg',
    'Foto005.jpg',
    'Foto006.jpg',
    'Foto007.jpg',
    'Foto008.jpg',
    'Foto009.jpg',
    'Foto009_1.jpg',
    'Foto010.jpg',
    'Foto011.jpg',
    'Foto012.jpg'
  ];

  const photos = photoFiles.map((filename, i) => ({
    id: i + 1,
    url: `/imagenes/${filename}`,
    title: `Recuerdo ${i + 1}`
  }));

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      startX.current = e.pageX - carouselRef.current.offsetLeft;
      scrollLeftValue.current = carouselRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // Scroll-fast
      carouselRef.current.scrollLeft = scrollLeftValue.current - walk;
    }
  };

  return (
    <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
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
        <p className="text-[var(--color-theme-text)] opacity-70 mb-4">Mis recuerdos más bonitos</p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 w-full max-w-3xl mx-auto"
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

      {/* Photos Carousel */}
      <div 
        className="relative w-full pb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <h3 className="text-xl md:text-2xl font-serif text-[var(--color-theme-text)] mb-6 text-center">Galería de Fotos</h3>
        <p className="text-sm md:text-base text-[var(--color-theme-text)] opacity-70 text-center mb-8">
          Usa las flechas, desliza para ver más o pasa el mouse para ampliar
        </p>

        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeftBtn}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-white/80 p-3 rounded-full shadow-lg text-[var(--color-theme-accent)] hover:bg-white hover:scale-110 transition-all hidden md:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={scrollRightBtn}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white/80 p-3 rounded-full shadow-lg text-[var(--color-theme-accent)] hover:bg-white hover:scale-110 transition-all hidden md:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={`flex overflow-x-auto gap-6 pb-12 hide-scrollbar p-4 cursor-grab active:cursor-grabbing ${isDragging ? '' : 'snap-x snap-mandatory'}`}
          style={{ scrollbarWidth: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-center relative shrink-0"
            >
              <motion.div 
                className="w-64 h-80 md:w-72 md:h-96 rounded-2xl md:rounded-[32px] bg-white/50 border-4 border-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer group relative z-0"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: i % 2 === 0 ? 3 : -3, 
                  zIndex: 30,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(photo.url)}
              >
                {/* 
                  Fallback background if image misses 
                  Also handles the hover scaling ("pasar con el mause se pueda ver en grande")
                */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-theme-accent-light)] to-[var(--color-theme-mint)] opacity-10"></div>
                
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  onError={(e) => {
                    // Fallback visual if images aren't uploaded yet
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    if (target.parentElement) {
                       target.parentElement.innerHTML += `<div class="text-[var(--color-theme-text)] opacity-50 px-4 text-center font-medium">Sube ${photo.url}</div>`;
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Vista previa" 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain border-4 border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

