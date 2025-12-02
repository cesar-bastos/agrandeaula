import React from 'react';
import { CheckCircle2, Target, AlertTriangle, Briefcase, Zap, Coins } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    { 
      icon: Briefcase, 
      text: "Pontos Ocultos",
      desc: "Os pontos ocultos que podem aumentar a carga tributária do seus clientes sem eles perceberem."
    },
    { 
      icon: AlertTriangle, 
      text: "Estrategista",
      desc: "Como usar a Reforma para se posicionar como estrategista."
    },
    { 
      icon: Zap, 
      text: "Risco de Perda",
      desc: "As armadilhas práticas que te fazem perder clientes."
    },
    { 
      icon: Target, 
      text: "Antecipação",
      desc: "O roteiro estratégico para se antecipar à concorrência."
    },
    { 
      icon: Coins, 
      text: "Impacto Financeiro",
      desc: "O que muda no consumo (IVA), no lucro e nos dividendos dos sócios."
    },
  ];

  return (
    <section className="py-24 relative" id="o-que-aprender">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-3">
            Conteúdo Exclusivo
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
            O Que Você Vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-500">Dominar</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estratégias desenhadas para quem não quer ser apenas mais um cumpridor de obrigações na nova era tributária.
          </p>
        </div>
        
        {/* Layout ajustado para centralizar o último item se for ímpar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group relative w-full ${index === benefits.length - 1 && benefits.length % 2 !== 0 ? 'md:col-span-2 md:w-1/2' : ''}`}
            >
              {/* Glow effect behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-neon rounded-2xl opacity-20 group-hover:opacity-70 blur transition duration-500"></div>
              
              <div className="relative h-full bg-[#051014] border border-white/10 p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-brand-accent/50 transition-colors shadow-lg">
                   <benefit.icon className="text-brand-accent w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                   <h3 className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-brand-accent transition-colors">
                     {benefit.text}
                   </h3>
                   <p className="text-gray-400 leading-relaxed">
                     {benefit.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;