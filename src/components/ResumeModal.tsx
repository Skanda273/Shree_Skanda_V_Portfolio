import React from 'react';
import { X, Download, Printer, Sparkles, CheckCircle2, Briefcase, Award } from 'lucide-react';
import { personalDetails, skillCategories, experienceData, achievementsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  // Flatten all skills from categories
  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl my-8">

        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-b border-stone-200 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-orange-100 border border-orange-200 text-orange-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-extrabold text-stone-900">Curriculum Vitae / Resume</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-orange-50 border border-stone-200 hover:border-orange-300 text-xs font-bold text-stone-700 hover:text-orange-700 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 border border-stone-200 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto font-sans">

          {/* Resume Header */}
          <div className="border-b border-stone-200 pb-6 space-y-3">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                  {personalDetails.name}
                </h1>
                <p className="text-lg font-bold text-[#F58220]">
                  {personalDetails.title}
                </p>
              </div>

              <div className="text-xs text-stone-600 space-y-1 sm:text-right font-mono">
                <div>{personalDetails.socials.email}</div>
                {personalDetails.socials.phone && <div>{personalDetails.socials.phone}</div>}
                <div>{personalDetails.location}</div>
                <div className="text-orange-600 font-semibold">{personalDetails.socials.github}</div>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed pt-2 font-medium">
              {personalDetails.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-widest font-extrabold text-stone-500 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Technical Skills & Tools
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {allSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-bold text-stone-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest font-extrabold text-stone-500 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Briefcase className="w-4 h-4 text-orange-500" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-extrabold text-stone-900 text-base">
                      {exp.role} <span className="text-[#F58220] font-semibold">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-stone-500">{exp.period} | {exp.location}</span>
                  </div>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-stone-600 font-medium">
                    {exp.keyPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-extrabold text-stone-500 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Award className="w-4 h-4 text-orange-500" />
              Honors & Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((item) => (
                <div key={item.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                  <div className="font-extrabold text-stone-900">{item.title}</div>
                  <div className="text-orange-600 font-semibold">{item.issuer} • {item.date}</div>
                  <div className="text-stone-500">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
