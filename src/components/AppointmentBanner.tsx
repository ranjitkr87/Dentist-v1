import React, { useState } from 'react';
import { BookingFormData } from '../types/dental';

interface AppointmentBannerProps {
  formData: BookingFormData;
  setFormData: React.Dispatch<React.SetStateAction<BookingFormData>>;
}

export const AppointmentBanner: React.FC<AppointmentBannerProps> = ({ formData, setFormData }) => {
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRefNumber, setBookingRefNumber] = useState<string>('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobileNumber.trim()) {
      return;
    }
    const refCode = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRefNumber(refCode);
    setBookingConfirmed(true);
  };

  return (
    <section
      aria-labelledby="appointment-heading"
      className="py-16 md:py-24 bg-surface-container-lowest"
      id="appointment-banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="relative rounded-3xl bg-inverse-surface text-inverse-on-surface overflow-hidden p-6 sm:p-10 lg:p-14 shadow-2xl">
          {/* Background ambient subtle glow */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low/10 text-primary-fixed font-label-sm text-xs uppercase tracking-wider font-semibold">
                Same-Day Appointments Available
              </span>
              <h2
                id="appointment-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl text-inverse-on-surface leading-tight font-normal"
              >
                Ready for a Pain-Free, Confident Smile?
              </h2>
              <p className="font-body-lg text-sm sm:text-base text-inverse-on-surface/80 max-w-xl leading-relaxed">
                Experience gentle clinical precision in Indiranagar, Bengaluru. Walk-ins welcome for acute emergencies,
                or schedule your comprehensive consultation in seconds.
              </p>

              <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="tel:+918049204000"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-xs sm:text-sm font-semibold hover:bg-primary-fixed-dim transition-colors focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    call
                  </span>
                  <span>Call +91 (080) 4920 4000</span>
                </a>
                <a
                  href="https://wa.me/918049204000?text=Hello%20Aura%20Dental,%20I%20am%20interested%20in%20booking%20a%20priority%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-surface-container-low/10 text-inverse-on-surface border border-outline-variant/30 hover:bg-surface-container-low/20 transition-colors font-label-lg text-xs sm:text-sm font-medium focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span className="material-symbols-outlined text-primary-fixed text-lg" aria-hidden="true">
                    chat
                  </span>
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Fast Appointment Booking Card Widget */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest text-on-surface p-6 sm:p-8 rounded-2xl shadow-xl border border-outline-variant/30">
                {bookingConfirmed ? (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="text-center py-6 space-y-4 animate-fade-in"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto" aria-hidden="true">
                      <span className="material-symbols-outlined text-3xl">check_circle</span>
                    </div>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface">Consultation Requested!</h3>
                    <div className="bg-surface-container-low p-4 rounded-xl text-left text-xs sm:text-sm space-y-2 border border-outline-variant/20">
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">Reference Code:</span>
                        <span className="font-bold text-primary">{bookingRefNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">Patient:</span>
                        <span className="font-semibold">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">Procedure:</span>
                        <span className="font-semibold text-right">{formData.treatment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">Time Slot:</span>
                        <span className="font-semibold">{formData.preferredTime}</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Our clinical coordinator will contact you at <strong>{formData.mobileNumber}</strong> within 15 minutes to confirm the appointment.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setBookingConfirmed(false);
                        setFormData({
                          fullName: '',
                          mobileNumber: '',
                          treatment: 'Dental Implants Consultation',
                          preferredDate: '',
                          preferredTime: 'Morning (10:00 AM - 1:00 PM)',
                          notes: '',
                        });
                      }}
                      className="w-full py-2.5 rounded-full bg-surface-container text-on-surface text-xs font-semibold hover:bg-surface-container-high transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-headline-sm text-lg sm:text-xl font-bold mb-1">Request Priority Slot</h3>
                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-5">
                      Our coordinator will confirm within 15 minutes.
                    </p>

                    <form onSubmit={handleBookingSubmit} className="space-y-4" aria-label="Appointment Request Form">
                      <div>
                        <label htmlFor="patient-name" className="block font-label-md text-xs sm:text-sm text-on-surface mb-1 font-semibold">
                          Your Full Name <span className="text-error" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="patient-name"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Verma"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface text-sm bg-surface-container-lowest"
                        />
                      </div>

                      <div>
                        <label htmlFor="patient-phone" className="block font-label-md text-xs sm:text-sm text-on-surface mb-1 font-semibold">
                          Mobile Number <span className="text-error" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="patient-phone"
                          name="mobileNumber"
                          type="tel"
                          required
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface text-sm bg-surface-container-lowest"
                        />
                      </div>

                      <div>
                        <label htmlFor="treatment-select" className="block font-label-md text-xs sm:text-sm text-on-surface mb-1 font-semibold">
                          Treatment Interest
                        </label>
                        <select
                          id="treatment-select"
                          name="treatment"
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface text-sm bg-surface-container-lowest"
                        >
                          <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                          <option value="Clear Aligners / Invisalign®">Clear Aligners / Invisalign®</option>
                          <option value="Microscopic Root Canal Therapy">Microscopic Root Canal Therapy</option>
                          <option value="Veneers & Smile Makeovers">Veneers &amp; Smile Makeovers</option>
                          <option value="Routine Checkup & Teeth Cleaning">Routine Checkup &amp; Teeth Cleaning</option>
                          <option value="Pediatric Consultation">Pediatric Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferred-slot" className="block font-label-md text-xs sm:text-sm text-on-surface mb-1 font-semibold">
                          Preferred Time of Day
                        </label>
                        <select
                          id="preferred-slot"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface text-sm bg-surface-container-lowest"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                          <option value="Evening (5:30 PM - 8:30 PM)">Evening (5:30 PM - 8:30 PM)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-sm sm:text-base font-semibold hover:bg-primary-container transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-primary active:scale-[0.99]"
                      >
                        Confirm Appointment Request
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
