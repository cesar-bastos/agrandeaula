import React from 'react';
import TopBanner from './components/TopBanner';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import UnlockSection from './components/UnlockSection';
import BenefitsSection from './components/BenefitsSection';
import MidCTASection from './components/MidCTASection';
import AuthoritySection from './components/AuthoritySection';
import LogisticsSection from './components/LogisticsSection';
import FinalCallSection from './components/FinalCallSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-brand-accent selection:text-black relative">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001E0C] via-[#020617] to-[#001207]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px]"></div>
        {/* Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-neon/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10">
        <TopBanner />
        <HeroSection />
        <MarqueeStrip />
        {/* NavigationBar removed as per request */}
        <UnlockSection />
        <BenefitsSection />
        <MidCTASection />
        <AuthoritySection />
        <LogisticsSection />
        <FinalCallSection />
        <FAQSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;