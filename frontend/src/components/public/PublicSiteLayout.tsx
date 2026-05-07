import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3D91] text-sm font-bold text-white shadow-lg">
        SS
      </div>
      <span className="text-2xl font-bold tracking-tight text-[#0B3D91]">
        Serve<span className="text-[#2563EB]">Setu</span>
      </span>
    </div>
  )
}

export default function PublicSiteLayout({
  children,
}: {
  children: ReactNode
}) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button type="button" onClick={() => navigate('/')} className="text-left">
            <BrandMark />
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-[#0B3D91]' : 'text-slate-600 hover:text-[#0B3D91]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => navigate('/services')}
            className="group rounded-full bg-[#0B3D91] px-6 py-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition-all hover:bg-[#2563EB] active:scale-95"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </nav>

      {children}

      <footer className="bg-gray-950 pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-12 text-center md:grid-cols-4 md:text-left">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                <BrandMark />
              </div>
              <p className="mx-auto max-w-md text-sm leading-7 text-slate-400 md:mx-0">
                ServeSetu connects households with verified professionals for fast,
                dependable, and transparent home services.
              </p>
            </div>

            <div>
              <h4 className="mb-5 font-semibold text-white">Explore</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-400">
                <Link to="/" className="transition-colors hover:text-white">Home</Link>
                <Link to="/services" className="transition-colors hover:text-white">Services</Link>
                <Link to="/about" className="transition-colors hover:text-white">About Us</Link>
                <Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-semibold text-white">Support</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-400">
                <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
                <Link to="/services" className="transition-colors hover:text-white">Services</Link>
                <a href="mailto:support@servesetu.com" className="transition-colors hover:text-white">
                  support@servesetu.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} ServeSetu Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
