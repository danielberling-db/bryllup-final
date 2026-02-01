import React from 'react';

const verses = [
  "Størst av alt er kjærligheten",
  "Kjærligheten utholder alt, tror alt, håper alt",
  "Vann kan ikke slukke kjærligheten",
  "Jeg har funnet den min sjel elsker",
  "Det Gud har sammenføyd, skal mennesker ikke skille",
  "La alt dere gjør, skje i kjærlighet",
  "Vi elsker fordi han elsket oss først",
  "Over alt dette, kle dere i kjærlighet",
  "Kjærligheten er tålmodig, kjærligheten er velvillig",
  "Elsk hverandre slik jeg har elsket dere",
  "Hvor du går, vil jeg gå",
  "To er bedre enn én",
  "En tråd spunnet av tre ryker ikke så fort",
  "Ingen frykt i kjærligheten",
  "Herren gjør deres kjærlighet rik",
  "Vær gode mot hverandre, vis medfølelse",
  "Jeg er min elskedes og min elskede er min",
  "Legg meg som et segl på ditt hjerte",
  "Nåde, barmhjertighet og fred være med oss",
  "Hold ekteskapet i ære"
];

const Marquee = ({ opacity = 0.02, color = "#87CEEB" }) => {
  const content = verses.join(" • ");

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-gradient-to-b from-transparent via-transparent to-transparent max-w-full">
        <div className="absolute inset-0 flex flex-col justify-around max-w-full">
          {[0, 1, 2, 3, 4].map((row) => (
            <div
              key={row}
              className="whitespace-nowrap max-w-full overflow-hidden"
              style={{
                animation: row % 2 === 0 ? 'marquee 120s linear infinite' : 'marquee-reverse 120s linear infinite',
                opacity: 1,
                willChange: 'transform'
              }}
            >
              <span
                className="font-vibes text-[8rem] md:text-[12rem] lg:text-[16rem] inline-block pr-16"
                style={{
                  color: color,
                  opacity: opacity,
                  textShadow: `0 0 20px rgba(135, 206, 235, 0.6)`,
                  letterSpacing: '0.05em'
                }}
              >
                {content}
              </span>
              <span
                className="font-vibes text-[8rem] md:text-[12rem] lg:text-[16rem] inline-block"
                style={{
                  color: color,
                  opacity: opacity,
                  textShadow: `0 0 20px rgba(135, 206, 235, 0.6)`,
                  letterSpacing: '0.05em'
                }}
              >
                {content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
