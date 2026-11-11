import React from 'react';
import { Cpu, GraduationCap } from 'lucide-react';
import { personalInfo, coreTechnologies } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8 sm:py-10 space-y-10 animate-fade-in">
      
      {/* 1. Bölüm: Hakkımda / Profil */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_0_25px_rgba(56,189,248,0.3)] bg-black shrink-0 flex items-center justify-center group">
              <img 
                src="/fk_mark.png" 
                alt="Firdevs Köse Logo" 
                className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">{personalInfo.name}</h2>
              <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Full-Stack & Mobil Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 w-fit">
            <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Fırat Üniversitesi</div>
              <div className="text-[11px] text-slate-400">Yazılım Mühendisliği (4. Sınıf)</div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="pt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
          <p>
            Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği 4. sınıf öğrencisiyim. 
            C#/.NET, ilişkisel veritabanları ve modern web/mobil ekosisteminde backend geliştirme, 
            veritabanı mimarisi ve API entegrasyonu alanlarında kendimi geliştirdim.
          </p>
          <p>
            Geliştirdiğim projeleri yalnızca birer prototip olarak bırakmayıp, 
            Google Play Store'da test süreçlerine taşımaya, gerçek işletme ihtiyaçlarına uygun çözümlere 
            ve canlı kullanıcı deneyimlerine dönüştürmeye odaklanıyorum.
          </p>
        </div>

      </div>

      {/* 2. Bölüm: Kullandığım Teknolojiler (Eşit Boyutlu, Açıklamasız Sade Butonlar) */}
      <div className="space-y-5">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Kullandığım Teknolojiler</h3>
            <p className="text-xs text-slate-400">Aktif projelerimde kullandığım ana teknolojiler</p>
          </div>
        </div>

        {/* Equal-sized, uniform buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
          {coreTechnologies.map((tech, idx) => (
            <div
              key={idx}
              className="h-14 sm:h-16 px-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-teal-500/10 hover:to-emerald-500/10 shadow-lg shadow-black/40 flex items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] group cursor-default"
            >
              <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
