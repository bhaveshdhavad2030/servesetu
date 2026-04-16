import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 selection:bg-[#cfe8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB] mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3D91] mb-6">We’re here to help you, always.</h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Need service support, booking help, or general questions? Reach out and our team will respond quickly.
            </p>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-3xl bg-[#EAF2FF] p-4 text-[#0B3D91]"><Phone className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-[#0B3D91]">Call Us</h2>
                </div>
                <p className="text-slate-600">+91 XXXXXXXXXX</p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-3xl bg-[#EAF2FF] p-4 text-[#0B3D91]"><Mail className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-[#0B3D91]">Mail Us</h2>
                </div>
                <p className="text-slate-600">support@servicewale.com</p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-3xl bg-[#EAF2FF] p-4 text-[#0B3D91]"><MapPin className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-[#0B3D91]">Location</h2>
                </div>
                <p className="text-slate-600">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0B3D91]">Be in touch with us</h2>
              <p className="text-slate-600 mt-3">Have doubts? Just contact us and our support team will reach you shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                />
              </div>

              <input
                type="text"
                placeholder="Your Requirement"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[#0B3D91] px-8 py-4 text-white font-semibold transition hover:bg-[#2563EB]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
