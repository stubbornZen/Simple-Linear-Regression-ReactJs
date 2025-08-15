import gradient_func from "./gradient_func";

/**
 * Melakukan proses gradient descent untuk mencari w dan b optimal.
 * @param {number[]} x - Array fitur (YearsExperience).
 * @param {number[]} y - Array target (Salary).
 * @param {number} alpha - Learning rate.
 * @param {number} iteration - Jumlah iterasi.
 * @returns {{w: number, b: number}} - Bobot dan bias yang optimal.
 */
export default function gradient_descent(x, y, alpha, iteration) {
  let w = 0;
  let b = 0;

  for (let i = 0; i < iteration; i++) {
    const { dc_dw, dc_db } = gradient_func(x, y, w, b);

    w = w - alpha * dc_dw;
    b = b - alpha * dc_db;
  }
  return { w, b };
}
