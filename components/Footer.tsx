import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-2">A GRANDE AULA</h4>
            <p className="text-gray-500 text-sm">Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 text-xs text-gray-500 uppercase text-center md:text-right">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;