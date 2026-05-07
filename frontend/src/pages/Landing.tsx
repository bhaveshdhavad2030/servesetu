import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Clock,
  Droplet,
  Palette,
  Search,
  Shield,
  Star,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'
import technician from '../assets/technician.jpg'
import PublicSiteLayout from '../components/public/PublicSiteLayout'

const services = [
  { id: 1, name: 'Plumbing', icon: <Droplet className="h-6 w-6" />, color: 'bg-blue-100 text-[#2563EB]', price: 499 },
  { id: 2, name: 'Electrical', icon: <Zap className="h-6 w-6" />, color: 'bg-blue-100 text-[#2563EB]', price: 599 },
  { id: 3, name: 'Appliances', icon: <Search className="h-6 w-6" />, color: 'bg-blue-100 text-[#2563EB]', price: 699 },
  { id: 4, name: 'AC Service', icon: <Wind className="h-6 w-6" />, color: 'bg-blue-100 text-[#2563EB]', price: 799 },
  { id: 5, name: 'Painting', icon: <Palette className="h-6 w-6" />, color: 'bg-blue-100 text-[#2563EB]', price: 999 },
] as const

const benefits = [
  {
    icon: <Shield className="h-8 w-8 text-[#2563EB]" />,
    title: '100% Safe & Secure',
    desc: 'Every technician is background checked and verified for your peace of mind.',
  },
  {
    icon: <Clock className="h-8 w-8 text-[#2563EB]" />,
    title: 'On-Time Service',
    desc: 'We value your time. Our pros arrive when scheduled, with clear updates if anything changes.',
  },
  {
    icon: <Award className="h-8 w-8 text-[#2563EB]" />,
    title: 'Quality Guarantee',
    desc: 'If the job is not right, our support flow helps you get it resolved quickly.',
  },
] as const

function IconWrapper({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${color} shadow-lg transition-transform group-hover:scale-110`}>
      {children}
    </div>
  )
}

export default function Landing() {
  const navigate = useNavigate()

  return (
    <PublicSiteLayout>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute top-20 right-[10%] h-72 w-72 rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-10 left-[5%] h-96 w-96 rounded-full bg-blue-50/50 blur-[130px]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-[#2563EB]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
              </span>
              Trusted home services across India
            </div>

            <h1 className="mb-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B3D91] md:text-6xl">
              Quality repairs,
              <br />
              <span className="text-[#2563EB]">exactly when</span>
              <br />
              you need them.
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl lg:mx-0">
              Connect with verified professionals for plumbing, electrical work,
              appliances, AC service, and home maintenance, all from one trusted platform.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#0B3D91] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#0B3D91]/20 transition-all hover:-translate-y-0.5 hover:bg-[#2563EB] active:scale-95"
              >
                Book a Service
                <Search className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-100">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="ServeSetu customer" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-[#0B3D91]">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-500">From 10k+ happy users</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 items-center justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-gray-50 p-4 shadow-2xl">
              <img src={technician} alt="Technician working in a home" className="h-auto w-full object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/10 via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-gray-100 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3D91] shadow-lg">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#0B3D91]">Verified Expert</p>
                    <p className="text-xs text-gray-500">Certified and background-checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-gray-50 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="w-full text-center md:w-auto md:text-left">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#2563EB]">Our Expertise</h2>
              <h3 className="text-4xl font-extrabold text-[#0B3D91] md:text-5xl">Explore services</h3>
            </div>
            <p className="max-w-md text-center text-lg text-gray-600 md:text-left">
              From urgent fixes to planned maintenance, we help households find the right pro quickly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => navigate('/services')}
                className="group rounded-[2rem] border border-gray-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <IconWrapper color={service.color}>{service.icon}</IconWrapper>
                <h3 className="mb-2 truncate text-xl font-bold text-[#0B3D91]">{service.name}</h3>
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                  Starts at <span className="font-bold text-[#0B3D91]">₹{service.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-[2.5rem] border border-transparent bg-gray-50 p-10 transition-all hover:border-blue-100 hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-2xl font-extrabold text-[#0B3D91]">{benefit.title}</h3>
                <p className="text-lg leading-relaxed text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#0B3D91] p-12 text-center md:p-24">
            <div className="absolute top-0 right-0 -z-0 h-96 w-96 bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -z-0 h-96 w-96 bg-blue-400/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-2xl text-white">
              <h2 className="mb-8 text-3xl font-extrabold md:text-5xl">
                Ready to experience easier home repairs?
              </h2>
              <p className="mb-12 text-xl text-blue-100/80">
                Explore the marketplace, compare technicians, and book with confidence.
              </p>
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="mx-auto flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-xl font-bold text-[#0B3D91] shadow-2xl transition-all hover:scale-105 hover:bg-blue-50 active:scale-95"
              >
                Browse Marketplace
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  )
}
