import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { sampleBookings } from "@/data/servesetuData";
import { Star, MapPin, Calendar, Clock, MessageSquare } from "lucide-react";

export default function CustomerDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

  const activeBookings = sampleBookings.filter((b) => b.status !== "completed");
  const completedBookings = sampleBookings.filter((b) => b.status === "completed");

  const displayBookings = activeTab === "active" ? activeBookings : completedBookings;

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
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setLocation("/servesetu/marketplace")}
            >
              Browse Services
            </Button>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black font-semibold">
              👤
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your service bookings and history</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-3 font-semibold transition-all ${
              activeTab === "active"
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Active Bookings ({activeBookings.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-4 py-3 font-semibold transition-all ${
              activeTab === "completed"
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Completed ({completedBookings.length})
          </button>
        </div>

        {/* Bookings List */}
        {displayBookings.length > 0 ? (
          <div className="space-y-6">
            {displayBookings.map((booking) => (
              <div
                key={booking.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Technician Info */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Technician</p>
                    <p className="text-lg font-semibold text-black">{booking.technicianName}</p>
                    <p className="text-sm text-gray-600">{booking.serviceType}</p>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Scheduled</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-600" />
                      <span className="font-semibold text-black">{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="font-semibold text-black">{booking.time}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Status</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "confirmed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </div>
                    <p className="text-lg font-bold text-black mt-2">₹{booking.price}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    {booking.status === "completed" && !booking.rating ? (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => alert("Rating feature coming soon!")}
                      >
                        <Star className="h-4 w-4 mr-2" />
                        Rate Service
                      </Button>
                    ) : booking.status === "completed" && booking.rating ? (
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < booking.rating! ? "fill-black text-black" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          className="w-full gap-2"
                          onClick={() => alert("Messaging feature coming soon!")}
                        >
                          <MessageSquare className="h-4 w-4" />
                          Message
                        </Button>
                        {booking.status === "pending" && (
                          <Button
                            variant="outline"
                            className="w-full text-red-600 hover:text-red-700"
                          >
                            Cancel
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-6">
              {activeTab === "active"
                ? "No active bookings. Browse services to get started!"
                : "No completed bookings yet."}
            </p>
            {activeTab === "active" && (
              <Button
                onClick={() => setLocation("/techseva/marketplace")}
                className="bg-black text-white hover:bg-gray-900"
              >
                Browse Services
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
