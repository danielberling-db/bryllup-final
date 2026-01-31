import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { Menu, X } from 'lucide-react';
import ScrollGradient from './components/ScrollGradient';
import Hero from './components/Hero';
import Intro from './components/Intro';
import SaltPepper from './components/SaltPepper';
import Church from './components/Church';
import Timeline from './components/Timeline';
import Mosby from './components/Mosby';
import Logistics from './components/Logistics';
import GiftReveal from './components/GiftReveal';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-23T14:30:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { label: 'HJEM', href: '#' },
    { label: 'VIELSEN', href: '#church-section' },
    { label: 'TIDSPLAN', href: '#timeline-section' },
    { label: 'KVELDEN FØR', href: '#mosby-section' },
    { label: 'OVERNATTING', href: '#logistics-section' },
    { label: 'ØNSKELISTE', href: '#gift-section' },
    { label: 'SPØRSMÅL', href: '#faq-section' },
    { label: 'SVAR', href: '#rsvp-section' }
  ];

  const handleMenuClick = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <ReactLenis root>
      {/* Kromatisk Tidsreise - Dynamic Scroll Gradient */}
      <ScrollGradient />

      <main className="flex flex-col w-full m-0 p-0 space-y-0">
        {/* Navigation with Countdown */}
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-antique-gold/20">
           <div className="flex items-center flex-shrink-0">
             <a
               href="#rsvp-section"
               className="bg-gradient-to-r from-antique-gold to-[#FCF6BA] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2 rounded-full font-bold shadow-lg marshmallow-transform font-cinzel text-xs sm:text-sm md:text-base whitespace-nowrap"
             >
               SVAR
             </a>
           </div>

           {/* Countdown - Mindre på mobil, sentrert */}
           <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 md:gap-3">
             {[
               { label: 'DAGER', value: timeLeft.days },
               { label: 'TIMER', value: timeLeft.hours },
               { label: 'MIN', value: timeLeft.minutes },
               { label: 'SEK', value: timeLeft.seconds }
             ].map((item, index) => (
               <React.Fragment key={item.label}>
                 {index > 0 && <span className="text-[#D4AF37] font-cinzel text-xs sm:text-sm md:text-xl font-bold mx-0.5 sm:mx-1">:</span>}
                 <div className="text-center bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/40 rounded sm:rounded-lg px-1.5 sm:px-2 md:px-4 py-1 sm:py-1.5 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                   <div 
                     className="font-cinzel text-xs sm:text-sm md:text-3xl font-black tracking-tight"
                     style={{
                       background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                       WebkitBackgroundClip: 'text',
                       backgroundClip: 'text',
                       color: 'transparent'
                     }}
                   >
                     {String(item.value).padStart(2, '0')}
                   </div>
                   <div className="text-[6px] sm:text-[7px] md:text-[10px] font-montserrat text-[#D4AF37] font-semibold tracking-wider uppercase mt-0.5 sm:mt-1">{item.label}</div>
                 </div>
               </React.Fragment>
             ))}
           </div>

           <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0">
             <button
               onClick={() => setMenuOpen(!menuOpen)}
               className="p-1.5 sm:p-2 text-deep-charcoal hover:text-antique-gold marshmallow-transform"
               aria-label="Toggle menu"
             >
               {menuOpen ? <X size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" /> : <Menu size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />}
             </button>
           </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full md:w-96 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleMenuClick(item.href)}
                    className="w-full text-left font-cinzel text-xl font-bold text-deep-charcoal hover:text-antique-gold marshmallow-ease py-2 border-b border-gray-200 hover:border-antique-gold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}


        {/* Hero Section */}
        <Hero />

        {/* Intro - The Spark */}
        <Intro />

        {/* Salt & Pepper Interlude */}
        <SaltPepper />

        {/* Church Section */}
        <Church />

        {/* Timeline */}
        <Timeline />

        {/* Mosby - Kvelden før */}
        <Mosby />

        {/* Logistics Cards */}
        <Logistics />

        {/* Gift Reveal (3D) */}
        <GiftReveal />

        {/* FAQ Section */}
        <FAQ />

        {/* RSVP */}
        <RSVP />

        {/* Footer */}
        <Footer />
      </main>
    </ReactLenis>
  );
}
export default App;
