import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white border border-stone-200 text-[#F58220] hover:bg-orange-50 hover:border-orange-400 shadow-xl shadow-orange-500/15 hover:shadow-orange-500/30 hover:scale-110 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
    >
      <ArrowUp className="w-5 h-5 text-[#F58220]" />
    </button>
  );
};
