import React from "react";
import SubjectTutoringPage from "./SubjectTutoringPage.js";

function PythonTutoringPage() {
  return (
    <SubjectTutoringPage
      slug="python-data-analytics-tutoring"
      title="Python Data Analytics Tutoring"
      heading="Python tutoring for data analytics and data science"
      description="Learn Python for data analytics with practical tutoring sessions. Build skills in Python fundamentals, pandas workflows, and project-based data analysis."
      keywords="python data analytics tutoring, learn python for data analysis, pandas tutoring, python tutor for beginners"
      outcomes={[
        "Understand core Python syntax for analytics workflows.",
        "Use pandas to clean, transform, and explore data.",
        "Build repeatable analysis notebooks for portfolio projects.",
        "Explain your analysis process clearly in interviews.",
      ]}
    />
  );
}

export default PythonTutoringPage;
