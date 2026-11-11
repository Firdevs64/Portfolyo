import React, { useState } from 'react';
import { Smartphone, Globe, RefreshCw, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import PhoneMockup from './PhoneMockup';
import LaptopMockup from './LaptopMockup';
import InProgressMockup from './InProgressMockup';

export default function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const activeProject = projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex flex-col items-center justify-center">
      
      {/* 1. Clean Project Selector Tabs without any extra badges */}
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto max-w-full pb-2 mb-8 no-scrollbar w-full px-2">
        {projectsData.map((project) => {
          const isActive = project.id === activeProjectId;
          return (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 border border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06] hover:border-white/20'
              }`}
            >
              {project.type === 'mobile' ? (
                <Smartphone className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              ) : project.type === 'in-progress' ? (
                <RefreshCw className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              ) : (
                <Globe className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              )}
              <span>{project.title}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Project Info & Used Technologies Header (Non-in-progress projects) */}
      {activeProject.type !== 'in-progress' && (
        <div className="w-full max-w-3xl mx-auto mb-8 sm:mb-12 text-center flex flex-col items-center animate-fade-in px-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1.5">
            {activeProject.title}
          </h2>
          
          {activeProject.subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 mb-2.5">
              {activeProject.subtitle}
            </p>
          )}

          {activeProject.description && (
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-4">
              {activeProject.description}
            </p>
          )}

          {/* Used Technologies Pills */}
          {activeProject.techStack && activeProject.techStack.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-cyan-400" />
                Teknolojiler:
              </span>
              {activeProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/25 text-[11px] font-semibold text-cyan-300 shadow-sm hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. Main Device Showcase (Phone, Laptop, or In-Progress Canvas) */}
      <div className="w-full flex items-center justify-center">
        {activeProject.type === 'mobile' ? (
          <PhoneMockup project={activeProject} />
        ) : activeProject.type === 'in-progress' ? (
          <InProgressMockup project={activeProject} />
        ) : (
          <LaptopMockup project={activeProject} />
        )}
      </div>

    </div>
  );
}
