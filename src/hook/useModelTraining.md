# 📊 `useModelTraining` Hook

This is a custom React hook designed to simplify the process of **fetching data**, **training a simple linear regression model** using gradient descent, and **evaluating model performance** with an R-squared value, all directly on the client-side (frontend).

## ✨ Features

* **Automatic Data Fetching:** Fetches training data from a specified JSON URL.

* **Linear Regression Model Training:** Trains a linear regression model using a custom gradient descent implementation.

* **Model Evaluation:** Calculates the **R-squared** value to measure how well the model fits the data.

* **State Management:** Automatically manages `loading` and `error` states for seamless UI feedback.

* **Model Parameter Output:** Provides the calculated coefficient (`w`), intercept (`b`), and R-squared value.

## 🚀 Installation

This custom hook is designed for use within a React project. Assume you have a React project already set up (e.g., with Vite or Create React App).

1. Place this `useModelTraining.js` file in your project's hooks or utilities directory (e.g., `src/hooks/useModelTraining.js`).

2. Ensure you also have the two required math function files in their correct locations (e.g., `src/math_function/gradient_descent.js` and `src/math_function/calculateRSquared.js`).

## 🛠️ Usage

To use this hook, simply import it into your React component and provide the URL for your JSON training data.

```jsx
import React from 'react';
import useModelTraining from './hooks/useModelTraining'; // Adjust path according to your project structure

function SalaryPredictionApp() {
  // Replace with the path or URL to your JSON data file
  const dataUrl = '/data/salary_data.json'; 

  const { w, b, rSquared, isLoading, error } = useModelTraining(dataUrl);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">Loading data and training model...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">An error occurred: {error}</p>
      </div>
    );
  }

  // Function to make predictions using the trained model parameters
  const predictSalary = (yearsOfExperience) => {
    return w * yearsOfExperience + b;
  };

  return (
    <div className="container mx-auto p-4 max-w-lg bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Salary Prediction</h1>
      
      <div className="mb-4">
        <p className="text-lg font-medium">Model Parameters:</p>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>**Weight (Coefficient $w$):** {w.toFixed(4)}</li>
          <li>**Bias (Intercept $b$):** {b.toFixed(4)}</li>
          <li>**R-squared ($R^2$):** {rSquared !== null ? rSquared.toFixed(4) : 'N/A'}</li>
        </ul>
      </div>

      <div className="p-4 bg-blue-50 rounded-md">
        <p className="text-lg font-semibold text-blue-800">
          Try a Prediction:
        </p>
        <p className="text-gray-700">
          Example: With 5 years of experience, the predicted salary is Rp{new Intl.NumberFormat('id-ID').format(predictSalary(5))}.
        </p>
        {/* You can add an input form here for users to enter years of experience and see predictions */}
      </div>
    </div>
  );
}

export default SalaryPredictionApp;
```

## 📂 Expected JSON Data Structure

The JSON data expected by this hook should be an array of objects, where each object has `"Years of Experience"` and `"Salary"` properties, both of which are numbers.

```json
[
  { "Years of Experience": 1, "Salary": 3000000 },
  { "Years of Experience": 2, "Salary": 3500000 },
  { "Years of Experience": 3, "Salary": 4200000 },
  { "Years of Experience": 4, "Salary": 5000000 },
  { "Years of Experience": 5, "Salary": 5500000 }
]
```

## 🧩 Internal Dependencies

This hook relies on two internal utility functions that you'll need in your project, typically within a `src/math_function/` directory:

### `gradient_descent.js`

Contains the logic for the gradient descent algorithm, which calculates the optimal `w` (coefficient) and `b` (intercept) values for the linear regression model.

```javascript
// src/math_function/gradient_descent.js
export default function gradient_descent(x, y, alpha, iteration) {
  let w = 0; // Initialize weight
  let b = 0; // Initialize bias
  const m = x.length;

  for (let i = 0; i < iteration; i++) {
    let dc_dw = 0;
    let dc_db = 0;

    for (let j = 0; j < m; j++) {
      const f = w * x[j] + b; // Prediction
      dc_dw += (f - y[j]) * x[j];
      dc_db += (f - y[j]);
    }

    dc_dw = (1 / m) * dc_dw;
    dc_db = (1 / m) * dc_db;

    w = w - alpha * dc_dw; // Update weight
    b = b - alpha * dc_db; // Update bias

    // Optional: Log cost function for debugging (not necessary for production)
    // const cost = (1 / (2 * m)) * x.reduce((sum, val, idx) => sum + ((w * val + b) - y[idx]) ** 2, 0);
    // console.log(`Iteration ${i}: Cost ${cost}`);
  }
  return { w, b };
}
```

### `calculateRSquared.js`

Contains the logic for calculating the R-squared score, which indicates how well the dependent variable's variance is explained by the independent variables in the model.

```javascript
// src/math_function/calculateRSquared.js
export default function calculateRSquared(x, y, w, b) {
  const m = y.length;
  let y_pred = [];
  for (let i = 0; i < m; i++) {
    y_pred.push(w * x[i] + b);
  }

  // Calculate mean of y_actual
  const y_mean = y.reduce((sum, val) => sum + val, 0) / m;

  // Calculate Total Sum of Squares (SStotal)
  const ss_total = y.reduce((sum, val) => sum + (val - y_mean) ** 2, 0);

  // Calculate Residual Sum of Squares (SSres)
  const ss_res = y.reduce((sum, val, idx) => sum + (val - y_pred[idx]) ** 2, 0);

  // Calculate R-squared
  if (ss_total === 0) {
    // Avoid division by zero if all y_actual values are the same
    return 1; 
  }
  const rSquared = 1 - (ss_res / ss_total);
  return rSquared;
}
```

## 📄 Returned Output

The `useModelTraining` hook returns an object with the following properties:

* `w` (number): The calculated weight (slope) of the linear regression line.

* `b` (number): The calculated bias (y-intercept) of the linear regression line.

* `rSquared` (number | null): The R-squared value, indicating how well the model fits the data. `null` if there's an error or during initial processing.

* `isLoading` (boolean): `true` if data is being fetched and the model is being trained; `false` otherwise.

* `error` (string | null): An error message if something went wrong during data fetching or model training; `null` if no error.