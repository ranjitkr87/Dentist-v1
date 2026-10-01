import React, { useState } from "react";

interface HeaderProps {
  onBookClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="bg-surface/95 backdrop-blur-md text-primary sticky top-0 z-50 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] border-b border-outline-variant/20 transition-colors"
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto h-20 gap-3 xl:gap-6">
        {/* Clinic Logo & Brand Identity */}
        <a
          href="#hero"
          aria-label="Aura Dental Sanctuary - Return to Homepage"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-2 focus-visible:outline-primary rounded-lg shrink-0"
        >
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform duration-200"
            aria-hidden="true"
          >
            <span
              className="material-symbols-outlined text-lg sm:text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dentistry
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-medium text-primary tracking-tight leading-tight">
              Aura Dental Sanctuary
            </span>
            <span className="font-label-sm text-[9px] sm:text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
              Bangalore • Center of Excellence
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 font-label-lg text-xs xl:text-sm text-on-surface-variant"
        >
          <a
            href="#treatments"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            Treatments
          </a>
          <a
            href="#spotlight"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            Implants
          </a>
          <a
            href="#doctor"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            Doctors
          </a>
          <a
            href="#tour"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            Clinic Tour
          </a>
          <a
            href="#testimonials"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            Reviews
          </a>
          <a
            href="#faqs"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="hover:text-primary font-medium transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            Contact
          </a>
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Emergency Hotline Button
          <a
            href="tel:+918049204000"
            title="Emergency Call: +91 (080) 4920 4000"
            aria-label="Call emergency dental hotline at +91 80 4920 4000"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-xs hover:bg-surface-container hover:text-red-700 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" aria-hidden="true" />
            <span className="material-symbols-outlined text-sm text-red-600" aria-hidden="true">
              call
            </span>
            <span className="hidden xl:inline font-medium">Emergency</span>
          </a> */}

          {/* WhatsApp Quick Chat Button */}
          <a
            href="https://wa.me/918049204000?text=Hello%20Aura%20Dental%20Sanctuary,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            aria-label="Chat with clinical coordinator on WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-300 transition-colors font-label-md text-xs font-medium focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span
              className="material-symbols-outlined text-emerald-600 text-sm"
              aria-hidden="true"
            >
              chat
            </span>
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          {/* Primary CTA: Book Appointment */}
          <a
            href="#appointment-banner"
            onClick={onBookClick}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-xs sm:text-sm font-semibold hover:bg-primary-container transition-all duration-200 active:scale-[0.99] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>Book Appointment</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            id="mobile-menu-btn"
            aria-label={
              mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        role="region"
        aria-label="Mobile Navigation Drawer"
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } lg:hidden px-4 py-4 bg-surface-container-lowest border-b border-outline-variant/30 shadow-lg transition-all`}
      >
        <nav className="flex flex-col space-y-3 font-label-lg text-base">
          <a
            href="#treatments"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Treatments &amp; Procedures
          </a>
          <a
            href="#spotlight"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Precision Implants Spotlight
          </a>
          <a
            href="#doctor"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Lead Specialist: Dr. Ananya Sharma
          </a>
          <a
            href="#tour"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Sanctuary Clinic Tour
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Verified Reviews
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Patient FAQs
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface-container font-medium"
          >
            Location &amp; Hours
          </a>

          <div className="pt-3 border-t border-outline-variant/20 flex flex-col gap-2.5">
            <a
              href="tel:+918049204000"
              className="flex items-center gap-2 text-primary font-medium p-2 rounded-md bg-surface-container-low"
            >
              <span
                className="material-symbols-outlined text-xl"
                aria-hidden="true"
              >
                call
              </span>
              <span>Call +91 (080) 4920 4000</span>
            </a>
            <a
              href="https://wa.me/918049204000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-800 font-medium p-2 rounded-md bg-emerald-50"
            >
              <span
                className="material-symbols-outlined text-xl text-emerald-700"
                aria-hidden="true"
              >
                chat
              </span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
