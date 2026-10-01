import React from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 md:py-24 bg-surface-container-lowest"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider mb-3 font-semibold">
              Patient Voices
            </div>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl sm:text-4xl text-on-surface"
            >
              Stories of Transformed Smiles &amp; Calmed Fears
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 font-label-md text-xs sm:text-sm text-on-surface-variant font-medium">
            <span className="material-symbols-outlined text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
              star
            </span>
            <span>4.9 / 5 Rating on Google Reviews (1,200+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <article
              key={testimonial.id}
              className="p-7 rounded-2xl bg-surface-container-low/50 border border-outline-variant/30 flex flex-col justify-between"
              aria-label={`Review by ${testimonial.author}`}
            >
              <div>
                <div className="flex text-amber-500 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-sm text-on-surface italic leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <div>
                  <p className="font-label-lg text-xs sm:text-sm font-semibold text-on-surface">{testimonial.author}</p>
                  <p className="font-body-sm text-xs text-on-surface-variant">{testimonial.role}</p>
                </div>
                <span
                  className="material-symbols-outlined text-primary text-xl"
                  title="Verified Google Review"
                  aria-label="Verified Google Review"
                >
                  verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
