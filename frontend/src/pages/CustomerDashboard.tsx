import { useNavigate } from "react-router-dom"
import { CalendarCheck, Wallet, Briefcase, ShieldCheck } from "lucide-react"

export default function CustomerDashboard() {
  const navigate = useNavigate()

  const bookings = [
    { id: 1, technician: "Raj Kumar", service: "Plumbing", date: "2024-01-15", status: "Completed", price: 590 },
    { id: 2, technician: "Priya Sharma", service: "Electrical", date: "2024-01-20", status: "Pending", price: 690 },
    { id: 3, technician: "Arjun Singh", service: "AC Service", date: "2024-01-25", status: "Confirmed", price: 800 },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <button onClick={() => navigate("/")} className="text-slate-900 font-semibold hover:text-slate-700">
            ← Back to Home
          </button>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0071BD]">Customer Dashboard</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Your service history</h1>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
            <span className="text-lg">👤</span>
            <span className="font-medium">My Account</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {[
            { label: "Total Bookings", value: "14", icon: <CalendarCheck className="w-6 h-6 text-white" />, color: "bg-[#005A99]" },
            { label: "Total Spend", value: "₹8,200", icon: <Wallet className="w-6 h-6 text-white" />, color: "bg-[#0071BD]" },
            { label: "Active Orders", value: "2", icon: <Briefcase className="w-6 h-6 text-white" />, color: "bg-[#1D4ED8]" },
          ].map((card) => (
            <div key={card.label} className="rounded-[2rem] p-6 bg-white border border-slate-200 shadow-sm">
              <div className={`inline-flex p-3 rounded-3xl ${card.color} mb-5`}>
                {card.icon}
              </div>
              <p className="text-sm text-slate-500 mb-2">{card.label}</p>
              <p className="text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.85fr]">
          <section className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Recent Bookings</h2>
                <p className="text-sm text-slate-500">Track your latest service requests.</p>
              </div>
              <button onClick={() => navigate("/services")} className="rounded-full bg-[#005A99] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0071BD]">
                Book again
              </button>
            </div>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 hover:border-[#0071BD] transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">{booking.service} with {booking.technician}</p>
                      <h3 className="text-xl font-semibold text-slate-900">{booking.date}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-900">₹{booking.price}</p>
                      <span className={`rounded-full px-3 py-1 text-sm ${booking.status === "Completed" ? "bg-emerald-100 text-emerald-800" : booking.status === "Pending" ? "bg-yellow-100 text-amber-800" : "bg-sky-100 text-sky-800"}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#005A99] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6" />
                <h2 className="text-xl font-bold">Trusted Service</h2>
              </div>
              <p className="text-slate-200 leading-relaxed">All service providers are verified and monitored for quality, so your home stays safe and secure.</p>
            </div>
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Need help?</h2>
              <p className="text-slate-600 mb-6">Reach customer support for booking changes, cancellations, and service questions.</p>
              <button onClick={() => navigate("/services")} className="w-full rounded-full bg-[#0071BD] px-6 py-3 text-white font-semibold hover:bg-[#1D4ED8]">
                Browse Services
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
