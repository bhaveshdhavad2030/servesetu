/**
 * Booking Service
 * Handles all booking-related API calls
 */

import api from './api';
import { apiEndpoints } from '../config/api.config';
import { Booking, BookingRequest, BookingFilters, BookingAction } from '../types';

export const bookingService = {
  /**
   * Create booking
   */
  createBooking: async (data: BookingRequest) => {
    return api.post(apiEndpoints.booking.create, data);
  },

  /**
   * Get all bookings
   */
  getBookings: async (filters?: BookingFilters) => {
    return api.get(apiEndpoints.booking.list, { params: filters });
  },

  /**
   * Get booking details
   */
  getBookingDetail: async (bookingId: string) => {
    return api.get(apiEndpoints.booking.detail.replace(':bookingId', bookingId));
  },

  /**
   * Update booking
   */
  updateBooking: async (bookingId: string, data: Partial<Booking>) => {
    return api.put(apiEndpoints.booking.update.replace(':bookingId', bookingId), data);
  },

  /**
   * Accept booking (technician only)
   */
  acceptBooking: async (bookingId: string) => {
    return api.post(apiEndpoints.booking.accept.replace(':bookingId', bookingId));
  },

  /**
   * Reject booking (technician only)
   */
  rejectBooking: async (bookingId: string, reason?: string) => {
    return api.post(apiEndpoints.booking.reject.replace(':bookingId', bookingId), { reason });
  },

  /**
   * Complete booking
   */
  completeBooking: async (bookingId: string, data?: { notes?: string; photos?: string[] }) => {
    return api.post(apiEndpoints.booking.complete.replace(':bookingId', bookingId), data);
  },

  /**
   * Cancel booking
   */
  cancelBooking: async (bookingId: string, reason?: string) => {
    return api.post(apiEndpoints.booking.cancel.replace(':bookingId', bookingId), { reason });
  },
};

export default bookingService;
