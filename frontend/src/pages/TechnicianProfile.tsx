import { useParams, useNavigate } from "react-router-dom"

export default function TechnicianProfile() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/marketplace")}
            className="text-black font-semibold hover:text-gray-700"
          >
            ← Back
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 h-32 flex items-center justify-center text-6xl">👨‍🔧</div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-black mb-2">Raj Kumar</h1>
            <p className="text-gray-600 mb-2">Plumbing Expert • 5+ Years Experience</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-lg font-semibold text-black">4.8</span>
                <span className="text-gray-600 text-sm">(150 reviews)</span>
              </div>
              {/** verified badge **/}
              <span className="text-green-600 font-medium">✓ Verified</span>
            </div>
            <div className="flex gap-4 mb-8">
              <button className="px-4 py-2 bg-black text-white rounded-lg">Book Now</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg">Message</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg">Call</button>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Service Rate</p>
                <p className="text-2xl font-bold text-black">₹500/hour</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Response Time</p>
                <p className="text-2xl font-bold text-black">15 mins</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">
                Professional plumber with 5+ years of experience in residential and commercial plumbing. Specialized in leak repairs, pipe installations, and water management systems. Quick response time and guaranteed customer satisfaction.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-4">Services</h2>
              <div className="flex flex-wrap gap-2">
                {['Leak Repair', 'Pipe Installation', 'Drain Cleaning', 'Water Tank Service'].map((service) => (
                  <span key={service} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-black mb-4">Reviews</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-black">John Doe</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-gray-600 text-sm">Great service, very professional and timely. Highly recommended!</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-black">Jane Smith</span>
                    <span className="text-yellow-500">★★★★☆</span>
                  </div>
                  <p className="text-gray-600 text-sm">Good work, fair pricing. Completed the job quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate(`/booking/${id}`)}
          className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 text-lg font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  )
}
