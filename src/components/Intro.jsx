import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('.word');

    gsap.fromTo(words,
      { opacity: 0, scale: 0.6, rotationX: -45, y: 30 },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.04,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "bottom 60%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const text = [
    "Miss Andersen & Herr Berling",
    "To personligheter. Én stor opplevelse. Liv, latter og litt galskap.",
    "Der en sørlending møter en østlending. Kanskje en tilfeldighet?",
    "Mest sannsynlig skjebnen.",
    "Først et annet kontinent. Så en enkel date. Nå det store Øyeblikket.",
    '"Bryllupet er i gang!"'
  ];

  return (
    <section className="relative w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 bg-gradient-to-b from-[#F2E8DA] to-[#EBC7C7] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div ref={textRef} className="space-y-6">
          {text.map((line, lineIndex) => (
            <p
              key={lineIndex}
              className="text-2xl md:text-4xl font-montserrat font-medium leading-relaxed"
              style={{
                background: 'linear-gradient(45deg, #B76E79, #FFD700, #E9967A)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'flow 8s linear infinite'
              }}
            >
              {line.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="word inline-block mr-2">
                  {word}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
