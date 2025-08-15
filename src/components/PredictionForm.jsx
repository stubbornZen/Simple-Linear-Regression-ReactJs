/**
 * Component for the prediction input form.
 * @param {object} props
 * @param {string} props.yearsExperienceInput - Current value of the input.
 * @param {function} props.onYearsExperienceChange - Handler for input change.
 * @param {function} props.onPredict - Handler for predict button click.
 */
export default function PredictionForm({
  yearsExperienceInput,
  onYearsExperienceChange,
  onPredict,
}) {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="yearsExperience"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Pengalaman Kerja (Tahun)
        </label>
        <input
          type="number"
          id="yearsExperience"
          value={yearsExperienceInput}
          onChange={onYearsExperienceChange}
          placeholder="Masukkan tahun pengalaman"
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        onClick={onPredict}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Prediksi Gaji
      </button>
    </div>
  );
}
