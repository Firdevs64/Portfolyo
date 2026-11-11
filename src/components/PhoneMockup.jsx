import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon, PlayStoreIcon } from './Icons';

export default function PhoneMockup({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screens = project.screens || [];
  const total = screens.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  };

  const activeScreen = screens[currentSlide] || screens[0] || {};

  return (
    <div className="relative w-full max-w-6xl mx-auto py-2">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-teal-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Device & Callouts Row */}
      <div className="flex items-center justify-center gap-4 lg:gap-10 min-h-[740px]">

        {/* Left Callout & Arrow (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-4 text-right">
          <div className="max-w-[240px]">
            <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">Öne Çıkan Özellik</p>
            <p className="text-sm text-slate-200 font-medium leading-relaxed transition-all duration-300">
              {activeScreen.leftCallout}
            </p>
          </div>
          <div className="w-12 h-[1px] bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
          <button
            onClick={prevSlide}
            aria-label="Önceki Ekran"
            className="w-12 h-12 rounded-full bg-slate-900/80 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Centered Smartphone Device (Larger & No overlapping notch) */}
        <div className="flex flex-col items-center">
          
          {/* Physical Phone Chassis */}
          <div className="relative w-[340px] sm:w-[370px] md:w-[390px] h-[720px] sm:h-[760px] bg-[#0b1019] rounded-[52px] p-2.5 sm:p-3 border-[8px] sm:border-[9px] border-[#1b2432] shadow-[0_25px_65px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(16,185,129,0.18)] outline outline-1 outline-white/10 flex flex-col items-center">
            
            {/* Top Bezel Speaker & Camera (Placed outside the screen so it NEVER covers app content) */}
            <div className="w-full flex items-center justify-center gap-2 pt-1 pb-2">
              <div className="w-14 h-1.5 bg-[#202b3a] rounded-full"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#16202e] border border-slate-700/80"></div>
            </div>

            {/* Glass Screen Frame */}
            <div className="relative w-full flex-1 bg-[#05080e] rounded-[42px] overflow-hidden flex flex-col select-none">
              
              {/* Screen Image with smooth slide/fade */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#070b12]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={activeScreen.image}
                    alt={activeScreen.title || 'Ekran'}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="w-full h-full object-contain sm:object-cover object-top rounded-[40px]"
                  />
                </AnimatePresence>

                {/* Subtle Inner Glass Vignette / Bezel Reflection */}
                <div className="absolute inset-0 rounded-[40px] pointer-events-none ring-1 ring-inset ring-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
              </div>

            </div>
          </div>

          {/* Bottom Title & Dots */}
          <div className="mt-5 text-center">
            <div className="text-sm font-bold text-white mb-2 transition-all">
              {activeScreen.title}
            </div>
            
            <div className="flex items-center justify-center gap-1.5 mb-5">
              {screens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide 
                      ? 'w-6 bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ekran ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Controls (Visible on smaller screens) */}
            <div className="flex md:hidden items-center justify-center gap-4 mb-4">
              <button
                onClick={prevSlide}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white"
              >
                ❮ Önceki
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white"
              >
                Sonraki ❯
              </button>
            </div>

            {/* Direct Project CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-dark-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all"
                >
                  <PlayStoreIcon className="w-3.5 h-3.5" />
                  <span>Google Play'de İncele (Kapalı Test)</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Callout & Arrow (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-start gap-4 text-left">
          <button
            onClick={nextSlide}
            aria-label="Sonraki Ekran"
            className="w-12 h-12 rounded-full bg-slate-900/80 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
          </button>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-400/50"></div>
          <div className="max-w-[240px]">
            <p className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-1">Mimarisi & Güç</p>
            <p className="text-sm text-slate-200 font-medium leading-relaxed transition-all duration-300">
              {activeScreen.rightCallout}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
