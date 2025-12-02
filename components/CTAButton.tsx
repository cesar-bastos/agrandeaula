import React from 'react';

interface CTAButtonProps {
  text: string;
  className?: string;
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, className = "", fullWidth = false }) => {
  return (
    <button 
      className={`
        relative overflow-hidden group
        bg-gradient-to-r from-brand-neon to-yellow-400
        text-black font-black uppercase tracking-wide 
        py-4 px-8 rounded-lg 
        shadow-[0_0_20px_rgba(251,191,36,0.4)] 
        hover:shadow-[0_0_40px_rgba(251,191,36,0.6)]
        hover:scale-[1.02]
        transition-all duration-300 ease-out transform cursor-pointer
        text-lg md:text-xl border border-yellow-300/50
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {/* Shine effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
      </span>
      
      <style>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .group-hover\\:animate-shine {
          animation: shine 0.75s;
        }
      `}</style>
    </button>
  );
};

export default CTAButton;