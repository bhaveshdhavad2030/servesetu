import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation, useRoute } from "wouter";
import { technicians, serviceCategories } from "@/data/techsevaData";
import { CheckCircle, Calendar, Clock, MapPin, CreditCard } from "lucide-react";

export default function BookingFlow() {
  const [match, params] = useRoute("/servesetu/booking/:technicianId");
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    notes: "",
    name: "",
    phone: "",
    address: "",
  });

  if (!match) return null;

  const technician = technicians.find((t) => t.id === params?.technicianId);
  if (!technician) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Button onClick={() => setLocation("/servesetu/marketplace")}>
          Back to Marketplace
        </Button>
      </div>
    );
  }

  const handleBooking = () => {
    // Show success message
    alert(`Booking confirmed with ${technician.name}! You'll receive a confirmation shortly.`);
    setLocation("/servesetu/customer-dashboard");
  };

  const steps = [
    { num: 1, title: "Service" },
    { num: 2, title: "Schedule" },
    { num: 3, title: "Details" },
    { num: 4, title: "Payment" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation(`/servesetu/technician/${technician.id}`)}
            className="text-gray-600 hover:text-black transition"
          >
            ← Back
          </button>
          <span className="text-lg font-semibold text-black">Booking</span>
          <div />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > s.num ? "✓" : s.num}
                </div>
                <p className={`text-sm font-medium ml-3 ${
                  step >= s.num ? "text-black" : "text-gray-600"
                }`}>
                  {s.title}
                </p>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step > s.num ? "bg-black" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Select Service</h2>
                <div className="space-y-3">
                  {technician.services.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        setBookingData({ ...bookingData, service });
                        setStep(2);
                      }}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        bookingData.service === service
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-black"
                      }`}
                    >
                      <p className="font-semibold">{service}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Choose Date & Time</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="border-2 border-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Preferred Time
                    </label>
                    <Input
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="border-2 border-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      placeholder="Any special instructions or requirements..."
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!bookingData.date || !bookingData.time}
                      className="flex-1 bg-black text-white hover:bg-gray-900"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Full Name</label>
                    <Input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      placeholder="Your full name"
                      className="border-2 border-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="border-2 border-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      <MapPin className="inline h-4 w-4 mr-2" />
                      Service Address
                    </label>
                    <textarea
                      value={bookingData.address}
                      onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                      placeholder="Complete service address"
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(4)}
                      disabled={!bookingData.name || !bookingData.phone || !bookingData.address}
                      className="flex-1 bg-black text-white hover:bg-gray-900"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Payment</h2>
                <div className="space-y-4 mb-6">
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Payment Method</p>
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <span className="font-semibold text-black">Credit/Debit Card</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Card Details</p>
                    <Input
                      type="text"
                      placeholder="Card Number"
                      className="mb-3 border-2 border-gray-200"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        className="border-2 border-gray-200"
                      />
                      <Input
                        type="text"
                        placeholder="CVV"
                        className="border-2 border-gray-200"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(3)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleBooking}
                      className="flex-1 bg-black text-white hover:bg-gray-900"
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-black mb-6">Booking Summary</h3>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Technician</p>
                  <p className="font-semibold text-black">{technician.name}</p>
                </div>
                {bookingData.service && (
                  <div>
                    <p className="text-sm text-gray-600">Service</p>
                    <p className="font-semibold text-black">{bookingData.service}</p>
                  </div>
                )}
                {bookingData.date && (
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="font-semibold text-black">{bookingData.date} at {bookingData.time}</p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-semibold text-black">₹{technician.priceRange.min}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-semibold text-black">₹50</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-black">Total</span>
                  <span className="text-lg font-bold text-black">₹{technician.priceRange.min + 50}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
