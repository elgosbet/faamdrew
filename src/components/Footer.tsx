import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 text-center mt-10">
      <div className="max-w-xl mx-auto space-y-4">
        <p className="text-[var(--color-theme-text)] font-sans italic text-[13px] opacity-70 leading-relaxed">
          "Gracias por ser parte de nuestra primera vuelta al sol. Los esperamos para compartir juntos este día tan especial."
        </p>
        
        <div className="border-t border-[var(--color-theme-text)]/20 pt-6 mt-8 flex flex-col items-center gap-3">
          <p className="text-[var(--color-theme-text)] font-sans text-[13px] font-medium opacity-80">
            Desarrollado por <span className="font-bold">@mjmc</span>
          </p>
          <a 
            href="https://wa.me/51944283432" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-full text-[13px] font-semibold hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contáctame en WhatsApp: 944 283 432</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
