import React from "react";
import { Link } from "react-router-dom";
import FooterSection from "../components/FooterSection.js";
import SEOHead from "../components/SEOHead.js";
import { SITE_URL } from "../seo/siteConfig.js";

function BookingPage() {
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book a Data Analytics Tutoring Session",
    url: `${SITE_URL}/booking`,
    isPartOf: {
      "@type": "WebSite",
      name: "Bryan Analytics Lab",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Book Data Analytics Tutoring Session | Bryan Analytics Lab"
        description="Book a one-on-one data analytics tutoring session for Excel, SQL, Python, and machine learning fundamentals."
        path="/booking"
        keywords="book data analytics tutor, excel tutoring, sql tutoring, python tutoring"
        structuredData={[bookingSchema]}
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

      <main className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
          Booking
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Schedule a session
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          This is a placeholder page for your booking flow. Connect it to
          Calendly, Google Calendar, or your own booking system when you are
          ready.
        </p>

        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 ring-1 ring-white/[0.04]">
          <h2 className="text-lg font-semibold text-white">Next step</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Replace this content with your availability widget and session
            booking form.
          </p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

export default BookingPage;
