import React from "react";
import { Link } from "react-router-dom";

function BookingCTASection() {
  return (
    <section id="booking-cta" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-600/[0.12] via-[#070a12] to-cyan-600/[0.08] p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_55%)]" />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
                Next step
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to level up your analytics skills?
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
                Book a session for Excel, SQL, Python, or beginner Machine
                Learning—structured sessions that fit your goals and your pace.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Excel", "SQL", "Python", "ML"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#070a12]/60 p-8 ring-1 ring-white/[0.05] backdrop-blur">
              <p className="text-sm font-semibold text-white">1-on-1 sessions</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Tell me what you’re working toward—then we’ll build a practical
                path to get there.
              </p>
              <div className="mt-8">
                <Link
                  to="/booking"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#070a12] shadow-sm transition hover:bg-slate-100 sm:w-auto"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTASection;
