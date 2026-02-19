/**
 * Currency Utilities
 * Functions for currency operations and conversions
 */

import { CURRENCY_SYMBOLS, DECIMAL_PLACES } from './constants';

/**
 * Convert currency
 */
export const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  exchangeRate: number
): number => {
  return (amount / exchangeRate) * (exchangeRate === 1 ? 1 : 1);
};

/**
 * Format currency for display
 */
export const formatCurrencyForDisplay = (
  amount: number,
  currency = 'INR'
): string => {
  const symbol = CURRENCY_SYMBOLS[currency as keyof typeof CURRENCY_SYMBOLS] || '₹';
  const formatted = amount.toFixed(DECIMAL_PLACES.CURRENCY);
  return `${symbol} ${formatted}`;
};

/**
 * Format currency for input
 */
export const formatCurrencyForInput = (amount: number): string => {
  return amount.toFixed(DECIMAL_PLACES.CURRENCY);
};

/**
 * Parse currency string to number
 */
export const parseCurrencyString = (currencyString: string): number => {
  const cleaned = currencyString.replace(/[^\d.-]/g, '');
  return parseFloat(cleaned) || 0;
};

/**
 * Calculate percentage
 */
export const calculatePercentage = (
  value: number,
  percentage: number
): number => {
  return (value * percentage) / 100;
};

/**
 * Calculate discount
 */
export const calculateDiscount = (
  originalPrice: number,
  discountPercentage: number
): number => {
  return originalPrice - calculatePercentage(originalPrice, discountPercentage);
};

/**
 * Calculate tax
 */
export const calculateTax = (amount: number, taxPercentage: number): number => {
  return calculatePercentage(amount, taxPercentage);
};

/**
 * Calculate total with tax
 */
export const calculateTotalWithTax = (
  amount: number,
  taxPercentage: number
): number => {
  return amount + calculateTax(amount, taxPercentage);
};

/**
 * Calculate commission
 */
export const calculateCommission = (
  amount: number,
  commissionPercentage: number
): number => {
  return calculatePercentage(amount, commissionPercentage);
};

/**
 * Calculate net amount after commission
 */
export const calculateNetAmount = (
  amount: number,
  commissionPercentage: number
): number => {
  return amount - calculateCommission(amount, commissionPercentage);
};

/**
 * Round to nearest currency unit
 */
export const roundToCurrency = (amount: number): number => {
  return Math.round(amount * 100) / 100;
};

/**
 * Check if amount is valid
 */
export const isValidAmount = (amount: number | string): boolean => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return !isNaN(num) && num > 0;
};

/**
 * Format currency for comparison
 */
export const normalizeCurrency = (amount: number): number => {
  return Math.round(amount * 100) / 100;
};

/**
 * Get currency symbol
 */
export const getCurrencySymbol = (currency: string): string => {
  return CURRENCY_SYMBOLS[currency as keyof typeof CURRENCY_SYMBOLS] || currency;
};

/**
 * Format as Indian rupees (₹)
 */
export const formatAsINR = (amount: number): string => {
  return `₹${amount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

/**
 * Parse Indian rupee string
 */
export const parseINR = (rupeesString: string): number => {
  return parseCurrencyString(rupeesString);
};
