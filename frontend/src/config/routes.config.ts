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
  
  // Customer routes
  customerHome: '/servesetu',
  marketplace: '/servesetu/marketplace',
  technicianDetail: '/servesetu/technician/:id',
  booking: '/servesetu/booking/:technicianId',
  bookingHistory: '/servesetu/bookings',
  customerDashboard: '/servesetu/customer-dashboard',
  customerProfile: '/servesetu/customer/profile',
  chat: '/servesetu/chat/:bookingId',
  dispute: '/servesetu/dispute/:bookingId',
  support: '/servesetu/support',
  
  // Technician routes
  technicianHome: '/servesetu',
  technicianOnboarding: '/servesetu/technician/onboarding',
  technicianDashboard: '/servesetu/technician-dashboard',
  bookingRequests: '/servesetu/technician/requests',
  earnings: '/servesetu/technician/earnings',
  technicianProfile: '/servesetu/technician/profile',
  availability: '/servesetu/technician/availability',
  portfolio: '/servesetu/technician/portfolio',
  
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
