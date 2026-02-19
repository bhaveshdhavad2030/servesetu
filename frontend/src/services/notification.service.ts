import api from './api';
import { apiEndpoints } from '../config/api.config';
import type { ApiSuccessResponse } from '../types';

/**
 * Notification Service
 * Handles all notification-related API calls including:
 * - In-app notifications
 * - Email notifications
 * - SMS notifications
 * - Push notifications
 * - Notification preferences and settings
 */

export const notificationService = {
  // =====================
  // In-App Notifications
  // =====================

  /**
   * Get notifications
   */
  getNotifications: async (filters?: {
    type?: string;
    read?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<{
    notifications: Array<{
      id: string;
      type: string;
      title: string;
      message: string;
      data?: Record<string, any>;
      isRead: boolean;
      createdAt: string;
    }>;
    total: number;
    unreadCount: number;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        notifications: Array<{
          id: string;
          type: string;
          title: string;
          message: string;
          data?: Record<string, any>;
          isRead: boolean;
          createdAt: string;
        }>;
        total: number;
        unreadCount: number;
      }>
    >(apiEndpoints.notifications.getNotifications, { params: filters });
    return response.data;
  },

  /**
   * Mark notification as read
   */
  markAsRead: async (notificationId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.markAsRead.replace(':id', notificationId),
      {}
    );
    return response.data;
  },

  /**
   * Mark all notifications as read
   */
  markAllAsRead: async (): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.markAllAsRead,
      {}
    );
    return response.data;
  },

  /**
   * Delete notification
   */
  deleteNotification: async (notificationId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.deleteNotification.replace(':id', notificationId)
    );
    return response.data;
  },

  /**
   * Delete all notifications
   */
  deleteAllNotifications: async (): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.deleteAllNotifications
    );
    return response.data;
  },

  /**
   * Get unread notification count
   */
  getUnreadCount: async (): Promise<{ count: number }> => {
    const response = await api.get<ApiSuccessResponse<{ count: number }>>(
      apiEndpoints.notifications.getUnreadCount
    );
    return response.data;
  },

  // =====================
  // Notification Preferences
  // =====================

  /**
   * Get notification settings
   */
  getSettings: async (): Promise<{
    email: Record<string, boolean>;
    sms: Record<string, boolean>;
    push: Record<string, boolean>;
    inApp: Record<string, boolean>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        email: Record<string, boolean>;
        sms: Record<string, boolean>;
        push: Record<string, boolean>;
        inApp: Record<string, boolean>;
      }>
    >(apiEndpoints.notifications.getSettings);
    return response.data;
  },

  /**
   * Update notification settings
   */
  updateSettings: async (data: {
    email?: Record<string, boolean>;
    sms?: Record<string, boolean>;
    push?: Record<string, boolean>;
    inApp?: Record<string, boolean>;
  }): Promise<{
    email: Record<string, boolean>;
    sms: Record<string, boolean>;
    push: Record<string, boolean>;
    inApp: Record<string, boolean>;
  }> => {
    const response = await api.put<
      ApiSuccessResponse<{
        email: Record<string, boolean>;
        sms: Record<string, boolean>;
        push: Record<string, boolean>;
        inApp: Record<string, boolean>;
      }>
    >(apiEndpoints.notifications.updateSettings, data);
    return response.data;
  },

  /**
   * Get frequency preferences
   */
  getFrequencyPreferences: async (): Promise<{
    digests: 'never' | 'daily' | 'weekly' | 'monthly';
    realTime: boolean;
    quietHours: { enabled: boolean; startTime?: string; endTime?: string };
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        digests: 'never' | 'daily' | 'weekly' | 'monthly';
        realTime: boolean;
        quietHours: {
          enabled: boolean;
          startTime?: string;
          endTime?: string;
        };
      }>
    >(apiEndpoints.notifications.getFrequencyPreferences);
    return response.data;
  },

  /**
   * Update frequency preferences
   */
  updateFrequencyPreferences: async (data: {
    digests?: 'never' | 'daily' | 'weekly' | 'monthly';
    realTime?: boolean;
    quietHours?: { enabled: boolean; startTime?: string; endTime?: string };
  }): Promise<{
    digests: 'never' | 'daily' | 'weekly' | 'monthly';
    realTime: boolean;
    quietHours: {
      enabled: boolean;
      startTime?: string;
      endTime?: string;
    };
  }> => {
    const response = await api.put<
      ApiSuccessResponse<{
        digests: 'never' | 'daily' | 'weekly' | 'monthly';
        realTime: boolean;
        quietHours: {
          enabled: boolean;
          startTime?: string;
          endTime?: string;
        };
      }>
    >(apiEndpoints.notifications.updateFrequencyPreferences, data);
    return response.data;
  },

  // =====================
  // Email Notifications
  // =====================

  /**
   * Get email notification history
   */
  getEmailHistory: async (filters?: {
    type?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    emails: Array<{
      id: string;
      type: string;
      recipient: string;
      subject: string;
      status: string;
      sentAt: string;
    }>;
    total: number;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        emails: Array<{
          id: string;
          type: string;
          recipient: string;
          subject: string;
          status: string;
          sentAt: string;
        }>;
        total: number;
      }>
    >(apiEndpoints.notifications.getEmailHistory, { params: filters });
    return response.data;
  },

  /**
   * Resend email notification
   */
  resendEmail: async (emailId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.resendEmail.replace(':id', emailId),
      {}
    );
    return response.data;
  },

  // =====================
  // SMS Notifications
  // =====================

  /**
   * Get SMS notification history
   */
  getSMSHistory: async (filters?: {
    type?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    messages: Array<{
      id: string;
      type: string;
      phoneNumber: string;
      message: string;
      status: string;
      sentAt: string;
    }>;
    total: number;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        messages: Array<{
          id: string;
          type: string;
          phoneNumber: string;
          message: string;
          status: string;
          sentAt: string;
        }>;
        total: number;
      }>
    >(apiEndpoints.notifications.getSMSHistory, { params: filters });
    return response.data;
  },

  /**
   * Resend SMS notification
   */
  resendSMS: async (messageId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.resendSMS.replace(':id', messageId),
      {}
    );
    return response.data;
  },

  // =====================
  // Push Notifications
  // =====================

  /**
   * Register device token for push notifications
   */
  registerDeviceToken: async (data: {
    token: string;
    platform: 'ios' | 'android' | 'web';
    deviceName?: string;
  }): Promise<{ deviceId: string }> => {
    const response = await api.post<ApiSuccessResponse<{ deviceId: string }>>(
      apiEndpoints.notifications.registerDevice,
      data
    );
    return response.data;
  },

  /**
   * Unregister device token
   */
  unregisterDeviceToken: async (deviceId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.notifications.unregisterDevice.replace(':id', deviceId)
    );
    return response.data;
  },

  /**
   * Get registered devices
   */
  getRegisteredDevices: async (): Promise<
    Array<{
      deviceId: string;
      platform: string;
      deviceName?: string;
      registeredAt: string;
      lastUsed?: string;
    }>
  > => {
    const response = await api.get<
      ApiSuccessResponse<
        Array<{
          deviceId: string;
          platform: string;
          deviceName?: string;
          registeredAt: string;
          lastUsed?: string;
        }>
      >
    >(apiEndpoints.notifications.getRegisteredDevices);
    return response.data;
  },

  // =====================
  // Notification Digest
  // =====================

  /**
   * Get notification digest
   */
  getDigest: async (period?: 'daily' | 'weekly' | 'monthly'): Promise<{
    notifications: Array<{
      type: string;
      count: number;
      summary: string;
      items: any[];
    }>;
    generatedAt: string;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        notifications: Array<{
          type: string;
          count: number;
          summary: string;
          items: any[];
        }>;
        generatedAt: string;
      }>
    >(apiEndpoints.notifications.getDigest, { params: { period } });
    return response.data;
  },

  // =====================
  // Notification Templates (Admin)
  // =====================

  /**
   * Get notification templates
   */
  getTemplates: async (): Promise<
    Array<{
      id: string;
      name: string;
      type: string;
      channels: string[];
      content: Record<string, string>;
    }>
  > => {
    const response = await api.get<
      ApiSuccessResponse<
        Array<{
          id: string;
          name: string;
          type: string;
          channels: string[];
          content: Record<string, string>;
        }>
      >
    >(apiEndpoints.notifications.getTemplates);
    return response.data;
  },

  /**
   * Preview notification
   */
  previewNotification: async (data: {
    templateId: string;
    variables?: Record<string, any>;
    channel?: 'email' | 'sms' | 'push' | 'inApp';
  }): Promise<{
    subject?: string;
    preview: string;
    rendered: string;
  }> => {
    const response = await api.post<
      ApiSuccessResponse<{
        subject?: string;
        preview: string;
        rendered: string;
      }>
    >(apiEndpoints.notifications.previewNotification, data);
    return response.data;
  },

  // =====================
  // Notification Statistics (Admin)
  // =====================

  /**
   * Get notification statistics
   */
  getStatistics: async (filters?: {
    startDate?: string;
    endDate?: string;
  }): Promise<{
    totalSent: number;
    totalDelivered: number;
    totalFailed: number;
    totalOpened: number;
    totalClicked: number;
    deliveryRate: number;
    openRate: number;
    clickRate: number;
    byType: Record<string, number>;
    byChannel: Record<string, number>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        totalSent: number;
        totalDelivered: number;
        totalFailed: number;
        totalOpened: number;
        totalClicked: number;
        deliveryRate: number;
        openRate: number;
        clickRate: number;
        byType: Record<string, number>;
        byChannel: Record<string, number>;
      }>
    >(apiEndpoints.notifications.getStatistics, { params: filters });
    return response.data;
  },

  /**
   * Send test notification
   */
  sendTestNotification: async (data: {
    channel: 'email' | 'sms' | 'push' | 'inApp';
    recipient?: string;
    templateId?: string;
  }): Promise<{ success: boolean; messageId: string }> => {
    const response = await api.post<
      ApiSuccessResponse<{ success: boolean; messageId: string }>
    >(apiEndpoints.notifications.sendTestNotification, data);
    return response.data;
  },
};
