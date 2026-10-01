import React from 'react';

export const PatientJourney: React.FC = () => {
  return (
    <section
      aria-labelledby="journey-heading"
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider mb-3 font-semibold">
            Streamlined Experience
          </div>
          <h2
            id="journey-heading"
            className="font-display text-3xl sm:text-4xl text-on-surface"
          >
            Your Seamless Path to Optimal Oral Health
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Predictable, transparent, and focused entirely around your comfort.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" aria-label="Step by step treatment journey">
          {/* Step 1 */}
          <li className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 relative">
            <span className="font-display text-4xl font-semibold text-primary/30" aria-hidden="true">
              01
            </span>
            <h3 className="font-headline-sm text-base font-semibold text-on-surface mt-2 mb-2">Instant Booking</h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Book online or through WhatsApp in 30 seconds. Choose your preferred time slot and doctor with immediate
              calendar sync.
            </p>
          </li>

          {/* Step 2 */}
          <li className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 relative">
            <span className="font-display text-4xl font-semibold text-primary/30" aria-hidden="true">
              02
            </span>
            <h3 className="font-headline-sm text-base font-semibold text-on-surface mt-2 mb-2">
              Digital Scan &amp; Review
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              High-definition intraoral scanning and panoramic digital X-rays give you an immediate 3D visualization
              of your mouth.
            </p>
          </li>

          {/* Step 3 */}
          <li className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 relative">
            <span className="font-display text-4xl font-semibold text-primary/30" aria-hidden="true">
              03
            </span>
            <h3 className="font-headline-sm text-base font-semibold text-on-surface mt-2 mb-2">Custom Care Plan</h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              You receive a transparent, itemized roadmap detailing options, materials, timelines, and flexible EMI
              payment options.
            </p>
          </li>

          {/* Step 4 */}
          <li className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 relative">
            <span className="font-display text-4xl font-semibold text-primary/30" aria-hidden="true">
              04
            </span>
            <h3 className="font-headline-sm text-base font-semibold text-on-surface mt-2 mb-2">
              Gentle Care &amp; Aftercare
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Pain-managed treatment in our serene operatory suite followed by scheduled check-ins and lifetime
              maintenance protocols.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};
