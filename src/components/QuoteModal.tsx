import React, { useState } from 'react';
import { ServiceCategory } from '../types';
import { COMPANY_INFO, LISBON_AREAS } from '../data/content';
import { X, Sparkles, Building, Home, Construction, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceCategory;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'domestica',
}) => {
  const [service, setService] = useState<ServiceCategory>(initialService);
  const [propertyType, setPropertyType] = useState('T2');
  const [frequency, setFrequency] = useState<'pontual' | 'semanal' | 'quinzenal'>('semanal');
  const [location, setLocation] = useState('Lisboa Centro');
  const [approxM2, setApproxM2] = useState<number>(85);
  const [hasPets, setHasPets] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceNameMap: Record<ServiceCategory, string> = {
      domestica: 'Limpeza Residencial',
      comercial: 'Limpeza Comercial / Escritório',
      'pos-obra': 'Limpeza Pós-Obra / Mudança',
    };

    const text = `Olá All Clean Solution! Gostaria de agendar / solicitar um orçamento:
✨ *Serviço:* ${serviceNameMap[service]}
🏠 *Tipologia / Área:* ${service === 'domestica' ? propertyType : `${approxM2} m²`}
📍 *Localização:* ${location} (Lisboa e arredores)
🗓️ *Frequência:* ${frequency === 'semanal' ? 'Semanal' : frequency === 'quinzenal' ? 'Quinzenal' : 'Pontual'}
🐾 *Animais de estimação:* ${hasPets ? 'Sim' : 'Não'}
👤 *Nome:* ${customerName || 'Cliente'}
📞 *Contacto:* ${customerPhone || 'Via WhatsApp'}
${notes ? `📝 *Observações:* ${notes}` : ''}

Podem confirmar a disponibilidade e enviar o orçamento personalizado? Obrigado!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-cyan-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>All Clean Solution • Lisboa e Arredores</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
            Formulário de Agendamento & Orçamento
          </h3>
          <p className="text-blue-100 text-sm mt-1">
            Preencha os dados abaixo para receber uma proposta personalizada e agendar o serviço no seu WhatsApp.
          </p>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
              1. Selecione o Tipo de Limpeza:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setService('domestica')}
                className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  service === 'domestica'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/20 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Home className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm">Residencial</span>
              </button>

              <button
                type="button"
                onClick={() => setService('comercial')}
                className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  service === 'comercial'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/20 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Building className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm">Comercial</span>
              </button>

              <button
                type="button"
                onClick={() => setService('pos-obra')}
                className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  service === 'pos-obra'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/20 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Construction className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm">Pós-Obra</span>
              </button>
            </div>
          </div>

          {/* Property Size / Typology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service === 'domestica' ? (
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  2. Tipologia do Imóvel:
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="T0 / T1 (até 50m²)">T0 ou T1 (até 50m²)</option>
                  <option value="T2 (50 a 90m²)">T2 (50 a 90m²)</option>
                  <option value="T3 (90 a 130m²)">T3 (90 a 130m²)</option>
                  <option value="T4+ / Moradia">T4 ou Moradia (+130m²)</option>
                  <option value="Apenas Cozinha & WC">Apenas Cozinha & WC</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  2. Área Aproximada: {approxM2} m²
                </label>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="10"
                  value={approxM2}
                  onChange={(e) => setApproxM2(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>20 m²</span>
                  <span>150 m²</span>
                  <span>350+ m²</span>
                </div>
              </div>
            )}

            {/* Location in Lisbon */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                3. Concelho / Região:
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {LISBON_AREAS.map((area, i) => (
                  <option key={i} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Frequency & Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                4. Frequência Desejada:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['pontual', 'semanal', 'quinzenal'] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={`py-2 px-2 text-center rounded-xl text-xs font-bold uppercase transition-colors cursor-pointer ${
                      frequency === f
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center pt-6">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasPets}
                  onChange={(e) => setHasPets(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm font-medium text-slate-700">
                  Tem animais de estimação no local? 🐾
                </span>
              </label>
            </div>
          </div>

          {/* User Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                O seu Nome (Opcional):
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: Ana Silva"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                O seu Telefone / WhatsApp:
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Ex: 912 345 678"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Informational Callout (No Price) */}
          <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200/80 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-900 block">
                Orçamento 100% Gratuito & Sem Compromisso
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Apresentamos uma proposta personalizada e transparente ajustada às necessidades exatas do seu espaço.
              </p>
            </div>
          </div>

          {/* Action Submit button directly to WhatsApp */}
          <div className="space-y-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25 cursor-pointer transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>Enviar Pedido pelo WhatsApp (+351 967 504 309)</span>
            </button>
            <p className="text-center text-xs text-slate-500">
              Resposta garantida em poucos minutos pela equipa da All Clean Solution.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
