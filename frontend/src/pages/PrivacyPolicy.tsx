export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 selection:bg-[#cfe8ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[2rem] bg-white border border-slate-200 p-12 shadow-xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB] mb-4">Privacy Policy</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3D91] tracking-tight">Your privacy matters to ServiceWale.</h1>
            <p className="text-slate-600 mt-5 max-w-3xl leading-relaxed">
              We collect only the information needed to deliver great service and we never share your personal data without consent.
            </p>
          </div>

          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-4">Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect contact details, service preferences, technician feedback, and booking data to make your experience smooth and reliable.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Contact information like name, phone, and email.</li>
                <li>Booking details for service requests and technician matching.</li>
                <li>Payment and transaction history where applicable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-4">How We Use Your Data</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use your data to improve service accuracy, send booking notifications, and keep your account secure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>To confirm service bookings and updates.</li>
                <li>To personalize technician recommendations.</li>
                <li>To protect your account and support requests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-4">Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                Your information is protected with secure systems and industry-standard safeguards. We limit access to only authorized team members.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-4">Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can review, update, or delete your personal information by contacting our support team or using the app settings where available.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about privacy, please email support@servicewale.com.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
