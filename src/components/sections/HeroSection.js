import React from "react";

function HeroSection() {
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden pt-12 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/[0.12] via-[#070a12] to-[#070a12]" />
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute -right-24 top-24 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-px w-[min(100%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
              Hands-on · Expert · Practical
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Bryan Analytics Lab
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
              Hands-on tutoring in Excel, SQL, Python, and Machine Learning.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToId("booking-cta")}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-[#070a12] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-slate-100"
              >
                Book a Session
              </button>
              <button
                type="button"
                onClick={() => scrollToId("teaches")}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                View Courses
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Excel", "SQL", "Python", "Machine Learning"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_24px_80px_-32px_rgba(99,102,241,0.45)] ring-1 ring-white/[0.06] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    How sessions work
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Clear structure, real datasets, and outcomes you can show—built
                    for students, career changers, and professionals.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { k: "Focus", v: "Business analytics" },
                  { k: "Style", v: "Hands-on labs" },
                  { k: "Output", v: "Portfolio pieces" },
                  { k: "Goal", v: "Job-ready skills" },
                ].map((cell) => (
                  <div
                    key={cell.k}
                    className="rounded-2xl border border-white/[0.06] bg-[#070a12]/40 p-4"
                  >
                    <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                      {cell.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {cell.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.07] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 9h8M8 13h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 21h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Your learning roadmap
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-400">
                      Diagnose gaps, practice with purpose, then ship a project you
                      can talk about with confidence.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
            <div className="pointer-events-none absolute -right-6 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
