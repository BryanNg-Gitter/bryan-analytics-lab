import React from "react";

function StudentMessagesSection() {
  const messages = ["", "", "", "", ""];

  return (
    <section id="student-messages" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            Private notes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What Students Say in Their Own Words
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            A few kind words students have shared with me privately.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {messages.map((quote, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.02] p-8 ring-1 ring-white/[0.04]"
            >
              <blockquote className="min-h-[5rem] text-lg font-light leading-relaxed text-slate-500">
                {quote ? (
                  <>
                    <span className="text-indigo-400/80">“</span>
                    {quote}
                    <span className="text-indigo-400/80">”</span>
                  </>
                ) : (
                  <span className="sr-only">Quote placeholder</span>
                )}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentMessagesSection;
