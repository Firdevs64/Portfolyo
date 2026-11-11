import React from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Smartphone, Globe, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold tracking-wide shadow-lg shadow-emerald-500/10 mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Google Play Store'da Aktif Kapalı Test Sürümü</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
          Gerçek Dünya İhtiyaçlarına <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
            Modern Mobil & Web Çözümleri
          </span>
        </h1>

        {/* Short & Powerful Bio */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Merhaba, ben <span className="text-white font-semibold">{personalInfo.name}</span>. 
          Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim ve şu an <span className="text-cyan-300 font-medium">İzmir Statik Yazılım</span> bünyesinde uzun dönem iş yeri stajımı sürdürüyorum. 
          React, Flutter, C# .NET ve Capacitor ile üretim kalitesinde canlı ürünler geliştiriyorum.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a 
            href="#projeler"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-dark-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Öne Çıkan Projeleri Gör</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a 
            href="#iletisim"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
          >
            <span>Birlikte Çalışalım</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-white/[0.06]">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
