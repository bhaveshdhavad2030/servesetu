import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { technicians } from "@/data/servesetuData";
import { TrendingUp, Users, DollarSign, Star, CheckCircle, Clock } from "lucide-react";

export default function TechnicianDashboard() {
  const [, setLocation] = useLocation();
  const [selectedTech, setSelectedTech] = useState(technicians[0]);
  const [activeTab, setActiveTab] = useState<"overview" | "requests" | "earnings" | "profile">("overview");

  // Mock incoming requests
  const incomingRequests = [
    { id: 1, customer: "Anita Singh", service: "Plumbing Repair", date: "Today, 2:00 PM", status: "pending" },
    { id: 2, customer: "Vikram Desai", service: "Pipe Installation", date: "Tomorrow, 10:00 AM", status: "pending" },
    { id: 3, customer: "Neha Gupta", service: "Leak Repair", date: "Jan 20, 3:00 PM", status: "pending" },
  ];

  // Mock earnings
  const earningsData = {
    thisMonth: 45000,
    lastMonth: 38000,
    totalEarnings: 450000,
    completedThisMonth: 28,
  };

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
              View as Customer
            </Button>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black font-semibold">
              {selectedTech.avatar}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">Welcome back, {selectedTech.name}!</h1>
          <p className="text-gray-600">Manage your bookings, earnings, and profile</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">This Month Earnings</p>
              <DollarSign className="h-5 w-5 text-black" />
            </div>
            <p className="text-3xl font-bold text-black">₹{earningsData.thisMonth}</p>
            <p className="text-sm text-green-600 mt-2">+18% from last month</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Completed This Month</p>
              <CheckCircle className="h-5 w-5 text-black" />
            </div>
            <p className="text-3xl font-bold text-black">{earningsData.completedThisMonth}</p>
            <p className="text-sm text-gray-600 mt-2">Services completed</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Rating</p>
              <Star className="h-5 w-5 text-black" />
            </div>
            <p className="text-3xl font-bold text-black">{selectedTech.rating}</p>
            <p className="text-sm text-gray-600 mt-2">({selectedTech.reviewCount} reviews)</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Total Earnings</p>
              <TrendingUp className="h-5 w-5 text-black" />
            </div>
            <p className="text-3xl font-bold text-black">₹{earningsData.totalEarnings}</p>
            <p className="text-sm text-gray-600 mt-2">All time</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {(["overview", "requests", "earnings", "profile"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold transition-all capitalize ${
                activeTab === tab
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upcoming Bookings */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Upcoming Bookings</h2>
              <div className="space-y-4">
                {incomingRequests.slice(0, 3).map((req) => (
                  <div key={req.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-black">{req.customer}</p>
                        <p className="text-sm text-gray-600">{req.service}</p>
                      </div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded font-semibold">
                        Pending
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {req.date}
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-black text-white hover:bg-gray-900 text-sm py-2">
                        Accept
                      </Button>
                      <Button variant="outline" className="flex-1 text-sm py-2">
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Recent Reviews</h2>
              <div className="space-y-4">
                {[
                  { customer: "Anita Singh", rating: 5, comment: "Excellent work! Very professional." },
                  { customer: "Vikram Desai", rating: 5, comment: "Quick and efficient service." },
                  { customer: "Neha Gupta", rating: 4, comment: "Good work, would recommend." },
                ].map((review, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-black">{review.customer}</p>
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
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "requests" && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Service Requests</h2>
            <div className="space-y-4">
              {incomingRequests.map((req) => (
                <div key={req.id} className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-black text-lg">{req.customer}</p>
                    <p className="text-gray-600 mb-2">{req.service}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {req.date}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-black text-white hover:bg-gray-900">
                      Accept
                    </Button>
                    <Button variant="outline">
                      Decline
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "earnings" && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Earnings & Analytics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-4">Monthly Earnings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">This Month</span>
                    <span className="text-2xl font-bold text-black">₹{earningsData.thisMonth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Last Month</span>
                    <span className="text-2xl font-bold text-black">₹{earningsData.lastMonth}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-gray-600">Total Earnings</span>
                    <span className="text-2xl font-bold text-black">₹{earningsData.totalEarnings}</span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-4">Performance</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Completion Rate</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: "96%" }} />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">96%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">On-Time Rate</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: "94%" }} />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">94%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Profile Settings</h2>
            <div className="max-w-2xl space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Name</label>
                    <input
                      type="text"
                      defaultValue={selectedTech.name}
                      className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Bio</label>
                    <textarea
                      defaultValue={selectedTech.bio}
                      className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-black focus:outline-none"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Services</label>
                    <div className="space-y-2">
                      {selectedTech.services.map((service) => (
                        <div key={service} className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-900 w-full">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
