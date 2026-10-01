import React, { useState } from 'react';
import { FAQS_DATA } from '../data/clinicalData';

export const FAQAccordion: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faqs-heading"
      className="py-16 md:py-24 bg-background"
      id="faqs"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider mb-3 font-semibold">
            Clear Answers
          </div>
          <h2
            id="faqs-heading"
            className="font-display text-3xl sm:text-4xl text-on-surface"
          >
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
            Everything you need to know about safety, pain management, costs, and appointments.
          </p>
        </div>

        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions Accordion">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const faqId = `faq-item-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={faq.id}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  id={faqId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-headline-sm text-base sm:text-lg text-on-surface font-semibold hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-200 text-primary ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={faqId}
                    className="px-5 sm:px-6 pb-6 pt-1 border-t border-outline-variant/20 text-on-surface-variant text-sm sm:text-base font-body-md leading-relaxed animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
