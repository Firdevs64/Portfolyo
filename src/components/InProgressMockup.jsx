import React from 'react';
import { RefreshCw, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function InProgressMockup({ project }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4 flex flex-col items-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Main Glass Card */}
      <div className="w-full bg-[#090d16]/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        {/* Top Glow Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Status Pill */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow text-cyan-400" />
            <span>{project.statusText || 'Çalışmalar sürüyor • Baştan revize edilip güncelleniyor'}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Aktif Geliştirme Sürecinde</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 flex items-center gap-3">
            <span>{project.title}</span>
          </h2>
          <p className="text-sm sm:text-base text-cyan-300/90 font-medium mb-3">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack Tags */}
        {project.techTags && project.techTags.length > 0 && (
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Teknoloji & Altyapı</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Visual Placeholder Frame (Ready for user-provided screenshots) */}
        <div className="w-full aspect-[16/9] max-h-[300px] rounded-2xl border-2 border-dashed border-cyan-500/25 bg-gradient-to-b from-white/[0.02] to-black/40 flex flex-col items-center justify-center p-6 text-center relative group">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <RefreshCw className="w-6 h-6 text-cyan-400" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">
            Görseller & Yeni Sürüm Yakında
          </h4>
          <p className="text-xs text-slate-400 max-w-md">
            Bu projenin arayüz mimarisi ve bileşenleri baştan revize edilmektedir. Güncel ekran görüntüleri tamamlandığında buraya eklenecektir.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Kaynak kodları ve geliştirme sürecini GitHub üzerinden inceleyebilirsiniz.
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
