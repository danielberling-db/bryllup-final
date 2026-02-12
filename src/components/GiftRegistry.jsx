import React, { useState } from 'react';
import { Copy, Check, Home, Plane } from 'lucide-react';

const GiftRegistry = () => {
  const [copiedHome, setCopiedHome] = useState(false);
  const [copiedTravel, setCopiedTravel] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'home') {
        setCopiedHome(true);
        setTimeout(() => setCopiedHome(false), 2000);
      } else {
        setCopiedTravel(true);
        setTimeout(() => setCopiedTravel(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handlePaymentClick = (url) => {
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    }
  };

  return (
    <section id="gaver" className="relative w-full max-w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 px-4 sm:px-6 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-center font-cinzel font-black tracking-widest text-5xl md:text-8xl mb-4 drop-shadow-lg bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent">
          GI EN GAVE
        </h2>
        <p className="text-center font-montserrat text-deep-charcoal/70 mb-12 max-w-2xl mx-auto">
          Vi setter pris på alle gaver, store som små. Velg den måten som passer best for deg.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* VÅRT NYE HJEM CARD */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-white/40">
            <div className="h-56 bg-gradient-to-br from-rose-100 via-amber-50 to-yellow-50 flex items-center justify-center overflow-hidden relative">
              <img 
                src="/hus.jpg" 
                alt="Vårt Nye Hjem" 
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 via-amber-100/40 to-yellow-100/40 flex items-center justify-center" style={{ display: 'none' }}>
                <Home size={80} className="text-antique-gold/60" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 font-cinzel text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                Vårt Nye Hjem
              </h3>
            </div>

            <div className="p-6 md:p-8">
              <p className="font-montserrat text-gray-700 mb-6 leading-relaxed text-center">
                Hjelp oss å bygge vårt drømmehjem med gaver til hjemmet.
              </p>

              {/* Payment Buttons */}
              <div className="space-y-3 mb-6">
                {/* Vipps - Top */}
                <button
                  onClick={() => handlePaymentClick('vipps://v1/pay?number=4747361573')}
                  className="w-full bg-gradient-to-r from-[#FF5B8A] to-[#FF8C42] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-montserrat flex items-center justify-center gap-2"
                >
                  <span>VIPPS</span>
                </button>
                <p className="text-xs text-gray-500 text-center">Best for beløp under 5 000 kr</p>

                {/* Bank Transfer - Middle */}
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-3 text-center font-montserrat">
                    Bankoverføring
                  </p>
                  <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-rose-50 to-amber-50 p-4 rounded-lg">
                    <code className="font-montserrat text-lg font-bold text-deep-charcoal">
                      1229.52.94475
                    </code>
                    <button
                      onClick={() => handleCopy('1229.52.94475', 'home')}
                      className="p-2 rounded-full bg-white shadow-md hover:bg-rose-50 transition-colors"
                      aria-label="Kopier kontonummer"
                    >
                      {copiedHome ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <Copy size={20} className="text-antique-gold" />
                      )}
                    </button>
                  </div>
                </div>

                {/* PayPal */}
                <button
                  onClick={() => handlePaymentClick('https://www.paypal.me/DanielBerling')}
                  className="w-full bg-gradient-to-r from-[#0070BA] to-[#009CDE] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-montserrat"
                >
                  PAYPAL
                </button>

                {/* Venmo - Bottom */}
                <div>
                  <button
                    onClick={() => handlePaymentClick('venmo://paycharge?txn=pay&recipients=Daniel-Berling')}
                    className="w-full bg-gradient-to-r from-[#3D95CE] to-[#008CFF] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-montserrat"
                  >
                    VENMO
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-1">For USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* BRYLLUPSREISE CARD */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-white/40">
            <div className="h-56 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-50 flex items-center justify-center overflow-hidden relative">
              <img 
                src="/hero.jpg" 
                alt="Bryllupsreise" 
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-cyan-100/40 to-teal-100/40 flex items-center justify-center" style={{ display: 'none' }}>
                <Plane size={80} className="text-antique-gold/60" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 font-cinzel text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                Bryllupsreise
              </h3>
            </div>

            <div className="p-6 md:p-8">
              <p className="font-montserrat text-gray-700 mb-6 leading-relaxed text-center">
                Bidra til vår drømmereise og hjelp oss å skape minner for livet.
              </p>

              {/* Payment Buttons */}
              <div className="space-y-3 mb-6">
                {/* Vipps - Top */}
                <button
                  onClick={() => handlePaymentClick('vipps://v1/pay?number=4747361573')}
                  className="w-full bg-gradient-to-r from-[#FF5B8A] to-[#FF8C42] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-montserrat flex items-center justify-center gap-2"
                >
                  <span>VIPPS</span>
                </button>
                <p className="text-xs text-gray-500 text-center">Best for beløp under 5 000 kr</p>

                {/* Bank Transfer - Middle */}
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-3 text-center font-montserrat">
                    Bankoverføring
                  </p>
                  <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <code className="font-montserrat text-lg font-bold text-deep-charcoal">
                      1229.52.95196
                    </code>
                    <button
                      onClick={() => handleCopy('1229.52.95196', 'travel')}
                      className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors"
                      aria-label="Kopier kontonummer"
                    >
                      {copiedTravel ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <Copy size={20} className="text-antique-gold" />
                      )}
                    </button>
                  </div>
                </div>

                {/* PayPal */}
                <button
                  onClick={() => handlePaymentClick('https://www.paypal.me/DanielBerling')}
                  className="w-full bg-gradient-to-r from-[#0070BA] to-[#009CDE] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-montserrat"
                >
                  PAYPAL
                </button>

                {/* Venmo - Bottom */}
                <div>
                  <button
                    onClick={() => handlePaymentClick('venmo://paycharge?txn=pay&recipients=Daniel-Berling')}
                    className="w-full bg-gradient-to-r from-[#3D95CE] to-[#008CFF] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-montserrat"
                  >
                    VENMO
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-1">For USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Message */}
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-center font-montserrat text-sm md:text-base text-gray-600 italic bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-antique-gold/20">
            <strong className="text-deep-charcoal">Viktig:</strong> Vennligst bruk bank for beløp over 5 000 kr (0% gebyr).
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
