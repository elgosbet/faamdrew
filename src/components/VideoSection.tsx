import { motion } from 'motion/react';

export function VideoSection() {
  return (
    <section className="relative px-6 py-12 md:py-24 z-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 overflow-hidden relative group">
          <div className="aspect-video overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            {/* 
                We use an HTML5 video tag here. 
                autoPlay, muted, loop, playsInline for standard background/intro behavior 
                Or simply controls if you want them to play it manually.
            */}
            <video 
              controls 
              playsInline 
              className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem]"
              src="/video/video_1.mp4" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
