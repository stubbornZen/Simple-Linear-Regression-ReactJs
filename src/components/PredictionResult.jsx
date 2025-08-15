/**
 * Component to display the predicted salary.
 * @param {object} props
 * @param {number|null} props.salary - The predicted salary.
 */
export default function PredictionResult({ salary }) {
  return (
    salary !== null && (
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
        <p className="text-blue-800 text-lg font-semibold">
          Gaji Prediksi Anda:
        </p>
        <p className="text-blue-900 text-4xl font-extrabold mt-2">
          $
          {salary.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    )
  );
}
