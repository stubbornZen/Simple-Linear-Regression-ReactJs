import React, { useState, useCallback } from "react";
import useModelTraining from "../hook/useModelTraining.jsx";
import LoadingIndicator from "./Loading.jsx";
import PredictionForm from "./PredictionForm.jsx";
import PredictionResult from "./PredictionResult.jsx";
import ModelParameters from "./ModelParameters.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

export default function Home() {
  const { w, b, rSquared, isLoading, error } = useModelTraining(
    `${import.meta.env.BASE_URL}salary_data.json`
  );
  const [yearsExperienceInput, setYearsExperienceInput] = useState("");
  const [predictedSalary, setPredictedSalary] = useState(null);

  // Use useCallback to memoize handlers for performance
  const handleYearsExperienceChange = useCallback((event) => {
    setYearsExperienceInput(event.target.value);
    setPredictedSalary(null);
  }, []);

  const handlePredict = useCallback(() => {
    const years = parseFloat(yearsExperienceInput);
    if (!isNaN(years)) {
      const prediction = w * years + b;
      setPredictedSalary(prediction);
    } else {
      setPredictedSalary(null);
      console.log("Masukkan angka yang valid untuk pengalaman kerja.");
    }
  }, [yearsExperienceInput, w, b]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Prediktor Gaji (Tahun)
        </h1>

        {error && <ErrorMessage message={error} />}

        {isLoading ? (
          <LoadingIndicator message="Memuat data dan melatih model..." />
        ) : (
          <>
            <PredictionForm
              yearsExperienceInput={yearsExperienceInput}
              onYearsExperienceChange={handleYearsExperienceChange}
              onPredict={handlePredict}
            />
            <PredictionResult salary={predictedSalary} />
            <ModelParameters w={w} b={b} rSquared={rSquared} />
          </>
        )}
      </div>
    </div>
  );
}
