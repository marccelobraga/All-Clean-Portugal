import { ServiceItem } from '../types';

export const COMPANY_INFO = {
  name: 'All Clean Solution',
  slogan: 'Tudo Limpo, Tudo Pronto.',
  tagline: 'A Solução Completa em Limpezas para a Sua Casa e Empresa',
  phone: '+351 967 504 309',
  phoneRaw: '351967504309',
  instagramUrl: 'https://www.instagram.com/allcleansolution.pt',
  facebookUrl: 'https://www.facebook.com/share/1CPzyHH4kS/?mibextid=wwXIfr',
  whatsappUrl: 'https://wa.me/351967504309?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20limpeza%20com%20a%20All%20Clean%20Solution.',
  email: 'allcleansolution.pt@gmail.com',
  region: 'Lisboa e arredores',
  workingHours: 'Segunda a Sábado: 08h00 às 20h00',
  emergencyAvailable: 'Disponibilidade sob agendamento prévio',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'domestica',
    title: 'Limpeza Residencial',
    shortDesc: 'Manutenção regular ou profunda da sua casa com rigor e confiança máxima.',
    fullDesc: 'Cuidamos do seu lar com o mesmo carinho e atenção que você teria. Quartos, salas, cozinhas, casas de banho e áreas exteriores higienizados com os melhores produtos e equipamentos.',
    iconName: 'Home',
    idealFor: 'Apartamentos, moradias, limpezas semanais, quinzenais ou pontuais.',
    features: [
      'Higienização completa de casas de banho e cozinhas',
      'Aspiração e lavagem de pavimentos e rodapés',
      'Limpeza de vidros, caixilharias e varandas',
      'Mudança de roupa de cama e arrumação personalizada',
      'Produtos ecológicos seguros para crianças e animais',
    ],
  },
  {
    id: 'comercial',
    title: 'Limpeza Comercial & Escritórios',
    shortDesc: 'Espaços corporativos impecáveis para clientes e colaboradores.',
    fullDesc: 'A imagem da sua empresa reflete-se na limpeza das suas instalações. Oferecemos planos à medida para escritórios, clínicas, lojas, ginásios e espaços de coworking em Lisboa.',
    iconName: 'Building2',
    idealFor: 'Escritórios, clínicas, lojas, gabinetes, condomínios e alojamento local.',
    features: [
      'Limpeza e higienização diária ou periódica de postos de trabalho',
      'Desinfeção profunda de instalações sanitárias e copas',
      'Limpeza de montras, vidros interiores e divisórias',
      'Tratamento especializado e polimento de pisos',
      'Gestão e reposição de consumíveis de higiene',
      'Horários flexíveis fora do expediente laboral',
    ],
  },
  {
    id: 'pos-obra',
    title: 'Limpeza Pós-Obra & Mudanças',
    shortDesc: 'Eliminação minuciosa de poeiras, tintas e detritos para habitação imediata.',
    fullDesc: 'Após reformas ou construções, a sujidade pesada exige equipamentos e técnicas industriais. Removemos todo o pó de gesso, restos de cimento, colas e tintas com rapidez e perfeição.',
    iconName: 'Sparkles',
    idealFor: 'Imóveis remodelados, obras novas, preparação para entrega de chaves ou mudanças.',
    features: [
      'Remoção de resíduos de gesso, tintas, silicone e colas',
      'Aspiração industrial de poeiras finas em tetos e paredes',
      'Limpeza intensiva de caixilharias, calhas e vidros',
      'Higienização bactericida de sanitários e armários novos',
      'Tratamento e decapagem de pavimentos',
      'Imóvel 100% pronto para morar ou inaugurar',
    ],
  },
];

export const LISBON_AREAS = [
  'Lisboa Centro',
  'Parque das Nações',
  'Belém & Restelo',
  'Cascais & Estoril',
  'Sintra',
  'Oeiras & Carcavelos',
  'Amadora',
  'Odivelas',
  'Loures',
  'Almada',
  'Seixal',
  'Costa da Caparica',
  'Mafra & Ericeira',
  'Vila Franca de Xira',
];

export const TESTIMONIALS = [
  {
    name: 'Marta Ribeiro',
    location: 'Lisboa (Avenidas Novas)',
    service: 'Limpeza Residencial Regular',
    rating: 5,
    comment: 'A equipa da All Clean Solution é exemplar! Pontuais, educadas e deixam a casa a brilhar com um cheirinho maravilhoso. Já não passo sem o serviço semanal!',
  },
  {
    name: 'Eng. Ricardo Santos',
    location: 'Oeiras',
    service: 'Limpeza Pós-Obra',
    rating: 5,
    comment: 'Fizeram a limpeza pós-obra do meu apartamento após 4 meses de remodelação. O pó de gesso parecia impossível de tirar, mas deixaram tudo impecável para entrarmos no dia seguinte.',
  },
  {
    name: 'Sofia Valente',
    location: 'Cascais',
    service: 'Limpeza de Escritório',
    rating: 5,
    comment: 'Contratámos para o nosso gabinete de advogados em Lisboa. O profissionalismo e a atenção aos pormenores fazem toda a diferença para recebermos os nossos clientes.',
  },
];

export const FAQS = [
  {
    question: 'A All Clean Solution traz os próprios produtos e equipamentos?',
    answer: 'Sim! Levamos todos os produtos de limpeza profissionais, panos de microfibra codificados por cor para evitar contaminação cruzada, aspiradores e equipamentos adequados.',
  },
  {
    question: 'Em que zonas de Lisboa operam?',
    answer: 'Atuamos em toda a área metropolitana de Lisboa: Concelho de Lisboa, Cascais, Sintra, Oeiras, Amadora, Odivelas, Loures, Almada, Seixal e arredores.',
  },
  {
    question: 'Como posso pedir um orçamento e quanto tempo demora?',
    answer: 'Pode simular aqui no site ou clicar diretamente no botão de WhatsApp (+351 967 504 309). Respondemos com um orçamento personalizado e transparente em menos de 15 minutos!',
  },
  {
    question: 'Os profissionais são de confiança e com seguro?',
    answer: 'Absolutamente. Toda a nossa equipa passa por rigorosa seleção, verificação de antecedentes e formação contínua, garantindo máxima segurança e discrição no seu espaço.',
  },
];
