import { useParams, useNavigate } from "react-router-dom"
import { User, Star, ShieldCheck, Clock, CheckCircle } from "lucide-react"

export default function TechnicianProfile() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <button onClick={() => navigate("/services")} className="text-slate-900 font-semibold hover:text-slate-700">
            ← Back to Services
          </button>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0071BD]">Technician Profile</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Raj Kumar</h1>
          </div>
          <button onClick={() => navigate(`/booking/${id}`)} className="rounded-full bg-[#005A99] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0071BD]">
            Book Now
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="rounded-[2rem] bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] p-8">
            <div>
              <div className="flex flex-col gap-6">
                <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm">
                  <div className="flex items-center gap-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#005A99] text-4xl text-white shadow-lg">
                      <User className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[#0071BD] mb-2">Expert technician</p>
                      <h2 className="text-4xl font-bold text-slate-900">Raj Kumar</h2>
                      <p className="text-slate-600 mt-2">Plumbing Specialist • 5+ years experience</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-500 mb-3">Rating</p>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-3xl">
                      <Star className="w-6 h-6 text-yellow-400" /> 4.8
                    </div>
                  </div>
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-500 mb-3">Verified</p>
                    <div className="flex items-center gap-2 text-[#005A99] font-semibold text-lg">
                      <ShieldCheck className="w-5 h-5" /> Yes
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">About</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Professional plumber with strong experience in leak repair, pipe installation, and residential plumbing. Fast response, transparent pricing, and customer satisfaction guaranteed.
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] bg-[#005A99] p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="text-slate-200 leading-relaxed">Booked services are confirmed quickly so customers get help fast when they need it most.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Service Rates</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Plumbing</span>
                    <span className="font-semibold text-slate-900">₹500/hour</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Leak Repair</span>
                    <span className="font-semibold text-slate-900">₹450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pipe Installation</span>
                    <span className="font-semibold text-slate-900">₹700</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Customer Reviews</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { customer: "John Doe", rating: 5, message: "Very professional and fast. Recommend to everyone." },
                { customer: "Priya Gupta", rating: 4, message: "Great workmanship and excellent follow-up." },
              ].map((review) => (
                <div key={review.customer} className="rounded-[1.75rem] bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold text-slate-900">{review.customer}</p>
                      <p className="text-sm text-slate-500">Verified customer</p>
                    </div>
                    <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                  </div>
                  <p className="text-slate-600">{review.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <button onClick={() => navigate(`/booking/${id}`)} className="mt-8 w-full rounded-[2rem] bg-[#005A99] px-6 py-4 text-lg font-semibold text-white shadow-xl shadow-[#005A99]/20 hover:bg-[#0071BD] transition">
          Book Raj Now
        </button>
      </main>
    </div>
  )
}
