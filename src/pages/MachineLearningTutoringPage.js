import React from "react";
import SubjectTutoringPage from "./SubjectTutoringPage.js";

function MachineLearningTutoringPage() {
  return (
    <SubjectTutoringPage
      slug="machine-learning-tutoring-for-beginners"
      title="Machine Learning Tutoring for Beginners"
      heading="Beginner machine learning tutoring with practical guidance"
      description="Learn machine learning fundamentals step by step. Understand model workflows, evaluation, and practical decision-making in beginner-friendly one-on-one sessions."
      keywords="machine learning tutoring for beginners, beginner ml tutor, learn machine learning basics, online machine learning tutor"
      outcomes={[
        "Understand the end-to-end machine learning workflow.",
        "Frame business problems as useful ML tasks.",
        "Evaluate models using clear and honest metrics.",
        "Improve models through iterative, practical experimentation.",
      ]}
    />
  );
}

export default MachineLearningTutoringPage;
