import { ArrowRight, ShieldCheck, Sparkles, Wallet, Users, CircleDashed } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const featureCards = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0B3D91]" />,
    title: 'Verified Technicians',
    description: 'Every professional is background checked and trained for safe home repairs.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#0B3D91]" />,
    title: 'Transparent Pricing',
    description: 'Clear service rates with no hidden charges, every single time.',
  },
  {
    icon: <Wallet className="w-6 h-6 text-[#0B3D91]" />,
    title: 'Fast Payments',
    description: 'Reliable payouts for partners and seamless payment options for customers.',
  },
]

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
]

const people = [
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=400&q=80',
]

export default function AboutUs() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 selection:bg-[#cfe8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB] mb-4">About ServiceWale</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3D91] tracking-tight mb-6">
              We bring trusted home technicians to your doorstep.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
              Fast service, verified experts, and complete peace of mind. ServiceWale was built to connect customers with reliable local professionals for every home repair need.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-3 rounded-full bg-[#0B3D91] px-8 py-3 text-white font-semibold shadow-xl shadow-[#0B3D91]/15 transition hover:bg-[#2563EB]
              "
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 rounded-[2rem] bg-white shadow-2xl border border-slate-200 p-8">
            <div className="rounded-[2rem] bg-[#EAF2FF] p-8 flex items-center justify-center h-full">
              <div className="w-44 h-44 rounded-full bg-[#0B3D91] flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-14 h-14 text-white" />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {valueCards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm hover:shadow-xl transition">
                <h2 className="text-xl font-bold text-[#0B3D91] mb-4">{card.title}</h2>
                <p className="text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-white rounded-[2rem] border border-slate-200 p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0B3D91] mb-3">Why We Exist</h2>
              <p className="text-slate-600 max-w-2xl">We exist to make service delivery simple, transparent, and reliable for both customers and technicians.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-[#2563EB]">
              <CircleDashed className="w-5 h-5" /> Trusted by home repair teams across India
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] border border-slate-200 p-8 hover:border-blue-200 transition bg-slate-50">
                <div className="mb-5 rounded-3xl bg-white p-4 inline-flex">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B3D91]">Our Core Members</h2>
            <p className="text-slate-600 max-w-2xl mt-3">Experienced professionals driving ServiceWale forward with service, quality, and trust.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {people.map((avatar, index) => (
              <div key={index} className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img src={avatar} alt={`Team member ${index + 1}`} className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
