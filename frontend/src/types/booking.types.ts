/**
 * Booking Type Definitions
 * Defines all booking-related types for TypeScript
 */

export interface Booking {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  serviceName: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'disputed';
  scheduledDate: string;
  scheduledTime: string;
  completedAt?: string;
  cancelledAt?: string;
  address: string;
  description: string;
  estimatedDuration: number; // in minutes
  actualDuration?: number;
  price: number;
  discount?: number;
  tax?: number;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  transactionId?: string;
  rating?: number;
  review?: string;
  photos?: string[];
  techniciNotes?: string;
  customerNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookingRequest {
  customerId: string;
  technicianId: string;
  serviceType: string;
  date: string;
  time: string;
  address: string;
  description: string;
  estimatedDuration?: number;
  priceQuote?: number;
}

export interface BookingFilters {
  status?: string;
  startDate?: string;
  endDate?: string;
  minPrice?: number;
  maxPrice?: number;
  serviceType?: string;
  sortBy?: 'date' | 'price' | 'rating';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data: Booking;
}

export interface BookingListResponse {
  success: boolean;
  data: {
    bookings: Booking[];
    total: number;
    page: number;
    pageSize: number;
  };
}

export interface BookingStats {
  total: number;
  completed: number;
  cancelled: number;
  disputed: number;
  averageRating: number;
  totalSpent: number;
}

export interface BookingAction {
  bookingId: string;
  action: 'accept' | 'reject' | 'complete' | 'cancel';
  notes?: string;
  reason?: string;
}
