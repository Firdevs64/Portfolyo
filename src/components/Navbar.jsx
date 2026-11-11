import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'projects', label: 'Projeler' },
    { id: 'about', label: 'Hakkımda' },
    { id: 'contact', label: 'İletişim' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-950/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl shadow-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo with Real FK Monogram */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3.5 group text-left"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/35 bg-black shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:shadow-[0_0_22px_rgba(56,189,248,0.45)] group-hover:border-cyan-400/60 transition-all duration-300 flex items-center justify-center shrink-0">
            <img 
              src="/fk_mark.png" 
              alt="Firdevs Köse Logo" 
              className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <div className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Firdevs Köse
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-2 py-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-1.5 text-xs font-semibold rounded-full transition-all duration-250 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Doğrudan Gerçek CV PDF İndirme */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="/Firdevs_Kose_CV.pdf" 
            download="Firdevs_Kose_CV.pdf"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-dark-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            <span>CV'yi İndir</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900/98 border-b border-white/10 px-6 py-6 backdrop-blur-2xl space-y-3">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-xl font-medium text-sm ${
                activePage === item.id ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href="/Firdevs_Kose_CV.pdf"
            download="Firdevs_Kose_CV.pdf"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400"
          >
            <Download className="w-4 h-4" />
            <span>CV'yi İndir</span>
          </a>
        </div>
      )}
    </header>
  );
}
