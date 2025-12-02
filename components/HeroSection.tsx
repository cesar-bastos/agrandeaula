import React from 'react';
import CTAButton from './CTAButton';
import { TrendingUp, AlertTriangle, Tag, CheckCircle2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[750px] md:min-h-[900px] flex items-center overflow-hidden pt-20 pb-20" id="a-aula">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/GtXY4M23/Banner-principal-1920x880.png" 
          alt="Fundo Reforma Tributária" 
          className="w-full h-full object-cover object-center opacity-100"
        />
        
        {/* Gradient Overlay - Adjusted for readability vs visibility */}
        {/* Reduced opacity to make image sharper/clearer while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#001E0C]/60 to-transparent z-10"></div>
        {/* Vertical fade for smooth section transition - lighter touch */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617] z-10"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl flex flex-col space-y-8">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
              <span className="text-brand-accent font-bold text-xs md:text-sm uppercase tracking-widest">Evento Exclusivo Ao Vivo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase leading-[0.9] tracking-tighter drop-shadow-2xl">
              Reforma <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Tributária</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-neon uppercase tracking-wide mt-2 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
              A Grande Aula
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-brand-neon to-brand-accent rounded-full mt-4"></div>
            
            <h3 className="text-xl md:text-3xl font-bold text-gray-100 mt-6 leading-tight max-w-3xl drop-shadow-lg shadow-black/50">
              Os <span className="text-brand-accent underline decoration-brand-accent/30 underline-offset-4">pontos ocultos</span> que vão destruir planejamentos antigos e abrir portas para novos honorários, reposicionamento e autoridade.
            </h3>

            {/* Benefit List added below subtitle */}
            <ul className="space-y-3 mt-4 mb-6">
              {[
                "Entenda o que muda na prática do seu escritório",
                "Descubra armadilhas que quase ninguém está percebendo",
                "Use a Reforma para vender consultoria estratégica, não só obrigação",
                "Encontre oportunidades reais para se posicionar antes da concorrência"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-accent shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(0,255,148,0.5)]" size={20} />
                  <span className="text-gray-100 font-medium text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-200 text-base md:text-lg max-w-lg font-medium leading-relaxed border-l-2 border-brand-neon/30 pl-4 drop-shadow-md">
            Com <strong>Prof. José Miguel</strong>. Uma masterclass estratégica para advogados e contadores que buscam o próximo nível de honorários.
          </p>

          {/* Registration Box - Glassmorphism Strong */}
          <div className="glass-strong rounded-2xl p-8 max-w-lg relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-neon to-brand-accent"></div>
            
            <div className="flex flex-col gap-5">
              
              {/* Price Highlight Section removed and moved to FinalCallSection as requested */}
              
              <CTAButton text="Garantir Lugar na Sala" fullWidth={true} />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;