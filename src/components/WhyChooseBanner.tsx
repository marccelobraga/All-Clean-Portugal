import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';
import kitchenBannerImg from '../assets/images/kitchen_pink_banner_1788792640378.jpg';

interface WhyChooseBannerProps {
  onOpenQuote: () => void;
}

export const WhyChooseBanner: React.FC<WhyChooseBannerProps> = ({ onOpenQuote }) => {
  return (
    <section id="sobre" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Pink-Coral Banner matching reference */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#fca5a5]/30 via-[#fda4af]/40 to-[#f472b6]/25 border border-pink-100 p-8 sm:p-12 lg:p-16">
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none">
            <img
              src={kitchenBannerImg}
              alt="Ambiente de limpeza All Clean Solution"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            {/* Eyebrow matching reference */}
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-rose-600 block">
              Porquê Escolher-nos? • All Clean Solution
            </span>

            {/* Headline matching reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
              Experimente uma <span className="text-rose-600">limpeza profissional</span>
            </h2>

            {/* Body matching reference */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              Da sua casa ao escritório, fazemos cada recanto brilhar para que possa aproveitar o
              que realmente importa: a sua família, o seu descanso e o seu negócio.
            </p>

            {/* 5 Gold Stars matching reference */}
            <div className="flex items-center justify-center gap-1.5 py-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Action Buttons matching reference */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer border border-pink-200"
              >
                <span>Pedir Orçamento Grátis</span>
                <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
