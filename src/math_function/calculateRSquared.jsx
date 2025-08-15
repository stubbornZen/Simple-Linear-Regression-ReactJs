/**
 * Menghitung R-squared (Coefficient of Determination) dari model regresi.
 * @param {number[]} x - Array fitur (YearsExperience).
 * @param {number[]} y - Array target (Salary).
 * @param {number} w - Bobot (weight) model.
 * @param {number} b - Bias (intercept) model.
 * @returns {number} - Nilai R-squared.
 */
export default function calculateRSquared (x, y, w, b) {
  if (x.length === 0 || y.length === 0) {
    return 0; // Or handle as an error
  }

  const y_mean = y.reduce((sum, val) => sum + val, 0) / y.length;

  let ss_total = 0; // Total sum of squares
  let ss_residual = 0; // Sum of squares of residuals

  for (let i = 0; i < y.length; i++) {
    const y_predicted = w * x[i] + b;
    ss_total += (y[i] - y_mean) ** 2;
    ss_residual += (y[i] - y_predicted) ** 2;
  }

  // Avoid division by zero if all y values are the same
  if (ss_total === 0) {
    return 1; // Perfect fit if all actual y values are identical
  }

  return 1 - ss_residual / ss_total;
};
