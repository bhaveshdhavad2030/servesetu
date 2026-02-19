/**
 * Form Validators
 * Validation functions for forms and input
 */

import { VALIDATION_RULES } from '../config/constants.config';

/**
 * Validate email
 */
export const validateEmail = (email: string): boolean => {
  return VALIDATION_RULES.EMAIL_PATTERN.test(email);
};

/**
 * Validate phone number
 */
export const validatePhoneNumber = (phone: string): boolean => {
  return VALIDATION_RULES.PHONE_PATTERN.test(phone);
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters`);
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain lowercase letters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain uppercase letters');
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain numbers');
  }
  if (!/[@$!%*?&]/.test(password)) {
    errors.push('Password must contain special characters (@$!%*?&)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate name
 */
export const validateName = (name: string): boolean => {
  return VALIDATION_RULES.NAME_PATTERN.test(name) && name.trim().length > 0;
};

/**
 * Validate URL
 */
export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate required field
 */
export const validateRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined && value !== '';
};

/**
 * Validate min length
 */
export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Validate max length
 */
export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Validate numeric
 */
export const validateNumeric = (value: string): boolean => {
  return /^\d+$/.test(value);
};

/**
 * Validate range
 */
export const validateRange = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

/**
 * Validate match
 */
export const validateMatch = (value1: string, value2: string): boolean => {
  return value1 === value2;
};

/**
 * Validate file size
 */
export const validateFileSize = (file: File, maxSizeInMB: number): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

/**
 * Validate file type
 */
export const validateFileType = (
  file: File,
  allowedTypes: string[]
): boolean => {
  return allowedTypes.includes(file.type);
};

/**
 * Validate date
 */
export const validateDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * Validate date in future
 */
export const validateFutureDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return validateDate(dateString) && date > new Date();
};

/**
 * Validate age
 */
export const validateAge = (birthDate: Date, minAge: number): boolean => {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= minAge;
  }

  return age >= minAge;
};

/**
 * Get validation error message
 */
export const getValidationErrorMessage = (
  field: string,
  rule: string,
  params?: Record<string, any>
): string => {
  const messages: Record<string, Record<string, string>> = {
    email: {
      invalid: 'Please enter a valid email address',
    },
    phone: {
      invalid: 'Please enter a valid phone number',
    },
    password: {
      weak: 'Password is not strong enough',
      mismatch: 'Passwords do not match',
    },
    name: {
      invalid: 'Please enter a valid name',
    },
    required: {
      empty: `${field} is required`,
    },
    minLength: {
      short: `${field} must be at least ${params?.minLength} characters`,
    },
    maxLength: {
      long: `${field} must not exceed ${params?.maxLength} characters`,
    },
    range: {
      outOfRange: `${field} must be between ${params?.min} and ${params?.max}`,
    },
    file: {
      tooLarge: `File size must not exceed ${params?.maxSize}MB`,
      invalidType: `Invalid file type. Allowed types: ${params?.allowedTypes?.join(', ')}`,
    },
  };

  return messages[field]?.[rule] || 'Validation failed';
};
