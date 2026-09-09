import React from 'react';
import { LogoAllClean } from './LogoAllClean';
import { COMPANY_INFO } from '../data/content';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#091124] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <LogoAllClean size="md" variant="light" />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Serviços especializados de limpeza residencial, comercial e pós-obra em Lisboa e arredores. Rigor, pontualidade e o brilho que o seu espaço merece.
            </p>

            <div className="pt-1">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-2.5">
                Siga-nos nas Redes
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 text-white flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram da All Clean Solution"
                  title="Instagram @allcleansolution.pt"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-blue-600 text-white flex items-center justify-center transition-all shadow-sm"
                  aria-label="Facebook da All Clean Solution"
                  title="Facebook All Clean Solution"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-[#25D366] text-white flex items-center justify-center transition-all shadow-sm"
                  aria-label="WhatsApp da All Clean Solution"
                  title="WhatsApp +351 967 504 309"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-400 hover:text-white" />
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-cyan-600 text-white flex items-center justify-center transition-all shadow-sm"
                  aria-label="Email da All Clean Solution"
                  title={`Email ${COMPANY_INFO.email}`}
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ArrowRight className="w-3 h-3 text-cyan-500/70" />
                  Limpeza Residencial
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ArrowRight className="w-3 h-3 text-cyan-500/70" />
                  Limpeza Comercial & Escritórios
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ArrowRight className="w-3 h-3 text-cyan-500/70" />
                  Limpeza Pós-Obra Especializada
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ArrowRight className="w-3 h-3 text-cyan-500/70" />
                  Limpeza de Mudança (Check-in/out)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ArrowRight className="w-3 h-3 text-cyan-500/70" />
                  Limpeza Profunda e Detalhada
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Zonas Atendidas
                </a>
              </li>
              <li>
                <a href="#perguntas" className="hover:text-cyan-400 transition-colors block py-0.5">
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer text-left py-0.5"
                >
                  Pedir Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contactos & Horário (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Atendimento & Contactos
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Lisboa e Concelhos Limítrofes, Portugal</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-cyan-300 transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold text-emerald-400"
                >
                  WhatsApp Direto
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-cyan-300 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Seg. a Sáb.: 08h00 às 20h00</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Orçamento Grátis</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 All Clean Solution. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-semibold">TUDO LIMPO, TUDO PRONTO.</span>
            <span>•</span>
            <span>Lisboa e Arredores, Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
