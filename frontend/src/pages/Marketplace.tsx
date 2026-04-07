import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { serviceCategories, technicians as allTechnicians } from "../../servesetuData"

export default function Marketplace() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"rating" | "price" | "experience">("rating")

  // filter and sort technicians
  let technicians = allTechnicians
  if (selectedCategory) {
    technicians = technicians.filter(t => t.services.includes(selectedCategory))
  }
  if (search) {
    technicians = technicians.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.services.join(" ").toLowerCase().includes(search.toLowerCase())
    )
  }
  technicians = [...technicians].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "price") return a.priceRange.min - b.priceRange.min
    if (sortBy === "experience") return b.experience - a.experience
    return 0
  })

  const filtered = technicians.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center text-white font-bold">TS</div>
            <span className="text-lg font-semibold text-black">TechSeva</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/servesetu/customer-dashboard')}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm"
            >
              My Bookings
            </button>
          </div>
        </div>
      </header>

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* search */}
          <div className="mb-6">
            <div className="relative max-w-4xl mx-auto">
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l3.817 3.816a1 1 0 01-1.414 1.415l-3.816-3.817A6 6 0 012 8z" clipRule="evenodd"/></svg>
              <input
                type="text"
                placeholder="Search by technician name or service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:ring-0 shadow-sm"
              />
            </div>
          </div>

          {/* categories row */}
          <div className="mb-4">
            <div className="flex gap-4 items-center overflow-x-auto">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium ${selectedCategory ? 'bg-white border border-gray-200 text-gray-800' : 'bg-black text-white'}`}
              >
                All Services
              </button>

              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border ${selectedCategory === cat.name ? 'bg-white border-gray-300 text-gray-800' : 'bg-white border border-gray-200 text-gray-700'}`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* sort row (separate) */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Sort by:</span>
              {['rating','price','experience'].map((key) => (
                <button
                  key={key}
                  onClick={() => setSortBy(key as any)}
                  className={`px-4 py-2 rounded-full text-sm ${sortBy === key ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-700'}`}
                >
                  {key.charAt(0).toUpperCase()+key.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicians.map((tech) => (
            <div key={tech.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition relative flex flex-col justify-between min-h-[220px]">
              <div className="absolute right-4 top-4 text-gray-400">{tech.verified ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200">✓</span> : null}</div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">{tech.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-black text-lg">{tech.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{tech.experience} years experience</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      {Array.from({length:5}).map((_,i)=> (
                        <span key={i} className={`text-yellow-500 ${i<Math.round(tech.rating)?'':'text-gray-200'}`}>★</span>
                      ))}
                      <span className="text-gray-600 ml-2">{tech.rating.toFixed(1)}</span>
                      <span className="text-gray-400">({tech.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {tech.services.slice(0,2).map(s => (
                    <span key={s} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{s}</span>
                  ))}
                  {tech.services.length>2 && <span className="text-xs text-gray-500 px-2">+{tech.services.length-2}</span>}
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                  <div className="flex items-center gap-1">⏱ <span className="ml-1">Response: {tech.responseTime}</span></div>
                  <div className="flex items-center gap-1">📍 <span className="ml-1">{tech.availability || 'Mon-Sun, 8 AM - 8 PM'}</span></div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Starting from</div>
                  <div className="font-bold text-lg">₹{tech.priceRange.min}</div>
                </div>
                <button
                  onClick={() => navigate(`/booking/${tech.id}`)}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm shadow"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
