import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  const duration = 4000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#F6C153', '#E38E55', '#C4E0E8', '#E67B65', '#87C4C9']
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#F6C153', '#E38E55', '#C4E0E8', '#E67B65', '#87C4C9']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

export const ConfettiManager = () => {
  useEffect(() => {
    let triggered = false;

    const handleScroll = () => {
      // Trigger confetti when user scrolls down 30% of the page
      const scrollPos = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (!triggered && scrollPos > scrollHeight * 0.3) {
        triggered = true;
        fireConfetti();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};
