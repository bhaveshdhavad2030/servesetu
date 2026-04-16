import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Landing from './pages/Landing'
import Marketplace from './pages/Marketplace'
import BookingFlow from './pages/BookingFlow'
import CustomerDashboard from './pages/CustomerDashboard'
import TechnicianDashboard from './pages/TechnicianDashboard'
import TechnicianProfile from './pages/TechnicianProfile'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/technician/:id" element={<TechnicianProfile />} />
        <Route path="/booking/:technicianId" element={<BookingFlow />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
