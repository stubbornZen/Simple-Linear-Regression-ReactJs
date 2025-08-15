import { useState, useEffect } from "react";
import gradient_descent from "../math_function/gradient_descent";
import calculateRSquared from "../math_function/calculateRSquared";


/**
 * Custom hook to encapsulate model loading and training logic.
 * @param {string} dataUrl - URL of the JSON data.
 * @returns {{w: number, b: number, rSquared: number|null, isLoading: boolean, error: string|null}} - Model parameters, R-squared, loading state, and error.
 */
export default function useModelTraining(dataUrl) {
  const [w, setW] = useState(0);
  const [b, setB] = useState(0);
  const [rSquared, setRSquared] = useState(null); // New state for R-squared
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDataAndTrainModel = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const X_train = data.map((item) => item["Years of Experience"]);
        const y_train = data.map((item) => item["Salary"]);

        if (X_train.length === 0 || y_train.length === 0) {
          throw new Error("Data from JSON is empty or incorrectly formatted.");
        }

        const learning_rate = 0.01;
        const iteration = 10000;

        const { w: final_w, b: final_b } = gradient_descent(
          X_train,
          y_train,
          learning_rate,
          iteration
        );

        // Calculate R-squared after training
        const calculatedRSquared = calculateRSquared(
          X_train,
          y_train,
          final_w,
          final_b
        );

        setW(final_w);
        setB(final_b);
        setRSquared(calculatedRSquared); // Set R-squared state
        /*console.log(
          `Model trained! w: ${final_w.toFixed(4)}, b: ${final_b.toFixed(
            4
          )}, R-squared: ${calculatedRSquared.toFixed(4)}`
        );*/
      } catch (err) {
        console.error("Failed to load data or train model:", err);
        setError(
          "Gagal memuat data atau melatih model. Pastikan 'salary_data.json' ada dan formatnya benar."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadDataAndTrainModel();
  }, [dataUrl]);

  return { w, b, rSquared, isLoading, error };
}
