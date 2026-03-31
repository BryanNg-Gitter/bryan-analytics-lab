import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.js";
import FooterSection from "../components/FooterSection.js";
import { SITE_URL } from "../seo/siteConfig.js";

function SubjectTutoringPage({
  slug,
  title,
  heading,
  description,
  outcomes,
  keywords,
}) {
  const pageUrl = `${SITE_URL}/${slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    name: title,
    url: pageUrl,
    provider: {
      "@type": "EducationalOrganization",
      name: "Bryan Analytics Lab",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/booking`,
      serviceLocation: {
        "@type": "VirtualLocation",
        url: SITE_URL,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${title} | Bryan Analytics Lab`}
        description={description}
        path={`/${slug}`}
        keywords={keywords}
        structuredData={[serviceSchema, breadcrumbSchema]}
      />

      <header className="border-b border-white/[0.06] bg-[#070a12]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <span className="text-sm font-semibold text-white">Bryan Analytics Lab</span>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
          Data Analytics Tutoring
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {heading}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
          {description}
        </p>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 ring-1 ring-white/[0.04]">
          <h2 className="text-xl font-semibold text-white">What you will learn</h2>
          <ul className="mt-5 space-y-3">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-1 text-indigo-300" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 ring-1 ring-white/[0.04]">
          <h2 className="text-xl font-semibold text-white">Who this is for</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            These sessions are designed for beginners learning data analytics,
            students preparing for coursework, and professionals building
            practical analytics skills for job transitions or promotions.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#070a12] transition hover:bg-slate-100"
          >
            Book a Session
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25"
          >
            Explore all learning paths
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

export default SubjectTutoringPage;
