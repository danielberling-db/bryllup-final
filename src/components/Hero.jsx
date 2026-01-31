import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const heroImgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1 }
    });

    tl.to(heroImgRef.current, { scale: 0.8, y: 100, opacity: 0 }, 0);

    gsap.fromTo(textRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full m-0 overflow-hidden flex flex-col items-center justify-center py-8 bg-gradient-to-b from-[#FFFDF5] to-[#F2E8DA]">
      {/* Hovedbilde - Sentrert øverst */}
      <div className="relative z-10 flex items-center justify-center mb-6 md:mb-8">
        <div ref={heroImgRef} className="relative w-full max-w-[1000px] rounded-[24px] shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02]">
          <div className="relative overflow-hidden">
            <img src="/aaker.jpg" alt="Remine & Daniel" className="w-full max-h-[60vh] object-cover" loading="eager" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2E8DA] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Typography Layer - Under bildet */}
      <div ref={textRef} className="relative z-10 text-center flex flex-col items-center px-4">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-black drop-shadow-lg mb-3 md:mb-4"
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
          REMINE & DANIEL
        </h1>
        <p 
          className="font-vibes text-xl md:text-2xl lg:text-3xl"
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
