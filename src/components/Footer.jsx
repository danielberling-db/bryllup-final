import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-23T14:30:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full m-0 flex flex-col items-center justify-center py-20 md:py-32 bg-[#FFFFFF] text-center overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFB88C 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
      </div>

      {/* Memory Image (Floating) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
        <div
          className="w-[30%] aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden"
          style={{
            maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite'
          }}
        >
          <img src="/aaker.jpg" alt="Memory" className="w-full h-full object-cover" loading="lazy" width="600" height="450" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2
          className="font-vibes text-6xl md:text-8xl mb-8 p-4"
          style={{
            background: 'linear-gradient(to right, #B76E79, #C5A059)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Vi gleder oss!
        </h2>

        <h3 className="font-cinzel text-deep-charcoal text-2xl md:text-3xl font-bold tracking-[0.3em] mb-12">
          REMINE & DANIEL
        </h3>

        <div className="mb-16 space-y-6">
          <p className="text-deep-charcoal/70 text-base font-montserrat tracking-wide">
            23. MAI 2026 • 14:30
          </p>
          <p className="text-deep-charcoal/60 text-sm font-montserrat">
            Oddernes Kirke, Kristiansand
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl p-8 mb-12 max-w-sm mx-auto">
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'DAGER', value: timeLeft.days },
              { label: 'TIMER', value: timeLeft.hours },
              { label: 'MIN', value: timeLeft.minutes },
              { label: 'SEK', value: timeLeft.seconds }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-cinzel text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-gold to-[#FFB88C] bg-clip-text text-transparent">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs font-montserrat text-deep-charcoal/60 mt-2 tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-deep-charcoal/50 text-xs font-montserrat tracking-wider">
          REMINE & DANIEL 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
