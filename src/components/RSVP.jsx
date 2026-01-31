import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

const RSVP = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPartner, setHasPartner] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const payload = {
      main_guest: data.main_guest,
      has_partner: hasPartner,
      partner_name: hasPartner ? data.partner_name : null,
      total_count: hasPartner ? 2 : 1,
      email: data.email,
      status: "Attending",
      accommodation: data.accommodation,
      allergies: data.allergies || "",
      message: data.message || ""
    };

    // Lag en detaljert e-post melding
    const accommodationText = {
      'none': 'Ingen behov',
      'citybox': 'Citybox (Hotell)',
      'dorm': hasPartner ? 'Sovesal/Hus (2 plasser)' : 'Sovesal/Hus (1 plass)'
    };

    const emailMessage = `
Ny RSVP for bryllupet!

GJEST INFORMASJON:
- Navn: ${data.main_guest}
- E-post: ${data.email}
${hasPartner ? `- Partner: ${data.partner_name}\n- Antall gjester: 2` : '- Antall gjester: 1'}

OVERNATTING:
${accommodationText[data.accommodation] || data.accommodation}

ALLERGIER / DIETTBEHOV:
${data.allergies || 'Ingen'}

MELDING TIL BRUDEPARET:
${data.message || 'Ingen melding'}
    `.trim();

    try {
      // Send e-post via EmailJS
      await emailjs.send(
        'service_rsvp',
        'template_rsvp',
        {
          to_email: 'daniel.berling@hotmail.com',
          from_name: data.main_guest,
          from_email: data.email,
          message: emailMessage,
          reply_to: data.email
        },
        'YOUR_PUBLIC_KEY'
      );

      console.log("RSVP sent successfully:", payload);

      gsap.to(".rsvp-card", {
        rotateY: 0, scale: 0.6, rotateX: 45, y: -1000, x: 200,
        duration: 1.5, ease: "power2.in",
        onComplete: () => {
          setIsSent(true);
          setIsSubmitting(false);
        }
      });
    } catch (error) {
      console.error("Failed to send RSVP:", error);
      alert("Det oppstod en feil ved sending. Vennligst prøv igjen.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="w-full m-0 flex flex-col items-center justify-center py-12 md:py-32 bg-[#FFFFFF] px-4 sm:px-6 overflow-hidden relative">
      {!isSent ? (
        <div className={`rsvp-card relative w-[90vw] max-w-[600px] min-h-[500px] perspective-1200 cursor-pointer transition-all duration-700 transform-style-3d ${isOpen ? 'rotate-y-180' : ''}`} onClick={() => !isOpen && setIsOpen(true)}>

          {/* BACK OF CARD (Closed) */}
          <div className="absolute inset-0 backface-hidden bg-[#Fdfbf7] shadow-2xl rounded-sm p-8 flex flex-col justify-between border border-gray-200"
               style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/watercolor.png")'}}>
             <div className="absolute top-6 right-6 w-24 h-28 border-dashed border-gray-300 border-4 p-1 transform rotate-2">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-400">STAMP</div>
             </div>
             <div className="absolute top-10 right-20 w-32 h-32 rounded-full border-4 border-deep-charcoal opacity-40 flex items-center justify-center -rotate-12 pointer-events-none">
                <span className="text-xs font-bold text-center">ODDERNES KIRKE<br/>23.05.2026</span>
             </div>
             <div className="mt-20 ml-auto w-1/2 text-center">
                <p className="font-vibes text-4xl text-blue-900">Til Remine & Daniel</p>
             </div>
             <div className="mt-auto text-center animate-pulse text-rose-gold font-cinzel text-sm">TRYKK FOR Å ÅPNE</div>
          </div>

          {/* FRONT OF CARD (Form) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-2xl rounded-sm p-8 border-t-4 border-antique-gold overflow-y-auto">
             <h2 className="text-2xl font-cinzel font-bold text-antique-gold mb-6">KOMMER DU?</h2>
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-montserrat text-sm text-gray-700" onClick={(e) => e.stopPropagation()}>

                {/* Name Field */}
                <div>
                   <input {...register("main_guest", { required: true })} className="w-full border-b-2 border-gray-300 focus:border-antique-gold outline-none py-2 bg-transparent placeholder-gray-400 transition-colors" placeholder="Ditt Navn" />
                </div>

                {/* Partner Toggle */}
                <div className="py-2">
                   <span className="block text-gray-600 mb-3">Har du med partner?</span>
                   <div className="flex gap-4">
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input
                         type="radio"
                         name="hasPartner"
                         value="yes"
                         onChange={() => setHasPartner(true)}
                         className="accent-antique-gold w-4 h-4"
                       />
                       <span>Ja</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input
                         type="radio"
                         name="hasPartner"
                         value="no"
                         onChange={() => setHasPartner(false)}
                         className="accent-antique-gold w-4 h-4"
                       />
                       <span>Nei</span>
                     </label>
                   </div>
                </div>

                {/* Conditional Partner Name Field */}
                {hasPartner && (
                    <div className="animate-fadeIn">
                       <input {...register("partner_name", { required: hasPartner })} className="w-full border-b-2 border-gray-300 focus:border-antique-gold outline-none py-2 bg-transparent" placeholder="Hva heter din bedre halvdel?" />
                    </div>
                )}

                {/* Email */}
                <div>
                   <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="w-full border-b-2 border-gray-300 focus:border-antique-gold outline-none py-2 bg-transparent placeholder-gray-400 transition-colors" placeholder="Din E-post" />
                </div>

                {/* Accommodation */}
                <div>
                    <label className="block text-xs text-gray-500 mb-2">Overnatting</label>
                    <select {...register("accommodation")} className="w-full border-b-2 border-gray-300 bg-transparent py-2 outline-none text-gray-700 focus:border-antique-gold transition-colors cursor-pointer">
                        <option value="none">Ingen behov</option>
                        <option value="citybox">Citybox (Hotell)</option>
                        <option value="dorm">Sovesal/Hus (200,-)</option>
                    </select>
                    {hasPartner && watch('accommodation') === 'dorm' && (
                      <p className="text-xs text-gray-500 mt-2 italic">Notert: 2 plasser på sovesal</p>
                    )}
                </div>

                {/* Allergies */}
                <div>
                    <label className="block text-xs text-gray-500 mb-2">Allergier / Diettbehov</label>
                    <input {...register("allergies")} className="w-full border-b-2 border-gray-300 focus:border-antique-gold outline-none py-2 bg-transparent" placeholder="Skriv her hvis du har noen allergier..." />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-xs text-gray-500 mb-2">Melding til brudeparet (valgfritt)</label>
                    <textarea {...register("message")} rows="3" className="w-full border-2 border-gray-300 focus:border-antique-gold outline-none p-2 bg-transparent rounded resize-none" placeholder="Skriv en hilsen..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full py-3 bg-gradient-to-r from-antique-gold to-[#FFD700] text-white font-bold rounded shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-cinzel tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDER...' : 'SEND SVAR'}
                </button>
             </form>
          </div>
        </div>
      ) : (
        <div className="text-center animate-fadeIn">
           <h2 className="text-5xl font-vibes text-antique-gold mb-2">Tusen takk!</h2>
           <p className="font-montserrat text-gray-600">Svaret er sendt. Vi gleder oss til å se deg{hasPartner && ' og din partner'}!</p>
        </div>
      )}
    </section>
  );
};

export default RSVP;
