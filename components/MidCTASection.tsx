import React from 'react';
import CTAButton from './CTAButton';
import { Check } from 'lucide-react';

const MidCTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center bg-transparent border-y border-white/5" id="inscricao">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-wine/30 via-black/60 to-black/80"></div>
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 drop-shadow-lg">
          O MERCADO NÃO VAI ESPERAR
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto italic">
          Uma aula que foge completamente do padrão "live mais slides que você esquece em 3 dias".
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-12 text-left md:text-center">
          {[
            "Aula Ao Vivo", 
            "Prática & Estratégica", 
            "Interativa"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center bg-black/40 px-6 py-3 rounded-full border border-brand-neon/20">
              <div className="bg-brand-neon rounded-full p-0.5">
                <Check size={14} className="text-black font-bold" strokeWidth={4} />
              </div>
              <span className="text-sm md:text-base font-bold text-white uppercase">{item}</span>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <CTAButton text="Quero Garantir Minha Vaga" fullWidth={true} />
          <p className="mt-4 text-brand-neon font-bold text-sm bg-brand-neon/10 py-1 px-3 rounded inline-block border border-brand-neon/20 animate-pulse">
            Atenção, são apenas 20 vagas por aula.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidCTASection;