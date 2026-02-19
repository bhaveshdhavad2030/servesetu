/**
 * Data Formatters
 * Functions to format data for display
 */

import { DECIMAL_PLACES, CURRENCY_SYMBOLS, DATE_FORMATS } from './constants';

/**
 * Format currency
 */
export const formatCurrency = (amount: number, currency = 'INR'): string => {
  const symbol = CURRENCY_SYMBOLS[currency as keyof typeof CURRENCY_SYMBOLS] || '₹';
  return `${symbol}${amount.toFixed(DECIMAL_PLACES.CURRENCY)}`;
};

/**
 * Format percentage
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(DECIMAL_PLACES.PERCENTAGE)}%`;
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$|^(\d{10})$/);
  if (match) {
    return match[1]
      ? `+${match[1]} ${match[2]} ${match[3]}`
      : `+91 ${match[4]?.slice(0, 5)} ${match[4]?.slice(5)}`;
  }
  return phone;
};

/**
 * Format address
 */
export const formatAddress = (address: {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}): string => {
  const parts = [address.street, address.city, address.state, address.zipCode].filter(
    Boolean
  );
  return parts.join(', ');
};

/**
 * Format date
 */
export const formatDate = (date: Date | string, format = 'DISPLAY_DATE'): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    if (format.includes('TIME')) {
      options.hour = '2-digit';
      options.minute = '2-digit';
    }

    return new Intl.DateTimeFormat('en-IN', options).format(dateObj);
  } catch {
    return 'Invalid date';
  }
};

/**
 * Format time
 */
export const formatTime = (date: Date | string): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(dateObj);
  } catch {
    return 'Invalid time';
  }
};

/**
 * Format relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;

  return formatDate(dateObj);
};

/**
 * Format duration
 */
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
};

/**
 * Format rating
 */
export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

/**
 * Format status
 */
export const formatStatus = (status: string): string => {
  return status
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Format booking status color
 */
export const getBookingStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    in_progress: 'bg-cyan-100 text-cyan-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    disputed: 'bg-orange-100 text-orange-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

/**
 * Format payment status icon
 */
export const getPaymentStatusIcon = (status: string): string => {
  const icons: Record<string, string> = {
    pending: '⏳',
    processing: '⌛',
    completed: '✓',
    failed: '✗',
    refunded: '↩️',
  };
  return icons[status] || '•';
};

/**
 * Format number with commas
 */
export const formatNumberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format initials from name
 */
export const formatInitials = (firstName: string, lastName?: string): string => {
  const first = firstName.charAt(0).toUpperCase();
  const last = lastName?.charAt(0).toUpperCase() || '';
  return first + last;
};

/**
 * Format name from parts
 */
export const formatName = (firstName: string, lastName?: string): string => {
  return [firstName, lastName].filter(Boolean).join(' ').trim();
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength = 50): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Format bytes to readable format
 */
export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};
