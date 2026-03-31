import React from "react";
import { Link } from "react-router-dom";

const paths = [
  {
    title: "Excel Tutoring for Data Analytics",
    description:
      "Learn formulas, dashboards, cleaning, and reporting workflows used in real analyst roles.",
    to: "/excel-data-analytics-tutoring",
  },
  {
    title: "SQL Tutoring for Data Analysts",
    description:
      "Master practical querying, joins, CTEs, and business analysis with project-style exercises.",
    to: "/sql-data-analytics-tutoring",
  },
  {
    title: "Python Tutoring for Data Analytics",
    description:
      "Build confidence with Python, pandas, and analysis workflows for portfolio-ready projects.",
    to: "/python-data-analytics-tutoring",
  },
  {
    title: "Machine Learning Tutoring for Beginners",
    description:
      "Understand model building, evaluation, and ML fundamentals in plain language with hands-on guidance.",
    to: "/machine-learning-tutoring-for-beginners",
  },
];

function LearningPathsSection() {
  return (
    <section id="learning-paths" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            Learning Paths
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Choose your data analytics learning track
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Start with the tool you need most, then expand into a complete
            analytics skillset through guided one-on-one tutoring.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {paths.map((item) => (
            <article
              key={item.to}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04]"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <div className="mt-6">
                <Link
                  to={item.to}
                  className="inline-flex items-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:text-white"
                >
                  Explore this path
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningPathsSection;
