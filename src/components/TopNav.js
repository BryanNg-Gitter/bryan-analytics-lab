import React from "react";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TopNav() {
  const links = [
    { label: "Home", id: "top" },
    { label: "What I Teach", id: "teaches" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Booking", id: "booking-cta" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070a12]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:gap-4">
        <button
          type="button"
          onClick={() => scrollToId("top")}
          className="flex min-w-0 items-center gap-3 rounded-lg text-left outline-none ring-indigo-500/40 transition hover:bg-white/[0.03] focus-visible:ring-2"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/35 via-sky-500/25 to-cyan-500/20 ring-1 ring-white/10">
            <span className="text-xs font-bold tracking-tight text-white" aria-hidden="true">
              BAL
            </span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold tracking-tight text-white">
              Bryan Analytics Lab
            </div>
            <div className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:block">
              Premium analytics tutoring
            </div>
          </div>
        </button>

        <nav
          className="flex w-full flex-wrap items-center justify-end gap-1 sm:w-auto sm:gap-0.5"
          aria-label="Primary"
        >
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={
                item.id === "booking-cta"
                  ? "rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#070a12] shadow-sm transition hover:bg-slate-100 sm:text-sm"
                  : "rounded-lg px-2.5 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/[0.04] hover:text-white sm:px-3 sm:text-sm"
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default TopNav;
