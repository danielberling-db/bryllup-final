import React from 'react';

const Mosby = () => {
  const polaroids = [
    {
      image: '/huset.jpg',
      caption: 'Washington DC The White House',
      font: 'cinzel',
      color: 'gold'
    },
    {
      image: '/bunad.jpg',
      caption: 'Vil du være med meg på kjempefest?',
      font: 'bubblegum',
      color: 'pink'
    },
    {
      image: '/leken.jpg',
      caption: 'Stemningsrapport',
      font: 'bubblegum',
      color: 'charcoal'
    }
  ];

  return (
    <section id="mosby-section" className="relative w-full m-0 flex flex-col items-center justify-center py-20 md:py-32 bg-gradient-to-b from-[#EBC7C7] to-[#F9B89B] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-charcoal mb-4"
              style={{
                WebkitTextStroke: '1px rgba(218,165,32, 0.3)'
              }}>
            Kvelden før kvelden
          </h2>

          <div
            className="font-montserrat text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{
              fontWeight: 900,
              background: 'linear-gradient(45deg, #2F4F4F 30%, #D4AF37 50%, #2F4F4F 70%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 20px rgba(233, 150, 122, 0.4)',
              animation: 'flow 8s linear infinite'
            }}
          >
            <p className="mb-4">
              "Før bryllupsklokkene ringer, ønsker vi å samle våre kjære til en hyggelig kveld på Mosby.
            </p>
            <p className="mb-4">
              Målet for kvelden er lave skuldre, god mat og tid til mingling før den store feiringen.
            </p>
            <p className="mb-4">
              Det betyr mye for oss å starte helgen her, midt i omgivelsene fra Remines oppvekst.
            </p>
            <p>
              Vi håper dere vil være med å dele denne kvelden med oss."
            </p>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/JsZih5vv1J88Y49w6?g_st=ipc"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center cursor-pointer group">
            {polaroids.map((polaroid, index) => {
              const rotations = ['-3deg', '2deg', '-1.5deg'];
              const zIndexes = [1, 2, 1];

              return (
                <div
                  key={index}
                  className="relative bg-white p-4 pb-16 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:rotate-0 group-hover:shadow-2xl"
                  style={{
                    transform: `rotate(${rotations[index]})`,
                    zIndex: zIndexes[index],
                    filter: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im5vaXNlIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjwvc3ZnPg==)'
                  }}
                >
                  <div className="w-full aspect-[4/5] bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={polaroid.image} alt={polaroid.caption} className="w-full h-full object-cover" loading="lazy" width="400" height="500" />
                  </div>

                  <p
                    className={`text-center mt-4 ${
                      polaroid.font === 'cinzel' ? 'font-cinzel' : 'font-bubblegum'
                    } ${
                      polaroid.color === 'gold' ? 'bg-gradient-to-r from-antique-gold to-[#FFD700] bg-clip-text text-transparent' :
                      polaroid.color === 'pink' ? 'text-neon-pink' :
                      'text-deep-charcoal'
                    } text-sm md:text-base font-bold`}
                  >
                    {polaroid.caption}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center mt-8 font-montserrat text-deep-charcoal font-semibold">
            📍 Klikk for å åpne kart til Mosby Ringvei 56
          </p>
        </a>
      </div>
    </section>
  );
};

export default Mosby;
