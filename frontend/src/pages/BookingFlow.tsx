import { useParams, useNavigate } from "react-router-dom"
import { CalendarDays, MapPin, Clock, CheckCircle, Shield } from "lucide-react"

export default function BookingFlow() {
  const { technicianId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/marketplace")} className="text-slate-900 font-semibold hover:text-slate-700">
            ← Back to Marketplace
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900">Confirm Booking</h1>
          <span className="w-16" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <section className="rounded-[2rem] bg-white border border-slate-200 shadow-sm p-8">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] mb-3">Booking details</p>
              <h2 className="text-3xl font-bold text-slate-900">Technician #{technicianId}</h2>
              <p className="text-slate-600 mt-3">Book the best available expert for your home service and get fast arrival with guaranteed quality.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex items-center gap-2 text-[#0B3D91] font-semibold">
                  <CalendarDays className="w-5 h-5" /> Preferred Date
                </div>
                <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" type="date" />
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex items-center gap-2 text-[#0B3D91] font-semibold">
                  <Clock className="w-5 h-5" /> Preferred Time
                </div>
                <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 2:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 6:00 PM</option>
                </select>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 mb-8">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-5 h-5 text-[#2563EB]" />
                <div>
                  <p className="text-sm text-slate-500">Service Address</p>
                  <input type="text" placeholder="Enter your address" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-slate-200">
                <p className="text-slate-700 font-semibold mb-3">Service Notes</p>
                <textarea rows={4} placeholder="Describe the problem here" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
              </div>
            </div>

            <button className="w-full rounded-[2rem] bg-[#0B3D91] px-6 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B3D91]/20 hover:bg-[#2563EB] transition">
              Confirm Booking Now
            </button>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Summary</h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex justify-between">
                  <span>Technician</span>
                  <span className="font-semibold text-slate-900"># {technicianId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span className="font-semibold text-slate-900">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span className="font-semibold text-slate-900">₹90</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-semibold text-slate-900">₹0</span>
                </div>
                <div className="border-t border-slate-200 pt-4 flex justify-between text-base font-bold text-slate-900">
                  <span>Total</span>
                  <span>₹590</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0B3D91] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold">Safe & Verified</h3>
              </div>
              <p className="text-slate-200 leading-relaxed">
                All technicians are verified professionals with customer support available throughout the booking and service process.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-[#2563EB]" /> Fast service confirmation</li>
                <li className="flex items-center gap-3"><CalendarDays className="w-5 h-5 text-[#2563EB]" /> Flexible schedule slots</li>
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#2563EB]" /> Real-time technician tracking</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
