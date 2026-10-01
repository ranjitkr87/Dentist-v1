import { TreatmentItem, FAQItem, TestimonialItem } from '../types/dental';

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'implants',
    category: 'restorative',
    icon: 'hardware',
    title: 'Precision Dental Implants',
    badge: 'Lifetime Warranty',
    description: 'CBCT 3D guided computer placement with Swiss grade titanium fixtures. Replaces missing teeth with biological realism and bone preservation.',
    duration: '45-60 min',
    actionText: 'Explore Protocol',
    priceNote: 'From ₹25,000 / tooth',
  },
  {
    id: 'aligners',
    category: 'cosmetic',
    icon: 'sentiment_satisfied',
    title: 'Invisible Clear Aligners',
    badge: 'Invisalign® Certified',
    description: 'Discrete, transparent orthodontics custom planned with 3D digital simulation. Straighten teeth with zero wire friction and no dietary restrictions.',
    duration: '6 - 14 months',
    actionText: 'Get 3D Scan',
    priceNote: 'EMI from ₹4,500/mo',
  },
  {
    id: 'rct',
    category: 'restorative',
    icon: 'biotech',
    title: 'Microscopic Root Canal',
    badge: 'Single Sitting',
    description: 'Performed under surgical magnification microscopes. Eliminate toothaches with total sterile canal cleaning and warm continuous wave obturation.',
    duration: '60 min session',
    actionText: 'Book Relief',
    priceNote: 'From ₹6,500',
  },
  {
    id: 'veneers',
    category: 'cosmetic',
    icon: 'flare',
    title: 'Veneers & Smile Makeovers',
    badge: 'Cosmetic Studio',
    description: 'Ultra-thin, artisanal E-max ceramic veneers and gentle laser teeth whitening that enhance symmetry, shade, and natural incisal translucency.',
    duration: '2 Appointments',
    actionText: 'View Gallery',
    priceNote: 'Custom Arch Design',
  },
  {
    id: 'pediatric',
    category: 'preventive',
    icon: 'child_care',
    title: 'Pediatric & Family Care',
    badge: 'Zero Anxiety',
    description: 'Dedicated child-friendly operatory, pit and fissure sealants, fluoride varnishing, and gentle habit management with empathy and warmth.',
    duration: '30-40 min',
    actionText: 'Family Consultation',
    priceNote: 'Gentle Care Plans',
  },
  {
    id: 'crowns',
    category: 'restorative',
    icon: 'auto_fix_high',
    title: 'Zirconia Crowns & Inlays',
    badge: 'CAD/CAM Digital',
    description: 'No messy physical trays. High-resolution optical intraoral scanning with computerized precision milling for durable, biomimetic restoration.',
    duration: 'Same-Day Ready',
    actionText: 'Learn Details',
    priceNote: 'Digital Precision Fit',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is the initial dental consultation painful or invasive?',
    answer: 'Not at all. The initial consultation is strictly diagnostic and conversational. It includes high-resolution digital intraoral photographs, 3D panoramic imaging if required, and a detailed discussion with Dr. Sharma regarding your goals. No drilling or invasive treatment occurs during this exploratory session.',
  },
  {
    id: 'faq-2',
    question: 'How do clear aligners compare to conventional braces in cost & duration?',
    answer: 'Clear aligners (Invisalign®) offer discreet aesthetic alignment without metal brackets or mouth sores. While conventional braces take 18–24 months, aligners typically complete treatment in 6–14 months depending on complexity. We offer zero-interest EMI schemes starting from ₹4,500/month.',
  },
  {
    id: 'faq-3',
    question: 'Can I really get a root canal completed in a single sitting?',
    answer: 'Yes. In over 85% of acute pulpitis cases, microscopic single-visit endodontics is completely feasible and clinically preferred. With surgical magnification and motorized rotary files, the infected pulp is eradicated and hermetically sealed in approximately 50 to 60 minutes with complete local anesthesia.',
  },
  {
    id: 'faq-4',
    question: 'What sterilization standards are maintained in your operatory?',
    answer: 'We practice a strict 7-tier sterilization protocol meeting CDC and European Class-B autoclave guidelines. Every instrument set undergoes ultrasonic cleaning, enzymatic bio-film removal, and vacuum sterilization, sealed in individual tamper-evident pouches unsealed exclusively at your chairside.',
  },
  {
    id: 'faq-5',
    question: 'Are dental treatments covered by insurance or 0% EMI?',
    answer: 'We provide direct cashless assistance for major corporate dental policies and comprehensive claim reimbursement documentation. For implants and smile makeovers, we partner with Bajaj Finserv, HDFC, and CarePay to offer 0% interest monthly installments up to 12 months.',
  },
  {
    id: 'faq-6',
    question: 'What should I do during an acute dental emergency?',
    answer: 'Call our dedicated emergency hotline at +91 (080) 4920 4000 or message us on WhatsApp. For knocked-out teeth, preserve the tooth in cold milk or saliva and reach our Indiranagar clinic within 60 minutes for viable replantation. We reserve emergency slots every afternoon.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Vikramaditya Rao',
    role: 'Indiranagar • Dental Implant Patient',
    quote: 'I had delayed getting my dental implant for over four years due to intense dental phobia. Dr. Ananya and her team completely changed that. The procedure was truly painless, and their clinic feels like a boutique spa in Indiranagar rather than a hospital.',
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Pooja Nambiar',
    role: 'Koramangala • Clear Aligners',
    quote: 'Completed my Invisalign treatment in exactly 9 months. The 3D progress tracking kept me informed every 2 weeks. The pricing was 100% upfront with zero hidden lab fees. Highly recommended for busy tech professionals.',
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Karthik Sundaram',
    role: 'Whitefield • Microscopic RCT',
    quote: 'Needed a single-sitting emergency root canal on a Saturday afternoon. From the instant WhatsApp appointment confirmation to the microscopically precise treatment, the experience was seamless and painless.',
    rating: 5,
  },
];
