import React from "react";

const faqs = [
  {
    question: "How can I learn data analytics as a beginner?",
    answer:
      "Start with analytics fundamentals, then build practical skills in Excel, SQL, and Python through guided practice. Tutoring helps you follow a structured path and avoid getting stuck.",
  },
  {
    question: "What is the best way to practice data analytics for jobs?",
    answer:
      "The best approach is project-based practice using realistic datasets, clear business questions, and portfolio-ready deliverables you can discuss in interviews.",
  },
  {
    question: "Do I need coding experience before learning SQL or Python?",
    answer:
      "No. Sessions are beginner-friendly and start from core concepts before moving into applied analytics workflows.",
  },
  {
    question: "Can I get tutoring for Excel, SQL, Python, and machine learning together?",
    answer:
      "Yes. You can follow a personalized roadmap that combines tools based on your timeline, goals, and current skill level.",
  },
  {
    question: "Are these online one-on-one data analytics lessons?",
    answer:
      "Yes. Lessons are delivered online in one-on-one sessions, with guided exercises and actionable homework between sessions.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Common questions about learning data analytics
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04]"
            >
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
