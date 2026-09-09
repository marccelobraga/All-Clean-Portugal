import React, { useState } from 'react';
import { FAQS, TESTIMONIALS } from '../data/content';
import { ChevronDown, Star, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="perguntas" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Testimonials from Lisbon clients */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Opiniões de Clientes
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">
              O Que Dizem Quem Já Experimentou a All Clean Solution
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              O nosso maior compromisso é a satisfação plena de cada cliente. Veja o feedback de
              famílias e empresas na área metropolitana de Lisboa.
            </p>

            <div className="space-y-4 pt-2">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {t.location} • <span className="text-blue-600 font-semibold">{t.service}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    "{t.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Accordion FAQs */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Perguntas Frequentes
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">
              Tudo O Que Precisa Saber Antes de Contratar
            </h3>

            <div className="space-y-3 pt-2">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-cyan-600 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
