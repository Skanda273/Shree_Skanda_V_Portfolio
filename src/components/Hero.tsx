import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, isDark }) => {
  return (
    <section id="about" className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Main Headlines */}
            <div className="space-y-3">
              <h3 className={`text-xl sm:text-2xl font-semibold tracking-wide ${
                isDark ? 'text-slate-300' : 'text-stone-600'
              }`}>
                Hello, world! I am
              </h3>

              {/* Name Headline:
                  - Light Mode (Image 1): Solid Warm Orange (#F58220)
                  - Dark Mode (Image 2): Cyan to Purple Gradient (from-[#00D2FF] via-[#3B82F6] to-[#A855F7])
              */}
              {isDark ? (
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent">
                  {personalDetails.name}
                </h1>
              ) : (
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-[#F58220]">
                  {personalDetails.name}
                </h1>
              )}

              {/* Role Title:
                  - Light Mode (Image 1): Solid Warm Orange (#F58220)
                  - Dark Mode (Image 2): Electric Cyan (#00D2FF)
              */}
              <div className="flex items-center gap-1.5 pt-1">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  isDark ? 'text-[#00D2FF]' : 'text-[#F58220]'
                }`}>
                  {personalDetails.title}
                </h2>
                <span className={`w-1.5 h-9 animate-pulse rounded-full inline-block ml-1 ${
                  isDark ? 'bg-[#00D2FF]' : 'bg-[#F58220]'
                }`} />
              </div>
            </div>

            {/* Paragraph Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-medium ${
              isDark ? 'text-slate-300' : 'text-stone-600'
            }`}>
              {personalDetails.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* View Projects Button */}
              {isDark ? (
                <a
                  href="#projects"
                  className="px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#00C6FF] to-[#8A2387] hover:from-[#00B4EC] hover:to-[#7B1FA2] text-white shadow-lg shadow-purple-500/25"
                >
                  View Projects
                </a>
              ) : (
                <a
                  href="#projects"
                  className="px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 bg-[#F58220] hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                >
                  View Projects
                </a>
              )}

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className={`px-8 py-3.5 rounded-full font-bold text-sm shadow-sm transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-[#111827]/80 border border-slate-700 text-slate-100 hover:border-[#00D2FF] hover:text-white' 
                    : 'bg-white border border-stone-300 text-stone-900 hover:border-[#F58220]'
                }`}
              >
                Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Github, href: personalDetails.socials.github, label: 'GitHub' },
                { icon: Linkedin, href: personalDetails.socials.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: personalDetails.socials.instagram, label: 'Instagram' },
                { icon: Mail, href: `https://mail.google.com/mail/?view=cm&to=${personalDetails.socials.email}`, label: 'Email' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className={`w-11 h-11 rounded-full border shadow-sm flex items-center justify-center transition-all hover:scale-110 ${
                    isDark 
                      ? 'bg-[#111827]/80 border-slate-800 text-slate-300 hover:text-[#00D2FF] hover:border-[#00D2FF]' 
                      : 'bg-white border-stone-200 text-stone-600 hover:text-[#F58220] hover:border-orange-300'
                  }`}
                >
                  <soc.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Stack (Matching 1:1 Image 1 in Light Mode & Image 2 in Dark Mode) */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Central DEV Oval Container */}
              <div className={`relative w-full h-44 rounded-full shadow-xl flex items-center justify-center overflow-hidden backdrop-blur-md border ${
                isDark 
                  ? 'bg-[#161F33]/85 border-slate-700/70 shadow-2xl' 
                  : 'bg-[#FFF5EA] border-amber-100/80 shadow-md'
              }`}>
                
                {/* DEV Watermark Text */}
                {isDark ? (
                  <span className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-[#00D2FF] to-[#8A2387] bg-clip-text text-transparent tracking-widest select-none">
                    DEV
                  </span>
                ) : (
                  <span className="text-8xl sm:text-9xl font-black text-[#FDBA74]/80 tracking-widest select-none">
                    DEV
                  </span>
                )}
              </div>

              {/* Floating Badge 1 (Top Left Overlapping): Available for work */}
              <div className={`absolute top-8 left-4 z-20 px-5 py-2.5 rounded-2xl border shadow-md backdrop-blur-md flex items-center gap-2.5 ${
                isDark 
                  ? 'bg-[#111827]/95 border-slate-700/80 text-slate-100' 
                  : 'bg-white border-stone-200/80 text-stone-800'
              }`}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold">
                  {personalDetails.status || "Available for work"}
                </span>
              </div>

              {/* Floating Badge 2 (Bottom Right Overlapping): Fresher / OPEN TO WORK */}
              <div className={`absolute bottom-8 right-4 z-20 px-6 py-4 rounded-2xl border shadow-md backdrop-blur-md space-y-0.5 text-left ${
                isDark 
                  ? 'bg-[#111827]/95 border-slate-700/80' 
                  : 'bg-white border-stone-200/80'
              }`}>
                <div className={`text-lg font-black leading-snug ${
                  isDark ? 'text-[#A855F7]' : 'text-[#F58220]'
                }`}>
                  Fresher
                </div>
                <div className={`text-[10px] font-extrabold uppercase tracking-widest ${
                  isDark ? 'text-slate-400' : 'text-stone-400'
                }`}>
                  OPEN TO WORK
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="pt-8 pb-4 flex flex-col items-center justify-center space-y-2 relative z-10">
        <span className={`text-[10px] font-extrabold uppercase tracking-widest ${
          isDark ? 'text-slate-400' : 'text-stone-400'
        }`}>
          SCROLL DOWN
        </span>
        <a
          href="#skills"
          className={`w-9 h-9 rounded-full border shadow-sm flex items-center justify-center transition-colors ${
            isDark 
              ? 'bg-[#111827] border-slate-800 text-slate-300 hover:text-[#00D2FF]' 
              : 'bg-white border-stone-200 text-stone-600 hover:text-[#F58220]'
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
