import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-black">Manus Projects</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Choose Your Project</h2>
          <p className="text-xl text-gray-600">Select from our marketplace platforms</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Servesetu Card */}
          <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-xl transition-all group cursor-pointer"
            onClick={() => setLocation("/servesetu")}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-black text-white flex items-center justify-center text-2xl font-bold mb-4">
                SV
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">Servesetu</h3>
              <p className="text-gray-600">Technician Marketplace</p>
            </div>

            <p className="text-gray-700 mb-6">
              Connect customers with verified, professional technicians for home repair and maintenance services. Browse services, book appointments, and manage your profile.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">🔧</span>
                <span>10+ Service Categories</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">⭐</span>
                <span>Rating & Review System</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">📅</span>
                <span>Real-time Booking</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">💰</span>
                <span>Transparent Pricing</span>
              </div>
            </div>

            <Button
              onClick={() => setLocation("/servesetu")}
              className="w-full bg-black text-white hover:bg-gray-900 py-3 text-lg group-hover:translate-x-1 transition-transform"
            >
              Explore Servesetu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Indian Business Names Card */}
          <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all group cursor-pointer"
            onClick={() => setLocation("/")}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                ॐ
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">IndianNames</h3>
              <p className="text-gray-600">Business Name Marketplace</p>
            </div>

            <p className="text-gray-700 mb-6">
              Discover authentic Indian-origin business names for your technician marketplace or gig economy startup. Search by meaning, personality, or linguistic origin.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">🏷️</span>
                <span>15+ Curated Names</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">🔍</span>
                <span>Advanced Search</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">📚</span>
                <span>Detailed Meanings</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">🎯</span>
                <span>Category Filtering</span>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={() => setLocation("/")}
              className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 text-lg group-hover:translate-x-1 transition-transform"
            >
              Browse Names
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">About These Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-black mb-2">TechSeva</h4>
              <p className="text-gray-700">A complete technician marketplace platform with customer and technician dashboards, real-time booking, ratings, and earnings tracking. Perfect for connecting service providers with customers.</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">IndianNames</h4>
              <p className="text-gray-700">A searchable marketplace for Indian-origin business names. Ideal for entrepreneurs looking for authentic, meaningful brand names for their gig economy or service-based startups.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 Manus Projects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
