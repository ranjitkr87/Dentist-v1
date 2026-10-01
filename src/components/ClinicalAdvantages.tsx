import React from 'react';

export const ClinicalAdvantages: React.FC = () => {
  return (
    <section
      aria-labelledby="advantages-heading"
      className="py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant/20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider mb-3 font-semibold">
            The Aura Standard
          </div>
          <h2
            id="advantages-heading"
            className="font-display text-3xl sm:text-4xl text-on-surface tracking-tight"
          >
            Setting a New Benchmark in Patient Comfort
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            Every clinical decision is engineered to protect your time, guarantee painless sessions, and uphold
            uncompromising sterilization protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div
                className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs mb-5"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-2xl">spa</span>
              </div>
              <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">Zero-Pain Protocol</h3>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Computerized target delivery, topical numbing gels, and optional conscious sedation ensure anxious
                patients feel at absolute ease.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 text-primary font-label-sm text-xs font-semibold">
              Gentle Anesthesia Delivery
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div
                className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs mb-5"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-2xl">sanitizer</span>
              </div>
              <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">
                Class-B 7-Step Sterilization
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                European-standard Class-B autoclaves with color-coded chemical indicator pouches opened exclusively
                in front of the patient.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 text-primary font-label-sm text-xs font-semibold">
              Hospital Infection Control
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div
                className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs mb-5"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-2xl">receipt_long</span>
              </div>
              <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">Transparent Pricing</h3>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Detailed written treatment plans provided upfront with zero hidden charges, transparent lab fees,
                and clear guarantees.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 text-primary font-label-sm text-xs font-semibold">
              0% Interest EMI Available
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div
                className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs mb-5"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-2xl">event_available</span>
              </div>
              <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">
                Evening &amp; Weekend Care
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Open until 8:30 PM weekdays and full Sunday hours to accommodate busy corporate professionals and
                families with ease.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 text-primary font-label-sm text-xs font-semibold">
              Zero Wait Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
