import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Droplets,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wind,
  Zap,
} from 'lucide-react'
import PublicSiteLayout from '../components/public/PublicSiteLayout'

const serviceCategories = [
  {
    id: 1,
    title: 'Plumbing',
    description: 'Leak repair, bathroom fittings, drainage, tap replacement, and water line fixes.',
    price: 'Starts at ₹499',
    eta: '30 mins average response',
    accent: 'from-sky-500 to-blue-500',
    icon: <Droplets className="h-6 w-6 text-white" />,
  },
  {
    id: 2,
    title: 'Electrical',
    description: 'Wiring, switchboards, fans, lights, sockets, and essential safety checks.',
    price: 'Starts at ₹599',
    eta: 'Same-day availability',
    accent: 'from-blue-600 to-indigo-500',
    icon: <Zap className="h-6 w-6 text-white" />,
  },
  {
    id: 3,
    title: 'AC Service',
    description: 'Cooling tune-ups, deep cleaning, gas refill, and seasonal maintenance plans.',
    price: 'Starts at ₹799',
    eta: 'Preferred time slots',
    accent: 'from-cyan-500 to-sky-500',
    icon: <Wind className="h-6 w-6 text-white" />,
  },
  {
    id: 4,
    title: 'Appliance Repair',
    description: 'Washing machine, refrigerator, microwave, and kitchen appliance troubleshooting.',
    price: 'Starts at ₹699',
    eta: 'Verified appliance specialists',
    accent: 'from-indigo-500 to-blue-500',
    icon: <BookOpen className="h-6 w-6 text-white" />,
  },
] as const

const trustStats = [
  { label: 'Verified technicians', value: '2,500+' },
  { label: 'Bookings completed', value: '50K+' },
  { label: 'Average rating', value: '4.9/5' },
] as const

const bookingSteps = [
  {
    title: 'Choose a service',
    description: 'Start with the category that matches your home repair need.',
  },
  {
    title: 'Review technicians',
    description: 'Compare pricing, service labels, and review scores before booking.',
  },
  {
    title: 'Confirm your slot',
    description: 'Pick a time, confirm the request, and track the visit with confidence.',
  },
] as const

const technicians = [
  { id: 1, name: 'Raj Kumar', service: 'Plumbing', rating: 4.8, price: 500, label: 'Best for leaks', response: 'Fast response' },
  { id: 2, name: 'Priya Sharma', service: 'Electrical', rating: 4.9, price: 600, label: 'Fast & safe', response: 'Verified expert' },
  { id: 3, name: 'Arjun Singh', service: 'AC Service', rating: 4.7, price: 800, label: 'Cool expert', response: 'Top-rated cooling pro' },
  { id: 4, name: 'Neha Patel', service: 'Painting', rating: 4.6, price: 1000, label: 'Wall artist', response: 'Weekend slots open' },
  { id: 5, name: 'Vikram Das', service: 'Appliance Repair', rating: 4.8, price: 700, label: 'Smart fixes', response: 'Trusted for kitchen repairs' },
  { id: 6, name: 'Ananya Verma', service: 'Plumbing', rating: 4.9, price: 500, label: 'Rapid response', response: 'Quick arrival support' },
] as const

const promiseCards = [
  {
    title: 'Verified professionals',
    description: 'Every technician is checked before being listed on the platform.',
    icon: <ShieldCheck className="h-6 w-6 text-[#0B3D91]" />,
  },
  {
    title: 'Transparent pricing',
    description: 'Know the starting cost before you move into the booking flow.',
    icon: <Sparkles className="h-6 w-6 text-[#0B3D91]" />,
  },
  {
    title: 'Clear scheduling',
    description: 'Pick your timing and get better visibility on service delivery.',
    icon: <Clock3 className="h-6 w-6 text-[#0B3D91]" />,
  },
] as const

export default function Services() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  function goToTechnicians(searchValue = '') {
    setSearch(searchValue)
    document.getElementById('technicians')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filteredTechnicians = technicians.filter(
    (tech) =>
      tech.name.toLowerCase().includes(search.toLowerCase()) ||
      tech.service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <PublicSiteLayout>
      <div className="min-h-screen bg-slate-50 pt-28">
        <section className="relative overflow-hidden bg-white pb-16">
          <div className="absolute top-10 left-[8%] h-56 w-56 rounded-full bg-blue-100/70 blur-[110px]" />
          <div className="absolute right-[12%] bottom-8 h-64 w-64 rounded-full bg-cyan-100/70 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#2563EB]">
                  Services by ServeSetu
                </p>
                <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Home services designed to feel fast, trustworthy, and easy.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Explore categories, compare technicians, and move into booking with better clarity on quality,
                  pricing, and response times.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => goToTechnicians()}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3D91] px-8 py-4 font-semibold text-white shadow-lg shadow-[#0B3D91]/20 transition hover:bg-[#2563EB]"
                  >
                    Browse Technicians
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/customer-dashboard')}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                  >
                    Customer Dashboard
                  </button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-5 py-5">
                      <p className="text-2xl font-extrabold text-[#0B3D91]">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#0B3D91] via-[#2563EB] to-cyan-400 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-100">Why people choose us</p>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      4.9/5
                    </span>
                  </div>
                  <h2 className="mt-5 text-3xl font-bold leading-tight">
                    Reliable service categories with stronger booking confidence.
                  </h2>
                  <div className="mt-8 space-y-4">
                    {promiseCards.map((card) => (
                      <div key={card.title} className="rounded-[1.5rem] bg-white/12 p-4 backdrop-blur-sm">
                        <div className="mb-3 inline-flex rounded-2xl bg-white p-3">{card.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-blue-50">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">Categories</p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Services built around everyday household needs.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                Each category is designed to guide users from discovery to technician selection without feeling overwhelming.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceCategories.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => goToTechnicians(service.title)}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${service.accent}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-5 space-y-2">
                    <p className="text-sm font-semibold text-[#0B3D91]">{service.price}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{service.eta}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="technicians" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">Technicians</p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Browse available professionals by skill and rating.
                </h2>
              </div>
              <div className="w-full max-w-xl">
                <label className="mb-3 block text-sm font-medium text-slate-600">
                  Search technicians or services
                </label>
                <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
                  <Search className="h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Try Plumbing, Electrical, Raj Kumar..."
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
              <div className="grid gap-5 md:grid-cols-2">
                {filteredTechnicians.map((tech) => (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => navigate(`/technician/${tech.id}`)}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-500">{tech.service}</p>
                        <h3 className="mt-1 text-xl font-semibold text-slate-900">{tech.name}</h3>
                      </div>
                      <div className="rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
                        ₹{tech.price}
                      </div>
                    </div>

                    <p className="mb-5 text-slate-600">{tech.label}</p>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {tech.rating}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm">
                        {tech.response}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <aside className="space-y-6">
                <div className="rounded-[2rem] bg-[#0B3D91] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold">Book in three clear steps</h3>
                  <div className="mt-6 space-y-5">
                    {bookingSteps.map((step, index) => (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 font-semibold backdrop-blur-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{step.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-blue-100">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0B3D91]">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Support Promise</p>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">Help when you need it</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    If a customer feels unsure about category selection or technician choice, the support team can help guide the booking flow.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Contact Support
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </PublicSiteLayout>
  )
}
