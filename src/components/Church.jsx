import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Church = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }

    window.addEventListener('resize', () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    });

    return () => window.removeEventListener('resize', () => {});
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'center center',
        scrub: 1.5,
        markers: false
      }
    });

    tl.to(image, { y: '80px' }, 0)
      .to(content, { y: '-30px' }, 0);

    return () => tl.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="church-section"
      className="relative w-full max-w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#F2E8DA] to-[#EBC7C7] overflow-hidden"
    >
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          ref={imageRef}
          src="/kirke.jpg"
          alt="Oddernes Kirke"
          className="h-full w-auto"
          loading="lazy"
          width="1200"
          height="800"
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
            willChange: 'transform',
            maxHeight: '100%',
            maxWidth: '100%'
          }}
        />
      </div>

      <div ref={contentRef} className="relative z-10 backdrop-blur-xl bg-white/20 border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] p-8 md:p-12 rounded-lg max-w-sm md:max-w-md text-center mx-auto transition-all duration-300">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
          VIELSEN
        </h2>

        <p className="font-montserrat italic text-slate-900 mb-4 text-lg font-semibold drop-shadow-lg">
          Spenningen venter i vakre Oddernes Kirke på Lund.
        </p>

        <div className="my-6 space-y-2">
          <p className="font-cinzel text-xl">
            <span className="text-slate-900 font-bold drop-shadow-lg">
              23. Mai 2026 • Kl. 14:30
            </span>
          </p>
          <p className="text-sm italic text-slate-900 font-semibold drop-shadow-lg">(Dørene åpnes 14:10)</p>
        </div>

        <div className="my-6 font-montserrat text-slate-900 space-y-1 font-semibold drop-shadow-lg">
          <p>Adresse:</p>
          <p>Jegersbergveien 2, 4630 Kristiansand S</p>
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
