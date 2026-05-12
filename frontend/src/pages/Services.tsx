import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Droplets,
  Paintbrush,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wind,
  Zap,
} from 'lucide-react'
import PublicSiteLayout from '../components/public/PublicSiteLayout'
import BookingModal from '../components/public/BookingModal'
import Toast from '../components/public/Toast'

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
  {
    id: 5,
    title: 'Painting',
    description: 'Interior and exterior wall painting, touch-ups, texture work, and waterproofing.',
    price: 'Starts at ₹999',
    eta: 'Weekend slots available',
    accent: 'from-violet-500 to-indigo-500',
    icon: <Paintbrush className="h-6 w-6 text-white" />,
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
  { id: 2, name: 'Rohan Mehta', service: 'Electrical', rating: 4.9, price: 600, label: 'Fast & safe', response: 'Verified expert' },
  { id: 3, name: 'Arjun Singh', service: 'AC Service', rating: 4.7, price: 800, label: 'Cool expert', response: 'Top-rated cooling pro' },
  { id: 4, name: 'Kiran Shah', service: 'Painting', rating: 4.6, price: 1000, label: 'Wall expert', response: 'Weekend slots open' },
  { id: 5, name: 'Vikram Das', service: 'Appliance Repair', rating: 4.8, price: 700, label: 'Smart fixes', response: 'Trusted for kitchen repairs' },
  { id: 6, name: 'Suresh Nair', service: 'Plumbing', rating: 4.9, price: 500, label: 'Rapid response', response: 'Quick arrival support' },
]

const promiseCards = [
  {
    title: 'Verified professionals',
    description: 'Every technician is checked before being listed on the platform.',
    icon: <ShieldCheck className="h-6 w-6 text-[#005A99]" />,
  },
  {
    title: 'Transparent pricing',
    description: 'Know the starting cost before you move into the booking flow.',
    icon: <Sparkles className="h-6 w-6 text-[#005A99]" />,
  },
  {
    title: 'Clear scheduling',
    description: 'Pick your timing and get better visibility on service delivery.',
    icon: <Clock3 className="h-6 w-6 text-[#005A99]" />,
  },
] as const

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

const avatarColors = [
  'bg-[#005A99]',
  'bg-indigo-600',
  'bg-sky-600',
  'bg-cyan-600',
  'bg-blue-700',
  'bg-violet-600',
]

export default function Services() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [bookingTech, setBookingTech] = useState<typeof technicians[number] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' as 'success' | 'error' })

  function goToTechnicians(searchValue = '') {
    setSearch(searchValue)
    document.getElementById('technicians')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function openBooking(tech: typeof technicians[number]) {
    setBookingTech(tech)
    setModalOpen(true)
  }

  const handleBookingSuccess = useCallback(() => {
    setModalOpen(false)
    setBookingTech(null)
    setToast({
      visible: true,
      message: `Booking request sent! ${bookingTech?.name} will confirm your slot shortly.`,
      type: 'success',
    })
  }, [bookingTech])

  const closeToast = useCallback(() => setToast((t) => ({ ...t, visible: false })), [])

  const filteredTechnicians = technicians.filter(
    (tech) =>
      tech.name.toLowerCase().includes(search.toLowerCase()) ||
      tech.service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <PublicSiteLayout>
      <div className="min-h-screen bg-slate-50 pt-28">

        {/* Hero section */}
        <section className="relative overflow-hidden bg-white pb-16">
          <div className="absolute top-10 left-[8%] h-56 w-56 rounded-full bg-blue-100/70 blur-[110px]" />
          <div className="absolute right-[12%] bottom-8 h-64 w-64 rounded-full bg-cyan-100/70 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#0071BD]">
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
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#005A99] px-8 py-4 font-semibold text-white shadow-lg shadow-[#005A99]/20 transition hover:bg-[#0071BD]"
                  >
                    Browse Technicians
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-5 py-5">
                      <p className="text-2xl font-extrabold text-[#005A99]">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#005A99] via-[#0071BD] to-cyan-400 p-8 text-white">
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

        {/* Categories */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0071BD]">Categories</p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Services built around everyday household needs.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                Each category is designed to guide users from discovery to technician selection without feeling overwhelming.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                    <p className="text-sm font-semibold text-[#005A99]">{service.price}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{service.eta}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Technicians */}
        <section id="technicians" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0071BD]">Technicians</p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Browse available professionals by skill and rating.
                </h2>
              </div>
              <div className="w-full max-w-md">
                <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3.5 shadow-sm transition focus-within:border-[#0071BD] focus-within:ring-1 focus-within:ring-[#0071BD]/20">
                  <Search className="h-5 w-5 shrink-0 text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or service…"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      className="shrink-0 text-xs font-medium text-slate-400 transition hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

              {/* Technician list */}
              <div>
                {filteredTechnicians.length === 0 ? (
                  <div className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 py-20 text-center">
                    <Search className="mb-4 h-10 w-10 text-slate-300" />
                    <p className="font-semibold text-slate-500">No technicians found for "{search}"</p>
                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      className="mt-3 text-sm font-medium text-[#0071BD] hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {search && (
                      <p className="mb-4 text-sm text-slate-500">
                        {filteredTechnicians.length} technician{filteredTechnicians.length !== 1 ? 's' : ''} found
                        {search ? ` for "${search}"` : ''}
                      </p>
                    )}
                    {filteredTechnicians.map((tech, index) => (
                      <div
                        key={tech.id}
                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                      >
                        {/* Avatar */}
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow ${avatarColors[index % avatarColors.length]}`}>
                          {getInitials(tech.name)}
                        </div>

                        {/* Info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold text-slate-900">{tech.name}</p>
                            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#0071BD]">
                              {tech.service}
                            </span>
                          </div>
                          <p className="mt-0.5 truncate text-xs text-slate-400">{tech.label}</p>
                          <div className="mt-1.5 flex items-center gap-3">
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600">
                              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                              {tech.rating}
                            </span>
                            <span className="text-slate-200">·</span>
                            <span className="text-xs text-slate-400">{tech.response}</span>
                          </div>
                        </div>

                        {/* Price + CTA */}
                        <div className="flex shrink-0 flex-col items-end gap-2">
                          <p className="text-lg font-extrabold text-[#005A99]">₹{tech.price}</p>
                          <button
                            type="button"
                            onClick={() => openBooking(tech)}
                            className="rounded-full bg-[#005A99] px-4 py-1.5 text-xs font-semibold text-white shadow transition hover:bg-[#0071BD] active:scale-95"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                <div className="rounded-[2rem] bg-[#005A99] p-7 text-white shadow-xl">
                  <h3 className="text-xl font-bold">Book in three clear steps</h3>
                  <div className="mt-5 space-y-4">
                    {bookingSteps.map((step, index) => (
                      <div key={step.title} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold backdrop-blur-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                          <p className="mt-0.5 text-xs leading-5 text-blue-100">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#005A99]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">Support Promise</p>
                      <h3 className="text-base font-bold text-slate-900">Help when you need it</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Not sure which category or technician to pick? Our support team can guide your booking.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
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

      {/* Booking modal */}
      <BookingModal
        isOpen={modalOpen}
        technician={bookingTech}
        onClose={() => { setModalOpen(false); setBookingTech(null) }}
        onSuccess={handleBookingSuccess}
      />

      {/* Toast */}
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
    </PublicSiteLayout>
  )
}
