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
      <div className="relative max-w-3xl mx-auto px-8 text-center intro-fade-zoom">
        <h1
          className="
            font-cinzel font-black tracking-[0.25em] uppercase
            text-3xl sm:text-4xl md:text-5xl
            bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300
            bg-clip-text text-transparent drop-shadow-sm
          "
        >
          BRYLLUPSINVITASJON
        </h1>
        <p className="mt-4 font-montserrat text-xs sm:text-sm md:text-base text-deep-charcoal/80 tracking-[0.25em] uppercase">
          Svarfrist 1. mars
        </p>
      </div>
    </div>
  );
};

export default Intro;
