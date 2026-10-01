import React from 'react';

export const TrustMetrics: React.FC = () => {
  return (
    <section
      aria-label="Practice credibility and trust statistics"
      className="border-y border-outline-variant/20 bg-surface-container-lowest py-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y-2 md:divide-y-0 md:divide-x divide-outline-variant/20">
          {/* Metric 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-4 pt-4 md:pt-0">
            <span className="font-display text-4xl lg:text-5xl font-medium text-primary tracking-tight">14+</span>
            <span className="font-label-lg text-sm sm:text-base text-on-surface font-semibold mt-1">
              Years Clinical Mastery
            </span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">AIIMS &amp; Manipal Alumni Team</span>
          </div>
          {/* Metric 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-6 pt-4 md:pt-0">
            <span className="font-display text-4xl lg:text-5xl font-medium text-primary tracking-tight">12,500+</span>
            <span className="font-label-lg text-sm sm:text-base text-on-surface font-semibold mt-1">
              Smiles Restored
            </span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">Implants, Aligners &amp; Aesthetics</span>
          </div>
          {/* Metric 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-6 pt-4 md:pt-0">
            <span className="font-display text-4xl lg:text-5xl font-medium text-primary tracking-tight">99.4%</span>
            <span className="font-label-lg text-sm sm:text-base text-on-surface font-semibold mt-1">
              Pain-Managed Comfort
            </span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">Documented Patient Reviews</span>
          </div>
          {/* Metric 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-6 pt-4 md:pt-0">
            <span className="font-display text-4xl lg:text-5xl font-medium text-primary tracking-tight">100%</span>
            <span className="font-label-lg text-sm sm:text-base text-on-surface font-semibold mt-1">
              Class-B Sterilization
            </span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">European Autoclave Protocols</span>
          </div>
        </div>
      </div>
    </section>
  );
};
