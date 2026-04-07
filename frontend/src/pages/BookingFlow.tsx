import React, { useState, FormEvent, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"

export default function BookingFlow() {
  const { technicianId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [step, setStep] = useState(1)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const s = parseInt(params.get('step') || '1', 10)
    if (!isNaN(s) && s >= 1 && s <= 4) {
      setStep(s)
    }
  }, [location.search])
  const [form, setForm] = useState<any>({
    service: "",
    date: "",
    time: "",
    requests: "",
    fullName: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const updateStepInUrl = (s: number) => {
    const params = new URLSearchParams(location.search)
    params.set('step', String(s))
    navigate(`?${params.toString()}`, { replace: true })
  }

  const goNext = () => setStep((s) => {
    const ns = Math.min(s + 1, 4)
    updateStepInUrl(ns)
    return ns
  })
  const goBack = () => setStep((s) => {
    const ns = Math.max(s - 1, 1)
    updateStepInUrl(ns)
    return ns
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    goNext()
  }

  const StepIndicator = () => (
    <div className="flex items-center justify-between mb-8 max-w-lg mx-auto">
      {['Service','Schedule','Details','Payment'].map((label,i) => (
        <div key={label} className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step>i+1?'bg-black text-white': step===i+1?'bg-black text-white':'bg-gray-200 text-gray-600'}`}>
            {step>i+1?'✓':i+1}
          </div>
          <span className={`text-sm ${step===i+1?'font-semibold':''}`}>{label}</span>
          {i<3 && <div className={`flex-1 h-px ${step>i+1?'bg-black':'bg-gray-200'}`}></div>}
        </div>
      ))}
    </div>
  )

  const ServiceStep = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-4">Select Service</label>
        <div className="space-y-3">
          {['Smart Home Setup', 'Device Installation', 'Troubleshooting'].map((svc) => (
            <button
              key={svc}
              type="button"
              onClick={() => setForm({...form, service: svc})}
              className={`w-full text-left px-5 py-3 border rounded-lg ${form.service===svc ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-gray-800'}`}
            >
              {svc}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const ScheduleStep = () => (
    <div className="space-y-6">
      <div className="relative">
        <label className="block text-sm font-medium text-black mb-2">Preferred Date</label>
        <input
          type="date"
          value={form.date}
          onChange={e => setForm({...form, date: e.target.value})}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          placeholder="dd/mm/yyyy"
        />
        <div className="absolute right-3 top-9 text-gray-400">📅</div>
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-black mb-2">Preferred Time</label>
        <input
          type="time"
          value={form.time}
          onChange={e => setForm({...form, time: e.target.value})}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          placeholder="--:-- --"
        />
        <div className="absolute right-3 top-9 text-gray-400">⏱️</div>
      </div>
      <div>
        <label className="block text-sm font-medium text-black mb-2">Special Requests (Optional)</label>
        <textarea
          rows={3}
          value={form.requests}
          onChange={e=>setForm({...form, requests:e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Any special instructions or requirements..."
        />
      </div>
    </div>
  )

  const DetailsStep = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-2">Full Name</label>
        <input
          value={form.fullName}
          onChange={e=>setForm({...form, fullName: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
        <input
          value={form.phone}
          onChange={e=>setForm({...form, phone: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black mb-2 flex items-center gap-1">
          <span>Service Address</span>
        </label>
        <textarea
          rows={3}
          value={form.address}
          onChange={e=>setForm({...form, address: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Complete service address"
        />
      </div>
    </div>
  )

  const PaymentStep = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-2">Payment Method</label>
        <div className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center gap-2">
          <span>💳</span>
          <span>Credit/Debit Card</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          value={form.cardNumber}
          onChange={e=>setForm({...form, cardNumber:e.target.value})}
          placeholder="Card Number"
          className="col-span-1 md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          value={form.expiry}
          onChange={e=>setForm({...form, expiry:e.target.value})}
          placeholder="MM/YY"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          value={form.cvv}
          onChange={e=>setForm({...form, cvv:e.target.value})}
          placeholder="CVV"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  )

  const renderStep = () => {
    if (step === 1) return <ServiceStep />
    if (step === 2) return <ScheduleStep />
    if (step === 3) return <DetailsStep />
    if (step === 4) return <PaymentStep />
  }

  const summary = (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="font-semibold mb-2">Booking Summary</h2>
      <p>Technician #{technicianId}</p>
      {form.service && <p>Service: {form.service}</p>}
      {form.date && <p>Date & Time: {form.date} {form.time}</p>}
      <div className="border-t border-gray-200 mt-2 pt-2">
        <div className="flex justify-between"><span>Service Fee</span><span>₹800</span></div>
        <div className="flex justify-between"><span>Platform Fee</span><span>₹50</span></div>
        <div className="flex justify-between font-bold"><span>Total</span><span>₹850</span></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/marketplace")}
            className="text-black font-semibold hover:text-gray-700"
          >
            ← Back
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StepIndicator />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {renderStep()}
              <div className="flex justify-between items-center">
                {step>1 && (
                  <button type="button" onClick={goBack} className="px-6 py-2 border border-gray-300 rounded-lg">
                    Back
                  </button>
                )}
                <button type="submit" className="px-6 py-2 bg-black text-white rounded-lg">
                  {step===4?"Confirm Booking":"Continue"}
                </button>
              </div>
            </form>
          </div>
          <div>{summary}</div>
        </div>
      </div>
    </div>
  )
}
