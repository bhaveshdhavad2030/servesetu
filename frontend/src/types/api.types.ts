/**
 * API Response Type Definitions
 * Defines standard API response formats for TypeScript
 */

export interface ApiSuccessResponse<T = any> {
  success: true;
  message?: string;
  data: T;
  meta?: ResponseMetadata;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error?: string;
  statusCode: number;
  errors?: FieldError[];
  timestamp: string;
}

export type ApiResponse<T = any> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface ResponseMetadata {
  page?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
  hasMore?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  success: true;
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export interface FieldError {
  field: string;
  message: string;
  code?: string;
}

export interface ApiError extends Error {
  statusCode?: number;
  response?: ApiErrorResponse;
  isNetworkError?: boolean;
  isTimeoutError?: boolean;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  timeout?: number;
  retries?: number;
  skipErrorHandling?: boolean;
}

export interface AsyncThunkPayload<T> {
  data: T;
  config?: RequestOptions;
}

export interface AsyncThunkError {
  message: string;
  statusCode?: number;
  code?: string;
}

export interface FileUploadResponse {
  success: true;
  message: string;
  data: {
    fileId: string;
    filename: string;
    url: string;
    size: number;
    type: string;
    uploadedAt: string;
  };
}

export interface BulkActionResponse {
  success: boolean;
  processed: number;
  failed: number;
  errors?: FieldError[];
}

export interface SearchResponse<T> {
  success: true;
  data: T[];
  total: number;
  searchQuery: string;
  executionTime: number; // in milliseconds
}
