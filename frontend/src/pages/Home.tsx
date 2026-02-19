import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-black">Manus Projects</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Choose Your Project</h2>
          <p className="text-xl text-gray-600">Select from our marketplace platforms</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div
            onClick={() => navigate("/")}
            className="border-2 border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-black text-white flex items-center justify-center text-2xl font-bold mb-4">
                SS
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">ServeSetu</h3>
              <p className="text-gray-600">Service Marketplace</p>
            </div>

            <p className="text-gray-700 mb-6">
              Connect customers with verified, professional technicians for home repair and maintenance services.
            </p>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-black text-white hover:bg-gray-900 px-8 py-3 rounded-lg font-medium transition"
            >
              Explore ServeSetu →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
