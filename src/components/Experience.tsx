import React from 'react';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-xs font-bold text-orange-700 dark:text-orange-300">
            <Briefcase className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-slate-100 tracking-tight">
            Work & <span className="text-[#F58220]">Internships</span>
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base max-w-2xl mx-auto font-medium">
            Professional software development experience, internships, and production delivery history.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-orange-200/80 dark:border-orange-900/60 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-orange-500 flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="bg-white/90 dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 hover:border-orange-300 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-slate-100 group-hover:text-[#F58220] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-stone-600 dark:text-slate-400 mt-1">
                      <span className="text-[#F58220]">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-orange-50 dark:bg-slate-900 border border-orange-200 dark:border-slate-700 text-xs font-bold text-orange-700 dark:text-orange-400 shadow-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                    {exp.period}
                  </span>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 pt-2 text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {exp.keyPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Pills */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-slate-700">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-[10px] font-bold bg-stone-100 dark:bg-slate-900 text-stone-700 dark:text-slate-300 border border-stone-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
