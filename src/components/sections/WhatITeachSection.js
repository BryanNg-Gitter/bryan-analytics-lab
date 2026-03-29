import React from "react";

function IconExcel() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 2h9l3 3v17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 2v4h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 11l2 2-2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSQL() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 6v6c0 1.1 3.6 2 8 2s8-.9 8-2V6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 12v6c0 1.1 3.6 2 8 2s8-.9 8-2v-6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 11h2l1 2 1-4h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPython() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2c-3 0-5 1.6-5 4s2 4 5 4 5-1.6 5-4-2-4-5-4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 10v12h6V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 14h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 17h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconML() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2l3 5-3 1-3-1 3-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 11l5 3 5-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11l-1 8h2l2-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 11l1 8h-2l-2-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" aria-hidden="true" />
    </svg>
  );
}

function WhatITeachSection() {
  return (
    <section id="teaches" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            What I Teach
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The analytics stack that employers expect
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Practical, tool-first training for Excel, SQL, Python, and beginner
            Machine Learning—designed for students, career changers, and
            professionals who want skills that transfer to the job.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04] transition hover:border-indigo-500/25 hover:bg-white/[0.03]">
            <div className="text-indigo-300 transition group-hover:text-indigo-200">
              <IconExcel />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              Excel for Business Analytics
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Build polished workbooks, automate reporting, and translate messy
              inputs into executive-ready insights.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04] transition hover:border-sky-500/25 hover:bg-white/[0.03]">
            <div className="text-sky-300 transition group-hover:text-sky-200">
              <IconSQL />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              SQL for Data Analysts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Write reliable queries, model real business questions, and validate
              results with checks analysts use on the job.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04] transition hover:border-emerald-500/25 hover:bg-white/[0.03]">
            <div className="text-emerald-300 transition group-hover:text-emerald-200">
              <IconPython />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              Python for Data Science
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Go from core Python to pandas workflows for cleaning, exploring, and
              preparing data for analysis and modeling.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04] transition hover:border-violet-500/25 hover:bg-white/[0.03]">
            <div className="text-violet-300 transition group-hover:text-violet-200">
              <IconML />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              Machine Learning Fundamentals
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Learn the beginner ML workflow: frame the problem, prepare data,
              train models, evaluate honestly, and iterate with intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatITeachSection;
