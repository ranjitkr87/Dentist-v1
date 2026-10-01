import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-surface-container-low border-t border-outline-variant/40"
    >
      <div className="w-full px-4 md:px-6 lg:px-16 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  dentistry
                </span>
              </div>
              <span className="font-display text-xl font-medium text-primary">Aura Dental Sanctuary</span>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Clinical excellence, gentle procedural empathy, and architectural serenity. Elevating oral healthcare
              for discerning individuals and families across Bengaluru.
            </p>
            <div className="flex items-center gap-3 pt-2 text-on-surface-variant">
              <span className="font-label-sm text-[11px] border border-outline-variant/40 px-2.5 py-1 rounded-full font-medium">
                IDA Registered
              </span>
              <span className="font-label-sm text-[11px] border border-outline-variant/40 px-2.5 py-1 rounded-full font-medium">
                NABH Standards
              </span>
            </div>
          </div>

          {/* Col 2: Treatments Links */}
          <div>
            <h4 className="font-label-lg text-xs sm:text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Treatments
            </h4>
            <ul className="space-y-2.5 font-label-sm text-xs sm:text-sm">
              <li>
                <a
                  href="#treatments"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Dental Implants
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Invisalign &amp; Orthodontics
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Smile Makeover
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Root Canal Therapy
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Pediatric Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Protocols */}
          <div>
            <h4 className="font-label-lg text-xs sm:text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Clinical Quality
            </h4>
            <ul className="space-y-2.5 font-label-sm text-xs sm:text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Sterilization Protocol
                </a>
              </li>
              <li>
                <a
                  href="#doctor"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Clinical Ethics &amp; Standards
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Patient Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Digital X-Ray Safety
                </a>
              </li>
              <li>
                <a
                  href="#appointment-banner"
                  className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  0% EMI Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapid Contact */}
          <div>
            <h4 className="font-label-lg text-xs sm:text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Indiranagar Center
            </h4>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Plot 482, 100ft Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038
            </p>
            <div className="mt-3 space-y-1">
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">Phone: +91 (080) 4920 4000</p>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">Email: care@auradental.in</p>
            </div>
          </div>
        </div>

        {/* Copyright & Regulatory Bar */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-xs text-on-surface-variant">
          <p>
            © 2026 Aura Dental Sanctuary. Clinical Excellence &amp; Architectural Serenity. All rights reserved.
            Registered under the Clinical Establishments Act.
          </p>
          <div className="flex items-center space-x-6 font-label-sm text-xs">
            <a href="/robots.txt" target="_blank" className="hover:text-primary transition-colors">
              Robots.txt
            </a>
            <a href="/sitemap.xml" target="_blank" className="hover:text-primary transition-colors">
              Sitemap
            </a>
            <a href="/llms.txt" target="_blank" className="hover:text-primary transition-colors">
              LLMs.txt
            </a>
            <a href="/humans.txt" target="_blank" className="hover:text-primary transition-colors">
              Humans.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
