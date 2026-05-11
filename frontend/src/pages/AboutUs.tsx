import { ArrowRight, CircleDashed, ShieldCheck, Sparkles, UserRound, Wallet, Wrench } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PublicSiteLayout from '../components/public/PublicSiteLayout'

const featureCards = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#005A99]" />,
    title: 'Verified Technicians',
    description: 'Every professional is background checked and trained for safe home repairs.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-[#005A99]" />,
    title: 'Transparent Pricing',
    description: 'Clear service rates with no hidden charges, every single time.',
  },
  {
    icon: <Wallet className="h-6 w-6 text-[#005A99]" />,
    title: 'Fast Payments',
    description: 'Reliable payouts for partners and seamless payment options for customers.',
  },
] as const

const valueCards = [
  {
    title: 'Mission',
    description: 'To make home services simple, reliable, and accessible for every household.',
  },
  {
    title: 'Vision',
    description: 'A world where finding a technician is as easy as tapping a button.',
  },
  {
    title: 'Purpose',
    description: 'Empower local service experts while giving customers fast, trustworthy repairs.',
  },
] as const

const people = [
  { name: 'Operations Lead', role: 'Service Operations', accent: 'from-blue-500 to-cyan-400', icon: <UserRound className="h-7 w-7 text-white" /> },
  { name: 'Quality Manager', role: 'Technician Verification', accent: 'from-indigo-500 to-blue-500', icon: <ShieldCheck className="h-7 w-7 text-white" /> },
  { name: 'Customer Success', role: 'Support Experience', accent: 'from-sky-500 to-cyan-500', icon: <Sparkles className="h-7 w-7 text-white" /> },
  { name: 'Field Network', role: 'Partner Growth', accent: 'from-blue-600 to-indigo-500', icon: <Wrench className="h-7 w-7 text-white" /> },
  { name: 'Pricing Desk', role: 'Transparent Billing', accent: 'from-cyan-500 to-blue-500', icon: <Wallet className="h-7 w-7 text-white" /> },
  { name: 'Trust & Safety', role: 'Secure Service Standards', accent: 'from-indigo-600 to-sky-500', icon: <CircleDashed className="h-7 w-7 text-white" /> },
] as const

export default function AboutUs() {
  const navigate = useNavigate()

  return (
    <PublicSiteLayout>
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0071BD]">About ServeSetu</p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#005A99] md:text-5xl">
                We bring trusted home technicians to your doorstep.
              </h1>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                ServeSetu was built to connect customers with reliable local professionals
                for every home repair need, with better visibility, fair pricing, and stronger trust.
              </p>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-3 rounded-full bg-[#005A99] px-8 py-3 font-semibold text-white shadow-xl shadow-[#005A99]/15 transition hover:bg-[#0071BD]"
              >
                Contact Our Team
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl">
              <div className="flex h-full items-center justify-center rounded-[2rem] bg-[#E0F2FB] p-8">
                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#005A99] shadow-lg">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white p-3">
                    <img src="/logo.png" alt="ServeSetu" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-20">
            <div className="grid gap-8 lg:grid-cols-3">
              {valueCards.map((card) => (
                <div key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition hover:shadow-xl">
                  <h2 className="mb-4 text-xl font-bold text-[#005A99]">{card.title}</h2>
                  <p className="leading-relaxed text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="mb-3 text-3xl font-bold text-[#005A99]">Why We Exist</h2>
                <p className="max-w-2xl text-slate-600">
                  We exist to make service delivery simple, transparent, and reliable for both customers and technicians.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-[#0071BD]">
                <CircleDashed className="h-5 w-5" />
                Trusted by home repair teams across India
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featureCards.map((feature) => (
                <div key={feature.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200">
                  <div className="mb-5 inline-flex rounded-3xl bg-white p-4">{feature.icon}</div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#005A99]">Our Core Members</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Experienced professionals driving ServeSetu forward with service, quality, and trust.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {people.map((person) => (
                <div key={person.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${person.accent}`}>
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white/15 backdrop-blur-sm">
                      {person.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{person.role}</p>
                    <div className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      ServeSetu Team
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PublicSiteLayout>
  )
}
