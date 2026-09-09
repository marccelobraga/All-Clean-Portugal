import React, { useState, useEffect } from 'react';
import { LogoAllClean } from './LogoAllClean';
import { COMPANY_INFO } from '../data/content';
import { Phone, Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro bar with contact and social links (desktop and tablet) */}
      <div className="hidden sm:block bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Lisboa e Arredores
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 font-medium">
              Tudo Limpo, Tudo Pronto
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-pink-400 transition-colors flex items-center gap-1"
                title="Instagram @allcleansolution.pt"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                title="Facebook All Clean Solution"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Facebook</span>
              </a>
            </div>

            <span className="hidden lg:inline text-slate-600">|</span>

            {/* Email link */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
              title={`Enviar email para ${COMPANY_INFO.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <span className="text-slate-600">|</span>

            {/* Direct phone call / WhatsApp */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
            : 'bg-white py-3 border-b border-slate-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand: Emblem only on mobile/tablet (<lg), full brand title on desktop (lg+) */}
          <a href="#" className="flex items-center gap-2 group shrink-0" aria-label="All Clean Solution">
            <LogoAllClean size="md" variant="dark" textClassName="hidden lg:flex" />
          </a>

          {/* Desktop Navigation Links (matching reference structure) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a
              href="#inicio"
              className="text-blue-600 hover:text-blue-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:text-blue-600 transition-colors py-1"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              className="hover:text-blue-600 transition-colors py-1"
            >
              Serviços
            </a>
            <a
              href="#solucoes"
              className="hover:text-blue-600 transition-colors py-1"
            >
              Diferenciais
            </a>
            <a
              href="#areas"
              className="hover:text-blue-600 transition-colors py-1"
            >
              Zonas
            </a>
            <a
              href="#perguntas"
              className="hover:text-blue-600 transition-colors py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-emerald-500/30 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              WhatsApp
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all cursor-pointer"
            >
              <span>Pedir Orçamento</span>
              <span className="text-cyan-300">→</span>
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="text-xs bg-blue-600 text-white font-bold px-3 py-2 rounded-full sm:hidden"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-700">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 text-blue-600"
              >
                Início
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Serviços (Residencial, Comercial, Pós-Obra)
              </a>
              <a
                href="#solucoes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Diferenciais
              </a>
              <a
                href="#areas"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Zonas de Lisboa
              </a>
              <a
                href="#perguntas"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Perguntas Frequentes
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full bg-blue-600 text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <span>Pedir Orçamento Grátis</span>
                <span>→</span>
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-center flex items-center justify-center gap-2 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-center flex items-center justify-center gap-2 text-xs"
              >
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
