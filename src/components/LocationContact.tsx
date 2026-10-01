import React from 'react';

export const LocationContact: React.FC = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 bg-surface-container-low border-t border-outline-variant/20"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider mb-2 font-semibold">
                Visit Sanctuary
              </div>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl text-on-surface"
              >
                Location &amp; Operating Hours
              </h2>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-semibold text-on-surface">Aura Dental Sanctuary</h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Plot 482, 100 Feet Road, HAL 2nd Stage,
                  <br />
                  Opposite Domlur Flyover Park, Indiranagar,
                  <br />
                  Bengaluru, Karnataka 560038
                </p>
                <a
                  href="https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-label-md text-xs sm:text-sm font-semibold hover:underline mt-2 focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span>Open in Google Maps</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-xl">schedule</span>
              </div>
              <div className="w-full">
                <h3 className="font-headline-sm text-base font-semibold text-on-surface">Operating Timings</h3>
                <div className="mt-2 space-y-1.5 font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-semibold text-on-surface">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-on-surface">10:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-primary font-medium pt-1 border-t border-outline-variant/20">
                    <span>Emergency Care:</span>
                    <span>On-call 24/7 Triage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Support Details */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+918049204000"
                className="flex items-center gap-2 text-on-surface font-label-md text-xs sm:text-sm hover:text-primary transition-colors font-medium focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                  phone
                </span>{' '}
                +91 (080) 4920 4000
              </a>
              <a
                href="mailto:care@auradental.in"
                className="flex items-center gap-2 text-on-surface font-label-md text-xs sm:text-sm hover:text-primary transition-colors font-medium focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                  mail
                </span>{' '}
                care@auradental.in
              </a>
            </div>
          </div>

          {/* Stylized Map View Panel */}
          <div className="lg:col-span-7">
            <div className="relative h-[360px] lg:h-full min-h-[360px] rounded-3xl overflow-hidden border border-outline-variant/40 bg-surface-container shadow-sm flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-40 bg-[radial-gradient(#00685f_1px,transparent_1px)] [background-size:16px_16px]"
                aria-hidden="true"
              />
              <div className="relative z-10 text-center p-6 sm:p-8 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl border border-outline-variant/30 max-w-md shadow-lg mx-4">
                <div
                  className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center mx-auto mb-3"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-2xl">pin_drop</span>
                </div>
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">Prime Indiranagar Hub</h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Valet parking available at entrance. Located 400 meters from Indiranagar Metro Station on 100 Feet Road.
                </p>
                <a
                  href="https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-xs sm:text-sm font-semibold hover:bg-primary-container transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span>Get Driving Directions</span>
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    directions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
