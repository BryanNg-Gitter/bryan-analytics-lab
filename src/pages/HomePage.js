import React from "react";
import TopNav from "../components/TopNav.js";
import HeroSection from "../components/sections/HeroSection.js";
import AboutMeSection from "../components/sections/AboutMeSection.js";
import WhatITeachSection from "../components/sections/WhatITeachSection.js";
import WhyLearnWithMeSection from "../components/sections/WhyLearnWithMeSection.js";
import LessonPreviewSection from "../components/sections/LessonPreviewSection.js";
import StudentSuccessStoriesSection from "../components/sections/StudentSuccessStoriesSection.js";
import TestimonialsSection from "../components/sections/TestimonialsSection.js";
import StudentMessagesSection from "../components/sections/StudentMessagesSection.js";
import BookingCTASection from "../components/sections/BookingCTASection.js";
import FooterSection from "../components/FooterSection.js";

function HomePage() {
  return (
    <div>
      <TopNav />

      <main>
        <HeroSection />
        <AboutMeSection />
        <WhatITeachSection />
        <WhyLearnWithMeSection />
        <LessonPreviewSection />
        <StudentSuccessStoriesSection />
        <TestimonialsSection testimonials={[]} />
        <StudentMessagesSection />
        <BookingCTASection />
      </main>

      <FooterSection />
    </div>
  );
}

export default HomePage;
