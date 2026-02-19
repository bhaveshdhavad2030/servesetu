export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Servesetu</h1>
        <p className="text-center text-gray-600 mb-8">Service Marketplace</p>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Welcome to Servesetu Frontend</p>
            <p className="text-xs text-gray-500 mt-2">This is a placeholder page. Build your components here!</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm font-semibold text-green-700">✅ Setup Complete</p>
            <ul className="text-xs text-gray-600 mt-2 space-y-1">
              <li>• Node modules installed</li>
              <li>• Vite configured</li>
              <li>• Redux store ready</li>
              <li>• All services available</li>
            </ul>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
