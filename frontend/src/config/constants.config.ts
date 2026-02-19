/**
 * Application Constants
 * Centralized constants used throughout the application
 */

// App information
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Servesetu';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';
export const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || 'development';

// Storage keys
export const STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  user: 'user',
  userType: 'userType',
  theme: 'theme',
  language: 'language',
  recentSearches: 'recentSearches',
  userPreferences: 'userPreferences',
} as const;

// User types
export const USER_TYPES = {
  CUSTOMER: 'customer',
  TECHNICIAN: 'technician',
  ADMIN: 'admin',
} as const;

// Booking status
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  DISPUTED: 'disputed',
} as const;

// Payment status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

// Technician verification status
export const TECHNICIAN_STATUS = {
  PENDING: 'pending',
  EMAIL_VERIFIED: 'email_verified',
  PHONE_VERIFIED: 'phone_verified',
  BACKGROUND_CHECK_PASSED: 'background_check_passed',
  SKILL_TEST_PASSED: 'skill_test_passed',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  REJECTED: 'rejected',
} as const;

// Dispute status
export const DISPUTE_STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in_progress',
  RESOLVED: 'resolved',
  ESCALATED: 'escalated',
  CLOSED: 'closed',
} as const;

// Service categories
export const SERVICE_CATEGORIES = [
  'Plumbing',
  'Electrical',
  'Appliance Repair',
  'HVAC Systems',
  'Carpentry',
  'Painting',
  'Cleaning',
  'Home Security',
  'Landscaping',
  'General Handyman',
] as const;

// Rating
export const RATING = {
  MIN: 1,
  MAX: 5,
  STAR_INCREMENT: 0.5,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

// Commission
export const COMMISSION = {
  PER_SERVICE: 50, // ₹50 per service
  MINIMUM_PAYOUT: 500, // ₹500 minimum payout
} as const;

// Time constants (in milliseconds)
export const TIME_CONSTANTS = {
  ONE_MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  TEN_MINUTES: 10 * 60 * 1000,
  FIFTEEN_MINUTES: 15 * 60 * 1000,
  THIRTY_MINUTES: 30 * 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
  ONE_DAY: 24 * 60 * 60 * 1000,
} as const;

// Location tracking
export const LOCATION_TRACKING = {
  UPDATE_INTERVAL: 30000, // 30 seconds
  ACCURACY_THRESHOLD: 50, // meters
} as const;

// Form validation
export const VALIDATION_RULES = {
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^(\+91)?[6-9]\d{9}$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  NAME_PATTERN: /^[a-zA-Z\s]{2,50}$/,
} as const;

// API response timeout
export const API_TIMEOUT = 30000; // 30 seconds

// Notification types
export const NOTIFICATION_TYPES = {
  BOOKING_CONFIRMED: 'booking_confirmed',
  TECHNICIAN_ACCEPTED: 'technician_accepted',
  TECHNICIAN_REJECTED: 'technician_rejected',
  SERVICE_COMPLETED: 'service_completed',
  PAYMENT_PROCESSED: 'payment_processed',
  REVIEW_REQUEST: 'review_request',
  DISPUTE_RAISED: 'dispute_raised',
  DISPUTE_RESOLVED: 'dispute_resolved',
} as const;

// Message delivery status
export const MESSAGE_STATUS = {
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read',
} as const;

// Feature flags
export const FEATURE_FLAGS = {
  ENABLE_CHAT: import.meta.env.VITE_ENABLE_CHAT === 'true',
  ENABLE_LOCATION_TRACKING: import.meta.env.VITE_ENABLE_LOCATION_TRACKING === 'true',
  ENABLE_REFERRAL_PROGRAM: import.meta.env.VITE_ENABLE_REFERRAL_PROGRAM === 'true',
} as const;

export default {
  APP_NAME,
  APP_VERSION,
  ENVIRONMENT,
  STORAGE_KEYS,
  USER_TYPES,
  BOOKING_STATUS,
  PAYMENT_STATUS,
  TECHNICIAN_STATUS,
  DISPUTE_STATUS,
  SERVICE_CATEGORIES,
  RATING,
  PAGINATION,
  COMMISSION,
  TIME_CONSTANTS,
  LOCATION_TRACKING,
  VALIDATION_RULES,
  API_TIMEOUT,
  NOTIFICATION_TYPES,
  MESSAGE_STATUS,
  FEATURE_FLAGS,
};
