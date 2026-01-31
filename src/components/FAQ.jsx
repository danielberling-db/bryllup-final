import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const questions = [
    {
      q: "Når må jeg svare om jeg kommer?",
      a: "Vi trenger ditt svar innen 1. Mars 2026. Dette er viktig for at vi skal få bestilt mat og drikke til alle. Du svarer enkelt i skjemaet lenger ned på denne siden.",
      category: "logistics"
    },
    {
      q: "Hva skal jeg ha på meg?",
      a: "Vi pynter oss! Gjerne i bunad, kjole eller dress. Vi ønsker en feststemt forsamling, så ta på deg noe du føler deg fin i. Husk gode sko til dansing!",
      category: "ceremony"
    },
    {
      q: "Kan vi ta med barna?",
      a: "Jesus sa: 'La barna komme til meg'. Vi ønsker et bryllup fylt med glede og sprell! Noen gjester er derfor invitert med barna sine (dette står i invitasjonen). Utover dette er det kun barn som er avhengig av foreldre (amming/små) som er invitert.",
      category: "logistics"
    },
    {
      q: "Hvor bør vi sove, og finnes det rabatt?",
      a: "Absolutt! Vi anbefaler Citybox i sentrum. Bruk koden 'RemineogDaniel' for hele 40% rabatt. For et rimeligere alternativ tilbyr vi overnatting i hus/sovesal (200,- natten). Se 'Logistikk'-seksjonen lenger opp for linker.",
      category: "logistics"
    },
    {
      q: "Hvordan kommer jeg meg frem / Er det parkering?",
      a: "Det er masse gratis parkering på alle lokasjoner: Mosby (fredag), Oddernes Kirke og Festlokalet. Vi setter ikke opp fellesbuss, da de fleste kjører eller bor sentralt, men det er enkelt å ta taxi eller samkjøre.",
      category: "logistics"
    },
    {
      q: "Jeg har allergier eller diettbehov. Hva gjør jeg?",
      a: "Ingen fare! Si ifra i RSVP-skjemaet nederst på siden. Vår fantastiske matansvarlig Elisabet sørger for at alle blir mette og glade, uansett behov.",
      category: "party"
    },
    {
      q: "Hva ønsker dere dere?",
      a: "Vi har opprettet en ønskeliste. Du finner den store, glitrende 'Gave-knappen' lenger opp på siden, eller du kan trykke her for å gå til ønskelisten.",
      category: "other"
    },
    // Hidden initially
    {
      q: "Hvem skal jeg kontakte for taler eller sprell?",
      a: "Her er drømmelaget:\n• Taler/Toastmastere: Hans Christian & Mathias (Send dem en mail eller melding i god tid!)\n• Leker/Underholdning: Adam\n• Mat: Elisabet\n• Pynt/Estetikk: Ragnhild",
      category: "other"
    },
    {
      q: "Kan vi ta bilder under vielsen?",
      a: "I kirken ønsker vi en mobilfri vielse for å være tilstede i øyeblikket. Vår fotograf tar seg av de profesjonelle bildene der. Under festen: JA! Ta masse bilder! Vi legger ut en lenke her senere for opplasting.",
      category: "ceremony"
    },
    {
      q: "Hva skjer egentlig 'Kvelden før kvelden'?",
      a: "Fredag kveld samles vi på Mosby (Remines barndomshjem) for en uformell 'Get-together'. Det blir enkel mat, mingling og lave skuldre. Adressen er Mosby Ringvei 56. Se kart lenger opp.",
      category: "party"
    },
    {
      q: "Når starter vielsen nøyaktig?",
      a: "Selve vielsen starter 14:30 presis i Oddernes Kirke. Dørene åpnes 14:10. Vær ute i god tid for å finne plassen din.",
      category: "ceremony"
    },
    {
      q: "Hvordan er det med Alkohol?",
      a: "Det er ikke alkohol i bryllupet, men selvfølgelig kan Jesus når som helst gjøre vann om til vin, hehe. Det blir servert mye god brus. Vi ønsker en hyggelig fest for alle aldre.",
      category: "party"
    },
    {
      q: "Jeg vil gjerne si noen ord. Er det frist?",
      a: "Så hyggelig! Meld gjerne fra til Hans Christian eller Mathias innen 1. Mai, så de får sydd sammen et godt program. Korte og gode taler er gull!",
      category: "other"
    },
    {
      q: "Jeg skal sove på sovesal/hus. Må jeg ha med sengetøy?",
      a: "Ja, ta med sovepose eller sengetøy og håndkle. Det er senger/madrasser der. Det er en enkel, sosial og rimelig måte å bo på.",
      category: "logistics"
    },
    {
      q: "Er det felles frokost?",
      a: "De som bor på Citybox fikser frokost selv (den er god!). De som sover på huset/sovesal organiserer vi en enkel fellesfrokost for på søndagen.",
      category: "party"
    },
    {
      q: "Hva om det regner under hagefesten/minglingen?",
      a: "Vi har en plan B! Hvis Gud ønsker å vanne blomstene, trekker vi inn eller under tak. Men vi satser på strålende sørlandssol.",
      category: "other"
    },
    {
      q: "Kan jeg ta med meg en kjæreste/venn?",
      a: "Invitasjonen gjelder de navnene som står på den (eller konvolutten). Vi har dessverre begrenset plass og har måttet gjøre tøffe prioriteringer.",
      category: "logistics"
    },
    {
      q: "Er lokalene tilrettelagt for rullestol/barnevogn?",
      a: "Ja, både Oddernes Kirke og festlokalet har trinnfri adkomst og HC-toalett. Si ifra hvis dere trenger assistanse.",
      category: "logistics"
    },
    {
      q: "Når slutter festen?",
      a: "Vi gir oss ikke før vi må! Musikken og dansen fortsetter ut i de små timer. De tøffeste avslutter med nattbad ved midnatt!",
      category: "party"
    },
    {
      q: "Er det noen vi kan kontakte ved spørsmål?",
      a: "Ja – ta gjerne kontakt med Daniel på 47361573 eller daniel.berling@hotmail.com dersom du har spørsmål om dagen, overnatting eller annet praktisk.",
      category: "other"
    }
  ];

  const visibleQuestions = showAll ? questions : questions.slice(0, 7);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'logistics': return 'bg-[#C8D5B9]/30 hover:bg-[#C8D5B9]/50';
      case 'ceremony': return 'bg-[#B8C5D6]/30 hover:bg-[#B8C5D6]/50';
      case 'party': return 'bg-[#E8C5C0]/30 hover:bg-[#E8C5C0]/50';
      case 'other': return 'bg-[#E8D5B9]/30 hover:bg-[#E8D5B9]/50';
      default: return 'bg-organic-almond/30';
    }
  };

  return (
    <section id="faq-section" className="w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-12 bg-gradient-to-r from-antique-gold to-[#FFD700] bg-clip-text text-transparent">
          Spørsmål & Svar
        </h2>

        <div className="space-y-4">
          {visibleQuestions.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${getCategoryColor(item.category)}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span className="font-cinzel font-bold text-deep-charcoal text-lg pr-4">
                  {item.q}
                </span>
                <span className="text-antique-gold text-2xl font-bold flex-shrink-0 transition-transform duration-300"
                      style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-4 font-montserrat text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-antique-gold to-[#FFD700] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-cinzel"
            >
              VIS FLERE SPØRSMÅL ({questions.length} TOTALT)
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setShowAll(false);
                setOpenIndex(null);
              }}
              className="px-8 py-3 border-2 border-antique-gold text-antique-gold font-bold rounded-full hover:bg-antique-gold hover:text-white transition-all duration-300 font-cinzel"
            >
              VIS FÆRRE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
