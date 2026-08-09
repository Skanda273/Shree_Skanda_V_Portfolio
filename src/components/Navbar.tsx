import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#about', id: 'about' },
    { name: 'About', href: '#about', id: 'about-section' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 250;
      const sections = ['about', 'skills', 'projects', 'resume', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? (isDark ? 'bg-[#0A0D1A]/95 border-b border-slate-800/80 shadow-md backdrop-blur-md' : 'bg-[#FAF7F2]/95 border-b border-stone-200/60 shadow-sm backdrop-blur-md')
        : (isDark ? 'bg-[#0A0D1A]/80 backdrop-blur-md' : 'bg-[#FAF7F2]/90 backdrop-blur-md')
    }`}>
      <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#about" className={`text-2xl font-black tracking-tight flex items-center ${
          isDark ? 'text-white' : 'text-stone-900'
        }`}>
          <span>Shree Skanda</span>
          <span className={`ml-1 ${isDark ? 'text-[#00D2FF]' : 'text-[#F58220]'}`}>V</span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.name === 'Home' && activeSection === 'about');

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive 
                    ? (isDark ? 'text-white font-bold' : 'text-stone-900 font-bold') 
                    : (isDark ? 'text-slate-300 hover:text-[#00D2FF]' : 'text-stone-600 hover:text-[#F58220]')
                }`}
              >
                {link.name}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full animate-in fade-in ${
                    isDark ? 'bg-[#00D2FF]' : 'bg-[#F58220]'
                  }`} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-sm ${
              isDark 
                ? 'border-slate-700 bg-slate-900/90 text-amber-400 hover:border-cyan-400' 
                : 'border-stone-200 bg-white text-stone-600 hover:text-[#F58220] hover:border-orange-300'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>
        </div>

      </div>
    </header>
  );
};
