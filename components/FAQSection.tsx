import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Quando será a aula?",
      answer: "A aula será transmitida ao vivo. Após realizar sua inscrição, você receberá todos os detalhes de data e horário no seu e-mail e terá acesso ao nosso grupo exclusivo de WhatsApp."
    },
    {
      question: "O evento é online ou presencial?",
      answer: "O evento é 100% online. Você poderá assistir de qualquer lugar, basta ter acesso à internet, seja pelo computador ou celular."
    },
    {
      question: "A aula ficará gravada?",
      answer: "Nosso foco é a experiência ao vivo, para que você possa interagir e tirar dúvidas. O replay não é garantido, portanto recomendamos fortemente que participe no horário agendado."
    },
    {
      question: "Para quem é indicado?",
      answer: "Advogados, contadores, consultores e estudantes que desejam entender a Reforma Tributária na prática, fugindo das teorias rasas e focando em oportunidades de mercado."
    },
    {
      question: "Preciso pagar algo?",
      answer: "Não, esta aula é um evento gratuito. Nosso objetivo é elevar o nível do debate tributário no país. No entanto, as vagas na sala de transmissão são limitadas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-transparent relative" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-neon/10 rounded-full mb-4">
            <HelpCircle className="text-brand-neon w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-400">
            Respostas para as perguntas mais comuns sobre o evento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`
                border rounded-xl transition-all duration-300 overflow-hidden
                ${openIndex === index 
                  ? 'bg-white/10 border-brand-neon/50 shadow-[0_0_15px_rgba(251,191,36,0.15)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/30'
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`font-bold text-base md:text-lg transition-colors ${openIndex === index ? 'text-brand-neon' : 'text-white group-hover:text-gray-200'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-neon w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0 group-hover:text-white" />
                )}
              </button>
              
              <div 
                className={`
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5 text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;