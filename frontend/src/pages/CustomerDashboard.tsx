import { useNavigate } from "react-router-dom"
import { sampleBookings, platformStats } from '../../servesetuData'

export default function CustomerDashboard() {
  const navigate = useNavigate()

  // compute some customer-specific metrics

  // compute some customer-specific metrics
  const totalBookings = sampleBookings.length
  const totalSpent = sampleBookings.reduce((sum, b) => sum + b.price, 0)
  const activeBookings = sampleBookings.filter(b => b.status !== 'completed').length

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-black font-semibold hover:text-gray-700"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-black">Customer Dashboard</h1>
          <button className="text-black hover:text-gray-700">👤</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Total Bookings</p>
            <h2 className="text-3xl font-bold text-black">{totalBookings}</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Spent</p>
            <h2 className="text-3xl font-bold text-black">₹{totalSpent}</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Active Bookings</p>
            <h2 className="text-3xl font-bold text-black">{activeBookings}</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Verified Technicians</p>
            <h2 className="text-3xl font-bold text-black">{platformStats.totalTechnicians}+</h2>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-black">Recent Bookings</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {sampleBookings.map((booking) => (
              <div key={booking.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="font-semibold text-black">{booking.technicianName}</h3>
                  <p className="text-sm text-gray-600">{booking.serviceType} • {booking.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-black">₹{booking.price}</p>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    booking.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/marketplace")}
          className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 font-semibold"
        >
          Book New Service
        </button>
      </div>
    </div>
  )
}
