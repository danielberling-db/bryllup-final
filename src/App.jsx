import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { Menu, X } from 'lucide-react';
import ScrollGradient from './components/ScrollGradient';
import Hero from './components/Hero';
import Intro from './components/Intro';
import SaltPepper from './components/SaltPepper';
import Church from './components/Church';
import Timeline from './components/Timeline';
import Logistics from './components/Logistics';
import GiftReveal from './components/GiftReveal';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
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

  // Intro overlay timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'HJEM', href: '#' },
    { label: 'VIELSEN', href: '#church-section' },
    { label: 'TIDSPLAN', href: '#timeline-section' },
    { label: 'OVERNATTING', href: '#logistics-section' },
    { label: 'ØNSKELISTE', href: '#gift-section' },
    { label: 'SPØRSMÅL', href: '#faq-section' },
    { label: 'SVAR', href: 'https://forms.gle/g58x6q98UHBacM6z7', external: true }
  ];

  const handleMenuClick = (href, external) => {
    setMenuOpen(false);
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
    }
  };

  return (
    <ReactLenis root>
      {/* Kromatisk Tidsreise - Dynamic Scroll Gradient */}
      <ScrollGradient />

      {/* Soft welcome overlay */}
      <Intro show={showIntro} />
      <main
        className={`
          flex flex-col w-full max-w-full m-0 p-0 space-y-0 overflow-x-hidden
          transition-opacity duration-700 ease-out
          ${showIntro ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {/* Navigation with Countdown - Sunset Gradient Header */}
        <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-8 pt-4 md:pt-4 py-2 md:py-3 transition-all duration-300 backdrop-blur-md border-b border-antique-gold/20" style={{
          background: `linear-gradient(135deg, rgba(255, 182, 193, ${scrollY > 50 ? 0.85 : 0.4}), rgba(255, 140, 66, ${scrollY > 50 ? 0.85 : 0.4}), rgba(212, 175, 55, ${scrollY > 50 ? 0.85 : 0.4}))`
        }}>
           {/* Top Row: SVAR, Countdown, Menu */}
           <div className="flex justify-between w-full items-center">
             <div className="flex items-center flex-shrink-0 z-10">
               <a
                 href="https://forms.gle/g58x6q98UHBacM6z7"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-gradient-to-r from-antique-gold to-[#FCF6BA] text-white px-4 md:px-6 py-2.5 md:py-2.5 rounded-full font-semibold shadow-lg marshmallow-transform font-cinzel text-xs md:text-sm whitespace-nowrap flex flex-col items-center leading-tight"
               >
                 <span>SVAR</span>
                 <span className="text-[10px] font-normal opacity-90">(1. mars)</span>
               </a>
             </div>

             {/* Countdown - Klikkbar, sentrert */}
             <a 
               href="https://www.onskelister.no/liste?id=Wn6HUmvekcuEJKmi63ky"
               target="_blank"
               rel="noopener noreferrer"
               className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-0.5 md:gap-3 z-0 cursor-pointer"
             >
             {[
               { label: 'DAGER', value: timeLeft.days },
               { label: 'TIMER', value: timeLeft.hours },
               { label: 'MIN', value: timeLeft.minutes },
               { label: 'SEK', value: timeLeft.seconds }
             ].map((item, index) => (
               <React.Fragment key={item.label}>
                   {index > 0 && <span className="text-[#D4AF37] font-cinzel text-xs md:text-xl font-bold mx-0.5 md:mx-1">:</span>}
                   <div className="text-center bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/40 rounded md:rounded-lg px-1.5 md:px-4 py-1 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                   <div 
                       className="font-cinzel text-sm md:text-4xl font-black tracking-tight"
                     style={{
                       background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                       WebkitBackgroundClip: 'text',
                       backgroundClip: 'text',
                       color: 'transparent'
                     }}
                   >
                     {String(item.value).padStart(2, '0')}
                   </div>
                     <div className="text-[6px] md:text-[10px] font-montserrat text-[#D4AF37] font-semibold tracking-wider uppercase mt-0.5 md:mt-1">{item.label}</div>
                 </div>
               </React.Fragment>
             ))}
             </a>

             <div className="flex items-center justify-end flex-shrink-0 z-10">
               <button
                 onClick={() => setMenuOpen(!menuOpen)}
                 className="p-3 md:p-4 text-deep-charcoal hover:text-antique-gold marshmallow-transform flex items-center justify-center"
                 aria-label="Toggle menu"
               >
                 {menuOpen ? <X size={36} className="md:w-14 md:h-14" /> : <Menu size={36} className="md:w-14 md:h-14" />}
               </button>
             </div>
           </div>

           {/* Bottom Row: GI EN GAVE knapp */}
           <div className="flex justify-center mt-3 md:mt-4">
             <a
               href="https://www.onskelister.no/liste?id=Wn6HUmvekcuEJKmi63ky"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 font-cinzel text-sm md:text-lg whitespace-nowrap"
             >
               GI EN GAVE
             </a>
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
                    onClick={() => handleMenuClick(item.href, item.external)}
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

        {/* Salt & Pepper Interlude */}
        <SaltPepper />

        {/* Church Section */}
        <Church />

        {/* Timeline */}
        <Timeline />


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
