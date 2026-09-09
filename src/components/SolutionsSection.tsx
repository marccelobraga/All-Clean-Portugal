import React from 'react';
import { Sparkles, Shield, Clock, CheckCircle } from 'lucide-react';
import cleaningCartImg from '../assets/images/cleaning_trolley_cart_1788792592388.jpg';
import officeCleanImg from '../assets/images/office_cleaning_desk_1788792610242.jpg';

interface SolutionsSectionProps {
  onOpenQuote: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="solucoes" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Solução completa para residência, escritório e pós obra
          </h2>
          {/* Cyan/teal decorative underline */}
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Soluções completas e adaptadas para habitações, escritórios e empreitadas em Lisboa e arredores.
          </p>
        </div>

        {/* 4-Block Asymmetrical Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (Cards 1 & 2) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 1: Teal Card "À Medida das Suas Necessidades" */}
            <div className="flex-1 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 text-white shadow-lg shadow-teal-500/15 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white mb-6 shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mb-3">
                À Medida das Suas Necessidades
              </h3>

              <p className="text-teal-50 text-base leading-relaxed mb-6 font-normal">
                Nosso serviço na sua necessidade, frequência ou pontual. Residência, escritório e pós obra.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  ✓ Limpeza Residencial
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  ✓ Limpeza Comercial
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  ✓ Pós-Obra Especializado
                </span>
              </div>
            </div>

            {/* Card 2: Deep Blue Card "Confiança & Credibilidade" */}
            <div className="flex-1 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#06337a] via-[#08429e] to-[#042459] text-white shadow-lg shadow-blue-900/20 relative overflow-hidden group">
              {/* Background ambient light */}
              <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-44 h-44 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-cyan-300 mb-6 shadow-sm">
                <Shield className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mb-3">
                Confiança & Credibilidade
              </h3>

              <p className="text-blue-100/90 text-base leading-relaxed mb-6 font-normal">
                A segurança do seu espaço é a nossa prioridade. Contamos com equipas rigorosamente
                selecionadas, profissionais e pontuais para a sua máxima tranquilidade.
              </p>

              <div className="flex items-center gap-6 pt-2 border-t border-white/10 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Profissionais Verificados
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Pontualidade Garantida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Cards 3 & 4) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 3: Horários Flexíveis with Cart Image */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  {/* Clock / Agendamento Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <span>Agendamento Rápido</span>
                  </div>

                  <h3 className="text-2xl font-black font-heading text-slate-900 tracking-tight">
                    Horários Flexíveis
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    A nossa equipa adapta-se aos seus horários na região de
                    Lisboa. Trabalhamos mediante agendamento prévio, garantindo conveniência, flexibilidade e pontualidade.
                  </p>

                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm pt-1"
                  >
                    <span>Consultar Disponibilidade</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Cart Image */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                    <img
                      src={cleaningCartImg}
                      alt="Carro e materiais de limpeza All Clean Solution"
                      className="w-full h-full object-contain drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Office Cleaning Scene */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                <div className="sm:col-span-7 p-6 sm:p-8 space-y-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                    Ambientes Impecáveis
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                    Limpeza Detalhada para Empresas & Lares
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Oferecemos limpeza profunda interior e exterior, além de lavagem de vidros, garantindo ambientes impecáveis, higienizados e cheios de luz.
                  </p>
                  <div className="text-xs font-semibold text-slate-500">
                    Lisboa • Sintra • Cascais • Oeiras • Loures
                  </div>
                </div>
                <div className="sm:col-span-5 h-48 sm:h-full min-h-[180px]">
                  <img
                    src={officeCleanImg}
                    alt="Limpeza minuciosa de escritório e secretária em Lisboa"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
