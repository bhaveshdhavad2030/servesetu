import api from './api';
import { apiEndpoints } from '../config/api.config';
import type {
  TechnicianProfile,
  AvailabilitySlot,
  Booking,
  ApiSuccessResponse,
  PaginatedResponse,
} from '../types';

/**
 * Technician Service
 * Handles all technician-related API calls including:
 * - Profile and onboarding
 * - Availability management
 * - Booking management
 * - Earnings and statistics
 * - Document management
 */

export const technicianService = {
  // =====================
  // Profile Management
  // =====================

  /**
   * Get technician profile
   */
  getProfile: async (): Promise<TechnicianProfile> => {
    const response = await api.get<ApiSuccessResponse<TechnicianProfile>>(
      apiEndpoints.technician.getProfile
    );
    return response.data;
  },

  /**
   * Update technician profile
   */
  updateProfile: async (data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    profileImage?: string;
    bio?: string;
    specialties?: string[];
    experience?: number;
    serviceRadius?: number;
  }): Promise<TechnicianProfile> => {
    const response = await api.put<ApiSuccessResponse<TechnicianProfile>>(
      apiEndpoints.technician.updateProfile,
      data
    );
    return response.data;
  },

  /**
   * Upload profile picture
   */
  uploadProfilePicture: async (file: File): Promise<{ imageUrl: string }> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post<ApiSuccessResponse<{ imageUrl: string }>>(
      apiEndpoints.technician.uploadProfilePicture,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },

  // =====================
  // Onboarding & Verification
  // =====================

  /**
   * Get onboarding status
   */
  getOnboardingStatus: async (): Promise<{
    status: 'pending' | 'in_progress' | 'completed' | 'rejected';
    steps: Array<{
      name: string;
      status: 'pending' | 'completed' | 'rejected';
      message?: string;
    }>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        status: 'pending' | 'in_progress' | 'completed' | 'rejected';
        steps: Array<{
          name: string;
          status: 'pending' | 'completed' | 'rejected';
          message?: string;
        }>;
      }>
    >(apiEndpoints.technician.getOnboardingStatus);
    return response.data;
  },

  /**
   * Submit identification document
   */
  submitIdentificationDocument: async (data: {
    type: 'aadhar' | 'pan' | 'driving_license' | 'passport';
    number: string;
    file: File;
  }): Promise<{ documentId: string; status: string }> => {
    const formData = new FormData();
    formData.append('type', data.type);
    formData.append('number', data.number);
    formData.append('file', data.file);

    const response = await api.post<
      ApiSuccessResponse<{ documentId: string; status: string }>
    >(apiEndpoints.technician.submitIdentificationDocument, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  /**
   * Submit bank account details
   */
  submitBankDetails: async (data: {
    bankName: string;
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
  }): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.technician.submitBankDetails,
      data
    );
    return response.data;
  },

  /**
   * Submit service proof (certificates, etc.)
   */
  submitServiceProof: async (data: {
    type: string;
    file: File;
    description?: string;
  }): Promise<{ proofId: string; status: string }> => {
    const formData = new FormData();
    formData.append('type', data.type);
    formData.append('file', data.file);
    if (data.description) formData.append('description', data.description);

    const response = await api.post<
      ApiSuccessResponse<{ proofId: string; status: string }>
    >(apiEndpoints.technician.submitServiceProof, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  // =====================
  // Availability Management
  // =====================

  /**
   * Get availability slots
   */
  getAvailability: async (filters?: {
    startDate?: string;
    endDate?: string;
  }): Promise<AvailabilitySlot[]> => {
    const response = await api.get<ApiSuccessResponse<AvailabilitySlot[]>>(
      apiEndpoints.technician.getAvailability,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Add availability slot
   */
  addAvailabilitySlot: async (data: {
    date: string;
    startTime: string;
    endTime: string;
    maxBookings?: number;
  }): Promise<AvailabilitySlot> => {
    const response = await api.post<ApiSuccessResponse<AvailabilitySlot>>(
      apiEndpoints.technician.addAvailabilitySlot,
      data
    );
    return response.data;
  },

  /**
   * Update availability slot
   */
  updateAvailabilitySlot: async (
    slotId: string,
    data: {
      startTime?: string;
      endTime?: string;
      maxBookings?: number;
      isAvailable?: boolean;
    }
  ): Promise<AvailabilitySlot> => {
    const response = await api.put<ApiSuccessResponse<AvailabilitySlot>>(
      apiEndpoints.technician.updateAvailabilitySlot.replace(':id', slotId),
      data
    );
    return response.data;
  },

  /**
   * Delete availability slot
   */
  deleteAvailabilitySlot: async (slotId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.technician.deleteAvailabilitySlot.replace(':id', slotId)
    );
    return response.data;
  },

  /**
   * Set bulk availability
   */
  setBulkAvailability: async (data: {
    startDate: string;
    endDate: string;
    days: number[];
    startTime: string;
    endTime: string;
    maxBookingsPerDay?: number;
  }): Promise<{ slotsCreated: number }> => {
    const response = await api.post<ApiSuccessResponse<{ slotsCreated: number }>>(
      apiEndpoints.technician.setBulkAvailability,
      data
    );
    return response.data;
  },

  /**
   * Get busy slots
   */
  getBusySlots: async (filters?: {
    startDate?: string;
    endDate?: string;
  }): Promise<AvailabilitySlot[]> => {
    const response = await api.get<ApiSuccessResponse<AvailabilitySlot[]>>(
      apiEndpoints.technician.getBusySlots,
      { params: filters }
    );
    return response.data;
  },

  // =====================
  // Booking Management
  // =====================

  /**
   * Get booking requests
   */
  getBookingRequests: async (filters?: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Booking>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Booking>>>(
      apiEndpoints.technician.getBookingRequests,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Accept booking
   */
  acceptBooking: async (bookingId: string): Promise<Booking> => {
    const response = await api.post<ApiSuccessResponse<Booking>>(
      apiEndpoints.technician.acceptBooking.replace(':id', bookingId),
      {}
    );
    return response.data;
  },

  /**
   * Reject booking
   */
  rejectBooking: async (bookingId: string, data: { reason: string }): Promise<Booking> => {
    const response = await api.post<ApiSuccessResponse<Booking>>(
      apiEndpoints.technician.rejectBooking.replace(':id', bookingId),
      data
    );
    return response.data;
  },

  /**
   * Complete booking
   */
  completeBooking: async (
    bookingId: string,
    data: {
      description?: string;
      images?: string[];
      amount?: number;
    }
  ): Promise<Booking> => {
    const response = await api.post<ApiSuccessResponse<Booking>>(
      apiEndpoints.technician.completeBooking.replace(':id', bookingId),
      data
    );
    return response.data;
  },

  /**
   * Get completed bookings
   */
  getCompletedBookings: async (filters?: {
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Booking>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Booking>>>(
      apiEndpoints.technician.getCompletedBookings,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Get upcoming bookings
   */
  getUpcomingBookings: async (): Promise<Booking[]> => {
    const response = await api.get<ApiSuccessResponse<Booking[]>>(
      apiEndpoints.technician.getUpcomingBookings
    );
    return response.data;
  },

  // =====================
  // Earnings & Payouts
  // =====================

  /**
   * Get earnings summary
   */
  getEarnings: async (filters?: {
    startDate?: string;
    endDate?: string;
    bookingId?: string;
  }): Promise<{
    totalEarnings: number;
    pendingEarnings: number;
    withdrawnEarnings: number;
    availableBalance: number;
    earnings: Array<{
      bookingId: string;
      amount: number;
      commission: number;
      netEarnings: number;
      date: string;
    }>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        totalEarnings: number;
        pendingEarnings: number;
        withdrawnEarnings: number;
        availableBalance: number;
        earnings: Array<{
          bookingId: string;
          amount: number;
          commission: number;
          netEarnings: number;
          date: string;
        }>;
      }>
    >(apiEndpoints.technician.getEarnings, { params: filters });
    return response.data;
  },

  /**
   * Get payout history
   */
  getPayoutHistory: async (filters?: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.technician.getPayoutHistory,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Request payout
   */
  requestPayout: async (data: { amount: number }): Promise<{ payoutId: string }> => {
    const response = await api.post<ApiSuccessResponse<{ payoutId: string }>>(
      apiEndpoints.technician.requestPayout,
      data
    );
    return response.data;
  },

  // =====================
  // Statistics & Performance
  // =====================

  /**
   * Get performance statistics
   */
  getPerformanceStats: async (): Promise<{
    totalBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    averageRating: number;
    responseTime: number;
    completionRate: number;
    totalEarnings: number;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        totalBookings: number;
        completedBookings: number;
        cancelledBookings: number;
        averageRating: number;
        responseTime: number;
        completionRate: number;
        totalEarnings: number;
      }>
    >(apiEndpoints.technician.getPerformanceStats);
    return response.data;
  },

  /**
   * Get dashboard data
   */
  getDashboardData: async (): Promise<{
    profile: TechnicianProfile;
    upcomingBookings: Booking[];
    statistics: any;
    earnings: any;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        profile: TechnicianProfile;
        upcomingBookings: Booking[];
        statistics: any;
        earnings: any;
      }>
    >(apiEndpoints.technician.getDashboardData);
    return response.data;
  },

  // =====================
  // Account & Settings
  // =====================

  /**
   * Get notification settings
   */
  getNotificationSettings: async (): Promise<Record<string, any>> => {
    const response = await api.get<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.technician.getNotificationSettings
    );
    return response.data;
  },

  /**
   * Update notification settings
   */
  updateNotificationSettings: async (
    settings: Record<string, any>
  ): Promise<Record<string, any>> => {
    const response = await api.put<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.technician.updateNotificationSettings,
      settings
    );
    return response.data;
  },

  /**
   * Update service preferences
   */
  updateServicePreferences: async (data: {
    serviceTypes?: string[];
    minAmount?: number;
    maxDistance?: number;
  }): Promise<TechnicianProfile> => {
    const response = await api.put<ApiSuccessResponse<TechnicianProfile>>(
      apiEndpoints.technician.updateServicePreferences,
      data
    );
    return response.data;
  },

  /**
   * Delete account
   */
  deleteAccount: async (data: { password: string; reason?: string }): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.technician.deleteAccount,
      data
    );
    return response.data;
  },

  /**
   * Get account suspension status
   */
  getSuspensionStatus: async (): Promise<{
    isSuspended: boolean;
    reason?: string;
    suspendedUntil?: string;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        isSuspended: boolean;
        reason?: string;
        suspendedUntil?: string;
      }>
    >(apiEndpoints.technician.getSuspensionStatus);
    return response.data;
  },
};
