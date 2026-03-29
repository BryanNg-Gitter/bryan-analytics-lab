import React from "react";

function StoryCard({ name, description, outcome, image }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 ring-1 ring-white/[0.04]">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c1018]">
        {image ? (
          <img src={image} alt="" className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
        <div className="mt-5 border-t border-white/[0.06] pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Outcome
          </p>
          <p className="mt-1 text-sm font-medium text-slate-300">{outcome}</p>
        </div>
      </div>
    </article>
  );
}

function StudentSuccessStoriesSection() {
  const stories = [
    { name: "", description: "", outcome: "", image: null },
    { name: "", description: "", outcome: "", image: null },
    { name: "", description: "", outcome: "", image: null },
  ];

  return (
    <section id="success-stories" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Real transformations from students who built real analytics skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((story, i) => (
            <StoryCard
              key={i}
              name={story.name}
              description={story.description}
              outcome={story.outcome}
              image={story.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentSuccessStoriesSection;
