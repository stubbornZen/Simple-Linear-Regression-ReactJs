/**
 * Component to display the trained model parameters (w and b).
 * @param {object} props
 * @param {number} props.w - The trained weight (slope).
 * @param {number} props.b - The trained bias (intercept).
 * @param {number|null} props.rSquared - The R-squared value of the model.
 */
export default function ModelParameters({ w, b, rSquared }) {
  return (
    <div className="mt-6 text-center text-gray-600 text-sm">
      <p>Parameter Model:</p>
      <p>w (slope): {w.toFixed(4)}</p>
      <p>b (intercept): {b.toFixed(4)}</p>
      {rSquared !== null && <p>R-squared (Accuracy): {rSquared.toFixed(4)}</p>}
    </div>
  );
}
