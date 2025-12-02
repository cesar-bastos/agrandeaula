import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-brand-wine via-red-900 to-brand-wine text-white py-2 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <p className="relative z-10 font-bold text-xs md:text-sm uppercase tracking-widest">
        A Reforma Tributária já começou. E ela não vai esperar ninguém.
      </p>
    </div>
  );
};

export default TopBanner;