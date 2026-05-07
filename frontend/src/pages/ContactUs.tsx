import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PublicSiteLayout from '../components/public/PublicSiteLayout'

export default function ContactUs() {
  return (
    <PublicSiteLayout>
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB]">Contact Us</p>
              <h1 className="mb-6 text-4xl font-extrabold text-[#0B3D91] md:text-5xl">We’re here to help you, always.</h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                Need service support, booking help, or general questions? Reach out and our team will respond quickly.
              </p>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-3xl bg-[#EAF2FF] p-4 text-[#0B3D91]"><Phone className="h-6 w-6" /></div>
                    <h2 className="text-xl font-bold text-[#0B3D91]">Call Us</h2>
                  </div>
                  <a href="tel:+919999999999" className="text-slate-600 transition-colors hover:text-[#0B3D91]">+91 99999 99999</a>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-3xl bg-[#EAF2FF] p-4 text-[#0B3D91]"><Mail className="h-6 w-6" /></div>
                    <h2 className="text-xl font-bold text-[#0B3D91]">Mail Us</h2>
                  </div>
                  <a href="mailto:support@servesetu.com" className="text-slate-600 transition-colors hover:text-[#0B3D91]">support@servesetu.com</a>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-3xl bg-[#EAF2FF] p-4 text-[#0B3D91]"><MapPin className="h-6 w-6" /></div>
                    <h2 className="text-xl font-bold text-[#0B3D91]">Location</h2>
                  </div>
                  <p className="text-slate-600">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#0B3D91]">Be in touch with us</h2>
                <p className="mt-3 text-slate-600">
                  Have doubts? Just contact us and our support team will reach you shortly.
                </p>
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
                  className="w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0B3D91] px-8 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicSiteLayout>
  )
}
