import { Link, useNavigate } from "react-router-dom"
import technician from "../assets/technician.jpg";
import { ArrowRight, Shield, Clock, Award, Star, Search, Wrench, Zap, Droplet, Wind, Palette } from "lucide-react"

const IconWrapper = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg`}>
    {children}
  </div>
)

export default function Landing() {
  const navigate = useNavigate()

  const services = [
    { id: 1, name: "Plumbing", icon: <Droplet className="w-6 h-6" />, color: "bg-blue-100 text-[#2563EB]", price: 499 },
    { id: 2, name: "Electrical", icon: <Zap className="w-6 h-6" />, color: "bg-blue-100 text-[#2563EB]", price: 599 },
    { id: 3, name: "Appliances", icon: <Search className="w-6 h-6" />, color: "bg-blue-100 text-[#2563EB]", price: 699 },
    { id: 4, name: "AC Service", icon: <Wind className="w-6 h-6" />, color: "bg-blue-100 text-[#2563EB]", price: 799 },
    { id: 5, name: "Painting", icon: <Palette className="w-6 h-6" />, color: "bg-blue-100 text-[#2563EB]", price: 999 },
  ]

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-10 h-10 rounded-xl bg-[#0B3D91] flex items-center justify-center text-white font-bold shadow-lg transition-transform group-hover:rotate-12">
              SS
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#0B3D91]">
              Serve<span className="text-[#2563EB]">Setu</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-600">
            <a href="#services" className="text-sm font-medium hover:text-[#0B3D91] transition-colors">Services</a>
            <a href="#benefits" className="text-sm font-medium hover:text-[#0B3D91] transition-colors">Why Us</a>
            <Link to="/about" className="text-sm font-medium hover:text-[#0B3D91] transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#0B3D91] transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="text-sm font-medium hover:text-[#0B3D91] transition-colors">Privacy Policy</Link>
          </div>

          <button
            onClick={() => navigate("/marketplace")}
            className="group px-6 py-2.5 bg-[#0B3D91] text-white rounded-full font-medium transition-all hover:bg-[#2563EB] active:scale-95 shadow-lg shadow-blue-500/10"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100/50 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-blue-50/50 blur-[130px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                </span>
                #1 Trusted Home Services in India
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-[#0B3D91] mb-8 leading-[1.1] tracking-tight">
                Quality Repairs, <br />
                <span className="text-[#2563EB]">Exactly When</span> <br />
                You Need Them.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect with verified, professional technicians for all your home repair needs. We bring the best experts right to your doorstep, guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/marketplace")}
                  className="px-8 py-4 bg-[#0B3D91] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#0B3D91]/20 transition-all hover:bg-[#2563EB] hover:translate-y-[-2px] active:scale-95 flex items-center justify-center gap-3"
                >
                  Book a Service
                  <Search className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-[#0B3D91]">4.9/5</span>
                    </div>
                    <p className="text-xs text-gray-500">From 10k+ happy users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="flex-1 w-full flex items-center justify-center">
              <div className="relative w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-50 p-4">
                <img
                  src={technician}
                  alt="Technician working"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/10 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B3D91] flex items-center justify-center shadow-lg">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[#0B3D91] font-bold">Verified Expert</p>
                      <p className="text-gray-500 text-xs">Certified Pro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B3D91]">Explore Services</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-md text-center md:text-left">
              From minor fixes to major installations, we've got you covered with specialized pros.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate("/marketplace")}
                className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 hover:translate-y-[-8px] transition-all cursor-pointer"
              >
                <IconWrapper color={service.color}>
                  {service.icon}
                </IconWrapper>
                <h3 className="text-xl font-bold text-[#0B3D91] mb-2 truncate">{service.name}</h3>
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                  Starts at <span className="text-[#0B3D91] font-bold">₹{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-8 h-8 text-[#2563EB]" />,
                title: "100% Safe & Secure",
                desc: "Every technician is background checked and verified for your peace of mind."
              },
              {
                icon: <Clock className="w-8 h-8 text-[#2563EB]" />,
                title: "On-Time Service",
                desc: "We value your time. Our pros arrive exactly when scheduled, or it's on us."
              },
              {
                icon: <Award className="w-8 h-8 text-[#2563EB]" />,
                title: "Quality Guarantee",
                desc: "Not satisfied with the repair? We'll fix it again for free, no questions asked."
              },
            ].map((benefit, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-gray-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B3D91] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B3D91] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 blur-[100px] -z-0" />

            <div className="relative z-10 max-w-2xl mx-auto text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to experience the future of repairs?</h2>
              <p className="text-xl text-blue-100/70 mb-12">Join 50,000+ homeowners who trust ServeSetu for their daily maintenance.</p>
              <button
                onClick={() => navigate("/marketplace")}
                className="px-10 py-5 bg-white text-[#0B3D91] rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-3 mx-auto"
              >
                Browse Marketplace
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0B3D91] font-bold">
                  SS
                </div>
                <span className="text-xl font-bold">ServeSetu</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8 mx-auto md:mx-0">
                Building India's largest and most trusted marketplace for professional home services.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a partner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-12 text-center">
            <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} ServeSetu Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
