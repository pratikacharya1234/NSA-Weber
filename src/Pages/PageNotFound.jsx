export default function PageNotFound() {
  return (
    <div>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-purple-600">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        </div>
        
        <button
          onClick={() => window.location.reload()}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    </div>
    </div>
  )
}
