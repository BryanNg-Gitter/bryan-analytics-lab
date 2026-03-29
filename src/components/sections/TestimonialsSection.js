import React from "react";

function TestimonialCard({ name, title, review, avatar }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 ring-1 ring-white/[0.05]">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#0c1018]">
          {avatar ? (
            <img src={avatar} alt="" className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-white">{name}</h3>
          <p className="mt-0.5 text-xs font-medium text-slate-500">{title}</p>
        </div>
      </div>
      <blockquote className="mt-5 flex-1 border-l-2 border-indigo-500/40 pl-4">
        <p className="text-sm leading-relaxed text-slate-300">{review}</p>
      </blockquote>
    </article>
  );
}

function TestimonialsSection({ testimonials }) {
  const items =
    testimonials && testimonials.length > 0
      ? testimonials
      : [
          { name: "", title: "", review: "", avatar: null },
          { name: "", title: "", review: "", avatar: null },
          { name: "", title: "", review: "", avatar: null },
        ];

  return (
    <section id="testimonials" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            Social proof
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What Students Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Real feedback from learners who built real skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              title={t.title}
              review={t.review}
              avatar={t.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
