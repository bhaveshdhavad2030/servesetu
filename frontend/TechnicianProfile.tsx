import { Button } from "@/components/ui/button";
import { useLocation, useRoute } from "wouter";
import { technicians, reviews } from "@/data/servesetuData";
import { Star, Clock, MapPin, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function TechnicianProfile() {
  const [match, params] = useRoute("/servesetu/technician/:id");
  const [, setLocation] = useLocation();

  if (!match) return null;

  const technician = technicians.find((t) => t.id === params?.id);
  if (!technician) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Technician not found</p>
          <Button onClick={() => setLocation("/servesetu/marketplace")}>
            Back to Marketplace
          </Button>
        </div>
      </div>
    );
  }

  const technicianReviews = reviews.filter((r) => r.technicianId === technician.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/servesetu/marketplace")}
            className="text-gray-600 hover:text-black transition"
          >
            ← Back
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold text-sm">
              SV
            </div>
            <span className="text-lg font-semibold text-black">Servesetu</span>
          </div>
          <div />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">{technician.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-black">{technician.name}</h1>
                {technician.verified && (
                  <CheckCircle className="h-8 w-8 text-black" />
                )}
              </div>
              <p className="text-gray-600 mb-4">{technician.experience} years of professional experience</p>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(technician.rating) ? "fill-black text-black" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-black">{technician.rating}</span>
                  <span className="text-gray-600">({technician.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Completed Jobs</p>
                  <p className="text-2xl font-bold text-black">{technician.completedJobs}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Response Time</p>
                  <p className="text-2xl font-bold text-black">{technician.responseTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price Range</p>
                  <p className="text-2xl font-bold text-black">₹{technician.priceRange.min}-{technician.priceRange.max}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 mb-6">{technician.bio}</p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={() => setLocation(`/techseva/booking/${technician.id}`)}
                  className="bg-black text-white hover:bg-gray-900 px-6 py-3"
                >
                  Book Now
                </Button>
                <Button variant="outline" className="px-6 py-3 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </Button>
                <Button variant="outline" className="px-6 py-3 gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Availability */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-black mb-4">Services Offered</h2>
            <div className="space-y-3">
              {technician.services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-black" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-black mb-4">Availability</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">{technician.availability}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Serves multiple areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Customer Reviews ({technicianReviews.length})</h2>
          
          {technicianReviews.length > 0 ? (
            <div className="space-y-6">
              {technicianReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-black">{review.customerName}</p>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-black text-black" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  {review.verified && (
                    <p className="text-xs text-gray-500 mt-2">✓ Verified Purchase</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
