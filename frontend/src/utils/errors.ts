/**
 * Error Handling Utilities
 * Centralized error handling and logging
 */

import { HTTP_STATUS_CODES, ERROR_MESSAGES } from './constants';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(
    public message: string,
    public errors?: Record<string, string>
  ) {
    super(message, HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends AppError {
  constructor(message = ERROR_MESSAGES.UNAUTHORIZED) {
    super(message, HTTP_STATUS_CODES.UNAUTHORIZED, 'AUTHENTICATION_ERROR');
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends AppError {
  constructor(message = ERROR_MESSAGES.FORBIDDEN) {
    super(message, HTTP_STATUS_CODES.FORBIDDEN, 'AUTHORIZATION_ERROR');
    this.name = 'AuthorizationError';
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, HTTP_STATUS_CODES.NOT_FOUND, 'NOT_FOUND_ERROR');
    this.name = 'NotFoundError';
  }
}

export class NetworkError extends AppError {
  constructor(message = ERROR_MESSAGES.NETWORK_ERROR) {
    super(message, undefined, 'NETWORK_ERROR');
    this.name = 'NetworkError';
  }
}

export class TimeoutError extends AppError {
  constructor(message = ERROR_MESSAGES.TIMEOUT_ERROR) {
    super(message, undefined, 'TIMEOUT_ERROR');
    this.name = 'TimeoutError';
  }
}

/**
 * Handle API error
 */
export const handleApiError = (error: any): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error?.response) {
    const { status, data } = error.response;
    const message = data?.message || ERROR_MESSAGES.SERVER_ERROR;

    switch (status) {
      case HTTP_STATUS_CODES.UNAUTHORIZED:
        return new AuthenticationError(message);
      case HTTP_STATUS_CODES.FORBIDDEN:
        return new AuthorizationError(message);
      case HTTP_STATUS_CODES.NOT_FOUND:
        return new NotFoundError(message);
      case HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY:
        return new ValidationError(message, data?.errors);
      case HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR:
      case HTTP_STATUS_CODES.SERVICE_UNAVAILABLE:
        return new AppError(message, status, 'SERVER_ERROR');
      default:
        return new AppError(message, status);
    }
  }

  if (error?.message === 'Network Error') {
    return new NetworkError();
  }

  if (error?.code === 'ECONNABORTED') {
    return new TimeoutError();
  }

  return new AppError(
    error?.message || ERROR_MESSAGES.UNKNOWN_ERROR,
    undefined,
    error?.code
  );
};

/**
 * Log error
 */
export const logError = (error: AppError | Error, context?: string): void => {
  const timestamp = new Date().toISOString();
  const message = error instanceof AppError 
    ? `[${error.name}] ${error.message}`
    : error.message;

  if (import.meta.env.DEV) {
    console.error(`[${timestamp}] ${context || 'Error'}:`, message, error);
  } else {
    // In production, send to error tracking service
    // e.g., Sentry, LogRocket, etc.
    console.error(`[${timestamp}] ${context || 'Error'}:`, message);
  }
};

/**
 * Get user-friendly error message
 */
export const getUserFriendlyErrorMessage = (error: AppError | Error): string => {
  if (error instanceof ValidationError) {
    return error.message;
  }

  if (error instanceof AuthenticationError) {
    return 'Your session has expired. Please log in again.';
  }

  if (error instanceof AuthorizationError) {
    return 'You do not have permission to perform this action.';
  }

  if (error instanceof NotFoundError) {
    return error.message;
  }

  if (error instanceof NetworkError) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }

  if (error instanceof TimeoutError) {
    return ERROR_MESSAGES.TIMEOUT_ERROR;
  }

  if (error instanceof AppError) {
    if (error.statusCode === HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR ||
        error.statusCode === HTTP_STATUS_CODES.SERVICE_UNAVAILABLE) {
      return ERROR_MESSAGES.SERVER_ERROR;
    }
    return error.message;
  }

  return ERROR_MESSAGES.UNKNOWN_ERROR;
};

/**
 * Create error object for response
 */
export const createErrorObject = (error: AppError | Error, timestamp = new Date()) => {
  if (error instanceof AppError) {
    return {
      success: false,
      message: error.message,
      statusCode: error.statusCode || 500,
      code: error.code,
      errors: error instanceof ValidationError ? error.errors : undefined,
      timestamp: timestamp.toISOString(),
    };
  }

  return {
    success: false,
    message: error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
    statusCode: 500,
    timestamp: timestamp.toISOString(),
  };
};

/**
 * Check if error is retryable
 */
export const isRetryableError = (error: AppError): boolean => {
  if (error instanceof ValidationError || error instanceof AuthenticationError) {
    return false;
  }

  if (error.statusCode === HTTP_STATUS_CODES.NOT_FOUND) {
    return false;
  }

  if (error.statusCode === HTTP_STATUS_CODES.FORBIDDEN) {
    return false;
  }

  return true;
};
