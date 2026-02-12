import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Heart, Camera, Cake, Sparkles, Wine, Music, Mic2, Coffee, Users, Sparkles as SparklesIcon, Mic2 as Mic2Icon, Cake as CakeIcon, Disc3, Figma, Music as MusicIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { time: "10:00", title: "Sightseeing", desc: "Kristiansand sentrum for de som vil", side: "left", icon: MapPin },
  { time: "14:30", title: "Vielse", desc: "Oddernes Kirke", side: "right", highlight: true, icon: Heart },
  { time: "15:15", title: "Felles fotografering", desc: "Familie og venner", side: "left", icon: Camera },
  { time: "15:45", title: "Dørene Åpnes", desc: "Gjestene trekker inn", side: "right", icon: Users },
  { time: "16:00", title: "Stor Festmiddag", desc: "Toastmastere åpner kvelden", side: "left", highlight: true, icon: Wine },
  { time: "16:30", title: "Taler", desc: "Kveldens første runde med gode ord", side: "right", icon: Mic2 },
  { time: "17:00", title: "Leker", desc: "Aktiviteter som løser opp stemningen", side: "left", icon: Sparkles },
  { time: "18:00", title: "Garden Party", desc: "Hyggelige aktiviteter og mingling utendørs", side: "right", icon: SparklesIcon },
  { time: "18:15", title: "Kaffetid", desc: "En liten pustepause med påfyll", side: "left", icon: Coffee },
  { time: "18:30", title: "Kakeskjæring Utendørs", desc: "Dagens første søte høydepunkt", side: "right", highlight: true, icon: Cake },
  { time: "19:30", title: "Underholdning", desc: "Gjestene trekker inn igjen", side: "left", icon: Music },
  { time: "20:30", title: "Kakebordet", desc: "Dessert og kaker serveres", side: "right", icon: CakeIcon },
  { time: "21:00", title: "Mingling", desc: "Barna reiser hjem", side: "left", icon: Users },
  { time: "21:30", title: "Taler", desc: "Flere varme ord til brudeparet", side: "right", icon: Mic2Icon },
  { time: "22:30", title: "Mer underholdning", desc: "Festen fortsetter", side: "left", icon: Disc3 },
  { time: "23:00", title: "Brudedansen", desc: "Kveldens mest romantiske øyeblikk", side: "right", highlight: true, icon: Figma },
  { time: "00:00", title: "Premier & Avslutning", desc: "Kvelden rundes av med premiering", side: "left", highlight: true, icon: MusicIcon },
];

const memoryImages = [
  '/hero.jpg',
  '/aaker.jpg',
  '/kiss.jpg',
  '/kirke.jpg',
  '/saltpepper.jpg',
  '/citybox.jpg',
  '/hands.jpg',
  '/ring.jpg',
  '/bunad.jpg',
  '/leken.jpg'
];

const Timeline = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const path = svgRef.current.querySelector("path");
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
        markers: false
      }
    });

    const items = containerRef.current.querySelectorAll('[data-timeline-item]');
    items.forEach((item, i) => {
      const anchor = item.querySelector('[data-anchor]');
      if (anchor) {
        gsap.fromTo(anchor,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: item,
              start: "top 60%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      const textBox = item.querySelector('[data-text-box]');
      if (textBox) {
        gsap.fromTo(textBox,
          { x: events[i].side === 'left' ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 60%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      const memoryEl = item.querySelector('[data-memory-image]');
      if (memoryEl) {
        gsap.fromTo(
          memoryEl,
          { scale: 0, opacity: 0, y: events[i].side === 'left' ? 16 : -16 },
          {
            scale: 1,
            opacity: 0.7,
            y: events[i].side === 'left' ? -4 : 4,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          }
        );

        // Subtle floating loop
        gsap.to(memoryEl, {
          y: '+=8',
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="timeline-section" className="relative w-full max-w-full m-0 flex flex-col items-center justify-center py-10 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative" ref={containerRef}>
        <h2 className="text-center font-vibes text-7xl md:text-8xl mb-20" style={{
          background: 'linear-gradient(135deg, #B76E79, #C5A059)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Bryllupet
        </h2>

        <svg
          ref={svgRef}
          className="absolute top-32 left-1/2 -translate-x-1/2 w-1 md:w-2 h-[120%] z-0 overflow-visible"
          viewBox="0 0 100 3000"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M50,0 Q30,150 50,300 Q70,450 50,600 Q30,750 50,900 Q70,1050 50,1200 Q30,1350 50,1500 Q70,1650 50,1800 Q30,1950 50,2100 Q70,2250 50,2400 Q30,2550 50,2700 Q70,2850 50,3000"
            fill="none"
            stroke="#C5A059"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 space-y-24 md:space-y-32">
          {events.map((evt, i) => {
            const IconComponent = evt.icon;
            const isLeft = evt.side === 'left';
            const imgIndex = i % memoryImages.length;
            const prevImgIndex = i === 0 ? -1 : (i - 1) % memoryImages.length;
            const safeIndex = imgIndex === prevImgIndex ? (imgIndex + 3) % memoryImages.length : imgIndex;
            const imageSrc = memoryImages[safeIndex];

            return (
              <div
                key={i}
                data-timeline-item
                className="relative w-full"
              >
                <div
                  className={`
                    w-full flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''}
                    items-stretch md:items-center gap-6 md:gap-8 relative z-10 px-4 sm:px-6
                  `}
                >
                  {/* Tekstboks – full bredde på mobil */}
                  <div className="flex-1 w-full" data-text-box>
                    <div className={`w-full p-6 rounded-xl backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer max-w-md mx-auto ${
                      evt.highlight
                        ? 'bg-white/85 border-antique-gold/40 ring-2 ring-antique-gold/20'
                        : 'bg-white/70 border-white/40'
                    }`}>
                      <div className="text-sm font-cinzel tracking-wider text-antique-gold/60 mb-1 uppercase">
                        {evt.time}
                      </div>
                      <h3 className="font-cinzel text-xl md:text-2xl font-bold text-deep-charcoal mb-2">
                        {evt.title}
                      </h3>
                      <p className="text-gray-600 font-montserrat text-sm italic">
                        {evt.desc}
                      </p>
                    </div>
                  </div>

                  {/* Ikon-anker – ligger over tidslinjen i midten */}
                  <div className="flex-shrink-0 flex items-center justify-center" data-anchor>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-2 transition-all ${
                      evt.highlight
                        ? 'bg-gradient-to-br from-antique-gold to-yellow-400 border-yellow-500 shadow-antique-gold/30'
                        : 'bg-white/80 border-antique-gold/30'
                    }`}>
                      <IconComponent size={32} className={evt.highlight ? 'text-white' : 'text-antique-gold'} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Memory-bilde – egen rad på mobil, venstre/høyre justert */}
                  <div className="flex-1 w-full flex justify-start md:justify-start">
                    <div
                      data-memory-image
                      className={`
                        relative
                        ${isLeft ? 'self-start md:self-auto' : 'self-end md:self-auto'}
                      `}
                    >
                      <div className="w-24 h-24 md:w-24 md:h-24 rounded-xl border border-white/80 bg-white/80 shadow-xl overflow-hidden aspect-square">
                        <img
                          src={imageSrc}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
