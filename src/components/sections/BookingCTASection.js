import React from "react";
import { Link } from "react-router-dom";
import TestimonialSlider from "../TestimonialSlider.js";
import { compactTestimonialSlides } from "../../content/testimonials.js";

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
                Learning. Sessions are structured to fit your goals and pace.
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
                Real messages from parents and students after sessions.
              </p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-300">
                I have over 6 years of experience in tutoring.
              </p>

              <div className="mt-5 space-y-3">
                <p className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300">
                  Over 1500 hours taught.
                </p>
                <p className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300">
                  Average rating 4.8/5 and 73% repeat students on Superprof.
                </p>
                <p className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300">
                  Group tutoring · Individual tutoring · College prep · Career
                  transfer support · High school tutoring
                </p>
              </div>

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
              <p className="text-sm font-semibold text-white">Personal sessions</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Tell me what you are working toward. We will build a practical
                path that helps you get there.
              </p>
              <div className="mt-8">
                <Link
                  to="/booking"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#070a12] shadow-sm transition hover:bg-slate-100 sm:w-auto"
                >
                  Check Availability
                </Link>
              </div>
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Kind words from students
                </h3>
                <TestimonialSlider
                  slides={compactTestimonialSlides}
                  compact
                  ariaLabel="Featured parent testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTASection;
