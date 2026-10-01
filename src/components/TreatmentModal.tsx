import React from 'react';
import { TreatmentItem } from '../types/dental';

interface TreatmentModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBookTreatment: (title: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-surface-container-lowest text-on-surface w-full max-w-lg rounded-2xl shadow-2xl border border-outline-variant/30 p-6 sm:p-8 relative">
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">
            close
          </span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              {treatment.icon}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
              {treatment.badge}
            </span>
            <h3 id="modal-title" className="font-headline-sm text-xl font-bold">
              {treatment.title}
            </h3>
          </div>
        </div>

        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5">
          {treatment.description}
        </p>

        <div className="bg-surface-container-low p-4 rounded-xl space-y-2 text-xs sm:text-sm mb-6 border border-outline-variant/20">
          <div className="flex justify-between">
            <span className="text-on-surface-variant font-medium">Estimated Duration:</span>
            <span className="font-semibold text-on-surface">{treatment.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant font-medium">Pricing / Financials:</span>
            <span className="font-semibold text-primary">{treatment.priceNote}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant font-medium">Clinical Standard:</span>
            <span className="font-semibold text-on-surface">Painless Computerized Local Anesthesia</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              const title = treatment.title;
              onClose();
              onBookTreatment(title);
            }}
            className="flex-1 py-3 rounded-full bg-primary text-on-primary font-label-lg text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-primary text-center"
          >
            Book This Treatment
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-full bg-surface-container text-on-surface font-label-lg text-sm font-medium hover:bg-surface-container-high transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
