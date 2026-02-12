import React from 'react';

const RSVP = () => {
  return (
    <section id="rsvp-section" className="w-full max-w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 overflow-hidden relative bg-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative bg-[#Fdfbf7] shadow-2xl rounded-lg p-8 md:p-12 border border-gray-200" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/watercolor.png")'}}>
          {/* Postkort-stempel øverst til venstre */}
          <div className="absolute top-4 left-4 -rotate-12 flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
              <img
                src="/ring.jpg"
                alt="Poststempel"
                loading="lazy"
                className="w-full h-full object-cover opacity-60"
                style={{ filter: 'grayscale(100%) contrast(1.25)', mixBlendMode: 'multiply' }}
              />
            </div>
            <span className="text-[10px] md:text-xs font-montserrat font-semibold tracking-widest uppercase text-deep-charcoal drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              ODDERNES KIRKE<br />23.05.2026
            </span>
          </div>

          <div className="mb-8">
            <p className="font-vibes text-4xl md:text-5xl text-blue-900 mb-6">Fra: Remine & Daniel</p>
          </div>

          {/* Hovedmotiv-bilde over "Kommer du?" */}
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-white/70">
              <img
                src="/ring.jpg"
                alt="Bryllupsdetalj"
                loading="lazy"
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-antique-gold mb-8">KOMMER DU?</h2>
          
          <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Vi gleder oss til å dele denne spesielle dagen med deg! 
            Klikk på knappen under for å svare på invitasjonen.
          </p>
          
          <a
            href="https://forms.gle/g58x6q98UHBacM6z7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 w-full md:w-auto px-10 md:px-14 py-4 md:py-6 bg-gradient-to-r from-antique-gold to-[#FFD700] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-cinzel tracking-widest text-lg md:text-xl"
                >
            SVAR PÅ INVITASJONEN
          </a>
        </div>
        </div>
    </section>
  );
};

export default RSVP;
