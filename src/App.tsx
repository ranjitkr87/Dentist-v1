/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TreatmentItem, BookingFormData } from './types/dental';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustMetrics } from './components/TrustMetrics';
import { TreatmentsCatalog } from './components/TreatmentsCatalog';
import { ImplantSpotlight } from './components/ImplantSpotlight';
import { DoctorProfile } from './components/DoctorProfile';
import { ClinicalAdvantages } from './components/ClinicalAdvantages';
import { PatientJourney } from './components/PatientJourney';
import { SanctuaryTour } from './components/SanctuaryTour';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQAccordion } from './components/FAQAccordion';
import { AppointmentBanner } from './components/AppointmentBanner';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { TreatmentModal } from './components/TreatmentModal';

export default function App() {
  // Appointment Form state shared across CTA triggers
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    treatment: 'Dental Implants Consultation',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  // Selected Treatment Modal
  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<TreatmentItem | null>(null);

  // Pre-fill booking form with selected treatment and scroll to banner
  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      treatment: treatmentTitle,
    }));
    const banner = document.getElementById('appointment-banner');
    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      {/* Top Navbar */}
      <Header
        onBookClick={() => {
          const banner = document.getElementById('appointment-banner');
          if (banner) banner.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          onBookClick={() => {
            const banner = document.getElementById('appointment-banner');
            if (banner) banner.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <TrustMetrics />

        <TreatmentsCatalog onSelectTreatment={(treatment) => setSelectedTreatmentModal(treatment)} />

        <ImplantSpotlight onScheduleImplant={handleSelectTreatmentForBooking} />

        <DoctorProfile onConsultClick={handleSelectTreatmentForBooking} />

        <ClinicalAdvantages />

        <PatientJourney />

        <SanctuaryTour />

        <TestimonialsSection />

        <FAQAccordion />

        <AppointmentBanner formData={formData} setFormData={setFormData} />

        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Treatment Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatmentModal}
        onClose={() => setSelectedTreatmentModal(null)}
        onBookTreatment={handleSelectTreatmentForBooking}
      />
    </div>
  );
}
