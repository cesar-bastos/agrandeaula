import React from 'react';
import { Scale, Shield, TrendingUp } from 'lucide-react';

const UnlockSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="oportunidades">
      {/* Background Ambient Light */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-[1.1]">
              Quem apenas cumpre obrigação <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">ficará para trás.</span>
            </h2>
            
            <div className="bg-white/5 border-l-4 border-brand-accent p-6 rounded-r-xl mb-8 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl text-white font-bold italic leading-relaxed">
                "A questão não é <span className="text-brand-neon">se</span> os clientes vão precisar de estratégia. É <span className="underline decoration-brand-accent underline-offset-4 text-brand-accent">quem eles vão ouvir</span> quando isso acontecer?"
              </h3>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A Reforma Tributária é a maior janela de oportunidade da década. Esta aula coloca você entre os profissionais que <strong>lideram a mudança</strong>, cobrando honorários estratégicos.
            </p>

            <div className="flex gap-4">
               <div className="flex flex-col">
                 <span className="text-3xl font-black text-brand-neon">90%</span>
                 <span className="text-xs uppercase text-gray-500 tracking-wider">Perdidos</span>
               </div>
               <div className="w-px bg-white/10 h-12"></div>
               <div className="flex flex-col">
                 <span className="text-3xl font-black text-brand-accent">10%</span>
                 <span className="text-xs uppercase text-gray-500 tracking-wider">Líderes</span>
               </div>
            </div>
          </div>

           {/* Right: Dynamic Visual Graphic */}
           <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center animate-float">
               
               {/* Glowing Background Circles */}
               <div className="absolute inset-0 border border-brand-accent/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute inset-8 border border-brand-neon/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-0 bg-brand-accent/5 blur-3xl rounded-full"></div>
               
               {/* Cards Floating */}
               <div className="relative z-10 grid grid-cols-2 gap-6 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <div className="glass p-6 rounded-2xl border-t border-brand-accent/30 flex flex-col items-center justify-center w-36 h-36 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform">
                    <Scale className="text-brand-accent mb-3 drop-shadow-[0_0_10px_rgba(0,255,148,0.5)]" size={36} />
                    <span className="text-sm text-center font-bold text-white">Estratégia</span>
                  </div>
                  <div className="glass p-6 rounded-2xl border-t border-brand-neon/30 flex flex-col items-center justify-center w-36 h-36 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mt-12 hover:scale-105 transition-transform">
                    <Shield className="text-brand-neon mb-3 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={36} />
                    <span className="text-sm text-center font-bold text-white">Blindagem</span>
                  </div>
                  <div className="glass p-6 rounded-2xl border-t border-blue-500/30 flex flex-col items-center justify-center w-36 h-36 shadow-[0_10px_30px_rgba(0,0,0,0.5)] -mt-12 hover:scale-105 transition-transform">
                    <TrendingUp className="text-blue-400 mb-3 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" size={36} />
                    <span className="text-sm text-center font-bold text-white">Lucro</span>
                  </div>
                  <div className="bg-gradient-to-br from-brand-neon to-brand-gold p-6 rounded-2xl flex flex-col items-center justify-center w-36 h-36 shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform">
                    <span className="text-3xl font-black text-black leading-none">R.T.</span>
                    <span className="text-[10px] text-center uppercase font-bold text-black/80 mt-1">Reforma Tributária</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UnlockSection;