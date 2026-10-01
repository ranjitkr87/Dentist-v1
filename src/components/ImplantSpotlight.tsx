import React, { useState } from 'react';

interface ImplantSpotlightProps {
  onScheduleImplant: (treatmentName: string) => void;
}

export const ImplantSpotlight: React.FC<ImplantSpotlightProps> = ({ onScheduleImplant }) => {
  const [implantCount, setImplantCount] = useState<number>(1);
  const [emiTenure, setEmiTenure] = useState<number>(6); // months
  const baseImplantCost = 25000;
  const calculatedEmi = Math.round((baseImplantCost * implantCount) / emiTenure);

  return (
    <section
      aria-labelledby="spotlight-heading"
      className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/20"
      id="spotlight"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column: Clinic Architectural Space */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx4knMNFxpD4XMAzqytmOXZFZsdEmVpTOfeUo5qQxCGUrbd-f4JaOTU-wQG-Wq57iVUBxXc3yncbGSpU3UFc8Oqk1g_Z7nhQx84XE91pbfbz95BCcbwFcPzsrLNqmIf0NN4bHHQr1QrBZ5wW3nB0uJY6YMAYYj7g6mbZ3RH0lJZ2aI1bHQYFTahvKcGtJU4yqA5DoPt-GgUqTUHZXKO6RWJqDCOVczackXh8kr4og64wzM_pztbe4F"
                alt="Aura Dental consultation suite with serene fluted wood paneling, patient ergonomic lounge chair and large floor to ceiling daylight windows"
                width={600}
                height={480}
                loading="lazy"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/50 via-transparent to-transparent" aria-hidden="true" />

              {/* Floating Clinic Feature Tag */}
              <div className="absolute bottom-5 left-5 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl text-on-surface border border-outline-variant/30 shadow-md">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold block">
                  Suite Tour
                </span>
                <p className="font-label-lg text-xs sm:text-sm font-semibold">Indiranagar Operatory &amp; CBCT Lab</p>
              </div>
            </div>
          </div>

          {/* Content Column: Comprehensive Implant Breakdown */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-xs uppercase tracking-wider self-start font-semibold">
              Spotlight Excellence
            </div>

            <h2
              id="spotlight-heading"
              className="font-display text-3xl sm:text-4xl text-on-surface leading-tight font-normal"
            >
              Advanced Guided Dental Implants: Reclaim Your Bite &amp; Confidence
            </h2>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Dental implants are the gold standard for missing teeth. Using computed tomographic 3D imaging, our
              surgical guides map nerve canals and bone density down to 0.1 millimeter accuracy, guaranteeing gentle
              recovery and permanent stability.
            </p>

            {/* Checklist of Benefits */}
            <ul className="space-y-3 pt-2" aria-label="Implant procedure highlights">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <div>
                  <strong className="font-label-lg text-xs sm:text-sm text-on-surface font-semibold">
                    3D CBCT Digital Bone Density Mapping:
                  </strong>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant">
                    {' '}Eliminates surgical guesswork prior to treatment.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <div>
                  <strong className="font-label-lg text-xs sm:text-sm text-on-surface font-semibold">
                    Swiss &amp; German Grade Titanium:
                  </strong>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant">
                    {' '}Biocompatible osseointegration with manufacturer lifetime warranty.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <div>
                  <strong className="font-label-lg text-xs sm:text-sm text-on-surface font-semibold">
                    Zero-Discomfort Computerized Anesthesia:
                  </strong>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant">
                    {' '}Targeted numbness without facial droop or prolonged recovery.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <div>
                  <strong className="font-label-lg text-xs sm:text-sm text-on-surface font-semibold">
                    Flexible 0% Interest EMI Financing:
                  </strong>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant">
                    {' '}Easy 6 to 12-month payment options across major Indian banks.
                  </span>
                </div>
              </li>
            </ul>

            {/* Interactive EMI Estimator Tool */}
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold text-on-surface">
                <span className="uppercase text-primary font-label-sm">0% EMI Estimator</span>
                <span>₹{calculatedEmi.toLocaleString('en-IN')}/month</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label htmlFor="implant-count" className="text-on-surface-variant block mb-1">
                    Number of Teeth ({implantCount})
                  </label>
                  <input
                    id="implant-count"
                    type="range"
                    min="1"
                    max="4"
                    value={implantCount}
                    onChange={(e) => setImplantCount(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
                <div>
                  <label htmlFor="emi-tenure" className="text-on-surface-variant block mb-1">
                    Tenure ({emiTenure} mos)
                  </label>
                  <select
                    id="emi-tenure"
                    value={emiTenure}
                    onChange={(e) => setEmiTenure(Number(e.target.value))}
                    className="w-full p-1.5 rounded border border-outline-variant/40 bg-surface-container text-xs"
                  >
                    <option value={3}>3 Months (0% Interest)</option>
                    <option value={6}>6 Months (0% Interest)</option>
                    <option value={12}>12 Months (0% Interest)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Price & CTA Block */}
            <div className="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-label-sm text-xs text-on-surface-variant block uppercase font-medium">
                  Transparent Pricing
                </span>
                <span className="font-headline-md text-2xl sm:text-3xl text-on-surface font-bold">
                  From ₹25,000
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant"> / per tooth</span>
              </div>

              <button
                type="button"
                onClick={() => onScheduleImplant('Precision Guided Dental Implants')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-lg text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span>Schedule Implant Scan</span>
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  calendar_today
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
