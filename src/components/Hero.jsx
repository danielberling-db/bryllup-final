import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Initial fade-in for text only (not scroll-based)
    gsap.fromTo(textRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full max-w-full m-0 overflow-hidden flex flex-col items-center justify-center min-h-[85vh] md:min-h-0 pt-[180px] md:pt-28 pb-0 bg-transparent">
      {/* Hovedbilde - Starter fra toppen, skinner gjennom header */}
      <div className="relative z-10 flex items-center justify-center mb-2 md:mb-8 px-8 md:px-6">
        <div className="relative w-full max-w-[1000px] rounded-[24px] shadow-2xl overflow-hidden">
          <div className="relative overflow-hidden">
            <img 
              src="/aaker.jpg" 
              alt="Remine & Daniel" 
              className="w-full max-h-[60vh] object-cover hero-pulse" 
              loading="eager"
              style={{
                willChange: 'transform',
                opacity: 1,
                transition: 'none',
                transformOrigin: 'center'
              }}
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2E8DA] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Typography Layer - Delt over to linjer */}
      <div ref={textRef} className="relative z-10 text-center flex flex-col items-center px-8 md:px-6 -mt-2 md:mt-0">
        <h1
          className="font-cinzel font-black drop-shadow-lg mb-2 md:mb-4 text-5xl md:text-8xl leading-tight"
          style={{
            background: 'linear-gradient(90deg, #B76E79 0%, #C5A059 50%, #B76E79 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'flow 8s linear infinite',
            letterSpacing: '0.05em'
          }}
        >
          <div>REMINE</div>
          <div className="flex items-baseline justify-center gap-2">
            <span>&</span>
            <span>DANIEL</span>
          </div>
        </h1>
        <p 
          className="font-vibes text-lg md:text-xl lg:text-3xl"
          style={{
            color: '#8B6914',
            fontWeight: 500,
            textShadow: '0 2px 8px rgba(139, 105, 20, 0.3)'
          }}
        >
          23 - 05 - 2026 • Kristiansand
        </p>
      </div>
    </section>
  );
};

export default Hero;
