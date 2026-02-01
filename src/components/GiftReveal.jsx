import React from 'react';

const GiftReveal = () => {
  return (
    <section id="gift-section" className="relative w-full max-w-full m-0 flex flex-col items-center justify-center pt-24 md:pt-32 pb-12 md:pb-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF5F0] to-[#FFFFFF] overflow-visible">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-[#E8C4C8]">
          <h1 className="font-cinzel text-5xl md:text-8xl font-black mb-8 md:mb-12 text-center bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
              ØNSKELISTEN VÅR
            </h1>
          
          <h2 className="font-vibes text-4xl md:text-7xl mb-6 md:mb-10 text-[#C5A059] text-center">
              Kjære Gjester
            </h2>
          
          <div className="font-montserrat text-lg md:text-2xl leading-relaxed text-[#2C2C2C] space-y-6 mb-10 md:mb-12">
              <p>
                Vi er så utrolig spente på å begynne på vårt nye kapittel, og vi gleder oss til å bygge et ekte hjem – et sted fylt med minner, latter og varme. For å hjelpe oss med å fylle dette hjemmet, har vi satt sammen en liste over ting vi drømmer om for fremtiden.
              </p>
              <p>
                Tusen takk for at dere tenker på oss! Bare det å dele denne dagen med dere er den største gaven.
              </p>
            <p className="font-vibes text-3xl md:text-5xl text-[#B76E79] mt-8 md:mt-10 text-center">
                Varm hilsen<br />Remine & Daniel
              </p>
            </div>

          <div className="flex justify-center">
            <a
              href="https://www.onskelister.no/liste?id=Wn6HUmvekcuEJKmi63ky"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-8 md:px-14 py-4 md:py-6 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-300 hover:shadow-[0_15px_50px_rgba(197,160,89,0.5)] hover:scale-105 hover:from-[#D4AF37] hover:to-[#E8C870]"
            >
              <span className="font-montserrat font-bold text-white text-lg md:text-2xl">
                SE VÅR ØNSKELISTE
              </span>
              <span className="text-2xl md:text-3xl">🎁</span>
            </a>
          </div>
         </div>
      </div>
    </section>
  );
};

export default GiftReveal;
