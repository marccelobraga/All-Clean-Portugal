import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/content';
import { ServiceCategory } from '../types';
import { Home, Building2, Sparkles, Check, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface ServicesDetailedProps {
  onSelectService: (service: ServiceCategory) => void;
}

export const ServicesDetailed: React.FC<ServicesDetailedProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('domestica');

  const getIcon = (id: ServiceCategory) => {
    switch (id) {
      case 'domestica':
        return <Home className="w-6 h-6" />;
      case 'comercial':
        return <Building2 className="w-6 h-6" />;
      case 'pos-obra':
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const selectedService = SERVICES_LIST.find((s) => s.id === activeTab) || SERVICES_LIST[0];

  return (
    <section id="servicos" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Manutenção periódica ou pontual residencial, até aos desafios de pós-obra, com profissionais de excelência.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SERVICES_LIST.map((service) => {
            const isActive = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <span className={isActive ? 'text-cyan-300' : 'text-blue-600'}>
                  {getIcon(service.id)}
                </span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed View Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left detail column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                  {getIcon(selectedService.id)}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block">
                    Serviço All Clean Solution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Ideal for tag */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-sm">
                <span className="font-bold text-slate-800">Ideal para: </span>
                <span className="text-slate-600">{selectedService.idealFor}</span>
              </div>

              {/* Included features list */}
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  O Que Está Incluído no Serviço:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/50"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectService(selectedService.id)}
                  className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Pedir Orçamento para {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right highlight card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-8 text-white space-y-6 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  Garantia All Clean Solution
                </span>
                <h4 className="text-xl font-black font-heading text-white">
                  Tudo Limpo, Tudo Pronto
                </h4>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pontualidade rigorosa e cumprimento de prazos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Produtos ecológicos e materiais profissionais incluídos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Equipas profissionais e com formação específica</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Orçamento detalhado sem custos ocultos</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-700/80">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Atendimento Telefónico & WhatsApp</p>
                    <p className="text-base font-bold text-cyan-300">+351 967 504 309</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Lisboa & Arredores
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
