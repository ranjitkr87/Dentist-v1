import React from 'react';

interface DoctorProfileProps {
  onConsultClick: (doctorName: string) => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onConsultClick }) => {
  return (
    <section
      aria-labelledby="doctor-heading"
      className="py-16 md:py-24 bg-background"
      id="doctor"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Doctor Portrait */}
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-lg">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvAFsoIdFreCxLSFiYg4iPkihXWCvMn46tpyP1JA7HSPJNc036RtQMGcgsso4OfoicsP4EaIrMi4GzY9M7FS0E1S0VgPMR2TbVXZG2rPHKMTaUfODOIJzxlVhEt3RzYDfYVoOYmYzzhSEYWpRyp1quVgHK63jom4n_2FkC2YH7kWfHOjcB1NFXeZuzKrW-zIT6mYv1Ja_KHq_YLJtIyx85ubWLFxZl8eGHFazCZyA69EScX3_E_lEe"
                    alt="Dr. Ananya Sharma smiling in navy surgical scrubs inside Aura Dental clinic operatory"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-[380px] sm:h-[400px] object-cover object-top"
                  />
                </div>
                <div className="mt-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold tracking-wider block">
                      Clinical Availability
                    </span>
                    <p className="font-label-lg text-xs sm:text-sm text-on-surface font-semibold">Today: 3 Slots Open</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[11px] font-semibold">
                    Accepting New Patients
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Doctor Credentials & Bio */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider self-start font-semibold">
                Lead Prosthodontist &amp; Medical Director
              </div>

              <div>
                <h2 id="doctor-heading" className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
                  Dr. Ananya Sharma, MDS
                </h2>
                <p className="font-label-lg text-sm sm:text-base text-primary font-semibold mt-1">
                  Periodontics, Digital Smile Design &amp; Oral Implantology
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 font-body-sm text-xs sm:text-sm text-on-surface leading-relaxed">
                <p className="font-semibold text-on-surface mb-2">Academic Credentials &amp; Fellowships:</p>
                <ul className="list-disc list-inside space-y-1.5 text-on-surface-variant">
                  <li>BDS — Manipal College of Dental Sciences (Gold Medalist)</li>
                  <li>MDS — All India Institute of Medical Sciences (AIIMS, New Delhi)</li>
                  <li>Fellow of the International Congress of Oral Implantologists (FICOI, USA)</li>
                  <li>Certified Invisalign® Platinum Provider</li>
                </ul>
              </div>

              <blockquote className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed italic border-l-2 border-primary pl-4">
                &ldquo;Dentistry should never be an experience of intimidation or fear. At Aura, we spend significant
                time listening to our patients' concerns, designing bespoke smile architecture that respects biological
                harmony, and using gentle digital technologies so that your visit feels relaxing and restorative.&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
                <button
                  type="button"
                  onClick={() => onConsultClick('Doctor Consultation with Dr. Ananya Sharma')}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-primary text-on-primary font-label-lg text-xs sm:text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span>Consult Dr. Sharma</span>
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
                <a
                  href="https://wa.me/918049204000?text=Hello%20Dr.%20Ananya%20Sharma,%20I%20would%20like%20a%20second%20opinion%20on%20my%20dental%20case."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface font-label-lg text-xs sm:text-sm font-medium hover:bg-surface-container-high transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                    chat
                  </span>
                  <span>Direct Second Opinion</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
