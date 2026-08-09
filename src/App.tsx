import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/ResumeSection';
import { Volunteering } from './components/Volunteering';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { ProjectItem } from './types';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Shree_Skanda_V_ISE_CEC.pdf';
    link.download = 'Shree_Skanda_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 font-sans ${
      isDark ? 'bg-[#0A0D1A] text-slate-100 selection:bg-cyan-500/40 selection:text-cyan-200' : 'bg-[#FAF7F2] text-stone-900 selection:bg-orange-500/30 selection:text-orange-900'
    }`}>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Canvas */}
      <ParticleBackground />

      {/* Main Page Content */}
      <div className="relative z-10">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

        <main>
          <Hero onOpenResume={handleDownloadCV} isDark={isDark} />
          <Skills />
          <Projects onSelectProject={setSelectedProject} />
          <Experience />
          <ResumeSection />
          <Volunteering />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
