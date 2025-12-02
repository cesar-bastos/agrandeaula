import React from 'react';
import { Calendar, Video, PlayCircle, MessageCircle, AlertCircle } from 'lucide-react';

const LogisticsSection: React.FC = () => {
  const items = [
    {
      icon: Calendar,
      title: "Data e Horário",
      text: "Aula ao vivo no dia 24/10 às 20:00h",
      color: "text-brand-neon"
    },
    {
      icon: Video,
      title: "Onde Assistir",
      text: "Plataforma: Zoom / Google Meet",
      color: "text-blue-400"
    },
    {
      icon: PlayCircle,
      title: "Replay Liberado",
      text: "Gravação disponível por 7 dias",
      color: "text-red-400"
    },
    {
      icon: MessageCircle,
      title: "Tire suas Dúvidas",
      text: "Suporte exclusivo por WhatsApp",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 relative bg-transparent border-t border-white/5" id="como-funciona">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
            Como vai <span className="text-brand-neon">Funcionar</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-neon to-brand-accent rounded-full mx-auto"></div>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {items.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-brand-neon/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-brand-neon/30 transition-all duration-300 hover:-translate-y-2">
                <div className={`p-4 rounded-full bg-black/40 border border-white/5 mb-6 ${item.color} shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso Importante */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-brand-neon/10 via-brand-neon/5 to-transparent border-l-4 border-brand-neon p-6 rounded-r-xl backdrop-blur-md flex gap-4 items-start">
            <AlertCircle className="text-brand-neon shrink-0 mt-1" size={24} />
            <div>
              <p className="text-gray-200 text-lg leading-relaxed">
                <span className="font-bold text-brand-neon block mb-1">Flexibilidade para você:</span>
                Lembrando que você pode garantir a sua vaga agora e fazer a aula nas próximas turmas em datas marcadas pela equipe do Professor.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogisticsSection;