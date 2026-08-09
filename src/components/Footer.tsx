import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { ArrowUp, Sparkles, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-10 border-t border-stone-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center text-center space-y-6">

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="p-3 rounded-full bg-white border border-stone-200/90 text-stone-600 hover:text-[#F58220] hover:border-orange-300 hover:shadow-md transition-all hover:scale-110 shadow-sm">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="p-3 rounded-full bg-white border border-stone-200/90 text-stone-600 hover:text-[#F58220] hover:border-orange-300 hover:shadow-md transition-all hover:scale-110 shadow-sm">
            <Github className="w-5 h-5" />
          </a>
          <a href={personalDetails.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="p-3 rounded-full bg-white border border-stone-200/90 text-stone-600 hover:text-[#F58220] hover:border-orange-300 hover:shadow-md transition-all hover:scale-110 shadow-sm">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={personalDetails.socials.twitter || '#'} target="_blank" rel="noopener noreferrer" aria-label="X"
            className="p-3 rounded-full bg-white border border-stone-200/90 text-stone-600 hover:text-[#F58220] hover:border-orange-300 hover:shadow-md transition-all hover:scale-110 shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {personalDetails.socials.aurora && (
            <a href={personalDetails.socials.aurora} target="_blank" rel="noopener noreferrer" aria-label="Aurora" title="Aurora Publishing Platform"
              className="p-3 rounded-full bg-orange-50 border border-orange-200 text-orange-600 hover:bg-orange-100 hover:shadow-md transition-all hover:scale-110 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </a>
          )}
          <a href={`https://mail.google.com/mail/?view=cm&to=${personalDetails.socials.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email"
            className="p-3 rounded-full bg-white border border-stone-200/90 text-stone-600 hover:text-[#F58220] hover:border-orange-300 hover:shadow-md transition-all hover:scale-110 shadow-sm">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-stone-500 font-medium tracking-wide">
          © {new Date().getFullYear()} <span className="font-bold text-stone-700">{personalDetails.name}</span>. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-stone-200 hover:border-orange-300 text-xs font-bold text-stone-600 hover:text-[#F58220] transition-all shadow-sm"
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
