import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Marketplace() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const technicians = [
    { id: 1, name: "Raj Kumar", service: "Plumbing", rating: 4.8, price: 500, image: "👨‍🔧" },
    { id: 2, name: "Priya Sharma", service: "Electrical", rating: 4.9, price: 600, image: "👩‍🔧" },
    { id: 3, name: "Arjun Singh", service: "AC Service", rating: 4.7, price: 800, image: "👨‍🔧" },
    { id: 4, name: "Neha Patel", service: "Painting", rating: 4.6, price: 1000, image: "👩‍🔧" },
    { id: 5, name: "Vikram Das", service: "Appliance Repair", rating: 4.8, price: 700, image: "👨‍🔧" },
    { id: 6, name: "Ananya Verma", service: "Plumbing", rating: 4.9, price: 500, image: "👩‍🔧" },
  ]

  const filtered = technicians.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.service.toLowerCase().includes(search.toLowerCase())
  )

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
          <h1 className="text-xl font-bold text-black">Browse Technicians</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tech) => (
            <button
              key={tech.id}
              onClick={() => navigate(`/technician/${tech.id}`)}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition text-left"
            >
              <div className="bg-gray-100 h-32 flex items-center justify-center text-5xl">{tech.image}</div>
              <div className="p-4">
                <h3 className="font-semibold text-black text-lg">{tech.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{tech.service}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium text-black">{tech.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-black">₹{tech.price}</span>
                </div>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 font-medium">
                  View Profile
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
