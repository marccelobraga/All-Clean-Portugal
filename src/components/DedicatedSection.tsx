import React from 'react';
import { Sparkles, CheckCircle2, Leaf, Award, Smile } from 'lucide-react';
import livingRoomImg from '../assets/images/living_room_cleaning_1788792623474.jpg';

interface DedicatedSectionProps {
  onOpenQuote: () => void;
}

export const DedicatedSection: React.FC<DedicatedSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wide Dual Block matching reference */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Teal Gradient Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-500 via-emerald-600 to-teal-700 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-6">
                <Sparkles className="w-7 h-7" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight mb-4 text-white">
                Dedicados à Limpeza, <br />
                Comprometidos Consigo
              </h2>

              <p className="text-teal-50 text-base leading-relaxed mb-6 font-normal">
                Trazemos as ferramentas certas, produtos seguros e ecológicos, e uma equipa dedicada
                para entregar resultados impressionantes em cada visita. A sua satisfação e o conforto
                da sua família ou empresa são o nosso compromisso diário.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-teal-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-200 shrink-0" />
                  <span>Produtos seguros e ecológicos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-200 shrink-0" />
                  <span>Equipa profissional</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-200 shrink-0" />
                  <span>Entrega de resultado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-200 shrink-0" />
                  <span>Supervisão contínua</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-200 shrink-0" />
                  <span>Compromisso na qualidade</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-cyan-50 text-teal-800 font-bold text-sm text-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Pedir Orçamento Imediato →
            </button>
          </div>

          {/* Right Column: Living Room Image with Floating Check Badges */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-slate-100">
            <img
              src={livingRoomImg}
              alt="Ambiente residencial limpo e confortável All Clean Solution"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

            {/* Floating check badges matching reference layout */}
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex flex-col gap-3 z-10">
              {/* Badge 1: Produtos Ecológicos */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Leaf className="w-3.5 h-3.5" />
                </span>
                <span>Produtos Ecológicos</span>
              </div>

              {/* Badge 2: Profissionais Qualificados */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5" />
                </span>
                <span>Profissionais Qualificados</span>
              </div>

              {/* Badge 3: Satisfação Garantida */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Smile className="w-3.5 h-3.5" />
                </span>
                <span>Satisfação Garantida</span>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-slate-900/80 backdrop-blur-md text-white p-4 rounded-2xl border border-white/20 sm:flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-cyan-300">Compromisso com o Cliente</p>
              </div>
              <span className="text-xs font-bold text-amber-300 hidden sm:inline">
                ★ 100% Garantido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
