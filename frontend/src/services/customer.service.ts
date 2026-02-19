import api from './api';
import { apiEndpoints } from '../config/api.config';
import type {
  CustomerProfile,
  Address,
  Booking,
  Wallet,
  ApiSuccessResponse,
  PaginatedResponse,
} from '../types';

/**
 * Customer Service
 * Handles all customer-related API calls including:
 * - Profile management
 * - Address management
 * - Booking history
 * - Favorite technicians
 * - Wallet operations
 */

export const customerService = {
  // =====================
  // Profile Management
  // =====================

  /**
   * Get customer profile
   */
  getProfile: async (): Promise<CustomerProfile> => {
    const response = await api.get<ApiSuccessResponse<CustomerProfile>>(
      apiEndpoints.customer.getProfile
    );
    return response.data;
  },

  /**
   * Update customer profile
   */
  updateProfile: async (data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    profileImage?: string;
    preferences?: Record<string, any>;
  }): Promise<CustomerProfile> => {
    const response = await api.put<ApiSuccessResponse<CustomerProfile>>(
      apiEndpoints.customer.updateProfile,
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
      apiEndpoints.customer.uploadProfilePicture,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },

  /**
   * Get customer preferences
   */
  getPreferences: async (): Promise<Record<string, any>> => {
    const response = await api.get<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.customer.getPreferences
    );
    return response.data;
  },

  /**
   * Update customer preferences
   */
  updatePreferences: async (preferences: Record<string, any>): Promise<Record<string, any>> => {
    const response = await api.put<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.customer.updatePreferences,
      preferences
    );
    return response.data;
  },

  // =====================
  // Address Management
  // =====================

  /**
   * Get all addresses
   */
  getAddresses: async (): Promise<Address[]> => {
    const response = await api.get<ApiSuccessResponse<Address[]>>(
      apiEndpoints.customer.getAddresses
    );
    return response.data;
  },

  /**
   * Get single address
   */
  getAddressDetail: async (addressId: string): Promise<Address> => {
    const response = await api.get<ApiSuccessResponse<Address>>(
      apiEndpoints.customer.getAddressDetail.replace(':id', addressId)
    );
    return response.data;
  },

  /**
   * Add new address
   */
  addAddress: async (data: {
    type: 'home' | 'work' | 'other';
    street: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    isDefault?: boolean;
  }): Promise<Address> => {
    const response = await api.post<ApiSuccessResponse<Address>>(
      apiEndpoints.customer.addAddress,
      data
    );
    return response.data;
  },

  /**
   * Update address
   */
  updateAddress: async (
    addressId: string,
    data: {
      type?: 'home' | 'work' | 'other';
      street?: string;
      city?: string;
      state?: string;
      pincode?: string;
      landmark?: string;
      latitude?: number;
      longitude?: number;
      isDefault?: boolean;
    }
  ): Promise<Address> => {
    const response = await api.put<ApiSuccessResponse<Address>>(
      apiEndpoints.customer.updateAddress.replace(':id', addressId),
      data
    );
    return response.data;
  },

  /**
   * Delete address
   */
  deleteAddress: async (addressId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.customer.deleteAddress.replace(':id', addressId)
    );
    return response.data;
  },

  /**
   * Set default address
   */
  setDefaultAddress: async (addressId: string): Promise<Address> => {
    const response = await api.post<ApiSuccessResponse<Address>>(
      apiEndpoints.customer.setDefaultAddress.replace(':id', addressId),
      {}
    );
    return response.data;
  },

  // =====================
  // Booking History
  // =====================

  /**
   * Get booking history
   */
  getBookingHistory: async (filters?: {
    status?: string;
    startDate?: string;
    endDate?: string;
    serviceType?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Booking>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Booking>>>(
      apiEndpoints.customer.getBookingHistory,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Get upcoming bookings
   */
  getUpcomingBookings: async (): Promise<Booking[]> => {
    const response = await api.get<ApiSuccessResponse<Booking[]>>(
      apiEndpoints.customer.getUpcomingBookings
    );
    return response.data;
  },

  /**
   * Get past bookings
   */
  getPastBookings: async (filters?: {
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Booking>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Booking>>>(
      apiEndpoints.customer.getPastBookings,
      { params: filters }
    );
    return response.data;
  },

  // =====================
  // Favorite Technicians
  // =====================

  /**
   * Get favorite technicians
   */
  getFavoriteTechnicians: async (): Promise<any[]> => {
    const response = await api.get<ApiSuccessResponse<any[]>>(
      apiEndpoints.customer.getFavoriteTechnicians
    );
    return response.data;
  },

  /**
   * Add technician to favorites
   */
  addToFavorites: async (technicianId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.customer.addToFavorites.replace(':id', technicianId),
      {}
    );
    return response.data;
  },

  /**
   * Remove technician from favorites
   */
  removeFromFavorites: async (technicianId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.customer.removeFromFavorites.replace(':id', technicianId)
    );
    return response.data;
  },

  /**
   * Check if technician is favorited
   */
  isFavorite: async (technicianId: string): Promise<{ isFavorite: boolean }> => {
    const response = await api.get<ApiSuccessResponse<{ isFavorite: boolean }>>(
      apiEndpoints.customer.isFavorite.replace(':id', technicianId)
    );
    return response.data;
  },

  // =====================
  // Wallet & Payment
  // =====================

  /**
   * Get wallet info
   */
  getWallet: async (): Promise<Wallet> => {
    const response = await api.get<ApiSuccessResponse<Wallet>>(
      apiEndpoints.customer.getWallet
    );
    return response.data;
  },

  /**
   * Get payment methods
   */
  getPaymentMethods: async (): Promise<any[]> => {
    const response = await api.get<ApiSuccessResponse<any[]>>(
      apiEndpoints.customer.getPaymentMethods
    );
    return response.data;
  },

  // =====================
  // Customer Statistics
  // =====================

  /**
   * Get customer statistics
   */
  getStatistics: async (): Promise<{
    totalBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    totalSpent: number;
    averageRating: number;
    joinDate: string;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        totalBookings: number;
        completedBookings: number;
        cancelledBookings: number;
        totalSpent: number;
        averageRating: number;
        joinDate: string;
      }>
    >(apiEndpoints.customer.getStatistics);
    return response.data;
  },

  /**
   * Get customer dashboard data
   */
  getDashboardData: async (): Promise<{
    profile: CustomerProfile;
    upcomingBookings: Booking[];
    statistics: any;
    recommendations: any[];
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        profile: CustomerProfile;
        upcomingBookings: Booking[];
        statistics: any;
        recommendations: any[];
      }>
    >(apiEndpoints.customer.getDashboardData);
    return response.data;
  },

  // =====================
  // Notifications & Settings
  // =====================

  /**
   * Get notification settings
   */
  getNotificationSettings: async (): Promise<Record<string, any>> => {
    const response = await api.get<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.customer.getNotificationSettings
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
      apiEndpoints.customer.updateNotificationSettings,
      settings
    );
    return response.data;
  },

  /**
   * Get privacy settings
   */
  getPrivacySettings: async (): Promise<Record<string, any>> => {
    const response = await api.get<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.customer.getPrivacySettings
    );
    return response.data;
  },

  /**
   * Update privacy settings
   */
  updatePrivacySettings: async (
    settings: Record<string, any>
  ): Promise<Record<string, any>> => {
    const response = await api.put<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.customer.updatePrivacySettings,
      settings
    );
    return response.data;
  },

  /**
   * Delete account
   */
  deleteAccount: async (data: { password: string; reason?: string }): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.customer.deleteAccount,
      data
    );
    return response.data;
  },
};
