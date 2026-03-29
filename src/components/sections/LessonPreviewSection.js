import React from "react";

function LessonPreviewSection() {
  return (
    <section id="lesson-preview" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            Preview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Try a Real Lesson Preview
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Watch short clips from actual lessons to see how I teach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02] ring-1 ring-white/[0.04]">
            <div className="aspect-video w-full bg-[#0c1018]" />
            <div className="border-t border-white/[0.06] px-4 py-3">
              <p className="text-sm font-medium text-slate-500">Video 1</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02] ring-1 ring-white/[0.04]">
            <div className="aspect-video w-full bg-[#0c1018]" />
            <div className="border-t border-white/[0.06] px-4 py-3">
              <p className="text-sm font-medium text-slate-500">Video 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LessonPreviewSection;
