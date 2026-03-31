import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import BookingPage from "./pages/BookingPage.js";
import ExcelTutoringPage from "./pages/ExcelTutoringPage.js";
import SQLTutoringPage from "./pages/SQLTutoringPage.js";
import PythonTutoringPage from "./pages/PythonTutoringPage.js";
import MachineLearningTutoringPage from "./pages/MachineLearningTutoringPage.js";

function App() {
  return (
    <div className="min-h-screen bg-[#070a12]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route
          path="/excel-data-analytics-tutoring"
          element={<ExcelTutoringPage />}
        />
        <Route path="/sql-data-analytics-tutoring" element={<SQLTutoringPage />} />
        <Route
          path="/python-data-analytics-tutoring"
          element={<PythonTutoringPage />}
        />
        <Route
          path="/machine-learning-tutoring-for-beginners"
          element={<MachineLearningTutoringPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

