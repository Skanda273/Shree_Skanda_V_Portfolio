import React from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Shree_Skanda_V_ISE_CEC.pdf';
    link.download = 'Shree_Skanda_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative z-10 bg-white/40 dark:bg-slate-900/40">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#F58220]">
            MY JOURNEY & EXPERIENCE
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-slate-100 tracking-tight">
            Resume
          </h2>

          <div className="flex justify-center">
            <span className="w-16 h-1 bg-[#F58220] rounded-full inline-block" />
          </div>
        </div>

        {/* Download Full CV Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#F58220] hover:bg-orange-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Full CV</span>
          </button>
        </div>

        {/* Two-Column Grid: Work Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-stone-200/80 dark:border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-orange-100/80 dark:bg-orange-950/50 text-[#F58220]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-stone-900 dark:text-slate-100">Work Experience</h3>
            </div>

            <div className="space-y-8 pl-2">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-orange-200/80 dark:border-orange-900/60 space-y-1.5">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#F58220]" />
                  
                  <span className="text-xs font-extrabold text-[#F58220] block uppercase tracking-wider">
                    {exp.period}
                  </span>

                  <h4 className="text-lg font-black text-stone-900 dark:text-slate-100">
                    {exp.role}
                  </h4>

                  <div className="text-xs font-bold text-stone-600 dark:text-slate-400">
                    {exp.company} • {exp.location}
                  </div>

                  <p className="text-stone-600 dark:text-slate-300 text-xs leading-relaxed pt-1 font-medium">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-stone-200/80 dark:border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-orange-100/80 dark:bg-orange-950/50 text-[#F58220]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-stone-900 dark:text-slate-100">Education</h3>
            </div>

            <div className="space-y-8 pl-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-6 border-l-2 border-orange-200/80 dark:border-orange-900/60 space-y-1.5">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#F58220]" />
                  
                  <span className="text-xs font-extrabold text-[#F58220] block uppercase tracking-wider">
                    {edu.period}
                  </span>

                  <h4 className="text-lg font-black text-stone-900 dark:text-slate-100">
                    {edu.degree}
                  </h4>

                  <div className="text-xs font-bold text-stone-600 dark:text-slate-400">
                    {edu.institution}
                  </div>

                  <p className="text-stone-600 dark:text-slate-300 text-xs leading-relaxed pt-1 font-medium">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
