import React from 'react';

const Church = () => {
  return (
    <section
      id="church-section"
      className="relative w-full max-w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src="/kirke.jpg"
          alt="Oddernes Kirke"
          className="h-full w-auto"
          loading="lazy"
          width="1200"
          height="800"
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
            maxHeight: '100%',
            maxWidth: '100%'
          }}
        />
      </div>

      <div className="relative z-10 backdrop-blur-sm bg-white/20 border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] p-8 md:p-12 rounded-lg max-w-sm md:max-w-md text-center mx-auto transition-all duration-300">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          VIELSEN
        </h2>

        <p className="font-montserrat italic mb-4 text-lg font-semibold bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Spenningen venter i vakre Oddernes Kirke på Lund.
        </p>

        <div className="my-6 space-y-2">
          <p className="font-cinzel text-xl">
            <span className="font-bold bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              23. Mai 2026 • Kl. 14:30
            </span>
          </p>
          <p className="text-sm italic font-semibold bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            (Dørene åpnes 14:10)
          </p>
        </div>

        <div className="my-6 font-montserrat space-y-1 font-semibold bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <p>Adresse:</p>
          <p>Jegersbergveien 2, 4630 Kristiansand</p>
          <p className="text-sm mt-2">
            Det er gode parkeringsmuligheter på stedet,<br />så gjerne kom tidlig.
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/brExvDymDWkjFs4cA?g_st=ipc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-antique-gold to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-cinzel tracking-wider"
        >
          SE KART
        </a>
      </div>
    </section>
  );
};

export default Church;
