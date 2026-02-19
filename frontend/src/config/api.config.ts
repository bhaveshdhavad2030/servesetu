/**
 * API Configuration for Servesetu Application
 * Centralized API endpoints and configuration
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '30000');
const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:8000/ws';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const wsConfig = {
  url: WEBSOCKET_URL,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
};

export const apiEndpoints = {
  // Authentication
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    verifyOtp: '/auth/verify-otp',
    socialLogin: '/auth/social-login',
    refreshToken: '/auth/refresh-token',
    logout: '/auth/logout',
    resetPassword: '/auth/reset-password',
  },

  // Customer endpoints
  customer: {
    profile: '/customers/:customerId',
    updateProfile: '/customers/:customerId',
    addresses: '/customers/:customerId/addresses',
    bookings: '/customers/:customerId/bookings',
    bookingDetail: '/customers/:customerId/bookings/:bookingId',
    reviews: '/customers/:customerId/reviews',
    wallet: '/customers/:customerId/wallet',
    disputes: '/customers/:customerId/disputes',
  },

  // Technician endpoints
  technician: {
    profile: '/technicians/:technicianId',
    updateProfile: '/technicians/:technicianId',
    onboarding: '/technicians/onboarding',
    documents: '/technicians/:technicianId/documents',
    availability: '/technicians/:technicianId/availability',
    bookings: '/technicians/:technicianId/bookings',
    earnings: '/technicians/:technicianId/earnings',
    payouts: '/technicians/:technicianId/payouts',
    performance: '/technicians/:technicianId/performance',
    portfolio: '/technicians/:technicianId/portfolio',
  },

  // Services
  services: {
    list: '/services',
    categories: '/services/categories',
    detail: '/services/:serviceId',
  },

  // Bookings
  booking: {
    create: '/bookings',
    list: '/bookings',
    detail: '/bookings/:bookingId',
    update: '/bookings/:bookingId',
    cancel: '/bookings/:bookingId/cancel',
    accept: '/bookings/:bookingId/accept',
    reject: '/bookings/:bookingId/reject',
    complete: '/bookings/:bookingId/complete',
  },

  // Payments
  payment: {
    createOrder: '/payments/order',
    verifyPayment: '/payments/verify',
    refund: '/payments/:paymentId/refund',
    history: '/payments/history',
  },

  // Messages/Chat
  message: {
    list: '/messages/:bookingId',
    send: '/messages',
    markAsRead: '/messages/:messageId/read',
  },

  // Reviews & Ratings
  review: {
    create: '/reviews',
    list: '/reviews/:technicianId',
    update: '/reviews/:reviewId',
    delete: '/reviews/:reviewId',
  },

  // Disputes
  dispute: {
    create: '/disputes',
    list: '/disputes',
    detail: '/disputes/:disputeId',
    update: '/disputes/:disputeId',
    resolve: '/disputes/:disputeId/resolve',
  },

  // Admin endpoints
  admin: {
    dashboard: '/admin/dashboard',
    users: '/admin/users',
    technicians: '/admin/technicians',
    approveTechnician: '/admin/technicians/:technicianId/approve',
    rejectTechnician: '/admin/technicians/:technicianId/reject',
    bookings: '/admin/bookings',
    disputes: '/admin/disputes',
    analytics: '/admin/analytics',
    reports: '/admin/reports',
    settings: '/admin/settings',
  },

  // Support
  support: {
    tickets: '/support/tickets',
    createTicket: '/support/tickets',
    ticketDetail: '/support/tickets/:ticketId',
    replyTicket: '/support/tickets/:ticketId/reply',
  },

  // Notifications
  notification: {
    list: '/notifications',
    markAsRead: '/notifications/:notificationId/read',
    markAllAsRead: '/notifications/read-all',
  },
};

export default {
  apiConfig,
  wsConfig,
  apiEndpoints,
};
