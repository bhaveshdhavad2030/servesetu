import { useParams, useNavigate } from "react-router-dom"

export default function BookingFlow() {
  const { technicianId } = useParams()
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-black mb-6">Book Technician #{technicianId}</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Service Required</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>AC Service</option>
                <option>Painting</option>
                <option>Appliance Repair</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Preferred Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Address</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your service address"
              ></textarea>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service Price</span>
                <span className="font-semibold text-black">₹500</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax (18%)</span>
                <span className="font-semibold text-black">₹90</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="font-bold text-black">Total</span>
                <span className="font-bold text-black text-lg">₹590</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 font-semibold">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
