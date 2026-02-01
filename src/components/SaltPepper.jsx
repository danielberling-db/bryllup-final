import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SaltPepper = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: '+=15',
      rotation: '+=1.5',
      scale: 1.02,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section className="relative w-full m-0 flex flex-col items-center justify-center pt-0 pb-12 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#EBC7C7] to-[#EBC7C7] overflow-hidden">

      <div className="relative z-10 flex flex-col items-center">
        <div
          ref={imageRef}
          className="w-[50vw] md:w-[30vw] max-w-md aspect-square bg-gray-200 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden"
        >
          <img src="/saltpepper.jpg" alt="Salt & Pepper" className="w-full h-full object-cover" loading="lazy" width="400" height="400" />
        </div>

        <h2
          className="mt-8 text-4xl md:text-6xl font-['Cinzel_Decorative'] text-center px-4"
          style={{
            background: 'linear-gradient(to right, #E9967A, #B76E79, #E9967A)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'blur(0.3px)',
            textShadow: '0 2px 4px rgba(183, 110, 121, 0.2)'
          }}
        >
          Størst av alt er kjærligheten
        </h2>
        <p className="text-sm font-montserrat text-deep-charcoal/60 mt-2">(1. Korinter 13)</p>
      </div>
    </section>
  );
};

export default SaltPepper;
