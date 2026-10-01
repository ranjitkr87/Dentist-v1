export type TreatmentCategory = 'all' | 'restorative' | 'cosmetic' | 'preventive';

export interface TreatmentItem {
  id: string;
  category: 'restorative' | 'cosmetic' | 'preventive';
  icon: string;
  title: string;
  badge: string;
  description: string;
  duration: string;
  actionText: string;
  priceNote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
