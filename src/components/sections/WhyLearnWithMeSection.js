import React from "react";

function WhyLearnWithMeSection() {
  const points = [
    "Beginner-friendly explanations",
    "Real-world business examples",
    "Portfolio project guidance",
    "Interview preparation",
  ];

  return (
    <section id="why" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
              Why Bryan Analytics Lab
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Expert guidance that stays practical
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Whether you’re starting a degree, switching careers, or leveling up at
              work, you’ll learn analytics the way it’s used in real teams:
              hands-on, structured, and outcome-oriented.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 ring-1 ring-white/[0.05]">
            <ul className="space-y-5">
              {points.map((point) => (
                <li key={point} className="flex gap-4">
                  <span
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-sm text-indigo-200 ring-1 ring-indigo-500/25"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-base leading-relaxed text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyLearnWithMeSection;
