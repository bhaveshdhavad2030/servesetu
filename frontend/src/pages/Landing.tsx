import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()

  const services = [
    { id: 1, name: "Plumbing", icon: "🚿", price: 500 },
    { id: 2, name: "Electrical", icon: "⚡", price: 600 },
    { id: 3, name: "Appliance Repair", icon: "🧊", price: 700 },
    { id: 4, name: "AC Service", icon: "❄️", price: 800 },
    { id: 5, name: "Painting", icon: "🎨", price: 1000 },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">SS</div>
            <span className="text-xl font-semibold text-black">ServeSetu</span>
          </div>
          <button
            onClick={() => navigate("/marketplace")}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            Get Started
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Find Expert Technicians in Minutes</h1>
            <p className="text-xl text-gray-600 mb-8">Connect with verified, professional technicians for all your home repair needs.</p>
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

      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600">From plumbing to painting, we have experts for every need</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate("/marketplace")}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-black mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">From ₹{service.price}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of customers who trust ServeSetu</p>
          <button
            onClick={() => navigate("/marketplace")}
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 font-medium"
          >
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
