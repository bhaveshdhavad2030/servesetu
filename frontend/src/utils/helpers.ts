/**
 * Helper Functions
 * Utility functions used throughout the application
 */

import { HTTP_STATUS_CODES } from './constants';

/**
 * Safely parse JSON
 */
export const parseJSON = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
};

/**
 * Generate unique ID
 */
export const generateId = (prefix?: string): string => {
  const uniquePart = Math.random().toString(36).substring(2, 9);
  return prefix ? `${prefix}_${uniquePart}` : uniquePart;
};

/**
 * Deep clone object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if value is empty
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

/**
 * Format bytes to human readable
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Check if URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Truncate text
 */
export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Get error message from error object
 */
export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.response?.data?.message) return error.response.data.message;
  return 'An unknown error occurred';
};

/**
 * Check if object has property
 */
export const hasProperty = <T extends object>(
  obj: T,
  key: PropertyKey
): key is keyof T => {
  return key in obj;
};

/**
 * Group array by key
 */
export const groupBy = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): Record<string, T[]> => {
  return arr.reduce(
    (result, item) => {
      const groupKey = String(item[key]);
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    },
    {} as Record<string, T[]>
  );
};

/**
 * Sleep utility
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Retry function
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await sleep(delay);
    return retry(fn, retries - 1, delay * 2);
  }
};

/**
 * Capitalize string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Convert array to object
 */
export const arrayToObject = <T extends Record<string, any>>(
  arr: T[],
  keyField: keyof T
): Record<string, T> => {
  return arr.reduce(
    (obj, item) => {
      obj[String(item[keyField])] = item;
      return obj;
    },
    {} as Record<string, T>
  );
};

/**
 * Filter object by keys
 */
export const filterObject = <T extends Record<string, any>>(
  obj: T,
  keys: (keyof T)[]
): Partial<T> => {
  return keys.reduce(
    (result, key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
      return result;
    },
    {} as Partial<T>
  );
};

/**
 * Merge objects deeply
 */
export const mergeDeep = <T extends Record<string, any>>(
  ...objects: Partial<T>[]
): T => {
  return objects.reduce((result, obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        result[key] = mergeDeep(result[key] || {}, value);
      } else {
        result[key] = value;
      }
    });
    return result;
  }, {} as T);
};

/**
 * Get from object with default value
 */
export const getOrDefault = <T>(
  obj: Record<string, any>,
  path: string,
  defaultValue: T
): T => {
  const keys = path.split('.');
  let value: any = obj;

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return defaultValue;
  }

  return value as T;
};
