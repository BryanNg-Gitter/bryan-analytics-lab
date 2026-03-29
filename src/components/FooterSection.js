import React from "react";

function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070a12]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Bryan Analytics Lab</div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
              Premium analytics tutoring for Excel, SQL, Python, and beginner
              Machine Learning.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </div>
            <a
              href="mailto:your-email@example.com"
              className="mt-2 inline-block text-sm text-slate-400 transition hover:text-white"
            >
              your-email@example.com
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Social
            </div>
            <div className="mt-2 flex flex-wrap gap-5">
              <a href="#" className="text-sm text-slate-400 transition hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-slate-400 transition hover:text-white">
                GitHub
              </a>
              <a href="#" className="text-sm text-slate-400 transition hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Bryan Analytics Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
