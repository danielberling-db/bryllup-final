import React, { useState, useRef } from 'react';

const Logistics = () => {
  const [copied, setCopied] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardsRef = useRef([]);

  const handleMouseMove = (index, e) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (e.clientY - centerY) * 0.5;
    const rotateY = -(e.clientX - centerX) * 0.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
  };

  const handleCityboxClick = () => {
    navigator.clipboard.writeText('RemineogDaniel');
    setCopied(true);
    setTimeout(() => {
      window.open('https://citybox.no', '_blank');
    }, 500);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp-section');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const accommodationField = document.querySelector('select[name="accommodation"]');
        if (accommodationField) {
          accommodationField.focus();
          accommodationField.style.animation = 'pulse 0.5s ease-in-out 3';
        }
      }, 1000);
    }
  };

  return (
    <section id="logistics-section" className="w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#F9B89B] via-[#FFF5F0] to-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-4 bg-gradient-to-r from-antique-gold to-[#FFD700] bg-clip-text text-transparent">
          Ingen fest uten overnatting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* CITYBOX CARD */}
          <div
            ref={(el) => cardsRef.current[0] = el}
            onClick={handleCityboxClick}
            onMouseMove={(e) => handleMouseMove(0, e)}
            onMouseLeave={() => handleMouseLeave(0)}
            className="cursor-pointer group"
            style={{ transition: 'transform 0.1s ease-out' }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-48 bg-deep-charcoal flex items-center justify-center relative overflow-hidden">
                <h3 className="text-neon-pink font-bold text-4xl tracking-widest z-10"
                    style={{
                      textShadow: '0 0 20px rgba(255, 20, 147, 0.8), 0 0 40px rgba(255, 20, 147, 0.4)'
                    }}>
                  CITYBOX
                </h3>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-transparent"></div>
              </div>

              <div className="p-6 text-center">
                <p className="font-montserrat text-gray-700 mb-4 leading-relaxed">
                  Ingen skal dra hjem! Sentralt i sentrum. 40% rabattkoder inkludert i prisen.
                </p>

                <div className="my-4 p-4 bg-organic-almond rounded-lg">
                  <p className="font-bold text-deep-charcoal text-sm mb-2">RABATTKODE:</p>
                  <p className="text-antique-gold font-cinzel text-2xl font-bold">RemineogDaniel</p>
                </div>

                <button className="w-full border-2 border-neon-pink text-neon-pink px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-neon-pink hover:text-white font-montserrat">
                  {copied ? 'KODEN ER KOPIERT! ✓' : 'KOPIER KODE & GÅ TIL BOOKING'}
                </button>
              </div>
            </div>
          </div>

          {/* SOVESAL CARD */}
          <div
            ref={(el) => cardsRef.current[1] = el}
            onClick={scrollToRSVP}
            onMouseMove={(e) => handleMouseMove(1, e)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="cursor-pointer group"
            style={{ transition: 'transform 0.1s ease-out' }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/hus.jpg" alt="Sovesal & Hus" className="w-full h-full object-cover" loading="lazy" width="400" height="192" />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-cinzel text-2xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(90deg, #6495ED 0%, #FFB6C1 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                  SOVESAL & HUS
                </h3>

                <p className="font-montserrat text-gray-700 mb-4 leading-relaxed">
                  Vi tilbyr rimelig overnatting for single og ungdommer! 200,- per pers/natt. Bestilles i registreringen.
                </p>

                <button className="w-full border-2 border-antique-gold text-antique-gold px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-antique-gold hover:text-white font-montserrat">
                  GÅ TIL RSVP
                </button>
              </div>
            </div>
          </div>

          {/* AIRBNB CARD */}
          <div
            ref={(el) => cardsRef.current[2] = el}
            onMouseMove={(e) => handleMouseMove(2, e)}
            onMouseLeave={() => handleMouseLeave(2)}
            className="group"
            style={{ transition: 'transform 0.1s ease-out' }}
          >
            <a
              href="https://www.airbnb.no/s/Kristiansand/homes?checkin=2026-05-23&checkout=2026-05-24"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/airbnb.jpg" alt="Airbnb" className="w-full h-full object-cover" loading="lazy" width="400" height="192" />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-cinzel text-2xl font-bold text-[#FF5A5F] mb-2">
                  AIRBNB
                </h3>

                <p className="font-montserrat text-gray-700 mb-4 leading-relaxed">
                  Ønsker dere noe eget? Det finnes mange gode Airbnb-muligheter i nærheten.
                </p>

                <button className="w-full border-2 border-[#FF5A5F] text-[#FF5A5F] px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#FF5A5F] hover:text-white font-montserrat">
                  SE ALTERNATIVER
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
