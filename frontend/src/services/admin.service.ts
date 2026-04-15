import api from './api';
import { apiEndpoints } from '../config/api.config';
import type { User, ApiSuccessResponse, PaginatedResponse } from '../types';

/**
 * Admin Service
 * Handles all admin-related API calls including:
 * - User management
 * - Content moderation
 * - Dashboard analytics
 * - System settings
 * - Dispute resolution
 */

export const adminService = {
  // =====================
  // Dashboard & Analytics
  // =====================

  /**
   * Get admin dashboard data
   */
  getDashboard: async (): Promise<{
    totalUsers: number;
    totalBookings: number;
    totalRevenue: number;
    activeUsers: number;
    bookingsByStatus: Record<string, number>;
    revenueByPeriod: Array<{ date: string; revenue: number }>;
    topTechnicians: any[];
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        totalUsers: number;
        totalBookings: number;
        totalRevenue: number;
        activeUsers: number;
        bookingsByStatus: Record<string, number>;
        revenueByPeriod: Array<{ date: string; revenue: number }>;
        topTechnicians: any[];
      }>
    >(apiEndpoints.admin.getDashboard);
    return response.data;
  },

  /**
   * Get analytics data
   */
  getAnalytics: async (filters?: {
    startDate?: string;
    endDate?: string;
    metric?: string;
  }): Promise<{
    metrics: Record<string, any>;
    charts: Record<string, any>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        metrics: Record<string, any>;
        charts: Record<string, any>;
      }>
    >(apiEndpoints.admin.getAnalytics, { params: filters });
    return response.data;
  },

  /**
   * Get system health
   */
  getSystemHealth: async (): Promise<{
    status: 'healthy' | 'warning' | 'critical';
    services: Record<string, { status: string; uptime: number; errors: number }>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        status: 'healthy' | 'warning' | 'critical';
        services: Record<string, { status: string; uptime: number; errors: number }>;
      }>
    >(apiEndpoints.admin.getSystemHealth);
    return response.data;
  },

  // =====================
  // User Management
  // =====================

  /**
   * Get all users
   */
  getUsers: async (filters?: {
    role?: 'customer' | 'technician' | 'admin';
    status?: string;
    searchQuery?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<User>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<User>>>(
      apiEndpoints.admin.listUsers,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Get user detail
   */
  getUserDetail: async (userId: string): Promise<User> => {
    const response = await api.get<ApiSuccessResponse<User>>(
      apiEndpoints.admin.getUserDetail.replace(':id', userId)
    );
    return response.data;
  },

  /**
   * Suspend user
   */
  suspendUser: async (userId: string, data: { reason: string; duration?: number }): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.suspendUser.replace(':id', userId),
      data
    );
    return response.data;
  },

  /**
   * Unsuspend user
   */
  unsuspendUser: async (userId: string): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.unsuspendUser.replace(':id', userId),
      {}
    );
    return response.data;
  },

  /**
   * Deactivate user account
   */
  deactivateUser: async (userId: string, data: { reason: string }): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.deactivateUser.replace(':id', userId),
      data
    );
    return response.data;
  },

  /**
   * Reactivate user account
   */
  reactivateUser: async (userId: string): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.reactivateUser.replace(':id', userId),
      {}
    );
    return response.data;
  },

  /**
   * Block user
   */
  blockUser: async (userId: string, data: { reason: string }): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.blockUser.replace(':id', userId),
      data
    );
    return response.data;
  },

  /**
   * Unblock user
   */
  unblockUser: async (userId: string): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.unblockUser.replace(':id', userId),
      {}
    );
    return response.data;
  },

  /**
   * Update user role
   */
  updateUserRole: async (userId: string, data: { role: string }): Promise<User> => {
    const response = await api.put<ApiSuccessResponse<User>>(
      apiEndpoints.admin.updateUserRole.replace(':id', userId),
      data
    );
    return response.data;
  },

  // =====================
  // Technician Management
  // =====================

  /**
   * Get technicians list
   */
  getTechnicians: async (filters?: {
    status?: string;
    serviceType?: string;
    minRating?: number;
    searchQuery?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<User>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<User>>>(
      apiEndpoints.admin.listTechnicians,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Verify technician documents
   */
  verifyTechnicianDocuments: async (
    technicianId: string,
    data: {
      documents: { type: string; status: 'approved' | 'rejected'; reason?: string }[];
    }
  ): Promise<User> => {
    const response = await api.post<ApiSuccessResponse<User>>(
      apiEndpoints.admin.verifyTechnicianDocuments.replace(':id', technicianId),
      data
    );
    return response.data;
  },

  /**
   * Get technician verification status
   */
  getTechnicianVerificationStatus: async (technicianId: string): Promise<{
    isVerified: boolean;
    documents: Array<{ type: string; status: string; verifiedAt?: string }>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        isVerified: boolean;
        documents: Array<{ type: string; status: string; verifiedAt?: string }>;
      }>
    >(apiEndpoints.admin.getTechnicianVerificationStatus.replace(':id', technicianId));
    return response.data;
  },

  /**
   * Penalize technician
   */
  penalizeTechnician: async (
    technicianId: string,
    data: { penaltyAmount: number; reason: string; type: string }
  ): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.admin.penalizeTechnician.replace(':id', technicianId),
      data
    );
    return response.data;
  },

  // =====================
  // Booking Management
  // =====================

  /**
   * Get all bookings
   */
  getBookings: async (filters?: {
    status?: string;
    serviceType?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.admin.listBookings,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Cancel booking (admin only)
   */
  cancelBooking: async (
    bookingId: string,
    data: { reason: string; refund: boolean }
  ): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.admin.cancelBooking.replace(':id', bookingId),
      data
    );
    return response.data;
  },

  // =====================
  // Content Moderation
  // =====================

  /**
   * Get content reports
   */
  getContentReports: async (filters?: {
    type?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.admin.getContentReports,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Approve reported content
   */
  approveContent: async (reportId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.admin.approveContent.replace(':id', reportId),
      {}
    );
    return response.data;
  },

  /**
   * Remove reported content
   */
  removeContent: async (reportId: string, data: { reason: string }): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.admin.removeContent.replace(':id', reportId),
      data
    );
    return response.data;
  },

  /**
   * Get flagged reviews
   */
  getFlaggedReviews: async (filters?: {
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.admin.getFlaggedReviews,
      { params: filters }
    );
    return response.data;
  },

  // =====================
  // System Settings
  // =====================

  /**
   * Get system settings
   */
  getSettings: async (): Promise<Record<string, any>> => {
    const response = await api.get<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.admin.getSettings
    );
    return response.data;
  },

  /**
   * Update system settings
   */
  updateSettings: async (settings: Record<string, any>): Promise<Record<string, any>> => {
    const response = await api.put<ApiSuccessResponse<Record<string, any>>>(
      apiEndpoints.admin.updateSettings,
      settings
    );
    return response.data;
  },

  /**
   * Get service categories
   */
  getServiceCategories: async (): Promise<
    Array<{ id: string; name: string; description: string; active: boolean }>
  > => {
    const response = await api.get<
      ApiSuccessResponse<
        Array<{ id: string; name: string; description: string; active: boolean }>
      >
    >(apiEndpoints.admin.getServiceCategories);
    return response.data;
  },

  /**
   * Add service category
   */
  addServiceCategory: async (data: {
    name: string;
    description: string;
  }): Promise<{ id: string; name: string; description: string }> => {
    const response = await api.post<
      ApiSuccessResponse<{ id: string; name: string; description: string }>
    >(apiEndpoints.admin.addServiceCategory, data);
    return response.data;
  },

  /**
   * Update service category
   */
  updateServiceCategory: async (
    categoryId: string,
    data: { name?: string; description?: string; active?: boolean }
  ): Promise<{ id: string; name: string; description: string }> => {
    const response = await api.put<
      ApiSuccessResponse<{ id: string; name: string; description: string }>
    >(
      apiEndpoints.admin.updateServiceCategory.replace(':id', categoryId),
      data
    );
    return response.data;
  },

  // =====================
  // Reports & Exports
  // =====================

  /**
   * Generate report
   */
  generateReport: async (data: {
    type: 'users' | 'bookings' | 'revenue' | 'disputes' | 'technicians';
    format: 'pdf' | 'csv' | 'excel';
    filters?: Record<string, any>;
  }): Promise<{ reportId: string; downloadUrl: string }> => {
    const response = await api.post<
      ApiSuccessResponse<{ reportId: string; downloadUrl: string }>
    >(apiEndpoints.admin.generateReport, data);
    return response.data;
  },

  /**
   * Get report status
   */
  getReportStatus: async (reportId: string): Promise<{
    status: 'pending' | 'processing' | 'completed' | 'failed';
    progress?: number;
    downloadUrl?: string;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        status: 'pending' | 'processing' | 'completed' | 'failed';
        progress?: number;
        downloadUrl?: string;
      }>
    >(apiEndpoints.admin.getReportStatus.replace(':id', reportId));
    return response.data;
  },

  /**
   * Export data
   */
  exportData: async (data: {
    dataType: 'users' | 'bookings' | 'transactions';
    format: 'csv' | 'excel' | 'json';
    filters?: Record<string, any>;
  }): Promise<Blob> => {
    const response = await api.post<Blob>(
      apiEndpoints.admin.exportData,
      data,
      { responseType: 'blob' }
    );
    return response;
  },

  // =====================
  // Notifications
  // =====================

  /**
   * Send bulk notification
   */
  sendBulkNotification: async (data: {
    userIds?: string[];
    role?: string;
    title: string;
    message: string;
    type?: string;
  }): Promise<{ notificationId: string; sentCount: number }> => {
    const response = await api.post<
      ApiSuccessResponse<{ notificationId: string; sentCount: number }>
    >(apiEndpoints.admin.sendBulkNotification, data);
    return response.data;
  },

  /**
   * Get notification templates
   */
  getNotificationTemplates: async (): Promise<
    Array<{ id: string; name: string; content: string }>
  > => {
    const response = await api.get<
      ApiSuccessResponse<Array<{ id: string; name: string; content: string }>>
    >(apiEndpoints.admin.getNotificationTemplates);
    return response.data;
  },

  /**
   * Update notification template
   */
  updateNotificationTemplate: async (
    templateId: string,
    data: { content: string }
  ): Promise<{ id: string; name: string; content: string }> => {
    const response = await api.put<
      ApiSuccessResponse<{ id: string; name: string; content: string }>
    >(
      apiEndpoints.admin.updateNotificationTemplate.replace(':id', templateId),
      data
    );
    return response.data;
  },
};
