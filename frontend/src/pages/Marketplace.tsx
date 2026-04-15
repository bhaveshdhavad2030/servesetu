import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Users, Sparkles, BookOpen, MapPin } from "lucide-react"

const services = [
  { id: 1, title: "Plumbing", description: "Leak repair, pipe fitment & drainage", color: "bg-blue-50", icon: <MapPin className="w-5 h-5" /> },
  { id: 2, title: "Electrical", description: "Wiring, switchboard & light issues", color: "bg-cyan-50", icon: <Sparkles className="w-5 h-5" /> },
  { id: 3, title: "AC Service", description: "Cooling tune-ups and gas refill", color: "bg-sky-50", icon: <BookOpen className="w-5 h-5" /> },
  { id: 4, title: "Appliance Repair", description: "Washing machine & refrigerator", color: "bg-emerald-50", icon: <Users className="w-5 h-5" /> },
]

export default function Marketplace() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const technicians = [
    { id: 1, name: "Raj Kumar", service: "Plumbing", rating: 4.8, price: 500, label: "Best for leaks" },
    { id: 2, name: "Priya Sharma", service: "Electrical", rating: 4.9, price: 600, label: "Fast & safe" },
    { id: 3, name: "Arjun Singh", service: "AC Service", rating: 4.7, price: 800, label: "Cool expert" },
    { id: 4, name: "Neha Patel", service: "Painting", rating: 4.6, price: 1000, label: "Wall artist" },
    { id: 5, name: "Vikram Das", service: "Appliance Repair", rating: 4.8, price: 700, label: "Smart fixes" },
    { id: 6, name: "Ananya Verma", service: "Plumbing", rating: 4.9, price: 500, label: "Rapid response" },
  ]

  const filtered = technicians.filter(
    (tech) =>
      tech.name.toLowerCase().includes(search.toLowerCase()) ||
      tech.service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-b from-white via-slate-100 to-slate-50 pb-16">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            <button onClick={() => navigate("/")} className="text-slate-900 font-semibold hover:text-slate-700">
              ← Home
            </button>
            <div className="text-center">
              <p className="text-xs tracking-[0.24em] uppercase text-slate-500">Service Marketplace</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Find Verified Technicians</h1>
            </div>
            <div className="w-16" />
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#2563EB] mb-4">Trusted by thousands</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Browse technicians by skill, rating and price.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mb-8">
                Quick booking, transparent pricing, and handpicked professionals for every home repair need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate("/marketplace")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0B3D91] text-white font-semibold shadow-lg shadow-[#0B3D91]/20 hover:bg-[#2563EB] transition">
                  Start Booking
                  <Search className="w-4 h-4" />
                </button>
                <button onClick={() => navigate("/customer-dashboard")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition">
                  Customer Dashboard
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.id} className="rounded-[2rem] p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl transition">
                  <div className={`w-14 h-14 ${service.color} rounded-3xl flex items-center justify-center mb-5 text-slate-900`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
          <section className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Top Technicians</h2>
                <p className="text-sm text-slate-500">Choose a technician with the highest review rating.</p>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
                <Search className="w-4 h-4" /> Search
              </span>
            </div>
            <div className="mb-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search technicians or services"
                className="w-full rounded-3xl border border-slate-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => navigate(`/technician/${tech.id}`)}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-slate-500 text-sm">{tech.service}</p>
                      <h3 className="text-xl font-semibold text-slate-900">{tech.name}</h3>
                    </div>
                    <div className="rounded-3xl bg-white px-4 py-3 shadow-sm text-slate-900 font-semibold">₹{tech.price}</div>
                  </div>
                  <p className="text-slate-600 mb-5">{tech.label}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">★ {tech.rating}</span>
                    <span className="inline-flex items-center gap-2">{tech.id < 4 ? "Fast response" : "Verified"}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#0B3D91] p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-3">Why Choose ServeSetu</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">✓</span>
                  <span>Verified technicians with quality guarantee.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">✓</span>
                  <span>Transparent pricing and easy booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">✓</span>
                  <span>Quick support and appointment tracking.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fast Booking</p>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">4.9/5</span>
              </div>
              <p className="text-slate-700 mb-6">Book a technician in 3 easy steps and get your home service scheduled today.</p>
              <div className="space-y-4 text-slate-600 text-sm">
                <p>1. Search technicians</p>
                <p>2. View profiles</p>
                <p>3. Confirm booking</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
