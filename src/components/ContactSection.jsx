import React, { useState } from 'react';
import { Mail, Copy, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactLinks = [
    {
      title: "E-posta",
      handle: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      desc: "Doğrudan e-posta gönderebilir veya adresi kopyalayabilirsiniz",
      icon: Mail,
      isEmail: true,
      accentColor: "from-cyan-500/20 to-blue-500/10",
      borderColor: "hover:border-cyan-400/50"
    },
    {
      title: "LinkedIn",
      handle: "linkedin.com/in/firdevs-kose",
      href: personalInfo.linkedin,
      desc: "Profesyonel kariyer profili ve iş bağlantıları",
      icon: LinkedinIcon,
      accentColor: "from-blue-500/20 to-cyan-500/10",
      borderColor: "hover:border-blue-400/50"
    },
    {
      title: "GitHub",
      handle: "github.com/Firdevs64",
      href: personalInfo.github,
      desc: "Açık kaynak projelerim, repolarım ve kod katkılarım",
      icon: GithubIcon,
      accentColor: "from-slate-500/20 to-teal-500/10",
      borderColor: "hover:border-emerald-400/50"
    },
    {
      title: "Medium",
      handle: "medium.com/@firdevs6452",
      href: personalInfo.medium,
      desc: "Yazılım, mimari ve geliştirme süreçlerine dair yazılarım",
      icon: MediumIcon,
      accentColor: "from-emerald-500/20 to-cyan-500/10",
      borderColor: "hover:border-emerald-400/50"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center animate-fade-in">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Doğrudan İletişim Kanalları</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          Birlikte Çalışalım
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Tam zamanlı pozisyonlar, freelance projeler veya teknik fikir alışverişi için aşağıdaki bağlantılardan bana ulaşabilirsiniz.
        </p>
      </div>

      {/* Modern Links Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 border border-white/10 transition-all duration-300 relative group flex flex-col justify-between ${item.borderColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {item.isEmail ? (
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Kopyalandı!' : 'Kopyala'}</span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white group-hover:text-cyan-400 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.href}
                target={item.isEmail ? undefined : "_blank"}
                rel={item.isEmail ? undefined : "noopener noreferrer"}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 pt-3 border-t border-white/5 truncate"
              >
                <span className="truncate">{item.handle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          );
        })}
      </div>

    </div>
  );
}
