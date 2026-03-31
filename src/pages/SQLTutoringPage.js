import React from "react";
import SubjectTutoringPage from "./SubjectTutoringPage.js";

function SQLTutoringPage() {
  return (
    <SubjectTutoringPage
      slug="sql-data-analytics-tutoring"
      title="SQL Data Analytics Tutoring"
      heading="SQL tutoring for aspiring and working data analysts"
      description="Learn SQL for data analytics through structured one-on-one sessions. Practice writing reliable queries, joining tables, and answering business questions with confidence."
      keywords="sql data analytics tutoring, learn sql for data analysts, sql tutor online, sql interview preparation"
      outcomes={[
        "Write clean SELECT queries with filters and aggregations.",
        "Use joins, CTEs, and subqueries to solve real analysis tasks.",
        "Validate query outputs and avoid common data mistakes.",
        "Translate business questions into actionable SQL analysis.",
      ]}
    />
  );
}

export default SQLTutoringPage;
