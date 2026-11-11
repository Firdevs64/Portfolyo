import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone, User, Mail, Wifi, Battery, Sparkles, Code2, GraduationCap, Database } from 'lucide-react';

export default function AnimatedHero({ onNavigate }) {
  const [timeStr, setTimeStr] = useState('14:00');

  // Framer Motion Values (No React state re-renders on mousemove!)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end fluid physics
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // 3D Parallax Rotations for Phone
  const rotateX = useTransform(springY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-10deg', '10deg']);

  // Floating Parallax Translations for Side Badges
  const leftX = useTransform(springX, [-0.5, 0.5], [18, -18]);
  const leftY = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rightX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const rightY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) - 0.5; // -0.5 to 0.5
    const y = (e.clientY / innerHeight) - 0.5; // -0.5 to 0.5
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-85px)] w-full flex items-center justify-center px-4 py-8 overflow-hidden select-none"
    >
      
      {/* Background Soft Cosmic Glows */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Main 3D Stage with Exact Same Size Badges on Left and Right */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between relative">
        
        {/* ============================================================ */}
        {/* LEFT SIDE: Exactly Same Width & Flush Aligned (Sola 2 Tane) */}
        {/* ============================================================ */}
        <motion.div 
          style={{ x: leftX, y: leftY }}
          className="hidden lg:flex flex-col gap-6 z-20"
        >
          {/* Sol Kart 1 */}
          <div className="w-[285px] h-[76px] bg-dark-900/80 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl px-5 rounded-2xl shadow-xl flex items-center gap-3.5 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                Full-Stack & Mobil Developer
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                Modern Web & Mobil
              </div>
            </div>
          </div>

          {/* Sol Kart 2 */}
          <div className="w-[285px] h-[76px] bg-dark-900/80 border border-white/10 hover:border-emerald-400/40 backdrop-blur-xl px-5 rounded-2xl shadow-xl flex items-center gap-3.5 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                Fırat Üniversitesi
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                Yazılım Mühendisliği
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* CENTER: 3D Smartphone with Subtle Radiating Glow            */}
        {/* ============================================================ */}
        <div className="flex-1 flex items-center justify-center">
          
          <motion.div 
            style={{ 
              rotateX, 
              rotateY,
              transformPerspective: 1200 
            }}
            className="relative"
          >
            {/* Subtle Radiating Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 via-emerald-500/20 to-teal-400/25 blur-2xl rounded-[55px] opacity-75 pointer-events-none -z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-[50px] blur-md pointer-events-none -z-10" />

            {/* Smartphone Hardware Frame */}
            <div className="w-[310px] sm:w-[335px] h-[580px] bg-dark-950 rounded-[48px] p-2.5 border-[7px] border-[#161f2c] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(56,189,248,0.2)] relative overflow-hidden outline outline-1 outline-white/15">
              
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>

              {/* Inner Screen Display */}
              <div className="w-full h-full bg-[#05090f] rounded-[38px] overflow-hidden p-5 pt-3 flex flex-col justify-between relative border border-white/5">
                
                {/* Phone Status Bar (Time, Wifi, Battery) */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold px-2 mb-2 z-20">
                  <span>{timeStr}</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Name & Title inside the Phone */}
                <div className="flex flex-col items-center text-center my-auto pt-4 pb-2">
                  <h1 className="text-3xl font-black text-white tracking-tight leading-none mb-2">
                    Firdevs Köse
                  </h1>
                  <p className="text-xs font-bold text-cyan-400 tracking-wider">
                    Full-Stack & Mobil Developer
                  </p>
                </div>

                {/* 3 Interactive Action Buttons (Clean, Fast & Clickable) */}
                <div className="space-y-3 mb-4 relative z-30">
                  
                  {/* 1. Projeleri Aç */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('projects');
                    }}
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-dark-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-dark-950" />
                      <span>Projeleri ve Simülatörü Aç</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-dark-950" />
                  </button>

                  {/* 2. Hakkımda & Teknolojiler */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('about');
                    }}
                    className="w-full py-3.5 px-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs transition-all flex items-center justify-between hover:border-cyan-400/40 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-cyan-400" />
                      <span>Hakkımda & Teknolojiler</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {/* 3. İletişime Geç */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('contact');
                    }}
                    className="w-full py-3.5 px-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs transition-all flex items-center justify-between hover:border-emerald-400/40 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-emerald-400" />
                      <span>İletişime Geç</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* RIGHT SIDE: Exactly Same Width & Flush Aligned (Sağa 2 Tane)*/}
        {/* ============================================================ */}
        <motion.div 
          style={{ x: rightX, y: rightY }}
          className="hidden lg:flex flex-col gap-6 z-20"
        >
          {/* Sağ Kart 1 */}
          <div className="w-[285px] h-[76px] bg-dark-900/80 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl px-5 rounded-2xl shadow-xl flex items-center gap-3.5 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                C# • .NET • React
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                Core Stack
              </div>
            </div>
          </div>

          {/* Sağ Kart 2 */}
          <div className="w-[285px] h-[76px] bg-dark-900/80 border border-white/10 hover:border-emerald-400/40 backdrop-blur-xl px-5 rounded-2xl shadow-xl flex items-center gap-3.5 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Database className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                SQL Server • Firebase
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                REST API • PWA
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
