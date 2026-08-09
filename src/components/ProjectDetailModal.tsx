import React from 'react';
import { X, ExternalLink, Github, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl space-y-6 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-100 border border-orange-200 text-[#F58220]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-stone-900">{project.title}</h3>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{project.category}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          
          {/* Project Banner Image */}
          {project.image && (
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-400">Overview</h4>
            <p className="text-stone-700 text-sm leading-relaxed font-medium">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-400">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-stone-100 flex flex-wrap items-center justify-end gap-3 bg-stone-50/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:text-orange-600 font-bold text-xs shadow-sm hover:shadow-md transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F58220] hover:bg-orange-600 text-white font-bold text-xs shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Live Application</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
