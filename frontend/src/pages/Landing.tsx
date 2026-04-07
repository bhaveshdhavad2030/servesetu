import { useNavigate } from "react-router-dom"
import { serviceCategories, platformStats } from "../../servesetuData" // shared data file (root level)

export default function Landing() {
  const navigate = useNavigate()

  // stats shown on landing (pulled from sampl data)
  const stats = [
    { label: "Verified Technicians", value: `${platformStats.totalTechnicians}+` },
    { label: "Happy Customers", value: `${platformStats.totalCustomers}+` },
    { label: "Services Completed", value: `${platformStats.servicesCompleted}+` },
    { label: "Average Rating", value: `${platformStats.averageRating}/5` },
  ]

  const whyChoose = [
    {
      title: "Verified Experts",
      icon: "⭐",
      description: "All technicians are verified and background checked",
    },
    {
      title: "Quality Guaranteed",
      icon: "✅",
      description: "94% customer satisfaction with 96% on-time completion",
    },
    {
      title: "24/7 Support",
      icon: "👥",
      description: "Round-the-clock customer support for peace of mind",
    },
  ]

  const howSteps = [
    { number: 1, title: "Browse", description: "Find services and technicians" },
    { number: 2, title: "Book", description: "Choose date and time" },
    { number: 3, title: "Pay", description: "Secure payment" },
    { number: 4, title: "Done", description: "Service completed" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">SS</div>
            <span className="text-xl font-semibold text-black">ServeSetu</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-black transition">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-black transition">How it works</a>
            <a href="#about" className="text-gray-600 hover:text-black transition">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/technician-dashboard")}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              For Technicians
            </button>
            <button
              onClick={() => navigate("/marketplace")}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Find Expert Technicians in Minutes</h1>
            <p className="text-xl text-gray-600 mb-8">Connect with verified, professional technicians for all your home repair and maintenance needs. Fast, reliable, and transparent.</p>
            <button
              onClick={() => navigate("/marketplace")}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 text-lg font-medium"
            >
              Browse Services →
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <p className="text-gray-600">Professional Services at Your Doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600">From plumbing to smart home setup, we have experts for every need</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {serviceCategories.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate("/marketplace")}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-black mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">From ₹{service.averagePrice}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">How ServeSetu Works</h2>
          <p className="text-xl text-gray-600 mb-12">Simple, transparent, and hassle-free</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose ServeSetu?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of customers who trust ServeSetu for their home services</p>
          <button
            onClick={() => navigate("/marketplace")}
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 font-medium">
            Browse Services Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 ServeSetu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
