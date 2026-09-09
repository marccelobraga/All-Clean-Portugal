import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Star, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import heroCleanerImg from '../assets/images/cleaner_woman_hero_transparent.png';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b4db2] via-[#0256cc] to-[#003d99] text-white pt-8 pb-0 lg:pt-14 lg:pb-0"
    >
      {/* Background Decorative Sparkles and Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

        {/* Decorative Sparkle Stars matching reference */}
        <div className="absolute top-12 left-1/4 text-white/40 text-2xl animate-pulse">✦</div>
        <div className="absolute top-1/3 left-1/2 text-cyan-200/50 text-xl">✦</div>
        <div className="absolute top-20 right-1/3 text-white/70 text-3xl font-bold animate-glow">★</div>
        <div className="absolute bottom-24 right-10 text-cyan-300/60 text-2xl">✦</div>
        <div className="absolute top-1/2 right-1/4 text-white/50 text-lg">★</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left pt-2 pb-10 lg:py-16">
            {/* "Limpamos por Si" Tag matching reference */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-300/40 text-cyan-200 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Limpamos em Lisboa e arredores</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white drop-shadow-sm">
              Seu Espaço Limpo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
                Para Seu Bem Estar
              </span>
            </h1>

            {/* Sub-headline in Portuguese */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Serviços profissionais de limpeza residencial, comercial e pós-obra para a sua casa,
              escritório e tudo o que está pelo meio na Grande Lisboa.
            </p>

            {/* Core Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-semibold text-blue-100">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                Limpeza Residencial
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                Limpeza Comercial
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                Limpeza Pós-Obra
              </span>
            </div>

            {/* CTA row matching reference */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              {/* Teal Pill Book Now Button */}
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-900 font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Agendar Agora</span>
                <span className="w-6 h-6 rounded-full bg-slate-900/15 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Top Rated Badge matching reference */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                {/* 3 Gold Stars like reference */}
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                </div>
                {/* Top Rated Pill */}
                <span className="inline-flex items-center gap-1 text-xs font-bold text-white px-2.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  Melhor Avaliado
                </span>
              </div>
            </div>

            {/* Slogan highlight */}
            <div className="pt-2">
              <p className="text-xs font-bold text-cyan-300 tracking-widest uppercase">
                ✦ Tudo Limpo, Tudo Pronto ✦
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual with Transparent Cutout anchored to the bottom area with increased size */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center lg:items-end justify-end self-end w-full">
            {/* Outer Circular Glow Backing */}
            <div className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/25 via-blue-400/20 to-transparent blur-3xl pointer-events-none -bottom-10"></div>

            {/* Cheerful Sun/Mascot Icon */}
            <div className="absolute top-0 left-2 sm:top-2 sm:left-4 z-20 bg-amber-400 text-slate-950 p-2.5 rounded-full shadow-lg border-2 border-white animate-float">
              <span className="text-xl sm:text-2xl block" role="img" aria-label="smiling soap sparkle">
                ✨
              </span>
            </div>

            {/* Floating rating badge placed at top-right */}
            <div className="absolute top-0 right-2 sm:top-2 sm:right-4 z-20 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-600 block">
                  +350 clientes satisfeitos
                </span>
              </div>
            </div>

            {/* Transparent Cutout Figure anchored flush to the bottom with enlarged scale */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[540px] xl:max-w-[620px] flex items-end justify-center">
              <img
                src={heroCleanerImg}
                alt="Profissional da All Clean Solution com equipamentos e produtos de limpeza em Lisboa"
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] block select-none pointer-events-none lg:scale-105 xl:scale-110 origin-bottom transition-transform"
                referrerPolicy="no-referrer"
              />

              {/* Floating Bottom Glass Badge with WhatsApp */}
              <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 lg:inset-x-12 bg-slate-950/80 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl shadow-2xl flex items-center justify-between gap-3 z-20">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                    All Clean Solution
                  </span>
                  <span className="text-white font-extrabold text-xs sm:text-sm">
                    Especialistas em Limpezas
                  </span>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-colors whitespace-nowrap"
                >
                  WhatsApp Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
