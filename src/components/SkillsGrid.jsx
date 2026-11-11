import React from 'react';
import { Code2, Smartphone, Database, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function SkillsGrid() {
  const getCategoryIcon = (category) => {
    if (category.includes('Mobil')) return Smartphone;
    if (category.includes('Frontend')) return Code2;
    if (category.includes('Backend')) return Terminal;
    return Database;
  };

  return (
    <section id="yetenekler" className="relative py-24 border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Teknoloji & Yetkinlikler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Kullandığım Teknolojiler & Beceriler
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hem modern web hem de hibrit/native mobil ekosisteminde ölçeklenebilir ve sağlam altyapılar inşa ediyorum.
          </p>
        </div>

        {/* 4 Category Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-white/10 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-4">
                    {cat.category}
                  </h3>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Üretim & Staj Tecrübeli</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
