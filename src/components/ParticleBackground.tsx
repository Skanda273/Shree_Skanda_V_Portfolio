import React from 'react';

/**
 * Ambient Canvas Background
 * Renders smooth radial gradient glow orbs matching:
 * - Image 1 in Light Mode: Soft peach/warm orange glow sphere behind DEV pill container
 * - Image 2 in Dark Mode: Deep cosmic purple & cyan radial glow sphere behind DEV pill container
 */
export const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Light Mode Glow (Matching Image 1 1:1) */}
      <div className="dark:hidden">
        {/* Soft Warm Peach/Orange Glow Circle directly behind DEV Pill Visual */}
        <div 
          className="absolute top-1/3 right-[10%] w-[550px] h-[550px] rounded-full opacity-80 blur-[100px] transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.35) 0%, rgba(254, 215, 170, 0.3) 45%, rgba(250, 247, 242, 0) 75%)',
          }}
        />
        <div 
          className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full opacity-40 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(253, 186, 116, 0.25) 0%, rgba(250, 247, 242, 0) 70%)',
          }}
        />
      </div>

      {/* Dark Mode Glow (Matching Image 2 1:1) */}
      <div className="hidden dark:block">
        {/* Large Purple & Cyan Radial Sphere behind DEV Pill Visual */}
        <div 
          className="absolute top-1/3 right-[8%] w-[600px] h-[600px] rounded-full opacity-70 blur-[130px] transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, rgba(59, 130, 246, 0.3) 45%, rgba(10, 13, 26, 0) 75%)',
          }}
        />

        {/* Top Left Cyan Glow */}
        <div 
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-50 blur-[110px]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(10, 13, 26, 0) 70%)',
          }}
        />
      </div>

    </div>
  );
};
