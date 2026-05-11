import { useState } from 'react'
import { X, ChevronRight, ChevronLeft, Calendar, Clock, MapPin, CheckCircle2, Phone, FileText } from 'lucide-react'

interface Technician {
  id: number
  name: string
  service: string
  rating: number
  price: number
  label: string
}

interface BookingModalProps {
  isOpen: boolean
  technician: Technician | null
  onClose: () => void
  onSuccess: () => void
}

const TIME_SLOTS = [
  { id: 'morning', label: 'Morning', sub: '8:00 AM – 11:00 AM' },
  { id: 'afternoon', label: 'Afternoon', sub: '12:00 PM – 3:00 PM' },
  { id: 'evening', label: 'Evening', sub: '4:00 PM – 7:00 PM' },
] as const

function getNextDays(count: number) {
  const days: { label: string; sub: string; value: string }[] = []
  const today = new Date()
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  for (let i = 0; i < count; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push({
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : dayNames[d.getDay()],
      sub: `${d.getDate()} ${monthNames[d.getMonth()]}`,
      value: d.toISOString().split('T')[0],
    })
  }
  return days
}

function generateRef(): string {
  const now = new Date()
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const rand = String(Math.floor(Math.random() * 9000) + 1000)
  return `SETU-${date}-${rand}`
}

const DATES = getNextDays(5)

export default function BookingModal({ isOpen, technician, onClose, onSuccess }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(DATES[0].value)
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[0].id)
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [issue, setIssue] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  function isValidPhone(p: string) {
    return p.replace(/\D/g, '').length >= 10
  }

  if (!isOpen || !technician) return null

  function resetForm() {
    setStep(1)
    setAddress('')
    setName('')
    setPhone('')
    setIssue('')
    setBookingRef('')
  }

  function handleClose() {
    resetForm()
    onClose()
  }

  function handleDone() {
    resetForm()
    onSuccess()
  }

  async function handleSubmit() {
    if (!address.trim() || !name.trim() || !isValidPhone(phone) || !issue.trim()) return
    setSubmitting(true)

    const ref = generateRef()
    setBookingRef(ref)

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            booking_ref: ref,
            customer_name: name,
            customer_phone: phone,
            customer_address: address,
            issue_description: issue,
            technician_name: technician.name,
            service: technician.service,
            price: `₹${technician.price}`,
            date: `${selectedDateLabel?.label}, ${selectedDateLabel?.sub}`,
            time_slot: `${selectedTimeLabel?.label} (${selectedTimeLabel?.sub})`,
          }),
        })
      } catch {
        // silently fail — UX must not break if Formspree is down
      }
    }

    setSubmitting(false)
    setStep(4)
  }

  const initials = technician.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
  const selectedDateLabel = DATES.find((d) => d.value === selectedDate)
  const selectedTimeLabel = TIME_SLOTS.find((t) => t.id === selectedTime)

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0071BD]">
              {step === 4 ? 'Booking Confirmed' : 'Book a Technician'}
            </p>
            <h2 className="mt-0.5 text-lg font-bold text-slate-900">
              {step === 4 ? technician.name : technician.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={step === 4 ? handleDone : handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-slate-300 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Step indicator — hidden on confirmation */}
        {step < 4 && (
          <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    step > s
                      ? 'bg-emerald-500 text-white'
                      : step === s
                      ? 'bg-[#005A99] text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > s ? <CheckCircle2 className="h-4 w-4" /> : s}
                </div>
                <span className={`text-xs font-medium ${step === s ? 'text-slate-900' : 'text-slate-400'}`}>
                  {s === 1 ? 'Review' : s === 2 ? 'Schedule' : 'Details'}
                </span>
                {s < 3 && <ChevronRight className="h-3.5 w-3.5 text-slate-300" />}
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-6">

          {/* Step 1 — Review */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#005A99] text-lg font-bold text-white shadow-lg">
                  {initials}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{technician.name}</p>
                  <p className="text-sm text-slate-500">{technician.service}</p>
                  <p className="mt-1 text-xs text-slate-400">{technician.label}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-extrabold text-[#005A99]">₹{technician.price}</p>
                  <p className="text-xs text-slate-400">per visit</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2.5 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Background-verified technician
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Transparent pricing — no hidden charges
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Service guarantee — issues resolved post-visit
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Schedule */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Calendar className="h-4 w-4 text-[#0071BD]" />
                  Choose a date
                </div>
                <div className="flex gap-2 flex-wrap">
                  {DATES.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setSelectedDate(d.value)}
                      className={`flex flex-col items-center rounded-2xl border px-4 py-3 text-center transition ${
                        selectedDate === d.value
                          ? 'border-[#005A99] bg-[#005A99] text-white shadow-lg shadow-[#005A99]/20'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wide">{d.label}</span>
                      <span className={`text-lg font-extrabold leading-tight ${selectedDate === d.value ? 'text-white' : 'text-slate-900'}`}>
                        {d.sub.split(' ')[0]}
                      </span>
                      <span className={`text-xs ${selectedDate === d.value ? 'text-blue-100' : 'text-slate-400'}`}>
                        {d.sub.split(' ')[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Clock className="h-4 w-4 text-[#0071BD]" />
                  Choose a time slot
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTime(t.id)}
                      className={`rounded-2xl border p-3 text-left transition ${
                        selectedTime === t.id
                          ? 'border-[#005A99] bg-[#005A99] text-white shadow-lg shadow-[#005A99]/20'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <p className="text-sm font-semibold">{t.label}</p>
                      <p className={`mt-0.5 text-xs ${selectedTime === t.id ? 'text-blue-100' : 'text-slate-400'}`}>
                        {t.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#0071BD]" />
                  <span className="font-medium">{selectedDateLabel?.label}, {selectedDateLabel?.sub}</span>
                  <span className="mx-1 text-slate-300">·</span>
                  <Clock className="h-4 w-4 text-[#0071BD]" />
                  <span className="font-medium">{selectedTimeLabel?.label} ({selectedTimeLabel?.sub})</span>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0071BD] focus:bg-white focus:ring-1 focus:ring-[#0071BD]/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0071BD] focus:bg-white focus:ring-1 focus:ring-[#0071BD]/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> Service Address
                  </span>
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat no., building, street, city..."
                  rows={2}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0071BD] focus:bg-white focus:ring-1 focus:ring-[#0071BD]/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="h-3 w-3" /> Describe Your Issue
                  </span>
                </label>
                <textarea
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="e.g. Water leaking from pipe under kitchen sink, AC not cooling, washing machine not spinning..."
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0071BD] focus:bg-white focus:ring-1 focus:ring-[#0071BD]/30"
                />
                <p className="mt-1 text-xs text-slate-400">Help the technician prepare the right tools and parts.</p>
              </div>
            </div>
          )}

          {/* Step 4 — Confirmation */}
          {step === 4 && (
            <div className="space-y-5">
              <div className="flex flex-col items-center gap-3 pt-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-9 w-9 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Booking Request Sent!</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Reference:{' '}
                    <span className="font-mono font-semibold text-[#005A99]">{bookingRef}</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Technician</span>
                  <span className="font-semibold text-slate-800">{technician.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Service</span>
                  <span className="font-semibold text-slate-800">{technician.service}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Date</span>
                  <span className="font-semibold text-slate-800">{selectedDateLabel?.label}, {selectedDateLabel?.sub}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Time</span>
                  <span className="font-semibold text-slate-800">{selectedTimeLabel?.label} · {selectedTimeLabel?.sub}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Amount</span>
                  <span className="font-extrabold text-[#005A99]">₹{technician.price}</span>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-400 mb-1">Issue reported</p>
                  <p className="text-sm text-slate-700">{issue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-[#E0F2FB] px-4 py-3 text-sm text-[#005A99]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Our team will call you at{' '}
                  <span className="font-semibold">{phone}</span> within{' '}
                  <span className="font-semibold">2 hours</span> to confirm your appointment.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
          {step === 4 ? (
            <div className="w-full">
              <button
                type="button"
                onClick={handleDone}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#005A99] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#005A99]/20 transition hover:bg-[#0071BD]"
              >
                Done
                <CheckCircle2 className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => (step === 1 ? handleClose() : setStep((s) => s - 1))}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {step > 1 && <ChevronLeft className="h-4 w-4" />}
                {step === 1 ? 'Cancel' : 'Back'}
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#005A99] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#005A99]/20 transition hover:bg-[#0071BD]"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!address.trim() || !name.trim() || !isValidPhone(phone) || !issue.trim() || submitting}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#005A99] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#005A99]/20 transition hover:bg-[#0071BD] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? 'Confirming...' : 'Confirm Booking'}
                  {!submitting && <CheckCircle2 className="h-4 w-4" />}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
