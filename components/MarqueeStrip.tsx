import React from 'react';

const MarqueeStrip: React.FC = () => {
  const text = "GRANDE AULA DE REFORMA TRIBUTÁRIA • APENAS 20 VAGAS";
  
  return (
    <div className="w-full bg-brand-neon text-black overflow-hidden py-3 border-y-2 border-black/10 relative z-20 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
      <div className="flex whitespace-nowrap w-max animate-marquee">
        {/* Repeat content enough times to ensure smooth infinite scroll on large screens */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center mx-6">
             <span className="font-black uppercase tracking-widest text-sm md:text-base font-heading">
                {text}
             </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeStrip;