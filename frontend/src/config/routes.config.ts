/**
 * Route Configuration for Servesetu Application
 * Centralized route definitions for all user types
 */

export const routes = {
  // Public routes
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  home: '/',
  services: '/services',
  about: '/about',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  
  // Customer routes
  customerHome: '/',
  marketplace: '/services',
  technicianDetail: '/technician/:id',
  booking: '/booking/:technicianId',
  bookingHistory: '/customer-dashboard',
  customerDashboard: '/customer-dashboard',
  customerProfile: '/customer-dashboard',
  chat: '/customer-dashboard',
  dispute: '/customer-dashboard',
  support: '/contact',
  
  // Technician routes
  technicianHome: '/',
  technicianOnboarding: '/technician-dashboard',
  technicianDashboard: '/technician-dashboard',
  bookingRequests: '/technician-dashboard',
  earnings: '/technician-dashboard',
  technicianProfile: '/technician/:id',
  availability: '/technician-dashboard',
  portfolio: '/technician-dashboard',
  
  // Admin routes
  adminDashboard: '/admin/dashboard',
  adminUsers: '/admin/users',
  adminTechnicians: '/admin/technicians',
  adminBookings: '/admin/bookings',
  adminDisputes: '/admin/disputes',
  adminAnalytics: '/admin/analytics',
  adminReports: '/admin/reports',
  adminSettings: '/admin/settings',
  adminSupport: '/admin/support',
  
  // Error routes
  notFound: '/404',
  unauthorized: '/401',
  serverError: '/500',
} as const;

// Route patterns for authentication
export const authRoutes = [routes.login, routes.register, routes.forgotPassword];

// Route patterns for customer
export const customerRoutes = [
  routes.customerHome,
  routes.marketplace,
  routes.technicianDetail,
  routes.booking,
  routes.bookingHistory,
  routes.customerDashboard,
  routes.customerProfile,
  routes.chat,
  routes.dispute,
  routes.support,
];

// Route patterns for technician
export const technicianRoutes = [
  routes.technicianHome,
  routes.technicianOnboarding,
  routes.technicianDashboard,
  routes.bookingRequests,
  routes.earnings,
  routes.technicianProfile,
  routes.availability,
  routes.portfolio,
];

// Route patterns for admin
export const adminRoutes = [
  routes.adminDashboard,
  routes.adminUsers,
  routes.adminTechnicians,
  routes.adminBookings,
  routes.adminDisputes,
  routes.adminAnalytics,
  routes.adminReports,
  routes.adminSettings,
  routes.adminSupport,
];
