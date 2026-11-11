import React, { useEffect, useState } from 'react';

export default function BackgroundBubbles() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      // Very subtle mouse parallax factor (gentle, not distracting)
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-15 select-none"
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    >
      {/* Bubble 1: Top-Left (Organic cyan oval) */}
      <div 
        className="absolute top-[12%] left-[6%] w-[110px] h-[95px] rounded-[58%_42%_65%_35%/48%_55%_45%_52%] border border-cyan-400/30 shadow-[0_0_15px_rgba(56,189,248,0.25)] animate-bubble-float-1"
      />

      {/* Bubble 2: Far Left Middle (Small delicate teal outline) */}
      <div 
        className="absolute top-[48%] left-[3%] w-[65px] h-[72px] rounded-[63%_37%_54%_46%/40%_62%_38%_60%] border border-emerald-400/25 shadow-[0_0_12px_rgba(16,185,129,0.2)] animate-bubble-float-2"
      />

      {/* Bubble 3: Bottom-Left (Medium organic sky blue ring) */}
      <div 
        className="absolute bottom-[10%] left-[8%] w-[135px] h-[120px] rounded-[52%_48%_62%_38%/55%_42%_58%_45%] border border-cyan-300/25 shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-bubble-float-3"
      />

      {/* Bubble 4: Top-Right (Delicate cyan ring near corner) */}
      <div 
        className="absolute top-[15%] right-[7%] w-[90px] h-[82px] rounded-[45%_55%_38%_62%/58%_42%_58%_42%] border border-cyan-400/30 shadow-[0_0_14px_rgba(56,189,248,0.25)] animate-bubble-float-2"
      />

      {/* Bubble 5: Far Right Middle (Medium organic emerald/teal oval) */}
      <div 
        className="absolute top-[52%] right-[4%] w-[115px] h-[105px] rounded-[60%_40%_52%_48%/45%_58%_42%_55%] border border-emerald-400/25 shadow-[0_0_16px_rgba(16,185,129,0.2)] animate-bubble-float-1"
      />

      {/* Bubble 6: Bottom-Right (Medium sky ring) */}
      <div 
        className="absolute bottom-[14%] right-[9%] w-[125px] h-[110px] rounded-[48%_52%_42%_58%/62%_38%_62%_38%] border border-cyan-400/25 shadow-[0_0_18px_rgba(56,189,248,0.2)] animate-bubble-float-3"
      />

      {/* Bubble 7: Upper Center-Right (Small faint floater) */}
      <div 
        className="absolute top-[8%] right-[28%] w-[50px] h-[46px] rounded-[55%_45%_60%_40%/50%_55%_45%_50%] border border-teal-300/20 shadow-[0_0_10px_rgba(20,184,166,0.15)] animate-bubble-float-2"
      />

      {/* Bubble 8: Lower Center-Left (Small faint floater) */}
      <div 
        className="absolute bottom-[8%] left-[30%] w-[58px] h-[52px] rounded-[42%_58%_48%_52%/58%_45%_55%_42%] border border-cyan-400/20 shadow-[0_0_10px_rgba(56,189,248,0.15)] animate-bubble-float-1"
      />
    </div>
  );
}
