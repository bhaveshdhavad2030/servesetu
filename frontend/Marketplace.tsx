import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { serviceCategories, technicians } from "@/data/techsevaData";
import { Search, MapPin, Star, Clock, CheckCircle } from "lucide-react";

export default function ServeruetuMarketplace() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"rating" | "price" | "experience">("rating");

  const filteredTechnicians = useMemo(() => {
    let filtered = technicians;

    if (searchQuery) {
      filtered = filtered.filter(
        (tech) =>
          tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tech.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((tech) =>
        tech.services.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
      filtered.sort((a, b) => a.priceRange.min - b.priceRange.min);
    } else if (sortBy === "experience") {
      filtered.sort((a, b) => b.experience - a.experience);
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/servesetu")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold text-lg">
              SV
            </div>
            <span className="text-xl font-semibold text-black">Servesetu</span>
          </button>
          <Button
            variant="outline"
            onClick={() => setLocation("/servesetu/customer-dashboard")}
          >
            My Bookings
          </Button>
        </div>
      </header>

      {/* Search & Filter Section */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by technician name or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-base border-2 border-gray-200 focus:border-black rounded-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-black text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-black"
                }`}
              >
                All Services
              </button>
              {serviceCategories.slice(0, 6).map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedCategory(service.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === service.name
                      ? "bg-black text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-black"
                  }`}
                >
                  {service.icon} {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 font-medium">Sort by:</span>
            {(["rating", "price", "experience"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  sortBy === option
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technicians Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-black">{filteredTechnicians.length}</span> technicians
          </p>
        </div>

        {filteredTechnicians.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnicians.map((tech) => (
              <div
                key={tech.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-black transition-all group cursor-pointer"
                onClick={() => setLocation(`/techseva/technician/${tech.id}`)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{tech.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">{tech.name}</h3>
                      <p className="text-sm text-gray-600">{tech.experience} years experience</p>
                    </div>
                  </div>
                  {tech.verified && (
                    <CheckCircle className="h-5 w-5 text-black" />
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(tech.rating) ? "fill-black text-black" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black">{tech.rating}</span>
                  <span className="text-sm text-gray-600">({tech.reviewCount})</span>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.services.slice(0, 2).map((service) => (
                      <span key={service} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {service}
                      </span>
                    ))}
                    {tech.services.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{tech.services.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Response: {tech.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{tech.availability}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-lg font-semibold text-black">₹{tech.priceRange.min}</p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/techseva/booking/${tech.id}`);
                    }}
                    className="bg-black text-white hover:bg-gray-900"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No technicians found matching your criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
