import React from 'react';

// Fullscreen intro overlay that welcomes the guest before the main site fades in
const Intro = ({ show }) => {
  return (
    <div
      className={`
        fixed inset-0 z-[60] flex items-center justify-center
        transition-opacity duration-700 ease-out
        ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Glassy backdrop */}
      <div className="absolute inset-0 bg-white/45 backdrop-blur-3xl" />

      {/* Centered welcome text */}
      <div className="relative w-full max-w-[90vw] mx-auto px-4 text-center break-words intro-fade-zoom">
        <h1
          className="
            font-cinzel font-black tracking-widest uppercase leading-tight
            text-[clamp(2rem,10vw,5rem)]
            bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300
            bg-clip-text text-transparent drop-shadow-sm
          "
        >
          {/* Mobil: to linjer */}
          <span className="block md:hidden">
            BRYLLUPS
          </span>
          <span className="block md:hidden">
            INVITASJON
          </span>
          {/* Tablet/PC: én linje */}
          <span className="hidden md:inline">
            BRYLLUPSINVITASJON
          </span>
        </h1>
        <p className="mt-4 font-montserrat text-[clamp(0.875rem,3vw,1.5rem)] text-deep-charcoal/80 tracking-[0.25em] uppercase">
          Svarfrist 1. mars
        </p>
      </div>
    </div>
  );
};

export default Intro;
