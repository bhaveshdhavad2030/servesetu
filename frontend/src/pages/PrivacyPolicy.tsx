import PublicSiteLayout from '../components/public/PublicSiteLayout'

export default function PrivacyPolicy() {
  return (
    <PublicSiteLayout>
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-12 shadow-xl">
            <div className="mb-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB]">Privacy Policy</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0B3D91] md:text-5xl">
                Your privacy matters to ServeSetu.
              </h1>
              <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
                We collect only the information needed to deliver great service and we never share your personal data without consent.
              </p>
            </div>

            <section className="space-y-10">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#0B3D91]">Information We Collect</h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  We may collect contact details, service preferences, technician feedback, and booking data to make your experience smooth and reliable.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-600">
                  <li>Contact information like name, phone, and email.</li>
                  <li>Booking details for service requests and technician matching.</li>
                  <li>Payment and transaction history where applicable.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#0B3D91]">How We Use Your Data</h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  We use your data to improve service accuracy, send booking notifications, and keep your account secure.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-600">
                  <li>To confirm service bookings and updates.</li>
                  <li>To personalize technician recommendations.</li>
                  <li>To protect your account and support requests.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#0B3D91]">Data Security</h2>
                <p className="leading-relaxed text-slate-600">
                  Your information is protected with secure systems and industry-standard safeguards. We limit access to only authorized team members.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#0B3D91]">Your Rights</h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  You can review, update, or delete your personal information by contacting our support team or using the app settings where available.
                </p>
                <p className="leading-relaxed text-slate-600">
                  If you have any questions about privacy, please email support@servesetu.com.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PublicSiteLayout>
  )
}
