import React from 'react';

interface HeroSectionProps {
  onBookClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 lg:pt-18 lg:pb-28 bg-background"
      id="hero"
    >
      {/* Decorative ambient gradient shapes */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-fixed/25 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Specialty Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface font-label-md text-xs sm:text-sm shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="font-medium">Advanced Dental Care &amp; Aesthetics • Indiranagar, Bengaluru</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[56px] text-on-surface leading-[1.12] tracking-tight font-normal"
            >
              Exceptional Dental Craftsmanship Built on{' '}
              <span className="italic font-display text-primary">Reassurance &amp; Trust</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Experience pain-managed restorative treatments, precision implants, and cosmetic smile architecture
              in a serene, hospital-grade sterilization environment designed to alleviate clinical anxiety.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#appointment-banner"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-sm sm:text-base font-semibold shadow-sm hover:bg-primary-container transition-all duration-200 active:scale-[0.99] glow-teal text-center focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  calendar_month
                </span>
                <span>Book Consultation</span>
              </a>
              <a
                href="https://wa.me/918049204000?text=Hello%20Aura%20Dental,%20I%20would%20like%20to%20consult%20Dr.%20Ananya%20Sharma."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface font-label-lg text-sm sm:text-base font-medium hover:bg-surface-container-low transition-colors duration-200 text-center focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Under CTAs */}
            <div className="pt-4 border-t border-outline-variant/30 flex flex-wrap items-center gap-y-3 gap-x-6 text-on-surface-variant font-label-md text-xs sm:text-sm">
              <div className="flex items-center gap-1.5" aria-label="Rating: 4.9 out of 5 stars from over 1200 verified patients">
                <span className="text-amber-500 font-bold" aria-hidden="true">
                  ★ 4.9/5
                </span>
                <span className="font-medium">Rating (1,200+ Verified Patients)</span>
              </div>
              <div className="h-3 w-px bg-outline-variant/40 hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                  verified
                </span>
                <span className="font-medium">NABH &amp; IDA Compliant Protocols</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Clinic Imagery & Floating Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Dentist Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low border border-outline-variant/40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvAFsoIdFreCxLSFiYg4iPkihXWCvMn46tpyP1JA7HSPJNc036RtQMGcgsso4OfoicsP4EaIrMi4GzY9M7FS0E1S0VgPMR2TbVXZG2rPHKMTaUfODOIJzxlVhEt3RzYDfYVoOYmYzzhSEYWpRyp1quVgHK63jom4n_2FkC2YH7kWfHOjcB1NFXeZuzKrW-zIT6mYv1Ja_KHq_YLJtIyx85ubWLFxZl8eGHFazCZyA69EScX3_E_lEe"
                  alt="Dr. Ananya Sharma, MDS Lead Prosthodontist and Implantologist smiling in clinical scrubs within operatory suite"
                  width={600}
                  height={700}
                  loading="eager"
                  className="w-full h-[440px] sm:h-[480px] lg:h-[530px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent" aria-hidden="true" />

                {/* Subtle bottom caption inside image frame */}
                <div className="absolute bottom-5 left-5 right-5 text-on-primary">
                  <p className="font-display text-lg sm:text-xl font-medium">Precision Surgical &amp; Cosmetic Care</p>
                  <p className="font-body-sm text-xs sm:text-sm text-white/90">State-of-the-Art Digital Operatory in Bengaluru</p>
                </div>
              </div>

              {/* Floating Reassurance Card 1 (Doctor profile badge) */}
              <aside
                aria-label="Doctor qualification highlight"
                className="absolute -top-4 -left-3 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-outline-variant/30 flex items-center gap-3.5 max-w-[260px]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0" aria-hidden="true">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    medical_services
                  </span>
                </div>
                <div>
                  <p className="font-label-lg text-xs sm:text-sm text-on-surface leading-tight font-semibold">Dr. Ananya Sharma, MDS</p>
                  <p className="font-body-sm text-xs text-on-surface-variant">14+ Yrs Dental Surgery Exp</p>
                </div>
              </aside>

              {/* Floating Reassurance Card 2 (Zero-pain reassurance) */}
              <aside
                aria-label="Painless anesthesia highlight"
                className="absolute -bottom-4 -right-3 sm:-right-6 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-outline-variant/30 flex items-center gap-3 max-w-[240px]"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0" aria-hidden="true">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                </div>
                <div className="font-label-sm text-xs leading-tight text-on-surface">
                  <span className="font-bold text-on-surface block">Pain-Managed Care</span>
                  <span className="text-on-surface-variant text-[11px]">Computerized Local Anesthesia</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
