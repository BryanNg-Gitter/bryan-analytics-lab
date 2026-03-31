import React from "react";
import TopNav from "../components/TopNav.js";
import HeroSection from "../components/sections/HeroSection.js";
import AboutMeSection from "../components/sections/AboutMeSection.js";
import WhatITeachSection from "../components/sections/WhatITeachSection.js";
import WhyLearnWithMeSection from "../components/sections/WhyLearnWithMeSection.js";
import LessonPreviewSection from "../components/sections/LessonPreviewSection.js";
import StudentMessagesSection from "../components/sections/StudentMessagesSection.js";
import LearningPathsSection from "../components/sections/LearningPathsSection.js";
import FAQSection from "../components/sections/FAQSection.js";
import BookingCTASection from "../components/sections/BookingCTASection.js";
import FooterSection from "../components/FooterSection.js";
import SEOHead from "../components/SEOHead.js";
import { SITE_URL } from "../seo/siteConfig.js";

function HomePage() {
  const seoTitle =
    "Data Analytics Tutor | Excel, SQL, Python Lessons | Bryan Analytics Lab";
  const seoDescription =
    "Learn data analytics with 1-on-1 tutoring in Excel, SQL, Python, and machine learning fundamentals. Practical, project-based lessons for students and career changers.";
  const seoKeywords =
    "data analytics tutor, data analytics tutoring, learn data analytics, excel tutor, sql tutor, python tutor, machine learning tutor";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is data analytics tutoring for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lessons are designed for students, career changers, and professionals who want practical analytics skills they can apply at school or work.",
        },
      },
      {
        "@type": "Question",
        name: "What topics do you teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core topics include Excel for analytics, SQL for analysts, Python for data analysis, and machine learning fundamentals.",
        },
      },
      {
        "@type": "Question",
        name: "Are sessions project-based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sessions focus on hands-on exercises, practical datasets, and portfolio-oriented outcomes you can use in interviews and real work.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the booking section to check availability and request a one-on-one session tailored to your goals.",
        },
      },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data Analytics Tutoring",
    provider: {
      "@type": "EducationalOrganization",
      name: "Bryan Analytics Lab",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: "Online Data Analytics Tutoring",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      url: `${SITE_URL}/booking`,
    },
  };

  return (
    <div>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        path="/"
        keywords={seoKeywords}
        structuredData={[serviceSchema, faqSchema]}
      />
      <TopNav />

      <main>
        <HeroSection />
        <AboutMeSection />
        <WhatITeachSection />
        <WhyLearnWithMeSection />
        <LessonPreviewSection />
        <LearningPathsSection />
        <StudentMessagesSection />
        <FAQSection />
        <BookingCTASection />
      </main>

      <FooterSection />
    </div>
  );
}

export default HomePage;
