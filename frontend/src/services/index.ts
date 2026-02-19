/**
 * Service Layer - Central Export Point
 * 
 * This file re-exports all service modules for easy importing throughout the application.
 * Each service handles API calls for a specific domain of the application.
 * 
 * Usage Example:
 * ```
 * import { authService, bookingService, customerService } from '@/services';
 * 
 * // Use services in components or Redux thunks
 * const user = await authService.login(credentials);
 * const bookings = await bookingService.getBookings(filters);
 * ```
 */

// Core API Service
export { default as api } from './api';

// Authentication & User Services
export { authService } from './auth.service';

// Domain Services
export { bookingService } from './booking.service';
export { paymentService } from './payment.service';
export { messageService } from './message.service';
export { reviewService } from './review.service';
export { disputeService } from './dispute.service';

// Role-Based Services
export { customerService } from './customer.service';
export { technicianService } from './technician.service';
export { adminService } from './admin.service';

// Support Services
export { supportService } from './support.service';
export { notificationService } from './notification.service';

/**
 * Service Architecture Overview:
 * 
 * API Service (api.ts)
 * - Axios instance with interceptors
 * - Automatic token management
 * - Request/response transformations
 * - Error handling
 * - Retry logic for failed requests
 * 
 * Auth Service (auth.service.ts)
 * - User registration and login
 * - OTP verification
 * - Social authentication
 * - Token refresh
 * - Password reset
 * 
 * Booking Service (booking.service.ts)
 * - Create bookings
 * - Manage booking lifecycle
 * - Accept/reject/complete bookings
 * - Cancel bookings
 * - Retrieve booking history
 * 
 * Payment Service (payment.service.ts)
 * - Create payment orders
 * - Verify payments
 * - Manage wallet operations
 * - Process refunds
 * - Handle payouts
 * 
 * Message Service (message.service.ts)
 * - Send and receive messages
 * - Manage chat sessions
 * - Handle typing indicators
 * - Manage online status
 * - Upload attachments
 * 
 * Review Service (review.service.ts)
 * - Submit reviews
 * - Retrieve ratings
 * - Manage review responses
 * - Handle review moderation
 * - Mark helpful/unhelpful
 * 
 * Dispute Service (dispute.service.ts)
 * - Create disputes
 * - Submit evidence
 * - Manage resolution process
 * - Handle mediation
 * - Escalate disputes
 * 
 * Customer Service (customer.service.ts)
 * - Manage customer profile
 * - Handle addresses
 * - View booking history
 * - Manage favorites
 * - Access wallet
 * 
 * Technician Service (technician.service.ts)
 * - Manage technician profile
 * - Handle onboarding
 * - Manage availability
 * - Process bookings
 * - Track earnings
 * 
 * Admin Service (admin.service.ts)
 * - Dashboard and analytics
 * - User management
 * - Content moderation
 * - System settings
 * - Reports and exports
 * 
 * Support Service (support.service.ts)
 * - Create support tickets
 * - Live chat support
 * - FAQ and help articles
 * - Feedback and surveys
 * 
 * Notification Service (notification.service.ts)
 * - Manage in-app notifications
 * - Email notification settings
 * - SMS notification settings
 * - Push notification registration
 * - Notification preferences
 */
