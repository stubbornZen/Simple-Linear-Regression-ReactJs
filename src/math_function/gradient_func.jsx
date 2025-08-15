/**
 * Menghitung gradien dari fungsi biaya terhadap w dan b.
 * @param {number[]} x - Array fitur (YearsExperience).
 * @param {number[]} y - Array target (Salary).
 * @param {number} w - Bobot (weight).
 * @param {number} b - Bias (intercept).
 * @returns {{dc_dw: number, dc_db: number}} - Gradien terhadap w dan b.
 */
export default function gradient_func (x, y, w, b) {
  const m = x.length;
  let dc_dw = 0;
  let dc_db = 0;

  for (let i = 0; i < m; i++) {
    const f = w * x[i] + b;
    dc_dw += (f - y[i]) * x[i];
    dc_db += f - y[i];
  }

  dc_dw = (1 / m) * dc_dw;
  dc_db = (1 / m) * dc_db;

  return { dc_dw, dc_db };
};
