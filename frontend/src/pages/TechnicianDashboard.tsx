import { useNavigate } from "react-router-dom"
import { sampleBookings, platformStats } from '../../servesetuData'

export default function TechnicianDashboard() {
  const navigate = useNavigate()

  // build metrics from sample data (in real app these come from API)
  const totalJobs = sampleBookings.length
  const earned = sampleBookings.reduce((sum, j) => sum + j.price, 0)
  const pendingJobs = sampleBookings.filter(j => j.status !== 'completed').length
  const rating = platformStats.averageRating.toFixed(1)

  // convert sample bookings to job list
  const jobs = sampleBookings.map((b) => ({
    id: b.id,
    customer: b.customerName || 'Unknown',
    service: b.serviceType,
    date: b.date,
    status: b.status === 'completed' ? 'Completed' : 'Pending',
    price: b.price,
  }))

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
          <h1 className="text-2xl font-bold text-black">Technician Dashboard</h1>
          <button className="text-black hover:text-gray-700">👤</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Total Jobs</p>
            <h2 className="text-3xl font-bold text-black">{totalJobs}</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Rating</p>
            <h2 className="text-3xl font-bold text-black">{rating}★</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Earned</p>
            <h2 className="text-3xl font-bold text-black">₹{earned}</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Pending Jobs</p>
            <h2 className="text-3xl font-bold text-black">{pendingJobs}</h2>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-black">Recent Jobs</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <div key={job.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="font-semibold text-black">{job.customer}</h3>
                  <p className="text-sm text-gray-600">{job.service} • {job.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-black">₹{job.price}</p>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    job.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {job.status}
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
          View Available Jobs
        </button>
      </div>
    </div>
  )
}
