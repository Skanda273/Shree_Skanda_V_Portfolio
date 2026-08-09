import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (skillName: string) => {
    setFailedImages((prev) => ({ ...prev, [skillName]: true }));
  };

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-xs font-bold text-orange-700 dark:text-orange-300">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-slate-100 tracking-tight">
            Skills & <span className="text-[#F58220]">Technologies</span>
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base max-w-2xl mx-auto font-medium">
            Core stack and tools listed on official resume for building modern full-stack web architectures.
          </p>
        </div>

        {/* Category Filters Pill Row */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#F58220] text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-white/80 dark:bg-slate-800/80 border border-stone-200/80 dark:border-slate-700 text-stone-700 dark:text-slate-300 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {filteredSkills.map((skill: SkillItem, index: number) => {
            const hasFailed = failedImages[skill.name];

            return (
              <div
                key={skill.name + '-' + index}
                className="group relative bg-white/90 dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/80 p-4 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:-translate-y-1.5 hover:border-orange-300 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer min-h-[110px] overflow-hidden"
              >
                {/* Logo Container */}
                <div className="relative w-10 h-10 flex items-center justify-center p-1.5 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700 group-hover:bg-orange-50 dark:group-hover:bg-slate-800 group-hover:border-orange-200 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {!hasFailed ? (
                    <img
                      src={skill.iconUrl}
                      alt={`${skill.name} logo`}
                      onError={() => handleImageError(skill.name)}
                      className={`w-full h-full object-contain transition-all ${
                        skill.isDarkIcon
                          ? 'invert contrast-200 dark:invert-0'
                          : ''
                      }`}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-bold font-mono text-xs text-white rounded-lg"
                      style={{ backgroundColor: skill.fallbackColor || '#F58220' }}
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Skill Name */}
                <span className="font-bold text-xs text-stone-700 dark:text-slate-200 group-hover:text-[#F58220] transition-colors tracking-wide">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
