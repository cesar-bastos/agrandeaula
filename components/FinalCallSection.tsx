import React from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Tag } from 'lucide-react';

const FinalCallSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-6 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
            A Reforma Tributária será um <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">divisor de águas.</span>
          </h2>
          
          <h3 className="text-2xl md:text-4xl font-heading font-black text-brand-neon uppercase tracking-wide mb-12 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
            Você vai liderar ou correr atrás?
          </h3>

          {/* CTA Block Container */}
          <div className="flex flex-col items-center gap-6 mb-12">
            
            {/* Price Highlight Section - Moved ABOVE Button */}
            <div className="flex flex-col items-center w-full">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-neon/20 text-brand-neon border border-brand-neon/30 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                      <Tag size={12} /> Oferta Especial
                    </span>
                 </div>
                 <div className="flex items-baseline gap-2 relative flex-wrap justify-center">
                    <span className="text-gray-200 text-xl font-bold">Por</span>
                    <span className="text-7xl md:text-8xl font-black text-brand-neon tracking-tighter drop-shadow-[0_0_35px_rgba(251,191,36,0.6)]">R$ 97</span>
                    <span className="text-gray-400 text-sm font-bold uppercase mb-2 ml-1">à vista</span>
                 </div>
            </div>

            <CTAButton 
              text="QUERO GARANTIR MINHA VAGA AGORA" 
              className="px-10 py-5 text-xl w-full md:w-auto shadow-[0_0_30px_rgba(0,255,148,0.3)] hover:shadow-[0_0_50px_rgba(0,255,148,0.5)] border-brand-accent/30 bg-gradient-to-r from-brand-accent to-emerald-400 text-black font-black"
            />
            
          </div>

          {/* Body Text - Moved BELOW Button */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-10 backdrop-blur-sm shadow-2xl">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Essa aula de <span className="text-brand-neon font-bold text-2xl">R$97</span> é o passo mais rápido, seguro e inteligente para entrar no lado certo — o lado dos profissionais que protegem clientes, aumentam autoridade e <span className="text-white font-bold underline decoration-brand-accent underline-offset-4">vendem estratégia, não obrigação.</span>
            </p>
          </div>

          {/* Closing Quote */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xl md:text-2xl text-white font-serif italic font-bold tracking-wide">
              "Quem entende primeiro, lidera. <br className="md:hidden" />
              <span className="text-gray-500">Quem espera, obedece."</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCallSection;