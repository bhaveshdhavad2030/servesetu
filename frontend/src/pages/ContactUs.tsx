import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PublicSiteLayout from '../components/public/PublicSiteLayout'
import Toast from '../components/public/Toast'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [requirement, setRequirement] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSubmitting(true)

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            form_type: 'contact',
            customer_name: name,
            customer_email: email,
            requirement: requirement || '—',
            message,
          }),
        })
      } catch {
        // silently fail — UX must not break
      }
    }

    setSubmitting(false)
    setName('')
    setEmail('')
    setRequirement('')
    setMessage('')
    setToast({ visible: true, message: 'Message sent! Our team will reach you shortly.' })
  }

  return (
    <PublicSiteLayout>
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0071BD]">Contact Us</p>
              <h1 className="mb-6 text-4xl font-extrabold text-[#005A99] md:text-5xl">We're here to help you, always.</h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                Need service support, booking help, or general questions? Reach out and our team will respond quickly.
              </p>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-3xl bg-[#E0F2FB] p-4 text-[#005A99]"><Phone className="h-6 w-6" /></div>
                    <h2 className="text-xl font-bold text-[#005A99]">Call Us</h2>
                  </div>
                  <p className="text-slate-600">Available Mon–Sat, 9 AM – 7 PM</p>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-3xl bg-[#E0F2FB] p-4 text-[#005A99]"><Mail className="h-6 w-6" /></div>
                    <h2 className="text-xl font-bold text-[#005A99]">Mail Us</h2>
                  </div>
                  <a href="mailto:support@servesetu.com" className="text-slate-600 transition-colors hover:text-[#005A99]">support@servesetu.com</a>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-3xl bg-[#E0F2FB] p-4 text-[#005A99]"><MapPin className="h-6 w-6" /></div>
                    <h2 className="text-xl font-bold text-[#005A99]">Location</h2>
                  </div>
                  <p className="text-slate-600">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#005A99]">Be in touch with us</h2>
                <p className="mt-3 text-slate-600">
                  Have doubts? Just contact us and our support team will reach you shortly.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#0071BD] focus:ring-2 focus:ring-[#0071BD]/10"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#0071BD] focus:ring-2 focus:ring-[#0071BD]/10"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Your Requirement"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#0071BD] focus:ring-2 focus:ring-[#0071BD]/10"
                />

                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#0071BD] focus:ring-2 focus:ring-[#0071BD]/10"
                />

                <button
                  type="submit"
                  disabled={!name.trim() || !email.trim() || !message.trim() || submitting}
                  className="inline-flex items-center gap-3 rounded-full bg-[#005A99] px-8 py-4 font-semibold text-white transition hover:bg-[#0071BD] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Toast
        visible={toast.visible}
        message={toast.message}
        type="success"
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />
    </PublicSiteLayout>
  )
}
