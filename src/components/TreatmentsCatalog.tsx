import React, { useState } from 'react';
import { TreatmentItem, TreatmentCategory } from '../types/dental';
import { TREATMENTS_DATA } from '../data/clinicalData';

interface TreatmentsCatalogProps {
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export const TreatmentsCatalog: React.FC<TreatmentsCatalogProps> = ({ onSelectTreatment }) => {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory>('all');

  const filteredTreatments = TREATMENTS_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const categories: { key: TreatmentCategory; label: string }[] = [
    { key: 'all', label: 'All Care' },
    { key: 'restorative', label: 'Restorative' },
    { key: 'cosmetic', label: 'Cosmetic' },
    { key: 'preventive', label: 'Preventive' },
  ];

  return (
    <section
      aria-labelledby="treatments-heading"
      className="py-16 md:py-24 bg-background"
      id="treatments"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs uppercase tracking-wider mb-3 font-semibold">
              Specialized Dental Disciplines
            </div>
            <h2
              id="treatments-heading"
              className="font-display text-3xl sm:text-4xl text-on-surface tracking-tight"
            >
              Clinically Advanced Care. Calmly Delivered.
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              Every procedure combines modern 3D digital imaging, gentle anesthetics, and bespoke material aesthetics
              for lasting oral longevity.
            </p>
          </div>

          {/* Filter Tabs / Category Pills */}
          <div
            role="tablist"
            aria-label="Treatment categories"
            className="mt-6 md:mt-0 flex flex-wrap gap-2"
          >
            {categories.map(({ key, label }) => {
              const isActive = selectedCategory === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm transition-all focus-visible:outline-2 focus-visible:outline-primary ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm font-semibold'
                      : 'bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <article
              key={treatment.id}
              className="card-hover-lift bg-surface-container-lowest p-7 rounded-2xl border border-outline-variant/40 flex flex-col justify-between"
              aria-labelledby={`treatment-title-${treatment.id}`}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center mb-6 shadow-xs"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-2xl">{treatment.icon}</span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 id={`treatment-title-${treatment.id}`} className="font-headline-sm text-lg sm:text-xl text-on-surface font-semibold">
                    {treatment.title}
                  </h3>
                </div>

                <div className="mb-3">
                  <span className="inline-block font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium">
                    {treatment.badge}
                  </span>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                  {treatment.description}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="font-label-md text-xs text-on-surface-variant flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    schedule
                  </span>{' '}
                  {treatment.duration}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectTreatment(treatment)}
                  className="inline-flex items-center gap-1 text-primary font-label-lg text-xs sm:text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-primary rounded-md p-1"
                >
                  <span>{treatment.actionText}</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
