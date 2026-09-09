export type ServiceCategory = 'domestica' | 'comercial' | 'pos-obra';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  idealFor: string;
}

export interface AreaLocation {
  name: string;
  highlight?: boolean;
}

export interface QuoteFormState {
  serviceType: ServiceCategory;
  propertyType: string;
  frequency: 'pontual' | 'semanal' | 'quinzenal' | 'mensal';
  location: string;
  approxSizeM2: number;
  hasPets: boolean;
  notes: string;
  contactName: string;
  contactPhone: string;
}
