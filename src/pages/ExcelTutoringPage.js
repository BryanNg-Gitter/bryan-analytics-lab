import React from "react";
import SubjectTutoringPage from "./SubjectTutoringPage.js";

function ExcelTutoringPage() {
  return (
    <SubjectTutoringPage
      slug="excel-data-analytics-tutoring"
      title="Excel Data Analytics Tutoring"
      heading="Excel tutoring for data analytics and business reporting"
      description="Learn Excel for data analytics with practical one-on-one tutoring. Build confidence in cleaning data, formulas, pivot tables, dashboards, and business reporting workflows."
      keywords="excel data analytics tutoring, learn excel for data analytics, excel tutor for analysts, excel dashboard tutoring"
      outcomes={[
        "Clean and structure messy datasets for analysis.",
        "Use formulas, lookups, and logic functions confidently.",
        "Create pivot tables and visual summaries for decisions.",
        "Build clear dashboards for stakeholders and presentations.",
      ]}
    />
  );
}

export default ExcelTutoringPage;
