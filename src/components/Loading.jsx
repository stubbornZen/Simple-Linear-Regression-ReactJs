/**
 * @param {string} message - The message to display during loading.
 */
export default function LoadingIndicator({ message }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <p className="text-gray-700 text-lg">{message}</p>
    </div>
  );
}
