import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="deneyim" className="relative py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Kariyer & Staj Geçmişi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            İş Yeri ve Staj Deneyimleri
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Teorik mühendislik eğitimimi gerçek kurumsal projeler, ERP sistemleri ve 360° web platformları geliştirerek pekiştirdim.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                item.current 
                  ? 'bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-400/50' 
                  : 'bg-dark-900 border-slate-600'
              }`}>
                {item.current && (
                  <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75"></span>
                )}
              </div>

              {/* Card Container */}
              <div className={`glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                item.current 
                  ? 'border-emerald-500/30 bg-emerald-500/[0.03]' 
                  : 'border-white/5 hover:border-white/20'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {item.company}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {item.role}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
