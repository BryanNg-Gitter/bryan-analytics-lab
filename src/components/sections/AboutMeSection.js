import React from "react";

function AboutMeSection() {
  const profileSrc = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#6366f1" stop-opacity="0.4"/>
          <stop offset="1" stop-color="#22d3ee" stop-opacity="0.2"/>
        </linearGradient>
      </defs>
      <rect width="480" height="480" rx="96" fill="url(#g)"/>
      <circle cx="240" cy="190" r="88" fill="#0b1220"/>
      <path d="M110 420c18-88 86-140 130-140s112 52 130 140" fill="#0b1220"/>
      <text x="240" y="208" font-family="system-ui, sans-serif" font-size="52" font-weight="700" text-anchor="middle" fill="#f8fafc">BAL</text>
    </svg>`
  )}`;

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full max-w-md lg:shrink-0">
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-2 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]">
              <img
                src={profileSrc}
                alt="Bryan Analytics Lab data analytics tutor profile"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Premium analytics tutoring, built for real-world work
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-400">
              <p>
                Bryan Analytics Lab is a premium tutoring service specializing in
                Data & Business Analytics.
              </p>
              <p>
                I help students and professionals build real-world skills in Excel,
                SQL, Python, and Machine Learning.
              </p>
              <p>
                Master’s-level training with a practical, project-driven approach.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04]">
              <p className="text-sm leading-relaxed text-slate-400">
                Confident, friendly, and expert guidance—so you leave every session
                with clarity, momentum, and something tangible to show for it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
