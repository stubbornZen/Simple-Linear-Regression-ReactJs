# Simple Linear Regression (ReactJs)

## Employee Salary Prediction App

This is a simple React application that predicts employee salaries based on years of experience using a **Linear Regression model** trained directly on the client-side. The application fetches training data from a JSON file, trains the model using a custom **gradient descent algorithm**, and then allows users to see predicted salaries.

---

## Features

- **Client-Side Model Training:** Trains a linear regression model directly in the browser.
- **Dynamic Data Loading:** Fetches training data from a local JSON file.
- **Interactive Prediction:** Allows users to input years of experience and get an instant salary prediction.
- **Model Performance Insight:** Displays the calculated R-squared value for the trained model.
- **Responsive UI:** Built with React and styled using Tailwind CSS for a modern, responsive look.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/stubbornZen/Simple-Linear-Regression-ReactJs.git
    cd Simple-Linear-Regression-ReactJs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically open in your browser at `http://localhost:5173/`.

---

## 📂 Project Structure

```
.
├── public
│   └── salary_data.json          # 💾 JSON file containing training data (Years of Experience, Salary)
├── README.md                     # 📄 This README file
├── src
│   ├── App.jsx                   # ⚛️ Main application component
│   ├── components                # 🧩 Reusable UI components
│   │   ├── Error.jsx             # Displays error messages
│   │   ├── Home.jsx              # Main view component
│   │   ├── Loading.jsx           # Displays loading state
│   │   ├── ModelParameters.jsx   # Displays trained model's w, b, R-squared
│   │   ├── PredictionForm.jsx    # Input form for years of experience
│   │   └── PredictionResult.jsx  # Displays the predicted salary
│   ├── hook                      # 🎣 Custom React Hooks
│   │   ├── useModelTraining.jsx  # Core hook for fetching data and training the model
│   │   └── useModelTraining.md   # Documentation for useModelTraining hook (can be removed or integrated into this README)
│   ├── index.css                 # Global CSS styles (likely Tailwind directives)
│   ├── main.jsx                  # Entry point for the React application
│   └── math_function             # 🔢 Custom mathematical functions for the model
│       ├── calculateRSquared.jsx # Function to calculate R-squared
│       ├── calculateRsquared.md  # Documentation for calculateRSquared (can be removed)
│       ├── cost_func.jsx         # Cost function for gradient descent
│       ├── cost_func.md          # Documentation for cost_func (can be removed)
│       ├── gradient_descent.jsx  # Main gradient descent algorithm
│       ├── gradient_descent.md   # Documentation for gradient_descent (can be removed)
│       ├── gradient_func.jsx     # Gradient calculation for gradient descent
│       └── gradient_func.md      # Documentation for gradient_func (can be removed)
├── tailwind.config.js            # 🎨 Tailwind CSS configuration
├── updatingNodejsvianpmidx.bash  # ⚙️ (Optional) A script for updating Node.js
└── vite.config.js                # ⚡ Vite build configuration
```

---

## Core Logic: `useModelTraining` Hook

The heart of this application is the `src/hook/useModelTraining.jsx` custom React hook.

This hook is responsible for:

- **Fetching Data:** It fetches the training data from `public/salary_data.json`.
- **Model Training:** It utilizes your custom `gradient_descent` algorithm (found in `src/math_function/gradient_descent.jsx`) to train the linear regression model.
- **Performance Evaluation:** It calculates the R-squared value using `calculateRSquared.jsx` to assess the model's fit.
- **State Management:** It provides `w` (weight/slope), `b` (bias/intercept), `rSquared`, `isLoading`, and `error` states to your React components, allowing for dynamic UI updates based on the model's training status.

---

## Technologies Used

- **React:** Frontend JavaScript library
- **Vite:** Fast development build tool
- **Tailwind CSS:** Utility-first CSS framework
- **gh-pages:** For deploying to GitHub Pages

---
