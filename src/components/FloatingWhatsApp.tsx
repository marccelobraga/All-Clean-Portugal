import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></div>
          <span className="font-semibold">Orçamento rápido pelo WhatsApp?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Falar connosco pelo WhatsApp +351 967 504 309"
        title="Falar no WhatsApp (+351 967 504 309)"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
