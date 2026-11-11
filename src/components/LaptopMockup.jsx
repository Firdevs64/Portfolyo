import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ExternalLink, Eye, Layout } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function LaptopMockup({ project }) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const is360Tour = project.id === '360-sanal-tur';
  const scenes = project.scenes || [];
  const currentScene = scenes[activeSceneIndex] || scenes[0] || {};

  const gallery = project.gallery || [];
  const currentGalleryItem = gallery[activeGalleryIndex] || { image: project.image, name: 'Ana Sayfa' };

  // Current active screenshot to display
  const activeImage = is360Tour ? currentScene.image : (currentGalleryItem.image || project.image);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-2">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-emerald-500/5 blur-[150px] pointer-events-none -z-10" />

      {/* Laptop Presentation */}
      <div className="flex flex-col items-center">
        
        {/* Laptop Display (Top Lid) - Widen to max-w-5xl/6xl so left menu is never cramped */}
        <div className="relative w-full max-w-5xl xl:max-w-6xl bg-[#0a0e17] rounded-2xl p-2 sm:p-3 md:p-4 border border-white/10 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(56,189,248,0.12)]">
          
          {/* Laptop Web Camera */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-900 border border-slate-700"></div>

          {/* Screen Bezel & Content - 16:9 widescreen */}
          <div className="relative w-full aspect-[16/9] bg-[#05070d] rounded-xl overflow-hidden border border-white/5 flex flex-col">
            
            {/* Browser / Player Top Nav Bar */}
            <div className="h-9 bg-dark-900/95 border-b border-white/5 px-4 flex items-center justify-between select-none">
              
              {/* Three Window Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>

              {/* URL bar: ONLY shown for real live domain projects (Kasko Makine & Grafix Ajans) */}
              {!is360Tour && project.liveUrl ? (
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] text-slate-300 max-w-md truncate shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono text-cyan-300/90">{project.liveUrl}</span>
                </div>
              ) : (
                <div />
              )}

              {/* Right side spacer (maximize icon removed as requested) */}
              <div className="w-8"></div>
            </div>

            {/* Screen Inner View: Real Screenshot Display with object-contain so left menu is fully visible */}
            <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-[#05070d]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Subtle Screen Bezel Reflection overlay */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 shadow-[inset_0_0_25px_rgba(0,0,0,0.6)]" />
            </div>

          </div>

        </div>

        {/* Laptop Bottom Base & Keyboard Hinge */}
        <div className="w-full max-w-5xl xl:max-w-6xl h-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-2xl shadow-2xl flex items-center justify-center relative">
          <div className="w-28 h-1 bg-slate-600 rounded-full"></div>
        </div>

        {/* 360 Sanal Tur Scene Selection Strip */}
        {is360Tour && scenes.length > 0 && (
          <div className="w-full max-w-5xl xl:max-w-6xl mt-7">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Sahne & Ekran Seçimi (Menüler Dahil Tüm Detayları İnceleyin)</span>
              </div>
              <span className="text-[11px] text-slate-400">
                {scenes.length} Aktif Sahne
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {scenes.map((scene, idx) => (
                <button
                  key={scene.id || idx}
                  onClick={() => setActiveSceneIndex(idx)}
                  className={`relative p-2.5 rounded-xl border text-left transition-all duration-300 overflow-hidden group ${
                    idx === activeSceneIndex
                      ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-[10px] text-cyan-400 font-semibold mb-0.5">
                    Sahne {idx + 1}
                  </div>
                  <div className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors truncate">
                    {scene.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {scene.badge}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Web Projects Gallery Tabs (Kasko Makine / Grafix Ajans) */}
        {!is360Tour && gallery.length > 0 && (
          <div className="w-full max-w-5xl xl:max-w-6xl mt-7">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Layout className="w-4 h-4 text-cyan-400" />
                <span>Sayfa ve Modül Önizlemeleri</span>
              </div>
              <span className="text-[11px] text-slate-400">
                {gallery.length} Ekran
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all duration-300 ${
                    idx === activeGalleryIndex
                      ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-[10px] text-cyan-400 font-semibold mb-0.5">
                    Ekran {idx + 1}
                  </div>
                  <div className="font-bold text-xs text-white truncate">
                    {item.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons directly under the laptop */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Siteye Git</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
