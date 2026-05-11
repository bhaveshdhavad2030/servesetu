import { useNavigate } from "react-router-dom"
import { Briefcase, Star, TrendingUp, Clock, ShieldCheck } from "lucide-react"

export default function TechnicianDashboard() {
  const navigate = useNavigate()

  const jobs = [
    { id: 1, customer: "John Doe", service: "Plumbing", date: "2024-01-15", status: "Completed", price: 590 },
    { id: 2, customer: "Jane Smith", service: "Electrical", date: "2024-01-20", status: "Accepted", price: 690 },
    { id: 3, customer: "Amit Singh", service: "AC Service", date: "2024-01-22", status: "Pending", price: 820 },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <button onClick={() => navigate("/")} className="text-slate-900 font-semibold hover:text-slate-700">
            ← Back to Home
          </button>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0071BD]">Technician Dashboard</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Your service center</h1>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
            <span className="text-lg">👷</span>
            <span className="font-medium">My Profile</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 lg:grid-cols-4 mb-10">
          {[
            { label: "Jobs Completed", value: "42", icon: <Briefcase className="w-6 h-6 text-white" />, color: "bg-[#005A99]" },
            { label: "Rating", value: "4.9★", icon: <Star className="w-6 h-6 text-white" />, color: "bg-[#0071BD]" },
            { label: "Earnings", value: "₹22,300", icon: <TrendingUp className="w-6 h-6 text-white" />, color: "bg-[#1D4ED8]" },
            { label: "Pending", value: "3", icon: <Clock className="w-6 h-6 text-white" />, color: "bg-[#1E40AF]" },
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
                <h2 className="text-2xl font-bold text-slate-900">Recent Job Requests</h2>
                <p className="text-sm text-slate-500">Keep up with your latest assignments.</p>
              </div>
              <button onClick={() => navigate("/services")} className="rounded-full bg-[#005A99] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0071BD]">
                Browse jobs
              </button>
            </div>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 hover:border-[#0071BD] transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">{job.service} for {job.customer}</p>
                      <h3 className="text-xl font-semibold text-slate-900">{job.date}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-900">₹{job.price}</p>
                      <span className={`rounded-full px-3 py-1 text-sm ${job.status === "Completed" ? "bg-emerald-100 text-emerald-800" : job.status === "Accepted" ? "bg-sky-100 text-sky-800" : "bg-yellow-100 text-amber-800"}`}>
                        {job.status}
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
                <h2 className="text-xl font-bold">Verified Profile</h2>
              </div>
              <p className="text-slate-200 leading-relaxed">Build trust with customers using a verified service profile, high ratings, and fast responses.</p>
            </div>
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Available Today</h2>
              <div className="space-y-3 text-slate-600">
                <p>9:00 AM - 1:00 PM</p>
                <p>2:00 PM - 6:00 PM</p>
                <p>7:00 PM - 9:00 PM</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
