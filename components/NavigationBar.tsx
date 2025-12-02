import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const navItems = [
    "A Aula",
    "O Que Aprender",
    "Oportunidades",
    "Prof. José Miguel",
    "Inscrição"
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-darker/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-white uppercase tracking-wide">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-brand-neon transition-colors">
              <a href={`#${item.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;