import React from 'react';
import { Award, BookOpen, Building2, Gavel } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  const credentials = [
    "Mestre em Ciências Contábeis (UERJ) e Pós-graduado em Direito Tributário e Finanças (FGV).",
    "Coordenador da Comissão de Assuntos Tributários do CRC-RJ.",
    "Membro da Comissão de Estudos da Reforma Tributária da FECOMERCIO.",
    "Treinador de Fiscais da Receita Federal e do Tribunal de Contas do Rio.",
    "Assistente Técnico na CPI da VARIG (Análises especializadas de falência).",
    "Professor de MBA/Pós na FGV, PUC-Rio, IBMEC e Mackenzie."
  ];

  // Componente de Foto reutilizável para evitar duplicação de código visual complexo
  const ProfilePhoto = () => (
    <div className="relative">
      <div className="group aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-4 border-brand-neon/20 max-w-md mx-auto shadow-lg hover:shadow-neon/20 relative z-10">
        <img 
          src="https://i.postimg.cc/8cZW7y5c/A-foto-764x784.png" 
          alt="Prof. José Miguel" 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {/* Decorative Elements behind photo */}
      <div className="absolute top-10 -left-10 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 -right-10 w-32 h-32 bg-brand-neon/10 rounded-full blur-xl animate-pulse delay-700"></div>
    </div>
  );

  return (
    <section className="py-20 bg-transparent" id="prof-jose-miguel">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Main Photo - DESKTOP ONLY */}
          <div className="relative order-2 lg:order-1 hidden lg:block">
             <ProfilePhoto />
          </div>

          {/* Right: Bio */}
          <div className="flex flex-col space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 mb-4">
                <Award size={16} className="text-brand-neon" />
                <span className="text-brand-neon font-bold text-xs uppercase tracking-widest">Autoridade Máxima</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Prof. José Miguel
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Sócio de um dos mais renomados escritórios de contabilidade do país, o Prof. José Miguel não é apenas um acadêmico, é um estrategista de campo de batalha.
              </p>

              {/* Mobile Photo Insert - Visible only on mobile, between text and topics */}
              <div className="block lg:hidden my-8 max-w-xs mx-auto">
                <ProfilePhoto />
              </div>

              {/* Authority Grid */}
              <div className="grid gap-4">
                {credentials.map((cred, index) => (
                  <div key={index} className="flex gap-4 items-start p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="mt-1 min-w-[20px]">
                      {index === 0 && <BookOpen className="text-brand-accent" size={20} />}
                      {index === 1 && <Building2 className="text-brand-neon" size={20} />}
                      {index === 2 && <Building2 className="text-brand-neon" size={20} />}
                      {index >= 3 && <Gavel className="text-gray-400" size={20} />}
                    </div>
                    <p className="text-gray-200 text-sm md:text-base font-medium leading-snug">
                      {cred}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
               <p className="text-brand-neon/90 font-bold italic text-lg">
                 "Eu treino quem fiscaliza você. Agora, vou te ensinar a blindar seus clientes."
               </p>
               <a href="http://www.professorjosemiguel.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm mt-2 hover:text-white transition-colors block">
                 Saiba mais em: www.professorjosemiguel.com.br
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;