import React from "react";
import TestimonialSlider from "../TestimonialSlider.js";
import { testimonialSlides } from "../../content/testimonials.js";

function StudentMessagesSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            Private notes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What students and parents say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Real messages shared by families after tutoring sessions.
          </p>
        </div>

        <div className="mt-12">
          <TestimonialSlider
            slides={testimonialSlides}
            compact
            ariaLabel="What students and parents say"
          />
        </div>
      </div>
    </section>
  );
}

export default StudentMessagesSection;
