import React from 'react';
import { X, Download, CheckCircle, GraduationCap, Briefcase, Code, Award, ExternalLink } from 'lucide-react';
import { personalInfo, experienceTimeline } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[2px]">
            <div className="w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center font-extrabold text-xl text-cyan-400">
              FK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-xs text-cyan-400 font-semibold">{personalInfo.title}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{personalInfo.email} • {personalInfo.phone} • {personalInfo.location}</p>
          </div>
        </div>

        {/* CV Summary */}
        <div className="space-y-6 text-xs text-slate-300">
          
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2 text-cyan-400">
              <GraduationCap className="w-4 h-4" />
              <span>Eğitim</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
              <div className="font-bold text-white">Fırat Üniversitesi — Teknoloji Fakültesi</div>
              <div className="text-slate-400">Yazılım Mühendisliği (2023 - 2027) 4. Sınıf</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2 text-emerald-400">
              <Briefcase className="w-4 h-4" />
              <span>Staj ve İş Deneyimleri</span>
            </div>
            <div className="space-y-2">
              {experienceTimeline.map((exp, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{exp.company}</span>
                    <span className="text-[10px] text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-cyan-400 text-[11px] font-medium my-0.5">{exp.role}</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2 text-cyan-400">
              <Code className="w-4 h-4" />
              <span>Öne Çıkan Aktif Projeler</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <div className="font-bold text-white">İşletme Defteri (Google Play Test)</div>
                <div className="text-[11px] text-slate-400">React, Capacitor, Firebase, Android AAB</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <div className="font-bold text-white">360° Sanal Tur (Statik Yazılım)</div>
                <div className="text-[11px] text-slate-400">Laravel, MySQL, Photo Sphere Viewer, JS</div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons in Modal */}
        <div className="flex items-center justify-end gap-3 mt-8 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Kapat
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Yazdır / PDF Olarak Kaydet</span>
          </button>
        </div>

      </div>
    </div>
  );
}
