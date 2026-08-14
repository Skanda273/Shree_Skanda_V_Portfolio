import React, { useState } from 'react';
import { Sparkles, ExternalLink, Github, FolderGit2, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI & Data' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-xs font-bold text-orange-700 dark:text-orange-300">
            <FolderGit2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-slate-100 tracking-tight">
            Featured <span className="text-[#F58220]">Projects</span>
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base max-w-2xl mx-auto font-medium">
            Explore my flagship applications featured on my resume: Machine Learning Fraud Detection and Java Spring Boot Parking Slot Manager.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/80 rounded-3xl overflow-hidden hover:border-orange-300 dark:hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-stone-100 dark:bg-slate-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                    <FolderGit2 className="w-12 h-12 text-orange-300" />
                  </div>
                )}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-stone-200/80 dark:border-slate-700 text-[10px] uppercase font-bold text-orange-600 dark:text-orange-400 shadow-sm">
                  {project.category}
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400/90 backdrop-blur-md text-[10px] uppercase font-bold text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-slate-100 group-hover:text-[#F58220] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 dark:bg-slate-900 text-orange-700 dark:text-orange-300 border border-orange-200/60 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-100 dark:bg-slate-900 text-stone-500 dark:text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-slate-700/60">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#F58220] hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-600 dark:text-slate-300 hover:text-orange-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-orange-600 dark:text-orange-400 hover:bg-orange-100 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
