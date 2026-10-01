import React from 'react';

export const SanctuaryTour: React.FC = () => {
  return (
    <section
      aria-labelledby="tour-heading"
      className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/20"
      id="tour"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-primary font-label-sm text-xs uppercase tracking-wider font-semibold">
              Architectural Serenity
            </div>
            <h2
              id="tour-heading"
              className="font-display text-3xl sm:text-4xl text-on-surface leading-tight"
            >
              Designed as a Sanctuary, Not a Sterile Waiting Room
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Traditional dental clinics provoke physiological tension. We purposefully collaborated with leading
              interior architects to craft operatory suites featuring warm Scandinavian fluted timber, acoustic
              soundproofing, soft diffused daylight, and aromatherapy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <p className="font-label-lg text-sm text-on-surface font-semibold">Acoustic Isolation</p>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                  Noise-dampened operatory walls for a peaceful, quiet visit.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <p className="font-label-lg text-sm text-on-surface font-semibold">Ceiling Entertainment</p>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                  Watch favorite documentaries or stream relaxing music.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx4knMNFxpD4XMAzqytmOXZFZsdEmVpTOfeUo5qQxCGUrbd-f4JaOTU-wQG-Wq57iVUBxXc3yncbGSpU3UFc8Oqk1g_Z7nhQx84XE91pbfbz95BCcbwFcPzsrLNqmIf0NN4bHHQr1QrBZ5wW3nB0uJY6YMAYYj7g6mbZ3RH0lJZ2aI1bHQYFTahvKcGtJU4yqA5DoPt-GgUqTUHZXKO6RWJqDCOVczackXh8kr4og64wzM_pztbe4F"
                alt="Aura Dental clinic interior showing minimalist fluted oak reception partition, ergonomic dental lounge, modern surgical lighting and panoramic Bengaluru garden view"
                width={700}
                height={440}
                loading="lazy"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
