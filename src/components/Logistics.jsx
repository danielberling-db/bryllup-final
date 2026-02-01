import React, { useState, useRef } from 'react';

const Logistics = () => {
  const [copied, setCopied] = useState(false);

  const handleCityboxClick = async () => {
    try {
      await navigator.clipboard.writeText('REMDAN30');
    setCopied(true);
    setTimeout(() => {
      window.open('https://citybox.no', '_blank');
    }, 500);
    setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      window.open('https://citybox.no', '_blank');
    }
  };


  return (
    <section id="logistics-section" className="w-full max-w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#F9B89B] via-[#FFF5F0] to-[#FFFFFF] overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-4 bg-gradient-to-r from-antique-gold to-[#FFD700] bg-clip-text text-transparent">
          Ingen fest uten overnatting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {/* CITYBOX CARD */}
          <div
            onClick={handleCityboxClick}
            className="cursor-pointer group"
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
                  Ingen skal dra hjem! Sentralt i sentrum. 30% rabattkoder inkludert i prisen.
                </p>

                <div className="my-4 p-4 bg-organic-almond rounded-lg">
                  <p className="font-bold text-deep-charcoal text-sm mb-2">RABATTKODE:</p>
                  <p className="text-antique-gold font-cinzel text-2xl font-bold">REMDAN30</p>
                </div>

                <button className="w-full border-2 border-neon-pink text-neon-pink px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-neon-pink hover:text-white font-montserrat">
                  {copied ? 'KODEN ER KOPIERT! ✓' : 'KOPIER KODE & GÅ TIL BOOKING'}
                </button>
              </div>
            </div>
          </div>

          {/* AIRBNB CARD */}
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
    </section>
  );
};

export default Logistics;
