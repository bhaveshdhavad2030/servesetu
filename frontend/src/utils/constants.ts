/**
 * Constants Utilities
 * Application-wide constants
 */

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  RATE_LIMITED: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  TIMEOUT_ERROR: 'Request timeout. Please try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access forbidden.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An error occurred. Please try again later.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
} as const;

export const SUCCESS_MESSAGES = {
  SAVED_SUCCESSFULLY: 'Saved successfully!',
  DELETED_SUCCESSFULLY: 'Deleted successfully!',
  UPDATED_SUCCESSFULLY: 'Updated successfully!',
  OPERATION_SUCCESSFUL: 'Operation successful!',
} as const;

export const DATE_FORMATS = {
  DATE_ONLY: 'dd/MM/yyyy',
  TIME_ONLY: 'HH:mm',
  DATE_TIME: 'dd/MM/yyyy HH:mm',
  ISO_DATE: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  DISPLAY_DATE: 'MMM dd, yyyy',
  DISPLAY_DATE_TIME: 'MMM dd, yyyy HH:mm',
} as const;

export const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
} as const;

export const DECIMAL_PLACES = {
  CURRENCY: 2,
  PERCENTAGE: 2,
  COORDINATES: 6,
} as const;
