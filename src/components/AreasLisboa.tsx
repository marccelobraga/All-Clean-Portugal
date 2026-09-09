import React from 'react';
import { LISBON_AREAS, COMPANY_INFO } from '../data/content';
import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface AreasLisboaProps {
  onOpenQuote: () => void;
}

export const AreasLisboa: React.FC<AreasLisboaProps> = ({ onOpenQuote }) => {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Área de Cobertura</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Atendimento em Toda a Região de Lisboa e Arredores
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A All Clean Solution desloca-se com equipa própria e todo o material até ao seu imóvel
            ou empresa com pontualidade impecável.
          </p>
        </div>

        {/* Areas Badges Grid */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {LISBON_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-xs flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm hover:border-blue-300 hover:shadow-sm hover:text-blue-600 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
                <span className="truncate">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Não encontrou a sua localidade na lista? Contacte-nos e confirmamos a disponibilidade!</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>+351 967 504 309</span>
              </a>
            </div>
          </div>
        </div>

        {/* Why clients trust us stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
            <span className="block text-3xl sm:text-4xl font-black font-heading text-blue-600">
              100%
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 block">
              Materiais Próprios Incluídos
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-100">
            <span className="block text-3xl sm:text-4xl font-black font-heading text-cyan-600">
              +350
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 block">
              Imóveis Limpos com Excelência
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-100">
            <span className="block text-3xl sm:text-4xl font-black font-heading text-teal-600">
              &lt; 15 min
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 block">
              Tempo Médio de Resposta
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-100/60 border border-slate-200">
            <span className="block text-3xl sm:text-4xl font-black font-heading text-slate-800">
              5.0 ★
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 block">
              Classificação Máxima de Clientes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
