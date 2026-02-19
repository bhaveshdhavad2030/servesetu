import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { serviceCategories, platformStats } from "@/data/techsevaData";
import { ArrowRight, Star, Users, CheckCircle } from "lucide-react";

export default function ServeruetuLanding() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold text-lg">
              SV
            </div>
            <span className="text-xl font-semibold text-black">Servesetu</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-black transition">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-black transition">How it works</a>
            <a href="#stats" className="text-gray-600 hover:text-black transition">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setLocation("/servesetu/technician-dashboard")}
              className="hidden sm:inline-flex"
            >
              For Technicians
            </Button>
            <Button
              onClick={() => setLocation("/servesetu/marketplace")}
              className="bg-black text-white hover:bg-gray-900"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Find Expert Technicians in Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with verified, professional technicians for all your home repair and maintenance needs. Fast, reliable, and transparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setLocation("/servesetu/marketplace")}
                className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg"
              >
                Browse Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setLocation("/servesetu/technician-dashboard")}
                className="px-8 py-6 text-lg"
              >
                Become a Technician
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <p className="text-gray-600">Professional Services at Your Doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600">From plumbing to smart home setup, we have experts for every need</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {serviceCategories.map((service) => (
              <button
                key={service.id}
                onClick={() => setLocation("/servesetu/marketplace")}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-semibold text-black mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">From ₹{service.averagePrice}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How TechSeva Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and hassle-free</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Browse", desc: "Find services and technicians" },
              { step: "2", title: "Book", desc: "Choose date and time" },
              { step: "3", title: "Pay", desc: "Secure payment" },
              { step: "4", title: "Done", desc: "Service completed" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{platformStats.totalTechnicians}+</div>
              <p className="text-gray-400">Verified Technicians</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{platformStats.totalCustomers}+</div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{platformStats.servicesCompleted}+</div>
              <p className="text-gray-400">Services Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{platformStats.averageRating}/5</div>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TechSeva */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose TechSeva?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Verified Experts", desc: "All technicians are verified and background checked" },
              { icon: CheckCircle, title: "Quality Guaranteed", desc: "94% customer satisfaction with 96% on-time completion" },
              { icon: Users, title: "24/7 Support", desc: "Round-the-clock customer support for peace of mind" },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <item.icon className="h-12 w-12 text-black mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of customers who trust TechSeva for their home services</p>
          <Button
            onClick={() => setLocation("/techseva/marketplace")}
            className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Browse Services Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold text-sm">
                  TS
                </div>
                <span className="font-semibold text-black">TechSeva</span>
              </div>
              <p className="text-gray-600 text-sm">Professional home services at your doorstep</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Plumbing</a></li>
                <li><a href="#" className="hover:text-black">Electrical</a></li>
                <li><a href="#" className="hover:text-black">Appliance Repair</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 TechSeva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
