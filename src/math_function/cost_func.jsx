// --- Model Training Logic (Reusable Functions) ---

/**
 * Menghitung fungsi biaya (Mean Squared Error) untuk regresi linier.
 * @param {number[]} x - Array fitur (YearsExperience).
 * @param {number[]} y - Array target (Salary).
 * @param {number} w - Bobot (weight).
 * @param {number} b - Bias (intercept).
 * @returns {number} - Total biaya.
 */
export default function cost_func(x, y, w, b) {
  const m = x.length;
  let cost_sum = 0;

  for (let i = 0; i < m; i++) {
    const f = w * x[i] + b;
    const cost = (f - y[i]) ** 2;
    cost_sum += cost;
  }

  const total_cost = (1 / (2 * m)) * cost_sum;
  return total_cost;
}
